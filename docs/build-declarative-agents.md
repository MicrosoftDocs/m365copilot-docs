---
title: Create declarative agents using Microsoft 365 Agents Toolkit
description: Learn how to build a declarative agent for Microsoft 365 Copilot using Microsoft 365 Agents Toolkit.
ms.date: 07/21/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Tutorial: Create declarative agents using Microsoft 365 Agents Toolkit

A declarative agent is a customized version of Microsoft 365 Copilot that allows users to create personalized experiences by declaring specific instructions, actions, and knowledge. This guide provides information about how to build a declarative agent by using Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)).

The agent that you build in this tutorial targets licensed Microsoft 365 Copilot users. You can also build agents for Microsoft 365 Copilot Chat users, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

> [!NOTE]
> Publishing agents via the Microsoft 365 Agents Toolkit isn't supported in [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants.

:::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

For overview information, see [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md).

[!INCLUDE [copilot-in-word-and-powerpoint](includes/copilot-in-word-and-powerpoint.md)]

## Prerequisites

Before you start, make sure that Microsoft 365 Copilot is available for your organization.

The following options are available for your development environment:

- A sandbox Microsoft 365 organization with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
- An [eligible Microsoft 365 or Office 365 production environment](prerequisites.md#organizations-with-microsoft-365-copilot-licenses) with a Microsoft 365 Copilot license.

The following resources are required to complete the steps described in this article:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode#install-a-prerelease-version)

[!INCLUDE [toolkit-version-note](includes/toolkit-version-note.md)]

You should be familiar with the following standards and guidelines for declarative agents for Microsoft 365 Copilot:

- Standards for compliance, performance, security, and user experience described in [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-plugin-for-microsoft-copilot-for-microsoft-365).

## Create a declarative agent

Begin by creating a basic declarative agent.

1. Open **Visual Studio Code**.

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

1. Navigate to the Copilot application with the URL [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. Next to the **New Chat** button, select the conversation drawer icon.

1. Select the declarative agent **My Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-agent.png" alt-text="A screenshot of the declarative agent in Copilot":::

1. Enter a question for your declarative agent and ensure that it replies with "Thanks for using Microsoft 365 Agents Toolkit to create your declarative agent!"

    :::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="A screenshot of an answer from the declarative agent in Microsoft 365 Copilot":::

## Next step

> [!div class="nextstepaction"]
> [Customize behavior with instructions and conversation starters](build-declarative-agents-customize-behavior.md)
