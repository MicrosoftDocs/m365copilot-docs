---
title: Tool-call evaluators for Microsoft 365 Copilot Evaluations CLI
description: Configure ToolCallSelection and ToolCallExecution to check tool selection and HTTP execution outcomes in Microsoft 365 Copilot Evaluations CLI v2 preview.
author: jasonjoh
ms.author: jasonjoh
ms.reviewer: sakov
ms.topic: reference
ms.localizationpriority: medium
ms.date: 11/12/2026
ai-usage: ai-assisted
---

<!-- cSpell:ignore runevals toolCallNotAllowed toolCallEvidenceIndeterminate -->

# Tool-call evaluators for Microsoft 365 Copilot Evaluations CLI

Tool-call evaluators inspect runtime diagnostics (Developer Info) to verify tool selection and HTTP execution outcomes. They are deterministic, don't use an LLM judge, and don't judge response text or require `expected_response`.

> [!NOTE]
> Tool-call evaluators require Microsoft 365 Copilot Evaluations CLI v2 (`preview`) and [schema v2](https://raw.githubusercontent.com/microsoft/m365-copilot-eval/refs/heads/main/schema/v2/eval-document.schema.json). They aren't available in CLI v1 (`latest`).

| Evaluator | Checks | Scale | Threshold | Enabled by default |
|---|---|---|---|---|
| [ToolCallSelection](#toolcallselection) | Whether the expected tool identities were selected | Pass/fail/error | 1.0, fixed | No |
| [ToolCallExecution](#toolcallexecution) | Whether each expected call has a distinct successful HTTP execution | Pass/fail/error | 1.0, fixed | No |

For general dataset setup, see [Configure evaluators](evaluations-cli-create-tests.md#configure-evaluators).

## Set up the preview CLI

Follow the tenant access and runtime prerequisites in the [quickstart](evaluations-cli-quickstart.md#prerequisites). Microsoft Foundry scoring configuration isn't required if you run only deterministic evaluators.

Install the preview release and accept the license terms:

```powershell
npm install -g @microsoft/m365-copilot-eval@preview
runevals accept-eula
```

Set `TENANT_ID` for your Microsoft 365 tenant in your evaluation environment. For a deployed declarative agent, pass `--m365-agent-id "<your-agent-id>"` when running a dataset.

For standalone plugin evaluations, provision and enable the plugin in Microsoft 365 Copilot first, and complete any required connector sign-in in Copilot. With no configured agent ID, v2 preview evaluates Copilot chat. Keep `M365_AGENT_ID` and legacy `AGENT_ID` out of your shell and loaded environment files for these runs. This evaluates Copilot responses that use an available plugin, not the plugin endpoint in isolation.

Installing either npm release tag replaces the global `runevals` command. To return to v1, reinstall `@microsoft/m365-copilot-eval@latest`.

## Allow tool calls

When a tool requires confirmation, configure both approval and evaluator expectations. `default_allowed_tools` at document level and `allowed_tools` per prompt or turn let the CLI approve tool-confirmation prompts. Every requested consent identifier must be allowed; otherwise, the prompt stops with a `toolCallNotAllowed` error.

> [!IMPORTANT]
> Allowing a call grants consent. Review the operations you're approving and start with read-only scenarios. An expectation doesn't grant consent; approval doesn't force selection or prove execution. Tools that don't request confirmation aren't controlled by this list, so it isn't a security boundary.

Consent identifiers are different from `calls[].tool` identities. Don't split consent identifiers to populate evaluator identity fields.

## Find tool-call names

For declarative agents, use `runevals --list-tools` to list consent identifiers and copy-ready evaluator identities. Microsoft 365 Agents Toolkit can also inspect the acquired agent's launch information. For standalone plugins, `--list-tools` isn't supported; construct consent identifiers from the app manifest instead.

### Declarative agents

```powershell
# List consent identifiers and evaluator identities for declarative agent actions.
npx -y --package @microsoft/m365-copilot-eval@preview runevals --list-tools "<your-agent-id>"

# Alternatively, inspect launch information with Agents Toolkit.
# Use the package Title ID without the .declarativeAgent suffix.
atk launchinfo --title-id "<your-title-id>"
```

Dynamically discovered tools might not be listed. After a tool-call evaluation, confirm their identities in the JSON report's `diagnostics.tool_calls`.

Agents Toolkit requires access to the app and a separate Microsoft 365 sign-in (`atk auth login m365`). Its account can differ from the account used for evaluation.

### Standalone plugins

Construct each consent identifier from your plugin's app manifest (`agentConnectors[]`) as follows:

```text
<connector display name with only A-Z, a-z, and 0-9 retained>_<function name>
```

Preserve casing. Remove spaces, hyphens, underscores, punctuation, and non-ASCII characters from the **connector display name only**. Keep the function name unchanged.

| Connector display name | Function name | `allowed_tools` entry |
|---|---|---|
| `Contoso Catalog` | `get_product` | `ContosoCatalog_get_product` |
| `Contoso Catalog-Tools_1!` | `get_product` | `ContosoCatalogTools1_get_product` |

Alternatively, run an evaluation once: if a tool requires consent and isn't allowed, the result message includes its tool name.

### Tool-call identity

All three identity fields are required inside `calls[].tool`:

| Field | Type | Description |
|---|---|---|
| `plugin_id` | string | Copy `M365_TITLE_ID` from your deployed agent or plugin project's environment file, for example `env\.env.local`. This is the package Title ID (`plugin.titleId` in Developer Info), **not** `plugin.id`. Required even when the CLI already targets that declarative agent. |
| `toolset_id` | string | For a declarative agent action, use its `actions[].id` in the declarative agent manifest. For a standalone plugin, use its `agentConnectors[].id` in the app manifest. |
| `function_name` | string | Function name defined by your plugin, for example `get_product`. Preserve casing; this is reported as `functionDisplayName` in Developer Info. |

The tuple `(plugin_id, toolset_id, function_name)` uniquely identifies a tool. Matching is case-sensitive. Use action or connector IDs, not display names. For example:

```json
{
  "plugin_id": "T_1234",
  "toolset_id": "catalog",
  "function_name": "get_product"
}
```

## Evaluator configuration

Configure these options under `ToolCallSelection` or `ToolCallExecution` in `default_evaluators`, or in an item's or turn's `evaluators` object:

| Option | Type | Required | Description |
|---|---|---|---|
| `calls` | array | Yes | Nonempty list of expected selections or executions. |
| `calls[].id` | string | No | Nonempty, evaluator-local diagnostic label; not a runtime call ID. Use a unique label for each expectation. |
| `calls[].tool` | object | Yes | All three fields from [Tool-call identity](#tool-call-identity). |
| `allow_additional_calls` | boolean | No | **ToolCallSelection only.** Defaults to `true`. Set to `false` to reject any extra selected identity, including unidentified selections. |

## ToolCallSelection

**ToolCallSelection** checks the set of expected tool identities, ignoring order and duplicates. It doesn't verify execution success or call counts.

### ToolCallSelection sample dataset

Save this dataset as `evals\tool-selection.json`. Replace the sample identities and consent identifier with your own:

```json
{
  "schemaVersion": "2.0.0",
  "default_allowed_tools": ["ContosoCatalog_get_product"],
  "default_evaluators": {
    "ToolCallSelection": {
      "calls": [
        {
          "tool": {
            "plugin_id": "T_1234",
            "toolset_id": "catalog",
            "function_name": "get_product"
          }
        }
      ],
      "allow_additional_calls": false
    }
  },
  "items": [
    {
      "prompt": "Find product SKU-123 in the Contoso Catalog."
    }
  ]
}
```

Run against a deployed declarative agent:

```powershell
runevals --m365-agent-id "<your-agent-id>" --prompts-file evals\tool-selection.json --output results\tool-selection.json
```

For a standalone plugin scenario, omit `--m365-agent-id` and ensure no agent ID is configured, as described in [Set up the preview CLI](#set-up-the-preview-cli).

The following outcomes assume `plugin_id` and `toolset_id` match the example.

| Observed selections | Result in this sample |
|---|---|
| `get_product`, including duplicate entries | Pass |
| `get_product` and another function | Fail: additional selection |
| No selected functions (`[]`) | Fail: required selection missing |
| Unavailable telemetry (`null`) | Error |

## ToolCallExecution

**ToolCallExecution** requires a distinct matching execution with an integer HTTP status **200-299** for each entry in `calls`. Repeat an identity to require multiple successful executions.

Additional attempts, including failed retries, are allowed. HTTP success alone doesn't establish business correctness or answer quality.

### ToolCallExecution sample dataset

Save this dataset as `evals\tool-execution.json` and replace the sample identities and consent identifier with your own:

```json
{
  "schemaVersion": "2.0.0",
  "default_evaluators": {
    "ToolCallExecution": {
      "calls": [
        {
          "id": "first-lookup",
          "tool": {
            "plugin_id": "T_1234",
            "toolset_id": "catalog",
            "function_name": "get_product"
          }
        },
        {
          "id": "second-lookup",
          "tool": {
            "plugin_id": "T_1234",
            "toolset_id": "catalog",
            "function_name": "get_product"
          }
        }
      ]
    }
  },
  "items": [
    {
      "prompt": "Look up products SKU-123 and SKU-456 individually in the Contoso Catalog.",
      "allowed_tools": ["ContosoCatalog_get_product"]
    }
  ]
}
```

Run the dataset with the same target configuration as the selection example:

```powershell
runevals --m365-agent-id "<your-agent-id>" --prompts-file evals\tool-execution.json --output results\tool-execution.json
```

| Observed matching HTTP outcomes | Result in this sample |
|---|---|
| `200`, `200` | Pass |
| `500`, `200`, `200` | Pass: two successes despite a failed attempt |
| `200` | Fail: only one success |
| `200`, unknown | Error: the unknown outcome could satisfy the second call |

This sample checks two successful calls, not which product IDs were used. Each expectation requires a distinct execution; one execution can't satisfy both.

## Interpret results

Use these rules to distinguish failures from evaluator errors:

| Observation | Result |
|---|---|
| Every expected selection is present, and rules for additional selections are met | Selection passes |
| A required selection is absent from an authoritative list | Selection fails |
| Enough distinct HTTP 2xx executions match every expected identity | Execution passes |
| An expected execution identity is missing, or confirmed outcomes make the required success count impossible | Execution fails |
| An observed call has an incomplete identity | Not credited to any expected call |
| Required telemetry is unavailable, multiple Developer Info artifacts prevent an authoritative snapshot, or unparseable HTTP outcomes could change the verdict | Evaluator error: `toolCallEvidenceIndeterminate` |

A definite failure takes precedence if unknown evidence can't complete all expectations. Unreadable extra attempts don't invalidate enough confirmed successes.

Pass = `1.0`; fail = `0.0`. Errors omit `score` and `threshold`; they aren't passes or necessarily agent defects. JSON score keys are `toolCallSelection` and `toolCallExecution`:

```json
{
  "scores": {
    "toolCallSelection": {
      "score": 1.0,
      "result": "pass",
      "threshold": 1.0,
      "reason": "All expected tool functions were selected."
    },
    "toolCallExecution": {
      "result": "error",
      "error": "Developer Info execution telemetry is unavailable.",
      "code": "toolCallEvidenceIndeterminate"
    }
  }
}
```

## Diagnostics and saved-response evaluation

| Output | Tool-call evidence |
|---|---|
| JSON | `diagnostics.tool_calls` |
| CSV | Complete serialized diagnostics object |
| HTML / console | Tool Call Diagnostics with selections and HTTP outcomes |

Selection display deduplicates identities; execution diagnostics preserve every attempt. `null` means unavailable evidence; `[]` means an authoritative observation of no calls.

Re-score saved selections and execution outcomes without executing prompts. Each saved item or turn must include a `response`:

```powershell
npx -y --package @microsoft/m365-copilot-eval@preview runevals --evaluate-only results\captured-tool-calls.json --output results\rescored.html
```

> [!WARNING]
> Diagnostics can contain sensitive tool and execution details. `EVALS_SUPPRESS_DIAGNOSTICS=true` omits retained diagnostics.
>
> It doesn't redact prompts, responses, evaluator options, or native validation messages. Review artifacts before sharing. Suppressed evidence isn't available for replay.

## Related content

- [Microsoft 365 Copilot Evaluations CLI overview](evaluations-cli-overview.md)
- [Evaluators reference](evaluations-cli-evaluators.md)
- [Configure evaluators](evaluations-cli-create-tests.md#configure-evaluators)
- [CLI reference](evaluations-cli-reference.md)
