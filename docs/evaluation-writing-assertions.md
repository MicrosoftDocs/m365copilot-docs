---
title: Write assertions for Copilot agent evaluation
description: Learn how to create specific, verifiable assertions that define success criteria for Copilot agent evaluation test cases.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Write assertions

Assertions are the heart of evaluation—they define what "correct" means for each test case. A well-written assertion is specific enough that anyone can determine pass or fail, yet focused enough to pinpoint exactly what went wrong when failures occur.

## What makes a good assertion

Every assertion should pass the **ABOV test**:

| Criterion | Description | Example |
| ----------- | ------------- | --------- |
| **A**tomic | Tests one thing; no "and" or "or" | "The response contains '15 days'" |
| **B**inary | Pass or fail; no partial credit | Not "mostly correct" |
| **O**utcome-focused | Verifies what happened, not how it felt | Not "responds helpfully" |
| **V**erifiable | Two people independently agree on result | Specific value or behavior |

### The "Two People Test"

> If two domain experts can't independently reach the same pass/fail verdict, the assertion needs to be rewritten.

This test catches vague assertions that seem reasonable but aren't actionable:

| Fails "Two People Test" | Passes "Two People Test" |
| ------------------------ | -------------------------- |
| "Responds helpfully" | "The response includes steps to complete enrollment" |
| "Gives accurate information" | "The response states the PTO allowance is 15 days" |
| "Handles the request appropriately" | "The response routes to HR for FMLA questions" |
| "Shows relevant results" | "The response lists at least 3 health plan options" |

### Assertion formula

Start every assertion with **"The response..."** to maintain consistency and clarity:

- "The response contains..."
- "The response cites..."
- "The response indicates..."
- "The response does not..."
- "The response routes to..."

This formula keeps assertions focused on observable outcomes rather than subjective quality.

---

## Assertion types

Different scenarios require different types of assertions. Here's a comprehensive taxonomy with examples for the Employee Onboarding Agent.

You don't need all 10 types for every agent. Start with the few types that match your most important scenarios, then expand as coverage grows.

### 1. Factual accuracy assertions

Verify that the response contains correct information from knowledge sources.

**Pattern**: `The response contains [specific value/text]`

```markdown
Scenario: PTO policy question
Prompt: "How many vacation days do new employees get?"

Assertions:
- The response contains "15 days" or "15 days of PTO"
- The response contains "annual" or "per year"
- The response mentions employees with less than 2 years tenure
```

**With grounding data**:

```markdown
Grounding data:
  Policy effective date: January 1, 2024
  PTO for <2 years: 15 days
  PTO for 2-5 years: 20 days
  PTO for 5+ years: 25 days

Assertions:
- The response contains "15 days" for the queried tenure bracket
- The response does not state "10 days" (outdated 2023 policy)
```

### 2. Source attribution assertions

Verify that the response cites its sources, enabling users to verify information.

**Pattern**: `The response cites/references [source name or type]`

```markdown
Scenario: Benefits question
Prompt: "What health plans are available?"

Assertions:
- The response cites the Employee Benefits Guide
- The response includes a reference to where the user can find more details
- The response does not present information without attribution
```

### 3. Tool invocation assertions

Verify that the agent called the correct tool when action is required. This is critical for Declarative Agents with API plugins or MCP servers.

**Pattern**: `The agent invoked [tool name]` or `The [tool] call includes [parameter]`

```markdown
Scenario: Equipment ordering
Prompt: "I need to order a 16-inch MacBook Pro"

Assertions:
- The agent invoked the OrderEquipment tool
- The tool call includes parameter itemType: "laptop"
- The tool call includes parameter model containing "MacBook Pro"
- The tool call includes parameter size: "16" or "16-inch"
```

### 4. Tool parameter assertions

Verify that tool calls include correct and complete parameters. Parameter accuracy is often where agents fail silently.

**Pattern**: `The [tool] call includes [parameter name]: [expected value]`

```markdown
Scenario: Equipment order with specifications
Grounding data:
  Employee ID: EMP-12345
  Department: Engineering
  Cost center: CC-ENG-001

Prompt: "Order me a MacBook Pro 16-inch with 32GB RAM"

Assertions:
- The OrderEquipment call includes employeeId: "EMP-12345"
- The OrderEquipment call includes itemType: "laptop"
- The OrderEquipment call includes model: "MacBook Pro 16-inch"
- The OrderEquipment call includes specs containing "32GB"
- The OrderEquipment call includes costCenter: "CC-ENG-001"
```

### 5. Tool response handling assertions

Verify that the agent correctly interprets and communicates tool results.

**Pattern**: `The response communicates [tool result aspect]`

