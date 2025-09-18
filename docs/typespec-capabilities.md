---
title: "Declarative agent capabilities using TypeSpec for Microsoft 365 Copilot"
description: "Learn how to define capabilities for declarative agents using TypeSpec, including web search, OneDrive/SharePoint integration, Teams messages, email, Copilot connectors, and more."
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

# Capabilities of TypeSpec for Microsoft 365 Copilot

## `AgentCapabilities.WebSearch`

Indicates that the declarative agent can search the web for grounding information.

```typespec
op webSearch is AgentCapabilities.WebSearch;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| sites? | Sites | Optional. An array of objects that identify sites the agent is allowed to search. If this property is omitted, all the agent is allowed to search all sites. |

### Models

#### SiteUrl

Indicates a site that a declarative agent can search for content.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| url | url | Required. An absolute URL to a site to be searched for content. |

### Examples

```typespec
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

## `AgentCapabilities.CopilotConnectors`

Indicates that the declarative agent can search selected Copilot connectors for grounding information.

```typespec
op copilotConnectors is AgentCapabilities.CopilotConnectors;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| connections? | Connections | Optional. An array of objects that identify the Copilot connectors available to the declarative agent. If this property is omitted, all Copilot connectors in the organization are available to the declarative agent. |

### Models

#### Connection

Identifies a Copilot connector.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| connectionId | string | Required. The unique identifier of the Copilot connector. |
| additionalSearchTerms? | string | Optional. A Keyword Query Language (KQL) query to filter items based on fields in the connection's schema. |
| itemsByExternalId? | ExternalIdItem[] | Optional. Specifies specific items by ID in the Copilot connector that are available to the agent. |
| itemsByPath? | PathItem[] | Optional. Filters the items available to the agent by item paths (the itemPath semantic label on items). |
| itemsByContainerName? | ContainerNameItem[] | Optional. Filters the items available to the agent by container name (the containerName semantic label on items). |
| itemsByContainerUrl? | ContainerUrlItem[] | Optional. Filters the items available to the agent by container URL (the containerUrl semantic label on items). |

#### ExternalIdItem

Identifies an external item by its ID.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| externalId | string | Required. The unique identifier of the external item. |

#### PathItem

Identifies an external item by its path.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| path | string | Required. The path (itemPath semantic label value) of the external item. |

#### ContainerNameItem

Identifies a container by its name.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| containerName | string | Required. The name of the container (containerName semantic label value) of the external item. |

#### ContainerUrlItem

Identifies a container by its URL.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| containerUrl | string | Required. The URL of the container (containerUrl semantic label value) of the external item. |

### Examples

```typespec
// Basic Copilot connectors with no restrictions
op copilotConnectors is AgentCapabilities.CopilotConnectors;

// Specific connector with KQL filtering
op copilotConnectors is AgentCapabilities.CopilotConnectors<Connections = [
  {
    connectionId: "salesforce-connector-123";
    additionalSearchTerms: "CreatedDate>=2024-01-01 AND Priority:High";
  }
]>;

// Multiple connectors with different filtering approaches
op copilotConnectors is AgentCapabilities.CopilotConnectors<Connections = [
  {
    connectionId: "jira-connector-456";
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
    connectionId: "confluence-connector-789";
    additionalSearchTerms: "space:ENGINEERING AND lastModified>now()-30d";
    itemsByContainerUrl: [
      { containerUrl: "https://company.atlassian.net/wiki/spaces/ENGINEERING" },
      { containerUrl: "https://company.atlassian.net/wiki/spaces/PRODUCT" }
    ];
  },
  {
    connectionId: "database-connector-012";
    itemsByExternalId: [
      { externalId: "customers-table-001" },
      { externalId: "orders-view-002" },
      { externalId: "analytics-dashboard-003" }
    ];
  }
]>;
```

## `AgentCapabilities.OneDriveAndSharePoint`

Indicates that the declarative agent can search a user's SharePoint and OneDrive for grounding information.

```typespec
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| itemsBySharePointIds? | ItemsBySharePointIds | Optional. An array of objects that identify SharePoint or OneDrive sources using IDs. If both the itemsBySharePointIds and the itemsByUrl properties are omitted, all OneDrive and SharePoint sources in the organization are available to the declarative agent. |
| itemsByUrl? | ItemsByUrl | Optional. An array of objects that identify SharePoint or OneDrive sources by URL. If both the itemsBySharePointIds and the itemsByUrl properties are omitted, all OneDrive and SharePoint sources in the organization are available to the declarative agent. |

