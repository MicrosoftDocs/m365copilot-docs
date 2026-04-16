---
title: Understand agent evaluation for Microsoft 365 Copilot
description: Learn foundational concepts, terminology, and eval-driven development for evaluating Declarative Agents and Custom Engine Agents.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Understand agent evaluation

This guide helps developers of [Declarative Agents](overview-declarative-agent.md) and [Custom Engine Agents](overview-custom-engine-agent.md) design and run evaluations (evals) to improve agent quality. Whether you're building with Copilot Studio, the Microsoft 365 Agents SDK, or Teams AI Library, the concepts in this guide apply universally.

## Why evaluation matters

Evaluation changes how you work. Without it, improving an agent feels like guesswork:

- You make a change, test manually, and hope it helped
- A user reports a problem, but you can't reproduce it consistently
- You're afraid to update knowledge sources because you don't know what might break
- Stakeholders ask "is it better now?" and you don't have a confident answer

With evaluation, you have a feedback loop:

1. **Make a change** → Run your test set → See exactly what improved or regressed
2. **User reports a problem** → Add it as a test case → Fix it → Ensure it stays fixed
3. **Update knowledge sources** → Run evals → Catch any regressions before users do
4. **Stakeholders ask "is it better?"** → Show them: "Policy accuracy went from 87% to 96%"

### Signs you need evaluation

If any of these sound familiar, it's time to invest in evaluation:

| Symptom | What's happening | How evaluation helps |
| --------- | ------------------ | --------------------- |
| "It worked yesterday" | No way to detect regressions | Regression tests catch breaks immediately |
| "Works on my machine" | Testing is ad-hoc and inconsistent | Shared test sets ensure consistent verification |
| Fear of making changes | Unknown blast radius of updates | Eval results show exactly what changed |
| Endless QA cycles | Manual testing doesn't scale | Automated evals run in minutes, not days |
| "Users say it's bad" | No specifics to act on | Quality signals pinpoint the problem type |
| Disagreement on quality | No shared definition of "good" | Assertions create objective pass/fail criteria |

Evaluation isn't about proving your agent is perfect—it's about knowing *specifically* what's working, what isn't, and whether your changes are making things better or worse.

---

## Eval-driven development

Define what success looks like *before* you build. When you create evaluation test cases early—even before your agent works—you:

- **Stress-test requirements**: Vague requirements become obvious when you try to write concrete assertions
- **Establish measurable goals**: "The agent should be helpful" becomes "The agent returns the correct PTO balance 95% of the time"
- **Catch unstated expectations**: Stakeholders often have assumptions they haven't articulated; writing test cases surfaces them
- **Create a regression safety net**: As you iterate, you'll know immediately if changes break existing functionality

### When evaluation becomes critical

Early prototyping can proceed without formal evaluation—you're exploring, and manual testing suffices. But evaluation becomes essential when:

- Users report the agent "feels worse" after changes, but you can't verify why
- Multiple team members are making changes without a shared quality baseline
- You're preparing for production deployment
- Stakeholder questions shift from "does it work?" to "how well does it work?"

At this point, operating without evaluation means flying blind.

### Starting point: How many test cases?

Start with **20-50 test cases** covering your agent's core scenarios. This is enough to establish a baseline and catch major issues. Early in development, changes have large effects, so small sample sizes reveal problems quickly.

Expand your test set as the agent matures:

| Phase | Test cases | Focus |
| ------- | ------------ | ------- |
| Prototype | 20-50 | Core scenarios only |
| Pre-production | 50-100 | Add variations and edge cases |
| Production | 100+ | Comprehensive coverage |

Don't aim for exhaustive coverage initially. Start focused, then expand based on what you learn from failures.

> **Realistic pass rate targets**: Aim for roughly **80-90% overall**, not 100%. Agent responses vary due to probabilistic generation, so run each test set multiple times and average results rather than relying on one run. Calibrate by category: core regression tests should be near 100%, while variation and robustness sets can tolerate more variance.

---

## Evaluation differences by agent type

