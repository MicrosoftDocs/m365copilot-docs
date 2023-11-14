---
title: Build Microsoft Graph connectors for Microsoft Copilot for Microsoft 365
description: Extend Microsoft Copilot for Microsoft 365 with Microsoft Graph connectors
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: overview
ms.date: 11/14/2023
---

# Microsoft Graph Connectors for Microsoft Copilot for Microsoft 365

You can build Microsoft Graph connectors to integrate your enterprise data into Microsoft Copilot and other Microsoft 365 intelligent experiences.

:::image type="content" source="assets/images/copilot_graph-connectors-infographic.png" alt-text="Alt text" lightbox="assets/images/copilot_graph-connectors-infographic.png":::

Microsoft Copilot for Microsoft 365 is your copilot for work. It combines the power of Large Language Models (LLMs) and your data in Microsoft Graph to unlock productivity. However, organizational data is not limited to Microsoft content sources like OneDrive and SharePoint. Enterprise data is spread across many line-of-business content sources, and the entirety of your organization's data needs to participate in Copilot for Microsoft 365 in order to maximize its benefits. Microsoft Graph connectors provide a platform for you to ingest your line-of-business data into Microsoft Graph, so that Copilot for Microsoft 365 can reason over the entirety of your enterprise content.

> [!VIDEO https://www.youtube.com/embed/2OftQrc7PPQ?si=ls-ypEqYLvJkeE0y]
> [!VIDEO https://www.youtube.com/embed/17rAOh9313g]
> [!VIDEO https://www.youtube.com/embed/vvNFCagkdcE]
> [!VIDEO https://www.youtube.com/embed/zK-L83cwJ8c]
> [!VIDEO https://www.youtube.com/embed/2oQ_6wXrwDQ]

## How Microsoft Graph connector content surfaces in Copilot for Microsoft 365

By using Microsoft Graph connectors to ingest your external content into Microsoft Graph, your users can use Copilot for Microsoft 365 to find, summarize, and learn from your line-of-business data through natural language prompts.

![A screenshot of Graph connectors in Copilot for Microsoft 365](assets/images/connectors-copilot-response.png)

In addition, users can hover over in-text citations in Copilot for Microsoft 365's response to get a preview of the external item referenced.

![A screenshot of hovering over a Graph connectors response in Copilot for Microsoft 365](assets/images/connectors-copilot-hover.png)

If users desire to dive deeper into the referenced content, they can click on one of the reference links at the bottom of the response.

![A screenshot of Graph connectors reference list in Copilot for Microsoft 365](assets/images/connectors-copilot-logo.png)

## Create your own custom Microsoft Graph connection

You can use the [Microsoft Graph connectors APIs](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context) to build custom Microsoft Graph connections that index content from line-of-business data sources into Microsoft Graph. You can use the Microsoft Graph connectors APIs to create and manage external Microsoft Graph connections, define and register the schema of external data types, ingest external data items into Microsoft Graph, and sync external groups.

## Configuring your custom Microsoft Graph connection for Copilot for Microsoft 365

To make sure that Copilot for Microsoft 365 uses your content effectively:

- Apply [semantic labels](/graph/connecting-external-content-manage-schema). Semantic labels help Copilot for Microsoft 365 interpret the semantic meaning of your schema. Apply as many of them to your schema as applicable. The `iconUrl`, `title`, and `url` labels must be applied for content to surface in Copilot.
- Add a [urlToItemResolver](/graph/api/resources/externalconnectors-urltoitemresolverbase) in [activitySettings](/graph/api/resources/externalconnectors-activitysettings) when you [create your connection](/graph/connecting-external-content-manage-connections#create-a-connection). A `urlToItemResolver` enables the platform to detect when users share URLs from your external content with each other. Copilot for Microsoft 365 has a higher likelihood of displaying content that has been shared with that user.
- Add [user activities](/graph/api/externalconnectors-externalitem-addactivities) on your items. For a list of supported activity types, see [externalActivity](/graph/api/resources/externalconnectors-externalactivity). Items that have more activities are boosted in importance.
- Provide meaningful descriptions in the `description` property when [creating connections](/graph/api/externalconnectors-external-post-connections). Rich descriptions improve the likelihood of displaying content in Copilot.

In addition, search administrators should ensure that your Graph Connector connections are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical), using the following steps.

- Open the Admin Center, go to **Search & intelligence** > **Customizations** > **Verticals** and select the **All** vertical.
- Select **Manage connector result**. Ensure that **Show results inline** is selected and that the connections that you want to enable for Search and Copilot are checked.

## Semantic Labels and Property Labels in Copilot for Microsoft 365

As stated earlier, it is recommended that you apply as many semantic labels to your schema as applicable. This is because your end-users can use semantic labels as part of their prompt in Copilot for Microsoft 365. For example, an end-user can ask Copilot for all of the files that were last modified within the last week. If the `lastModifiedDateTime` semantic label is not applied to your schema, then Copilot for Microsoft 365 will not be able to return the expected result to that user.

The `searchable` property label is the most important with respect to Copilot for Microsoft 365. It defines which properties can be searched against. If you would like your users' prompts in Copilot for Microsoft 365 to match content stored in certain properties, then you should make those properties searchable.

## See also

- [Microsoft Graph connectors APIs](/graph/connecting-external-content-connectors-api-overview?context=microsoft-365-copilot/extensibility/context)
