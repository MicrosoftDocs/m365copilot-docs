---
title: Declarative agent schema 1.2 for Microsoft 365 Copilot
description: Learn about the 1.2 schema for a manifest file for declarative agents in Microsoft 365 Copilot
author: rimisra2
ms.author: rimisra
ms.localizationpriority: medium
ms.date: 01/15/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 MD051 -->

# Declarative agent schema 1.2 for Microsoft 365 Copilot

This article describes the 1.2 schema used by the declarative agent manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems. Declarative agent manifests are referenced by the Microsoft 365 app manifest inside an [app package](agents-are-apps.md#app-package). For details, see the [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema/declarative-agent-ref).

[!INCLUDE [latest-declarative-agent-manifest](includes/latest-declarative-agent-manifest.md)]

Declarative agents are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the declarative agent manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

## Changes from previous version

This schema version introduces the following changes from [version 1.0](declarative-agent-manifest-1.0.md).

- The `sites` property is added to the [web search object](#web-search-object). This property allows the web search capability to be limited to allowed sites.
- The [graphic art](#graphic-art-object) capability was added. This capability allows the declarative agent to generate images and art based on user input.
- The [code interpreter](#code-interpreter-object) capability was added. This capability allows the declarative agent to generate and execute Python code.

## JSON schema

The schema described in this document can be found in [JSON Schema](https://json-schema.org/) format [here](https://aka.ms/json-schemas/copilot/declarative-agent/v1.2/schema.json).

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
| `version`               | String                                                                | Required. The schema version. Must be set to `v1.2`. |
| `id`                    | String                                                                | Optional.   |
| `name`                  | String                                                                | Required. Localizable. The name of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. |
| `description`           | String                                                                | Required. Localizable. The description of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. |
| `instructions`          | String                                                                | Required. The detailed instructions or guidelines on how the declarative agent should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |
| `capabilities`          | Array of [Capabilities object](#capabilities-object)                  | Optional. Contains an array of objects that define capabilities of the declarative agent. There MUST NOT be more than one of each derived type of [Capabilities object](#capabilities-object) in the array. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starters-object) | Optional. Title and Text are localizable. A list of examples of questions that the declarative agent can answer. There MUST NOT be more than 12 objects in the array. |
| `actions`               | Array of [Action object](#actions-object)                             | Optional. A list of objects that identify [API plugins](api-plugin-manifest.md) that provide actions accessible to the declarative agent. |

### Declarative agent manifest object example

The following JSON is an example of required fields within a declarative agent manifest.

#### [JSON](#tab/json)

```json
{
  "name" : "Repairs agent",
  "description": "This declarative agent is meant to help track any tickets and repairs",
  "instructions": "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```

#### [TypeSpec](#tab/tsp)

```typescript
@agent(
  "Repairs agent",
  "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
)
@instructions(
  "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
)
namespace MyAgent {

}
```

---

### Capabilities object

The capabilities object is the base type of objects in the `capabilities` property in the declarative agent manifest object. The possible object types are:

- [Web search object](#web-search-object)
- [OneDrive and SharePoint object](#onedrive-and-sharepoint-object)
- [Copilot connectors object](#copilot-connectors-object)
- [Graphic art object](#graphic-art-object)
- [Code interpreter object](#code-interpreter-object)

> [!NOTE]
> Declarative agents with any capabilities other than Web search are only available to users in tenants that allow metered usage or tenants that have a Microsoft 365 Copilot license.

#### Capabilities object example

##### [JSON](#tab/json)

```json
{
  "capabilities": [
    {
      "name": "WebSearch",
      "sites": [
        {
          "url": "https://contoso.com"
        }
      ]
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
    },
    {
      "name": "GraphicArt"
    },
    {
      "name": "CodeInterpreter"
    }
  ]
}
```

##### [TypeSpec](#tab/tsp)

```typescript
namespace MyAgent {
  op webSearch is AgentCapabilities.WebSearch<TSites = [
    {
        url: "https://contoso.com"
    }
  ]>;

  op od_sp is AgentCapabilities.OneDriveAndSharePoint<
    TItemsBySharePointIds = [
      {
        site_id: "bc54a8cc-8c2e-4e62-99cf-660b3594bbfd";
        web_id: "a5377427-f041-49b5-a2e9-0d58f4343939";
        list_id: "78A4158C-D2E0-4708-A07D-EE751111E462";
        unique_id: "304fcfdf-8842-434d-a56f-44a1e54fbed2";
      }
    ],
    TItemsByUrl = [
      {
        url: "https://contoso.sharepoint.com/teams/admins/Documents/Folders1"
      }
    ]
  >;

  op graphConnectors is AgentCapabilities.GraphConnectors<TConnections = [
    {
        connection_id: "jiraTickets"
    }
  ]>;

  op graphicArt is AgentCapabilities.GraphicArt;

  op codeInterpreter is AgentCapabilities.CodeInterpreter;
}
```

---

#### Web search object

Indicates that the declarative agent can search the web for grounding information.

The web search object contains the following properties.

| Property | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| `name`   | String                               | Required. Must be set to `WebSearch`. |
| `sites`  | Array of [Site object](#site-object) | Optional. An array of objects that identify sites the agent is allowed to search. If this property is omitted, all the agent is allowed to search all sites. The array MUST NOT contain more than four items. |

> [!NOTE]
> For details about data, privacy, and security for web search in Microsoft 365 Copilot Chat and Microsoft 365 Copilot, see [Data, privacy, and security for web search](/copilot/microsoft-365/manage-public-web-access).

##### Site object

Indicates a site that a declarative agent can search for content.

The site object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Required. An absolute URL to a site to be searched for content. The URL MUST NOT contain more than two path segments (for example, `https://contoso.com/projects/mark-8` is valid, `https://contoso.com/projects/mark-8/beta-program` isn't valid). Search results include data from additional path segments; however, scoping search to more than two path segments isn't supported. The URL MUST NOT contain any query parameters. |

#### OneDrive and SharePoint object

Indicates that the declarative agent can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties.

| Property                  | Type                                                                       | Description |
| ------------------------- | -------------------------------------------------------------------------- | ----------- |
| `name`                    | String                                                                     | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [Items by SharePoint IDs object](#items-by-sharepoint-ids-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. If both the `items_by_sharepoint_ids` and the `items_by_url` properties are omitted, all OneDrive and Sharepoint sources in the organization are available to the declarative agent. |
| `items_by_url`            | Array of [Items by URL object](#items-by-url-object)                       | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. If both the `items_by_sharepoint_ids` and the `items_by_url` properties are omitted, all OneDrive and Sharepoint sources in the organization are available to the declarative agent. |

For information about how to optimize SharePoint content for Copilot, see [Optimize SharePoint content retrieval](optimize-sharepoint-content.md).

##### Items by SharePoint IDs object

The items by SharePoint IDs object contains the following properties.

| Property    | Type   | Description |
| ----------- | ------ | ----------- |
| `site_id`   | String | Optional. A unique GUID identifier for a SharePoint or OneDrive site. |
| `web_id`    | String | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site. |
| `list_id`   | String | Optional. A unique GUID identifier for a list within a SharePoint site. Only lists associated with a SharePoint document library are supported. |
| `unique_id` | String | Optional. A unique GUID identifier used to represent a specific entity or resource. |

> [!TIP]
> For information about how to get the unique identifiers for a SharePoint or OneDrive resource, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

##### Items by URL object

The items by URL object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

#### Copilot connectors object

Indicates that the declarative agent can search selected Microsoft 365 Copilot connectors for grounding information.

The Copilot connectors object contains the following properties.

| Property      | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| `name`        | String                                           | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Copilot connectors available to the declarative agent. If this property is omitted, all Copilot connectors in the organization are available to the declarative agent. |

##### Connection object

Identifies a Copilot connector.

The connection object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `connection_id` | String | Required. The unique identifier of the Copilot connector. |

> [!TIP]
> For instructions on getting the unique identifier for a Copilot connector, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

#### Graphic art object

Indicates that the declarative agent can create images and art based on the text input from the user. For more information, see [Image generator](image-generator.md).

The graphic art object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Must be set to `GraphicArt`. |

#### Code interpreter object

Indicates that the declarative agent can generate and execute Python code to solve complex math problems, analyze data, generate visualizations, and more. For more information, see [Code interpreter](code-interpreter.md).

The code interpreter object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Must be set to `CodeInterpreter`. |

### Conversation starters object

The conversation starters object is optional in the manifest. It contains hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

The conversation starter object contains the following properties:

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `text`   | String | Required. Localizable. A suggestion that the user can use to obtain the desired result from the declarative agent. It MUST contain at least one nonwhitespace character. |
| `title`  | String | Optional. Localizable. A unique title for the conversation starter. It MUST contain at least one nonwhitespace character. |

#### Conversation starters object example

#### [JSON](#tab/json)

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

#### [TypeSpec](#tab/tsp)

```typescript
@conversationStarter(#{
  title: "My Open Repairs",
  text: "What open repairs are assigned to me?"
)}
```

---

### Actions object

Actions are an optional JSON object in the manifest. It acts as a developer input and can be considered as plugins.

The action object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | Required. A unique identifier for the action. It MAY be a GUID. |
| `file`   | String | Required. A path to the API plugin manifest for this action. |

#### Actions object example

##### [JSON](#tab/json)

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

##### [TypeSpec](#tab/tsp)

```typescript
@service
@server("https://jsonplaceholder.typicode.com")
@actions(#{
  nameForHuman: "Posts APIs",
  descriptionForHuman: "Manage blog post items on JSON Placeholder APIs.",
  descriptionForModel: "Read, create, update and delete blog post items on the JSON Placeholder APIs."
})
namespace PostsAPI {
  // All operations from the actions
}
```

---

## Declarative agent manifest example

Here's an example of a declarative agent manifest file that uses most of the manifest properties described in this article.

:::code language="json" source="includes/sample-manifests/declarative-agent-sample-manifest-1.2.json":::

## Related content

- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema)
