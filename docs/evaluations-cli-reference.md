---
title: Agent Evaluations CLI reference (preview)
description: Complete command-line reference for the M365 Copilot Agent Evaluations CLI tool including all options, flags, and cache commands.
ms.date: 04/28/2026
author: lauragra
ms.author: lauragra
ms.reviewer: sakov
ms.topic: reference
ms.localizationpriority: medium
---

# Agent Evaluations CLI reference (preview)

This article provides a complete command-line reference for the `runevals` command, which is part of the `@microsoft/m365-copilot-eval` package.

> [!NOTE]
> The Agent Evaluations CLI is currently in preview. Features and functionality are subject to change.

## Synopsis

```bash
runevals [options]
runevals cache-info
runevals cache-clear
runevals cache-dir
```

## Description

The `runevals` command evaluates Microsoft 365 Copilot agents by sending test prompts and scoring responses using Azure AI + machine learning Evaluation metrics. The tool supports batch evaluation from JSON files, inline prompts, and interactive testing.

## Options

### `-V, --version`

Output the version number of the CLI tool.

Example:

```bash
runevals --version
```

Output:

```
1.3.0-preview.1
```

### `--log-level [level]`

Set the logging verbosity level. Available levels: `debug`, `info`, `warning`, `error`.

- **Default**: When you use the flag without a value, it defaults to `info`.
- **debug**: Detailed debugging information, including API payloads.
- **info**: General information about evaluation progress.
- **warning**: Warning messages only.
- **error**: Error messages only.

**Examples:**

```bash
# Info level (default when flag is present)
runevals --log-level

# Debug level
runevals --log-level debug

# Error level only
runevals --log-level error
```

> [!WARNING]
> The `debug` level might include raw API payloads and response data in console output. Redaction is pattern-based and might not catch all PII or credentials. Don't share debug output publicly without manual review.

### `--prompts <prompts...>`

Specify one or more prompts directly on the command line for quick testing without creating a file.

**Examples:**

```bash
# Single prompt
runevals --prompts "What is Microsoft 365?"

# Multiple prompts
runevals --prompts "What is Teams?" "What is SharePoint?" "What is OneDrive?"
```

### `--expected <responses...>`

Provide expected responses to accompany prompts specified with `--prompts`. The number of responses must match the number of prompts.

**Example:**

```bash
runevals --prompts "What is Microsoft Graph?" \
  --expected "Microsoft Graph is the API gateway to Microsoft 365 data and intelligence."
```

**Multiple prompts and responses:**

```bash
runevals --prompts "What is Teams?" "What is SharePoint?" \
  --expected "Teams is a collaboration platform" "SharePoint is a content management system"
```

### `--prompts-file <file>`

Specify a custom JSON file containing test prompts. This file overrides auto-discovery.

**Example:**

```bash
runevals --prompts-file ./tests/my-custom-tests.json
```

**File format:**

```json
[
  {
    "prompt": "Test question",
    "expected_response": "Expected answer"
  }
]
```

