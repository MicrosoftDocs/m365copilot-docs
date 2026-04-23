---
title: Write assertions for Copilot agent evaluation
description: Learn how to create specific, verifiable assertions that define success criteria for Copilot agent evaluation test cases.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
ms.localizationpriority: medium
---

# Write assertions

Assertions define what **correct** means for each evaluation test case. Well-written assertions enable consistent pass or fail decisions and help identify exactly what failed when an issue occurs.

## What makes a good assertion

Every assertion should be atomic, binary, outcome-focused, and verifiable.

| Criterion | Description | Example |
|----------|-------------|---------|
| **Atomic** | Tests one condition only; avoids "and" or "or" | "The response contains '15 days'" |
| **Binary** | Has a clear pass or fail outcome; no partial credit | Not "mostly correct" |
| **Outcome-focused** | Verifies what happened, not subjective quality | Not "responds helpfully" |
| **Verifiable** | Produces consistent results across reviewers | Specific values or behaviors |

### Two-person test

The two-person test identifies vague assertions that aren't actionable. If two domain experts can't independently reach the same pass or fail result, revise the assertion.

| Fails test | Passes test |
|------------|-------------|
| Responds helpfully | The response includes steps to complete enrollment. |
| Gives accurate information | The response states the PTO allowance is 15 days. |
| Handles the request appropriately | The response routes to HR for FMLA questions. |
| Shows relevant results | The response lists at least three health plan options. |

### Assertion formula

Use a consistent structure to improve clarity and evaluation reliability. Start each assertion with **"The response..."**.

- The response contains...
- The response cites...
- The response indicates...
- The response does not...
- The response routes to...

This structure ensures assertions focus on observable outcomes.

## Assertion types

Different scenarios require different types of assertions. Start with the assertion types most relevant to your scenarios, and expand coverage as needed.

### Factual accuracy assertions

Verify that the response includes accurate information.

**Pattern:** The response contains *specific value or text*.
**Scenario:** PTO policy question.  
**Prompt:** "How many vacation days do new employees get?"

**Assertions:**
- The response contains "15 days" or "15 days of PTO".
- The response contains "annual" or "per year".
- The response mentions employees with less than two years tenure.

Include rounding data:

- Policy effective date: January 1, 2024  
- PTO for less than two years: 15 days  
- PTO for two to five years: 20 days  
- PTO for more than five years: 25 days  

**Assertions:**
- The response contains "15 days" for the queried tenure bracket.  
- The response does not include "10 days".

### Source attribution assertions

Verify that the response cites its sources.

**Pattern:** The response cites or references *source name*.
**Scenario:** Benefits question.  
**Prompt:** "What health plans are available?"

**Assertions:**
- The response cites the Employee Benefits Guide.  
- The response includes where to find more details.  
- The response doesn't present information without attribution.  

### Tool invocation assertions

Verify that the correct tool is used.

**Pattern:** The agent invokes *tool name*.
**Scenario:** Equipment ordering.  
**Prompt:** "I need to order a 16-inch MacBook Pro"

**Assertions:**
- The agent invokes the OrderEquipment tool.  
- The tool call includes `itemType: "laptop"`.  
- The tool call includes a model value containing "MacBook Pro".  
- The tool call includes `size: "16"` or "16-inch".  

### Tool parameter assertions

Verify that tool calls contain complete and correct parameters.

**Pattern:** The tool call includes *parameter name and expected value*.

**Assertions:**
- The OrderEquipment call includes `employeeId: "EMP-12345"`.  
- The OrderEquipment call includes `itemType: "laptop"`.  
- The OrderEquipment call includes `model: "MacBook Pro 16-inch"`.  
- The OrderEquipment call includes specifications containing "32GB".  
- The OrderEquipment call includes `costCenter: "CC-ENG-001"`.  

### Tool response handling assertions

Verify that the response correctly communicates tool results.

