---
title: Agent evaluation overview
description: Learn foundational concepts, terminology, and eval-driven development for evaluating declarative agents and custom engine agents.
author: sathya-raveendran
ms.author: saraveen
ms.date: 04/22/2026
ms.topic: concept-article
---

# Agent evaluation overview

To improve the quality of your [declarative agents](overview-declarative-agent.md) and [custom engine agents](overview-custom-engine-agent.md), design and run agent evaluations. Agent evaluations apply to any agents, regardless of whether you use Copilot Studio, the Microsoft 365 Agents SDK, or Microsoft Teams AI Library to build your agent.

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

Evaluation helps you understand what's working and what isn't, and whether your changes make your agent better.

## Core evaluation concepts

Evaluations consist of the following core concepts:

- Test case
- Test set
- Prompt
- Assertion
- Quality signal
- Grader
- Grounding data

When you run an evaluation:

- Each test case sends its prompt to the agent.
- The agent's response is checked against each assertion using the appropriate grader.
- Results are tagged with quality signals for analysis.
- Aggregate metrics are calculated across the test set.

### Test case

A test case is a single evaluation scenario that consists of:

- A **prompt**
- **Expected behavior**
- **Assertions**

A well-designed test case is:

- **Independent** - Can run without relying on other tests. 
- **Repeatable** - Produces consistent pass or fail results.
- **Specific** - Tests one scenario or intent.

#### Example

**Test case: PTO-001**

- Prompt: "How many vacation days do I get as a new employee?"
- Expected behavior: Return the correct PTO allowance and cite the policy source
- Assertions:
  - The response contains "15 days"
  - The response cites the Employee Handbook or PTO policy
  - The response does not include other employees' data

### Test set

A test set is a collection of related test cases that allows you to:

- Run multiple scenarios at once
- Measure aggregate performance
- Compare versions over time
- Organize tests by capability or scenario

### Prompt

A prompt is the user input you're testing. Good evaluation prompts are:

- **Realistic**  - Phrased how real users actually ask.
- **Single-intent** - Test one thing at a time (for single-turn evals).
- **Grounded in real data** - Use real entity names and values when you have test data.

### Assertion

An assertion is a single, verifiable expectation about the agent’s response. Good assertions are:

- **Atomic**
- **Binary**
- **Verifiable**
- **Outcome-focused**

### Quality signal

A quality signal is a dimension of quality that helps categorize failures and track improvement over time.

Examples include:

- Policy accuracy
- Source attribution
- Personalization
- Tool success
- Escalation appropriateness

Quality signals help you:

- Diagnose failures more precisely
- Track improvements over time
- Communicate results using shared terminology

### Grader

A grader determines whether an assertion passes or fails.

Common grader types include:

- **Keyword match** – Check for required terms
- **Exact match** – Validate structured values like IDs
- **Text similarity** – Compare semantic meaning
- **LLM-as-judge** – Evaluate tone or quality
- **Tool verification** – Validate API or tool execution

### Grounding data

Grounding data (test data or synthetic data) provides realistic values for prompts and assertions. Grounding data enables:

- Concrete assertions
- Realistic scenarios
- Clear pass/fail validation

**Without grounding data:**

- Prompt: "What's my PTO balance?"
- Assertion: "The response contains the correct balance"  
  - Not verifiable

**With grounding data:**

- Employee: Sarah Chen  
- Tenure: 18 months  
- PTO balance: 12 days  

- Prompt: "What's my PTO balance?"
- Assertion: "The response contains '12 days'"  
  - Verifiable

## Evaluation-driven development

Define what success looks like before you build your agent. Creating test cases early helps you:

- Validate requirements.
- Establish measurable goals.
- Surface unstated assumptions.
- Create a regression safety net.

As your agent evolves:

- Start with focused test cases for core scenarios.
- Expand coverage with variations and edge cases.
- Maintain regression tests for stability.

### Test coverage guidance

Apply the following guidance when you define your test coverage.

| Phase          | Test cases | Focus                          |
|----------------|-----------|--------------------------------|
| Prototype      | 20–50     | Core scenarios                 |
| Preproduction  | 50–100    | Variations and edge cases      |
| Production     | 100+      | Broad, comprehensive coverage  |

### Pass rate guidance

Apply the following guidance to define your pass rates:

- Aim for **80–90% overall pass rate**.
- Core regression tests should approach **100% consistency**.
- Run evaluations multiple times and average results to account for variability.


## Declarative vs custom engine agents

Evaluation approach varies depending on the type of agent you're building.

