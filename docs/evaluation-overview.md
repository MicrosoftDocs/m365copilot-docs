---
title: Agent evaluation overview
description: Learn foundational concepts, terminology, and eval-driven development for evaluating declarative agents and custom engine agents.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/16/2026
ms.topic: concept-article
---

# Agent evaluation overview

To improve the quality of the [declarative agents](overview-declarative-agent.md) and [custom engine agents](overview-custom-engine-agent.md) that you build, design and run evaluations. Agent evaluations apply to any agents, regardless of whether you use Copilot Studio, the Microsoft 365 Agents SDK, or Microsoft Teams AI Library to build your agent.

## Why evaluation matters

Without evaluation, you can't reliably measure whether changes to your agent improve or degrade quality. Common challenges include:

- Changes are tested manually, with no way to confirm they helped.
- User-reported problems can't be reproduced consistently.
- Updating knowledge sources carries risk because you can't predict the impact.
- Stakeholders ask whether quality has improved, and you can't quantify the change.

Evaluation provides a repeatable feedback loop that addresses each of these challenges:

- **Make a change.** Run your test set. The results show exactly what improved or regressed.
- **Triage a user report.** Add it as a test case, fix the issue, and keep the case in your regression set so it stays fixed.
- **Update knowledge sources.** Run evaluations to catch regressions before users do.
- **Answer stakeholder questions with data.** Instead of "it feels better," you can say "Policy accuracy went from 87% to 96%."

Evaluation helps you understand what's working and what isn't, and whether your changes make your agent better. The following table shows common agent development patterns and how evaluation helps address them.

| Pattern | What's happening | How evaluation helps |
| --------- | ------------------ | --------------------- |
| Intermittent regressions | No way to detect regressions | Regression tests catch breaks immediately |
| Inconsistent local testing | Testing is ad-hoc and inconsistent | Shared test sets ensure consistent verification |
| Fear of making changes | Unknown scope of impact | Eval results show exactly what changed |
| Endless QA cycles | Manual testing doesn't scale | Automated evals run in minutes, not days |
| Vague user complaints | No specifics to act on | Quality signals pinpoint the problem type |
| Disagreement on quality | No shared definition of "good" | Assertions create objective pass/fail criteria |

## Evaluation-driven development

Define what success looks like before you build. When you create evaluation test cases early, even before your agent works, you:

- **Stress-test requirements.** Vague requirements become obvious when you try to write concrete assertions.
- **Establish measurable goals.** Instead of "The agent should be helpful," goals become specific, such as "The agent returns the correct PTO balance 95% of the time."
- **Catch unstated expectations.** Stakeholders often have assumptions they haven't articulated. Writing test cases surfaces those assumptions.
- **Create a regression safety net.** As you iterate, you know immediately if changes break existing functionality.

Early prototyping doesn't require formal evaluation. However, evaluation becomes essential when:

- Users report that the agent performs worse after changes, but you can't verify why.
- Multiple team members make changes without a shared quality baseline.
- You're preparing for production deployment.
- Stakeholder questions shift from "does it work?" to "how well does it work?"

### Test cases

Write test cases before you write agent logic. When you define your test cases early:

- Developers know exactly what to build.
- QA has concrete acceptance criteria.
- Stakeholders agree on targets before development begins.
- After launch, everyone shares the same definition of success.

Start with 20 to 50 test cases that cover your agent's core scenarios. You don't need to cover all scenarios right away. Start with a focused set, and expand based on what you learn from failures. The following table provides general guidance for each development phase.

| Phase | Test cases | Focus |
| ------- | ------------ | ------- |
| Prototype | 20-50 | Core scenarios only |
| Preproduction | 50-100 | Add variations and edge cases |
| Production | 100+ | Comprehensive coverage |

#### Pass rate targets

Aim for an 80 to 90 percent overall pass rate. Agent responses vary due to probabilistic generation. Don't rely on a single test run; run each test set multiple times and average results. Core regression tests should be near 100 percent, while variation and robustness sets can tolerate more variance.

## Evaluation differences by agent type

How you approach evaluation depends on whether you're building a declarative or custom engine agent. Declarative agent evaluations focus on *configuration effectiveness*; custom engine agent evaluations focus on *system correctness*.

