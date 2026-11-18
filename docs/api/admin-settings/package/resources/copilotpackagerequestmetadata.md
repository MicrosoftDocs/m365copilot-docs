---
title: copilotPackageRequestMetadata resource type
description: Represents request snapshots associated with a Copilot package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# copilotPackageRequestMetadata resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents request snapshots associated with a [copilotPackageDetail](copilotpackagedetail.md) object.

A null `requestMetadata` on a regular detail read doesn't prove that no pending requests exist.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `requests` | [copilotPackageRequestInfo](copilotpackagerequestinfo.md) collection | Request snapshots associated with the package. An empty collection means no pending requests were returned only when metadata was loaded. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageRequestMetadata",
  "requests": [
    {
      "@odata.type": "microsoft.graph.copilotPackageRequestInfo"
    }
  ]
}
```
