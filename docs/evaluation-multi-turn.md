---
title: Evaluate multi-turn conversations for Copilot agents
description: Learn how to design and run evaluations that test multi-turn conversation flows, context retention, and multi-step tasks.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Evaluate multi-turn conversations

Real users don't interact with agents in isolated, single-question exchanges. They have conversations—asking follow-up questions, providing information incrementally, and completing tasks that span multiple turns. Multi-turn evaluation tests your agent's ability to maintain context, complete multi-step tasks, and handle the natural flow of conversation.

## When to use multi-turn evaluation

Use multi-turn evaluation when testing scenarios that:

| Scenario | Why multi-turn is needed |
| ---------- | ------------------------- |
| **Slot filling** | Agent needs to gather multiple pieces of information |
| **Clarification flows** | User query is ambiguous, agent asks for details |
| **Multi-step tasks** | Action requires several exchanges to complete |
| **Context-dependent follow-ups** | Later questions reference earlier answers |
| **Progressive disclosure** | Information is provided incrementally |

### Single-turn vs. multi-turn comparison

| Aspect | Single-turn | Multi-turn |
| -------- | ------------- | ------------ |
| **Tests** | Individual Q&A pairs | Complete conversations |
| **Context** | Each prompt is independent | Turns build on each other |
| **Complexity** | Simpler to design and grade | More realistic but complex |
| **Failure diagnosis** | Easy to pinpoint | May require turn-by-turn analysis |
| **Use when** | Testing specific responses | Testing conversation flow |

**Guideline**: Start with single-turn evals for coverage, add multi-turn evals for realistic interaction testing.

---

## Multi-turn quality metrics

Multi-turn conversations require metrics beyond single-turn accuracy. Here are the key dimensions:

1. **Conversation Completeness** - Did the conversation achieve the user's goal?
2. **Knowledge Retention** - Did the agent remember prior-turn information?
3. **Role Adherence** - Did the agent stay within its intended role?
4. **Conversation Relevancy** - Did responses stay on-topic for the active task?
5. **Context Consistency** - Did facts and constraints remain consistent across turns?

### Conversation Completeness

**What it measures**: Did the agent fulfill the user's goal by the end of the conversation?

This is the most important multi-turn metric—task completion matters most.

```markdown
Scenario: Equipment ordering (complete)
Turn 1: User: "I need to order a laptop"
        Agent: "I can help with that. What type of laptop do you need?"
Turn 2: User: "MacBook Pro"
        Agent: "What screen size—14 inch or 16 inch?"
Turn 3: User: "16 inch"
        Agent: "I've submitted your order for a 16-inch MacBook Pro.
                Order ID: ORD-456. Expected delivery: 5-7 business days."

✓ PASS: User goal (order laptop) was achieved
```

```markdown
Scenario: Equipment ordering (incomplete)
Turn 1: User: "I need to order a laptop"
        Agent: "I can help with that. What type of laptop do you need?"
Turn 2: User: "MacBook Pro"
        Agent: "MacBook Pro is a great choice! Is there anything else?"

✗ FAIL: Order was never submitted; user goal not achieved
```

### Knowledge Retention

**What it measures**: Does the agent remember information the user already provided?

Nothing frustrates users more than repeating themselves.

```markdown
Scenario: Retention failure
Turn 1: User: "My employee ID is EMP-12345"
        Agent: "Thanks! How can I help you today?"
Turn 2: User: "I want to check my PTO balance"
        Agent: "I'd be happy to help. What's your employee ID?"

✗ FAIL: Agent forgot the employee ID from Turn 1
```

```markdown
Scenario: Retention success
Turn 1: User: "My employee ID is EMP-12345"
        Agent: "Thanks! How can I help you today?"
Turn 2: User: "I want to check my PTO balance"
        Agent: "Your current PTO balance is 12 days remaining."

✓ PASS: Agent used the employee ID without re-asking
```

### Role Adherence

**What it measures**: Does the agent maintain its defined persona and boundaries throughout the conversation?

```markdown
Scenario: Role drift
Turn 1: User: "What's the PTO policy?"
        Agent: [Correctly explains PTO policy]
Turn 2: User: "Can you write a poem about vacation?"
        Agent: "Sure! Here's a poem about sunny beaches..."

✗ FAIL: Agent drifted from HR assistant role
```

