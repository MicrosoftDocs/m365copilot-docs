---
title: Microsoft 365 Copilot Search API Overview (Preview)
<<<<<<< HEAD
description: "Use the Microsoft 365 Copilot Search API to perform hybrid search (semantic and lexical) across OneDrive for Business content using natural language queries with contextual understanding and intelligent results."
=======
description: Use the Microsoft 365 Copilot Search API to perform semantic search across OneDrive content using natural language queries with contextual understanding and intelligent results.
>>>>>>> 52df5f596c23013daf97b0aef586d559239de928
author: apiarya
ms.author: swapnilsapar
ms.localizationpriority: medium
ms.date: 10/16/2025
ms.topic: conceptual
---

# Overview of the Microsoft 365 Copilot Search API (preview)

<<<<<<< HEAD
The Microsoft 365 Copilot APIs provide access to components that power Copilot experiences, unlocking the ability to enhance your custom engine agents and generative AI solutions with Microsoft 365 Copilot capabilities. The Microsoft 365 Copilot Search API enables developers to perform hybrid search (lexical and semantic) across OneDrive for Business content using natural language queries that understand context and intent, returning relevant documents and files. Other data sources such as SharePoint, Copilot Connectors, and more are not currently supported by the Search API, but will be added in future releases.
=======
The Microsoft 365 Copilot APIs provide access to components that power Copilot experiences. With these APIs, you can enhance your custom engine agents and generative AI solutions with Copilot capabilities. The Copilot Search API enables developers to perform semantic search across OneDrive content by using natural language queries that understand context and intent. It returns relevant documents and files.
>>>>>>> 52df5f596c23013daf97b0aef586d559239de928

The Search API offers a streamlined solution for semantic document discovery without the need to replicate, index, or manage your data in a separate search infrastructure. The API applies natural language processing to understand query intent and performs intelligent result ranking to yield the most relevant documents. Achieving this relevancy is more difficult with traditional keyword-based search approaches.

Semantic search is essential when you're building intelligent knowledge discovery solutions and want to surface Microsoft 365 content. When you implement semantic search, your solutions can provide more accurate, contextually relevant document discovery grounded in the vast repository of your organizational data. The Search API accomplishes this by providing relevant files, file previews, and file metadata from OneDrive for Business content. The Search API keeps your data in place and upholds your access and governance controls. The Search API ensures that search results are informed by the latest and most relevant content. This process enhances the reliability and usefulness of your custom AI-powered search applications.