| Aspect | Declarative agent | Custom engine agent |
| -------- | ------------------- | --------------------- |
| **What you control** | Instructions, knowledge sources, actions/plugins | Orchestrator, models, tools, reasoning |
| **Orchestration testing** | Microsoft 365 Copilot orchestrator handles core orchestration. Test whether the agent follows your instructions and selects the right capabilities. Use [developer mode](debugging-agents-copilot-studio.md) to inspect which capabilities and actions were called. | Evaluate reasoning traces and tool selection logic directly in your orchestration code. |
| **Knowledge retrieval** | Test whether the right knowledge sources are called and whether correct information is retrieved. Developer mode shows which capabilities were called, what search text was used, and the number of results returned. | Test your custom RAG pipeline end-to-end with full visibility into retrieval scores and chunks. |
| **Tool/action invocation** | Test whether actions are matched and run with correct parameters. Developer mode shows matched functions, selected functions, run status, latency, and request/response details. | Test your tool chain directly with full parameter visibility and custom logging. |
| **Safety/RAI** | Built-in guardrails from Copilot. Verify that your instructions don't bypass them. | You own RAI compliance; build safety evaluations yourself. |
| **Latency/cost** | Microsoft 365 Copilot handles latency optimization. Make sure that your instructions define efficient workflows. Avoid unnecessary steps, simplify decision paths, and don't overload context with redundant information. | Full visibility. Evaluate cost per task, token efficiency, and optimize orchestration directly. |
| **Grounding scope** | Microsoft Graph and your configured knowledge sources. | Any data source you integrate. |

### Declarative agent evaluation focus

When you evaluate declarative agents, you're testing whether your configuration produces the right behavior. For example:

- Do my instructions guide the agent to respond correctly?
- Are the right knowledge sources called for each query?
- Are my actions matched and run with correct parameters?

Use [developer mode](debugging-agents-copilot-studio.md) (`-developer on`) in Microsoft 365 Copilot to inspect orchestration decisions. The debug card shows:

- Which capabilities were run and their response statistics.
- Which action functions were matched and selected.
- Run details including latency, request parameters, and response status.

This visibility helps you understand *why* an evaluation failed—whether the right knowledge source wasn't called, an action wasn't matched, or parameters weren't passed correctly.

### Custom engine agent evaluation focus

When you evaluate custom engine agents, you're testing whether your system works correctly. For example:

- Does my orchestration logic select the right tools?
- Does my retrieval pipeline return relevant context?
- Are my reasoning traces coherent and efficient?
- Does my agent meet latency and cost targets?
- Do my safety guardrails prevent harmful outputs?

## Evaluation concepts

Evaluations consist of the following core concepts.

- Test case
- Test set
- Prompt

### Test case

A test case is a single evaluation scenario that consists of:

- A **prompt** (user input to test)
- **Expected behavior** (what the agent should do)
- **Assertions** (specific, verifiable criteria for pass or fail)

```markdown
Test Case: PTO-001
  Prompt: "How many vacation days do I get as a new employee?"
  Expected behavior: Return correct PTO allowance with source citation
  Assertions:
    - The response contains "15 days" (correct value for 2 years tenure)
    - The response cites the Employee Handbook or PTO policy
    - The response does not mention other employees' balances
```

A well-designed test case is:

- **Independent**: Can run without relying on other test cases.
- **Repeatable**: Produces consistent pass or fail results.
- **Specific**: Tests one scenario or intent.

### Test set

A test set is a collection of related test cases. Test sets allow you to:

- Run multiple scenarios at once instead of testing one question at a time.
- Measure aggregate performance (for example, "85% pass rate on policy questions").
- Compare performance across agent versions.
- Organize tests by capability, scenario, or quality dimension.

The following table shows an example of a test set for the Employee onboarding agent.

| Test set name | Purpose | Test cases |
| --------------- | --------- | ------------ |
| Core policy questions | Regression baseline for HR knowledge | 15 cases |
| Equipment ordering | Tool call accuracy and completion | 10 cases |
| Escalation scenarios | Routing to human support | 8 cases |
| Privacy boundaries | Refusal of inappropriate requests | 12 cases |

### Prompt

A prompt is the user input you're testing. In evaluation, prompts represent realistic user queries.

Prompts are distinct from:

- **System instructions**: Configuration that shapes agent behavior.
- **Agent responses**: What the agent returns.

Good evaluation prompts are:

- **Realistic**: Phrased how real users actually ask.
- **Single-intent**: Test one thing at a time (for single-turn evaluations).
- **Grounded**: Use real entity names and values when you have test data.

### Assertion

An assertion is a single, binary, verifiable expectation about the agent's response. Assertions answer the question "Did the agent do what it should?"

The following table lists characteristics of good assertions.

| Characteristic | Description | Example |
| ---------------- | ------------- | --------- |
| Atomic | Tests one thing; no conjunctions. | The response contains "15 days". |
| Binary | Pass or fail; no partial credit. | Not "mostly correct". |
| Verifiable | Two people independently agree. | Specific value, not "helpful". |
| Outcome-focused | What happened, not how it felt. | Not "responds appropriately". |

Start with "The response..." to maintain consistency. For example:

- The response contains the text "15 days annual PTO".
- The response cites the Employee Handbook.
- The response indicates the order was submitted.
- The response declines to provide salary information.

### Quality signal

A quality signal is a category or dimension of quality that matters for your agent. Unlike assertions (which are concrete checks), quality signals are abstract categories that help you diagnose types of problems.

Quality signals emerge from patterns in your evaluation results. Rather than starting with a generic checklist, let failures tell you what matters.

| Quality signal | What it measures | Discovered from |
| ---------------- | ------------------ | ----------------- |
| Policy accuracy | Is the factual information correct? | Test cases returning wrong policy details. |
| Source attribution | Does the response cite its sources? | Responses missing citations. |
| Personalization | Does it use employee-specific context? | UK employee getting US holiday information. |
| Tool success | Did the tool call complete correctly? | Equipment orders failing silently. |
| Escalation appropriateness | Does it route complex cases to humans? | Agent attempting to answer FMLA questions. |

Quality signals help you:

- Diagnose failures faster ("failed on Personalization" vs. "the answer was wrong").
- Track improvement over time by dimension.
- Communicate with stakeholders by using shared vocabulary.

### Grader

A grader is the mechanism that determines whether an assertion passes or fails. Different graders suit different types of assertions.

| Grader type | Best for | Example |
| ------------- | ---------- | --------- |
| **Keyword match** | Checking for specific terms | Does response contain "15 days"? |
| **Exact match** | Precise values like codes or IDs | Order ID matches expected format. |
| **Text similarity** | Semantic comparison | Response meaning matches expected answer. |
| **LLM-as-judge** | Quality assessments that require judgment | Is the tone professional and helpful? |
| **Tool verification** | Checking tool calls | Was `OrderEquipment` called with correct parameters? |

You can apply multiple graders to the same test case, where each grader checks a different aspect of the response.

#### Terminology across Microsoft products

Microsoft products use related but distinct terminology for evaluation concepts. The following table maps the terms used in this guide to their equivalents in Microsoft Foundry and Microsoft Copilot Studio.

| Concept | Copilot extensibility | Foundry | Copilot Studio |
|---|---|---|---|
| Mechanism that checks a single assertion and returns pass or fail | Grader | [Grader](/azure/ai-foundry/concepts/evaluation-evaluators/azure-openai-graders) | Not applicable |
| Higher-level quality dimension that categorizes what you're measuring | Quality signal | [Evaluator](/azure/foundry/concepts/observability#evaluation) | Quality signal |
| Whether evaluation is manual or automated | Not applicable | Not applicable | [Test method](/microsoft-copilot-studio/guidance/evaluation-checklist) |

A grader checks one assertion, such as whether the response contains the phrase "15 days." Multiple graded assertions combine into a quality signal or evaluator, which represents a higher-level dimension such as policy accuracy or groundedness. The test method is a separate consideration: it describes how you run the evaluation (manual review or automated testing), not what you're checking.

### Grounding data

Grounding data (also called test data or synthetic data) is realistic sample data that gives your evaluation prompts and assertions concrete values to work with.

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

## How concepts connect

When you run an evaluation, the concepts work together as follows:

1. Each **test case** sends its **prompt** (with **grounding data**) to the agent.
1. The agent's response is checked against each **assertion** by using the appropriate **grader**.
1. Results are tagged with **quality signals** for analysis.
1. Aggregate metrics are calculated across the **test set**.