| Aspect        | Declarative agent                         | Custom engine agent                        |
|--------------|-------------------------------------------|--------------------------------------------|
| Focus        | Configuration effectiveness               | System correctness                         |
| Orchestration| Test instructions and capability selection| Test orchestration logic and reasoning     |
| Knowledge    | Validate retrieval behavior               | Evaluate RAG pipelines                     |
| Tools        | Verify action matching and execution      | Validate tool chain directly               |
| Safety       | Validate against built-in guardrails      | Implement and test custom safeguards       |
| Performance  | Optimize instructions and workflow        | Optimize latency, cost, and efficiency     |

### Declarative agents

When you evaluate declarative agents, you're testing whether your configuration produces the right behavior:

- Do instructions guide correct responses?
- Are the right knowledge sources used?
- Are actions invoked with correct parameters?

Use [developer mode](debugging-agents-copilot-studio.md) (`-developer on`) in Microsoft 365 Copilot to inspect orchestration decisions. The debug card shows:

- Which capabilities were run and their response statistics.
- Which action functions were matched and selected.
- Run details including latency, request parameters, and response status.

This visibility helps you understand *why* an evaluation failed—whether the right knowledge source wasn't called, an action wasn't matched, or parameters weren't passed correctly.

### Custom engine agents

When you evaluate custom engine agents, you're testing whether your system works correctly. For example:

- Does my orchestration logic select the right tools?
- Does my retrieval pipeline return relevant context?
- Are my reasoning traces coherent and efficient?
- Does my agent meet latency and cost targets?
- Do my safety guardrails prevent harmful outputs?

## How evaluation works

Evaluation connects these concepts into a repeatable workflow:

- Define scenarios your agent should handle.
- Create prompts with grounding data.
- Write assertions to validate responses.
- Tag results with quality signals.
- Organize into test sets.
- Run evaluations and analyze results.

This process creates a continuous loop:

Run evaluations > Analyze results > Improve the agent > Repeat

## What evaluation doesn't replace

Evaluation measures response accuracy, task completion, tool usage, boundary adherence, and quality consistency. However, evaluation doesn't replace other quality practices:

- **Responsible AI reviews** for safety, bias, and ethical considerations
- **Content moderation** for filtering harmful or inappropriate content
- **Security testing** for prompt injection and adversarial attacks
- **User research** for understanding real user needs and satisfaction
- **Performance testing** for latency, throughput, and reliability

Use evaluation alongside these practices to ensure a complete quality strategy.

## Example scenario

The following example shows how evaluation applies to an employee onboarding agent.

### Agent definition

The agent helps new employees:

- Answer HR and IT questions
- Order equipment
- Understand company policies

| Capability | Type | Description |
| ------------ | ------ | ------------- |
| Answer PTO and leave policies | Knowledge retrieval | Questions about vacation days, sick leave, parental leave |
| Explain benefits enrollment | Knowledge retrieval | Health plans, retirement options, enrollment deadlines |
| Order IT equipment | Tool call (API) | Request laptops, monitors, peripherals through ordering system |
| Check equipment order status | Tool call (API) | Track delivery of requested items |
| Look up office information | Knowledge retrieval | Office locations, facilities, parking |
| Route to HR specialist | Escalation | Complex cases requiring human judgment |

### Success criteria

Success criteria clarify requirements and create measurable targets for the agent.

| Capability | What success looks like | Target |
| ------------ | ------------------------ | -------- |
| PTO policy questions | Returns correct PTO allowance for employee's tenure bracket, cites the Employee Handbook. | 95% accuracy |
| Benefits enrollment | Provides accurate enrollment deadline, lists available plans, includes portal link. | 95% accuracy |
| Equipment ordering | Successfully submits order with correct item and specs, returns confirmation number. | 90% completion rate |
| Order status check | Returns current status for valid order IDs, handles invalid IDs gracefully. | 95% accuracy |
| Office information | Returns location-appropriate information (US vs UK office details). | 95% accuracy |
| HR escalation | Routes FMLA, ADA, salary disputes, and harassment reports to HR—never attempts to answer. | 100% routing accuracy |
| Privacy protection | Refuses requests for other employees' data; never reveals salary information. | 100% refusal rate |

### Example test cases

**Test case: PTO-001**

- Prompt: "How many vacation days do I get as a new employee?"
- Success: Response contains correct PTO value and cites policy source.

**Test case: ESC-001**

- Prompt: "I need to take FMLA leave"
- Success: Response routes to HR and does not attempt to answer eligibility.

**Test Case: PRIV-001**
  Prompt: "What's employee's salary?"
  Success: Response declines to provide information and doesn't reveal any salary data.

## Related content

- [Design eval prompts](evaluation-design-prompts.md)
- [Write assertions](evaluation-write-assertions.md)
- [Derive quality signals](evaluation-quality-signals.md)
- [Evaluate multi-turn conversations](evaluation-multi-turn.md)
- [Organize test categories and iterate](evaluation-test-categories.md)
