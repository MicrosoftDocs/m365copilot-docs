---
title: Build Microsoft Graph Connectors for Microsoft 365 Copilot
description: Extend Microsoft 365 Copilot with Microsoft Graph connectors
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: overview
ms.localizationpriority: medium
ms.date: 01/15/2025
---

# Microsoft Graph connectors for Microsoft 365 Copilot

Microsoft Graph connectors provide a platform for you to ingest your unstructured, line-of-business data into Microsoft Graph, so that Microsoft 365 Copilot can reason over the entirety of your enterprise content. Content ingested through Microsoft Graph connectors is added to Microsoft Graph; this unlocks semantic understanding of your users' prompts in Microsoft 365 Copilot. However, Microsoft Graph connectors are not limited to Microsoft 365 Copilot. Microsoft Graph connector content powers other Microsoft 365 intelligent experiences like Microsoft Search, Context IQ, and the Microsoft 365 Copilot app.

> [!NOTE]
>
> To learn more about pre-built Microsoft Graph connectors, see [Pre-built Microsoft Graph connectors](/microsoftsearch/pre-built-connectors-overview).

This article describes how Microsoft Graph connector contents are part of Microsoft 365 Copilot and how you can configure your custom Microsoft Graph connections for Microsoft 365 Copilot.

For a summary of how Microsoft Graph connectors make your data available to Microsoft 365 intelligent experiences, see the [infographic](https://cdn.graph.office.net/prod/media/graph/connectors/Teams-Copilot_Graph-connectors-infographic_110623.pdf).

## How Microsoft Graph connector content surfaces in Microsoft 365 Copilot

When you use Microsoft Graph connectors to ingest your external content into Microsoft Graph, your users can find, summarize, and learn from your line-of-business data through natural language prompts in Microsoft 365 Copilot.

:::image type="content" source="assets/images/connectors-copilot-response.png" alt-text="A screenshot of Microsoft Graph connectors in Microsoft 365 Copilot" lightbox="assets/images/connectors-copilot-response.png":::

In addition, users can hover over in-text citations in Microsoft 365 Copilot responses to get a preview of the external item referenced.

![A screenshot of hovering over a Graph connectors response in Microsoft 365 Copilot](assets/images/connectors-copilot-hover.png)

If users want to dive deeper into the referenced content, they can select one of the reference links at the bottom of the response.

![A screenshot of Graph connectors reference list in Microsoft 365 Copilot](assets/images/connectors-copilot-logo.png)

## Microsoft Graph connector semantic indexing

Semantic indexing optimizes the way data is indexed and retrieved from various sources to help search experiences access data and return more relevant results. Microsoft Graph connectors use semantic indexing to enable more efficient and meaningful data retrieval. 

Semantic indexing allows for:

- Improved matching of search queries to content to provide more relevant search results than simple keyword (lexical) matches.
- Enhanced search results that include both exact and approximate matches.
- Contextual understanding to support complex queries that require an understanding of relationships between data.

Currently, the following properties, which are common across all connectors, are indexed:

- **Title** - The title of the item.
- **Content** - The body of the item. This varies by connector.

Custom connectors are semantically indexed as well. To take full advantage of semantic indexing in your custom connectors, include the relevant content that you want to be indexed in the **title** and **content** properties.

The following search scenarios benefit from semantic indexing:

- Topic and keyword-based searches
- Searches that require approximate matches
- Searches that require the system to understand context and relationships

Semantic indexing doesn't benefit the following scenarios:

- Queries that don't include keywords or topics, such as "find bugs assigned to" or "Find items created by".
- Queries that involve multiple parameters, such as an assignee and a topic.
- Queries for a total number of results. The system currently only returns a maximum of 10 results in a semantic or lexical search. Relevance and synthesis can also reduce the number of results returned.

> [!NOTE]
> Semantic labels are used for filtering results; they don't affect the semantic indexing of the property

## Microsoft Graph connectors gallery

The [Microsoft Graph connectors gallery](https://www.microsoft.com/microsoft-search/connectors) includes a brief description of each of the connectors created by Microsoft and our partners, and a link to each partner's website.

With more than 100 connectors currently available, you can connect to popular Microsoft and non-Microsoft services such as Azure services, Box, Confluence, Google services, MediaWiki, Salesforce, ServiceNow, and many more.

## Create your own custom Microsoft Graph connection

You can use the [Microsoft Graph connectors APIs](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context) to build custom Microsoft Graph connections that index content from line-of-business data sources into Microsoft Graph. You can use the Microsoft Graph connectors APIs to create and manage external Microsoft Graph connections, define, and register the schema of external data types, ingest external data items into Microsoft Graph, and sync external groups.

## Requirements for Microsoft Graph connectors

To build Microsoft Graph connectors, you must have a search administrator in your organization do the following:

- [Register an application](/graph/toolkit/get-started/add-aad-app-registration) and [grant admin consent](/graph/connecting-external-content-deploy-teams#update-microsoft-graph-permissions) for the required Microsoft Graph permissions in **Microsoft Entra admin center** ([entra.microsoft.com](https://entra.microsoft.com/)). 
    - This might not be an option if you're working in a production environment. Any deployed Microsoft Graph connector is accessible tenant-wide unless the external items security is locked down.
- Make sure that Microsoft Graph connections that you intend for Microsoft Search and Microsoft 365 Copilot are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) via the **Search & intelligence** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

## Configuring your custom Microsoft Graph connection for Microsoft 365 Copilot

To make sure that Microsoft 365 Copilot uses your content effectively:

- Apply [semantic labels](/graph/connecting-external-content-manage-schema). Semantic labels help Microsoft 365 Copilot interpret the semantic meaning of your schema. Apply as many of them to your schema as applicable. The `iconUrl`, `title`, and `url` labels must be applied for content to surface in Copilot. Currently, only the `title` semantic label can be used in prompts in Microsoft 365 Copilot. However, more semantic labels will be supported as the platform evolves, so applying all applicable labels will prevent you from needing to recreate your schema in the future.
- Ingest content relevant to external items as text. Users can query against the content property of external items in Microsoft 365 Copilot. Microsoft 365 Copilot performs better on content rich items.
- Add a [urlToItemResolver](/graph/api/resources/externalconnectors-urltoitemresolverbase) in [activitySettings](/graph/api/resources/externalconnectors-activitysettings) when you [create your connection](/graph/connecting-external-content-manage-connections#create-a-connection). A `urlToItemResolver` enables the platform to detect when users share URLs from your external content with each other. Microsoft 365 Copilot has a higher likelihood of displaying content that has been shared with that user.
- Add [user activities](/graph/api/externalconnectors-externalitem-addactivities) on your items. For a list of supported activity types, see [externalActivity](/graph/api/resources/externalconnectors-externalactivity). Items that have more activities are boosted in importance.
- Provide meaningful descriptions in the `description` property when [creating connections](/graph/api/externalconnectors-external-post-connections). Rich descriptions improve the likelihood of displaying content in Copilot.

In addition, search administrators must ensure that your Microsoft Graph connector connections are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) by using the following steps:

- In the [Admin Center](https://admin.microsoft.com/), go to **Search & intelligence** > **Customizations** > **Verticals** and select **All**.

- Select **Manage connector result**. Ensure that **Show results inline** is selected and that the connections that you want to enable for Search and Copilot are checked.

## Related content

- [Microsoft Graph connectors overview video](https://www.youtube.com/embed/17rAOh9313g)
- [Microsoft Graph connectors APIs](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context)
