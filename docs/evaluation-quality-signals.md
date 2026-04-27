---
title: Derive quality signals for Copilot agent evaluation
description: Learn how to derive, track, and apply quality signals to analyze Copilot agent evaluation results and improve agent performance.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
ms.localizationpriority: medium
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

After you define assertions, derive quality signals from the assertion outcomes and use those signals to track performance across scenarios.

### Assertions vs. quality signals

The following table compares assertions and quality signals.

| Aspect   | Assertions              | Quality signals        |
|----------|------------------------|-----------------------|
| Level    | Specific and concrete  | Abstract and categorical |
| Purpose  | Determine pass or fail | Diagnose patterns     |
| Quantity | Many per test case     | Few per agent         |
| Origin   | Defined before testing | Derived from results  |
| Example  | Contains "15 days"     | Policy accuracy       |

## Common quality signals

Use the following common quality signals when you evaluate Copilot agents:

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
| **Policy accuracy** | Correct values and dates<br><br>Accurate policy details<br><br>Consistent with current documentation | Outdated or incorrect values<br><br>Conflicting or fabricated details | Outdated or duplicate documents<br><br>Incorrect retrieval results<br><br>Model hallucinations |
| **Source attribution** | References to specific documents or sections<br><br>Clear attribution statements | No source provided<br><br>Vague or generic references | Missing source metadata<br><br>Instructions don't emphasize attribution |
| **Personalization** | Region-specific or role-specific responses<br><br>Context-aware recommendations | Generic responses that ignore user context<br><br>Incorrect regional or role-based information | User context unavailable for agent<br><br>Knowledge sources not segmented by audience |
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

- **Tag assertions** – Add signal tags to each assertion in your test cases. 

    Test Case: PTO-001  
    Prompt: "How many vacation days do new employees get?"  

    Assertions:  
    - The response contains "15 days".  
      [Signal: Policy Accuracy]  

    - The response cites the Employee Handbook.  
      [Signal: Source Attribution]  

    - The response mentions the <2 year tenure bracket.  
      [Signal: Personalization]
  
- **Calculate metrics** – Aggregate pass and fail results by signal. 

    | Quality signal | Test cases | Pass | Fail | Pass rate |
    | -------------- | ---------- | ---- | ---- | --------- |
    | Policy Accuracy | 25 | 23 | 2 | 92% |
    | Source Attribution | 25 | 20 | 5 | 80% |
    | Personalization | 15 | 11 | 4 | 73% |
    | Tool Accuracy | 12 | 10 | 2 | 83% |
    | Escalation Appropriateness | 8 | 8 | 0 | 100% |
    | Privacy Protection | 10 | 10 | 0 | 100% |

- **Prioritize issues** – Focus on signals with low pass rates or high impact.

    1. **Personalization (73%)** - Biggest gap, investigate first.
    1. **Source attribution (80%)** - Second priority.
    1. **Tool accuracy (83%)** - Third priority.
    1. **Policy accuracy (92%)** - Minor issues, monitor.

- **Track progress** – Monitor signal pass rates across agent versions.  

    - Version 1.0 > 1.1 > 1.2 > 1.3
    - Personalization: 73% > 78% > 85% > 91% (improving)
    - Source attribution: 80% > 82% > 88% > 90% (improving)
    - Tool accuracy: 83% > 85% > 84% > 92% (improved after v1.2 regression)

Quality signals transform stakeholder conversations.

- **Without signals:** The agent isn't performing well. Users are complaining.
- **With signals:** Policy Accuracy is at 92% — we're hitting our target. But Personalization dropped to 73% after the last update. Specifically, UK employees are getting US holiday information. We identified the root cause: the context retrieval isn't passing location data. Fix is in progress for next release.

This specificity enables targeted fixes, quantitative progress tracking, and clearer stakeholder communication.

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
> [Evaluate multi-turn conversations](evaluation-multi-turn.md)