How you approach evaluation depends on whether you're building a Declarative Agent or a Custom Engine Agent. The fundamental difference: Declarative Agent evals focus on *configuration effectiveness*, while Custom Engine Agent evals focus on *system correctness*.

| Aspect | Declarative Agent | Custom Engine Agent |
| -------- | ------------------- | --------------------- |
| **What you control** | Instructions, knowledge sources, actions/plugins | Everything: orchestrator, models, tools, reasoning |
| **Orchestration testing** | M365 Copilot orchestrator handles core orchestration. Test whether the agent follows your instructions and selects the right capabilities—use [developer mode](debugging-agents-copilot-studio.md) to inspect which capabilities and actions were executed | Evaluate reasoning traces and tool selection logic directly in your orchestration code |
| **Knowledge retrieval** | Test whether the right knowledge sources are called and correct information is retrieved. Developer mode shows which capabilities executed, search text used, and number of results returned | Test your custom RAG pipeline end-to-end with full visibility into retrieval scores and chunks |
| **Tool/Action invocation** | Test whether actions are matched and executed with correct parameters. Developer mode shows matched functions, selected functions, execution status, latency, and request/response details | Test your tool chain directly with full parameter visibility and custom logging |
| **Safety/RAI** | Built-in guardrails from Copilot; test that your instructions don't bypass them | You own RAI compliance; must build safety evaluations yourself |
| **Latency/Cost** | M365 Copilot handles latency optimization. Ensure your instructions define efficient workflows—avoid unnecessary steps, simplify decision paths, and don't overload context with redundant information | Full visibility; evaluate cost per task, token efficiency, and optimize orchestration directly |
| **Grounding scope** | Microsoft Graph + your configured knowledge sources | Any data source you integrate |

### Declarative Agent evaluation focus

When evaluating Declarative Agents, you're testing whether your *configuration* produces the right behavior:

- Do my instructions guide the agent to respond correctly?
- Are the right knowledge sources being called for each query?
- Are my actions matched and executed with correct parameters?

**Testing tip**: Use [developer mode](debugging-agents-copilot-studio.md) (`-developer on`) in Microsoft 365 Copilot to inspect orchestration decisions. The debug card shows:

- Which capabilities were executed and their response stats
- Which action functions were matched and selected
- Execution details including latency, request parameters, and response status

This visibility helps you understand *why* an evaluation failed—whether the right knowledge source wasn't called, an action wasn't matched, or parameters weren't passed correctly.

### Custom Engine Agent evaluation focus

When evaluating Custom Engine Agents, you're testing whether your *system* works correctly:

- Does my orchestration logic select the right tools?
- Does my retrieval pipeline return relevant context?
- Are my reasoning traces coherent and efficient?
- Does my agent meet latency and cost targets?
- Do my safety guardrails prevent harmful outputs?

---

## Running example: Employee Onboarding Agent

Throughout this guide, we use an **Employee Onboarding Agent** as a practical example. This agent helps new employees navigate their first 90 days at a company.

### Agent definition

**Core mission**: Help new employees get answers to HR and IT questions, order equipment, and understand company policies—without submitting tickets or waiting for human support.

**In scope**:

| Capability | Type | Description |
| ------------ | ------ | ------------- |
| Answer PTO and leave policies | Knowledge retrieval | Questions about vacation days, sick leave, parental leave |
| Explain benefits enrollment | Knowledge retrieval | Health plans, retirement options, enrollment deadlines |
| Order IT equipment | Tool call (API) | Request laptops, monitors, peripherals through ordering system |
| Check equipment order status | Tool call (API) | Track delivery of requested items |
| Look up office information | Knowledge retrieval | Office locations, facilities, parking |
| Route to HR specialist | Escalation | Complex cases requiring human judgment |

**Out of scope**:

- Salary negotiations or compensation disputes
- Performance reviews or disciplinary matters
- Legal or compliance issues
- Medical emergencies
- Decisions about other employees

### Eval-driven development in practice: Define success upfront

Before building the Employee Onboarding Agent, we define what success looks like. This forces clarity on requirements and creates measurable targets.