```markdown
Scenario: Role maintained
Turn 1: User: "What's the PTO policy?"
        Agent: [Correctly explains PTO policy]
Turn 2: User: "Can you write a poem about vacation?"
        Agent: "I'm here to help with HR and onboarding questions.
                Is there anything else about PTO I can help with?"

✓ PASS: Agent stayed in role and redirected
```

### Conversation Relevancy

**What it measures**: Is each response relevant to the current turn given the conversation history?

```markdown
Scenario: Irrelevant response
Turn 1: User: "What health plans are available?"
        Agent: [Lists HMO and PPO options]
Turn 2: User: "What's the difference in cost?"
        Agent: "The PPO offers more flexibility in choosing doctors."

✗ FAIL: User asked about cost, agent answered about flexibility
```

### Context Consistency

**What it measures**: Does the agent maintain consistent information across turns?

```markdown
Scenario: Inconsistent information
Turn 1: User: "How many vacation days do I get?"
        Agent: "As a new employee, you receive 15 days of PTO annually."
Turn 2: User: "And how many sick days?"
        Agent: "You have 10 sick days, plus your 10 vacation days."

✗ FAIL: Agent contradicted itself (15 days vs 10 days for vacation)
```

---

## Design multi-turn test cases

### Structure of a multi-turn test case

```markdown
Test Case: CONV-001 - Equipment Order Flow
Description: Test the complete flow of ordering IT equipment

Grounding Data:
  Employee: Sarah Chen
  Employee ID: EMP-54321
  Department: Product Design
  Equipment Budget: $3,500

Conversation:
  Turn 1:
    User: "Hi, I just joined and need to get my laptop set up"
    Expected Agent Behavior: Acknowledge and ask about laptop preference

  Turn 2:
    User: "I'd like a MacBook Pro"
    Expected Agent Behavior: Ask about specifications (size, memory)

  Turn 3:
    User: "The 16 inch one with 32GB RAM"
    Expected Agent Behavior: Confirm details and submit order

  Turn 4:
    User: "Actually, can you change that to 64GB?"
    Expected Agent Behavior: Acknowledge change and update order

Conversation-Level Assertions:
  - The conversation completes with a confirmed equipment order
  - The final order reflects the corrected specification (64GB)
  - The agent never asks for employee ID (should infer from context)
  - Total turns to completion is ≤6

Turn-Level Assertions:
  Turn 3:
    - Agent invokes OrderEquipment tool
    - Tool call includes model: "MacBook Pro 16-inch"
    - Tool call includes specs containing "32GB"
  Turn 4:
    - Agent invokes UpdateOrder or modifies previous order
    - Final confirmation shows "64GB"
```

### Conversation scenario templates

#### Slot-filling conversation

```markdown
Scenario: Benefits Enrollment (slot filling)
Goal: Collect required information to complete benefits enrollment

Required slots:
  - Plan selection (HMO/PPO)
  - Coverage level (individual/family)
  - Dependent information (if family)
  - Effective date preference

Conversation:
  Turn 1:
    User: "I want to sign up for health insurance"
    Agent: Asks about plan preference (HMO vs PPO)

  Turn 2:
    User: "What's the difference?"
    Agent: Explains differences, re-asks preference

  Turn 3:
    User: "I'll go with the PPO"
    Agent: Asks about coverage level

  Turn 4:
    User: "Family coverage - I have a spouse and two kids"
    Agent: Confirms dependents, asks for their information

  Turn 5:
    User: [Provides dependent details]
    Agent: Confirms all details, completes enrollment

Assertions:
  - All required slots were collected
  - Agent explained options when user asked
  - Enrollment was successfully submitted
  - Confirmation includes all collected information
```

#### Clarification conversation

```markdown
Scenario: Ambiguous Request (clarification)
Goal: Handle ambiguous request by asking clarifying questions

Conversation:
  Turn 1:
    User: "I need to take some time off"
    Agent: Asks what type of time off (PTO, sick, personal)

  Turn 2:
    User: "It's for a medical procedure"
    Agent: Clarifies if it's for self or family member

  Turn 3:
    User: "For myself, it's a minor surgery"
    Agent: Provides information about sick leave policy,
           asks about expected duration

  Turn 4:
    User: "About a week"
    Agent: Confirms sick leave process, offers to initiate request

Assertions:
  - Agent didn't assume time off type from initial vague request
  - Agent gathered enough information to provide relevant policy
  - Final response matched the user's actual situation (medical leave)
```

