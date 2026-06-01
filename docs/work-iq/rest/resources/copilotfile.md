---
title: Work IQ - copilotFile resource type
description: OneDrive or SharePoint file being sent as context into a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotFile resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

OneDrive or SharePoint file being sent as context into a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property | Type   | Description                                 |
|:---------|:-------|:--------------------------------------------|
| `uri`    | String | The URI of the OneDrive or SharePoint file. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotFile",
  "uri": "String"
}
```
