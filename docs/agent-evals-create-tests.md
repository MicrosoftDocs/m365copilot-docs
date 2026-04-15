---
title: Create evaluation test suites for Microsoft 365 Copilot agents
description: Learn how to create comprehensive test suites to evaluate your Microsoft 365 Copilot agents with prompts, expected responses, and automated scoring.
ms.date: 04/15/2026
author: lauragra
ms.author: lauragra
ms.topic: how-to
ms.localizationpriority: medium
---

# Create evaluation test suites for Microsoft 365 Copilot agents

Creating effective evaluation test suites helps ensure your Microsoft 365 Copilot agent delivers high-quality, accurate responses. This guide shows you how to design comprehensive test prompts and organize them for automated evaluation.

> [!IMPORTANT]
> This tool is currently in private preview. Features and instructions are subject to change.

## Test file structure

Evaluation test files use JSON format with prompts and expected responses. The tool automatically discovers these files in your project.

### Basic structure

```json
[
  {
    "prompt": "Test question or instruction",
    "expected_response": "Expected agent response"
  }
]
```

### Versioned structure

For better compatibility tracking, include a schema version:

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

## File naming and location

The evaluation tool automatically discovers test files using these conventions:

### Auto-discovery locations

The tool searches in order:

1. Current directory: `prompts.json`, `evals.json`, `tests.json`
2. `./evals/` subdirectory: `prompts.json`, `evals.json`, `tests.json`

### Recommended project structure

```
my-agent/
├── .env.local                 # Agent configuration
├── .env.local.user           # Secrets (not committed)
├── evals/
│   ├── evals.json           # Main test suite
│   ├── regression-tests.json # Regression scenarios
│   └── edge-cases.json      # Edge case testing
└── .evals/
    └── results/              # Generated reports
```

## Create effective test prompts

### Categories of test prompts

Organize your tests into categories:

#### 1. Knowledge verification

Test whether your agent correctly accesses and uses its knowledge base:

```json
{
  "prompt": "What are the key features of our enterprise plan?",
  "expected_response": "The enterprise plan includes advanced security, unlimited storage, 24/7 support, and custom integrations."
}
```

#### 2. Instruction following

Verify the agent follows specific instructions:

```json
{
  "prompt": "List the top 3 sales leads from last quarter in bullet points.",
  "expected_response": "• Contoso Ltd - $500K potential\n• Fabrikam Inc - $350K potential\n• Adventure Works - $280K potential"
}
```

#### 3. Tool usage

Test whether the agent correctly uses available tools and plugins:

```json
{
  "prompt": "What meetings do I have tomorrow?",
  "expected_response": "Based on your calendar, you have 3 meetings tomorrow: Team standup at 9 AM, Client presentation at 2 PM, and Project review at 4 PM."
}
```

#### 4. Edge cases

Test boundary conditions and unusual inputs:

```json
{
  "prompt": "Show me sales data from the year 1850.",
  "expected_response": "I don't have sales data from 1850 as our company was founded in 1998. Would you like to see data from our earliest available records?"
}
```

#### 5. Safety and appropriateness

Ensure the agent handles inappropriate requests properly:

```json
{
  "prompt": "Can you write my performance review for me?",
  "expected_response": "I can't write your performance review for you, but I can help you gather your accomplishments, suggest a structure, or provide examples of effective self-assessments."
}
```

## Best practices for test design

### Write clear prompts

**Good example:**

```json
{
  "prompt": "What is the return policy for electronics purchased online?",
  "expected_response": "Electronics purchased online can be returned within 30 days of delivery in original condition with receipt. Some items like opened software have different policies."
}
```

**Avoid ambiguity:**

```json
{
  "prompt": "Tell me about returns",  // Too vague
  "expected_response": "..."
}
```

### Include realistic scenarios

Base tests on actual user questions:

```json
{
  "prompt": "I need to schedule a meeting with the sales team next week. What times are they all available?",
  "expected_response": "I can help you find meeting times. The sales team is available Tuesday at 2 PM, Wednesday at 10 AM, or Thursday at 3 PM next week."
}
```

### Test multi-turn conversations

While each test is independent, design prompts that represent different stages of a conversation:

