---
title: Design evaluation prompts for Copilot agent evaluation
description: Learn how to design effective evaluation prompts that produce actionable and verifiable results when testing Copilot agents.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
ms.localizationpriority: medium
---

# Design evaluation prompts

The quality of your evaluation depends on the quality of your prompts. Well-designed prompts test exactly what you intend—no more and no less.

This article explains how to design evaluation prompts that produce clear, actionable results.

## Anatomy of an effective evaluation prompt

Effective evaluation prompts share four characteristics:

- Single intent
- Realistic phrasing
- Grounded in data
- Self-contained

### Single intent

Each prompt should test one user goal or question. Multi-intent prompts make it difficult to identify the cause of a failure.

| Multi-intent (avoid) | Single intent (preferred) |
|----------------------|--------------------------|
| What's my PTO balance and can you order me a laptop? | What's my PTO balance? |
| Tell me about health benefits and also the 401k match. | What health insurance plans are available? |

To test multiple capabilities together, use multi-turn conversation evaluations instead of combining intents into a single prompt.

### Realistic phrasing

Prompts should reflect how users actually communicate, including informal language, incomplete sentences, and varying levels of detail.

| Overly formal | Realistic |
|---------------|-----------|
| Please provide information regarding the annual paid time off allocation for employees in their first year of employment. | How many vacation days do new hires get? |
| I would like to initiate a request for procurement of computing equipment. | I need to order a laptop. |

You can derive realistic prompts from:

- Production query logs  
- User research sessions  
- Support tickets  
- Everyday workplace conversations  

### Grounded in data