[Try your first Search API query in Graph Explorer](https://aka.ms/try_copilot_search_API_example_basic).

## Why use the Search API?

The Search API offers a secure and compliant way to perform hybrid search (semantic and lexical) across OneDrive for Business content while optimizing for contextual relevance and user intent understanding. Thus, you don't need to egress data, break permissions, or compromise on security and compliance.

<<<<<<< HEAD
Custom AI-powered search applications can use the Search API to discover documents stored in OneDrive. Rather than building and maintaining separate search indexes, these applications can instead leverage hybrid search capabilities from Microsoft 365 data sources to surface relevant content the same way that Microsoft 365 Copilot Search does.
=======
Custom AI-powered search applications can use the Search API to discover documents stored in OneDrive. Rather than building and maintaining separate search indexes, these applications can instead apply semantic search capabilities from Microsoft 365 data sources to surface relevant content the same way that Microsoft 365 Copilot Search does.
>>>>>>> 52df5f596c23013daf97b0aef586d559239de928

Enterprise knowledge applications that require intelligent document discovery can use the API's filtering capabilities to scope searches to specific OneDrive paths or folders. This approach ensures results only include approved sources while respecting information barriers and access controls.

Document-centric applications can combine semantic understanding with path-based filtering to create intuitive search experiences that help users find the right documents quickly based on natural language descriptions rather than exact keyword matches.

Imagine a financial services firm that stores critical client documents and research reports in OneDrive. The firm is developing a custom application to help their analysts quickly find relevant documents when preparing client presentations. This application must access and search through thousands of documents stored across different OneDrive folders. The firm works with multiple clients in similar market segments, making it crucial to find the most relevant documents quickly while maintaining strict security and compliance standards. The Search API helps the firm build intelligent search capabilities that understand context and intent while ensuring secure, compliant access to organizational knowledge.

### Manage compliance and safety risks

The Search API uses the built-in security and compliance features in Microsoft 365 to ensure that data source permissions and compliance settings are preserved. By searching data in place, it prevents data leaks and ensures that sensitive information is only accessible to authorized users. This capability is essential for maintaining strict security and compliance standards. Within an organization, Microsoft 365's permissions model ensures individuals can only get results from the content they're allowed to access.

### Solve for relevancy and freshness

<<<<<<< HEAD
Because the Search API performs hybrid search directly on OneDrive for Business content without data duplication, its results are kept fresh and relevant, and it eliminates the need to maintain separate, costly search infrastructures.
=======
Because the Search API performs semantic search directly on OneDrive content without data duplication, its results are kept fresh and relevant. It eliminates the need to maintain separate, costly search infrastructures.
>>>>>>> 52df5f596c23013daf97b0aef586d559239de928

### Lower cost of ownership and development effort

The Search API eliminates the need to build a secure data export and search indexing pipeline that can incur significant costs for organizations. The API supports the following required capabilities, including:

- Hybrid (semantic and lexical) search capabilities
- Natural language processing
- Content indexing
- Data storage
- Path-based filtering
- Security and compliance

Use these built-in features to avoid expenses and complexities, and maintain stringent access controls and compliance within Microsoft 365.

## Search API capabilities

The Search API allows you to search data from the following data sources:

- OneDrive for Business content

The API supports natural language queries and uses semantic understanding to search through OneDrive content within the Microsoft 365 trust boundary. You can use the API to scope your search using [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) path expressions to search within the most important folders for your use case. With path filtering, you can restrict searches to specific OneDrive locations while maintaining hybrid search capabilities.

## Licensing

The Search API is available at no extra cost to users with a Microsoft 365 Copilot license add-on. Support for users without a Microsoft 365 Copilot add-on license isn't currently available.

## Best practices

The following best practices apply to both unfiltered queries (queries without a `filterExpression`) and filtered queries (queries with a `filterExpression`):

- The Search API returns results ordered by relevance.
- Use all search results returned by the Search API for comprehensive document discovery.
- Avoid overly generic queries that might apply to a wide variety of content.
- Provide as much context in the query as possible for better semantic understanding.
- Make your `query` descriptive and natural language-based.
- Avoid spelling errors in important keywords when you construct your `query`.

Apply the following best practice to filtered queries (queries with a `filterExpression`):

- For the `path` parameter, use the full OneDrive path as shown in the file or folder's details pane (not a sharing link or browser address). For example: `https://contoso-my.sharepoint.com/personal/username_domain_com/Documents/Project/Report.docx`.

## Known limitations

The following limitations currently apply to the Search API:

- The Search API is optimized for semantic document discovery.
- The `query` request parameter has a limit of 1,500 characters.
- Currently only OneDrive is supported as a data source. SharePoint, Copilot Connectors, and other data sources will be added in future releases.
- Only `path` expressions are supported in `filterExpression`. More [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) properties might be supported in future releases.
- The `pageSize` request parameter has a maximum value of 100.
- Up to 200 requests per user per hour are supported.
- Semantic search from nontextual content, including tables, images, and charts, isn't supported.
- Results from files with .docx, .pptx, and .pdf extensions that are larger than 512 MB aren't supported. Results from files with any other extension that are larger than 150 MB aren't supported.
- The Search API is subject to all limitations of the [Microsoft 365 Copilot semantic index](/microsoftsearch/semantic-index-for-copilot).
- If `searchHits` in the response payload is empty, then no relevant results were found.

## Next step

> [!div class="nextstepaction"]
> [Use the Search API](copilotroot-search.md)

## Related content

- [Try with Graph explorer](https://aka.ms/try_copilot_search_API_example_basic)