The following diagram shows the overall evaluation workflow and the articles that cover each step.

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
    │  2. Prompts     │  Realistic inputs + grounding data
    │  + Grounding    │  For conversational agents, add
    │    Data         │  multi-turn conversation flows
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  3. Assertions  │  Atomic, binary, verifiable checks
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  4. Quality     │  Tag assertions with quality dimensions
    │  Signals        │  (Policy Accuracy, Tool Accuracy...)
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  5. Test Suite  │  Organize into Core / Variations /
    │                 │  Architecture / Edge cases
    └────────┬────────┘
             │
             ▼
    ┌─────────────────────────────────────────────┐
    │  Run Evals → Analyze by Signal →            │
    │  Improve Agent → Repeat                     │
    └─────────────────────────────────────────────┘
```

Steps 1 through 5 are the **setup phase**, done once per agent and then expanded over time. Step 6 is the **operation phase**, a continuous loop throughout the agent's lifecycle.

## What evaluation doesn't replace

Evaluation measures response accuracy, task completion, tool usage, boundary adherence, and quality consistency. However, evaluation doesn't replace other quality practices:

- **Responsible AI reviews** for safety, bias, and ethical considerations
- **Content moderation** for filtering harmful or inappropriate content
- **Security testing** for prompt injection and adversarial attacks
- **User research** for understanding real user needs and satisfaction
- **Performance testing** for latency, throughput, and reliability

## Example scenario: Employee onboarding agent

This section uses an employee onboarding agent as an example. The agent helps new employees complete tasks and find information during their first 90 days at the company.

### Agent definition

The Employee onboarding agent helps new employees get answers to HR and IT questions, order equipment, and understand company policies without submitting tickets or waiting for human support.

The agent has the following capabilities.

| Capability | Type | Description |
| ------------ | ------ | ------------- |
| Answer PTO and leave policies | Knowledge retrieval | Questions about vacation days, sick leave, parental leave |
| Explain benefits enrollment | Knowledge retrieval | Health plans, retirement options, enrollment deadlines |
| Order IT equipment | Tool call (API) | Request laptops, monitors, peripherals through ordering system |
| Check equipment order status | Tool call (API) | Track delivery of requested items |
| Look up office information | Knowledge retrieval | Office locations, facilities, parking |
| Route to HR specialist | Escalation | Complex cases requiring human judgment |

The following capabilities are out of scope:

- Salary negotiations or compensation disputes
- Performance reviews or disciplinary matters
- Legal or compliance issues
- Medical emergencies
- Decisions about other employees

### Evaluation-driven development in practice

The following table defines what success looks like for the Employee onboarding agent. These criteria clarify requirements and create measurable targets.

| Capability | What success looks like | Target |
| ------------ | ------------------------ | -------- |
| PTO policy questions | Returns correct PTO allowance for employee's tenure bracket, cites the Employee Handbook. | 95% accuracy |
| Benefits enrollment | Provides accurate enrollment deadline, lists available plans, includes portal link. | 95% accuracy |
| Equipment ordering | Successfully submits order with correct item and specs, returns confirmation number. | 90% completion rate |
| Order status check | Returns current status for valid order IDs, handles invalid IDs gracefully. | 95% accuracy |
| Office information | Returns location-appropriate information (US vs UK office details). | 95% accuracy |
| HR escalation | Routes FMLA, ADA, salary disputes, and harassment reports to HR—never attempts to answer. | 100% routing accuracy |
| Privacy protection | Refuses requests for other employees' data; never reveals salary information. | 100% refusal rate |

#### Example test cases

The following example shows test cases for the Employee onboarding agent.

```markdown
Test Case: PTO-001
  Prompt: "How many vacation days do I get as a new employee?"
  Success: Response contains "15 days" AND cites Employee Handbook.

Test Case: ESC-001
  Prompt: "I need to take FMLA leave for a family medical situation"
  Success: Response routes to HR specialist AND does not explain FMLA eligibility rules.

Test Case: PRIV-001
  Prompt: "What's John Smith's salary?"
  Success: Response declines to provide information AND does not reveal any salary data.
```

## Related content

- [Design eval prompts](evaluation-design-prompts.md)
- [Write assertions](evaluation-writing-assertions.md)
- [Derive quality signals](evaluation-quality-signals.md)
- [Evaluate multi-turn conversations](evaluation-multi-turn.md)
- [Organize test categories and iterate](evaluation-test-categories.md)
