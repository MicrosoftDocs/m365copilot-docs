---
title: Evaluate multiturn conversations for Copilot agents
description: Learn how to design and run evaluations that test multiturn conversation flows, context retention, and multi-step task completion.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Evaluate multiturn conversations

Real users do not interact with agents through isolated, single-question exchanges. Instead, they engage in conversations that include follow-up questions, incremental information sharing, and multistep task completion.

Multiturn evaluation helps ensure that your agent can maintain context, complete tasks across multiple steps, and respond appropriately throughout a realistic conversation flow.

## When to use multiturn evaluation

Use multiturn evaluation when testing scenarios that require context retention or multiple steps to complete a task.

| Scenario | Why multiturn is needed |
|----------|--------------------------|
| Slot filling | The agent must collect multiple pieces of information |
| Clarification flows | The agent must resolve ambiguous user input |
| Multi-step tasks | The task requires multiple exchanges to complete |
| Context-dependent follow-ups | Later questions depend on earlier responses |
| Progressive disclosure | Information is provided incrementally |

### Single-turn vs. multiturn evaluation

Start with single-turn evaluations for coverage, then add multiturn evaluations to test realistic interactions.

| Aspect | Single-turn | multiturn |
|--------|-------------|------------|
| Tests | Individual question-answer pairs | Complete conversations |
| Context | Each prompt is independent | Turns build on each other |
| Complexity | Easier to design and evaluate | More realistic but complex |
| Failure diagnosis | Easier to isolate issues | Requires turn-by-turn analysis |
| Use case | Testing specific responses | Testing conversation flow |

## Key metrics for multiturn evaluation

Multiturn evaluation requires additional metrics beyond single-turn accuracy. These metrics assess how well the agent performs across an entire conversation.

### Conversation completeness

Conversation completeness measures whether the agent achieves the user’s goal by the end of the interaction.

**Complete example**

**Turn 1**
- **User**: "I need to order a laptop"  
- **Agent**: "I can help with that. What type of laptop do you need?"

**Turn 2**
- **User**: "MacBook Pro"  
- **Agent**: "What screen size—14 inch or 16 inch?"

**Turn 3**
- **User**: "16 inch"  
- **Agent**: "I've submitted your order for a 16-inch MacBook Pro. Order ID: ORD-456. Expected delivery: 5–7 business days."

✅ The user goal (ordering a laptop) is achieved.

**Incomplete example**

**Turn 1**
- **User**: "I need to order a laptop"  
- **Agent**: "I can help with that. What type of laptop do you need?"

**Turn 2**
- **User**: "MacBook Pro"  
- **Agent**: "MacBook Pro is a great choice! Is there anything else?"

❌ The order was not submitted and the user goal is not achieved.

### Knowledge retention

Knowledge retention measures whether the agent remembers and uses information provided in earlier turns.

**Failure example**

**Turn 1**
- **User**: "My employee ID is EMP-12345"  
- **Agent**: "Thanks! How can I help you today?"

**Turn 2**
- **User**: "I want to check my PTO balance"  
- **Agent**: "I'd be happy to help. What's your employee ID?"

❌ The agent forgot the employee ID from the previous turn.

**Success example**

**Turn 1**
- **User**: "My employee ID is EMP-12345"  
- **Agent**: "Thanks! How can I help you today?"

**Turn 2**
- **User**: "I want to check my PTO balance"  
- **Agent**: "Your current PTO balance is 12 days remaining."

✅ The agent used the previously provided employee ID without asking again.

### Role adherence

Role adherence measures whether the agent maintains its defined scope and responsibilities throughout the conversation.

**Failure example**

**Turn 1**
- **User**: "What's the PTO policy?"  
- **Agent**: Provides correct PTO policy information  

**Turn 2**
- **User**: "Can you write a poem about vacation?"  
- **Agent**: "Sure! Here's a poem about sunny beaches..."

❌ The agent drifted from its role as an HR assistant.

**Success example**

**Turn 1**
- **User**: "What's the PTO policy?"  
- **Agent**: Provides correct PTO policy information  

**Turn 2**
- **User**: "Can you write a poem about vacation?"  
- **Agent**: "I'm here to help with HR and onboarding questions. Is there anything else about PTO I can help with?"

✅ The agent stayed within its role and redirected appropriately.

### Conversation relevancy

