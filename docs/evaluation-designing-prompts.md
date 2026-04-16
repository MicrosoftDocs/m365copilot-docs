# Design eval prompts

The quality of your evaluation depends on the quality of your prompts. A well-designed prompt tests what you intend to test—no more, no less. This section covers how to write effective evaluation prompts that yield actionable results.

## Anatomy of a good eval prompt

An effective evaluation prompt has four characteristics:

### 1. Single intent

Each prompt should test one user goal or question. Multi-intent prompts make it difficult to diagnose what failed.

| Multi-intent (avoid) | Single intent (preferred) |
| --------------------- | --------------------------- |
| "What's my PTO balance and can you order me a laptop?" | "What's my PTO balance?" |
| "Tell me about health benefits and also the 401k match" | "What health insurance plans are available?" |

When you need to test multiple capabilities together, use multi-turn conversation evals instead of cramming intents into one prompt.

### 2. Realistic phrasing

Prompts should reflect how real users actually communicate with agents—including informal language, incomplete sentences, and varying levels of detail.

| Overly formal | Realistic |
| --------------- | ----------- |
| "Please provide information regarding the annual paid time off allocation for employees in their first year of employment." | "How many vacation days do new hires get?" |
| "I would like to initiate a request for procurement of computing equipment." | "I need to order a laptop" |

Draw prompt inspiration from:

- Actual user queries (if you have production logs)
- User research sessions
- Support ticket language
- How you'd ask a colleague the same question

### 3. Grounded in data

When you have grounding data (test data representing your environment), use specific entity names, values, and identifiers in your prompts. This makes assertions concrete and verifiable.

**Without grounding data** (inventing plausible values):

```markdown
Prompt: "What's the PTO policy for engineers?"
```

**With grounding data** (using actual test data):

```markdown
Grounding data:
  Employee: Marcus Johnson
  Department: Engineering
  Tenure: 8 months
  Manager: Lisa Park
  Location: Austin office

Prompt: "I'm in the engineering team—how many vacation days do I get?"
```

Grounding data enables you to write assertions like "The response contains '15 days'" instead of vague criteria like "The response contains the correct number."

### 4. Self-contained (for single-turn)

For single-turn evaluations, each prompt must include all context needed for the agent to respond correctly. The agent can't reference previous conversation turns.

| Depends on context (avoid for single-turn) | Self-contained |
| ------------------------------------------- | ---------------- |
| "What about the other health plan?" | "What does the PPO health plan cover?" |
| "And how much does that cost?" | "What's the employee cost for the PPO health plan?" |
| "Can you order that instead?" | "Can you order a 16-inch MacBook Pro?" |

For scenarios that naturally span multiple turns, use multi-turn conversation evals (covered in [Evaluate multi-turn conversations](evaluation-multi-turn.md)).

---

## The three prompt variations

Testing with a single prompt phrasing reveals whether your agent handles that exact wording—but users don't all ask the same way. To test generalization, create three variations of each core prompt:

### 1. Canonical prompt

The **canonical prompt** is explicit, complete, and unambiguous. It includes all information the agent needs to succeed without clarification. Use this as your baseline—if the agent fails the canonical prompt, there's a fundamental issue.

**Characteristics**:

- All required parameters are explicitly stated
- Uses precise terminology
- No ambiguity in what's being asked
- Represents the "ideal" user query

**Example**:

```markdown
Canonical: "How many paid time off days do employees with less than
two years of tenure receive annually according to the current PTO policy?"
```

### 2. Natural language variant

The **natural language variant** is a conversational paraphrase—how most users actually talk. It tests whether the agent understands intent beyond exact keyword matching.

**Characteristics**:

- Casual, conversational tone
- May use synonyms or informal terms
- Doesn't include IDs or technical identifiers users wouldn't know
- May be less explicit but still complete enough to answer

**Example**:

```markdown
Natural language: "hey, how much vacation do I get as a new hire?"
```

**Variation techniques**:

| Technique | Canonical | Natural variant |
| ----------- | ----------- | ----------------- |
| Synonyms | "paid time off" | "vacation days", "time off", "PTO" |
| Informal phrasing | "How many days do I receive" | "how much do I get" |
| Implicit context | "employees with <2 years tenure" | "as a new hire" |
| Casual casing | Proper capitalization | lowercase, minimal punctuation |

### 3. Robustness probe

The **robustness probe** tests the agent's resilience to imperfect input—typos, grammatical errors, and informal shorthand. Real users make mistakes; your agent should handle them gracefully.

**Characteristics**:

- Contains intentional (but plausible) typos
- May have grammatical errors
- Uses informal abbreviations
- Tests agent's ability to infer intent despite noise

**Example**:

```markdown
Robustness probe: "whats my vacaton days entitlement"
```

**Robustness patterns to test**:

| Pattern | Example |
| --------- | --------- |
| Typos | "vacaton" instead of "vacation" |
| Missing punctuation | "whats" instead of "what's" |
| Missing words | "how many days get" instead of "how many days do I get" |
| Abbreviations | "PTO bal?" instead of "What is my PTO balance?" |
| Run-on queries | "need laptop macbook pro 16 inch" |

---

## Complete prompt variation example

Here's a complete example for the Employee Onboarding Agent showing all three variations for a single test scenario:

### Scenario: Equipment ordering

**Grounding data**:

```markdown
Employee: Sarah Chen
Department: Product Design
Start date: 2024-01-15
Equipment budget: $3,500
Approved items: MacBook Pro (14" or 16"), External monitor, Keyboard, Mouse
```

**Prompt variations**:

