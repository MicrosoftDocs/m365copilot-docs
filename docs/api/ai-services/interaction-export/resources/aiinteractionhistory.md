---
title: aiInteractionHistory resource type
description: Represents a list of messages that are exchanged and involve AI.
ms.date: 12/04/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionHistory resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents a list of messages that are exchanged and involve AI.

### Licensing and prerequisites

Access to AI interaction export data might require a Microsoft 365 Copilot add-on license, depending on your tenant configuration and the interaction sources you want to export. Make sure that the users in your tenant for whom you're querying interactions have Copilot licenses assigned, and that any required admin settings are enabled. For more information, see [License options for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-licensing) and [Set up Microsoft 365 Copilot and assign licenses](/copilot/microsoft-365/microsoft-365-copilot-setup).

> [!NOTE]
> This API also requires appropriate **app permissions** and **admin consent**. For more information, see [Permissions](/microsoft-365-copilot/extensibility/api/ai-services/interaction-export/aiinteractionhistory-getallenterpriseinteractions?pivots=graph-preview#permissions).

### AI interactions returned

The AI interaction history API returns interactions recorded by Microsoft 365 AI experiences that write to the interaction history service.

The following interactions are returned when Microsoft 365 Copilot features are enabled for your organization and the user:

- **Microsoft 365 Copilot experiences** that save interaction data to the interaction history service, such as Copilot in Microsoft 365 apps and the Microsoft 365 Copilot app, when enabled for the user and tenant.
- Interactions where Copilot surfaces **enterprise data** the user is authorized to access (for example, content governed by Microsoft Purview) and that are recorded as AI interactions.

The following interactions might be included or excluded:

- **Partner or line‑of‑business AI experiences** are included if they're integrated through connectors, plugins, or extensions and write interactions to the interaction history service. Your organization must also enable export for these experiences.

The following interactions are never returned by the API:

  - Interactions from AI experiences that don't save data to the interaction history service.
- Interactions from consumer or personal Microsoft accounts.

## Methods

| Method                                                                                     | Return Type                                  | Description                                                                                              |
|:-------------------------------------------------------------------------------------------|:---------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| [Get all enterprise interactions](../aiinteractionhistory-getallenterpriseinteractions.md) | [aiInteraction](aiinteraction.md) collection | Get all Microsoft 365 Copilot interaction data, including user prompts to Copilot and Copilot responses. |

## Properties

None.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.aiInteractionHistory"
}
```
