# Derive quality signals

Quality signals provide the vocabulary for diagnosing what works and what doesn't in your agent's responses. While assertions tell you *what* failed, quality signals help you understand *why* and identify patterns across failures.

## Why quality signals matter

Quality signals transform individual test failures into patterns you can diagnose, track, and communicate. Where assertions tell you *what* failed ("PTO-003 didn't contain '15 days'"), quality signals tell you *why* and help you prioritize ("Policy Accuracy is at 73%—our knowledge base has stale documents"). For more on this framing, see [Defining Agent Quality](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/evaluation-define-quality).

## Quality signals vs. assertions

| Aspect | Assertions | Quality Signals |
| -------- | ------------ | ----------------- |
| **Level** | Concrete, specific | Abstract, categorical |
| **Purpose** | Determine pass/fail | Diagnose and track patterns |
| **Quantity** | Many per test case (3-10) | Few per agent (4-8) |
| **Origin** | Written upfront | Emerge from failure patterns |
| **Example** | "Contains '15 days'" | "Policy Accuracy" |

**The relationship**: Quality signals are categories; assertions are the concrete tests within those categories.

```text
Quality Signal: Policy Accuracy
  ├── Assertion: "Contains '15 days' for PTO"
  ├── Assertion: "Contains 'March 31' for enrollment deadline"
  └── Assertion: "Does not mention outdated 2023 policy"

Quality Signal: Source Attribution
  ├── Assertion: "Cites Employee Handbook"
  └── Assertion: "References section number"

Quality Signal: Tool Success
  ├── Assertion: "OrderEquipment tool was invoked"
  ├── Assertion: "Tool call includes correct employeeId"
  └── Assertion: "Response includes order confirmation"
```

---

## Discover your quality signals

Don't start with a generic checklist like "Accuracy, Completeness, Relevance"—these are too abstract to be actionable. Let your evaluation results tell you what matters.

### The emergence process

1. **Run your initial test cases** against the agent
2. **Review failures** and look for patterns
3. **Name the patterns** as quality signals
4. **Tag assertions** with their corresponding signals
5. **Track pass rates** by signal over time

### Example: Employee Onboarding Agent signal discovery

After running 50 test cases, the team reviewed failures and identified patterns:

| Observation | Pattern identified | Quality signal |
| ------------- | ------------------- | ---------------- |
| PTO-001, PTO-002 passed with correct policy info | Correct facts from knowledge | **Policy Accuracy** |
| PTO-001 passed: cited the Employee Handbook | Source mentioned | **Source Attribution** |
| PTO-003, LOC-002 failed: gave US info to UK employee | Ignored user context | **Personalization** |
| EQ-005 failed: tool called but wrong parameters | Tool execution issue | **Tool Accuracy** |
| ESC-001 passed: routed FMLA to HR | Appropriate handoff | **Escalation Appropriateness** |
| PRIV-002 failed: almost revealed salary data | Privacy boundary | **Privacy Protection** |
| EQ-003 passed: included next steps | Actionable response | **Action Enablement** |

These seven signals became the team's evaluation vocabulary.

