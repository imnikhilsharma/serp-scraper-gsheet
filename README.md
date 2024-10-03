# Google Search Results Exporter Script

The **Google Search Results Exporter** is a Google Apps Script designed to fetch and export search results from Google using the [Custom Search API](https://developers.google.com/custom-search/v1/overview)
. This powerful tool is ideal for SEO professionals, marketers, and content creators who want to gain insights into their industry and competitors.

## Table of Contents

- [What is This Script?](#what-is-this-script)
- [Why This Script?](#why-this-script)
- [How to Use This Script](#how-to-use-this-script)
- [Expected Outputs](#expected-outputs)
- [Example Usage](#example-usage)
- [License](#license)

## What is This Script?

This script enables users to retrieve search results from Google directly into a Google Sheet. It allows for the collection of data related to specific queries, providing a streamlined way to gather insights and analyze search trends.

## Why This Script?

The Google Search Results Exporter script is invaluable for several reasons:

- **SEO Competitor Analysis**: Understand what keywords your competitors are ranking for and what content is gaining traction.
- **Trending Blog Topics**: Discover the latest topics in your niche to help inform your content strategy.
- **Backlink Opportunities**: Identify potential sites for backlinking by analyzing search results relevant to your industry.

## How to Use This Script

1. **Set Up the Script**:
   - Open Google Sheets.
   - Navigate to `Extensions` > `Apps Script`.
   - Copy and paste the provided code into the script editor.

2. **API Configuration**:
   - Replace `Your API KEY` and `Your Custom Search Engine ID` in the script with your actual `Your API KEY` and [Custom Search Engine Id](https://support.google.com/programmable-search/answer/12499034?hl=en) from Google.

3. **Using the Function**:
   - In your Google Sheet, you can utilize the function like this:
     ```plaintext
     =IMPORTFROMGOOGLE("your search query", "date range")
     ```
   - You can specify a date range to filter your search results.

## Expected Outputs

When you run the script, you'll receive a list of URLs that match your search query. The data fetched can help you achieve the following:

- **Analyze Competitors**: Gain insights into your competitors' content strategies.
- **Identify Trending Topics**: Stay updated on what's popular in your industry.
- **Explore Backlink Opportunities**: Find potential sites for collaboration and backlinking.

## Example Usage

To use the script effectively, leverage Google search operators to refine your queries. Here’s an example of how to use the function:

```plaintext
=IMPORTFROMGOOGLE("site:.com AND inurl:blog AND marketing video production", "past month")
```

This query retrieves blog posts related to "marketing video production" from `.com` domains published in the past month.

## License

This script is open-source and free to use. Please make sure to adhere to Google's API usage policies when utilizing this script.

---

Feel free to reach out if you have any questions or need assistance!