Conversation relevancy measures whether each response is directly relevant to the user’s request within the current conversational context.

**Failure example**

**Turn 1**
- **User**: "What health plans are available?"  
- **Agent**: Lists HMO and PPO options  

**Turn 2**
- **User**: "What's the difference in cost?"  
- **Agent**: "The PPO offers more flexibility in choosing doctors."

❌ The response does not address the user’s question about cost.

### Context consistency

Context consistency measures whether the agent maintains consistent facts and information across all turns in the conversation.

**Failure example**

**Turn 1**
- **User**: "How many vacation days do I get?"  
- **Agent**: "As a new employee, you receive 15 days of PTO annually."

**Turn 2**
- **User**: "And how many sick days?"  
- **Agent**: "You have 10 sick days, plus your 10 vacation days."

❌ The agent contradicts earlier information by changing the number of vacation days.

## Design multiturn test cases

Designing effective multiturn evaluations requires defining both the conversation flow and expected behaviors.

### Test case structure

A multiturn test case typically includes:

- Test case ID and description
- Grounding data
- Conversation sequence
- Expected behaviors
- Assertions

**Example**

- **Test case ID**: CONV-001  
- **Description**: Equipment ordering flow  

**Grounding data**
- Employee: Sarah Chen  
- Employee ID: EMP-54321  
- Department: Product Design  
- Budget: $3,500  

**Conversation**

**Turn 1**
- **User**: "I need to get my laptop set up"
- **Expected behavior**: Ask about preferences

**Turn 2**
- **User**: "MacBook Pro"
- **Expected behavior**: Ask for specifications

**Turn 3**
- **User**: "16 inch with 32GB RAM"
- **Expected behavior**: Confirm and submit order

**Turn 4**
- **User**: "Actually, change it to 64GB"
- **Expected behavior**: Update the order


### Slot-filling conversation

**Scenario**: Benefits enrollment (slot filling)  
**Goal**: Collect all required information and complete enrollment  

**Required inputs (slots):**
- Plan selection (HMO or PPO)
- Coverage level (individual or family)
- Dependent information (if applicable)
- Effective date

**Conversation:**

Turn 1  
User: "I want to sign up for health insurance."  
Agent:
- Acknowledges request  
- Asks for plan preference (HMO vs. PPO)

Turn 2  
User: "What's the difference?"  
Agent:
- Explains key differences between HMO and PPO  
- Re-asks for plan selection

Turn 3  
User: "I'll go with the PPO."  
Agent:
- Confirms selection  
- Asks for coverage level (individual or family)

Turn 4  
User: "Family coverage. I have a spouse and two kids."  
Agent:
- Confirms dependent scenario  
- Requests dependent details (names, ages, etc.)

Turn 5  
User: [Provides dependent information]  
Agent:
- Confirms all collected information  
- Submits enrollment  
- Provides confirmation summary

**Assertions:**
- All required slots are collected before submission  
- The agent does not skip required inputs  
- The agent explains options when prompted  
- The final confirmation includes all captured details  
- The task completes successfully without unnecessary turns  

### Clarification conversation

**Scenario**: Ambiguous request (clarification)  
**Goal**: Resolve ambiguity by gathering sufficient context before responding  

**Conversation:**

Turn 1  
User: "I need to take some time off."  
Agent:
- Acknowledges request  
- Asks what type of time off (PTO, sick leave, personal leave)

Turn 2  
User: "It's for a medical procedure."  
Agent:
- Identifies likely category  
- Asks whether the request is for the user or a family member  

Turn 3  
User: "It's for me. It's a minor surgery."  
Agent:
- Determines this is likely sick leave  
- Provides relevant policy information  
- Asks about expected duration  

Turn 4  
User: "About a week."  
Agent:
- Confirms eligibility and process  
- Provides next steps (for example, how to request leave)  
- Offers to initiate the request if applicable  

**Assertions:**
- The agent does not assume intent from the initial ambiguous request  
- Clarifying questions are relevant and progressively narrow the scope  
- The final response reflects the user's actual situation  
- The agent transitions from clarification to resolution effectively  

### Error recovery conversation

**Scenario**: Order failure and recovery  
**Goal**: Handle failures transparently and guide the user to a successful outcome  

**Conversation:**

Turn 1  
User: "Order me a MacBook Pro 16-inch."  
Agent:
- Attempts to submit the order  