```markdown
Scenario: Equipment order confirmation
Tool returns: { orderId: "ORD-789", estimatedDelivery: "5-7 business days" }

Assertions:
- The response includes the order ID "ORD-789"
- The response communicates the delivery timeframe
- The response confirms the order was successfully submitted
```

**Error handling**:

```markdown
Scenario: Equipment order fails (out of stock)
Tool returns: { error: "ITEM_UNAVAILABLE", message: "MacBook Pro 16-inch currently out of stock" }

Assertions:
- The response acknowledges the item is unavailable
- The response suggests alternatives or next steps
- The response does not claim the order was successful
```

### 6. Escalation assertions

Verify that the agent routes complex or sensitive cases to human support.

**Pattern**: `The response indicates handoff to [destination]` or `The response routes to [specialist]`

```markdown
Scenario: FMLA question (should escalate)
Prompt: "I need to take extended leave for a family medical situation"

Assertions:
- The response indicates this requires HR specialist assistance
- The response does not attempt to explain FMLA eligibility rules
- The response provides information on how to reach HR
- The response acknowledges the sensitivity of the situation
```

```markdown
Scenario: Salary dispute (out of scope)
Prompt: "I think my salary is wrong compared to my coworkers"

Assertions:
- The response routes to HR or compensation team
- The response does not discuss salary comparisons
- The response does not access or reveal compensation data
```

### 7. Refusal assertions

Verify that the agent appropriately declines inappropriate or out-of-scope requests.

**Pattern**: `The response declines to [prohibited action]` or `The response does not [prohibited behavior]`

```markdown
Scenario: Request for another employee's data
Prompt: "What's John Smith's salary?"

Assertions:
- The response declines to provide another employee's salary
- The response explains why this information cannot be shared
- The response does not reveal any salary figures
- The response does not confirm or deny knowledge of John Smith
```

```markdown
Scenario: Out-of-scope request
Prompt: "Can you help me write my performance review?"

Assertions:
- The response indicates this is outside the agent's scope
- The response suggests appropriate resources (manager, HR portal)
- The response does not attempt to write performance content
```

### 8. Personalization assertions

Verify that the response uses employee-specific context when relevant.

**Pattern**: `The response reflects [contextual attribute]`

```markdown
Scenario: Holiday question for UK employee
Grounding data:
  Employee: Emma Thompson
  Location: London, UK

Prompt: "What holidays do I get off this year?"

Assertions:
- The response lists UK bank holidays
- The response includes Boxing Day (UK-specific)
- The response does not mention US holidays (July 4th, Thanksgiving)
- The response references the UK holiday schedule
```

### 9. Completeness assertions

Verify that the response provides all necessary information for the user to take action.

**Pattern**: `The response includes [required element]`

```markdown
Scenario: Benefits enrollment guidance
Prompt: "How do I sign up for health insurance?"

Assertions:
- The response includes the enrollment deadline
- The response includes where to access the enrollment portal
- The response lists the available plan options
- The response mentions required documents or information
```

### 10. Negative assertions

Verify that the response does NOT include problematic content.

**Pattern**: `The response does not [prohibited content]`

```markdown
Scenario: General policy question
Prompt: "What's the remote work policy?"

Assertions:
- The response does not include outdated COVID-era policies
- The response does not reference the 2022 policy version
- The response does not make up policy details not in the source
```

---

## Assertions for tool calls: A deeper look

For agents using OpenAPI plugins, API actions, or MCP servers, tool call assertions require special attention. Here's a comprehensive approach:

### Anatomy of a tool call assertion set

```markdown
Scenario: Complex equipment order

Grounding data:
  Employee: David Kim
  Employee ID: EMP-54321
  Department: Data Science
  Manager: Sarah Chen
  Budget: $4,000

Prompt: "I need to order a MacBook Pro 16-inch with M3 Max chip and 64GB RAM.
         Also need a 27-inch external monitor."

Tool invocation assertions:
  1. The agent invoked OrderEquipment at least once
  2. The agent made separate calls for laptop and monitor (or batch call)

Parameter assertions (Laptop order):
  3. The call includes itemType: "laptop"
  4. The call includes model containing "MacBook Pro"
  5. The call includes size: "16" or "16-inch"
  6. The call includes specs containing "M3 Max"
  7. The call includes specs containing "64GB"
  8. The call includes employeeId: "EMP-54321"
  9. The call includes approver or managerId: referencing Sarah Chen

Parameter assertions (Monitor order):
  10. The call includes itemType: "monitor"
  11. The call includes size: "27" or "27-inch"

Response assertions:
  12. The response confirms both items were ordered
  13. The response includes order reference number(s)
  14. The response provides estimated delivery information
```

### Testing tool error handling

