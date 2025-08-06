---
title: Microsoft 365 Copilot Connectors Overview
description: Extend the knowledge in Microsoft 365 Copilot with Copilot connectors.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: overview
ms.localizationpriority: medium
ms.date: 07/21/2025
---

# Microsoft 365 Copilot connectors overview

Microsoft 365 Copilot connectors provide a platform for you to ingest your unstructured, line-of-business data into Microsoft Graph, so that Microsoft 365 Copilot can reason over the entirety of your enterprise content. Content ingested through Copilot connectors is added to Microsoft Graph; this unlocks semantic understanding of your users' prompts in Microsoft 365 Copilot. However, Copilot connectors are not limited to Microsoft 365 Copilot. Copilot connector content powers other Microsoft 365 intelligent experiences like Microsoft Search, Context IQ, and the Microsoft 365 Copilot app.

This article describes how Copilot connector contents are part of Microsoft 365 Copilot and how you can configure your custom Microsoft Graph connections for Microsoft 365 Copilot.

> [!NOTE]
>
> Copilot connectors are available in the global service and in Government Community Cloud (GCC) and Government Community Cloud High (GCCH) environments. They are not available in Department of Defense (DoD) environments.

## How Copilot connector content surfaces in Microsoft 365 Copilot

When you use Copilot connectors to ingest your external content into Microsoft Graph, your users can find, summarize, and learn from your line-of-business data through natural language prompts in Microsoft 365 Copilot.

In addition, users can hover over in-text citations in Microsoft 365 Copilot responses to get a preview of the external item referenced.

![A screenshot of hovering over a Copilot connectors response in Microsoft 365 Copilot](assets/images/connectors-copilot-hover.png)

If users want to dive deeper into the referenced content, they can select one of the reference links at the bottom of the response.

![A screenshot of Copilot connectors reference list in Microsoft 365 Copilot](assets/images/connectors-copilot-logo.png)

## Copilot connector semantic indexing

Copilot connectors use semantic indexing to enable more efficient and meaningful data retrieval. Semantic indexing optimizes the way data is indexed and retrieved from various sources to help search experiences access data and return more relevant results.

Semantic indexing in Copilot connectors allows for:

- Improved matching of search queries to content to provide more relevant search results than simple keyword (lexical) matches.
- Enhanced search results that include both exact and approximate matches.
- Contextual understanding to support complex queries that require an understanding of relationships between data.

Currently, the following properties, which are common across all connectors, are indexed:

- **Title** - The title of the item.
- **Content** - The body of the item. This varies by connector.

Custom connectors are semantically indexed as well. To take full advantage of semantic indexing in your custom connectors, include the relevant content that you want to be indexed in the **title** and **content** properties.

> [!NOTE]
> [Semantic labels](/graph/connecting-external-content-manage-schema#semantic-labels) are used for filtering results; they don't affect the semantic indexing of the property

The following search scenarios benefit from semantic indexing:

- Topic and keyword-based searches
- Searches that require approximate matches
- Searches that require the system to understand context and relationships

Semantic indexing doesn't benefit the following scenarios:

- Queries that don't include keywords or topics, such as "find bugs assigned to" or "Find items created by".
- Queries that involve multiple parameters, such as an assignee and a topic.
- Queries for a total number of results. Relevance and synthesis can reduce the number of results returned.

## Copilot connectors gallery

The [Copilot connectors gallery](https://www.microsoft.com/microsoft-search/connectors) includes a brief description of each of the connectors created by Microsoft and our partners, and a link to each partner's website.

With more than 100 connectors currently available, you can connect to popular Microsoft and non-Microsoft services such as Azure services, Box, Confluence, Google services, MediaWiki, Salesforce, ServiceNow, and many more.

## Create your own Copilot connector

You can use the [Copilot connectors APIs](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context) to build custom Copilot connectors that index content from line-of-business data sources into Microsoft Graph. You can use the Copilot connector APIs to create and manage external connections; define, and register external data type schemas; ingest external data items into Microsoft Graph; and sync external groups.

## Requirements for Copilot connectors

To build Copilot connectors, you must have a search administrator in your organization do the following:

- [Register an application](/graph/toolkit/get-started/add-aad-app-registration) and [grant admin consent](/graph/connecting-external-content-deploy-teams#update-microsoft-graph-permissions) for the required Microsoft Graph permissions in **Microsoft Entra admin center** ([entra.microsoft.com](https://entra.microsoft.com/)).
    - This might not be an option if you're working in a production environment. Any deployed Copilot connector is accessible tenant-wide unless the external items security is locked down.
- Make sure that Copilot connectors that you intend for Microsoft Search and Microsoft 365 Copilot are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) via the **Agents and connectors** section under **Copilot** in the Microsoft 365 admin center ([admin.microsoft.com](https://admin.microsoft.com)). For more information, see [Manage connector results](/microsoftsearch/connectors-in-all-vertical).

## Configuring your custom Copilot connector for Microsoft 365 Copilot

To make sure that Microsoft 365 Copilot uses your content effectively:

- Apply [semantic labels](/graph/connecting-external-content-manage-schema). Semantic labels help Microsoft 365 Copilot interpret the semantic meaning of your schema. Apply as many of them to your schema as applicable. The `iconUrl`, `title`, and `url` labels must be applied for content to surface in Copilot. Currently, only the `title` semantic label can be used in prompts in Microsoft 365 Copilot. However, more semantic labels will be supported as the platform evolves, so applying all applicable labels will prevent you from needing to recreate your schema in the future.
- Ingest content relevant to external items as text. Users can query against the content property of external items in Microsoft 365 Copilot. Microsoft 365 Copilot performs better on content rich items.
- Add a [urlToItemResolver](/graph/api/resources/externalconnectors-urltoitemresolverbase) in [activitySettings](/graph/api/resources/externalconnectors-activitysettings) when you [create your connection](/graph/connecting-external-content-manage-connections#create-a-connection). A `urlToItemResolver` enables the platform to detect when users share URLs from your external content with each other. Microsoft 365 Copilot has a higher likelihood of displaying content that has been shared with that user.
- Add [user activities](/graph/api/externalconnectors-externalitem-addactivities) on your items. For a list of supported activity types, see [externalActivity](/graph/api/resources/externalconnectors-externalactivity). Items that have more activities are boosted in importance.
- Provide meaningful descriptions in the `description` property when [creating connections](/graph/api/externalconnectors-external-post-connections). Rich descriptions improve the likelihood of displaying content in Copilot.

In addition, search administrators must ensure that your Copilot connector connections are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) by using the following steps:

- In the [Admin Center](https://admin.microsoft.com/), go to **Search & intelligence** > **Customizations** > **Verticals** and select **All**.

- Select **Manage connector result**. Ensure that **Show results inline** is selected and that the connections that you want to enable for Search and Copilot are checked.

## Related content

- [Build your first Copilot connector](build-your-first-connector.md)
- [Copilot connectors overview video](https://www.youtube.com/embed/17rAOh9313g)
- [Copilot connectors API](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context)
- [Pre-built Copilot connectors](/microsoftsearch/pre-built-connectors-overview)
