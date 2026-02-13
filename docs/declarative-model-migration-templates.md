---
title: Instruction templates and design patterns for declarative agents
description: Learn how to optimize declarative agents with production-ready templates and design patterns validated against GPT 5.1 behavior.
#customer intent: As a technical lead, I want to understand how to structure instructions for GPT 5.1 so that I can avoid ambiguity and errors in agent behavior.
ms.date: 02/13/2026
author: manuelap-msft
ms.author: kkanjitajdin
ms.localizationpriority: medium
ms.topic: article
---

# Instruction templates and design patterns for declarative agents

This article provides production-ready patterns and templates validated against GPT 5.1 behavior.

## Pattern 1: Convert ambiguous multitask requests into deterministic workflows

GPT 5.1 often infers missing logic or combines multistep instructions when tasks aren't separated clearly. This behavior can lead to incorrect calculations, reordered steps, or incomplete outputs, especially when extraction and analysis tasks are fused. This pattern eliminates ambiguity by forcing atomic steps, explicit formulas, and required validation, leading to stable, repeatable behavior across model versions.

```md
## Task: Metrics and ROI (Deterministic)

### Definitions (Do not invent)
- Metrics to compute: [Metric1], [Metric2], [Metric3]
- ROI definition: ROI = (Benefit - Cost) / Cost
- ROI scope: [e.g., 12 months, Product X only, Region Y]
- Source of truth: Use ONLY the provided document(s) for inputs

### Steps (Sequential — do not reorder)
Step 1: Locate inputs for [Metric1-3] in the document. Quote the section/table name where each input came from.  
Step 2: Compute [Metric1-3] exactly as defined above. If any input is missing, stop and ask ONE question listing what's missing.  
Step 3: Compute ROI using the ROI definition above. Do not substitute other ROI formulas.  
Step 4: Output ONLY the table in the format below.

### Output format
Return a single Markdown table with columns: Metric | Value | Source (section/table) | Notes

### Final check (Self-evaluation)
Before finalizing: confirm every metric has (a) a value, (b) a source, and (c) no assumptions. If assumptions exist, stop and ask the user.
```
## Pattern 2: Correct parallel versus sequential structure

GPT 5.1 is more sensitive to list structure than earlier models. Using numbered steps when tasks are parallel causes the model to impose unnecessary sequence, skipping, or merging tasks. Separating parallel and sequential logic ensures the model executes workflows correctly without adding or reordering steps.

```md
Section A — Extract Data  
- Extract pricing changes.  
- Extract margin changes.  
- Extract sentiment themes.  

Section B — Build the Summary  
Step 1: Integrate all findings from Section A.  
Step 2: Produce the 2 page call prep summary.
```

## Pattern 3: Explicit decision rules

GPT 5.1 tries to resolve ambiguous conditional logic on its own. This approach often results in blended branches ("do both") or selection of the wrong conditional path. Explicit if/then rules prevent unintended model interpretation and enforce deterministic outcomes.

```md
Read the product report.  
Check category performance.  
If performance is stable or improving, write the summary section.  
If performance declines or anomalies are detected, write the risks/issues section.
```

## Pattern 4: Output contract

GPT 5.1's tone and verbosity vary widely based on inferred intent. Without explicit output constraints, your agent might produce overly long explanations, overly terse responses, or switch unpredictably across versions. Output contracts provide shape, structure, tone, and allowed content, ensuring consistency.

**Good precision**:

```md
Produce a 2-page call-prep briefing:  
Page 1 → key metrics: revenue, margin, YoY deltas (calculate as needed).  
Page 2 → top themes, risks, opportunities, customer signals.  
Tone: Professional. Reasoning: none unless calculation required.
```

**Output contract**:

```md
## Output Contract (Mandatory)
Goal: [one sentence]  
Format: [bullet list | table | 2 pages | JSON]  
Detail level: [short | medium | detailed] — do not exceed [X] bullets per section  
Tone: [Professional | Friendly | Efficient]  
Include: [A, B, C]  
Exclude: No extra recommendations, no extra context, no “helpful tips”  
Example shape:  
- Section 1: ...  
- Section 2: ...
```

Use this pattern when your output must follow:

- A precise format (bullets, table, JSON, multi‑page summary).
- A specified level of detail (short, medium, detailed).
- A compliance, audit, or customer‑facing template.
- A business process requiring consistent formatting across teams.

## Pattern 5: Literal lock header

GPT 5.1 optimizes workflows, reorganizes steps, and fills missing gaps, which can break strict business processes. A literal lock header forces the model to follow instructions exactly, preventing improvisation, or inference. It's an essential safeguard when migrating an existing GPT 5.0-tuned agent.

```md
Always interpret instructions literally.  
Never infer intent or fill in missing steps.  
Never add context, recommendations, or assumptions.  
Follow step order exactly with no optimization.  
Respond concisely and only in the requested format.  
Do not call tools unless a step explicitly instructs you to do so.
```

## Pattern 6: Clean Markdown structure

