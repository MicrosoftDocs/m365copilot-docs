---
title: Derive quality signals for Copilot agent evaluation
description: Learn how to derive, track, and apply quality signals to analyze Copilot agent evaluation results and improve agent performance.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Derive quality signals for Copilot agent evaluation

This article describes how to derive quality signals from evaluation results to diagnose issues, identify patterns, and improve Copilot agent performance.

## Overview of quality signals

Quality signals provide a structured way to understand *why* agent responses succeed or fail. While assertions determine whether a response passes or fails, quality signals group those outcomes into meaningful patterns that support analysis and prioritization.

Quality signals enable teams to:
- Identify recurring failure patterns.
- Prioritize improvements based on impact.
- Track progress across iterations.
- Communicate results clearly to stakeholders.

Quality signals represent categories of evaluation, while assertions are individual checks within those categories. The following table compares assertions and quality signals.

| Aspect | Assertions | Quality signals |
|--------|-----------|----------------|
| Level | Specific and concrete | Abstract and categorical |
| Purpose | Determine pass or fail | Diagnose patterns |
| Quantity | Many per test case | Few per agent |
| Origin | Defined before testing | Derived from results |
| Example | Contains "15 days" | Policy accuracy |

## Identify quality signals from evaluation results

Identify quality signals from patterns in evaluation results rather than predefined checklists. This approach ensures that signals reflect real agent behavior.

Use the following process to identify quality signals:

1. Run an initial set of evaluation test cases.
1. Review failed responses across test cases.
1. Identify recurring patterns in failures.
1. Define each pattern as a quality signal.
1. Tag related assertions with the corresponding signal.
1. Track pass rates by signal.

### Example: Employee onboarding agent

The following example shows how patterns in evaluation results map to quality signals.

| Observation | Pattern identified | Quality signal |
|------------|-------------------|----------------|
| Correct PTO values returned | Accurate knowledge retrieval | Policy accuracy |
| Source cited in response | Attribution included | Source attribution |
| Incorrect regional information returned | Context not used | Personalization |
| Tool invoked with incorrect parameters | Execution error | Tool accuracy |
| Request routed to HR appropriately | Correct escalation | Escalation appropriateness |
| Sensitive data nearly exposed | Privacy boundary risk | Privacy protection |
| Response included next steps | Actionable response | Action enablement |

## Common quality signals

The following common quality signals used in agent evaluations and provides examples of how they apply.

- **Policy accuracy** - Measures whether responses align with authoritative knowledge sources.
- **Source attribution** - Measures whether responses clearly identify information sources.
- **Personalization** - Measures whether responses use relevant user context.
- **Tool accuracy** - Measures whether tool calls are executed correctly.
- **Tool response handling** - Measures whether the agent correctly interprets tool output.
- **Escalation appropriateness** - Measures whether the system routes requests to human support when needed.
- **Privacy protection** - Measures whether sensitive information is safeguarded.
- **Action enablement** - Measures whether responses provide clear next steps.