### Models

#### SharePointIds

Contains one or more object identifiers that identify a SharePoint or OneDrive resource.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| siteId? | string | Optional. A unique GUID identifier for a SharePoint or OneDrive site. |
| webId? | string | Optional. A unique GUID identifier for a specific web within a SharePoint or OneDrive site. |
| listId? | string | Optional. A unique GUID identifier for a document library within a SharePoint site. |
| itemId? | string | Optional. A unique GUID identifier used to scope a folder or file in the document library specified by the listId property. |
| searchAssociatedSites? | boolean | Optional. Indicates whether to enable searching associated sites. This value is only applicable when the siteId value references a SharePoint HubSite. |
| partType? | string | Optional. Indicates the type of part partId refers to. This value is only applicable when the partId value is present. Possible values are: OneNotePart. |
| partId? | string | Optional. A unique GUID identifier used to represent part of a SharePoint item such as a OneNote page. |

#### SharePointUrl

Represents the URL of a SharePoint or OneDrive resource.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| url | url | Optional. An absolute URL to a SharePoint or OneDrive resource. |

### Examples

```typespec
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
      listId: "ffffffff-eeee-dddd-cccc-bbbbbbbbbbbb";
      itemId: "12121212-3434-5656-7878-909090909090";
    }
  ],
  ItemsByUrl = []
>;

// OneNote-specific filtering with part IDs
op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
  ItemsBySharePointIds = [
    {
      siteId: "abcdefab-cdef-abcd-efab-cdefabcdefab";
      listId: "notebook-library-guid-here";
      partType: "OneNotePart";
      partId: "fedcbafe-dcba-fedc-bafe-dcbafedcbafe";
    },
    {
      siteId: "11223344-5566-7788-9900-aabbccddeeff";
      webId: "aabbccdd-eeff-1122-3344-556677889900";
      searchAssociatedSites: true;
    }
  ],
  ItemsByUrl = [
    { url: "https://contoso.sharepoint.com/sites/ProjectAlpha/Shared%20Documents" }
  ]
>;
```

## `AgentCapabilities.Email`

Indicates that the declarative agent can search through email messages in the mailboxes that the user has access to.

```typespec
op email is AgentCapabilities.Email;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| folderIds? | Folders | Optional. An array of folders objects. |
| sharedMailbox? | SharedMailbox | Optional. The SMTP address of a shared mailbox. |

### Models

#### Folder

##### Properties

| Name | Type | Description |
|------|------|-------------|
| folderId | string | Required. The well-known folder name or folder ID of the folder to reference. |

### Examples

```typespec
// Basic email search with no restrictions
op email is AgentCapabilities.Email;

// Email search with specific well-known folders
op email is AgentCapabilities.Email<
  Folders = [
    { folderId: "Inbox" },
    { folderId: "SentItems" },
    { folderId: "Archive" }
  ],
  SharedMailbox = string
>;

// Email search with shared mailbox access
op email is AgentCapabilities.Email<
  Folders = [],
  SharedMailbox = "support@contoso.com"
>;

// Email search with custom folders and shared mailbox
op email is AgentCapabilities.Email<
  Folders = [
    { folderId: "Inbox" },
    { folderId: "Projects" },
    { folderId: "Customer-Feedback-Folder-ID-123" },
    { folderId: "Legal-Review" }
  ],
  SharedMailbox = "legal@contoso.com"