GPT 5.1 interprets [Markdown](https://www.markdownguide.org/basic-syntax) structure much more strongly than GPT 5.0. Poorly nested lists, unclear headers, or inconsistent formatting cause merged steps, unintended hierarchy, or collapsed sections. Clean, intentional Markdown ensures the model can reliably parse your instructions.

```md
## Section A — Extract Data
- Extract pricing changes.
- Extract margin changes.
- Extract sentiment themes.

## Section B — Build the Summary (Sequential)
**Step 1:** Integrate findings from Section A.  
**Step 2:** Produce the 2 page call prep summary.
```

## Pattern 7: Self-evaluation gate

By adding an explicit self-check step, you force the model to validate completeness, verify alignment with instructions, and correct omissions before responding. This step increases consistency and reliability.

```md
## Section A: Extract Data (Non Sequential)
Perform these tasks when the user requests data extraction from the document:
- Extract pricing changes.
- Extract margin changes.
- Extract sentiment themes.
Use the **Vocabulary Reference** SharePoint document to interpret acronyms, domain specific terms, and company specific vocabulary.

## Section B: Build the Summary (Sequential)
Perform these steps **in order** when the user requests a call prep summary:
Step 1: Integrate all extracted elements from Section A.  
Step 2: Produce a clear, well structured 2 page call prep summary.

## Final Check: Self Evaluation
Before finalizing the output, review your response for completeness, ensure all Section A elements are accurately represented, check for inconsistencies or uncertainty, and revise the answer if needed.
```

## Pattern 8: Steering automode reasoning

GPT 5.1 has adaptive reasoning: it chooses shallow or deep reasoning based on inferred intent. Without guidance, your agent might over-explain simple answers or under-explain complex decisions. Explicit reasoning cues give you control over how much thinking the model applies.

**Trigger deep reasoning**:

```md
Use deep reasoning. Break the problem into steps, analyze each step, evaluate alternatives, and justify the final decision. Reflect before answering.  
Task: Determine the optimal 3-year migration strategy given constraints A, B, and C.
```

**Force fast and minimal reasoning**:

```md
Short answer only. No reasoning or explanation. Provide the final result only.  
Task: Extract the product name and renewal date from this paragraph.
```

Use this pattern when your workflow requires:

- Deeper reasoning (planning, evaluating alternatives, multistep logic).
- Fast retrieval or extraction with minimal explanation.
- Switching between high-level summaries and deeper analysis.
- Consistent depth across multiple agents or use cases.

## Pattern 9: Apply a literal-execution header for immediate stability

A literal-execution header helps temporarily stabilize an existing agent by shifting the model back toward GPT 5.0-like behavior. This pattern is especially useful as an interim fix while you update the full instruction set.

```md
Always interpret instructions literally.
Never infer intent or fill in missing steps.  
Never add context, recommendations, or assumptions.  
Follow step order exactly with no optimization.  
Respond concisely and only in the requested format.  
Do not call tools unless a step explicitly instructs you to do so.
```

Use this pattern when:

- You observe reordering, added steps, or excessive reasoning after upgrading to GPT 5.1+.
- You need a fast short-term mitigation before applying deeper structural improvements.
- You want to diagnose whether inference or instruction ambiguity is causing the problem.

## Pattern 10: Evaluate and migrate existing declarative agent instructions

Use a structured evaluation prompt to quickly audit an existing agent, identify specific weaknesses, and generate precise fixes.

```md
You are reviewing Data Access (DA) agent instructions for 5.1 stability.

INPUT
<instructions>
[PASTE CURRENT INSTRUCTIONS]
</instructions>

TASK
Concise audit. Identify ONLY issues and exact fixes.

CHECKS
- Step order: identify ambiguity, missing steps, or merged steps → propose atomic, numbered steps.
- Tool use: identify auto-calls, retries, or tool switching → add "use only in step X; no auto-retry".
- Grounding: detect inference, blending, or citation gaps → add "cite only retrieved; no inference; no cross-document stitching".
- Missing-data handling: if retrieval is empty or conflicting → add "stop and ask the user".
- Verbosity: identify chatty or explanatory output → replace with "return only the requested data/format".
- Contradictions or duplicates: resolve discrepancies; prefer explicit over implied.
- Vague verbs ("verify", "process", "handle", "clean"): replace with precise, observable actions.
- Safety: prohibit step reordering, optimization, or reinterpretation.

OUTPUT (concise)
- Header patch (3–6 lines)
- Top 5 changes (bullet list: "Issue → Fix")
- Example rewrite (≤10 lines) for the riskiest step
```

Use this pattern when:

- You're migrating an existing agent from GPT 5.0 to GPT 5.1 or later.
- You're unsure which parts of the instruction set are fragile or ambiguous.
- You want a repeatable evaluation process for multiple declarative agents across an organization.
- You need a quick way to identify which issues are structural, stylistic, or safety related.

## Related resources

- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Configure high-quality instructions for generative orchestration](/microsoft-copilot-studio/guidance/generative-mode-guidance)
