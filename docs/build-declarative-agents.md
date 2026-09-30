---
title: Create declarative agents by using Microsoft 365 Agents Toolkit and JSON
description: Learn how to build a declarative agent for Microsoft 365 Copilot by using Microsoft 365 Agents Toolkit and JSON.
#customer intent: As a developer, I want to build and provision a declarative agent by using Microsoft 365 Agents Toolkit so that I can deliver a customized Microsoft 365 Copilot experience.
ms.date: 09/30/2026
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Tutorial: Create declarative agents by using Microsoft 365 Agents Toolkit and JSON

A [declarative agent](overview-declarative-agent.md) provides a goal-directed conversational experience powered by Microsoft 365 Copilot. You define its purpose, instructions, knowledge, and actions. This guide provides information about how to build a declarative agent by using [Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context).

The agent that you build in this tutorial targets licensed Microsoft 365 Copilot users. You can also build agents for Microsoft 365 Copilot Chat users, with limited capabilities. For details, see [Microsoft 365 Copilot developer licenses](prerequisites.md#microsoft-365-copilot-developer-licenses).

> [!NOTE]
> [Microsoft 365 Government tenants](https://www.microsoft.com/microsoft-365/government) don't support publishing agents through Agents Toolkit.

[!INCLUDE [agents-toolkit-dev-tools-tip](includes/agents-toolkit-dev-tools-tip.md)]

:::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

For overview information, see [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md). To compare agent types, see [Compare declarative and custom engine agents](agents-overview.md).

[!INCLUDE [copilot-in-word-and-powerpoint](includes/copilot-in-word-and-powerpoint.md)]

## Prerequisites

- A Microsoft 365 tenant where you can upload custom apps. **Provision** fails if custom app upload isn't enabled. To enable custom app upload, see [Microsoft 365 Agents Toolkit requirements](prerequisites.md#microsoft-365-agents-toolkit-requirements). For development environment and licensing options, see [Copilot development environment](prerequisites.md#copilot-development-environment).

The following resources are required to complete the steps described in this article:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode&context=/microsoft-365/copilot/extensibility/context)

[!INCLUDE [toolkit-version-note](includes/toolkit-version-note.md)]

You should be familiar with the following standards and guidelines for declarative agents for Microsoft 365 Copilot:

- Standards for compliance, performance, security, and user experience described in [Microsoft Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines).

## Create and provision a declarative agent with Microsoft 365 Agents Toolkit

Start by creating a basic declarative agent.

1. Open Visual Studio Code.

1. Select **Microsoft 365 Agents Toolkit > Create a New Agent/App**.

    :::image type="content" source="assets/images/build-da/ttk/create-new-app.png" alt-text="A screenshot of the Create a New Agent/App button in the Agents Toolkit sidebar":::

1. Select **Declarative Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-copilot-agent.png" alt-text="A screenshot of the New Project options with Agent selected":::

1. Select **No Action** to create a basic declarative agent.

1. Select **Default folder** to store your project root folder in the default location.

1. Enter `My Agent` as the **Application Name** and press **Enter**.

1. In the new Visual Studio Code window that opens, select **Microsoft 365 Agents Toolkit**, then select **Provision** in the **Lifecycle** pane.

    :::image type="content" source="assets/images/build-da/ttk/provision-agent.png" alt-text="A screenshot of the Provision option in the Lifecycle pane of Agents Toolkit":::

## Test the agent

<!-- PM-REVIEW (09/25/2026): Confirm the current Copilot UI for finding and opening an agent ("Copilot application," "conversation drawer icon"). -->

1. Go to the Copilot application at [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. Next to the **New Chat** button, select the conversation drawer icon.

1. Select the declarative agent **My Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-agent.png" alt-text="A screenshot of the declarative agent in Copilot":::

1. Enter a question for your declarative agent and make sure it replies with "Thanks for using Microsoft 365 Agents Toolkit to create your declarative agent!"

    :::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="A screenshot of an answer from the declarative agent in Microsoft 365 Copilot":::

## Next step

> [!div class="nextstepaction"]
> [Add instructions and conversation starters to a declarative agent created with Microsoft 365 Agents Toolkit](build-declarative-agents-customize-behavior.md)