| Quality signal | Pass indicators | Fail indicators | Common causes |
|---|---|---|---|
| **Policy accuracy** | <li>Correct values and dates</li><li>Accurate policy details</li><li>Consistent with current documentation</li> | <li>Outdated or incorrect values</li><li>Conflicting or fabricated details</li> | <li>Outdated or duplicate documents</li><li>Incorrect retrieval results</li><li>Unsupported model-generated content</li> |
| **Source attribution** | <li>References to specific documents or sections</li><li>Clear attribution statements</li> | <li>No source provided</li><li>Vague or generic references</li> | <li>Missing source metadata</li><li>Instructions that don't require attribution</li> |
| **Personalization** | <li>Region-specific or role-specific responses</li><li>Context-aware recommendations</li> | <li>Generic responses that ignore user context</li><li>Incorrect regional or role-based information</li> | <li>Missing or incomplete user context</li><li>Knowledge sources not segmented by audience</li> |
| **Tool accuracy** | <li>Correct tool selection</li><li>Valid parameters and identifiers</li><li>All required fields populated</li> | <li>Missing or incorrect parameters</li><li>Invalid tool inputs</li> | <li>Ambiguous API specifications</li><li>Incorrect parameter mapping</li> |
| **Tool response handling** | <li>Accurate communication of tool results</li><li>Correct handling of success and error states</li> | <li>Incorrect success claims</li><li>Ignored or misinterpreted tool errors</li> | <li>Missing error-handling guidance</li><li>Misinterpretation of tool responses</li> |
| **Escalation appropriateness** | <li>Sensitive or complex issues are routed correctly</li><li>Compliance with escalation rules</li> | <li>Agent attempts to handle unsupported scenarios</li><li>Failure to escalate high-risk requests</li> | <li>Undefined escalation criteria</li><li>Overly permissive instructions</li> |
| **Privacy protection** | <li>Refusal to disclose restricted data</li><li>Responses limited to authorized information</li> | <li>Disclosure or inference of sensitive data</li><li>Responses that expose protected information</li> | <li>Weak access controls</li><li>Insufficient privacy guidance</li> |
| **Action enablement** | <li>Specific instructions</li><li>Links, identifiers, or contact details</li> | <li>Vague or incomplete guidance</li><li>Missing actionable steps</li> | <li>Missing procedural information in knowledge sources</li><li>Over-summarized responses</li> |

### Quality signal examples

The following table provides examples for common quality signals.

| Policy accuracy | Source attribution | Tool success |
|---|---|---|
| Contains correct PTO duration. | Cites authoritative documents. | Invokes correct tool. |
| Includes correct enrollment deadline. | References specific sections. | Uses valid parameters. |
| Doesn't reference outdated policy. | | Returns correct outcome. |

## Quality signals by agent type

Different agent types require different evaluation priorities. The following table lists signal priorities for common agent types.

For multi-step conversations, see [Evaluate multiturn conversations](evaluation-multi-turn.md).

| Agent type | Description | Signal | Priority |
|---|---|---|---|
| **Knowledge-grounded** | Focus on retrieving and presenting accurate information. | Policy accuracy | High |
| | | Source attribution | High |
| | | Completeness | Medium |
| | | Personalization | Medium |
| **Tool-calling** | Perform actions through integrations. | Tool accuracy | High |
| | | Tool response handling | High |
| | | Action enablement | High |
| | | Error recovery | Medium |
| **Hybrid** | Combine knowledge retrieval and tool execution. | Routing accuracy | High |
| | | Knowledge signals | Medium |
| | | Tool signals | Medium |
| | | Escalation appropriateness | Medium |
| **Customer-facing** | Interact directly with external users. | Privacy protection | High |
| | | Tone and professionalism | High |
| | | Escalation appropriateness | High |
| | | Resolution completeness | Medium |

## Implement quality signal tracking

To apply quality signals in an evaluation workflow:

1. **Tag assertions.** Associate each assertion with a quality signal.
1. **Calculate metrics.** Aggregate pass and fail results by signal to determine performance.
1. **Prioritize issues.** Focus on signals with the lowest pass rates or highest impact.
1. **Track progress.** Monitor signal performance across agent versions to identify trends.

## Communicate results with quality signals

Quality signals support clear and actionable communication of evaluation results. Use quality signals to:

- Link failures to root causes
- Quantify performance gaps
- Track improvements over time

This approach enables targeted fixes and consistent reporting.

## Avoid common anti-patterns

Avoid the following issues when defining and using quality signals.

### Avoid generic signals

Don't rely on overly broad categories such as:
- Accuracy
- Helpfulness
- Relevance

Instead, derive signals from observed evaluation patterns.

### Avoid excessive granularity

Don't create too many narrowly scoped signals.

**Avoid:**
- PTO Accuracy
- Benefits Accuracy
- Holiday Accuracy

**Prefer:**
- Policy Accuracy
- Personalization

### Define clear criteria

Each signal must include clear pass and fail criteria.

- **Avoid** - Undefined terms such as "Correctness"
- **Prefer** - Specific definitions tied to observable behavior

## Next step

> [!div class="nextstepaction"]
> [Evaluate multiturn conversations](evaluation-multi-turn.md)