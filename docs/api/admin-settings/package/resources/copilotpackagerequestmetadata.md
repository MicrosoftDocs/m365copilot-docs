---
title: copilotPackageRequestMetadata resource type
description: Represents request snapshots associated with a Copilot package detail read.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageRequestMetadata resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the `requestMetadata` property of [copilotPackageDetail](copilotpackagedetail.md).

Use the exact `$select=id,requestMetadata` on [Get package details](../copilotpackagedetail-get.md) for the metadata-only projection when its matching release is available. The native `includeRequestMetadata=true` flag isn't a declared Graph query option or a substitute for this selection.

A successful explicit metadata-only result is non-null; an empty `requests` collection means history was loaded with no returned Pending rows. Unreadable history is a failure, not an empty successful fallback. A null value on other detail paths can mean metadata wasn't loaded or wasn't available; it doesn't prove there are no pending requests. The returned rows are snapshots, not independently addressable resources or a complete historical ledger.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `requests` | [copilotPackageRequestInfo](copilotpackagerequestinfo.md) collection | Non-nullable. Returned request snapshots. Empty when metadata was loaded and no requests were found. |

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