**Pattern:** The response includes *tool result*.
**Assertions:**
- The response includes the order ID.  
- The response communicates the delivery timeframe.  
- The response confirms successful submission.  

**Error handling:**
- The response acknowledges the failure condition.  
- The response suggests next steps.  
- The response does not indicate success when the operation failed.  

### Escalation assertions

Verify that sensitive or complex scenarios are routed appropriately.

**Pattern:** The response routes to *specialist or team*.

**Assertions:**
- The response indicates the need for human assistance.  
- The response provides contact information or next steps.  
- The response doesn't attempt to resolve out-of-scope issues.  

### Refusal assertions

Verify that inappropriate or restricted requests are declined.

**Pattern:** The response declines to *prohibited action*.

**Assertions:**
- The response declines to provide restricted information.  
- The response explains the limitation.  
- The response doesn't reveal sensitive data.  

### Personalization assertions

Verify that the response reflects user context.

**Pattern:** The response reflects *contextual attribute*.

**Assertions:**
- The response includes location-specific information.  
- The response excludes irrelevant regional content.  

### Completeness assertions

Verify that the response provides all required information.

**Pattern:** The response includes *required element*.

**Assertions:**
- The response includes deadlines.  
- The response includes access points (such as portals).  
- The response includes required steps or prerequisites.  

### Negative assertions

Verify that the response avoids incorrect or outdated content.

**Pattern:** The response does not include *prohibited content*.
**Assertions:**
- The response does not include outdated policies.  
- The response does not introduce unsupported information.  

## Assertions for tool calls

Tool-based scenarios require validation across invocation, parameters, and response handling.

### Tool invocation assertions

- The agent invokes the required tool.  
- The agent invokes multiple tools when needed.  

### Parameter assertions

- The tool call includes all required parameters.  
- Parameter values match expected inputs.  

### Response assertions

- The response reflects tool outcomes.  
- The response includes identifiers such as order IDs.  
- The response communicates success or failure clearly.  

## Common assertion patterns to avoid

Avoid assertions that involve vague quality judgments or compound prompts, that are dependent on specific implementations, are missing grounding data, or are overly specific.

| Assertion type | Avoid | Use |
|---|---|---|
| Vague quality judgments | The response is helpful<br>The response is accurate | The response includes the enrollment deadline<br>The response states the PTO allowance is 15 days |
| Compound assertions | The response contains the correct value and cites the source | The response contains the correct value<br>The response cites the source |
| Implementation-dependent assertions | The agent uses a specific function | The response includes the expected outcome |
| Assertions without grounding | The response contains the correct value | The response contains "12 days remaining" |
| Over-specific formatting assertions | The response includes exactly three bullet points | The response lists at least three options |

## Assertion templates

The following assertion templates provide starting points for assertions for common scenarios.

### Knowledge retrieval

- The response contains *specific fact*.  
- The response cites *source*.  
- The response does not include *incorrect information*.  
- The response addresses the user's question.  

### Tool call

- The agent invokes the tool.  
- The tool call includes required parameters.  
- The response confirms completion.  
- The response includes identifiers.  

### Escalation

- The response indicates the need for human assistance.  
- The response provides next steps.  
- The response does not attempt to resolve restricted scenarios.  

### Refusal

- The response declines the request.  
- The response explains why.  
- The response does not expose restricted information.  

## Map assertions to graders

Different assertions require different grading mechanisms.

| Assertion type | Recommended grader | Notes |
|----------------|------------------|-------|
| Contains specific text | Keyword match | Deterministic |
| Semantic match | Text similarity | Handles paraphrasing |
| Tool invocation | Capability match | Evaluates execution |
| Parameter validation | Custom code | Parses inputs |
| Quality judgment | LLM-as-judge | Use selectively |
| Exact values | Exact match | For IDs and numbers |
| Absence checks | Keyword exclusion | Verifies omissions |

## Next step

> [!div class="nextstepaction"]
> [Derive quality signals](evaluation-quality-signals.md)