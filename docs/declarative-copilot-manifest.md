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
| `instructions` | String | Required. The detailed instructions or guidelines on how the declarative copilot should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |
| `capabilities` | Array of [Web search object](#web-search-object) OR [OneDrive and SharePoint object](#onedrive-and-sharepoint-object) OR [Microsoft Graph connectors object](#microsoft-graph-connectors-object) | Optional. Contains an array of objects that define capabilities of the declarative copilot. There MUST NOT be more than five objects in the array. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starter-object) | Optional. A list of examples of questions that the declarative copilot can answer. There MUST NOT be more than six objects in the array. |
| `actions` | Array of [Action object](#action-object) | Optional. A list of objects that identify [API plugins][] that provide actions accessible to the declarative copilot. |

### Example of Declarative Copilot Manifest object

The following example of required fields within a Copilot Declarative Copilot manifest:

```json
{
    "name" : "Repairs DC",
    "description": "This DC is meant to help track any tickets and repairs",
    "instructions": "This DC needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```
## Capabilities Type

Capabilities is an optional JSON object in the manifest that can support built in capabilities to extend the knowledge within your Declarative Copilot. It has a member called `name` that is required. The `name` member MUST be one of the following values:

| Value | Details |
|---|---|
| WebSearch | Enables capability to search the Web for relevant content |
| GraphicArt | Enables capability to create images and art based on the text input from the user|  
| CodeInterpreter | Enables capability to generate and execute code. | 
| OneDriveAndSharePoint |  Enables capability to search a user's SharePoint and OneDrive for grounding info. |
| GraphConnector | Enables capability to search for selected graph connectors for grounding info.|

### Example of Capabilities 

```json
{
    "capabilities": [
        {
            "name": "WebSearch"
        },
        {
            "name": "GraphicArt"
        },
        {
            "name": "CodeInterpreter"
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
             "items_by_url": [ {
                    "url": "https://microsoft.sharepoint-df.com/teams/taiger/Documents/Folders1"
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

### Web search object

Indicates that the declarative copilot can search the web for grounding information.

The web search object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `WebSearch`. |

### Graphic Art object

Indicates that the declarative copilot can create images and art based on the text input from the user.

The graphic art object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `GraphicArt`. |

### Code Interpreter object 

Indicates that the declarative copilot can generate and execute code.

The code interpreter object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `CodeInterpreter`. |

### OneDrive and SharePoint object

Indicates that the declarative copilot can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [SharePoint identifier object](#sharepoint-identifier-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. |
| `items_by_url` | Array of [SharePoint URL object](#sharepoint-url-object) | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. |

#### Items by Sharepoint Ids Object

`items_by_sharepoint_ids` is a JSON array. Each JSON object within the array contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `site_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive site. |
| `web_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive web. |
| `list_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive list. |
| `unique_id` | String | Optional. The GUID identifier of a SharePoint or OneDrive. |

#### Items by URL Object

`items_by_url` is a JSON array. Each JSON object within the array contains the following properties: 

| Property | Type | Description |
| -------- | ---- | ----------- |
| `url` | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

### Microsoft Graph Connectors object

Indicates that the Declarative Copilot can search selected Microsoft Graph Connectors for grounding information.

The Microsoft Graph Connectors object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Microsoft Graph connectors available to the Declarative Copilot. |

#### Connection object

Identifies a Microsoft Graph connector.

The connection object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `connection_id` | String | Required. The unique identifier of the Microsoft Graph connector. |

[api plugins]: api-plugin-manifest.md

## Conversation Starters object

Conversation Starters is an optional JSON object in the manifest. It contains hints that are displayed to the user to demonstrate how they can get started using the Declarative Copilot.

### Example of Conversation Starters 

```json
{
    "conversation_starters": [{ 
        "title": "My Open Repairs",
        "text": "What open repairs are assigned to me?" 
    }],
}
```
### Conversation Starters Properties 

The conversation starter object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | String | Required. A suggestion that the user can use to obtain the desired result from the DC. It MUST contain at least one nonwhitespace character. |
| `title` | String | Optional. A unique title for the conversation starter. It MUST contain at least one nonwhitespace character. |

## Action object

Actions are an optional JSON object in the manifest. It acts as a developer input and can be considered as plugins.

### Example of Actions Object

``` json
{
    "actions": [{  
        "id": "repairsPlugin",   
        "file": "plugin.json" 
    }] 
}
```
### Actions Properties

The action object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | Required. A unique identifier for the action. It MAY be represented by a GUID. |
| `file` | String | Required. A path to the API plugin manifest for this action. |

## Declarative Copilot Manifest Example

Here's an example of a DC manifest file that uses most of the manifest members and object properties described in the article:

[!INCLUDE [Sample DC manifest for Repairs declarative copilot](includes/dc-manifest-json.md)]
