---
title: Declarative agent capabilities using TypeSpec for Microsoft 365 Copilot
description: Learn how to define capabilities for declarative agents using TypeSpec, including web search, OneDrive/SharePoint integration, Teams messages, email, Copilot connectors, and more.
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 12/03/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 -->

# Declarative agent capabilities in TypeSpec for Microsoft 365 Copilot

TypeSpec for Microsoft 365 Copilot provides built-in capabilities that enable declarative agents to access Microsoft 365 services and external resources. Available capabilities include **CodeInterpreter**, **CopilotConnectors**, **Dataverse**, **Email**, **GraphicArt**, **Meetings**, **OneDriveAndSharePoint**, **People**, **ScenarioModels**, **TeamsMessages**, and **WebSearch**. Each capability can be configured with specific parameters to control scope.

| Capability | Description |
|------------|-------------|
| [CodeInterpreter](#agentcapabilitiescodeinterpreter) | Generate and run Python code to solve math problems, analyze data, and create visualizations. |
| [CopilotConnectors](#agentcapabilitiescopilotconnectors) | Search selected Microsoft 365 Copilot connectors for grounding information. |
| [Dataverse](#agentcapabilitiesdataverse) | Search for information in Microsoft Dataverse environments and tables. |
| [Email](#agentcapabilitiesemail) | Search through email messages in accessible mailboxes. |
| [GraphicArt](#agentcapabilitiesgraphicart) | Create images and art based on text input. |
| [Meetings](#agentcapabilitiesmeetings) | Search meeting content. |
| [OneDriveAndSharePoint](#agentcapabilitiesonedriveandsharepoint) | Search SharePoint sites and OneDrive for grounding information. |
| [People](#agentcapabilitiespeople) | Search for information about people in the organization. |
| [ScenarioModels](#agentcapabilitiesscenariomodels) | Use task-specific models for specialized scenarios. |
| [TeamsMessages](#agentcapabilitiesteamsmessages) | Search through Teams channels, meetings, and chats. |
| [WebSearch](#agentcapabilitieswebsearch) | Search the web for grounding information. |

## `AgentCapabilities.CodeInterpreter`

Indicates that the declarative agent can generate and execute Python code to solve complex math problems, analyze data, generate visualizations, and more.

```typescript
op codeInterpreter is AgentCapabilities.CodeInterpreter;
```

### Example

```typescript
op codeInterpreter is AgentCapabilities.CodeInterpreter;
```

## `AgentCapabilities.CopilotConnectors`

Indicates that the declarative agent can search selected Copilot connectors for grounding information.

```typescript
op copilotConnectors is AgentCapabilities.CopilotConnectors;
```

### Parameters

| Name          | Type                               | Description |
|---------------|------------------------------------|-------------|
| `Connections` | Array of [Connection](#connection) | Optional. An array of objects that identify the Copilot connectors available to the declarative agent. If this property is omitted, all Copilot connectors in the organization are available to the declarative agent. |

### Models

#### Connection

Identifies a Copilot connector.

##### Properties

| Name                    | Type                                             | Description |
|-------------------------|--------------------------------------------------|-------------|
| `connectionId`          | string                                           | Required. The unique identifier of the Copilot connector. |
| `additionalSearchTerms` | string                                           | Optional. A Keyword Query Language (KQL) query to filter items based on fields in the connection's schema. |
| `itemsByContainerName`  | Array of [ContainerNameItem](#containernameitem) | Optional. Filters the items available to the agent by container name (the `containerName` semantic label on items). |
| `itemsByContainerUrl`   | Array of [ContainerUrlItem](#containerurlitem)   | Optional. Filters the items available to the agent by container URL (the `containerUrl` semantic label on items). |
| `itemsByExternalId`     | Array of [ExternalIdItem](#externaliditem)       | Optional. Specifies specific items by ID in the Copilot connector that are available to the agent. |
| `itemsByExternalUrl`    | Array of [ExternalUrlItem](#externalurlitem)     | Optional. Specifies items by external URL in the Copilot connector that are available to the agent. |
| `itemsByPath`           | Array of [PathItem](#pathitem)                   | Optional. Filters the items available to the agent by item paths (the `itemPath` semantic label on items). |

#### ContainerNameItem

Identifies a container by its name.

##### Properties

| Name            | Type   | Description |
|-----------------|--------|-------------|
| `containerName` | string | Required. The name of the container (`containerName` semantic label value) of the external item. |

#### ContainerUrlItem

Identifies a container by its URL.

##### Properties

| Name           | Type   | Description |
|----------------|--------|-------------|
| `containerUrl` | string | Required. The URL of the container (`containerUrl` semantic label value) of the external item. |

#### ExternalIdItem

Identifies an external item by its ID.

##### Properties

| Name         | Type   | Description |
|--------------|--------|-------------|
| `externalId` | string | Required. The unique identifier of the external item. |

#### ExternalUrlItem

Identifies an external item by its URL.

##### Properties

| Name  | Type   | Description |
|-------|--------|-------------|
| `url` | string | Required. The URL of the external item. |

#### PathItem

Identifies an external item by its path.

##### Properties

| Name   | Type   | Description |
|--------|--------|-------------|
| `path` | string | Required. The path (`itemPath` semantic label value) of the external item. |

### Example

```typescript
// Basic Copilot connectors with no restrictions
op copilotConnectors is AgentCapabilities.CopilotConnectors;

// Specific connectors
op copilotConnectors is AgentCapabilities.CopilotConnectors<Connections = [
  {
    connectionId: "ticketsconnector123";
  },
  {
    connectionId: "wikiconnector123";
  }
]>;

// Specific connector with KQL filtering
op copilotConnectors is AgentCapabilities.CopilotConnectors<Connections = [
  {
    connectionId: "ticketsconnector123";
    additionalSearchTerms: "CreatedDate>=2024-01-01 AND Priority:High";
  }
]>;

// Multiple connectors with different filtering approaches
op copilotConnectors is AgentCapabilities.CopilotConnectors<Connections = [
  {
    connectionId: "ticketsconnector456";
    itemsByPath: [
      { path: "/projects/customer-portal" },
      { path: "/projects/mobile-app" }
    ];
    itemsByContainerName: [
      { containerName: "Engineering Projects" },
      { containerName: "Product Backlog" }
    ];
  },
  {
    connectionId: "wikiconnector789";
    additionalSearchTerms: "space:ENGINEERING AND lastModified>now()-30d";
    itemsByContainerUrl: [
      { containerUrl: "https://wiki.contoso.com/ENGINEERING" },
      { containerUrl: "https://wiki.contoso.com/PRODUCT" }
    ];
  },
  {
    connectionId: "databaseconnector012";
    itemsByExternalId: [
      { externalId: "customer001" },
      { externalId: "customer002" },
      { externalId: "customer007" }
    ];
  }
]>;
```

## `AgentCapabilities.Dataverse`

Indicates that the declarative agent can search for information in Microsoft Dataverse.

```typescript
op dataverse is AgentCapabilities.Dataverse;
```

### Parameters

| Name               | Type                                                           | Description |
|--------------------|----------------------------------------------------------------|-------------|
| `KnowledgeSources` | Array of [DataverseKnowledgeSource](#dataverseknowledgesource) | Optional. An array of objects that identify the Dataverse knowledge sources available to the declarative agent. If this property is omitted, all accessible Dataverse environments are available to the declarative agent. |

### Models

#### DataverseKnowledgeSource

Represents a Dataverse knowledge source.

##### Properties

| Name       | Type                                       | Description |
|------------|--------------------------------------------|-------------|
| `hostName` | string                                     | Required. The hostname of the Dataverse environment. |
| `skill`    | string                                     | Optional. The skill identifier for the knowledge source. |
| `tables`   | Array of [DataverseTable](#dataversetable) | Optional. An array of tables that the declarative agent can access. If this property is omitted, all accessible tables in the environment are available to the declarative agent. |

#### DataverseTable

Represents a Dataverse table.

##### Properties

| Name        | Type   | Description                              |
|-------------|--------|------------------------------------------|
| `tableName` | string | Required. The logical name of the table. |

### Example

```typescript
// Basic Dataverse with no restrictions
op dataverse is AgentCapabilities.Dataverse;

// Dataverse with specific environment
op dataverse is AgentCapabilities.Dataverse<KnowledgeSources = [
  {
    hostName: "contoso.crm.dynamics.com";
  }
]>;

// Dataverse with specific tables
op dataverse is AgentCapabilities.Dataverse<KnowledgeSources = [
  {
    hostName: "contoso.crm.dynamics.com";
    tables: [
      { tableName: "account" },
      { tableName: "contact" },
      { tableName: "opportunity" }
    ];
  }
]>;

// Dataverse with skill and tables
op dataverse is AgentCapabilities.Dataverse<KnowledgeSources = [
  {
    hostName: "contoso.crm.dynamics.com";
    skill: "sales-assistant";
    tables: [
      { tableName: "account" },
      { tableName: "lead" }
    ];
  }
]>;
```

## `AgentCapabilities.Email`

Indicates that the declarative agent can search through email messages in the mailboxes that the user has access to.

```typescript
op email is AgentCapabilities.Email;
```

### Parameters

| Name            | Type                       | Description                                     |
|-----------------|----------------------------|-------------------------------------------------|
| `Folders`       | Array of [Folder](#folder) | Optional. An array of folders objects.          |
| `SharedMailbox` | string                     | Optional. The SMTP address of a shared mailbox. |

### Models

#### Folder

##### Properties

| Name       | Type   | Description                                                                   |
|------------|--------|-------------------------------------------------------------------------------|
| `folderId` | string | Required. The well-known folder name or folder ID of the folder to reference. |

### Example

```typescript
// Basic email search with no restrictions
op email is AgentCapabilities.Email;

// Email search with specific well-known folders
op email is AgentCapabilities.Email<
  Folders = [
    { folderId: "Inbox" },
    { folderId: "SentItems" },
    { folderId: "Archive" }
  ]
>;

// Email search with shared mailbox access
op email is AgentCapabilities.Email<
  SharedMailbox = "support@contoso.com"
>;

// Email search with custom folders and shared mailbox
op email is AgentCapabilities.Email<
  Folders = [
    { folderId: "Inbox" }
  ],
  SharedMailbox = "legal@contoso.com"
>;
```

## `AgentCapabilities.GraphicArt`

Indicates that the declarative agent can create images and art based on the text input from the user.

```typescript
op graphicArt is AgentCapabilities.GraphicArt;
```

### Example

```typescript
op graphicArt is AgentCapabilities.GraphicArt;
```

## `AgentCapabilities.Meetings`

Indicates that the declarative agent can search meeting content.

```typescript
op meetings is AgentCapabilities.Meetings;
```

### Example

```typescript
op meetings is AgentCapabilities.Meetings;
```

## `AgentCapabilities.OneDriveAndSharePoint`

Indicates that the declarative agent can search a user's SharePoint and OneDrive for grounding information.

```typescript
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint;
```

### Parameters

| Name                   | Type                                     | Description |
|------------------------|------------------------------------------|-------------|
| `ItemsBySharePointIds` | Array of [SharePointIds](#sharepointids) | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. If both the `ItemsBySharePointIds` and the `ItemsByUrl` parameters are omitted, all OneDrive and SharePoint sources in the organization are available to the declarative agent. |
| `ItemsByUrl`           | Array of [SharePointUrl](#sharepointurl) | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. If both the `ItemsBySharePointIds` and the `ItemsByUrl` parameters are omitted, all OneDrive and SharePoint sources in the organization are available to the declarative agent. |

### Models

#### SharePointIds

Contains one or more object identifiers that identify a SharePoint or OneDrive resource.

##### Properties

| Name     | Type   | Description                                                                                                                 |
|----------|--------|-----------------------------------------------------------------------------------------------------------------------------|
| `itemId` | string | Optional. A unique GUID identifier used to scope a folder or file in the document library specified by the listId property. |
| `listId` | string | Optional. A unique GUID identifier for a document library within a SharePoint site.                                         |
| `siteId` | string | Optional. A unique GUID identifier for a SharePoint or OneDrive site.                                                       |
| `webId`  | string | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site.                                 |

#### SharePointUrl

Represents the URL of a SharePoint or OneDrive resource.

##### Properties

| Name  | Type   | Description                                                     |
|-------|--------|-----------------------------------------------------------------|
| `url` | string | Required. An absolute URL to a SharePoint or OneDrive resource. |

### Example

```typescript
// Basic OneDrive and SharePoint with no restrictions
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint;

// URL-based filtering for specific sites
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
  ItemsBySharePointIds = [],
  ItemsByUrl = [
    { url: "https://contoso.sharepoint.com/sites/Engineering" },
    { url: "https://contoso.sharepoint.com/sites/ProductManagement" },
    { url: "https://contoso-my.sharepoint.com/personal/john_contoso_com" }
  ]
>;

// ID-based filtering with comprehensive site and document library scoping
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
  ItemsBySharePointIds = [
    {
      siteId: "12345678-1234-1234-1234-123456789012";
      searchAssociatedSites: true;
    },
    {
      siteId: "87654321-4321-4321-4321-210987654321";
      webId: "11111111-2222-3333-4444-555555555555";
      listId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
    },
    {
      siteId: "99999999-8888-7777-6666-555555555555";
      webId: "ffffffff-dddd-cccc-3333-cccccccccccc";
      listId: "ffffffff-eeee-dddd-cccc-bbbbbbbbbbbb";
      itemId: "12121212-3434-5656-7878-909090909090";
    }
  ],
  ItemsByUrl = [
    { url: "https://contoso.sharepoint.com/sites/Engineering" }
  ]
>;
```

## `AgentCapabilities.People`

Indicates that the declarative agent can search for information about people in the organization.

```typescript
op people is AgentCapabilities.People;
```

### Example

```typescript
op people is AgentCapabilities.People;
```

## `AgentCapabilities.ScenarioModels`

Indicates that the declarative agent can use task-specific models.

```typescript
op scenarioModels is AgentCapabilities.ScenarioModels<ModelsById = [
  { id: "model-id" }
]>;
```

### Parameters

| Name         | Type                                     | Description |
|--------------|------------------------------------------|-------------|
| `ModelsById` | Array of [ScenarioModel](#scenariomodel) | Required. An array of objects that identifies the task-specific models available to the declarative agent. |

### Models

#### ScenarioModel

Identifies a task-specific model.

##### Properties

| Name | Type   | Description                                    |
|------|--------|------------------------------------------------|
| `id` | string | Required. The unique identifier for the model. |

### Example

```typescript
// Single specialized model for analytics
op scenarioModels is AgentCapabilities.ScenarioModels<ModelsById = [
  { id: "financial-forecasting-model-v3" }
]>;

// Multiple models for different business scenarios
op scenarioModels is AgentCapabilities.ScenarioModels<ModelsById = [
  { id: "sentiment-analysis-model" },
  { id: "document-classification-model" },
  { id: "risk-assessment-model" }
]>;
```

## `AgentCapabilities.TeamsMessages`

Indicates that the declarative agent can search through Teams channels, teams, meetings, 1:1 chats, and group chats.

```typescript
op teamsMessages is AgentCapabilities.TeamsMessages;
```

### Parameters

| Name   | Type                                           | Description |
|--------|------------------------------------------------|-------------|
| `Urls` | Array of [TeamsMessagesUrl](#teamsmessagesurl) | Optional. An array of objects that identify the URLs of the Teams channels, meeting chats, group chats, or 1:1 chats available to the declarative agent. Omitting this property allows an unscoped search through all of channels, meetings, 1:1 chats, and group chats. |

### Models

#### TeamsMessagesUrl

Identifies a Teams channel, team, or meeting chat.

##### Properties

| Name  | Type   | Description                                                                                                       |
|-------|--------|-------------------------------------------------------------------------------------------------------------------|
| `url` | string | Required. A well-formatted Teams URL that links to either a Teams channel, meeting chat, group chat, or 1:1 chat. |

### Example

```typescript
// Basic Teams messages with no restrictions
op teamsMessages is AgentCapabilities.TeamsMessages;

// Teams messages limited to specific channels and chats
op teamsMessages is AgentCapabilities.TeamsMessages<Urls = [
  { url: "https://teams.microsoft.com/l/channel/19%3a123abc...%40thread.skype/General?groupId=12345&tenantId=67890" },
  { url: "https://teams.microsoft.com/l/chat/19%3ameeting_abc123...%40thread.v2/0?context=%7b%22Tid%22%3a%22...%22%7d" },
  { url: "https://teams.microsoft.com/l/channel/19%3a456def...%40thread.tacv2/Engineering?groupId=54321&tenantId=09876" }
]>;

// Teams messages for project-specific channels
op teamsMessages is AgentCapabilities.TeamsMessages<Urls = [
  { url: "https://teams.microsoft.com/l/channel/19%3aprojectA...%40thread.tacv2/Development?groupId=11111&tenantId=22222" },
  { url: "https://teams.microsoft.com/l/channel/19%3aprojectA...%40thread.tacv2/Testing?groupId=11111&tenantId=22222" },
  { url: "https://teams.microsoft.com/l/chat/19%3astandup_daily...%40thread.v2/0?context=%7b%22Tid%22%3a%22...%22%7d" }
]>;
```

## `AgentCapabilities.WebSearch`

Indicates that the declarative agent can search the web for grounding information.

```typescript
op webSearch is AgentCapabilities.WebSearch;
```

### Parameters

| Name    | Type                         | Description |
|---------|------------------------------|-------------|
| `Sites` | Array of [SiteUrl](#siteurl) | Optional. An array of objects that identify sites the agent is allowed to search. If this property is omitted, all the agent is allowed to search all sites. |

### Models

#### SiteUrl

Indicates a site that a declarative agent can search for content.

##### Properties

| Name  | Type   | Description                                                     |
|-------|--------|-----------------------------------------------------------------|
| `url` | string | Required. An absolute URL to a site to be searched for content. |

### Example

```typescript
// Basic web search with no restrictions
op webSearch is AgentCapabilities.WebSearch;

// Web search limited to specific documentation sites
op webSearch is AgentCapabilities.WebSearch<Sites = [
  {
    url: "https://learn.microsoft.com";
  },
  {
    url: "https://docs.microsoft.com";
  },
  {
    url: "https://techcommunity.microsoft.com";
  }
]>;

// Web search for company-specific resources
op webSearch is AgentCapabilities.WebSearch<Sites = [
  {
    url: "https://company.com/knowledge-base";
  },
  {
    url: "https://support.company.com";
  }
]>;
```
