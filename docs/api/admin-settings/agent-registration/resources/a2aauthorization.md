---
title: a2aAuthorization complex type
description: Represents authorization configuration used to invoke an Agent2Agent server.
author: Ganeshkrish18
ms.author: gakrishn
ms.topic: reference
ms.date: 09/18/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

# a2aAuthorization complex type

<!-- cSpell:ignore gakrishn Ganeshkrish18 -->

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents authorization configuration used to invoke an Agent2Agent server.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `referenceId` | String | A reference identifier used when `type` is `oAuthPluginVault`, `apiKeyPluginVault`, `dynamicClientRegistration`, or `connectionVault`. The `referenceId` value is acquired independently when providing the necessary authorization configuration values. This mechanism prevents secret values from being stored in Microsoft Graph. Optional. |
| `type` | [a2aAuthorizationType](#a2aauthorizationtype-enumeration) | The type of authorization required to invoke the Agent2Agent server. Required. |

### a2aAuthorizationType enumeration

| Value | Description |
|:------|:------------|
| `none` | No authentication required (anonymous access). |
| `oAuthPluginVault` | OAuth 2.0 tokens stored inside Microsoft's secure vault. |
| `apiKeyPluginVault` | API key stored in a vault and referenced by ID. |
| `dynamicClientRegistration` | Dynamic OAuth client creation. |
| `connectionVault` | Authorization configuration stored in the connection vault. |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations). |

## Relationships

None.

## JSON representation

The following JSON representation shows the complex type.

```json
{
  "@odata.type": "#microsoft.graph.a2aAuthorization",
  "referenceId": "String",
  "type": "String"
}
```
