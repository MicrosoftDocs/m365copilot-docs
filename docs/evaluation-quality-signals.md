---
title: Derive quality signals for Copilot agent evaluation
description: Learn how to derive, track, and apply quality signals to analyze Copilot agent evaluation results and improve agent performance.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Derive quality signals for Copilot agent evaluation

This article explains how to derive quality signals from evaluation results to diagnose issues, identify patterns, and improve Copilot agent performance.

Quality signals provide a structured way to understand _why_ agent responses succeed or fail. They help teams group evaluation outcomes into meaningful categories, prioritize improvements, and track progress over time.

By using quality signals, teams can:
- Identify recurring failure patterns
- Prioritize improvements based on impact
- Track performance across iterations
- Communicate results clearly to stakeholders

## What are quality signals?

Quality signals are categories that represent patterns in evaluation results. They come from observed behavior rather than predefined rules.

Assertions and quality signals work together in an evaluation workflow:

- **Assertions** determine whether a response passes or fails.
- **Quality signals** group assertion outcomes into higher-level patterns.

After defining assertions, derive quality signals from their outcomes and use those signals to track performance across scenarios.

### Assertions vs. quality signals

| Aspect   | Assertions              | Quality signals        |
|----------|------------------------|-----------------------|
| Level    | Specific and concrete  | Abstract and categorical |
| Purpose  | Determine pass or fail | Diagnose patterns     |
| Quantity | Many per test case     | Few per agent         |
| Origin   | Defined before testing | Derived from results  |
| Example  | Contains "15 days"     | Policy accuracy       |

## Common quality signals

Use the following common quality signals when evaluating Copilot agents:

- **Policy accuracy** – Measures whether responses align with authoritative knowledge sources  
- **Source attribution** – Measures whether responses clearly identify information sources  
- **Personalization** – Measures whether responses use relevant user context  
- **Tool accuracy** – Measures whether tool calls are executed correctly  
- **Tool response handling** – Measures whether the agent correctly interprets tool output  
- **Escalation appropriateness** – Measures whether requests are routed to human support when needed  
- **Privacy protection** – Measures whether sensitive information is safeguarded  
- **Action enablement** – Measures whether responses provide clear next steps  

### Signal evaluation and common causes

| Quality signal | Pass indicators | Fail indicators | Common causes |
|----------------|----------------|----------------|---------------|
| **Policy accuracy** | Correct values and dates<br><br>Accurate policy details<br><br>Consistent with current documentation | Outdated or incorrect values<br><br>Conflicting or fabricated details | Outdated or duplicate documents<br><br>Incorrect retrieval results<br><br>Unsupported model-generated content |
| **Source attribution** | References to specific documents or sections<br><br>Clear attribution statements | No source provided<br><br>Vague or generic references | Missing source metadata<br><br>Instructions that don't require attribution |
| **Personalization** | Region-specific or role-specific responses<br><br>Context-aware recommendations | Generic responses that ignore user context<br><br>Incorrect regional or role-based information | Missing or incomplete user context<br><br>Knowledge sources not segmented by audience |
| **Tool accuracy** | Correct tool selection<br><br>Valid parameters and identifiers<br><br>All required fields populated | Missing or incorrect parameters<br><br>Invalid tool inputs | Ambiguous API specifications<br><br>Incorrect parameter mapping |
| **Tool response handling** | Accurate communication of tool results<br><br>Correct handling of success and error states | Incorrect success claims<br><br>Ignored or misinterpreted tool errors | Missing error-handling guidance<br><br>Misinterpretation of tool responses |
| **Escalation appropriateness** | Sensitive or complex issues are routed correctly<br><br>Compliance with escalation rules | Agent attempts to handle unsupported scenarios<br><br>Failure to escalate high-risk requests | Undefined escalation criteria<br><br>Overly permissive instructions |
| **Privacy protection** | Refusal to disclose restricted data<br><br>Responses limited to authorized information | Disclosure or inference of sensitive data<br><br>Responses that expose protected information | Weak access controls<br><br>Insufficient privacy guidance |
| **Action enablement** | Specific instructions<br><br>Links, identifiers, or contact details | Vague or incomplete guidance<br><br>Missing actionable steps | Missing procedural information in knowledge sources<br><br>Over-summarized responses |