For the full Define -> Run -> Analyze -> Improve cycle that surfaces and validates these patterns over time, see [The iteration loop](evaluation-test-categories.md#the-iteration-loop).

---

## Quality signals for the Employee Onboarding Agent

Here are the quality signals discovered for our running example, with concrete definitions of what pass and fail look like:

### Policy Accuracy

**What it measures**: Is the factual information from knowledge sources correct?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| "15 days PTO for employees with <2 years tenure" (correct) | "10 days PTO" (outdated policy) |
| "Enrollment deadline is March 31" (current) | "Enrollment deadline is March 15" (last year) |
| "The HMO plan has a $500 deductible" (accurate) | "$250 deductible" (wrong plan details) |

**Root causes when this fails**:

- Outdated documents in knowledge base
- Multiple versions of policy documents
- Retrieval returning wrong document
- Model hallucinating details

### Source Attribution

**What it measures**: Does the response cite where information comes from?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| "According to the Employee Handbook..." | States facts without any source |
| "Per the 2024 Benefits Guide, Section 4..." | "The policy says..." (vague) |
| "You can find more details in the PTO Policy document" | Presents information as if common knowledge |

**Root causes when this fails**:

- Instructions don't emphasize citation
- Knowledge chunks lack source metadata
- Model trained to be conversational vs. attributive

### Personalization

**What it measures**: Does the response use employee-specific context appropriately?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| Lists UK bank holidays for London employee | Lists US holidays for UK employee |
| "As a 3-year employee, you get 20 days PTO" | Generic answer ignoring tenure |
| References Seattle office policies for Seattle employee | Generic "check with your local office" |

**Root causes when this fails**:

- User context not passed to agent
- Instructions don't emphasize personalization
- Knowledge not segmented by region/role
- Model ignoring context in prompt

### Tool Accuracy

**What it measures**: Are tool calls made correctly with proper parameters?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| OrderEquipment called with correct item, specs, employee ID | Tool called with wrong parameters |
| CheckOrderStatus called with valid order ID | Tool called with malformed ID |
| All required parameters populated | Missing required parameters |

**Root causes when this fails**:

- OpenAPI spec unclear on required parameters
- Model misinterpreting user input
- Parameter mapping incorrect
- Context not available for required fields

### Tool Response Handling

**What it measures**: Does the agent correctly interpret and communicate tool results?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| "Your order ORD-123 was submitted successfully" | Claims success when tool returned error |
| "The MacBook is currently out of stock" | Ignores error, says order is processing |
| "Delivery expected in 5-7 business days" | Makes up delivery timeline not in response |

**Root causes when this fails**:

- Error handling not in instructions
- Model not trained on tool response formats
- Instructions don't cover failure scenarios

### Escalation Appropriateness

**What it measures**: Does the agent know when to route to human support?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| Routes FMLA questions to HR specialist | Attempts to explain FMLA eligibility |
| Routes salary disputes to compensation team | Engages with salary comparison discussion |
| Routes harassment reports to appropriate channel | Tries to mediate or advise |

**Root causes when this fails**:

- Escalation triggers not defined in instructions
- Model overly helpful, wants to answer everything
- Routing logic not implemented

### Privacy Protection

**What it measures**: Does the agent protect sensitive information?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| "I can't share other employees' information" | Reveals or hints at others' data |
| Declines firmly without revealing if data exists | "I can't tell you John's salary, but..." |
| Only discusses the requesting employee's data | Compares across employees |

**Root causes when this fails**:

- Data access controls not properly configured
- Instructions don't emphasize privacy boundaries
- Model susceptible to social engineering

### Action Enablement

**What it measures**: Does the response give users clear next steps?

| Pass looks like | Fail looks like |
| ----------------- | ----------------- |
| "To enroll, go to benefits.company.com and click..." | "You should enroll in benefits" (no how) |
| "Your order ID is ORD-123. Track it at..." | "Your order was placed" (no reference) |
| "Contact HR at `hr@company.com` or ext. 5555" | "Reach out to HR" (no contact info) |

**Root causes when this fails**:

- Instructions don't require actionable responses
- Knowledge sources lack procedural details
- Model summarizes without preserving action items

---

## Quality signals by agent type

Different agents need different quality signals. Here's guidance for common agent types:

### Knowledge-grounded agents (Q&A, policy lookup)

| Signal | Priority | Rationale |
| -------- | ---------- | ----------- |
| Policy/Factual Accuracy | High | Core function is providing correct info |
| Source Attribution | High | Users need to verify and trust answers |
| Completeness | Medium | Partial answers frustrate users |
| Personalization | Medium | If content varies by user context |

### Tool-calling agents (actions, integrations)

| Signal | Priority | Rationale |
| -------- | ---------- | ----------- |
| Tool Accuracy | High | Wrong parameters = failed actions |
| Tool Response Handling | High | Users need to know outcome |
| Action Enablement | High | Users need confirmation and next steps |
| Error Recovery | Medium | Graceful handling of failures |

### Hybrid agents (knowledge + tools)

| Signal | Priority | Rationale |
| -------- | ---------- | ----------- |
| Routing Accuracy | High | Choosing knowledge vs. tool correctly |
| All knowledge signals | Medium | When answering from knowledge |
| All tool signals | Medium | When taking actions |
| Escalation Appropriateness | Medium | Knowing limits of automation |

### Customer-facing agents

| Signal | Priority | Rationale |
| -------- | ---------- | ----------- |
| Privacy Protection | High | Customer data sensitivity |
| Tone/Professionalism | High | Brand representation |
| Escalation Appropriateness | High | Complex issues need humans |
| Resolution Completeness | Medium | Customers want answers, not partial help |

> **For conversational agents**: Pair these quality signals with conversation-specific metrics from [Evaluate multi-turn conversations](evaluation-multi-turn.md#multi-turn-quality-metrics), such as knowledge retention and context consistency.

---

## Implement quality signal tracking

### Step 1: Tag assertions with signals

Add signal tags to each assertion in your test cases:

```markdown
Test Case: PTO-001
Prompt: "How many vacation days do new employees get?"

Assertions:
- The response contains "15 days"
  [Signal: Policy Accuracy]

- The response cites the Employee Handbook
  [Signal: Source Attribution]

- The response mentions the <2 year tenure bracket
  [Signal: Personalization]
```

### Step 2: Calculate signal-level metrics

After running evaluations, aggregate pass rates by signal:

| Quality Signal | Test Cases | Pass | Fail | Pass Rate |
| ---------------- | ------------ | ------ | ------ | ----------- |
| Policy Accuracy | 25 | 23 | 2 | 92% |
| Source Attribution | 25 | 20 | 5 | 80% |
| Personalization | 15 | 11 | 4 | 73% |
| Tool Accuracy | 12 | 10 | 2 | 83% |
| Escalation Appropriateness | 8 | 8 | 0 | 100% |
| Privacy Protection | 10 | 10 | 0 | 100% |

### Step 3: Identify and prioritize issues

From the metrics above:

1. **Personalization (73%)** - Biggest gap, investigate first
2. **Source Attribution (80%)** - Second priority
3. **Tool Accuracy (83%)** - Third priority
4. **Policy Accuracy (92%)** - Minor issues, monitor

### Step 4: Track over time

Monitor signal pass rates across agent versions:

```text
Version 1.0 → 1.1 → 1.2 → 1.3
Personalization:  73% → 78% → 85% → 91%  (improving)
Source Attribution: 80% → 82% → 88% → 90%  (improving)
Tool Accuracy: 83% → 85% → 84% → 92%  (improved after v1.2 regression)
```

---

## Communicate with quality signals

Quality signals transform stakeholder conversations:

**Without signals**:

> "The agent isn't performing well. Users are complaining."

**With signals**:

> "Policy Accuracy is at 92%—we're hitting our target. But Personalization dropped to 73% after the last update. Specifically, UK employees are getting US holiday information. We identified the root cause: the context retrieval isn't passing location data. Fix is in progress for next release."

This specificity enables targeted fixes, quantitative progress tracking, and clearer stakeholder communication.

---

## Quality signal anti-patterns

### Anti-pattern 1: Starting with generic signals

```markdown
# Avoid starting with
- Accuracy
- Helpfulness
- Relevance
- Completeness
- User Satisfaction

# Instead, let patterns emerge
Run evaluations → Review failures → Name the patterns you see
```

### Anti-pattern 2: Too many signals

```markdown
# Avoid (too granular)
- PTO Accuracy
- Benefits Accuracy
- Holiday Accuracy
- Location Accuracy
- Tenure Accuracy

# Better (consolidated)
- Policy Accuracy (covers all factual correctness)
- Personalization (covers all context-awareness)
```

### Anti-pattern 3: Signals without clear definitions

```markdown
# Avoid
Quality Signal: "Correctness"
(What does this mean? How do you know if it passes?)

# Better
Quality Signal: "Policy Accuracy"
Pass: Response contains factually correct information matching current policy documents
Fail: Response contains outdated, incorrect, or fabricated policy information
```

---

## Next steps

Quality signals help you diagnose single-turn interactions. For agents that handle multi-step conversations, you need additional evaluation approaches. Continue to [Evaluate multi-turn conversations](evaluation-multi-turn.md) to learn how to test conversations that span multiple exchanges.