#### Error recovery conversation

```markdown
Scenario: Order Failure and Recovery
Goal: Handle tool failure gracefully and help user recover

Conversation:
  Turn 1:
    User: "Order me a MacBook Pro 16-inch"
    Agent: Attempts to submit order
    [Tool returns: ERROR - Item out of stock]
    Agent: Informs user of stock issue, suggests alternatives

  Turn 2:
    User: "When will it be back in stock?"
    Agent: Checks inventory or provides restock information

  Turn 3:
    User: "Can I get the 14-inch instead?"
    Agent: Confirms 14-inch is available, submits order
    Agent: Provides order confirmation

Assertions:
  - Agent communicated the error clearly (didn't hide it)
  - Agent offered alternatives or next steps
  - Recovery path led to successful order
  - User wasn't left in limbo
```

---

## Multi-turn assertions

Multi-turn evaluations require both conversation-level and turn-level assertions.

### Conversation-level assertions

These evaluate the overall outcome:

```markdown
Conversation-level assertions:
  - The conversation achieves the user's stated goal
  - Total turns to completion is ≤ [threshold]
  - Agent never contradicts information from earlier turns
  - Agent maintains role throughout
  - No required information is requested twice
```

### Turn-level assertions

These evaluate specific turns within the conversation:

```markdown
Turn-level assertions:

Turn 2:
  - Response acknowledges information from Turn 1
  - Response asks appropriate follow-up question

Turn 4:
  - Agent invokes [expected tool]
  - Tool call includes [expected parameters]
  - Response confirms action was taken
```

### Conditional assertions

Some assertions depend on what happens earlier:

```markdown
Conditional assertions:

IF the user corrects information in any turn:
  THEN the agent must acknowledge the correction
  AND subsequent references must use corrected value

IF a tool call fails:
  THEN the agent must communicate the failure
  AND offer an alternative or next step

IF the user asks an out-of-scope question mid-conversation:
  THEN the agent must redirect appropriately
  AND return to the original task
```

---

## Complete multi-turn example

Here's a fully-specified multi-turn test case for the Employee Onboarding Agent:

```markdown
═══════════════════════════════════════════════════════════════════
TEST CASE: CONV-003 - New Hire Equipment and Benefits Setup
═══════════════════════════════════════════════════════════════════

Description:
  New employee needs to order equipment AND has a benefits question.
  Tests multi-topic handling and context switching.

Grounding Data:
  Employee: Marcus Johnson
  Employee ID: EMP-99887
  Start Date: 2024-02-01
  Department: Engineering
  Location: Seattle
  Equipment Budget: $4,000

═══════════════════════════════════════════════════════════════════
CONVERSATION SCRIPT
═══════════════════════════════════════════════════════════════════

TURN 1
───────────────────────────────────────────────────────────────────
User: "Hey, I'm starting in the engineering team next week and
       need to get my workstation set up"

Expected Agent Behavior:
  - Welcome the new employee
  - Ask about equipment needs or preferences

Turn Assertions:
  - Response acknowledges new employee status
  - Response asks about equipment preferences or needs

───────────────────────────────────────────────────────────────────
TURN 2
───────────────────────────────────────────────────────────────────
User: "I'll need a MacBook Pro - the 16 inch with M3 Max and 64GB RAM.
       Also a 27-inch monitor."

Expected Agent Behavior:
  - Acknowledge the specific request
  - Initiate equipment order(s)
  - Provide confirmation or status

Turn Assertions:
  - Agent invokes OrderEquipment tool (or equivalent)
  - Tool call for laptop includes:
    - model: contains "MacBook Pro"
    - size: "16" or "16-inch"
    - specs: contains "M3 Max"
    - specs: contains "64GB"
  - Tool call for monitor includes:
    - itemType: "monitor"
    - size: "27" or "27-inch"
  - Response confirms order submission

───────────────────────────────────────────────────────────────────
TURN 3
───────────────────────────────────────────────────────────────────
User: "Great, thanks! Also quick question - when's the deadline
       to sign up for health insurance?"

Expected Agent Behavior:
  - Answer the benefits question accurately
  - Don't lose context of the equipment order

Turn Assertions:
  - Response includes benefits enrollment deadline
  - Response contains accurate deadline date (e.g., "within 30 days of start date" or specific date)
  - Response doesn't ask "what equipment did you want?" (context retained)

───────────────────────────────────────────────────────────────────
TURN 4
───────────────────────────────────────────────────────────────────
User: "Got it. Can you confirm what I ordered for equipment?"

Expected Agent Behavior:
  - Recall and summarize the equipment order from Turn 2
  - Include all specifications mentioned

Turn Assertions:
  - Response references MacBook Pro 16-inch
  - Response mentions M3 Max and 64GB RAM
  - Response mentions 27-inch monitor
  - Response includes order ID(s) if available
  - Agent does NOT re-ask what was ordered

═══════════════════════════════════════════════════════════════════
CONVERSATION-LEVEL ASSERTIONS
═══════════════════════════════════════════════════════════════════

Task Completion:
  ✓ Equipment order was successfully submitted
  ✓ Benefits question was accurately answered
  ✓ User's final confirmation request was satisfied

Knowledge Retention:
  ✓ Agent remembered equipment details across turns
  ✓ Agent didn't re-ask for information already provided

Context Handling:
  ✓ Agent handled topic switch (equipment → benefits → equipment)
  ✓ Agent maintained conversation coherence

Efficiency:
  ✓ Total turns ≤ 6
  ✓ No unnecessary clarification questions

═══════════════════════════════════════════════════════════════════
QUALITY SIGNALS TESTED
═══════════════════════════════════════════════════════════════════
  [Tool Accuracy] - Equipment order parameters
  [Policy Accuracy] - Benefits enrollment deadline
  [Knowledge Retention] - Remembering equipment specs
  [Context Handling] - Topic switching
  [Action Enablement] - Order confirmation
```

