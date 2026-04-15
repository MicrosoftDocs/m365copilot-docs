---
title: Evaluate Microsoft 365 Copilot agents
description: Learn how to evaluate and measure the quality of your Microsoft 365 Copilot agents using automated testing and AI-powered metrics.
ms.date: 04/15/2026
author: lauragra
ms.author: lauragra
ms.topic: overview
ms.localizationpriority: high
---

# Evaluate Microsoft 365 Copilot agents

The Microsoft 365 Copilot Agent Evaluations tool (`@microsoft/m365-copilot-eval`) is a zero-configuration CLI that helps you evaluate the quality and performance of your Microsoft 365 Copilot agents. Send test prompts to your agent, collect responses, and automatically score them using Azure AI Evaluation metrics.

> [!IMPORTANT]
> This tool is currently in private preview. The features and instructions are subject to change.

## Overview

The M365 Copilot Agent Evaluations tool provides automated testing capabilities for your agents through:

- **Batch and interactive testing** - Send multiple prompts or test interactively
- **Automated scoring** - Get AI-powered quality metrics for each response
- **Multiple input modes** - Use command-line prompts, JSON files, or interactive entry
- **Rich reporting** - Generate HTML, JSON, or CSV reports with detailed metrics

### Evaluation metrics

The tool evaluates agent responses using Azure AI Evaluation SDK metrics:

- **Relevance** (1-5): How well the response addresses the prompt
- **Coherence** (1-5): How logical and well-structured the response is
- **Groundedness** (1-5): How well the response is supported by citations and sources
- **Tool Call Accuracy** (1-5): How appropriately the agent uses available tools
- **Citations** (0-1): Whether the response includes proper citations

## Prerequisites

Before you begin, ensure you have the following:

- **Microsoft 365 Copilot agent** deployed to your tenant
  - Created with [Microsoft 365 Agents Toolkit](overview-m365-agents-toolkit.md) or any other method
- **Node.js** version 24.12.0 or later
  - Verify: `node --version`
- **Azure OpenAI resource** with access to GPT-4o-mini or similar model
  - Used for "LLM as a Judge" evaluations
- **Required credentials**:
  - Tenant ID
  - Azure OpenAI endpoint
  - Azure OpenAI API key
  - Agent ID (optional for Agents Toolkit projects)

> [!NOTE]
> Authentication is currently supported on Windows only. Support for other operating systems is coming soon.

## Installation

Install the tool globally using npm:

```bash
npm install -g @microsoft/m365-copilot-eval
```

After installation, the `runevals` command becomes available globally on your system.

## Environment setup

The evaluation tool loads environment variables from multiple sources in order of precedence:

1. `.env.local` in current directory (auto-detected, ideal for Agents Toolkit projects)
2. `.env.local.user` in current directory - auto-loaded as user-specific override (for secrets)
3. `env/.env.{environment}` via `--env` flag (for example, `--env dev` loads `env/.env.dev`)
4. System environment variables

### For Agents Toolkit projects

If you created your agent with Microsoft 365 Agents Toolkit, your project already has a `.env.local` file with the `M365_TITLE_ID` configuration. Keep non-secret configuration there and add secrets to `.env.local.user`.

Create `.env.local.user` in your project root:

```ini
# .env.local.user (NOT checked in — secrets go here)
AZURE_AI_OPENAI_ENDPOINT="<your-azure-openai-endpoint>"
AZURE_AI_API_KEY="<your-api-key-from-azure-portal>"
TENANT_ID="<your-tenant-id>"
```

Add `.env.local.user` to your `.gitignore`:

```gitignore
# User-specific secrets — never commit
.env.local.user
env/.env.local.user
```

### For non-Agents Toolkit projects

Create `env/.env.dev` in your project directory:

```ini
# env/.env.dev (new file you create)
# Your agent ID:
M365_AGENT_ID="your-agent-id"

# Azure AI credentials:
AZURE_AI_OPENAI_ENDPOINT="<your-azure-openai-endpoint>"
AZURE_AI_API_KEY="<your-api-key-from-azure-portal>"
AZURE_AI_API_VERSION="2024-12-01-preview"  # default
AZURE_AI_MODEL_NAME="gpt-4o-mini"           # default
TENANT_ID="<your-tenant-id>"
```

## Get required credentials

### Tenant ID

Your Azure Active Directory (Azure AD) tenant ID is required for authentication.

