---
title: aiInteractionHistory resource type
description: Represents a list of messages that are exchanged and involve AI.
ms.date: 08/08/2025
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

## Licensing and prerequisites

> [!IMPORTANT]
> Access to AI interaction export data may require **Microsoft 365 Copilot licensing** depending on your tenant configuration and the interaction sources you intend to export. Ensure your tenant has the necessary Copilot licenses assigned to users whose interactions you are querying, and that any required admin settings are enabled.  
> See **[License options for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-licensing)** and **[Set up Microsoft 365 Copilot and assign licenses](/copilot/microsoft-365/microsoft-365-copilot-setup)**.

> [!NOTE]
> This API also requires appropriate **app permissions** and **admin consent**. See the **Permissions** section below for the exact scopes.

## Data coverage (what interactions are returned)

The **Interaction Export API** returns interactions recorded by Microsoft 365 AI experiences that write to the interaction history service. The following guidance clarifies **which interaction types are included**:

- **Included (tenant-dependent):**
  - **Microsoft 365 Copilot experiences** that persist interactions to the interaction history service, such as Copilot in Microsoft 365 apps and **Copilot chat** in Microsoft 365, when enabled for the user and tenant.
  - Interactions where Copilot surfaces **enterprise data** the user is authorized to access (for example, content governed by Microsoft Purview) and that are recorded as AI interactions.

- **May be included or excluded depending on configuration:**
  - **Third‑party or line‑of‑business AI experiences** integrated via connectors, plugins, or extensions **only if** they write interactions to the interaction history service and your tenant has enabled their export.

- **Not included:**
  - Interactions from AI experiences that **do not** persist to the interaction history service.
  - Consumer or personal Microsoft accounts.

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