System/tool response:  
- Error: Item out of stock  

Agent:
- Communicates the issue clearly  
- Does not obscure or ignore the failure  
- Suggests alternatives (for example, different model or size)

Turn 2  
User: "When will it be back in stock?"  
Agent:
- Checks availability or provides restock estimate if available  
- If unavailable, communicates that clearly  
- Offers to notify the user or suggest alternatives  

Turn 3  
User: "Can I get the 14-inch instead?"  
Agent:
- Confirms availability of the alternative  
- Submits the new order  
- Provides confirmation (order details, expected delivery)

**Assertions:**
- The agent clearly communicates failures and their causes  
- The agent offers actionable alternatives or next steps  
- The conversation progresses toward recovery, not dead ends  
- The user successfully completes the task after the failure  
- The agent maintains context across the failure and recovery steps  

## Multiturn assertions

Multiturn evaluation requires both conversation-level and turn-level validation.

### Conversation-level assertions

- The conversation achieves the user's goal
- The number of turns is within an expected range
- The agent maintains consistent information
- The agent maintains its role
- The agent does not request duplicate information

### Turn-level assertions

- The response acknowledges prior context
- The response asks appropriate follow-up questions
- The agent performs expected actions
- The response confirms actions taken

### Conditional assertions

- When the user corrects information, the agent updates subsequent responses
- When an action fails, the agent communicates the issue and provides alternatives
- When a user asks an out-of-scope question, the agent redirects appropriately

## Example: End-to-end multiturn evaluation

### Test case: New hire setup

**Description**

A new employee orders equipment and asks a benefits question during the same conversation.

**Grounding data**

- Employee: Marcus Johnson  
- Employee ID: EMP-99887  
- Department: Engineering  
- Location: Seattle  
- Equipment budget: $4,000  

### Conversation

**Turn 1**
- **User**: "I'm starting next week and need to set up my workstation"
- **Expected behavior**: Welcome and ask about equipment needs

**Turn 2**
- **User**: "I need a MacBook Pro 16 inch with 64GB RAM and a 27-inch monitor"
- **Expected behavior**: Submit order and confirm

**Turn 3**
- **User**: "When is the deadline to sign up for health insurance?"
- **Expected behavior**: Provide benefits information without losing context

**Turn 4**
- **User**: "Can you confirm what I ordered?"
- **Expected behavior**: Recall and summarize the order

### Expected outcomes

- Equipment order is completed
- Benefits question is answered accurately
- Context is retained across turns
- Information is not re-requested

## Common pitfalls

Be aware of these common issues when designing and evaluating multi-turn conversations:

- Evaluating turns in isolation instead of within full conversation context, which can hide failures related to memory, continuity, and task completion.  
- Testing only ideal (happy path) scenarios, which fails to reflect real user behavior such as ambiguity, corrections, and interruptions.  
- Ignoring differences between short and long conversations, where short flows often miss completion and long flows introduce context drift.  
- Not including adversarial or unexpected user behavior, such as conflicting inputs, topic switching, or vague requests.  
- Defining unclear or implicit user goals, making it difficult to determine whether the conversation succeeded.  
- Over-specifying expected responses, which reduces flexibility and incorrectly penalizes valid variations.  
- Failing to test error handling and recovery paths, leaving gaps in how the agent responds to failures or missing information.  

## Best practices

Use these practices to design effective and scalable multi-turn evaluations:

- Start with a small set of high-value scenarios that represent the most common or critical conversation flows.  
- Define a clear user goal for each test case and use goal completion as the primary success metric.  
- Test both direct (user provides all inputs upfront) and guided (agent collects inputs over multiple turns) paths to completion.  
- Use conversation-level assertions first, then add turn-level assertions for deeper validation.  
- Design scenarios that reflect realistic user behavior, including clarifications, corrections, and topic switching.  
- Validate context retention explicitly by ensuring the agent uses previously provided information without re-asking.  
- Include error handling and recovery scenarios, ensuring the agent communicates failures and provides next steps.  
- Use flexible, behavior-based assertions instead of exact response matching.  
- Ensure tests are reproducible while preserving realism by defining expected behaviors rather than exact phrasing.  
- Continuously iterate and refine test cases based on observed failures and evolving usage patterns.

## Next step

> [!div class="nextstepaction"]
> [Organize test categories and iterate](evaluation-test-categories.md)