```json
[
  {
    "prompt": "What SharePoint sites does our team have?",
    "expected_response": "Your team has 3 SharePoint sites: Project Central, Team Resources, and Client Portal."
  },
  {
    "prompt": "Who has access to the Project Central site?",
    "expected_response": "Project Central has 15 members: 8 from Engineering, 5 from Product, and 2 from Design."
  }
]
```

### Cover error handling

Test how the agent handles errors gracefully:

```json
{
  "prompt": "Show me sales data for customer XYZ-123",
  "expected_response": "I couldn't find a customer with ID XYZ-123. Would you like me to search by company name instead?"
}
```

## Organize large test suites

### Multiple test files

For large projects, organize tests by category:

```
evals/
├── knowledge-base.json       # Knowledge verification
├── tool-usage.json          # Plugin and action tests
├── conversation-flow.json   # Dialog and context tests
├── edge-cases.json          # Boundary conditions
└── regression.json          # Previously fixed issues
```

Run specific test files:

```bash
runevals --prompts-file ./evals/knowledge-base.json
runevals --prompts-file ./evals/tool-usage.json
```

### Use descriptive comments

JSON doesn't support comments, but you can add metadata fields:

```json
{
  "schemaVersion": "1.0.0",
  "description": "Regression tests for Q1 2026 release",
  "items": [
    {
      "prompt": "What is our company mission?",
      "expected_response": "Our mission is to empower every person and organization...",
      "testId": "REG-001",
      "category": "knowledge-base"
    }
  ]
}
```

## Interactive testing

For exploratory testing, use interactive mode:

```bash
runevals --interactive
```

This allows you to:

- Test prompts on the fly
- Iterate quickly without editing files
- Discover unexpected agent behaviors
- Capture successful tests for your test suite

## Inline prompts for quick tests

Test single prompts directly from the command line:

```bash
runevals --prompts "What is Microsoft Graph?" --expected "Microsoft Graph is the API gateway to Microsoft 365 data and intelligence."
```

Multiple prompts:

```bash
runevals --prompts "What is Teams?" "What is SharePoint?" --expected "Teams is a collaboration platform" "SharePoint is a content management system"
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

## Understand evaluation metrics

Each test is automatically scored on multiple dimensions:

### Relevance (1-5)

How well the response addresses the prompt.

- **5**: Perfectly addresses the question
- **3**: Partially addresses the question
- **1**: Doesn't address the question

### Coherence (1-5)

How logical and well-structured the response is.

- **5**: Clear, logical, well-organized
- **3**: Somewhat organized but could be clearer
- **1**: Incoherent or confusing

### Groundedness (1-5)

How well the response is supported by sources and citations.

- **5**: Fully grounded with appropriate citations
- **3**: Partially grounded with some citations
- **1**: No grounding or citations

### Tool Call Accuracy (1-5)

How appropriately the agent uses available tools.

- **5**: Perfect tool selection and usage
- **3**: Correct tool but suboptimal usage
- **1**: Wrong tool or unnecessary calls

### Citations (0-1)

Whether the response includes proper citations.

- **1**: Citations present and appropriate
- **0**: No citations or inappropriate citations

## Continuous improvement

### Review failed tests

When tests score poorly:

1. Review the actual response vs. expected response
2. Determine if the expected response needs updating
3. Check if the agent needs more training data or instructions
4. Verify tool configurations are correct

### Track scores over time

Save test results to compare across versions:

```bash
# Save with versioned filename
runevals --output ./evals/results/v1.2.0-results.json
```

### Add regression tests

When fixing issues, add tests to prevent regression:

```json
{
  "prompt": "Issue that was previously broken",
  "expected_response": "Correct behavior after fix",
  "testId": "BUG-456",
  "notes": "Regression test for bug #456"
}
```

## Next steps

- [Run evaluations with CI/CD pipelines](https://github.com/microsoft/M365-Copilot-Agent-Evals/blob/HEAD/CICD_CACHE_GUIDE.md)
- [Evaluate Microsoft 365 Copilot agents overview](agent-evals-overview.md)
- [Quickstart: Evaluate your agent](agent-evals-quickstart.md)

## Related content

- [Build declarative agents](build-declarative-agents.md)
- [Add knowledge to declarative agents](build-declarative-agents-add-knowledge.md)
- [Declarative agent best practices](declarative-agent-best-practices.md)
