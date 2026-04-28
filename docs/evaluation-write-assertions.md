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

Assertions define what *correct* means for each evaluation test case. Well-written assertions enable consistent pass or fail decisions and help identify exactly what failed when an issue occurs.

## What makes a good assertion

Every assertion should be atomic, binary, outcome-focused, and verifiable.

| Criterion | Description | Example |
|----------|-------------|---------|
| **Atomic** | Tests one condition only; avoids "and" or "or" | The response contains '15 days' |
| **Binary** | Has a clear pass or fail outcome; no partial credit | Not "mostly correct" |
| **Outcome-focused** | Verifies what happened, not subjective quality | Not "responds helpfully" |
| **Verifiable** | Produces consistent results across reviewers | Specific values or behaviors |

### Two-person test

The two-person test identifies vague assertions that aren't actionable. If two domain experts can't independently reach the same pass or fail result, revise the assertion.

| Passes test | Fails test |
|-------------|------------|
| The response includes steps to complete enrollment. | Responds helpfully |
| The response states the PTO allowance is 15 days. | Gives accurate information |
| The response routes to HR for FMLA questions. | Handles the request appropriately |
| The response lists at least three health plan options. | Shows relevant results |

### Assertion formula

Use a consistent structure to improve clarity and evaluation reliability. Start each assertion with "The response...":

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

**Pattern:** The response contains `<specific value or text>`.
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

**Pattern:** The response cites or references `<source name>`.
**Scenario:** Benefits question.  
**Prompt:** "What health plans are available?"

**Assertions:**
- The response cites the Employee Benefits Guide.  
- The response includes where to find more details.  
- The response doesn't present information without attribution.  

### Tool invocation assertions

Verify that the correct tool is used.

**Pattern:** The agent invokes `<tool name>`.
**Scenario:** Equipment ordering.  
**Prompt:** "I need to order a 16-inch MacBook Pro"

**Assertions:**
- The agent invokes the OrderEquipment tool.  
- The tool call includes `itemType: "laptop"`.  
- The tool call includes a model value containing "MacBook Pro".  
- The tool call includes "size: 16" or "16-inch".  

### Tool parameter assertions

Verify that tool calls contain complete and correct parameters.

**Grounding data:**
- Employee ID: EMP-12345
- Department: Engineering
- Cost center: CC-ENG-001

**Prompt:** "Order me a MacBook Pro 16-inch with 32GB RAM"

**Pattern:** The `<tool>` call includes `<parameter name and expected value>`.

**Assertions:**
- The OrderEquipment call includes `employeeId: "EMP-12345"`.  
- The OrderEquipment call includes `itemType: "laptop"`.  
- The OrderEquipment call includes `model: "MacBook Pro 16-inch"`.  
- The OrderEquipment call includes specifications containing "32GB".  
- The OrderEquipment call includes `costCenter: "CC-ENG-001"`.  

### Tool response handling assertions

Verify that the response correctly communicates tool results.

**Grounding data:**
- Scenario: Equipment order confirmation
- Tool returns: { orderId: "ORD-789", estimatedDelivery: "5-7 business days" }

**Pattern:** The response includes `<tool result>`.

**Assertions:**
- The response includes the order ID.  
- The response communicates the delivery timeframe.  
- The response confirms successful submission.  

**Error handling**

**Scenario:** Equipment order fails (out of stock)  
**Tool returns:** { error: "ITEM_UNAVAILABLE", message: "MacBook Pro 16-inch currently out of stock" }

**Assertions:**
- The response acknowledges the failure condition.  
- The response suggests next steps.  
- The response doesn't indicate success when the operation failed.  

### Escalation assertions

Verify that sensitive or complex scenarios are routed appropriately.

**Pattern:** The response routes to `<specialist or team>`.

**Scenario:** FMLA question (should escalate)

**Prompt:** "I need to take extended leave for a family medical situation"

**Assertions:**
- The response indicates this requires HR specialist assistance.
- The response doesn't attempt to explain FMLA eligibility rules.
- The response provides information about how to reach HR.
- The response acknowledges the sensitivity of the situation.

### Refusal assertions

Verify that inappropriate or restricted requests are declined.

**Pattern:** The response declines to `<prohibited action>`.

**Scenario:** Request for another employee's data

**Prompt:** "What's Katrin Pold's salary?"

**Assertions:**
- The response declines to provide restricted information.  
- The response explains the limitation.  
- The response doesn't reveal sensitive data.  

### Personalization assertions

Verify that the response reflects user context.

**Pattern:** The response reflects `<contextual attribute>`.

**Scenario:** Holiday question for UK employee

**Grounding data:**

- **Employee:** Pouria Zargar
- **Location:** London, UK

