---
title: agentRegistration resource type
description: Represents an agent registration containing metadata, endpoint configuration, and publishing information.
author: Ganeshkrish18
ms.author: gakrishn
ms.topic: reference
ms.date: 11/05/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

# agentRegistration resource type

<!-- cSpell:ignore gakrishn Ganeshkrish18 -->

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents an agent registration containing metadata, endpoint configuration, and publishing information. This entity provides developers and administrators with all details needed to manage agent instances including their owners and agent card manifest.

## Methods

| Method | Return type | Description |
|:-------|:------------|:------------|
| [Create](../agentregistration-create.md) | `agentRegistration` | Create a new `agentRegistration` object. |
| [Get](../agentregistration-get.md) | `agentRegistration` | Retrieve the properties of an `agentRegistration` object. |
| [Update](../agentregistration-update.md) | None | Update an `agentRegistration` object. |
| [Delete](../agentregistration-delete.md) | None | Delete an `agentRegistration` object. |

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `a2aAuthorization` | [a2aAuthorization](a2aauthorization.md) | Authorization configuration used to invoke an Agent2Agent server. Optional. |
| `agentCard` | [Json](/graph/api/resources/json) | Flexible JSON manifest containing agent card information following public manifest specifications. Can include display name, description, icon URL, version, provider, capabilities, skills, security, and other manifest-defined fields. |
| `agentIdentityBlueprintId` | String | Agent identity blueprint identifier. |
| `agentIdentityId` | String | Entra agent identity identifier. |
| `createdBy` | String | The unique identifier of the user or app who created the agent registration. Required on create. |
| `description` | String | The agent description providing an overview of its purpose and capabilities. |
| `displayName` | String | Display name for the agent instance. Required on create. |
| `id` | String | Unique identifier for the agent registration. Inherited from [entity](/graph/api/resources/entity). |
| `lastPublishedBy` | String | The unique identifier of the last person to publish the agent. |
| `managedByAppId` | String | Application identifier managing this agent. |
| `originatingStore` | String | Name of the store or system where the agent originated. |
| `ownerIds` | String collection | List of owner identifiers for the agent. Either owners or `managedByAppId` is required. |
| `sourceAgentId` | String | Original agent identifier from the source system. This value can be null. Use the registration's `id` to address the Microsoft Graph resource. |
| `sourceCreatedDateTime` | DateTimeOffset | The date and time when the agent instance was created from source. Required on create. |
| `sourceLastModifiedDateTime` | DateTimeOffset | The date and time when the agent instance was last modified from source. Required on create. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.agentRegistration",
  "id": "String",
  "displayName": "String",
  "description": "String",
  "ownerIds": ["String"],
  "createdBy": "String",
  "sourceCreatedDateTime": "String (timestamp)",
  "sourceLastModifiedDateTime": "String (timestamp)",
  "lastPublishedBy": "String",
  "managedByAppId": "String",
  "sourceAgentId": "String",
  "originatingStore": "String",
  "agentIdentityId": "String",
  "agentIdentityBlueprintId": "String",
  "a2aAuthorization": {
    "@odata.type": "microsoft.graph.a2aAuthorization"
  },
  "agentCard": {
    "@odata.type": "microsoft.graph.Json"
  }
}
```
