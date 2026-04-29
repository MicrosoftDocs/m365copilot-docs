---
title: Get values for Agent Evaluations CLI (preview) environment variables
description: Find your tenant ID, Azure OpenAI endpoint, API key, and agent ID so you can configure the M365 Copilot Agent Evaluations CLI.
ms.date: 04/28/2026
author: lauragra
ms.author: lauragra
ms.reviewer: sakov
ms.topic: how-to
ms.localizationpriority: medium
---

# Get values for environment variables

The Microsoft 365 Copilot Agent Evaluations CLI (`@microsoft/m365-copilot-eval`) reads connection and authentication settings from environment variables. This article shows you where to obtain each value.

For the list of variables and where to put them, see [Agent Evaluations CLI overview](evaluations-cli-overview.md#required-environment-variables) and [Quickstart: Use the Agent Evaluations CLI](evaluations-cli-quickstart.md#step-3-configure-environment-variables).

> [!NOTE]
> The Agent Evaluations CLI is currently in preview. Features and functionality are subject to change.

## Before you begin

Gather the following items before you collect values:

- Access to the Azure subscription that hosts your Azure OpenAI in Foundry Models resource.
- Sign-in access to the Microsoft 365 tenant where your Copilot agent is deployed.
- The Azure role needed to view keys on your Azure OpenAI resource (for example, **Cognitive Services Contributor** or **Owner**). If you can't see keys, ask your subscription administrator.

## Get your tenant ID (`TENANT_ID`)

`TENANT_ID` is the Microsoft Entra tenant ID where your agent is deployed. It's a GUID in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

Use any of the following methods.

### Option 1: Microsoft Entra admin center

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com) with an account in the target tenant.
1. Select **Identity** > **Overview**.
1. Copy the **Tenant ID** value.

### Option 2: Azure CLI

If you have the Azure CLI installed:

```bash
az account show --query tenantId --output tsv
```

If you belong to multiple tenants, sign in to the correct one first:

```bash
az login --tenant <tenant-domain-or-id>
```

### Option 3: Azure portal