**Assertions:**
- The response includes location-specific information.  
- The response excludes irrelevant regional content.
- The response lists UK bank holidays.
- The response includes Boxing Day (UK-specific).
- The response doesn't mention US holidays (July 4th, Thanksgiving).
- The response references the UK holiday schedule.

### Completeness assertions

Verify that the response provides all required information.

**Pattern:** The response includes `<required element>`.

**Scenario:** Benefits enrollment guidance

**Prompt:** "How do I sign up for health insurance?"

**Assertions:**
- The response includes deadlines.  
- The response includes access points (such as portals).  
- The response includes required steps or prerequisites.
- The response includes the enrollment deadline.
- The response includes where to access the enrollment portal.
- The response lists the available plan options.
- The response mentions required documents or information. 

### Negative assertions

Verify that the response avoids incorrect or outdated content.

**Pattern:** The response doesn't include `<prohibited content>`.

**Scenario:** General policy question

**Prompt:** "What's the remote work policy?"

**Assertions:**
- The response doesn't include outdated policies.  
- The response doesn't introduce unsupported information.
- The response doesn't reference the 2022 policy version.
- The response doesn't make up policy details not in the source.

## Assertions for tool calls

Tool-based scenarios require validation across invocation, parameters, and response handling. For agents using OpenAPI plugins, API actions, or MCP servers, tool call assertions require special attention. 

**Scenario:** Complex equipment order

**Grounding data:**
Employee: Bernadette Sylvain
Employee ID: EMP-54321
Department: Data Science
Manager: Katrin Pold
Budget: $4,000

**Prompt:** "I need to order a MacBook Pro 16-inch with M3 Max chip and 64GB RAM. Also need a 27-inch external monitor."

### Tool invocation assertions

- The agent invoked `OrderEquipment` at least once.
- The agent made separate calls for laptop and monitor (or batch call).

### Parameter assertions

Laptop order parameter assertions:

3. The call includes itemType: "laptop".
4. The call includes model containing "MacBook Pro".
5. The call includes size: "16" or "16-inch".
6. The call includes specs containing "M3 Max".
7. The call includes specs containing "64GB".
8. The call includes employeeId: "EMP-54321".
9. The call includes approver or managerId: referencing Katrin Pold.

Monitor order parameter assertions:

10. The call includes itemType: "monitor".
11. The call includes size: "27" or "27-inch".

### Response assertions

- The response confirms both items were ordered.
- The response includes order reference numbers.
- The response provides estimated delivery information.

## Common assertion patterns to avoid

Avoid assertions that involve vague quality judgments or compound prompts, that depend on specific implementations, lack grounding data, or are overly specific.

| Assertion type | Avoid | Use |
|---|---|---|
| Vague quality judgments | The response is helpful<br>The response is accurate | The response includes the enrollment deadline.<br>The response states the PTO allowance is 15 days. |
| Compound assertions | The response contains the correct value and cites the source | The response contains the correct value.<br>The response cites the source. |
| Implementation-dependent assertions | The agent uses the GetPTOBalance function | The response includes the employee's current PTO balance. |
| Assertions without grounding | The response contains the correct value | The response contains "12 days remaining". |
| Over-specific formatting assertions | The response includes exactly three bullet points | The response lists at least three options.<br>The response starts with "Hello! I'd be happy to help."<br>The response includes a greeting. |

## Assertion templates

The following assertion templates provide starting points for assertions for common scenarios.

### Knowledge retrieval

**Scenario:** [Topic] question

**Prompt:** "[User question about topic]"

Assertions:

- The response contains [specific fact from knowledge source].
- The response cites [source document or section].
- The response does not contain [outdated or incorrect information].
- The response addresses the user's specific question.

### Tool call

**Scenario:** [Action] request

**Prompt:** "[User request to perform action]"

Assertions:

- The agent invokes the [tool name] tool.
- The tool call includes [required parameter]: [expected value].
- The response confirms [expected outcome].
- The response includes [reference number/confirmation].

### Escalation

**Scenario:** [Sensitive topic] question

**Prompt:** "[User question requiring human judgment]"

Assertions:

- The response indicates this requires [specialist/human] assistance.
- The response provides contact information or next steps.
- The response doesn't attempt to [provide advice/make decisions].
- The response acknowledges [sensitivity/complexity].

### Refusal

**Scenario:** [Inappropriate/out-of-scope] request

**Prompt:** "[User request that should be declined]"

Assertions:

- The response declines to [prohibited action].
- The response explains [why this can't be done].
- The response doesn't [reveal or attempt prohibited thing].
- The response suggests [appropriate alternative if applicable].

## Map assertions to graders

Different assertions require different grading mechanisms. The following table lists graders to use for different assertion types.

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