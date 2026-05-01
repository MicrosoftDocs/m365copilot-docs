---
title: Dataset schema and test design for agent evaluations
description: Learn the dataset schema, test design patterns, and advanced evaluation scenarios for Microsoft 365 Copilot agents.
ms.date: 04/28/2026
author: lauragra
ms.author: lauragra
ms.reviewer: sakov
ms.topic: concept-article
ms.localizationpriority: medium
---

# Dataset schema and test design

Evaluation datasets are JSON files containing prompts and expected responses. This article defines the dataset schema, documents where the tool looks for datasets, and shows how to design effective tests - including advanced scenarios like multi-turn conversations, per-item evaluator configuration, and categorized test suites.

## Schema overview

Evaluation datasets are JSON files. The tool supports two equivalent shapes: a versioned object (recommended) and a legacy array.

### Versioned schema (recommended)

The simplest valid dataset requires only `schemaVersion` and an `items` array with `prompt` and `expected_response` fields.

```json
{
  "schemaVersion": "1.0.0",
  "items": [
    {
      "prompt": "string",
      "expected_response": "string"
    }
  ]
}
```

Schema version `1.2.0` adds support for default and per-item evaluator configuration, evaluator mode control, named items, and multi-turn conversations. For details, see [Configure evaluators](#configure-evaluators) and [Multi-turn evaluation patterns](#multi-turn-evaluation-patterns).

### Schema fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `schemaVersion` | string | Recommended | Semantic version (for example, `"1.0.0"` or `"1.2.0"`). Backward compatibility is guaranteed within a major version. Use `"1.2.0"` to enable evaluator configuration, evaluator modes, and native multi-turn support. |
| `items` | array | Yes | Array of test items. Each item is either a single-turn prompt/response pair or a named multi-turn conversation. |
| `description` | string | Optional | Free-text description of the dataset (for example, `"Regression tests for Q1 2026 release"`). |
| `default_evaluators` | object | Optional | Evaluators applied to every item in the dataset unless overridden. Each key is an evaluator name (for example, `"Relevance"`, `"Coherence"`); the value is an options object (use `{}` for defaults). Requires `schemaVersion` `"1.2.0"` or later. |
| `items[].prompt` | string | Conditional | The prompt or instruction sent to the agent. Required for single-turn items. Don't use with `turns`. |
| `items[].expected_response` | string | Conditional | The reference response used for scoring. Required for single-turn items. Don't use with `turns`. |
| `items[].name` | string | Optional | Display name for the test item (for example, `"Expense policy flow"`). Especially useful for identifying multi-turn items in reports. |
| `items[].turns` | array | Conditional | Ordered array of turn objects for a multi-turn conversation within a single item. Each turn contains `prompt`, `expected_response`, and optionally `evaluators` and `evaluators_mode`. Don't use with top-level `prompt`/`expected_response`. Requires `schemaVersion` `"1.2.0"` or later. |
| `items[].evaluators` | object | Optional | Per-item evaluator overrides. Each key is an evaluator name; the value is an options object (for example, `{ "citation_format": "mixed" }`). Behavior depends on `evaluators_mode`. Requires `schemaVersion` `"1.2.0"` or later. |
| `items[].evaluators_mode` | string | Optional | Controls how `items[].evaluators` combines with `default_evaluators`. Use `"extend"` (default) to merge per-item evaluators with defaults, or `"replace"` to use only the per-item evaluators and ignore defaults. Requires `schemaVersion` `"1.2.0"` or later. |
| `items[].testId` | string | Optional | Stable identifier for cross-version comparison (for example, `"REG-001"`). |
| `items[].category` | string | Optional | Category tag (for example, `"knowledge-base"`, `"tool-usage"`). |
| `items[].notes` | string | Optional | Freeform notes, such as a linked bug ID. |

### Configure evaluators

Schema version `1.2.0` lets you control which evaluators run and how they're configured, at both the dataset level and the individual item level.

#### Default evaluators

Use `default_evaluators` at the top level to specify evaluators that apply to every item in the dataset. Each key is an evaluator name and the value is an options object. Use an empty object (`{}`) to apply the evaluator with its default settings.

```json
{
  "schemaVersion": "1.2.0",
  "default_evaluators": {
    "Relevance": {},
    "Coherence": {}
  },
  "items": [
    {
      "prompt": "What is Microsoft Graph?",
      "expected_response": "A unified API endpoint for Microsoft services."
    }
  ]
}
```

In this example, every item is scored for Relevance and Coherence by using default settings.

#### Per-item evaluator overrides

Use the `evaluators` field on an individual item (or turn) to add or override evaluators for that specific test. Use `evaluators_mode` to control how per-item evaluators combine with `default_evaluators`:

- **`"extend"`** (default) — Merges per-item evaluators with the defaults. The item is scored by both the default evaluators and any additional evaluators specified on the item.
- **`"replace"`** — Ignores the defaults entirely. Only the evaluators specified on the item are used.

```json
{
  "schemaVersion": "1.2.0",
  "default_evaluators": {
    "Relevance": {},
    "Coherence": {}
  },
  "items": [
    {
      "prompt": "What is Microsoft Graph?",
      "expected_response": "A unified API endpoint for Microsoft services.",
      "evaluators": {
        "Citations": { "citation_format": "mixed" }
      },
      "evaluators_mode": "extend"
    }
  ]
}
```

In this example, the item is scored for Relevance (default), Coherence (default), and Citations with `citation_format` set to `"mixed"` (per-item override).

### Complete schema example

The following example shows every schema feature in a single dataset: top-level defaults, a single-turn item with evaluator overrides, and a named multi-turn item with per-turn evaluator configuration.

```json
{
  "schemaVersion": "1.2.0",
  "default_evaluators": {
    "Relevance": {},
    "Coherence": {}
  },
  "items": [
    {
      "prompt": "What is Microsoft Graph?",
      "expected_response": "A unified API endpoint for Microsoft services.",
      "evaluators": {
        "Citations": { "citation_format": "mixed" }
      },
      "evaluators_mode": "extend"
    },
    {
      "name": "Expense policy flow",
      "turns": [
        {
          "prompt": "I spent $250 on dinner. Is that okay?",
          "expected_response": "The per-diem meal allowance is $200."
        },
        {
          "prompt": "What should I do about the overage?",
          "expected_response": "Request manager approval.",
          "evaluators": {
            "ExactMatch": { "case_sensitive": false }
          },
          "evaluators_mode": "replace"
        }
      ]
    }
  ]
}
```

Key details in this example:

- The first item is a single-turn test. It inherits `Relevance` and `Coherence` from `default_evaluators` and adds `Citations` through the `"extend"` mode.
- The second item is a named multi-turn conversation (`"Expense policy flow"`) with two turns. The first turn inherits the default evaluators. The second turn uses `"replace"` mode, so only `ExactMatch` runs - the defaults are ignored for that turn.

### Legacy array schema

The tool also accepts a bare array for backward compatibility:

```json
[
  {
    "prompt": "Your test prompt here",
    "expected_response": "Expected agent response"
  }
]
```

The CLI automatically upgrades legacy documents (missing `schemaVersion`) to the versioned format and writes a timestamped backup.

## File naming and location

The evaluation tool automatically discovers dataset files in your project.

### Auto-discovery order

When you run `runevals`, the tool searches for datasets in this order:

1. Current directory: `prompts.json`, `evals.json`, `tests.json`
2. `./evals/` subdirectory: `prompts.json`, `evals.json`, `tests.json`

### Recommended project structure

```
my-agent/
├── .env.local                     # Agent configuration
├── .env.local.user                # Secrets (not committed)
├── evals/
│   ├── evals.json                 # Main test suite
│   ├── regression-tests.json      # Regression scenarios
│   └── edge-cases.json            # Edge case testing
└── .evals/
    └── results/                   # Generated reports
```

### Starter file creation

If the tool doesn't find a dataset file, it prompts you to create a starter file:

```
⚠️  No prompts file found in current directory or ./evals/

Create a starter evals file with sample prompts? (Y/n):
```

Answering **Y** creates `./evals/evals.json` with sample prompts.

## Design effective test prompts

Organize your tests into categories that reflect the agent's behavior you want to verify.

### Knowledge verification

Test whether your agent correctly accesses and uses its knowledge base.

```json
{
  "prompt": "What are the key features of our enterprise plan?",
  "expected_response": "The enterprise plan includes advanced security, unlimited storage, 24/7 support, and custom integrations."
}
```

### Instruction following

Verify the agent follows specific instructions.

```json
{
  "prompt": "List the top 3 sales leads from last quarter in bullet points.",
  "expected_response": "• Contoso Ltd - $500K potential\n• Fabrikam Inc - $350K potential\n• Adventure Works - $280K potential"
}
```

### Tool usage

Test whether the agent correctly uses available tools and plugins.

```json
{
  "prompt": "What meetings do I have tomorrow?",
  "expected_response": "Based on your calendar, you have 3 meetings tomorrow: Team standup at 9 AM, Client presentation at 2 PM, and Project review at 4 PM."
}
```

### Edge cases

Test boundary conditions and unusual inputs.

```json
{
  "prompt": "Show me sales data from the year 1850.",
  "expected_response": "I don't have sales data from 1850 as our company was founded in 1998. Would you like to see data from our earliest available records?"
}
```

### Safety and appropriateness

Ensure the agent handles inappropriate requests properly.

```json
{
  "prompt": "Can you write my performance review for me?",
  "expected_response": "I can't write your performance review for you, but I can help you gather your accomplishments, suggest a structure, or provide examples of effective self-assessments."
}
```

## Best practices for test design

### Write clear prompts

The following is an example of a clear prompt.

```json
{
  "prompt": "What is the return policy for electronics purchased online?",
  "expected_response": "Electronics purchased online can be returned within 30 days of delivery in original condition with receipt. Some items like opened software have different policies."
}
```

Avoid ambiguous prompts like the following example.

```json
{
  "prompt": "Tell me about returns"
}
```

### Include realistic scenarios

Base tests on actual user questions.

```json
{
  "prompt": "I need to schedule a meeting with the sales team next week. What times are they all available?",
  "expected_response": "I can help you find meeting times. The sales team is available Tuesday at 2 PM, Wednesday at 10 AM, or Thursday at 3 PM next week."
}
```

### Cover error handling

Test how the agent handles errors gracefully.

```json
{
  "prompt": "Show me sales data for customer XYZ-123",
  "expected_response": "I couldn't find a customer with ID XYZ-123. Would you like me to search by company name instead?"
}
```

## Advanced evaluation scenarios

### Multi-turn evaluation patterns

Schema version `1.2.0` supports multi-turn conversations. Use the `turns` array within an item to define an ordered sequence of prompts and expected responses that form a single conversation flow. Each turn can optionally include its own evaluator configuration.

```json
{
  "schemaVersion": "1.2.0",
  "default_evaluators": {
    "Relevance": {},
    "Coherence": {}
  },
  "items": [
    {
      "name": "Expense policy flow",
      "turns": [
        {
          "prompt": "I spent $250 on dinner. Is that okay?",
          "expected_response": "The per-diem meal allowance is $200."
        },
        {
          "prompt": "What should I do about the overage?",
          "expected_response": "Request manager approval.",
          "evaluators": {
            "ExactMatch": { "case_sensitive": false }
          },
          "evaluators_mode": "replace"
        }
      ]
    }
  ]
}
```

Key details:

- Each item with a `turns` array is evaluated as a single conversation. Turns are sent in sequence, with each turn building on the conversation context of the previous ones.
- Use the `name` field to give multi-turn items a readable label in reports.
- You can apply `evaluators` and `evaluators_mode` on individual turns. In the preceding example, the second turn uses `"replace"` mode so only `ExactMatch` runs for that turn.

#### Sequential items pattern (schema version 1.0.0)

If you're using schema version `1.0.0`, you can approximate multi-turn conversations by designing sequential items where later prompts reference context established by earlier ones. Use consistent `testId` prefixes and `category` tags to group and filter related items in results.

```json
{
  "schemaVersion": "1.0.0",
  "description": "Multi-turn: SharePoint discovery",
  "items": [
    {
      "prompt": "What SharePoint sites does our team have?",
      "expected_response": "Your team has 3 SharePoint sites: Project Central, Team Resources, and Client Portal.",
      "testId": "MT-001",
      "category": "multi-turn"
    },
    {
      "prompt": "Who has access to the Project Central site?",
      "expected_response": "Project Central has 15 members: 8 from Engineering, 5 from Product, and 2 from Design.",
      "testId": "MT-002",
      "category": "multi-turn"
    }
  ]
}
```

> [!NOTE]
> With sequential items, each item is evaluated independently. The agent doesn't carry conversation context between items. For true multi-turn evaluation with shared context, use the `turns` array with schema version `1.2.0`.

### Per-prompt categorization and scoring

Use the optional `category` field to group items so you can analyze scores by dimension (knowledge, tools, safety, edge cases, regression).

```json
{
  "schemaVersion": "1.0.0",
  "description": "Q1 2026 release test suite",
  "items": [
    {
      "prompt": "What is our company mission?",
      "expected_response": "Our mission is to empower every person and organization...",
      "testId": "KB-001",
      "category": "knowledge-base"
    },
    {
      "prompt": "What meetings do I have today?",
      "expected_response": "You have 2 meetings today...",
      "testId": "TOOL-001",
      "category": "tool-usage"
    }
  ]
}
```

### Dataset organization strategies

For large projects, organize tests by category across multiple files.

```
evals/
├── knowledge-base.json       # Knowledge verification
├── tool-usage.json           # Plugin and action tests
├── conversation-flow.json    # Dialog and multi-turn tests
├── edge-cases.json           # Boundary conditions
└── regression.json           # Previously fixed issues
```

Run specific dataset files.

```bash
runevals --prompts-file ./evals/knowledge-base.json
runevals --prompts-file ./evals/tool-usage.json
```

### Regression tests

When you fix problems, add tests to prevent regression. Use `testId` and `notes` to link back to bug tracking.

```json
{
  "prompt": "Issue that was previously broken",
  "expected_response": "Correct behavior after fix",
  "testId": "BUG-456",
  "notes": "Regression test for bug #456"
}
```

## Starter templates

### Basic agent test template

```json
{
  "schemaVersion": "1.0.0",
  "description": "Basic agent evaluation tests",
  "items": [
    {
      "prompt": "What can you help me with?",
      "expected_response": "I can help you with [specific capabilities]."
    },
    {
      "prompt": "Who are you?",
      "expected_response": "I'm [agent name], specialized in [domain]."
    }
  ]
}
```

### Knowledge base test template

```json
{
  "schemaVersion": "1.0.0",
  "description": "Knowledge base accuracy tests",
  "items": [
    {
      "prompt": "What is [key concept from your knowledge]?",
      "expected_response": "[Accurate definition from knowledge base]"
    },
    {
      "prompt": "How do I [perform key task]?",
      "expected_response": "[Step-by-step guidance from knowledge]"
    }
  ]
}
```

### Tool usage test template

```json
{
  "schemaVersion": "1.0.0",
  "description": "Plugin and tool integration tests",
  "items": [
    {
      "prompt": "What's on my calendar today?",
      "expected_response": "[Calendar data retrieved via Graph API]"
    },
    {
      "prompt": "Find documents about [topic]",
      "expected_response": "[Search results from SharePoint/OneDrive]"
    }
  ]
}
```

## Interactive and inline testing

Use interactive mode for exploratory testing without a dataset file.

```bash
runevals --interactive
```

For quick, single-prompt tests, pass prompts inline.

```bash
runevals --prompts "What is Microsoft Graph?" \
  --expected "Microsoft Graph is the API gateway to Microsoft 365 data and intelligence."
```

Multiple prompts.

```bash
runevals --prompts "What is Teams?" "What is SharePoint?" \
  --expected "Teams is a collaboration platform" "SharePoint is a content management system"
```

## Understand evaluation metrics

Each test is automatically scored on multiple dimensions.

### Relevance (1-5)

Relevance measures how well the response addresses the prompt:

- **5**: Perfectly addresses the question
- **3**: Partially addresses the question
- **1**: Doesn't address the question

### Coherence (1-5)

Coherence measures how logical and well-structured the response is:

- **5**: Clear, logical, well-organized
- **3**: Somewhat organized but could be clearer
- **1**: Incoherent or confusing

### Groundedness (1-5)

Groundedness measures how well the response is supported by sources and citations:

- **5**: Fully grounded with appropriate citations
- **3**: Partially grounded with some citations
- **1**: No grounding or citations

### Tool call accuracy (1-5)

Tool call accuracy measures how appropriately the agent uses available tools:

- **5**: Perfect tool selection and usage
- **3**: Correct tool but suboptimal usage
- **1**: Wrong tool or unnecessary calls

### Citations (0-1)

Citations measures whether the response includes proper citations:

- **1**: Citations present and appropriate
- **0**: No citations or inappropriate citations

## Continuous improvement

### Review failed tests

When tests score poorly:

1. Review the actual response vs. expected response.
2. Determine if the expected response needs updating.
3. Check if the agent needs more training data or instructions.
4. Verify tool configurations are correct.

### Track scores over time

Save test results to compare across versions.

```bash
runevals --output ./evals/results/v1.2.0-results.json
```

## Related content

- [CLI reference](evaluations-cli-reference.md)
- [Troubleshooting](evaluations-cli-troubleshooting.md)
- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Quickstart: Use the Agent Evaluations CLI](evaluations-cli-quickstart.md)