>;
```

## `AgentCapabilities.TeamsMessages`

Indicates that the declarative agent can search through Teams channels, teams, meetings, 1:1 chats, and group chats.

```typespec
op teamsMessages is AgentCapabilities.TeamsMessages;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| urls? | TeamsMessagesByUrl | Optional. An array of objects that identify the URLs of the Teams channels, meeting chats, group chats, or 1:1 chats available to the declarative agent. Omitting this property allows an unscoped search through all of channels, meetings, 1:1 chats, and group chats. |

### Models

#### TeamsMessagesUrl

Identifies a Teams channel, team, or meeting chat.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| url | url | Required. A well-formatted Teams URL that links to either a Teams channel, meeting chat, group chat, or 1:1 chat. |

### Examples

```typespec
// Basic Teams messages with no restrictions
op teamsMessages is AgentCapabilities.TeamsMessages;

// Teams messages limited to specific channels and chats
op teamsMessages is AgentCapabilities.TeamsMessages<TeamsMessagesByUrl = [
  { url: "https://teams.microsoft.com/l/channel/19%3a123abc...%40thread.skype/General?groupId=12345&tenantId=67890" },
  { url: "https://teams.microsoft.com/l/chat/19%3ameeting_abc123...%40thread.v2/0?context=%7b%22Tid%22%3a%22...%22%7d" },
  { url: "https://teams.microsoft.com/l/channel/19%3a456def...%40thread.tacv2/Engineering?groupId=54321&tenantId=09876" }
]>;

// Teams messages for project-specific channels
op teamsMessages is AgentCapabilities.TeamsMessages<TeamsMessagesByUrl = [
  { url: "https://teams.microsoft.com/l/channel/19%3aprojectA...%40thread.tacv2/Development?groupId=11111&tenantId=22222" },
  { url: "https://teams.microsoft.com/l/channel/19%3aprojectA...%40thread.tacv2/Testing?groupId=11111&tenantId=22222" },
  { url: "https://teams.microsoft.com/l/chat/19%3astandup_daily...%40thread.v2/0?context=%7b%22Tid%22%3a%22...%22%7d" }
]>;
```

## `AgentCapabilities.ScenarioModels`

Indicates that the declarative agent can use task-specific models.

```typespec
op scenarioModels is AgentCapabilities.ScenarioModels<Models = [
  { id: "model-id" }
]>;
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| models | Models | Required. An array of objects that identifies the task-specific models available to the declarative agent. |

### Models

#### ScenarioModel

Identifies a task-specific model.

##### Properties

| Name | Type | Description |
|------|------|-------------|
| id | string | Required. The unique identifier for the model. |

### Examples

```typespec
// Single specialized model for analytics
op scenarioModels is AgentCapabilities.ScenarioModels<Models = [
  { id: "financial-forecasting-model-v3" }
]>;

// Multiple models for different business scenarios
op scenarioModels is AgentCapabilities.ScenarioModels<Models = [
  { id: "sentiment-analysis-model" },
  { id: "document-classification-model" },
  { id: "risk-assessment-model" }
]>;

// Comprehensive model suite for enterprise operations
op scenarioModels is AgentCapabilities.ScenarioModels<Models = [
  { id: "customer-churn-prediction" },
  { id: "inventory-optimization" },
  { id: "fraud-detection-advanced" },
  { id: "content-recommendation-engine" },
  { id: "compliance-scoring-model" }
]>;
```

## `AgentCapabilities.GraphicArt`

Indicates that the declarative agent can create images and art based on the text input from the user.

```typespec
op graphicArt is AgentCapabilities.GraphicArt;
```

### Examples

```typespec
op graphicArt is AgentCapabilities.GraphicArt;
```

## `AgentCapabilities.CodeInterpreter`

Indicates that the declarative agent can generate and execute Python code to solve complex math problems, analyze data, generate visualizations, and more.

```typespec
op codeInterpreter is AgentCapabilities.CodeInterpreter;
```

### Examples

```typespec
op codeInterpreter is AgentCapabilities.CodeInterpreter;
```

## `AgentCapabilities.People`

Indicates that the declarative agent can search for information about people in the organization.

```typespec
op people is AgentCapabilities.People;
```

### Examples

```typespec
op people is AgentCapabilities.People;
```