## How to derive quality signals

Derive quality signals from patterns in evaluation results rather than predefined checklists.

To derive quality signals:

- Run an initial set of evaluation test cases  
- Review failed responses across test cases  
- Identify recurring patterns in failures  
- Define each pattern as a quality signal  
- Tag related assertions with the corresponding signal  
- Track pass rates by signal  

## Example of quality signals in practice

The following example shows quality signals defined for an employee onboarding agent.

| Observation | Pattern identified | Quality signal |
|-------------|------------------|----------------|
| Correct PTO values returned | Accurate knowledge retrieval | Policy accuracy |
| Source cited in response | Attribution included | Source attribution |
| Incorrect regional information returned | Context not used | Personalization |
| Tool invoked with incorrect parameters | Execution error | Tool accuracy |
| Request routed to HR appropriately | Correct escalation | Escalation appropriateness |
| Sensitive data nearly exposed | Privacy boundary risk | Privacy protection |
| Response included next steps | Actionable response | Action enablement |

The following are specific measures for quality signals.

| Policy accuracy | Source attribution | Tool accuracy |
|-----------------|-------------------|---------------|
| Contains correct PTO duration | Cites authoritative documents | Invokes correct tool |
| Includes correct enrollment deadline | References specific sections | Uses valid parameters |
| Does not reference outdated policy |  | Returns correct outcome |

## Apply and communicate quality signals

Use quality signals to drive evaluation workflows and communicate insights.

To apply quality signals:

- **Tag assertions** – Associate each assertion with a quality signal  
- **Calculate metrics** – Aggregate pass and fail results by signal  
- **Prioritize issues** – Focus on signals with low pass rates or high impact  
- **Track progress** – Monitor signal performance across agent versions  

To communicate results:

- Link failures to root causes  
- Quantify performance gaps  
- Track improvements over time  

## Quality signals by agent type

Quality signals and priorities vary based on the type of agent you're evaluating.

| Agent type | Signal | Priority |
|------------|--------|----------|
| **Knowledge-grounded** | Policy accuracy | High |
|  | Source attribution | High |
|  | Completeness | Medium |
|  | Personalization | Medium |
| **Tool-calling** | Tool accuracy | High |
|  | Tool response handling | High |
|  | Action enablement | High |
|  | Error recovery | Medium |
| **Hybrid** | Routing accuracy | High |
|  | Knowledge signals | Medium |
|  | Tool signals | Medium |
|  | Escalation appropriateness | Medium |
| **Customer-facing** | Privacy protection | High |
|  | Tone and professionalism | High |
|  | Escalation appropriateness | High |
|  | Resolution completeness | Medium |

## Avoid common pitfalls

Avoid the following issues to ensure that your quality signals remain useful, consistent, and actionable.

### Use specific signals instead of generic categories

Signals that are too broad, such as "Accuracy," "Helpfulness," or "Relevance," don't provide actionable insight. Generic signals make it difficult to identify root causes or prioritize improvements.

Instead, define signals based on specific, observable patterns in evaluation results.

- **Avoid**: Accuracy  
- **Prefer**: Policy accuracy, Source attribution

### Avoid overly granular signals

Creating too many narrowly scoped signals increases complexity without improving insight. Excessive granularity fragments analysis and makes it harder to track meaningful trends.

Instead, group related behaviors into broader, reusable signal categories.

- **Avoid**: PTO accuracy, Benefits accuracy, Holiday accuracy  
- **Prefer**: Policy accuracy  

### Avoid vague pass and fail criteria

Vague signal definitions, such as "Correctness," lack measurable standards. Without clear criteria, results are inconsistent and difficult to interpret.

Instead, define signals using explicit, observable behaviors tied to evaluation outcomes.

- **Avoid**: "Response is correct"  
- **Prefer**: "Response includes correct value and cites authoritative source"

## Next step

> [!div class="nextstepaction"]
> [Evaluate multiturn conversations](evaluation-multi-turn.md)