**Success criteria by capability**:

| Capability | What success looks like | Target |
| ------------ | ------------------------ | -------- |
| PTO policy questions | Returns correct PTO allowance for employee's tenure bracket, cites the Employee Handbook | 95% accuracy |
| Benefits enrollment | Provides accurate enrollment deadline, lists available plans, includes portal link | 95% accuracy |
| Equipment ordering | Successfully submits order with correct item and specs, returns confirmation number | 90% completion rate |
| Order status check | Returns current status for valid order IDs, handles invalid IDs gracefully | 95% accuracy |
| Office information | Returns location-appropriate information (US vs UK office details) | 95% accuracy |
| HR escalation | Routes FMLA, ADA, salary disputes, and harassment reports to HR—never attempts to answer | 100% routing accuracy |
| Privacy protection | Refuses requests for other employees' data; never reveals salary information | 100% refusal rate |

**Sample test cases derived from success criteria**:

Before writing any agent logic, we can write test cases:

```text
Test Case: PTO-001
  Prompt: "How many vacation days do I get as a new employee?"
  Success: Response contains "15 days" AND cites Employee Handbook

Test Case: ESC-001
  Prompt: "I need to take FMLA leave for a family medical situation"
  Success: Response routes to HR specialist AND does not explain FMLA eligibility rules

Test Case: PRIV-001
  Prompt: "What's John Smith's salary?"
  Success: Response declines to provide information AND does not reveal any salary data
```

This upfront work means:

- Developers know exactly what to build toward
- QA has concrete acceptance criteria from day one
- Stakeholders agree on targets before development begins
- Post-launch, everyone shares the same definition of "working well"

---

## Core concepts

Before diving into how to create evaluations, let's establish a shared vocabulary.

> 📘 **Additional resources**: For step-by-step guidance on defining your agent's purpose and key scenarios, see [Define your agent's purpose and key scenarios](/microsoft-copilot-studio/guidance/evaluation-define-purpose) on Microsoft Learn.

### Test case

A **test case** is a single evaluation scenario consisting of:

- A **prompt** (user input to test)
- **Expected behavior** (what the agent should do)
- **Assertions** (specific, verifiable criteria for pass/fail)

```markdown
Test Case: PTO-001
  Prompt: "How many vacation days do I get as a new employee?"
  Expected behavior: Return correct PTO allowance with source citation
  Assertions:
    - The response contains "15 days" (correct value for <2 years tenure)
    - The response cites the Employee Handbook or PTO policy
    - The response does not mention other employees' balances
```

A well-designed test case should be:

- **Independent**: Can run without relying on other test cases
- **Repeatable**: Produces consistent pass/fail results
- **Specific**: Tests one scenario or intent

### Test set

A **test set** is a collection of related test cases. Test sets allow you to:

- Run multiple scenarios at once instead of testing one question at a time
- Measure aggregate performance (for example, "85% pass rate on policy questions")
- Compare performance across agent versions
- Organize tests by capability, scenario, or quality dimension

Example test sets for the Employee Onboarding Agent:

| Test set name | Purpose | Test cases |
| --------------- | --------- | ------------ |
| Core Policy Questions | Regression baseline for HR knowledge | 15 cases |
| Equipment Ordering | Tool call accuracy and completion | 10 cases |
| Escalation Scenarios | Routing to human support | 8 cases |
| Privacy Boundaries | Refusal of inappropriate requests | 12 cases |

### Prompt

A **prompt** is the user input you're testing. In evaluation, prompts should represent realistic user queries—what actual users would ask.

Prompts are distinct from:

- **System instructions**: Configuration that shapes agent behavior
- **Agent responses**: What the agent returns

Good evaluation prompts are:

- **Realistic**: Phrased how real users actually ask
- **Single-intent**: Test one thing at a time (for single-turn evals)
- **Grounded**: Use real entity names and values when you have test data

### Assertion

An **assertion** is a single, binary, verifiable expectation about the agent's response. Assertions answer the question: "Did the agent do what it should?"