---

## Common multi-turn pitfalls

### Pitfall 1: Testing turns in isolation

**Problem**: Evaluating each turn independently misses context-dependent failures.

```markdown
# Wrong approach
Turn 3 evaluated independently: "Does response mention deadline?" ✓
(Misses: Agent forgot the equipment context from Turn 2)

# Right approach
Turn 3 evaluated with context:
  - "Does response mention deadline?" ✓
  - "Does agent retain equipment order context?" ✓
```

### Pitfall 2: Only testing happy paths

**Problem**: Real conversations include corrections, clarifications, and unexpected inputs.

```markdown
# Insufficient
Only test: User provides all info correctly → Agent completes task

# Better - also test:
- User changes their mind mid-conversation
- User provides conflicting information
- User goes off-topic and comes back
- User asks unexpected questions
- External system errors during conversation
```

### Pitfall 3: Ignoring conversation length

**Problem**: Short and long conversations fail differently.

```markdown
Short conversations (3-5 turns):
  - Often fail on task completion
  - Agent may not gather enough information

Long conversations (10+ turns):
  - Fail on context drift
  - Agent may lose track of original goal
  - Information from early turns forgotten

# Test both lengths for comprehensive coverage
```

### Pitfall 4: No adversarial testing

**Problem**: Cooperative test users don't reflect real-world challenges.

```markdown
# Also test:
- User provides contradictory information
- User tries to change topic repeatedly
- User is vague and requires clarification
- User expresses frustration
- User tries to extract information they shouldn't have
```

---

## Multi-turn evaluation tips

### Start small

Begin with 5-10 multi-turn test cases covering your most important conversation flows. Expand as you learn what patterns matter.

### Define the goal clearly

Every multi-turn test should have a clear user goal. "Did the conversation achieve this goal?" is your primary metric.

### Test both paths to completion

If a task can be completed in multiple ways (quick path vs. detailed path), test both:

```markdown
Quick path: User provides all info upfront → 2-turn completion
Guided path: Agent asks questions → 5-turn completion

Both should succeed with correct outcomes
```

### Use conversation-level assertions first

Start with high-level assertions (goal achieved, context retained) before adding turn-level detail. You can always add granularity later.

### Balance realism and reproducibility

Multi-turn tests are harder to reproduce because each turn depends on the previous response. Consider:

- Scripting expected agent behaviors (not exact responses)
- Using assertion ranges rather than exact values
- Running multiple trials per test case

---

## Next steps

You now understand how to evaluate both single-turn and multi-turn interactions. The final section covers how to organize your evaluation practice for long-term success. Continue to [Organize test categories and iterate](evaluation-test-categories.md) to learn about structuring test suites and operationalizing evaluation.