For the full dataset schema, see [Dataset schema and test design](evaluations-cli-create-tests.md#schema-overview).

### `-o, --output <file>`

Specify the output file path and format. The format is determined by the file extension.

**Supported formats:**

- `.html` - HTML report (default, auto-opens in browser)
- `.json` - JSON results
- `.csv` - CSV spreadsheet

**Examples:**

```bash
# HTML output
runevals --output ./reports/results.html

# JSON output
runevals --output ./results/eval-results.json

# CSV output
runevals --output ./data/scores.csv
```

**Default behavior:**

Without `--output`, the command saves results to `./.evals/YYYY-MM-DD_HH-MM-SS.html`.

### `-i, --interactive`

Enter interactive mode for manual prompt entry and testing.

**Example:**

```bash
runevals --interactive
```

In interactive mode, you're prompted to enter prompts one at a time, so you can do exploratory testing.

### `--m365-agent-id <id>`

Override the agent ID to evaluate a specific agent. This parameter is useful when testing multiple agents or when the agent ID can't be auto-detected.

**Example:**

```bash
runevals --m365-agent-id "U_0dc4a8a2-b95f-edac-91c8-d802023ec2d4"
```

**Agent ID formats:**

- User-scoped: `U_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- Tenant-scoped: `T_agent-name.declarativeAgent`

### `--env <environment>`

Specify the environment configuration to load. This parameter loads `env/.env.<environment>`.

**Default**: `dev` (loads `env/.env.dev`)

**Examples:**

```bash
# Load env/.env.dev (default)
runevals --env dev

# Load env/.env.prod
runevals --env prod

# Load env/.env.staging
runevals --env staging
```

**Environment file precedence:**

1. `.env.local` (auto-detected for Agents Toolkit projects)
1. `.env.local.user` (secrets, auto-loaded if present)
1. `env/.env.<environment>` (specified by `--env`)
1. System environment variables

### `--init-only`

Initializes the Python environment and downloads dependencies without running evaluations. This option is useful for:

- Prewarming the cache in CI/CD pipelines
- Troubleshooting installation problems
- Verifying the setup before running tests

**Example:**

```bash
runevals --init-only
```

For troubleshooting, combine this option with `--log-level debug`:

```bash
runevals --init-only --log-level debug
```

### `-h, --help`

Displays help information about available commands and options.

**Example:**

```bash
runevals --help
```

## Cache commands

The evaluation tool uses a local cache for the Python runtime and dependencies. These commands help you manage the cache.

### `cache-info`

Displays statistics about the cached Python environment, including size, location, and installed packages.

**Example:**

```bash
runevals cache-info
```

**Output:**

```
📦 Cache Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Location: C:\Users\YourName\.m365-copilot-eval\cache
Size: 245 MB
Python Version: 3.11.5
Packages: 42 installed

Last updated: 2026-04-10 14:23:15
```

### `cache-clear`

Removes the cached Python environment and all downloaded dependencies. Use this command when troubleshooting installation issues or freeing disk space.

**Example:**

```bash
runevals cache-clear
```

**Follow-up:**

After clearing the cache, reinitialize:

```bash
runevals --init-only
```

### `cache-dir`

Prints the absolute path to the cache directory. This feature is useful for scripts or manual inspection.

**Example:**

```bash
runevals cache-dir
```

**Output:**

```
C:\Users\YourName\.m365-copilot-eval\cache
```

**Usage in scripts:**

```bash
# Check cache directory permissions (Unix/macOS)
chmod -R u+w $(runevals cache-dir)

# View cache contents
ls -lah $(runevals cache-dir)
```

## Environment variables

The tool reads configuration from environment files and system variables. For step-by-step instructions on obtaining these values, see [Required environment variables](evaluations-cli-overview.md#required-environment-variables).

### Required variables

| Variable | Description | Example |
|----------|-------------|---------|
| `TENANT_ID` | Microsoft Entra tenant ID | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| `AZURE_AI_OPENAI_ENDPOINT` | Azure OpenAI in Foundry Models endpoint URL | `https://your-resource.openai.azure.com/` |
| `AZURE_AI_API_KEY` | Azure OpenAI API key | `your-api-key-here` |

### Optional variables

| Variable | Description | Default |
|----------|-------------|---------|
| `M365_AGENT_ID` | Agent ID to evaluate | Auto-detected from `M365_TITLE_ID` |
| `M365_TITLE_ID` | Agent title ID (Agents Toolkit) | None |
| `AZURE_AI_API_VERSION` | Azure OpenAI API version | `2024-12-01-preview` |
| `AZURE_AI_MODEL_NAME` | Model for evaluations | `gpt-4o-mini` |

## Examples

### Basic usage

Evaluate by using the auto-discovered dataset file:

```bash
cd /path/to/your-agent-project
runevals
```

### Specify environment

Use production environment configuration:

```bash
runevals --env prod
```

### Custom dataset file

Use a specific test file:

```bash
runevals --prompts-file ./tests/regression-tests.json
```

### Inline testing

Quick test with inline prompts:

```bash
runevals --prompts "What is Microsoft 365?" \
  --expected "Microsoft 365 is a cloud-based productivity suite"
```

### Interactive mode

Enter prompts manually:

```bash
runevals --interactive
```

### Custom output format

Generate JSON results:

```bash
runevals --output ./results/eval-$(date +%Y%m%d).json
```

### Debug mode

Run with detailed logging:

```bash
runevals --log-level debug --output ./debug-results.json
```

### Setup only

Pre-cache Python environment without running tests:

```bash
runevals --init-only --log-level info
```

### Override agent ID

Test a specific agent:

```bash
runevals --m365-agent-id "U_0dc4a8a2-b95f-edac-91c8-d802023ec2d4"
```

### Combined options

Comprehensive evaluation with custom settings:

```bash
runevals \
  --env staging \
  --prompts-file ./evals/full-suite.json \
  --output ./reports/staging-eval-$(date +%Y%m%d).html \
  --log-level info \
  --m365-agent-id "T_my-agent.declarativeAgent"
```

## Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | General error |
| `2` | Invalid arguments |
| `3` | Environment configuration error |
| `4` | Agent not found |
| `5` | Authentication failure |
| `10` | Python environment setup failure |

## Troubleshooting

For common issues with installation, authentication, runtime errors, cache problems, and proxy setup, see the [Troubleshooting](evaluations-cli-troubleshooting.md) article.

## Related content

- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Quickstart: Use the Agent Evaluations CLI](evaluations-cli-quickstart.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
