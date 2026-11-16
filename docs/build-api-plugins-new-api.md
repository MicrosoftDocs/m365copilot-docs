---
title: Build API plugins with a new API for Microsoft 365 Copilot
description: Learn how to build API plugins with a new API for Microsoft 365 Copilot
#customer intent: As a developer, I want to build an API plugin with a new API so that I can connect a REST API to Microsoft 365 Copilot.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Build API plugins with a new API for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

[!INCLUDE [agents-toolkit-dev-tools-tip](includes/agents-toolkit-dev-tools-tip.md)]

[API plugins](overview-plugins.md) let a declarative agent call a REST API. Use the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to generate an agent project, an API plugin manifest, and a REST API implementation as a starting point.

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)
- [Node.js](https://nodejs.org/) 20.x or 22.x. To confirm your installed version, run `node --version`.
<!-- REVIEW (D6 / ADO 7509274 — SME-gated; do not assert a number): The supported
Node.js versions for THIS plugin-build path are unconfirmed. Repo statements currently
DISAGREE and must NOT be cross-imported: build-api-plugins-new-api.md=20.x/22.x;
build-api-plugins-local-office-api.md=18,20,22,24; build-your-first-connector.md=18,20,22;
eval CLI=24.12.0+. Per the D6 hard rule, do not invent versions and do not import the
eval-CLI number. An SME must establish the authoritative matrix before any labeled
"Supported Node.js versions" section is added here. The numbers above are quotes of
existing doc text for SME triage only — none is asserted as correct. -->
<!-- REVIEW-ASSIST (auto, non-authoritative — human must verify)
attempt: This page's published value (20.x/22.x) matches its own Learn page, but the four-page conflict and the D6 do-not-assert rule remain unresolved.
confidence: MEDIUM
learn-safe: page-consistent only (no cross-path authority)
sources: learn.microsoft.com/microsoft-365-copilot/extensibility/build-api-plugins-new-api; internal: workiq confirms only this page's number
verify: WorkIQ confirmed the published page states 20.x/22.x but did not reconcile the differing numbers on the other build pages.
recommendation: Hold — do not assert a Node.js matrix; SME must reconcile the four pages per ADO 7509274. -->

## Create the agent and API

[!INCLUDE [toolkit-version-note](includes/toolkit-version-note.md)]

1. Open Visual Studio Code. If Agents Toolkit isn't already installed, see [Install Agents Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with a New API**.

1. Select **OAuth** for the **Authentication Type**.

1. Select your preferred programming language: JavaScript or TypeScript. This guide assumes TypeScript.

1. Choose a location for the agent project.

1. Enter `Repairs Agent` as a name for your agent project.

When you complete these steps, Agents Toolkit generates the agent and API project files, including the API plugin manifest, and opens the project in a new Visual Studio Code window. For details, see the **README.md** file in the generated project's root directory.

## Run the API and sideload the agent

1. In the Visual Studio Code window with the agent project loaded, select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. Select the **Run and Debug** icon in the left-hand Activity Bar.

1. Select either **Debug in Copilot (Edge)** or **Debug in Copilot (Chrome)**, then press **F5** to start debugging.

Agents Toolkit builds the project, creates an app package containing the agent and its API plugin configuration, and sideloads the agent for your user account. It also starts the API locally. A new browser window opens to the Microsoft Teams app.

## Test the agent's API action

1. In Microsoft Teams in your browser, select **Copilot**.

1. Select **Repairs Agentlocal** in the Agents list on the right-hand side. If the list isn't available, select the **Copilot chats and more** icon in the top right corner.

1. Send a message to Copilot about repairs. For example, try `Which repairs are assigned to Karin?`.

At this point, the REST API is running locally on your development machine without authentication. To add authentication, deploy the API to Azure.

## Deploy to Azure and enable authentication

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked for a resource group name, either accept the default or change it as desired and press **Enter**.

1. Select a location for the resource group.

1. Review the message in the dialog. If everything looks correct, select **Provision** to continue.

1. Wait for the provisioning steps to complete, then select **Deploy** in the **Lifecycle** pane.

When you complete these steps, you deploy the REST API as an Azure Function with authentication. The agent calls that hosted API through its API plugin configuration.

## Test the agent with the authenticated API

1. In Microsoft Teams in your browser, select **Copilot**.

1. Select **Repairs Agentdev** in the Agents list on the right-hand side.

1. Send a message to Copilot about repairs. For example, try `Which repairs are assigned to Issac?`.
