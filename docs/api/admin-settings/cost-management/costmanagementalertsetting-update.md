---
title: Update costManagementAlertSetting
description: Create or update a costManagementAlertSetting object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Update costManagementAlertSetting

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Create or update the notify-only alert configuration for a spending policy, represented by a [costManagementAlertSetting](resources/costmanagementalertsetting.md) object. `PATCH` creates the configuration on first write, and updates it afterward. Each threshold in the request body must set a concrete `@odata.type`, either `#microsoft.graph.percentageCostManagementAlertThreshold` or `#microsoft.graph.absoluteCostManagementAlertThreshold`.

Enabling alerting while no recipient is linked is refused with a `400 alertRecipientsRequired` response. An out-of-range percentage threshold is refused with a `400 invalidAlertThreshold` response.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
PATCH /copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The ETag of the parent spending policy. Required.                                                        |

## Request body

In the request body, supply a JSON representation of the [costManagementAlertSetting](resources/costmanagementalertsetting.md) object with the properties to change. `PATCH` has merge semantics:

- On an existing configuration, an empty JSON object (`{}`) is a valid request and leaves the configuration unchanged. On first write, `PATCH` creates the configuration.
- Omitted properties keep their current values; an explicit `null` is rejected.
- Set `thresholds` to an empty array (`[]`) to clear all thresholds without removing the configuration or its recipients.
- Recipients can't be sent inline. Manage them through the recipient `$ref` endpoints ([Add recipient](costmanagementalertsetting-post-recipients.md) and [Remove recipient](costmanagementalertsetting-delete-recipients.md)).

## Response

If successful, this method returns a `200 OK` response code and the created or updated [costManagementAlertSetting](resources/costmanagementalertsetting.md) object in the response body. The response includes an advanced `ETag` header.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/emailThresholdSettings
If-Match: W/"7"
Content-Type: application/json

{
  "isEnabled": true,
  "thresholds": [
    { "@odata.type": "#microsoft.graph.percentageCostManagementAlertThreshold", "value": 80 }
  ]
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
ETag: W/"8"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies('3f9e2c1a-0000-0000-0000-00000000c21b')/emailThresholdSettings/$entity",
  "id": "7d2b4f80-0000-0000-0000-0000000004f8",
  "isEnabled": true,
  "thresholds": [
    { "@odata.type": "#microsoft.graph.percentageCostManagementAlertThreshold", "value": 80 }
  ]
}
```