```markdown
Scenario: Order exceeds budget

Tool returns:
  {
    "error": "BUDGET_EXCEEDED",
    "message": "Order total $5,200 exceeds budget of $4,000",
    "budgetRemaining": 4000,
    "orderTotal": 5200
  }

Assertions:
  - The response acknowledges the budget limitation
  - The response states the budget amount ($4,000)
  - The response suggests alternatives (different config, manager approval)
  - The response does not claim the order succeeded
  - The response does not leave the user confused about order status
```

### Testing partial tool success

```markdown
Scenario: One item orders successfully, one fails

Tool returns:
  {
    "results": [
      { "item": "MacBook Pro", "status": "success", "orderId": "ORD-111" },
      { "item": "Monitor", "status": "failed", "reason": "Out of stock" }
    ]
  }

Assertions:
  - The response confirms the laptop order succeeded
  - The response includes order ID "ORD-111" for the laptop
  - The response acknowledges the monitor is unavailable
  - The response suggests next steps for the monitor
  - The response clearly distinguishes successful vs failed items
```

---

## Common assertion anti-patterns

### Anti-pattern 1: Vague quality judgments

```markdown
# Avoid
- "The response is helpful"
- "The response is accurate"
- "The response handles the request well"

# Better
- "The response includes the enrollment deadline (March 31)"
- "The response states the PTO allowance is 15 days"
- "The response provides a link to the benefits portal"
```

### Anti-pattern 2: Compound assertions

```markdown
# Avoid
- "The response contains the correct PTO amount AND cites the source"
- "The response either routes to HR or provides the policy details"

# Better (split into atomic assertions)
- "The response contains '15 days'"
- "The response cites the Employee Handbook"
```

### Anti-pattern 3: Implementation-dependent assertions

```markdown
# Avoid
- "The response uses the GetPTOBalance function"
- "The API returns status 200"

# Better (outcome-focused)
- "The response includes the employee's current PTO balance"
- "The order was successfully submitted"
```

### Anti-pattern 4: Assertions without grounding

```markdown
# Avoid (when grounding data is available)
- "The response contains the correct PTO balance"
- "The response lists the right holidays"

# Better (grounded in test data)
- "The response contains '12 days remaining'"
- "The response lists UK bank holidays including Boxing Day"
```

### Anti-pattern 5: Over-specific formatting assertions

```markdown
# Avoid (too brittle)
- "The response starts with 'Hello! I'd be happy to help.'"
- "The response contains exactly 3 bullet points"

# Better (focus on content, not format)
- "The response lists at least 3 health plan options"
- "The response includes a greeting"
```

---

## Assertion templates

Use these templates as starting points for common scenarios:

### Knowledge retrieval template

```markdown
Scenario: [Topic] question
Prompt: "[User question about topic]"

Assertions:
- The response contains [specific fact from knowledge source]
- The response cites [source document or section]
- The response does not contain [outdated or incorrect information]
- The response addresses the user's specific question
```

### Tool call template

```markdown
Scenario: [Action] request
Prompt: "[User request to perform action]"

Assertions:
- The agent invoked the [ToolName] tool
- The tool call includes [required parameter]: [expected value]
- The response confirms [expected outcome]
- The response includes [reference number/confirmation]
```

### Escalation template

```markdown
Scenario: [Sensitive topic] question
Prompt: "[User question requiring human judgment]"

Assertions:
- The response indicates this requires [specialist/human] assistance
- The response provides contact information or next steps
- The response does not attempt to [provide advice/make decisions]
- The response acknowledges [sensitivity/complexity]
```

### Refusal template

```markdown
Scenario: [Inappropriate/out-of-scope] request
Prompt: "[User request that should be declined]"

Assertions:
- The response declines to [prohibited action]
- The response explains [why this cannot be done]
- The response does not [reveal/attempt prohibited thing]
- The response suggests [appropriate alternative if applicable]
```

---

## Map assertions to graders

Different assertions require different grading mechanisms:

| Assertion type | Recommended grader | Notes |
| ---------------- | ------------------- | ------- |
| Contains specific text | Keyword match | Fast, deterministic |
| Semantic equivalence | Compare meaning / Text similarity | Handles paraphrasing |
| Tool was invoked | Tool use / Capability match | Checks execution trace |
| Tool parameters correct | Custom code grader | Parse and validate parameters |
| Quality judgment | LLM-as-judge (General quality) | For nuanced criteria |
| Exact value match | Exact match | For IDs, codes, numbers |
| Does not contain | Keyword match (inverted) | Check absence of terms |

---

## Next steps

Well-designed assertions tell you *what* passed or failed. Quality signals help you understand *why* and track patterns over time. Continue to [Derive quality signals](evaluation-quality-signals.md) to learn how to categorize and analyze your evaluation results.
