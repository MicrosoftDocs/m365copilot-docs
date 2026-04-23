---
title: Quickstart - Use the Agent Evaluations CLI
description: Get started quickly with evaluating your Microsoft 365 Copilot agent using the M365 Copilot Agent Evaluations CLI tool.
ms.date: 04/22/2026
author: lauragra
ms.author: lauragra
ms.topic: quickstart
ms.localizationpriority: high
---

# Quickstart: Use the Agent Evaluations CLI

The Microsoft 365 Copilot Agent Evaluations CLI (@microsoft/m365-copilot-eval) helps you test, measure, and improve the quality of your agents through automated prompt evaluation and AI-based scoring. This quickstart walks you through installing the Agent Evaluations tool, configuring your environment, creating your first dataset, and running an evaluation.

## Prerequisites

Before you begin, make sure that you have:

- A Microsoft 365 Copilot agent deployed to your tenant.
- [Node.js](https://nodejs.org/en/download) 24.12.0 or later (use `node --version` to check).
- Access to an Azure OpenAI in Foundry Models resource with GPT-4o-mini deployed.
- Your tenant ID, Azure OpenAI endpoint, and API key. If you don't have these values, see [Get values for  environment variables](evaluations-get-env-values.md).

> [!NOTE]
> This quickstart assumes you're using a Windows development environment. Authentication support for other operating systems is coming soon.

## Step 1: Install the CLI

Install the Agent Evaluations CLI globally by using npm:

```bash
npm install -g @microsoft/m365-copilot-eval
```

Verify the installation:

```bash
runevals --version
```

After installation, the `runevals` command is available globally on your system.

## Step 2: Set up your project structure

Run the evaluation tool from **your Microsoft 365 agent project directory** (where your agent code lives), not from the evaluations tool repository.

```bash
cd /path/to/your-agent-project
```

Your agent project should include the following files and folders:

```
my-agent/
├── .env.local              # Agent configuration (Agents Toolkit projects)
├── .env.local.user         # Secrets — never committed
├── evals/
│   └── evals.json          # Your test dataset (auto-discovered)
└── .evals/
    └── <generated reports> # Results written here (YYYY-MM-DD_HH-MM-SS.html)
```

You create the `evals/evals.json` dataset in Step 4. The `.evals/` report folder is created automatically on first run.

## Step 3: Configure environment variables

Choose the option that matches your project type.

> [!TIP]
If you built your agent by using Microsoft 365 Agents Toolkit, you already have `.env.local` with your agent configuration. Create `.env.local.user` in your project root for secrets:

### Microsoft 365 Agents Toolkit projects

### Non-Microsoft 365 Agents Toolkit projects

```ini
# .env.local.user (NOT checked in — secrets go here)
AZURE_AI_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/"
AZURE_AI_API_KEY="your-api-key-here"
TENANT_ID="your-tenant-id-here"
```

Add `.env.local.user` to your `.gitignore`:

```gitignore
# User-specific secrets — never commit
.env.local.user
env/.env.local.user
```

### Non-Microsoft 365 Agents Toolkit projects

Create `env/.env.dev` in your project directory:

```ini
# env/.env.dev
M365_AGENT_ID="your-agent-id"
AZURE_AI_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/"
AZURE_AI_API_KEY="your-api-key-here"
TENANT_ID="your-tenant-id-here"
AZURE_AI_API_VERSION="2024-12-01-preview"   # default
AZURE_AI_MODEL_NAME="gpt-4o-mini"           # default
```

## Step 4: Create your first dataset

Create `evals/evals.json` with a small set of prompts and expected responses:

```json
{
  "schemaVersion": "1.0.0",
  "items": [
    {
      "prompt": "What is Microsoft 365?",
      "expected_response": "Microsoft 365 is a cloud-based productivity suite that includes Office apps, cloud services, and device management."
    },
    {
      "prompt": "How do I share a file in Microsoft Teams?",
      "expected_response": "To share a file in Teams, you can upload it to a channel or chat, or share it from OneDrive with specific permissions."
    }
  ]
}
```

> [!TIP]
> If you skip this step, the tool offers to generate a starter file with sample prompts the first time you run `runevals`.

For full dataset schema, categories, and advanced patterns, see [Create evaluation test suites](evaluations-cli-create-tests.md).

## Step 5: Run your first evaluation

For Agents Toolkit projects (automatically uses `.env.local` and `.env.local.user`):

```bash
runevals
```

For non-Agents Toolkit projects:

```bash
runevals --env dev
```

## Step 6: Confirm successful setup

A successful run produces:

- A completion message in the terminal similar to the following message.

  ```
  🚀 M365 Copilot Agent Evaluations CLI

  📂 Loading environment: dev
  🤖 Agent ID: T_my-agent.declarativeAgent
  📄 Using prompts file: ./evals/evals.json

  📊 Running evaluations...

  ─────────────────────────────────────────────────────────────

  ✓ Evals completed successfully!

  Results saved to: ./.evals/2026-04-22_14-30-45.html
  ```

- An HTML report saved to `./.evals/YYYY-MM-DD_HH-MM-SS.html` that opens automatically in your browser.

The report includes scores for each prompt:

- **Relevance** (1-5): How well the response addresses the prompt.
- **Coherence** (1-5): How logical and well-structured the response is.
- **Groundedness** (1-5): How well supported by citations.
- **Tool Call Accuracy** (1-5): How appropriately tools were used.
- **Citations** (0-1): Whether citations are present.

If you don't see these results, see [Troubleshooting](evaluations-cli-troubleshooting.md).

## Related content

- [Agents Evaluation CLI overview](evaluations-cli-overview.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
- [CLI reference](evaluations-cli-reference.md)
- [Troubleshooting and support](evaluations-cli-troubleshooting.md)