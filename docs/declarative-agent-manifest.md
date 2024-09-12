---
title: Declarative copilot schema for Microsoft Copilot for Microsoft 365
description: Learn about the properties you can use in a manifest file for declarative copilot in Microsoft Copilot for Microsoft 365
author: rimisra2
ms.author: rimisra
ms.topic: reference
---

# Declarative copilot schema for Microsoft Copilot for Microsoft 365

This article describes a specification that establishes the declarative copilot manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems.

Declarative copilots are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the declarative copilot manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

## Conventions

### Relative references in URLs

Unless specified otherwise, all properties that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String length

Unless specified otherwise, all string properties SHOULD be limited to 4K characters. This string length doesn't confer any acceptable size for the entire document. Implementations are free to impose their own practical limits on manifest length.

### Unrecognized properties

JSON objects defined in this document support only the described properties. Unrecognized or extraneous properties in any JSON object SHOULD make the entire document invalid.

### String localization

Localizable strings can use a localization key instead of a literal value. The syntax is `[[key_name]]`, where `key_name` is the key name in the `localizationKeys` property in your localization files. For details on localization, see [Localizing your extension](extensions-are-apps.md#localizing-your-extension).

## Declarative copilot manifest object

The root of the manifest document is a JSON object that covers required fields, capabilities, conversation starters, and actions.

The declarative copilot manifest object contains the following properties.

| Property                | Type                                                                  | Description |
| ----------------------- | --------------------------------------------------------------------- | ----------- |
| `id`                    | String                                                                | Optional.   |
| `name`                  | String                                                                | Required. Localizable. The name of the declarative copilot. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. |
| `description`           | String                                                                | Required. Localizable. The description of the declarative copilot. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. |
| `instructions`          | String                                                                | Required. The detailed instructions or guidelines on how the declarative copilot should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |
| `capabilities`          | Array of [Capabilities object](#capabilities-object)                  | Optional. Contains an array of objects that define capabilities of the declarative copilot. There MUST NOT be more than five objects in the array. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starters-object) | Optional. Title and Text are localizable. A list of examples of questions that the declarative copilot can answer. There MUST NOT be more than six objects in the array. |
| `actions`               | Array of [Action object](#actions-object)                             | Optional. A list of objects that identify [API plugins](api-plugin-manifest.md) that provide actions accessible to the declarative copilot. |

### Example of declarative copilot manifest object

The following JSON is an example of required fields within a declarative copilot manifest.

```json
{
  "name" : "Repairs copilot",
  "description": "This declarative copilot is meant to help track any tickets and repairs",
  "instructions": "This declarative copilot needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```

### Capabilities object

The capabilities object is the base type of objects in the `capabilities` property in the declarative copilot manifest object. The possible object types are:

- [Web search object](#web-search-object)
- [OneDrive and SharePoint object](#onedrive-and-sharepoint-object)
- [Microsoft Graph Connectors object](#microsoft-graph-connectors-object)

#### Example of capabilities

```json
{
  "capabilities": [
    {
      "name": "WebSearch"
    },
    {
      "name": "OneDriveAndSharePoint",
      "items_by_sharepoint_ids": [
        {
          "site_id": "bc54a8cc-8c2e-4e62-99cf-660b3594bbfd",
          "web_id": "a5377427-f041-49b5-a2e9-0d58f4343939",
          "list_id": "78A4158C-D2E0-4708-A07D-EE751111E462",
          "unique_id": "304fcfdf-8842-434d-a56f-44a1e54fbed2"
        }
      ],
      "items_by_url": [
        {
          "url": "https://contoso.sharepoint.com/teams/admins/Documents/Folders1"
        }
      ]
    },
    {
      "name": "GraphConnectors",
      "connections": [
        {
          "connection_id": "jiraTickets"
        }
      ]
    }
  ]
}
```

#### Web search object

Indicates that the declarative copilot can search the web for grounding information.

The web search object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Must be set to `WebSearch`. |

#### OneDrive and SharePoint object

Indicates that the declarative copilot can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties.

| Property                  | Type                                                                       | Description |
| ------------------------- | -------------------------------------------------------------------------- | ----------- |
| `name`                    | String                                                                     | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [Items by SharePoint IDs object](#items-by-sharepoint-ids-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. |
| `items_by_url`            | Array of [Items by URL object](#items-by-url-object)                       | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. |

##### Items by SharePoint IDs object

The Items by SharePoint IDs object contains the following properties.

| Property    | Type   | Description |
| ----------- | ------ | ----------- |
| `site_id`   | String | Optional. A unique GUID identifier for a SharePoint or OneDrive site. |
| `web_id`    | String | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site. |
| `list_id`   | String | Optional. A unique GUID identifier for a list within a SharePoint or OneDrive site. |
| `unique_id` | String | Optional. A unique GUID identifier used to represent a specific entity or resource. |

> [!TIP]
> For instructions on getting the unique identifiers for a SharePoint or OneDrive resource, see [Retrieving capabilities IDs for declarative copilot manifest](declarative-copilot-capabilities-ids.md).

##### Items by URL object

The Items by URL object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

#### Microsoft Graph connectors object

Indicates that the declarative copilot can search selected Microsoft Graph connectors for grounding information.

The Microsoft Graph connectors object contains the following properties.

| Property      | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| `name`        | String                                           | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Microsoft Graph connectors available to the declarative copilot. |

##### Connection object

Identifies a Microsoft Graph connector.

The connection object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `connection_id` | String | Required. The unique identifier of the Microsoft Graph connector. |

> [!TIP]
> For instructions on getting the unique identifier for a Microsoft Graph connector, see [Retrieving capabilities IDs for declarative copilot manifest](declarative-copilot-capabilities-ids.md).

### Conversation starters object

The conversation starters object is optional in the manifest. It contains hints that are displayed to the user to demonstrate how they can get started using the declarative copilot.

The conversation starter object contains the following properties:

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `text`   | String | Required. Localizable. A suggestion that the user can use to obtain the desired result from the declarative copilot. It MUST contain at least one nonwhitespace character. |
| `title`  | String | Optional. Localizable. A unique title for the conversation starter. It MUST contain at least one nonwhitespace character. |

### Conversation starters object example

```json
{
  "conversation_starters": [
    {
      "title": "My Open Repairs",
      "text": "What open repairs are assigned to me?"
    }
  ]
}
```

### Actions object

Actions are an optional JSON object in the manifest. It acts as a developer input and can be considered as plugins.

The action object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | Required. A unique identifier for the action. It MAY be a GUID. |
| `file`   | String | Required. A path to the API plugin manifest for this action. |

#### Actions object example

``` json
{
  "actions": [
    {
      "id": "repairsPlugin",
      "file": "plugin.json"
    }
  ]
}
```

## Declarative copilot Manifest Example

Here's an example of a declarative copilot manifest file that uses most of the manifest properties described in this article.

[!INCLUDE [Sample declarative copilot manifest for Repairs declarative copilot](includes/dc-manifest-json.md)]
