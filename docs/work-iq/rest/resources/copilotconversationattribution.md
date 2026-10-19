---
title: Work IQ - copilotConversationAttribution resource type
description: Describes a citation or annotation in a message from the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotConversationAttribution resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Describes a citation or annotation in a [copilotConversationResponseMessage](copilotconversationresponsemessage.md) from the Work IQ Chat API.

## Properties

| Property              | Type                                                                                      | Description                                               |
|:----------------------|:------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| `attributionSource`   | [copilotConversationAttributionSource](#copilotconversationattributionsource-enumeration) | The source of the attribution.                            |
| `attributionType`     | [copilotConversationAttributionType](#copilotconversationattributiontype-enumeration)     | The type of attribution.                                  |
| `imageFavIcon`        | String                                                                                    | The base64-encoded favicon image URL for the attribution. |
| `imageHeight`         | Int32                                                                                     | The height of the image, if included.                     |
| `imageWebUrl`         | String                                                                                    | The URL for the attribution image, if included.           |
| `imageWidth`          | Int32                                                                                     | The width of the image, if included.                      |
| `providerDisplayName` | String                                                                                    | Display text for the provider of the attribution.         |
| `seeMoreWebUrl`       | String                                                                                    | The destination URL for the attribution.                  |

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
