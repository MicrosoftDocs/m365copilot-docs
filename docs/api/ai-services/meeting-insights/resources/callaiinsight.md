---
title: callAiInsight resource type
description: Represents a set of AI insights associated with an onlineMeeting.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
---

# callAiInsight resource type

<!-- cSpell:ignore Anjali-Patle anjalipatle -->

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a set of AI insights associated with an online meeting.

## Methods

| Method                                      | Return type                | Description                                                                                                                                             |
|:--------------------------------------------|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [List](../onlinemeeting-list-aiinsights.md) | `callAiInsight` collection | Get the list of `callAiInsight` objects associated with an [onlineMeeting](/graph/api/resources/onlinemeeting?view=graph-rest-beta&preserve-view=true). |
| [Get](../callaiinsight-get.md)              | `callAiInsight`            | Get a `callAiInsight` object associated with an [onlineMeeting](/graph/api/resources/onlinemeeting?view=graph-rest-beta&preserve-view=true).            |

## Properties

| Property               | Type                                                | Description                                                                                                                                                                                                                                         |
|:-----------------------|:----------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `actionItems`          | [actionItem](actionitem.md) collection              | The collection of AI-generated action items. Read-only.                                                                                                                                                                                             |
| `callId`               | String                                              | The ID for the online meeting call for which the `callAiInsight` was generated. Read-only.                                                                                                                                                          |
| `contentCorrelationId` | String                                              | The unique ID that correlates the transcript from which the insights were generated. Read-only.                                                                                                                                                     |
| `createdDateTime`      | DateTimeOffset                                      | Date and time at which the corresponding transcript was created. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014 is `2014-01-01T00:00:00Z`. Read-only. |
| `endDateTime`          | DateTimeOffset                                      | Date and time at which the corresponding transcription ends. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014 is `2014-01-01T00:00:00Z`. Read-only.     |
| `id`                   | String                                              | The unique identifier for the `callAiInsight` entity. Read-only.                                                                                                                                                                                    |
| `meetingNotes`         | [meetingNote](meetingnote.md) collection            | The collection of AI-generated meeting notes. Read-only.                                                                                                                                                                                            |
| `viewpoint`            | [callAiInsightViewPoint](callaiinsightviewpoint.md) | The caller-specific properties of the `callAiInsight` entity. Read-only.                                                                                                                                                                            |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.callAiInsight",
  "actionItems": [{"@odata.type": "microsoft.graph.actionItem"}],
  "callId": "String",
  "contentCorrelationId": "String",
  "createdDateTime": "String (timestamp)",
  "endDateTime": "String (timestamp)",
  "id": "String (identifier)",
  "meetingNotes": [{"@odata.type": "microsoft.graph.meetingNote"}],
  "viewpoint": {"@odata.type": "microsoft.graph.callAiInsightViewPoint"}
}
```
