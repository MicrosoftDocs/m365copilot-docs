---
title: Create a scrum Master Assistant agent to help Agile teams work effectively
description: Learn how to create a declarative agent in Copilot Studio agent builder using the Scrum Assistant template.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 04/01/2025
---

# Use the Scrum Assistant template to build an agent

## Overview

The Scrum Assistant declarative agent is designed to support scrum masters and Agile teams by providing real-time guidance on scrum ceremonies, backlog management, and Agile best practices. The assistant leverages trusted scrum resources, analyzes team artifacts (e.g., sprint reports, retrospective notes, etc.), and offers data-driven recommendations to enhance team performance, collaboration, and operational efficiency.

## Prerequisites

[!INCLUDE [agent-template-prerequisites](includes/agent-template-prerequisites.md)]

## Capabilities

Scrum Assistants support multiple languages and can:

- Provide real-time guidance on scrum ceremonies, backlog management, and best practices for Agile development
- Use trusted scrum resources and team artifacts to offer data-driven recommendations
- Help teams improve performance, collaboration, and efficiency.

## Use cases

These agents are useful in scenarios such as:

| **Scenario** | **Description** |
| -----------  | -----------  |
| Improve operational efficiency | Helps reduce inefficiencies and support continuous improvement with suggestions for streamlining scrum ceremonies and improving sprint execution. |
| Boost productivity   | Fetches relevant scrum insights automatically to enable teams to focus on their deliverables. |

## Extension opportunities

You can enhance the functionality of your Scrum Assistant agents by:

- **Referencing company-specific Agile practices:** Connect a SharePoint site or files that contain company-specific Agile practices that are stored internally to align guidance with your organizational standards.
- **Linking with your learning materials:** Use Microsoft Graph Connectors or APIs to index data about your team's Azure DevOps work items. This way, you can allow your Scrum Assistant to provide more contextual advice and guidance.

<!-- Note about IT involvement -->
[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

<!-- Limitations -->
[!INCLUDE [agent-template-limitations](includes/agent-template-limitations.md)]