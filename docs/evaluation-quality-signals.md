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
- Identify recurring failure patterns
- Prioritize improvements based on impact
- Track progress across iterations
- Communicate results clearly to stakeholders

## Quality signals and assertions

Quality signals represent categories of evaluation, while assertions are individual checks within those categories.

| Aspect | Assertions | Quality signals |
|--------|-----------|----------------|
| Level | Specific and concrete | Abstract and categorical |
| Purpose | Determine pass or fail | Diagnose patterns |
| Quantity | Many per test case | Few per agent |
| Origin | Defined before testing | Derived from results |
| Example | "Contains '15 days'" | Policy Accuracy |

### Examples

**Policy accuracy** quality signal examples:
- Contains correct PTO duration
- Includes correct enrollment deadline
- Doesn't reference outdated policy

**Source attribution** quality signal examples:
- Cites authoritative documents
- References specific sections

**Tool success** quality signal examples:
- Invokes correct tool
- Uses valid parameters
- Returns correct outcome

## How to identify quality signals

Identify quality signals from patterns in evaluation results rather than predefined checklists. This approach ensures that signals reflect real agent behavior.

### Identify signals from evaluation results

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
| Correct PTO values returned | Accurate knowledge retrieval | Policy Accuracy |
| Source cited in response | Attribution included | Source Attribution |
| Incorrect regional information returned | Context not used | Personalization |
| Tool invoked with incorrect parameters | Execution error | Tool Accuracy |
| Request routed to HR appropriately | Correct escalation | Escalation Appropriateness |
| Sensitive data nearly exposed | Privacy boundary risk | Privacy Protection |
| Response included next steps | Actionable response | Action Enablement |

## Common quality signals

This section defines common quality signals used in agent evaluations and provides examples of how they apply.

### Policy accuracy

Policy accuracy measures whether responses align with authoritative knowledge sources.

- **Pass indicators**
  - Correct values and dates
  - Accurate policy details
  - Consistent with current documentation

- **Fail indicators**
  - Outdated or incorrect values
  - Conflicting or fabricated details

- **Common causes**
  - Outdated or duplicate documents
  - Incorrect retrieval results
  - Unsupported model-generated content

### Source attribution

Source attribution measures whether responses clearly identify information sources.

- **Pass indicators**
  - References to specific documents or sections
  - Clear attribution statements

- **Fail indicators**
  - No source provided
  - Vague or generic references

- **Common causes**
  - Missing source metadata
  - Instructions that don't require attribution

### Personalization

Personalization measures whether responses use relevant user context.

- **Pass indicators**
  - Region-specific or role-specific responses
  - Context-aware recommendations

- **Fail indicators**
  - Generic responses that ignore user context
  - Incorrect regional or role-based information

- **Common causes**
  - Missing or incomplete user context
  - Knowledge sources not segmented by audience

### Tool accuracy

Tool accuracy measures whether tool calls are executed correctly.

- **Pass indicators**
  - Correct tool selection
  - Valid parameters and identifiers
  - All required fields populated

- **Fail indicators**
  - Missing or incorrect parameters
  - Invalid tool inputs

- **Common causes**
  - Ambiguous API specifications
  - Incorrect parameter mapping

### Tool response handling

Tool response handling measures whether the agent correctly interprets tool output.

- **Pass indicators**
  - Accurate communication of tool results
  - Correct handling of success and error states

- **Fail indicators**
  - Incorrect success claims
  - Ignored or misinterpreted tool errors

- **Common causes**
  - Missing error-handling guidance
  - Misinterpretation of tool responses

### Escalation appropriateness

Escalation appropriateness measures whether the system routes requests to human support when needed.

- **Pass indicators**
  - Sensitive or complex issues are routed correctly
  - Compliance with escalation rules

- **Fail indicators**
  - Agent attempts to handle unsupported scenarios
  - Failure to escalate high-risk requests

- **Common causes**
  - Undefined escalation criteria
  - Overly permissive instructions

### Privacy protection

Privacy protection measures whether sensitive information is safeguarded.

- **Pass indicators**
  - Refusal to disclose restricted data
  - Responses limited to authorized information

- **Fail indicators**
  - Disclosure or inference of sensitive data
  - Responses that expose protected information

- **Common causes**
  - Weak access controls
  - Insufficient privacy guidance

### Action enablement

Action enablement measures whether responses provide clear next steps.

- **Pass indicators**
  - Specific instructions
  - Links, identifiers, or contact details

- **Fail indicators**
  - Vague or incomplete guidance
  - Missing actionable steps

- **Common causes**
  - Missing procedural information in knowledge sources
  - Over-summarized responses

## Quality signals by agent type

Different agent types require different evaluation priorities. The following sections outline common signal priorities.

For multi-step conversations, see [Evaluate multi-turn conversations](evaluation-multi-turn.md).

### Knowledge-grounded agents

Knowledge-grounded agents focus on retrieving and presenting accurate information.

| Signal | Priority |
|--------|----------|
| Policy accuracy | High |
| Source attribution | High |
| Completeness | Medium |
| Personalization | Medium |

### Tool-calling agents

Tool-calling agents perform actions through integrations.

| Signal | Priority |
|--------|----------|
| Tool accuracy | High |
| Tool response handling | High |
| Action enablement | High |
| Error recovery | Medium |

### Hybrid agents

Hybrid agents combine knowledge retrieval and tool execution.

| Signal | Priority |
|--------|----------|
| Routing accuracy | High |
| Knowledge signals | Medium |
| Tool signals | Medium |
| Escalation appropriateness | Medium |

### Customer-facing agents

Customer-facing agents interact directly with external users.

| Signal | Priority |
|--------|----------|
| Privacy protection | High |
| Tone and professionalism | High |
| Escalation appropriateness | High |
| Resolution completeness | Medium |

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
> [Evaluate multi-turn conversations](evaluation-multi-turn.md) to assess conversational scenarios.