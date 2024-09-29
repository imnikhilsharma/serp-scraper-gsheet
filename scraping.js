function IMPORTFROMGOOGLE(query, dateRange) {
  const apiKey = 'AIzaSyBKp-GBEY6WLBOthlrgAOcICtOFQkH4ggU';
  const cxId = '848f1b45fd37742ee';
  const results = [];
  let start = 1;
  const maxResults = 100; // Maximum results you want to retrieve
  const resultsPerPage = 10; // Number of results per request
  
  const dateFilters = {
    "any time": "", // No filter
    "past hour": "date:r:now-1h..now",
    "past 24 hours": "date:r:now-1d..now",
    "past week": "date:r:now-7d..now",
    "past month": "date:r:now-1m..now",
    "past year": "date:r:now-1y..now"
  };

  // Ensure dateRange is defined and convert to lowercase
  dateRange = dateRange || "any time"; // Default to "any time" if not provided
  const sort = dateFilters[dateRange.toLowerCase()] || "";
  
  try {
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cxId}&start=${start}&sort=${sort}`;
    while (start <= maxResults) {
      Logger.log(`Search URL: ${searchUrl}`);
      const response = UrlFetchApp.fetch(searchUrl);
      const data = JSON.parse(response.getContentText());
      Logger.log(data);
      
      if (data.items) {
        const urls = data.items.map(item => [item.link]);
        results.push(...urls);
      } else {
        break; // No more results
      }
      
      start += resultsPerPage; // Move to the next page of results
    }
  } catch (e) {
    Logger.log(`Error: ${e.message}`);
    if (e.message.includes('Quota exceeded')) {
      Logger.log('Quota exceeded for the day. Please try again tomorrow.');
      return [['Quota exceeded for the day. Please try again tomorrow.']];
    } else {
      throw e; // Re-throw other errors
    }
  }

  // If no results found using Custom Search API, fall back to scraping Google search results
  if (results.length === 0) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbs=qdr:${dateRange}`;
    Logger.log(`Fallback Search URL: ${searchUrl}`);
    const response = UrlFetchApp.fetch(searchUrl);
    const content = response.getContentText();
    Logger.log(content);
    const matches = content.match(/<a href="\/url\?q=(.*?)&amp;sa=U&amp;ved=/g);
    
    if (matches) {
      const urls = matches.map(function(url) {
        return [url.match(/<a href="\/url\?q=(.*?)&amp;sa=U&amp;ved=/)[1]];
      });
      results.push(...urls);
    } else {
      return [["No results found."]];
    }
  }

  // Return results in a 2D array to fit into the Google Sheets cell format
  return results;
}
