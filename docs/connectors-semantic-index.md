---
title: Overview of Microsoft Graph Connectors Semantic Indexing
description: Learn how semantic index support improves the data management and retrieval processes for your Microsoft Graph connectors.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 01/31/2025
ms.topic: overview
---

# Semantic indexing for Microsoft Graph connectors

Microsoft Graph connectors provide a way for you to to bring your external data into Microsoft 365 via Microsoft Graph to make it accessible to Microsoft 365 Copilot. Microsoft Graph connectors use semantic indexing to enable more efficient and meaningful data retrieval. This article provides an overview of semantic indexing for Microsoft Graph connectors and how it supports your data management and retrieval processes.

## What is semantic indexing?

Semantic indexing optimizes the way data is indexed and retrieved from various sources to help search experiences access data and return more relevant results. For organizations that rely on diverse data sources, semantic indexing provides a cohesive and efficient method to retrieve information by offering improved matching, enhanced search results, and better contextual understanding of complex queries.

Semantic indexing allows for:

- Improved matching of search queries to content to provide more relevant search results than simple keyword (lexical) matches.
- Enhanced search results that include both exact and approximate matches.
- Contextual understanding to support complex queries that require an understanding of relationships between data.

The following search scenarios benefit from semantic indexing:

- Topic and keyword-based searches
- Searches that require approximate matches
- Searches that require the system to understand context and relationships

Semantic indexing doesn't benefit the following scenarios:

- Queries that don't include keywords or topics, such as "find bugs assigned to" or "Find items created by".
- Queries that involve multiple parameters, such as an assignee and a topic.
- Queries for a total number of results. The system currently only returns a maximum of 10 results in a semantic or lexical search. Relevance and synthesis can also reduce the number of results returned.
 
## Microsoft Graph connector semantic indexing

All Microsoft Graph connector content is semantically indexed. This enables better integration of data from different sources and facilitates data management and analysis.

Currently, the following properties, which are common across all connectors, are indexed:

- **Title** - The title of the item.
- **Content** - The body of the item. This varies by connector.

Custom connectors are semantically indexed as well. To take full advantage of semantic indexing in your custom connectors, include the relevant content that you want to be indexed in the **title** and **content** properties.

## Related content

- [Microsoft Graph connectors in Microsoft 365 Copilot](overview-graph-connector.md)
- [Microsoft Graph connector experiences](/graph/connecting-external-content-experiences)