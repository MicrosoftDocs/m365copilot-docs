---
title: Declarative agent schema 1.7 for Microsoft 365 Copilot
description: Learn about the 1.7 schema for a manifest file for declarative agents in Microsoft 365 Copilot.
author: RachitMalik12
ms.author: malikrachit
ms.localizationpriority: medium
ms.date: 05/14/2026
ms.topic: reference
---

<!-- markdownlint-disable MD024 MD059 -->

# Declarative agent schema 1.7 for Microsoft 365 Copilot

This article describes the 1.7 schema used by the declarative agent manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems. Microsoft 365 app manifest references declarative agent manifests inside an [app package](agents-are-apps.md#app-package). For details, see the [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema/declarative-agent-ref).

Declarative agents are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification focuses on the declarative agent manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

## Changes from previous version

This schema version introduces the following changes from [version 1.6](declarative-agent-manifest-1.6.md):

- Added the optional `editorial_answers` property to define predefined question-answer pairs that the agent can use to respond to user queries based on semantic similarity.
- Added the optional `default_response_mode` property to the [behavior overrides object](#behavior-overrides-object) to control the default response mode for the agent.
- Added the optional `depends_on` property to the [conversation starter object](#conversation-starters-object) to specify capability dependencies for conversation starters.

## JSON schema

You can find the schema described in this document in [JSON Schema](https://json-schema.org/) format [here](https://developer.microsoft.com/json-schemas/copilot/declarative-agent/v1.7/schema.json).

[!INCLUDE [declarative-agent-manifest-conventions](includes/declarative-agent-manifest-conventions.md)]

## Declarative agent manifest object

The root of the manifest document is a JSON object that covers required fields, capabilities, conversation starters, and actions.

The declarative agent manifest object contains the following properties.

| Property                | Type                                                                  | Description |
| ----------------------- | --------------------------------------------------------------------- | ----------- |
| `version`               | String                                                                | Required. The schema version. Set to `v1.7`. |
| `id`                    | String                                                                | Optional. An identifier for the manifest. |
| `name`                  | String                                                                | Required. Localizable. The name of the declarative agent. It must contain at least one nonwhitespace character and be 100 characters or less. |
| `description`           | String                                                                | Required. Localizable. The description of the declarative agent. It must contain at least one nonwhitespace character and be 1,000 characters or less. |
| `instructions`          | String                                                                | Required. The detailed instructions or guidelines on how the declarative agent should behave, its functions, and any behaviors to avoid. It must contain at least one nonwhitespace character and be 8,000 characters or less. |
| `capabilities`          | Array of [Capabilities object](#capabilities-object)                  | Optional. Contains an array of objects that define capabilities of the declarative agent. The array can't contain more than one of each derived type of [Capabilities object](#capabilities-object). |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starters-object) | Optional. Title and Text are localizable. A list of examples of questions that the declarative agent can answer. The array can't contain more than 12 objects. |
| `actions`               | Array of [Action object](#actions-object)                             | Optional. A list of 1-10 objects that identify [plugins](plugin-manifest-2.4.md) that provide actions accessible to the declarative agent. |
| `behavior_overrides`    | [Behavior overrides object](#behavior-overrides-object)               | Optional. Contains configuration settings that modify the behavior of the agent. |
| `disclaimer`            | [Disclaimer object](#disclaimer-object)                               | Optional. Disclaimer text that is displayed to the user at the start of a conversation. |
| `sensitivity_label`     | [Sensitivity label object](#sensitivity-label-object)                 | Optional. Specifies a Microsoft Purview sensitivity label for the agent. |
| `editorial_answers`     | [Editorial answers object](#editorial-answers-object)                 | Optional. Contains predefined question-answer pairs that the agent can use to respond to user queries based on semantic similarity. |
| `worker_agents`         | Array of [Worker agent object](#worker-agent-object)                  | Optional. Specifies other declarative agents that can be used by this agent. |
| `user_overrides`        | Array of [User override object](#user-override-object)                | Optional. Specifies capabilities in the `capabilities` property that the user can modify. |

### Declarative agent manifest object example

The following code shows an example of the required fields in a declarative agent manifest.

#### [JSON](#tab/json)

```json
{
  "version": "v1.7",
  "name": "Repairs agent",
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

The capabilities object is the base type for objects in the `capabilities` property of the declarative agent manifest object. The possible object types are:

- [Web search object](#web-search-object)
- [OneDrive and SharePoint object](#onedrive-and-sharepoint-object)
- [Copilot connectors object](#copilot-connectors-object)
- [Graphic art object](#graphic-art-object)
- [Code interpreter object](#code-interpreter-object)
- [Dataverse object](#dataverse-object)
- [Microsoft Teams messages object](#microsoft-teams-messages-object)
- [Email object](#email-object)
- [People object](#people-object)
- [Scenario models object](#scenario-models-object)
- [Meetings object](#meetings-object)
- [Embedded knowledge object](#embedded-knowledge-object)

[!INCLUDE [declarative-agent-capabilities-license-requirement](includes/declarative-agent-capabilities-license-requirement.md)]

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
    },
    {
      "name": "Dataverse",
      "knowledge_sources": [
        {
          "host_name": "organization.crm.dynamics.com",
          "skill": "DVCopilotSkillName",
          "tables": [
            {
              "table_name": "account"
            },
            {
              "table_name": "opportunity"
            }
          ]
        }
      ]
    },
    {
      "name": "TeamsMessages",
      "urls": [
        {
          "url": "https://teams.microsoft.com/l/channel/19%3ApO0102YGEBRSH6RziXCxEgB4mtb7-5hIlDzAjtxs_dg1%40thread.tacv2/G%C3%A9n%C3%A9ral?groupId=2670cf94-acf5-48f4-96d4-c58dd8937afc&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47"
        }
      ]
    },
    {
      "name": "People"
    },
    {
      "name": "ScenarioModels",
      "models": [
        {
          "id": "model_id"
        }
      ]
    },
    {
      "name": "Meetings",
      "items_by_id": [
        {
          "id": "010000002300A00045B6C7890D12E0030000000040056F7GH890IJ01000000000000000020000000J3L45M6A7NO8PQ9R0S12TUV340XY5Z00",
          "is_series": true
        }
      ]
    }
  ]
}
```

##### [TypeSpec](#tab/tsp)

```typescript
namespace MyAgent {
  op webSearch is AgentCapabilities.WebSearch<Sites = [
    {
        url: "https://contoso.com"
    }
  ]>;

  op od_sp is AgentCapabilities.OneDriveAndSharePoint<
    ItemsBySharePointIds = [
      {
        site_id: "bc54a8cc-8c2e-4e62-99cf-660b3594bbfd";
        web_id: "a5377427-f041-49b5-a2e9-0d58f4343939";
        list_id: "78A4158C-D2E0-4708-A07D-EE751111E462";
        unique_id: "304fcfdf-8842-434d-a56f-44a1e54fbed2";
      }
    ],
    ItemsByUrl = [
      {
        url: "https://contoso.sharepoint.com/teams/admins/Documents/Folders1"
      }
    ]
  >;

  op graphConnectors is AgentCapabilities.CopilotConnectors<Connections = [
    {
        connection_id: "jiraTickets"
    }
  ]>;

  op graphicArt is AgentCapabilities.GraphicArt;

  op codeInterpreter is AgentCapabilities.CodeInterpreter;

  op teamsMessages is AgentCapabilities.TeamsMessages<TeamsMessagesByUrl = [
    {
        url: "https://teams.microsoft.com/l/channel/19%3ApO0102YGEBRSH6RziXCxEgB4mtb7-5hIlDzAjtxs_dg1%40thread.tacv2/G%C3%A9n%C3%A9ral?groupId=2670cf94-acf5-48f4-96d4-c58dd8937afc&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47"
    }
  ]>;

  op people is AgentCapabilities.People;

  op meetings is AgentCapabilities.Meetings;
}
```

---

#### Web search object

Indicates that the declarative agent can search the web for grounding information.

The web search object contains the following properties.

| Property | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| `name`   | String                               | Required. Must be set to `WebSearch`. |
| `sites`  | Array of [Site object](#site-object) | Optional. An array of objects that identify sites the agent is allowed to search. If you omit this property, the agent can search all sites. The array can't contain more than four items. |

> [!NOTE]
> For details about data, privacy, and security for web search in Microsoft 365 Copilot Chat and Microsoft 365 Copilot, see [Data, privacy, and security for web search](/copilot/microsoft-365/manage-public-web-access).

##### Site object

Indicates a site that a declarative agent can search for content.

The site object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Required. An absolute URL to a site to be searched for content. The URL can't contain more than two path segments (for example, `https://contoso.com/projects/mark-8` is valid, but `https://contoso.com/projects/mark-8/beta-program` isn't valid). The URL can't contain any query parameters. |

#### OneDrive and SharePoint object

Indicates that the declarative agent can search a user's SharePoint and OneDrive for grounding information.

The OneDrive and SharePoint object contains the following properties.

| Property                  | Type                                                                       | Description |
| ------------------------- | -------------------------------------------------------------------------- | ----------- |
| `name`                    | String                                                                     | Required. Must be set to `OneDriveAndSharePoint`. |
| `items_by_sharepoint_ids` | Array of [Items by SharePoint IDs object](#items-by-sharepoint-ids-object) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. If you omit both the `items_by_sharepoint_ids` and the `items_by_url` properties, the declarative agent can access all OneDrive and SharePoint sources in the organization. |
| `items_by_url`            | Array of [Items by URL object](#items-by-url-object)                       | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. If you omit both the `items_by_sharepoint_ids` and the `items_by_url` properties, the declarative agent can access all OneDrive and SharePoint sources in the organization. |

For information about how to optimize SharePoint content for Copilot, see [Optimize SharePoint content retrieval](optimize-sharepoint-content.md).

##### Items by SharePoint IDs object

The items by SharePoint IDs object contains the following properties.

| Property                  | Type    | Description |
| ------------------------- | ------- | ----------- |
| `site_id`                 | String  | Optional. A unique GUID identifier for a SharePoint or OneDrive site. |
| `web_id`                  | String  | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site. |
| `list_id`                 | String  | Optional. A unique GUID identifier for a document library within a SharePoint site. |
| `unique_id`               | String  | Optional. A unique GUID identifier used to scope a folder or file in the document library specified by the `list_id` property. |
| `search_associated_sites` | Boolean | Optional. Indicates whether to enable searching associated sites. This value is only applicable when the `site_id` value references a SharePoint HubSite. |
| `part_type`               | String  | Optional. Indicates the type of part `part_id` refers to. This value is only applicable when the `part_id` value is present. Possible values are: `OneNotePart`. |
| `part_id`                 | String  | Optional. A unique GUID identifier used to represent part of a SharePoint item such as a OneNote page. |

> [!TIP]
> For information about how to get the unique identifiers for a SharePoint or OneDrive resource, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

##### Items by URL object

The items by URL object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Optional. An absolute URL to a SharePoint or OneDrive resource. |

#### Copilot connectors object

Indicates that the declarative agent can search selected Copilot connectors for grounding information.

The Copilot connectors object contains the following properties.

| Property      | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| `name`        | String                                           | Required. Must be set to `GraphConnectors`. |
| `connections` | Array of [Connection object](#connection-object) | Optional. An array of objects that identify the Copilot connectors available to the declarative agent. If you omit this property, the declarative agent can access all Copilot connectors in the organization. |

##### Connection object

Identifies a Copilot connector.

The connection object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `connection_id` | String | Required. The unique identifier of the Copilot connector. |
| `additional_search_terms` | String | Optional. A Keyword Query Language (KQL) query to filter items based on fields in the connection's schema. |
| `items_by_external_id` | Array of [Item identifier object](#item-identifier-object) | Optional. Specifies specific items by ID in the Copilot connector that are available to the agent. |
| `items_by_external_url` | Array of [External URL object](#external-url-object) | Optional. Specifies specific items by URL in the Copilot connector that are available to the agent. |
| `items_by_path` | Array of [Path object](#path-object) | Optional. Filters the items available to the agent by item paths (the `itemPath` [semantic label](/graph/connecting-external-content-manage-schema#semantic-labels) on items). |
| `items_by_container_name` | Array of [Container name object](#container-name-object) | Optional. Filters the items available to the agent by container name (the `containerName` semantic label on items). |
| `items_by_container_url` | Array of [Container URL object](#container-url-object) | Optional. Filters the items available to the agent by container URL (the `containerUrl` semantic label on items). |

> [!TIP]
> For instructions on getting the unique identifier for a Copilot connector, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md).

###### Item identifier object

Identifies an external item by its ID.

The item identifier object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `item_id`       | String | Required. The unique identifier of the external item. |

###### External URL object

Identifies an external item by its URL.

The external URL object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Required. The URL of the external item. |

###### Path object

Identifies an external item by its path.

The path object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `path`          | String | Required. The path (`itemPath` semantic label value) of the external item. |

###### Container name object

Identifies a container by its name.

The container name object contains the following properties.

| Property         | Type   | Description |
| ---------------- | ------ | ----------- |
| `container_name` | String | Required. The name of the container (`containerName` semantic label value) of the external item. |

###### Container URL object

Identifies a container by its URL.

The container URL object contains the following properties.

| Property        | Type   | Description |
| --------------- | ------ | ----------- |
| `container_url` | String | Required. The URL of the container (`containerUrl` semantic label value) of the external item. |

#### Graphic art object

Indicates that the declarative agent can create images and art based on the text input from the user. For more information, see [Image generator](image-generator.md).

The graphic art object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Set to `GraphicArt`. |

#### Code interpreter object

Indicates that the declarative agent can generate and execute Python code to solve complex math problems, analyze data, generate visualizations, and more. For more information, see [Code interpreter](code-interpreter.md).

The code interpreter object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Set to `CodeInterpreter`. |

#### Dataverse object

Indicates that the declarative agent can search through data from tables in Dataverse.

The Dataverse object contains the following properties.

| Property            | Type                                                    | Description |
| ------------------- | ------------------------------------------------------- | ----------- |
| `name`              | String                                                  | Required. Set to `Dataverse`. |
| `knowledge_sources` | Array of [knowledge sources](#knowledge-sources-object) | Optional. An array of objects that contain the identifiers, skills, and table names for Dataverse instances to include as knowledge.|

##### Knowledge sources object

Contains information about the Dataverse instances to include as knowledge.

The knowledge sources object contains the following properties.

| Property    | Type                              | Description |
| ----------- | --------------------------------- | ----------- |
| `host_name` | String                            | Required. A unique identifier for the host in Dataverse. |
| `skill`     | String                            | A unique identifier that defines the configuration for how the agent interacts with Dataverse knowledge. |
| `tables`    | Array of [tables](#tables-object) | An array of tables to scope the agent's knowledge. |

[!INCLUDE [dataverse-knowledge-skill-location](includes/dataverse-knowledge-skill-location.md)]

###### Tables object

Contains the tables to scope the agent's knowledge.

The tables object contains the following property.

| Property      | Type   | Description |
| ------------- | ------ | ----------- |
| `table_name`  | String | Required. A unique identifier for the table. |

#### Microsoft Teams messages object

Indicates that the declarative agent can search through Microsoft Teams channels, teams, meetings, 1:1 chats, and group chats.

The Microsoft Teams messages object contains the following properties.

| Property | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| `name`   | String                                   | Required. Set to `TeamsMessages`. |
| `urls`   | Array of [Microsoft Teams URLs](#microsoft-teams-url-object) | Optional. An array of objects that identify the URLs of the Microsoft Teams channels, meeting chats, group chats, or 1:1 chats available to the declarative agent. The array can't contain more than five objects. If you omit this property, the declarative agent can search through all channels, meetings, 1:1 chats, and group chats. |

##### Microsoft Teams URL object

Identifies a Microsoft Teams channel, team, or meeting chat.

The Microsoft Teams URL object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `url`    | String | Required. A well-formatted Microsoft Teams URL that links to either a Microsoft Teams channel, meeting chat, group chat, or 1:1 chat. |

#### Email object

Indicates that the declarative agent can search through email messages in the mailboxes that the user has access to.

The email object contains the following properties.

| Property          | Type                                | Description |
| ----------------- | ----------------------------------- | ----------- |
| `name`            | String                              | Required. Must be set to `Email`. |
| `shared_mailbox`  | String                              | Optional. The SMTP address of a shared mailbox. |
| `group_mailboxes` | Array of String                     | Optional. An array of SMTP address of Microsoft 365 Groups or shared mailboxes. A maximum of 25 mailboxes are supported. |
| `folders`         | Array of [Folders](#folders-object) | Optional. If present, only email in the specified folders are available to the agent. |

##### Folders object

Contains the folders to scope the agent's knowledge.

The folders object contains the following property.

| Property    | Type   | Description |
| ----------- | ------ | ----------- |
| `folder_id` | String | Required. The well-known folder name or folder ID of the folder to reference. |

#### People object

Indicates that the declarative agent can search for information about people in the organization. Refer to [People knowledge](knowledge-sources.md#people) for more details on the data returned by base People capability.

The people object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. Must be set to `People`. |
| `include_related_content` | Boolean | Optional. Indicates whether to include related content when searching people data. When set to true, the DA will include related documents, emails, and Teams messages between the agent user and the referenced people (i.e. what they have in common). When set to false or omitted, only basic organizational information such as org charts, names, email addresses, and skills will be included. The default value is false. |

#### Scenario models object

Indicates that the declarative agent can use task-specific models.

The scenario models object contains the following properties.

| Property   | Type                                   | Description |
| ---------- | -------------------------------------- | ----------- |
| `name`     | String                                 | Required. Must be set to `ScenarioModels`. |
| `models`   | Array of [Model object](#model-object) | Required. An array of objects that identifies the task-specific models available to the declarative agent. |

##### Model object

Identifies a task-specific model.

The model object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | Required. The unique identifier for the model. |

#### Meetings object

Indicates that the declarative agent can search for information about meetings in the organization.

The meetings object contains the following properties.

| Property      | Type                                                             | Description |
| ------------- | ---------------------------------------------------------------- | ----------- |
| `name`        | String                                                           | Required. Must be set to `Meetings`. |
| `items_by_id` | Array of [Meeting identifier object](#meeting-identifier-object) | Optional. An array of objects that identify the meetings available to the declarative agent. The array can't contain more than five objects. If you omit this property, the declarative agent can search through all meetings. |

##### Meeting identifier object

Identifies a meeting.

The meeting identifier object contains the following properties.

| Property    | Type    | Description |
| ----------- | ------- | ----------- |
| `id`        | String  | Required. The unique identifier for the meeting. For instructions on finding the ID of a meeting, see [Get the ID of a meeting](/troubleshoot/exchange/calendars/cdl/get-meeting-id). |
| `is_series` | Boolean | Required. Indicates whether the meeting is a series. |

### Embedded knowledge object

Indicates that the declarative agent can use files locally in the app package.

> [!IMPORTANT]
> This feature is not yet available.

Embedded knowledge files have a maximum file size of 1 MB and must be one of the following document types:

- Word document (.doc, .docx)
- PowerPoint presentation (.ppt, .pptx)
- Excel workbook (.xls, .xlsx)
- Plain text (.txt)
- Portable Document Format (.pdf)

The embedded knowledge object contains the following properties:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | Required. Must be set to `EmbeddedKnowledge`. |
| `files` | Array of [File object](#file-object) | Optional. List of objects identifying files that contain knowledge the agent can use for grounding. Maximum size of the array is 10. You must specify either `embedded_resource_snapshot_id` or `files`, but not both. |

#### EmbeddedKnowledge object example

```json
{
  "name": "EmbeddedKnowledge",
  "files": [
    { "file": "file1.docx" },
    { "file": "file2.csv" }
  ]
}
```

#### File object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `file` | String | Required. The file relative path for the embedded file. |

### Conversation starters object

The conversation starters object is optional in the manifest. It contains hints that the agent displays to the user to show how they can get started with the declarative agent.

The conversation starter object contains the following properties:

| Property     | Type                                                  | Description |
| ------------ | ----------------------------------------------------- | ----------- |
| `text`       | String                                                | Required. Localizable. A suggestion that the user can use to get the desired result from the declarative agent. It must contain at least one nonwhitespace character. |
| `title`      | String                                                | Optional. Localizable. A unique title for the conversation starter. It must contain at least one nonwhitespace character. |
| `depends_on` | Array of [Depends on object](#depends-on-object)      | Optional. A list of objects that specify capability dependencies for this conversation starter. Conversation starters with dependencies are only displayed to users when all referenced capabilities are present in the declarative agent manifest. |

> [!NOTE]
> The array can't contain more than 12 objects.

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

#### Depends on object

Specifies a dependency for a conversation starter. This object identifies a manifest element that must be present for the conversation starter to be displayed.

The depends on object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `name`   | String | Required. The name of the manifest element type. Must be set to `capabilities`. |
| `id`     | String | Required. The identifier of the specific element. For example, `Email` or `WebSearch`. |

##### Depends on object example

```json
{
  "conversation_starters": [
    {
      "title": "Project Update",
      "text": "Executive status report on [Project]",
      "depends_on": [
        {
          "name": "capabilities",
          "id": "Email"
        },
        {
          "name": "capabilities",
          "id": "WebSearch"
        }
      ]
    }
  ]
}
```

### Actions object

Actions are an optional JSON object in the manifest. They act as developer input and can be considered as plugins. An action object can be specified as a reference to a plugin manifest file using the `id` and `file` properties, or it can be an inlined representation of the plugin manifest object.

The following table describes the properties for a referenced action object.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | Required. A unique identifier for the action. It can be a GUID. |
| `file`   | String | Required. A path to the API plugin manifest for this action. |

When specifying an action as an inlined plugin manifest, the action object must conform to the [plugin manifest](plugin-manifest-2.4.md) specification.

> [!NOTE]
> The array must contain at least one and no more than 10 objects.

#### Actions object example

##### [JSON](#tab/json)

The following example shows an action specified as a reference to a plugin manifest file.

```json
{
  "actions": [
    {
      "id": "repairsPlugin",
      "file": "plugin.json"
    }
  ]
}
```

The following example shows an action with an inlined plugin manifest.

```json
{
  "actions": [
    {
      "schema_version": "v2.4",
      "name_for_human": "GitHub Issues Plugin",
      "description_for_model": "Search for GitHub issues by author, keyword or state",
      "runtimes": [
        {
          "type": "OpenApi",
          "auth": { "type": "None" },
          "spec": { "url": "https://github.com/ai/plugins/issues/openapi.yaml" }
        }
      ]
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

### Behavior overrides object

An optional JSON object that contains configuration settings that override the agent's behavior.

The behavior overrides object contains the following properties.

| Property               | Type                                                        | Description |
| ---------------------- | ----------------------------------------------------------- | ----------- |
| `suggestions`          | [Suggestions object](#suggestions-object)                   | Optional. Contains configuration settings for the suggestions feature. |
| `special_instructions` | [Special instructions object](#special-instructions-object) | Optional. Contains settings for injecting special instructions into the prompt. |
| `default_response_mode` | String                                                     | Optional. The default response mode for the agent. This property is prefixed with `default_` because users can always override this value through the model selector UI. For details, see [Default response mode values](#default-response-mode-values). The default value is `Auto`. |

#### Default response mode values

The `default_response_mode` property enables agent authors to configure the default mode for their agents from the available modes in the user model selector. The value must be one of the following.

- `Auto` - The agent automatically determines the best response mode based on the context of the user's query, intelligently selecting between quick responses and deeper reasoning. This is the default value if not specified.
- `Quick response` - The agent provides fast responses optimized for low latency interactions. This mode is appropriate for agents where speed is prioritized over complex reasoning.
- `Think deeper` - The agent uses reasoning mode to provide more thoughtful and comprehensive responses. This mode involves increased latency but is suitable for complex problem-solving scenarios where deeper analysis is beneficial.

Agent authors should consider the use case when selecting a mode. For example, the increased latency involved with reasoning mode may not be appropriate for all agents, while some authors may want to always invoke reasoning for complex analytical tasks.

The client respects the default mode configured in the manifest. Users can override this default via the model selector.

> [!NOTE]
> Default response mode isn't applied when the agent is invoked via @mention from the main Copilot experience. This is a known issue.

#### Suggestions object

An optional JSON object that contains configuration settings for the suggestions feature.

The suggestions object contains the following property.

| Property   | Type    | Description |
| ---------- | ------- | ----------- |
| `disabled` | Boolean | Required. If set to `true`, the suggestions feature is disabled. The default value is `false`. |

#### Special instructions object

An optional JSON object that contains settings for injecting special instructions into the prompt.

The special instructions object contains the following property.

| Property                     | Type    | Description |
| ---------------------------- | ------- | ----------- |
| `discourage_model_knowledge` | Boolean | Required. If set to `true`, the agent doesn't use model knowledge when generating responses. The default value is `false`. |

### Disclaimer object

A disclaimer is an optional JSON object in the manifest that specifies disclaimer text. The agent displays this text to the user at the start of a conversation.

The disclaimer object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `text`   | String | Required. The disclaimer text. The value must contain at least one non-whitespace character and shouldn't exceed 500 characters. |

### Sensitivity label object

> [!NOTE]
> Sensitivity labels are only applied to the agent, when the agent has Embedded Files.
> This property is not enabled yet, since Embedded Files are not enabled yet.

An optional JSON object that specifies the Microsoft Purview sensitivity label for the embedded files within the agent. It contains the highest protection amongst all the files that are embedded to the agents in [Embedded Knowledge property](#embedded-knowledge-object)

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | The GUID of the sensitivity label from Microsoft Purview. |

#### Sensitivity label object example

```json
{
  "sensitivity_label": {
    "id": "<guid>"
  }
}
```

### Worker agent object

Identifies a declarative agent that can be used by this agent. See [Connect to other agents](declarative-agent-connected-agent.md) for usage and best practices.

> [!NOTE]
> This capability is in preview.

The worker agent object contains the following property.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `id`     | String | The title ID of the application that contains the declarative agent. This is returned when publishing the application with the Microsoft 365 Agents Toolkit or may be found in the [agent metadata section of the developer mode card](debugging-agents-vscode.md#agent-metadata-section). You must specify either `id` or `file`, but not both. |

### User override object

Identifies capabilities configured in the [Capabilities object](#capabilities-object) that the user can override via a UI control in Microsoft 365 Copilot. The only supported action is `remove`, which enables a toggle control in the UI, allowing the user to enable or disable the capability from being used to generate responses.

> [!NOTE]
> When you declare `GraphConnectors` in the `path`, all available Copilot connectors are able to be toggled on or off. It is not possible to enable the toggle for specific connectors. The system buckets and displays Microsoft provided connectors using a friendly name, and custom connectors using the connector name (e.g., CB Insights). This behavior ensures end users can easily identify and manage connector sources when configuring their agent session. For more information on connectors and publishers, see [Microsoft 365 Copilot Connectors Gallery](/microsoftsearch/connectors-gallery).

The user override object contains the following properties.

| Property          | Type            | Description |
| ----------------- | --------------- | ----------- |
| `path`            | String          | Required. A JSONPath expression identifying the capability that users can modify. The JSONPath expression allows targeting specific capabilities by name only. |
| `allowed_actions` | Array of String | Required. Specifies that actions can be taken for the specified capabilities. The only supported action is `remove`. |

#### User override object example

The following example enables toggle controls for the [Web search](#web-search-object) and [Microsoft Teams messages](#microsoft-teams-messages-object) capabilities, allowing the user to toggle the capabilities on or off.

```json
{
  "user_overrides": [
    {
      "path": "$.capabilities[?(@.name == 'WebSearch')]",
      "allowed_actions": ["remove"]
    },
    {
      "path": "$.capabilities[?(@.name == 'TeamsMessages')]",
      "allowed_actions": ["remove"]
    }
  ]
}
```

### Editorial answers object

An optional JSON object that contains predefined question-answer pairs that the agent can use to respond to user queries based on semantic similarity. The object must contain either a `url` property or an `answers` property, but not both.

The editorial answers object contains the following properties.

| Property  | Type                                        | Description |
| --------- | ------------------------------------------- | ----------- |
| `url`     | String                                      | A URL that locates a document containing the editorial answers configuration. You must specify either `url` or `answers`, but not both. |
| `answers` | Array of [Answer object](#answer-object)    | An array of predefined question-answer pair objects. The array can't contain more than 300 objects. You must specify either `url` or `answers`, but not both. |

#### Answer object

A JSON object containing a predefined question-answer pair.

The answer object contains the following properties.

| Property               | Type                                                                | Description |
| ---------------------- | ------------------------------------------------------------------- | ----------- |
| `question`             | String                                                              | Required. The predefined question that is used for semantic similarity matching against user queries. It must contain at least one nonwhitespace character. |
| `answer`               | String                                                              | Required. The predefined answer that is returned when the user query matches the question above the similarity threshold. It must contain at least one nonwhitespace character. |
| `similarity_thresholds` | [Similarity thresholds object](#similarity-thresholds-object)      | Optional. Defines the similarity thresholds for matching user queries to this question. |

#### Similarity thresholds object

A JSON object that contains the minimum and maximum similarity threshold values for semantic matching.

The similarity thresholds object contains the following properties.

| Property | Type   | Description |
| -------- | ------ | ----------- |
| `min`    | Number | Required. The minimum similarity threshold. The value must be an integer between 0 and 10 inclusive. |
| `max`    | Number | Required. The maximum similarity threshold. The value must be an integer between 0 and 10 inclusive. |

#### Editorial answers object example

```json
{
  "editorial_answers": {
    "answers": [
      {
        "question": "What is the company's return policy?",
        "answer": "Our company offers a 30-day return policy for all products purchased in-store or online.",
        "similarity_thresholds": {
          "min": 3,
          "max": 8
        }
      },
      {
        "question": "How do I contact support?",
        "answer": "You can contact our support team by emailing support@contoso.com or calling 1-800-555-0199."
      }
    ]
  }
}
```

## Declarative agent manifest example

The following example shows a declarative agent manifest file that uses most of the manifest properties described in this article.

:::code language="json" source="includes/sample-manifests/declarative-agent-sample-manifest-1.7.json":::

## Related content

- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema)
