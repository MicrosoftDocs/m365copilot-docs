---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

A declarative agent is a customized version of Microsoft 365 Copilot that allows users to create personalized experiences by declaring specific instructions, actions, and knowledge. This guide provides information about how to build a declarative agent by using Teams Toolkit.

The agent that you build in this tutorial targets licensed Microsoft 365 Copilot users. You can also build agents for Microsoft 365 Copilot Chat users, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

:::image type="content" source="../../assets/images/build-dc/ttk-copilot-dc-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

For overview information, see [Declarative agents for Microsoft 365 Copilot](../../overview-declarative-agent.md).

[!INCLUDE [copilot-in-word-and-powerpoint](../copilot-in-word-and-powerpoint.md)]

## Prerequisites

Before you start, make sure that Microsoft 365 Copilot is available for your organization.

The following options are available for your development environment:

- A sandbox Microsoft 365 organization with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
- An [eligible Microsoft 365 or Office 365 production environment](../../prerequisites.md#organizations-with-microsoft-365-copilot-licenses) with a Microsoft 365 Copilot license.

The following resources are required to complete the steps described in this article:

- [Teams Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode#install-a-prerelease-version) version 5.10.0 or later
- [Kiota Visual Studio Code extension](/openapi/kiota/install?tabs=bash#install-the-visual-studio-code-extension) version 1.19.100000002 or later

You should be familiar with the following standards and guidelines for declarative agents for Microsoft 365 Copilot:

- Standards for compliance, performance, security, and user experience described in [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-plugin-for-microsoft-copilot-for-microsoft-365).
