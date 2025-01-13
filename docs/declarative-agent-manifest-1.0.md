---
title: Declarative agent schema 1.0 for Microsoft 365 Copilot
description: Learn about the 1.0 schema for a manifest file for declarative agents in Microsoft 365 Copilot
author: rimisra2
ms.author: rimisra
ms.date: 01/09/2025
ms.topic: reference
---

# Declarative agent schema 1.0 for Microsoft 365 Copilot

This article describes the 1.0 schema used by the declarative agent manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems. Declarative agent manifests are referenced by the Microsoft 365 app manifest inside an [app package](agents-are-apps.md#app-package). For details, see the [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema/declarative-agent-ref).

[!INCLUDE [latest-declarative-agent-manifest](includes/latest-declarative-agent-manifest.md)]

Declarative agents are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the declarative agent manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

## JSON schema

The schema described in this document can be found in [JSON Schema](https://json-schema.org/) format [here](https://aka.ms/json-schemas/copilot/declarative-agent/v1.0/schema.json).

## Conventions

### Relative references in URLs

Unless specified otherwise, all properties that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String length

Unless specified otherwise, all string properties SHOULD be limited to 4K characters. This string length doesn't confer any acceptable size for the entire document. Implementations are free to impose their own practical limits on manifest length.

### Unrecognized properties

JSON objects defined in this document support only the described properties. Unrecognized or extraneous properties in any JSON object SHOULD make the entire document invalid.

### String localization

Localizable strings can use a localization key instead of a literal value. The syntax is `[[key_name]]`, where `key_name` is the key name in the `localizationKeys` property in your localization files. For details on localization, see [Localize your agent](localize-agents.md).

## Declarative agent manifest object

The root of the manifest document is a JSON object that covers required fields, capabilities, conversation starters, and actions.

The declarative agent manifest object contains the following properties.

| Property                | Type                                                                  | Description |
| ----------------------- | --------------------------------------------------------------------- | ----------- |
| `version`               | String                                                                | Required. The schema version. Must be set to `v1.0`. |
| `id`                    | String                                                                | Optional.   |
| `name`                  | String                                                                | Required. Localizable. The name of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. |
| `description`           | String                                                                | Required. Localizable. The description of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. |
| `instructions`          | String                                                                | Required. The detailed instructions or guidelines on how the declarative agent should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |
| `capabilities`          | Array of [Capabilities object](#capabilities-object)                  | Optional. Contains an array of objects that define capabilities of the declarative agent. There MUST NOT be more than one of each derived type of [Capabilities object](#capabilities-object) in the array. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starters-object) | Optional. Title and Text are localizable. A list of examples of questions that the declarative agent can answer. There MUST NOT be more than six objects in the array. |
| `actions`               | Array of [Action object](#actions-object)                             | Optional. A list of objects that identify [API plugins](api-plugin-manifest.md) that provide actions accessible to the declarative agent. |

### Example of declarative agent manifest object

The following JSON is an example of required fields within a declarative agent manifest.

```json
{
  "name" : "Repairs agent",
  "description": "This declarative agent is meant to help track any tickets and repairs",
  "instructions": "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```

### Capabilities object

The capabilities object is the base type of objects in the `capabilities` property in the declarative agent manifest object. The possible object types are:

- [Web search object](#web-search-object)
- [OneDrive and SharePoint object](#onedrive-and-sharepoint-object)
- [Microsoft Graph Connectors object](#microsoft-graph-connectors-object)

> [!NOTE]
> Declarative agents with the OneDrive and SharePoint or Microsoft Graph connectors capability are only available to users in tenants that allow metered usage or users that have a Microsoft 365 Copilot license.

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

Indicates that the declarative agent can search the web for grounding information.

The web search object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Must be set to `WebSearch`. |

#### OneDrive and SharePoint object

Indicates that the declarative agent can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties.

| Property                  | Type                                                                       | Description |
| ------------------------- | -------------------------------------------------------------------------- | ----------- |
| `name`                    | String                                                                     | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [Items by SharePoint IDs object](#items-by-sharepoint-ids-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. If both the `items_by_sharepoint_ids` and the `items_by_url` properties are omitted, all OneDrive and Sharepoint sources in the organization are available to the declarative agent. |
| `items_by_url`            | Array of [Items by URL object](#items-by-url-object)                       | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. If both the `items_by_sharepoint_ids` and the `items_by_url` properties are omitted, all OneDrive and Sharepoint sources in the organization are available to the declarative agent. |

##### Items by SharePoint IDs object

The Items by SharePoint IDs object contains the following properties.

| Property    | Type   | Description |
| ----------- | ------ | ----------- |
| `site_id`   | String | Optional. A unique GUID identifier for a SharePoint or OneDrive site. |
| `web_id`    | String | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site. |
| `list_id`   | String | Optional. A unique GUID identifier for a list within a SharePoint or OneDrive site. |
| `unique_id` | String | Optional. A unique GUID identifier used to represent a specific entity or resource. |

> [!TIP]
> For instructions on getting the unique identifiers for a SharePoint or OneDrive resource, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

##### Items by URL object

The Items by URL object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

#### Microsoft Graph connectors object

Indicates that the declarative agent can search selected Microsoft Graph connectors for grounding information.

The Microsoft Graph connectors object contains the following properties.

| Property      | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| `name`        | String                                           | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Microsoft Graph connectors available to the declarative agent. If this property is omitted, all Microsoft Graph connectors in the organization are available to the declarative agent. |

##### Connection object

Identifies a Microsoft Graph connector.

The connection object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `connection_id` | String | Required. The unique identifier of the Microsoft Graph connector. |

> [!TIP]
> For instructions on getting the unique identifier for a Microsoft Graph connector, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

### Conversation starters object

The conversation starters object is optional in the manifest. It contains hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

The conversation starter object contains the following properties:

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `text`   | String | Required. Localizable. A suggestion that the user can use to obtain the desired result from the declarative agent. It MUST contain at least one nonwhitespace character. |
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

## Declarative agent manifest example

Here's an example of a declarative agent manifest file that uses most of the manifest properties described in this article.

:::code language="json" source="includes/sample-manifests/declarative-agent-sample-manifest-1.0.json":::

## Related content

- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema)