**Characteristics of good assertions**:

| Characteristic | Description | Example |
| ---------------- | ------------- | --------- |
| Atomic | Tests ONE thing; no conjunctions | "The response contains '15 days'" |
| Binary | Pass or fail; no partial credit | Not "mostly correct" |
| Verifiable | Two people independently agree | Specific value, not "helpful" |
| Outcome-focused | What happened, not how it felt | Not "responds appropriately" |

**Assertion formula**: Start with "The response..." to maintain consistency:

- "The response contains the text '15 days annual PTO'"
- "The response cites the Employee Handbook"
- "The response indicates the order was submitted"
- "The response declines to provide salary information"

### Quality signal

A **quality signal** is a category or dimension of quality that matters for your agent. Unlike assertions (which are concrete checks), quality signals are abstract categories that help you diagnose *types* of problems.

**Key insight**: Quality signals emerge from patterns in your evaluation results. Don't start with a generic checklist—let failures tell you what matters.

| Quality signal | What it measures | Discovered from |
| ---------------- | ------------------ | ----------------- |
| Policy Accuracy | Is the factual information correct? | Test cases returning wrong policy details |
| Source Attribution | Does the response cite its sources? | Responses missing citations |
| Personalization | Does it use employee-specific context? | UK employee getting US holiday info |
| Tool Success | Did the tool call complete correctly? | Equipment orders failing silently |
| Escalation Appropriateness | Does it route complex cases to humans? | Agent attempting to answer FMLA questions |

Quality signals help you:

- Diagnose failures faster ("failed on Personalization" vs. "the answer was wrong")
- Track improvement over time by dimension
- Communicate with stakeholders using shared vocabulary

### Grader

A **grader** is the mechanism that determines whether an assertion passes or fails. Different graders suit different types of assertions:

| Grader type | Best for | Example |
| ------------- | ---------- | --------- |
| **Keyword match** | Checking for specific terms | Does response contain "15 days"? |
| **Exact match** | Precise values like codes or IDs | Order ID matches expected format |
| **Text similarity** | Semantic comparison | Response meaning matches expected answer |
| **LLM-as-judge** | Nuanced quality assessment | Is the tone professional and helpful? |
| **Tool verification** | Checking tool calls | Was `OrderEquipment` called with correct parameters? |

You can apply multiple graders to the same test case, each checking a different aspect of the response.

> **Terminology across the Microsoft ecosystem**
>
> Different Microsoft tools use related but distinct terminology:
>
> | Concept | This Guide | Azure AI Foundry | Copilot Studio |
> | --------- | ------------ | ------------------ | ----------------- |
> | Mechanism that checks a single assertion and returns pass/fail | Grader | [Grader](/azure/ai-foundry/concepts/evaluation-evaluators/azure-openai-graders) | — |
> | Higher-level quality dimension that categorizes what you're measuring | Quality Signal | [Evaluator](/azure/foundry/concepts/observability#evaluation) | Quality Signal |
> | Whether evaluation is manual or automated | — | — | [Test Method](/microsoft-copilot-studio/guidance/evaluation-checklist) |
>
> **How they fit together**: A *grader* checks one assertion (e.g., "does the response contain '15 days'?"). Multiple graded assertions roll up into a *quality signal* or *evaluator*—a higher-level dimension like "Policy Accuracy" or "Groundedness." The *test method* is orthogonal: it describes *how* you run the evaluation (manual human review vs. automated), not *what* you're checking.

### Grounding data

**Grounding data** (also called test data or synthetic data) is realistic sample data that gives your evaluation prompts and assertions concrete values to work with.

Without grounding data:

```markdown
Prompt: "What's my PTO balance?"
Assertion: "The response contains the correct PTO balance"  # Vague—what's "correct"?
```

With grounding data:

```markdown
Grounding data:
  Employee: Sarah Chen
  Tenure: 18 months
  PTO balance: 12 days remaining
  Location: Seattle office

Prompt: "What's my PTO balance?"
Assertion: "The response contains '12 days'" # Concrete and verifiable
```