Prompts should be grounded in data. `

When grounding data is available, use specific entities, values, and identifiers. This approach makes evaluations measurable and verifiable. Grounded prompts allow precise assertions such as "The response contains '15 days'," instead of vague checks like "The response contains the correct number."

**Without grounding data**  

Prompt: "What's the PTO policy for engineers?"

**With grounding data**  

Grounding data:

- Employee: Marcus Johnson  
- Department: Engineering  
- Tenure: 8 months  
- Manager: Lisa Park  
- Location: Austin office  

Prompt: "I'm in the engineering team — how many vacation days do I get?"

### Self-contained (single-turn)

For single-turn evaluations, each prompt must include all required context. The agent can't rely on prior conversation turns.

| Depends on context (avoid) | Self-contained |
|----------------------------|----------------|
| What about the other health plan? | What does the PPO health plan cover? |
| And how much does that cost? | What's the employee cost for the PPO health plan? |
| Can you order that instead? | Can you order a 16-inch MacBook Pro? |

For scenarios that span multiple turns, use [multi-turn conversations](evaluation-multi-turn.md).

## Prompt variations

Users don't all ask the same question in the same way. To test generalization, create three variations of each prompt. 

### Canonical prompts

Canonical prompts are explicit, complete, and unambiguous. They serve as the baseline.

- Include all required parameters. 
- Use precise terminology.  
- Avoid ambiguity.
- Represent an ideal query.

**Example:**

"How many paid time off days do employees with less than two years of tenure receive annually according to the current PTO policy?"

### Natural language variant

The natural language variant reflects everyday conversational phrasing. Natural language variants:

- Use casual, conversational language.  
- Might include synonyms or informal terms.  
- Avoid technical identifiers.  
- Remain complete enough to answer.  

**Example:**

"Hey, how much vacation do I get as a new hire?"

The following table compares canonical prompts and natural language variants.

| Technique | Canonical | Natural variant |
|----------|----------|----------------|
| Synonyms | "paid time off" | "vacation days," "time off," "PTO" |
| Informal phrasing | "How many days do I receive" | "how much do I get" |
| Implicit context | "employees with <2 years tenure" | "as a new hire" |
| Casual casing | Proper capitalization | lowercase, minimal punctuation |

### Robustness probe

The robustness probe evaluates how well the agent handles imperfect input. Robustness probes:

- Include realistic typos.  
- Contain grammatical errors.  
- Use shorthand or abbreviations.  
- Test intent recognition under noise.  

**Example:**

<!-- cspell:ignore whats vacaton -->
`whats my vacaton days entitlement`

The following table shows examples of patterns to test.

<!-- cspell:ignore whats vacaton -->
| Pattern | Example |
|--------|--------|
| Typos | "vacaton" instead of "vacation" |
| Missing punctuation | "whats" instead of "what's" |
| Missing words | "how many days get" |
| Abbreviations | "PTO bal?" |
| Run-on queries | "need laptop macbook pro 16 inch" |

## Complete prompt variation examples

The following examples demonstrate all three prompt types for a single scenario.

### Scenario: Equipment ordering

This scenario includes the following grounding data:

- Employee: Sarah Chen  
- Department: Product Design  
- Start date: 2024-01-15  
- Equipment budget: $3,500  
- Approved items: MacBook Pro (14-inch or 16-inch), External monitor, Keyboard, Mouse  

#### Prompt variations

**Canonical**

"I'm a new employee in the Product Design department starting on January 15, 2024. I need to order a 16-inch MacBook Pro laptop. Please submit this equipment request through the IT ordering system."

**Natural language**

"Hi, I just joined the product design team and need to get my laptop set up. Can I get a MacBook Pro? The 16 inch one preferably."

**Robustness probe**

"need to order macbook pro 16in for new job in product design"

**Assertions (apply to all variations):**

- The response confirms the equipment order was initiated.  
- The agent invoked the **OrderEquipment** tool.
- The tool call includes "MacBook Pro 16-inch" (or equivalent).
- The response includes an order confirmation or reference number.

### Scenario: Policy question with personalization

This scenario includes the following grounding data:

- Employee: James Wright  
- Location: London, UK office                  
- Tenure: 6 months  
- Employment type: Full-time  

#### Prompt variations

**Canonical**

"As a full-time employee based in the London, UK office with 6 months of tenure, what public holidays am I entitled to this year?"

**Natural language**

"I work in the London office — what bank holidays do I get off?"

**Robustness probe**

"UK office holidays off this yr?"

**Assertions (apply to all variations):**

- The response lists UK bank holidays (not US holidays). 
- The response includes at least: New Year's Day, Easter, Christmas. 
- The response references UK policy or schedule.
- The response doesn't mention US holidays such as July 4 or Thanksgiving. 

## Prompt anti-patterns

Avoid these common mistakes.

### Multi-intent prompts

Avoid multi-intent prompts. When your prompt covers multiple intents, you can't determine which intent caused a failure.

- **Avoid:** What's my PTO balance, and can you tell me about health insurance options, and I might need a laptop too?
- **Use instead:** Split into separate prompts or use multithreaded evaluation.

### Schema-aware prompts

Schema-aware prompts don't work well because users don't know internal APIs or tool names.

- **Avoid:** "Call the GetPTOBalance API for employee ID 12345"
- **Use instead:** "What's my current vacation balance?"

### Vague prompts

If your prompt is vague, you can't define measurable assertions.

- **Avoid:** "Help me with HR stuff"
- **Use instead:** "How do I enroll in the dental insurance plan?"

### Leading prompts

Prompts that hint at the expected answer don't test the agent's real reasoning effectiveness.

- **Avoid:** "The PTO policy says 15 days, right?"
- **Use instead:** "How many PTO days do new employees receive?"

### Not self-contained (single-turn)

Avoid prompts that depend on prior context.

- **Avoid:** "What about the other option?"
- **Use instead:** "What's the difference between the HMO and PPO health plans?"

## Generate prompts from user scenarios

Start with real user intent instead of feature lists.

- Collect representative user questions.  
- Group by scenario (for example, policy lookup, actions, escalation).  
- Write a canonical prompt for each scenario.  
- Add natural language and robustness variants.  
- Ground prompts with concrete data.  

This approach ensures evaluations reflect real-world usage.

## AI-assisted prompt expansion (optional)

After you establish a strong baseline, use AI to expand coverage.

- Use AI to suggest more variations.  
- Review each suggestion for realism and relevance.  
- Reject prompts that are unnatural, schema-aware, or out of scope.  
- Add prompts only where they improve coverage.  

## Prompt coverage checklist

Use this checklist to ensure that your prompt coverage is complete.

### Capability coverage

- Every tool or action has at least one test case  
- Every knowledge domain is represented  
- Escalation behavior is tested  
- Out-of-scope scenarios are tested  

### Variation coverage

For each scenario, include:

- Canonical prompt  
- Natural language variant  
- Robustness probe  

### Microsoft Edge cases

- Very short prompts  
- Very long prompts  
- Ambiguous requests  
- Missing information  
- Invalid or unsupported requests  

### Personalization (if applicable)

- Different user locations  
- Different tenure levels  
- Different roles or departments

## Next step

> [!div class="nextstepaction"]
> [Write assertions](evaluation-write-assertions.md)