```markdown
Canonical:
"I am a new employee in the Product Design department starting on January 15th,
2024. I need to order a 16-inch MacBook Pro laptop. Please submit this equipment
request through the IT ordering system."

Natural language:
"Hi, I just joined the product design team and need to get my laptop set up.
Can I get a MacBook Pro? The 16 inch one preferably."

Robustness probe:
"need to order macbook pro 16in for new job in product design"
```

**Assertions (apply to all variations)**:

```markdown
- The response confirms the equipment order was initiated
- The agent invoked the OrderEquipment tool
- The tool call included item: "MacBook Pro 16-inch" (or equivalent)
- The response includes an order confirmation or reference number
```

### Scenario: Policy question with personalization

**Grounding data**:

```markdown
Employee: James Wright
Location: London, UK office
Tenure: 6 months
Employment type: Full-time
```

**Prompt variations**:

```markdown
Canonical:
"As a full-time employee based in the London UK office with 6 months of tenure,
what public holidays am I entitled to take off this year?"

Natural language:
"I work in the London office - what bank holidays do I get off?"

Robustness probe:
"uk office holidays off this yr?"
```

**Assertions (apply to all variations)**:

```markdown
- The response lists UK bank holidays (not US holidays)
- The response includes at minimum: New Year's Day, Easter, Christmas
- The response references the UK holiday schedule or policy
- The response does not mention US holidays like July 4th or Thanksgiving
```

---

## Prompt anti-patterns

Avoid these common mistakes when designing evaluation prompts:

### Anti-pattern 1: Multi-intent prompts

**Problem**: When a multi-intent prompt fails, you can't tell which intent caused the failure.

```markdown
# Avoid
"What's my PTO balance, and also can you tell me about the health insurance
options, and I might need to order a laptop too"
```

**Fix**: Split into separate test cases, or use multi-turn evaluation.

### Anti-pattern 2: Schema-aware prompts

**Problem**: Real users don't know your agent's internal tool names or API structure.

```markdown
# Avoid
"Call the GetPTOBalance API for employee ID 12345"
"Use the OrderEquipment function to request a laptop"
```

**Fix**: Use natural language that describes intent, not implementation.

```markdown
# Better
"What's my current vacation balance?"
"I need to order a laptop for my new role"
```

### Anti-pattern 3: Vague or open-ended prompts

**Problem**: Vague prompts make it impossible to write concrete assertions.

```markdown
# Avoid
"Help me with HR stuff"
"Tell me about policies"
"I have a question"
```

**Fix**: Be specific about what the user wants to accomplish.

```markdown
# Better
"How do I enroll in the dental insurance plan?"
"What's the policy on working from home?"
"How many sick days can I take per year?"
```

### Anti-pattern 4: Leading prompts

**Problem**: Prompts that hint at the expected answer don't test real comprehension.

```markdown
# Avoid
"The PTO policy says 15 days for new employees, right?"
"I should use the OrderEquipment tool to get a laptop, correct?"
```

**Fix**: Ask questions that require the agent to retrieve or reason, not just confirm.

```markdown
# Better
"How many PTO days do new employees receive?"
"How do I request a laptop?"
```

### Anti-pattern 5: Impossible without context (single-turn)

**Problem**: Prompts that reference prior conversation can't work in single-turn evals.

```markdown
# Avoid (for single-turn)
"What about the other option?"
"Can you explain that more?"
"And how much does it cost?"
```

**Fix**: Make prompts self-contained, or use multi-turn evaluation.

```markdown
# Better (for single-turn)
"What's the difference between the HMO and PPO health plans?"
"Can you explain how the 401k matching works?"
"What's the employee cost for the PPO plan?"
```

---

## Prompt coverage checklist

Use this checklist to ensure your evaluation prompts cover your agent's capabilities:

### Capability coverage

- [ ] **Every tool/action** has at least one test case
- [ ] **Every knowledge domain** has representative questions
- [ ] **Escalation triggers** are tested (when should agent hand off?)
- [ ] **Out-of-scope requests** are tested (should refuse gracefully)

### Variation coverage

For each core scenario:

- [ ] Canonical prompt (explicit, complete)
- [ ] Natural language variant (conversational)
- [ ] Robustness probe (typos, informal)

### Edge case coverage

- [ ] **Boundary conditions**: Very short prompts, very long prompts
- [ ] **Ambiguous requests**: Could reasonably be interpreted multiple ways
- [ ] **Missing information**: User doesn't provide all needed details
- [ ] **Invalid requests**: Asking for things the agent can't do

### Personalization coverage (if applicable)

- [ ] Different user locations (regional policies)
- [ ] Different tenure levels (eligibility differences)
- [ ] Different roles or departments (access differences)

---

## Generate prompts from user queries and scenarios

Start with real user intent, not capability inventories or auto-generated prompt lists.

Build prompts from the scenarios users actually bring to the agent:

1. **Collect representative user questions** from support logs, demos, UAT, and stakeholder input
2. **Group by scenario** (policy lookup, action request, clarification flow, escalation, refusal)
3. **Write a canonical prompt** for each scenario in realistic user language
4. **Add natural and robustness variants** for each canonical prompt
5. **Ground prompts with concrete data** so assertions remain objective and verifiable

This keeps evaluations aligned to real-world usage and prevents overfitting to synthetic prompt sets.

### Optional addendum: AI-assisted prompt expansion

After you establish a strong human-authored baseline, you can use AI to propose additional prompt variants for broader coverage.

Use AI expansion as an addendum, not a starting point:

- Keep core prompts scenario-first and human-authored
- Review every AI-suggested prompt for realism and relevance
- Reject prompts that are schema-aware, unnatural, or not tied to a user scenario
- Add accepted prompts only where they close a clear coverage gap

---

## Next steps

With well-designed prompts, you need equally well-designed assertions to verify agent behavior. Continue to [Write assertions](evaluation-writing-assertions.md) to learn how to create specific, verifiable success criteria.