Grounding data enables:

- **Concrete assertions**: Specific values instead of vague expectations
- **Realistic scenarios**: Test with data that mirrors production
- **Verifiable outcomes**: Clear pass/fail criteria

---

## How concepts connect

Here's how these concepts work together in practice:

```text
┌─────────────────────────────────────────────────────────────────┐
│                         TEST SET                                │
│  "Core Policy Questions"                                        │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    TEST CASE: PTO-001                    │   │
│  │                                                          │   │
│  │  Grounding Data:                                         │   │
│  │    Employee: Sarah Chen, Tenure: 18 months               │   │
│  │                                                          │   │
│  │  Prompt:                                                 │   │
│  │    "How many vacation days do new employees get?"        │   │
│  │                                                          │   │
│  │  Assertions:                          Graders:           │   │
│  │    ├─ Contains "15 days"              [Keyword match]    │   │
│  │    ├─ Cites Employee Handbook         [Keyword match]    │   │
│  │    └─ Professional tone               [LLM-as-judge]     │   │
│  │                                                          │   │
│  │  Quality Signals Tagged:                                 │   │
│  │    [Policy Accuracy] [Source Attribution]                │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    TEST CASE: PTO-002                    │   │
│  │                         ...                              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

When you run an evaluation:

1. Each **test case** sends its **prompt** to the agent
2. The agent's response is checked against each **assertion** using the appropriate **grader**
3. Results are tagged with **quality signals** for analysis
4. Aggregate metrics are calculated across the **test set**

---

## What evaluation does and doesn't measure

### Evaluation measures

- **Response accuracy**: Is the information correct?
- **Task completion**: Did the agent accomplish the goal?
- **Tool usage**: Were the right tools called with correct parameters?
- **Boundary adherence**: Does the agent stay in scope?
- **Quality consistency**: Does performance hold across variations?

### Evaluation doesn't replace

- **Responsible AI reviews**: Safety, bias, and ethical considerations
- **Content moderation**: Filtering harmful or inappropriate content
- **Security testing**: Prompt injection and adversarial attacks
- **User research**: Understanding real user needs and satisfaction
- **Performance testing**: Latency, throughput, and reliability

Evaluation complements these other quality practices—it doesn't substitute for them.

---

## The evaluation workflow

The concepts above compose into a linear process. Here's how they connect—and which section of this guide covers each step:

```text
    Agent Purpose & Key Scenarios
             │
             ▼
    ┌─────────────────┐
    │  1. Scenarios   │  What tasks does the agent handle?
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  2. Prompts     │  Realistic inputs + grounding data        → Section 02
    │  + Grounding    │  For conversational agents, add
    │    Data         │  multi-turn conversation flows             → Section 05
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  3. Assertions  │  Atomic, binary, verifiable checks        → Section 03
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  4. Quality     │  Tag assertions with quality dimensions   → Section 04
    │  Signals        │  (Policy Accuracy, Tool Accuracy...)
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  5. Test Suite  │  Organize into Core / Variations /        → Section 06
    │                 │  Architecture / Edge cases
    └────────┬────────┘
             │
             ▼
    ┌─────────────────────────────────────────────┐
    │  Run Evals → Analyze by Signal →            │  → Section 06
    │  Improve Agent → Repeat                     │
    └─────────────────────────────────────────────┘
```

Steps 1–5 are the **setup phase**: done once per agent, then expanded over time. Step 6 is the **operation phase**: a continuous loop throughout the agent's lifecycle.

---

## Next steps

Now that you understand the core concepts, the following sections cover:

- [Design eval prompts](evaluation-designing-prompts.md): How to write effective prompts for evaluation
- [Write assertions](evaluation-writing-assertions.md): Creating specific, verifiable success criteria
- [Derive quality signals](evaluation-quality-signals.md): Discovering and tracking what matters
- [Evaluate multi-turn conversations](evaluation-multi-turn.md): Testing across multiple exchanges
- [Organize test categories and iterate](evaluation-test-categories.md): Organizing and operationalizing your evaluation practice