1. Sign in to the [Azure portal](https://portal.azure.com).
1. Select **Microsoft Entra ID** from the portal menu.
1. Copy the **Tenant ID** from the **Overview** page.

> [!TIP]
> If `runevals` connects but reports that your agent can't be found, the most common cause is a `TENANT_ID` that doesn't match the tenant your agent is deployed to. See [Tenant mismatch](evaluations-cli-troubleshooting.md#tenant-mismatch).

## Get your Azure OpenAI endpoint and API key

The evaluation tool uses an Azure OpenAI resource to score responses. You need both the resource endpoint and one of its keys.

### Prerequisites

Your Azure OpenAI resource must have a chat model deployed. By default, the CLI uses `gpt-4o-mini`; to use a different deployment, set [`AZURE_AI_MODEL_NAME`](#set-the-api-version-and-model).

### Get `AZURE_AI_OPENAI_ENDPOINT`

1. Sign in to the [Azure portal](https://portal.azure.com).
1. Open your **Azure OpenAI** resource.
1. Select **Resource Management** > **Keys and Endpoint**.
1. Copy the **Endpoint** value. It looks like `https://<your-resource>.openai.azure.com/`.

Include the trailing slash exactly as shown.

### Get `AZURE_AI_API_KEY`

On the same **Keys and Endpoint** page:

1. Select **Show Keys**.
1. Copy **KEY 1** (or **KEY 2**).

> [!WARNING]
> Treat API keys as secrets. Store them in `.env.local.user` or `env/.env.<environment>` — never in source control. See [Configure environment variables](evaluations-cli-quickstart.md#step-3-configure-environment-variables) for the correct file for your project type.

If you need to rotate a key, use **Regenerate Key 1** or **Regenerate Key 2** on the same page, then update your env file.

## Get your agent ID (`M365_AGENT_ID`)

`M365_AGENT_ID` identifies the Copilot agent that `runevals` sends test prompts to. The CLI accepts two formats:

- User-scoped: `U_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- Tenant-scoped: `T_<agent-name>.declarativeAgent`

### Microsoft 365 Agents Toolkit projects

If you built your agent by using the Microsoft 365 Agents Toolkit, you don't need to set `M365_AGENT_ID` directly. The CLI auto-detects the agent ID from `M365_TITLE_ID`, which the Agents Toolkit writes to `.env.local` during provisioning.

To confirm, open `.env.local` in your project root and look for a line similar to:

```ini
M365_TITLE_ID="U_0dc4a8a2-b95f-edac-91c8-d802023ec2d4"
```

### Non-Microsoft 365 Agents Toolkit projects

Set `M365_AGENT_ID` explicitly in `env/.env.<environment>`. Get the value from the location where your agent was published - for example, the Microsoft Teams admin center, the Microsoft 365 admin center, or the deployment output from your publishing pipeline.

### Override the agent at run time

To evaluate a different agent without editing env files, pass `--m365-agent-id` on the command line:

```bash
runevals --m365-agent-id "U_0dc4a8a2-b95f-edac-91c8-d802023ec2d4"
```

For details, see [`--m365-agent-id`](evaluations-cli-reference.md#--m365-agent-id-id) in the CLI reference.

## Set the API version and model

Two additional variables control which Azure OpenAI REST API version and which model deployment the CLI uses for scoring. They have working defaults, so you can omit them and accept the defaults, or set them explicitly in your env file:

```ini
AZURE_AI_API_VERSION="2024-12-01-preview"   # version
AZURE_AI_MODEL_NAME="gpt-4o-mini"           # actual name in Foundry
```

| Variable | Default | When to change |
|----------|---------|----------------|
| `AZURE_AI_API_VERSION` | `2024-12-01-preview` | Your resource requires a different Azure OpenAI REST API version. |
| `AZURE_AI_MODEL_NAME` | `gpt-4o-mini` | You want to score with a different deployment in your Azure OpenAI resource. |

`AZURE_AI_MODEL_NAME` must match the deployment name exactly as it appears in your Azure OpenAI resource.

### Get `AZURE_AI_MODEL_NAME` from Microsoft Foundry

1. Sign in to the [Azure portal](https://portal.azure.com) and open your **Azure OpenAI** resource.
1. Select **Resource Management** > **Model deployments** (or open the resource in Foundry).
1. Copy the **Deployment name** of the model you want to use for scoring.

## Validate your values

After you gather the values and add them to the appropriate env file (see [Step 3 of the Quickstart](evaluations-cli-quickstart.md#step-3-configure-environment-variables)), run:

```bash
runevals --init-only --log-level debug
```

This command loads your environment, initializes the Python runtime, and surfaces configuration errors without running evaluations. If it completes without error, your values are loaded correctly.

> [!WARNING]
> `--log-level debug` might print raw API payloads. Review the output before sharing it. Redaction is pattern-based and might not catch every key or identifier.

## Troubleshooting

Use the following table to troubleshoot issues you might encounter.

| Symptom | Likely cause | Next step |
|---------|--------------|-----------|
| Authentication error on startup | Signed in to the wrong Microsoft 365 account, or `TENANT_ID` doesn't match your agent's tenant. | See [Authentication errors](evaluations-cli-troubleshooting.md#authentication-errors). |
| Tool connects but no agent is found | `TENANT_ID` mismatch, or the agent isn't deployed to that tenant. | See [Tenant mismatch](evaluations-cli-troubleshooting.md#tenant-mismatch). |
| Scoring fails with 401 or 403 | Wrong or expired `AZURE_AI_API_KEY`, or endpoint/key from different resources. | See [Azure OpenAI API key errors](evaluations-cli-troubleshooting.md#azure-openai-api-key-errors). |
| Value in env file is ignored | Another env file earlier in the precedence order sets the same variable. | See [Environment file precedence](evaluations-cli-reference.md#--env-environment). |

## Related content

- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Quickstart: Use the Agent Evaluations CLI](evaluations-cli-quickstart.md)
- [Agent Evaluations CLI reference](evaluations-cli-reference.md)
- [Troubleshooting and support](evaluations-cli-troubleshooting.md)