**To get your tenant ID:**

1. Go to [Azure Portal](https://portal.azure.com/)
2. Search for **Azure Active Directory** or **Microsoft Entra ID**
3. In the **Overview** section, copy the **Tenant ID**
4. Use this value as `TENANT_ID` in your environment file

Alternatively, if you have Azure CLI installed:

```bash
az account show --query tenantId
```

### Agent ID

- **For Agents Toolkit projects**: The tool automatically reads `M365_TITLE_ID` from `.env.local` and constructs the agent ID
- **For other projects**: The tool offers agent selection when you submit a job, showing name, description, and agent ID

### Azure OpenAI endpoint and API key

You need both the endpoint URL and API key from your Azure OpenAI resource for LLM-as-a-Judge evaluations.

**To get your Azure OpenAI credentials:**

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to your Azure OpenAI service:
   - Path: **All Services** > Search **OpenAI** > Select your resource
   - Or create new: **Create a resource** > Search **OpenAI**
3. In the **Overview** section, copy the **Endpoint** value
   - Format: `https://YOUR-RESOURCE-NAME.openai.azure.com/`
   - Use this as `AZURE_AI_OPENAI_ENDPOINT`
4. In the left sidebar, select **Keys and Endpoint**
5. Copy **KEY 1** or **KEY 2**
   - Use this as `AZURE_AI_API_KEY`

> [!IMPORTANT]
> Ensure you have `gpt-4o-mini` (or similar) deployed in your Azure OpenAI resource. Store keys and endpoints securely and never commit them to source control.

## Create prompts files

The CLI automatically discovers prompts files in your project:

### Auto-discovery

When you run `runevals`, the tool searches for prompts files in this order:

1. Current directory: `prompts.json`, `evals.json`, `tests.json`
2. `./evals/` subdirectory: `prompts.json`, `evals.json`, `tests.json`

**Example project structure:**

```
my-agent/
├── .env.local              # Your credentials
├── evals/
│   └── evals.json         # Your test prompts (auto-discovered!)
└── .evals/
    └── 2025-12-03_14-30-45.html  # Generated reports
```

### Starter file creation

If no prompts file is found, the tool prompts you to create a starter file:

```
⚠️  No prompts file found in current directory or ./evals/

Create a starter evals file with sample prompts? (Y/n):
```

Answering **Y** creates `./evals/evals.json` with sample prompts:

```json
[
  {
    "prompt": "What is Microsoft 365?",
    "expected_response": "Microsoft 365 is a cloud-based productivity suite..."
  },
  {
    "prompt": "How can I share a file in Teams?",
    "expected_response": "You can share a file in Teams by uploading it..."
  }
]
```

### Manual creation

Create `./evals/prompts.json` or `./evals/evals.json` with your test prompts:

```json
[
  {
    "prompt": "Your test prompt here",
    "expected_response": "Expected agent response"
  },
  {
    "prompt": "Another test prompt",
    "expected_response": "Another expected response"
  }
]
```

### Schema versioning

Evaluation documents should include a `schemaVersion` field:

```json
{
  "schemaVersion": "1.0.0",
  "items": [
    {
      "prompt": "What is Microsoft 365?",
      "expected_response": "Microsoft 365 is a cloud-based productivity suite."
    }
  ]
}
```

The CLI automatically upgrades legacy documents (missing `schemaVersion`) with a timestamped backup. Within a major version (for example, 1.x.x), backward compatibility is guaranteed.

## Run evaluations

> [!IMPORTANT]
> Run the evaluation tool FROM your Microsoft 365 agent project directory (where your agent code is), not from the evaluations tool repository.

### Basic usage

```bash
# Navigate to your agent project directory
cd /path/to/your-agent-project

# Run evaluations (auto-discovers .env.local for Agents Toolkit projects)
runevals

# Or specify an environment file
runevals --env dev
```

### Usage examples

```bash
# Use .env.local (checked in current directory, then env/ folder)
runevals

# Use env/.env.dev configuration
runevals --env dev

# Use specific prompts file in your project
runevals --prompts-file ./evals/my-tests.json

# Inline prompts (no file needed, useful for quick tests)
runevals --prompts "What is Microsoft Graph?" --expected "Gateway to Microsoft 365 data"

# Interactive mode (enter prompts interactively)
runevals --interactive

# Control logging verbosity
runevals --log-level debug
runevals --log-level info
runevals --log-level warning
runevals --log-level error

# Custom output location in your project
runevals --output ./reports/results.html
```

> [!WARNING]
> The `--log-level debug` option may include raw API payloads and response data in console output. Redaction is pattern-based and might not catch all PII or custom credentials. Don't share debug-level output publicly without manual review.

### Expected output

When you run an evaluation, you'll see output similar to:

```
🚀 M365 Copilot Agent Evaluations CLI

📂 Loading environment: dev
🤖 Agent ID: T_my-agent.declarativeAgent
📄 Using prompts file: ./evals/evals.json

📊 Running evaluations...

─────────────────────────────────────────────────────────────

✓ Evals completed successfully!

Results saved to: ./.evals/2025-12-03_14-30-45.html
```

### Add npm scripts shortcuts

You can add shortcuts to your agent project's `package.json`:

```json
{
  "scripts": {
    "eval": "runevals",
    "eval:local": "runevals --env local",
    "eval:dev": "runevals --env dev"
  }
}
```

Then use shorter commands:

```bash
# Uses .env.local (Agents Toolkit default)
npm run eval

# Uses env/.env.local
npm run eval:local

# Uses env/.env.dev
npm run eval:dev
```

> [!NOTE]
> For production environments, use CI/CD pipelines instead of local `npm run` commands.

## Output formats

Results are automatically saved to `./.evals/YYYY-MM-DD_HH-MM-SS.html` with detailed metrics including:

- Relevance score (1-5)
- Coherence score (1-5)
- Groundedness score (1-5)
- Tool Call Accuracy score (1-5)
- Citations score (0-1)
- Per-prompt details and aggregate metrics

### Alternative formats

Generate results in different formats:

```bash
# JSON output
runevals --output results.json

# CSV output
runevals --output results.csv

# HTML output (default, auto-opens in browser)
runevals --output results.html
```

## Command reference

```
Options:
  -V, --version                 output version number
  --log-level [level]           log level: debug|info|warning|error (bare flag -> info)
  --prompts <prompts...>        inline prompts to evaluate
  --expected <responses...>     expected responses (with --prompts)
  --prompts-file <file>         JSON file with prompts
  -o, --output <file>           output file (JSON, CSV, or HTML)
  -i, --interactive             interactive prompt entry mode
  --m365-agent-id <id>          override agent ID
  --env <environment>           environment name (default: dev)
  --init-only                   just setup, don't run evals
  -h, --help                    display help

Cache Commands:
  cache-info                    show cache statistics
  cache-clear                   remove cached Python runtime
  cache-dir                     print cache directory path
```

## Troubleshooting

### Pre-cache Python environment

Set up the Python environment ahead of time without running evaluations:

```bash
runevals --init-only
```

This is useful for:

- Pre-warming the cache in CI/CD pipelines
- Testing the setup without running evaluations
- Troubleshooting installation issues

### Cache issues

```bash
# View cache info
runevals cache-info

# Clear and rebuild
runevals cache-clear
runevals --init-only --log-level debug
```

### Network or proxy issues

```bash
# Set proxy
export HTTPS_PROXY=http://proxy:8080

# Retry with verbose output
runevals --init-only --log-level debug
```

### Permission issues

```bash
# Check cache directory
runevals cache-dir

# Fix permissions (Unix/macOS)
chmod -R u+w $(runevals cache-dir)
```

## Next steps

- [CI/CD Integration Guide](https://github.com/microsoft/M365-Copilot-Agent-Evals/blob/HEAD/CICD_CACHE_GUIDE.md) - GitHub Actions and Azure DevOps caching
- [Testing Guide](https://github.com/microsoft/M365-Copilot-Agent-Evals/blob/HEAD/.github/TESTING_GUIDE.md) - Cross-platform testing procedures
- [Python CLI Guide](https://github.com/microsoft/M365-Copilot-Agent-Evals/blob/HEAD/PYTHON_CLI.md) - Direct Python usage without Node.js
- [Local Development Setup](https://github.com/microsoft/M365-Copilot-Agent-Evals/blob/HEAD/DEV_SETUP.md) - Repository setup for local development

## Related content

- [Build declarative agents](build-declarative-agents.md)
- [Microsoft 365 Agents Toolkit overview](overview-m365-agents-toolkit.md)
- [Declarative agents overview](overview-declarative-agent.md)
