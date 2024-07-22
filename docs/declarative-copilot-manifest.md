---
title: Declarative copilot schema for Microsoft Copilot for Microsoft 365
description: Learn about the members and properties you can use in a manifest file for declarative copilot in Microsoft Copilot for Microsoft 365
author: rimisra2
ms.author: rimisra
ms.topic: reference
---

# Declarative copilot schema for Microsoft Copilot for Microsoft 365

This article describes a specification that establishes the declarative copilot manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems.

Declarative copilots are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the DC manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

> [!IMPORTANT]
> Declarative copilots are currently in limited public preview.

## Conventions

### Relative references in URLs

Unless specified otherwise, all members that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String Length

Unless specified otherwise, all string members SHOULD be limited to 4K characters. This string length doesn't confer any acceptable size for the entire document. Implementations are free to impose their own practical limits on manifest length.

### Unrecognized Members

JSON objects defined in this document support only the described members. Unrecognized or extraneous members in any JSON object SHOULD make the entire document invalid.

## Declarative copilot manifest object

The root of the manifest document is a JSON object that covers required fields, capabilities, conversation starters, and actions.

The declarative copilot manifest object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | Optional. |
| `name` | String | Required. The name of the declarative copilot. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. Value must match the `^[A-Za-z0-9]+$` regular expression. |
| `description` | String | Required. The description of the declarative copilot. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. Value must match the `^[A-Za-z0-9]+$` regular expression. |
| `instructions` | String | Optional. The detailed instructions or guidelines on how the declarative copilot should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |
| `capabilities` | Array of [Web search object](#web-search-object) OR [OneDrive and SharePoint object](#onedrive-and-sharepoint-object) OR [Microsoft Graph connectors object](#microsoft-graph-connectors-object) | Optional. Contains an array of objects that define capabilities of the declarative copilot. There MUST NOT be more than five objects in the array. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starter-object) | Optional. A list of examples of questions that the declarative copilot can answer. There MUST NOT be more than six objects in the array. |
| `actions` | Array of [Action object](#action-object) | Optional. A list of objects that identify [API plugins][] that provide actions accessible to the declarative copilot. |

### Web search object

Indicates that the declarative copilot can search the web for grounding information.

The web search object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `WebSearch`. |

### OneDrive and SharePoint object

Indicates that the declarative copilot can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [SharePoint identifier object](#sharepoint-identifier-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. |
| `items_by_url` | Array of [SharePoint URL object](#sharepoint-url-object) | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. |

### Microsoft Graph connectors object

Indicates that the declarative copilot can search selected Microsoft Graph connectors for grounding information.

The microsoft graph connectors object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Microsoft Graph connectors available to the declarative copilot. |

### Conversation starter object

Contains hints that are displayed to the user to demonstrate how they can get started using the declarative copilot.

The conversation starter object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | String | Required. A suggestion that the user can use to obtain the desired result from the DC. It MUST contain at least one nonwhitespace character. |
| `title` | String | Optional. A unique title for the conversation starter. It MUST contain at least one nonwhitespace character. |

### Action object

Identifies an API plugin manifest for a plugin used as an action by the declarative copilot.

The action object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | Required. A unique identifier for the action. It MAY be represented by a GUID. |
| `file` | String | Required. A path to the API plugin manifest for this action. |

### SharePoint identifier object

Contains one or more object identifiers that identify a SharePoint or OneDrive resource.

The SharePoint identifier object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `site_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive site. |
| `web_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive web. |
| `list_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive list. |
| `unique_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive ???. |

### SharePoint URL object

Represents the URL of a SharePoint or OneDrive resource.

The SharePoint url object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `url` | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

### File object

Describes a file.

The file object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `site_id` | String | Optional. |
| `web_id` | String | Optional. |
| `list_id` | String | Optional. |
| `unique_id` | String | Optional. |
| `file_name` | String | Optional. |

### Site object

The site object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `path` | String | Required. |
| `site_name` | String | Required. |

### Connection object

Identifies a Microsoft Graph connector.

The connection object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `connection_id` | String | Required. The unique identifier of the Microsoft Graph connector. |

[api plugins]: api-plugin-manifest.md

## Example

Here's an example of a DC manifest file that uses most of the manifest members and object properties described in the article:

[!INCLUDE [Sample DC manifest for Repairs declarative copilot](includes/dc-manifest-json.md)]
