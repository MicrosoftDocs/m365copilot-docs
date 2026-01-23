---
title: Microsoft 365 Copilot Retrieval API Overview (Preview)
description: "Use the Microsoft 365 Copilot Retrieval API to ground your AI solutions with accurate, secure, and contextually relevant data from SharePoint, OneDrive, and Copilot connectors."
author: lramosvea
ms.author: lramosvea
ms.localizationpriority: medium
ms.date: 01/23/2026
ms.topic: overview
---

# Overview of the Microsoft 365 Copilot Retrieval API

The Microsoft 365 Copilot APIs provide access to components that power Copilot experiences, unlocking the ability to enhance your custom engine agents and generative AI solutions with Microsoft 365 Copilot capabilities. The Microsoft 365 Copilot Retrieval API allows you to ground your generative AI solutions with your Microsoft 365 and non-Microsoft knowledge by returning relevant text chunks from the hybrid index that powers Microsoft 365 Copilot.

The Retrieval API offers a streamlined solution for Retrieval Augmented Generation (RAG) without the need to replicate, index, chunk, and secure your data in a separate index. The API understands the user's context and intent and performs query transformations to yield the most relevant results, which is more difficult to achieve with lexical search or even basic RAG from alternate sources.

RAG is essential when you're building generative AI solutions and want to use Microsoft 365 knowledge. When you implement RAG, your solutions can provide more accurate, contextually relevant responses grounded in the vast repository of your organizational data. The Retrieval API accomplishes RAG by extracting up-to-date and relevant text snippets from SharePoint, OneDrive, and Copilot connectors. The Retrieval API keeps your data in place and upholds your access and governance controls. The Retrieval API ensures that synthesized responses are informed by the latest and most relevant data. This process enhances the reliability and usefulness of your generative AI solutions.

