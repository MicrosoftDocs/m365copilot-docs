---
title: copilotConversationAttribution resource type
description: Describes an attribution in a chat message from the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversationAttribution resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Describes an attribution in a chat message from the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property              | Type                                                                                      | Description                                               |
|:----------------------|:------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| `attributionSource`   | [copilotConversationAttributionSource](#copilotconversationattributionsource-enumeration) | The attribution source (either grounding or model).       |
| `attributionType`     | [copilotConversationAttributionType](#copilotconversationattributiontype-enumeration)     | The attribution type (either citation or annotation).     |
| `imageFavIcon`        | String                                                                                    | The base64-encoded favicon image URL for the attribution. |
| `imageHeight`         | Int32                                                                                     | The height of the image, if included.                     |
| `imageWebUrl`         | String                                                                                    | The URL for the attribution image, if included.           |
| `imageWidth`          | Int32                                                                                     | The width of the image, if included.                      |
| `providerDisplayName` | String                                                                                    | Display text for the provider of the attribution.         |
| `seeMoreWebUrl`       | String                                                                                    | The URL for the attribution.                              |

### copilotConversationAttributionType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value        |
|:-------------|
| `citation`   |
| `annotation` |

### copilotConversationAttributionSource enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value       |
|:------------|
| `grounding` |
| `model`     |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationAttribution",
  "attributionType": "String",
  "providerDisplayName": "String",
  "attributionSource": "String",
  "seeMoreWebUrl": "String",
  "imageWebUrl": "String",
  "imageFavIcon": "String",
  "imageWidth": "Int32",
  "imageHeight": "Int32"
}
```
