---
title: Quickstart - Evaluate your Microsoft 365 Copilot agent
description: Get started quickly with evaluating your Microsoft 365 Copilot agent using the M365 Copilot Agent Evaluations CLI tool.
ms.date: 04/15/2026
author: lauragra
ms.author: lauragra
ms.topic: quickstart
ms.localizationpriority: high
---

# Quickstart: Evaluate your Microsoft 365 Copilot agent

This quickstart helps you quickly set up and run your first evaluation of a Microsoft 365 Copilot agent. You'll install the tool, configure credentials, and run a test evaluation in minutes.

> [!IMPORTANT]
> This tool is currently in private preview. Features and instructions are subject to change.

## Prerequisites

Before you begin, ensure you have:

- A Microsoft 365 Copilot agent deployed to your tenant
- Node.js 24.12.0 or later (`node --version` to check)
- Access to an Azure OpenAI resource with GPT-4o-mini deployed
- Your Azure tenant ID, Azure OpenAI endpoint, and API key

> [!NOTE]
> This quickstart assumes you're using a Windows development environment. Authentication support for other operating systems is coming soon.

## Step 1: Install the tool

Install the M365 Copilot Agent Evaluations CLI globally:

```bash
npm install -g @microsoft/m365-copilot-eval
```

Verify the installation:

```bash
runevals --version
```

## Step 2: Navigate to your agent project

Change to your agent project directory:

```bash
cd /path/to/your-agent-project
```

> [!IMPORTANT]
> Always run the evaluation tool FROM your agent project directory, not from the evaluations tool repository.

## Step 3: Configure environment variables

### For Agents Toolkit projects

If you built your agent with Microsoft 365 Agents Toolkit, you already have `.env.local` with your agent configuration.

Create `.env.local.user` in your project root for secrets:

```ini
# .env.local.user
AZURE_AI_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/"
AZURE_AI_API_KEY="your-api-key-here"
TENANT_ID="your-tenant-id-here"
```

Add to `.gitignore`:

```gitignore
.env.local.user
```

### For non-Agents Toolkit projects

Create `env/.env.dev`:

```ini
# env/.env.dev
M365_AGENT_ID="your-agent-id"
AZURE_AI_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/"
AZURE_AI_API_KEY="your-api-key-here"
TENANT_ID="your-tenant-id-here"
AZURE_AI_MODEL_NAME="gpt-4o-mini"
```

## Step 4: Create test prompts

Create `evals/evals.json` with test prompts:

```json
[
  {
    "prompt": "What is Microsoft 365?",
    "expected_response": "Microsoft 365 is a cloud-based productivity suite that includes Office apps, cloud services, and device management."
  },
  {
    "prompt": "How do I share a file in Microsoft Teams?",
    "expected_response": "To share a file in Teams, you can upload it to a channel or chat, or share it from OneDrive with specific permissions."
  }
]
```

> [!TIP]
> If you don't create this file, the tool will offer to generate a starter file with sample prompts when you first run it.

## Step 5: Run your first evaluation

Run the evaluation:

```bash
runevals
```

For Agents Toolkit projects, this automatically uses `.env.local` and `.env.local.user`.

For non-Agents Toolkit projects:

```bash
runevals --env dev
```

## Step 6: Review results

The tool generates an HTML report and opens it automatically. Results are saved to:

```
./.evals/YYYY-MM-DD_HH-MM-SS.html
```

The report includes scores for each prompt:

- **Relevance** (1-5): How well the response addresses the prompt
- **Coherence** (1-5): How logical and well-structured the response is
- **Groundedness** (1-5): How well supported by citations
- **Tool Call Accuracy** (1-5): How appropriately tools were used
- **Citations** (0-1): Whether citations are present

## Next steps

Now that you've run your first evaluation, explore more capabilities:

- **Add more test prompts** - Expand your `evals.json` with comprehensive test scenarios
- **Try interactive mode** - Run `runevals --interactive` to test prompts on the fly
- **Automate with CI/CD** - Integrate evaluations into your build pipeline
- **Generate different formats** - Output as JSON (`--output results.json`) or CSV (`--output results.csv`)
- **Fine-tune logging** - Use `--log-level debug` for detailed troubleshooting

## Troubleshooting

### No agent found

If the tool can't find your agent, verify:

- Your `M365_AGENT_ID` or `M365_TITLE_ID` is correct
- Your agent is deployed to the tenant specified by `TENANT_ID`
- You have the necessary permissions to access the agent

### Authentication errors

Ensure:

- `TENANT_ID` matches the tenant where your agent is deployed
- You're running on Windows (other OS support coming soon)
- You're signed in to the correct Microsoft 365 account

### Python environment issues

If Python setup fails:

```bash
# Check cache status
runevals cache-info

# Clear cache and reinitialize
runevals cache-clear
runevals --init-only --log-level debug
```

## Related content

- [Evaluate Microsoft 365 Copilot agents overview](agent-evals-overview.md)
- [Create evaluation test suites](agent-evals-create-tests.md)
- [Build declarative agents](build-declarative-agents.md)