To explore the API, [try a query in Graph Explorer](https://aka.ms/try_copilot_retrieval_API_overview).

## Why use the Retrieval API?

The Retrieval API offers a secure and compliant way to retrieve relevant text chunks from SharePoint, OneDrive, and Copilot connectors while optimizing for context recall. Thus, you don't need to to egress data, break permissions, or compromise on security and compliance.

Custom knowledge applications can use the Retrieval API to ground responses on organization-specific information stored in SharePoint, OneDrive, and Copilot connectors. Rather than building and maintaining separate vector indexes, these applications can instead retrieve relevant context from Microsoft 365 data sources to ground large language model (LLM) responses the same way that Microsoft 365 Copilot does.

Finance and legal applications that require high precision in information retrieval can use the API's filtering capabilities to scope searches to specific document libraries or content types, ensuring responses only include approved sources while respecting information barriers and access controls.

Multi-source applications can combine SharePoint and OneDrive content with information from Microsoft 365 Copilot connectors, creating a unified knowledge base that spans both Microsoft 365 and third-party repositories while maintaining consistent security and compliance controls.

Imagine a consulting firm that specializes in providing tailored solutions for their clients, with a significant portion of their work focused on data stored in SharePoint. The firm is developing a custom engine agent to assist their consultants in preparing for important client meetings. This agent must access and retrieve accurate and up-to-date information from SharePoint. The firm works with two major clients who are direct competitors in the market. Hence, the firm has a critical need to maintain rigorous security and compliance standards to ensure that one client's documents and data are never accessible to the other. The Retrieval API helps the firm manage compliance and safety risks and ensure the relevance and freshness of the data and in turn, simplifies the overall development effort.

### Manage compliance and safety risks

The Retrieval API uses the built-in security and compliance features in Microsoft 365 to ensure that data source permissions and compliance settings are preserved. By retrieving data in place, it prevents data leaks and ensures that sensitive information from one client is never accessible to another, which is essential for maintaining strict security and compliance standards. Within an organization, the permissions model in Microsoft 365 ensures that individuals can only get results from the content they are allowed to access.

### Solve for relevancy and freshness

Because the Retrieval API retrieves relevant context without data duplication, its results are kept fresh and relevant, and it eliminates the need to maintain separate, costly data pipelines.

### Lower cost of ownership and development effort

The Retrieval API eliminates the need to build a secure data export and indexing pipeline that can incur significant costs for organizations. The API supports the following required capabilities:

- Search provider management
- Crawlers
- Data connectors
- Data storage
- Content parsers
- Indexing
- Security

Organizations can use these built-in features to avoid expenses and complexities, and maintain stringent access controls and compliance within Microsoft 365.

## Retrieval API capabilities

The Retrieval API allows you to retrieve data from the following data sources:

- SharePoint
- OneDrive
- Copilot connectors

The API supports natural language queries and uses the Microsoft 365 Copilot stack to retrieve relevant grounding context within the Microsoft 365 trust boundary. You can use the API to scope your retrieval using Keyword Query Language (KQL) to retrieve from the most important content for your use case. With KQL, you can filter by URLs, date ranges, file types, and more.

## Licensing

The Retrieval API is available at no extra cost to users with a Microsoft 365 Copilot add-on license. By accessing or using the Microsoft 365 Copilot Retrieval API, you're agreeing to the [Microsoft 365 Copilot APIs Terms of Use (preview)](/legal/m365-copilot-apis/terms-of-use?context=/microsoft-365-copilot/extensibility/context).

For users without a Microsoft 365 Copilot add-on license, the Retrieval API is available via pay-as-you-go consumption (preview) for tenant-level data sources such as SharePoint and Copilot connectors. User-level data sources such as OneDrive are not supported. 

> [!NOTE]
> Retrieval API pay-as-you-go consumption is currently a preview feature. When you access or use Microsoft 365 Copilot Retrieval API pay-as-you-go consumption, you agree to the [Microsoft 365 Copilot Retrieval API pay-as-you-go Terms of Use (preview)](/legal/m365-retrieval-paygo-tou/paygo-retrieval-terms).

Non-Copilot licensed users who have pay-as-you-go enabled for the Retrieval API can use the SharePoint tool in Microsoft Foundry via pay-as-you-go consumption.

For more information about how to enable and disable pay-as-you-go consumption of the Retrieval API, as well as pricing, see [Retrieval API pay-as-you-go overview](paygo-retrieval.md).

## Best practices

The following best practices are applicable to both unfiltered queries (queries without a **filterExpression**) and filtered queries (queries with a **filterExpression**):

- The results and extracts returned by the Retrieval API are unordered. For this reason, we recommend that you don't limit the **maximumNumberOfResults** unless you have strict requirements for how many tokens your LLM can consume.
- Send all extracts returned by the Retrieval API to your LLM/orchestrator for answer generation.
- Avoid generic queries that might apply to a wide variety of content.
- Provide as much context in the query as possible.
- Your **queryString** should be a single sentence.
- Avoid spelling errors in context-rich keywords when you construct your **queryString**.

Apply the following best practice to filtered queries (queries with a **filterExpression**):

- If you want to filter using the **path** parameter in SharePoint or OneDrive, don't use a sharing link or copy the URL from the address bar. Instead, go to the location of the folder or file in SharePoint or OneDrive online and choose the three dots to open **More Actions**. Scroll down in the pane and choose **Details**. From there, you can scroll down the left navigation pane to find and copy the path.

## Known limitations

The following are the current throttling and other limitations to the Retrieval API:

- You need the **Files.Read.All** and **Sites.Read.All** permissions to retrieve SharePoint content using the Retrieval API.
- You need the **Files.Read.All** and **Sites.Read.All** permissions to retrieve OneDrive content using the Retrieval API.
- You need the **ExternalItem.Read.All** permission to retrieve Copilot connectors content using the Retrieval API.
- The Retrieval API is optimized for context recall.
- The **queryString** request parameter has a limit of 1,500 characters.
- You must retrieve from one data source at a time using the **dataSource** request parameter. Interleaved results are not supported.
- If the **filterExpression** request parameter has incorrect KQL syntax, the query successfully executes with no scoping.
- Not all SharePoint and OneDrive properties are supported in the **filterExpression**. For a list of supported properties, see the  [API reference](copilotroot-retrieval.md).
- The **maximumNumberOfResults** request parameter has a maximum value of 25.
- The **relevanceScore** in the response payload measures the cosine similarity between the **queryString** and the extract, normalized to the 0-1 range.
- It is possible for an extract to be returned without a **relevanceScore** when retrieving from Copilot connectors.
- Up to 200 requests per user per hour are supported.
- Retrieval from text in tables is limited to **.doc, .docx, and .pptx** files in OneDrive and SharePoint.
- Retrieval from nontextual content, including images and charts, is not supported.
- Results from files with .docx, .pptx, and .pdf extensions that are larger than 512 MB are not supported. Results from files with any other extension that are larger than 150 MB are not supported.
- If retrieving from SharePoint or OneDrive, semantic retrieval and hybrid retrieval is only supported for **.doc, .docx, .pptx, .pdf, .aspx, and .one** file extensions. All other file extensions only support lexical retrieval.
- The Retrieval API is subject to all limitations of the [Microsoft 365 Copilot semantic index](/microsoftsearch/semantic-index-for-copilot).
- If **retrievalHits** in the response payload is empty, then no relevant results were found.

## Next step

> [!div class="nextstepaction"]
> [Retrieve data](copilotroot-retrieval.md)
