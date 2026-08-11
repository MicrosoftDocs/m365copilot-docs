---
title: Add custom evaluators to your agent evaluations
description: Learn how to author LLM-judge and code-only custom evaluators for the Microsoft 365 Copilot Agent Evaluations CLI and reference them from your datasets.
#customer intent: As a developer running agent evaluations, I want to author custom evaluators so that I can score agent responses against domain-specific criteria the built-in evaluators don't cover.
ms.date: 08/04/2026
author: jasonjoh
ms.author: jasonjoh
ms.reviewer: sakov
ms.topic: how-to
ms.localizationpriority: medium
---

<!-- cSpell:ignore prompty promptflow kwargs kwarg runevals evals setdefault emptyAgentResponse invalidEvaluatorResult evaluatorLoadError judgeRateLimited judgeTimeout evaluatorError -->

# Add custom evaluators to your agent evaluations

The Microsoft 365 Copilot Agent Evaluations CLI (`@microsoft/m365-copilot-eval`) includes a set of [built-in evaluators](evaluations-cli-evaluators.md). When the built-in evaluators don't cover your scenario, you can author *custom evaluators* to score agent responses against domain-specific criteria, such as regulatory compliance, brand tone, or a custom relevance rubric.

Two kinds of custom evaluators exist, and the CLI automatically distinguishes between them:

- **LLM-judge evaluators** (`<name>.py` and `<name>.prompty`) call a model to score the response. They need Microsoft Foundry configuration and use the 1-5 scale.
- **Code-only (non-LLM) evaluators** (`<name>.py` only, no `<name>.prompty`) are pure Python checks with no model call - for example, "fail if the response contains a forbidden term." They need no Microsoft Foundry configuration and can return any numeric score.

To use your own custom evaluators, create a `custom-evaluators/` folder at the root of your project (the directory you run the CLI from) and add one subfolder per evaluator. At run time, the CLI scans `<your_project>/custom-evaluators/` automatically and loads only the evaluators that your eval document references.

## Folder layout

Each custom evaluator lives in its own subfolder. An LLM-judge evaluator consists of two files; a code-only evaluator is just the `.py` file:

```text
<your_project>/
  custom-evaluators/
    professional_tone/            # LLM-judge: has a .prompty
      professional_tone.prompty   # the LLM judge prompt
      professional_tone.py        # the Python wrapper that runs it
    consistency_check/
      consistency_check.prompty
      consistency_check.py
    forbidden_terms/              # code-only: NO .prompty
      forbidden_terms.py          # pure Python check, no model call
```

The presence of `<name>.prompty` is the only discriminator: with it, the evaluator is an LLM judge; without it, it's code-only.

### Naming rules

- The folder name, evaluator name, and file basenames must match exactly.
- Names must match the pattern `^[a-zA-Z][a-zA-Z0-9_]*$` (a valid identifier: start with a letter, followed by letters, digits, or underscores).
- Names must not collide with built-in evaluator names (case-insensitive): `Relevance`, `Coherence`, `Groundedness`, `Similarity`, `ToolCallAccuracy`, `Citations`, `ExactMatch`, `PartialMatch`, `RetrievalQuery`, and `RetrievalResult`. To create a domain-tailored version of a built-in evaluator, prefix its name - for example, `domain_relevance` rather than `relevance`.

## Author an LLM-judge evaluator

An LLM-judge evaluator has two files: a `.prompty` file that defines the judge prompt and a `.py` wrapper that runs it.

### The .prompty file

A `.prompty` file is the LLM judge prompt. It has model configuration in YAML frontmatter above the `---` separator, then `system:` and `user:` sections below it. Variables referenced as `{{var}}` in the body map to the keyword arguments that your wrapper passes to the prompty flow.

The following example shows a minimal `professional_tone.prompty` file:

```yml
---
name: professional_tone
description: Scores professional tone 1-5.
model:
  api: chat
  parameters:
    temperature: 0.0
    max_tokens: 400
    response_format:
      type: json_object
inputs:
  user_prompt:
    type: string
  response:
    type: string
---
system:
You score professional tone 1 (hostile) to 5 (consistently professional).
Reply with only: {"score": <int 1-5>, "reason": "<one sentence>"}

user:
# User prompt
{{user_prompt}}

# Agent response
{{response}}
```

You must declare an `inputs:` block in the frontmatter that lists every variable your template uses. Without it, promptflow filters all keyword arguments out and your template renders with empty `{{var}}` substitutions - the model sees a blank prompt and you get an error or a nonsense score. Each input needs a `type:` value, which is typically `string`.

> [!NOTE]
> The promptflow runtime reserves `prompt` as an internal parameter, so avoid using `{{prompt}}` (and an `inputs.prompt` declaration) in your prompty template. Use a different variable name, such as `{{user_prompt}}`, and have your wrapper forward the value under that name when it calls the prompty flow.

### The .py wrapper

The Python module must export a class. The CLI dynamically imports the module and instantiates the first top-level class it finds. The class must match the following contract:

```python
class MyEvaluator:
    def __init__(self, *, model_config, threshold, options=None):
        # model_config:  AzureOpenAIModelConfiguration
        # threshold:     numeric pass/fail threshold
        # options:       dict of extra config from the eval document
        ...

    def __call__(
        self,
        *,
        prompt: str = "",
        expected_response: str = "",
        response: str = "",
        context: str = "",
        **_,  # accept extras for forward compatibility
    ) -> dict:
        # On success, return a flat dict with just:
        # {
        #     "score":  <integer 1-5>,
        #     "reason": "<explanation>",
        # }
        ...
```

The framework owns `result` and `threshold`: it derives `result = "pass" if score >= threshold else "fail"` and attaches `threshold`, so you don't return them. The CLI rewrites the `score` key to your evaluator's folder name when it merges results into the unified output, so the score appears as `<folder_name>` in the JSON, CSV, and HTML reports.

You don't need to wrap your `__call__` in `try`/`except`. If your wrapper raises an exception, the CLI catches it and emits an `error` result for that evaluator while the rest of the run continues. To control the error message yourself, return a dict through the dedicated error channel (only the `error` message is kept; any other keys are dropped):

```python
{ "error": "<explanation>" }
```

#### Score constraints

For an LLM-judge evaluator, `score` must be an integer in the range `[1, 5]` (the same 1-5 scale as the built-in LLM evaluators). Float values that are mathematically integers (for example, `4.0`) are accepted and normalized. Anything outside this range, a non-numeric value, or a missing `score` key produces an `error` result; the eval run continues with the other evaluators.

### Absorb constructor parameters you don't use

The framework always passes `threshold` and `options` to `__init__` (plus `model_config` for LLM-judge evaluators). Python requires your `__init__` to accept every keyword it's called with, but you don't have to name the ones you ignore. Name a parameter only if you actually use it. Absorb anything else with a `**_` catch-all:

```python
# Names only what it uses (options), absorbs the rest (threshold, and so on):
class ForbiddenTermsEvaluator:
    def __init__(self, *, options=None, **_):
        self._terms = (options or {}).get("terms", [])

# A check that needs no configuration at all - absorb everything:
class NonEmptyEvaluator:
    def __init__(self, **_):  # ignores model_config, threshold, options
        pass

    def __call__(self, *, response: str = "", **_) -> dict:
        return {
            "score": 1 if response.strip() else 0,
            "reason": "non-empty" if response.strip() else "empty response",
        }
```

Don't name a subset of parameters without a catch-all. For example, `def __init__(self, *, options=None)` raises `TypeError`, because the framework still passes `threshold=` and nothing accepts it. Add `**_` (or name `threshold`) to fix it.

### Keyword argument conventions

The CLI calls your `__call__` method with the following fixed set of keyword arguments. All four are passed to your evaluator (the LLM judge), not to the agent under test.

| Argument | What it is | Typical use in a judge |
|-------------------|--------------------------------------------------------------------|--------------------------------------------------|
| `prompt` | The user's question or instruction sent to the agent. | Check responsiveness. |
| `response` | The agent's actual answer (the thing being scored). | The subject of evaluation. |
| `expected_response` | A reference or ideal answer, from the `expected_response` field. | Check accuracy against the reference. |
| `context` | Grounding or source material the answer should be faithful to, from the `context` field. | Check groundedness (no contradictions or hallucinations). |

The `prompt`, `expected_response`, and `context` arguments come directly from the current item (or turn) in your eval document. The `response` argument is the agent's actual output, captured when the CLI sends `prompt` to the agent under test. In particular, `context` is grounding for the judge only - the agent never sees or retrieves it.

The `expected_response` and `context` fields are optional in the eval document. When they're absent, the CLI passes an empty string. Because the CLI always passes all four arguments, declare the ones you use and absorb the rest with `**_`. A `__call__` method that omits one of the four without a `**_` catch-all raises `TypeError`, and that evaluator reports an `error` result.

### Prepare model_config for load_flow

The `promptflow.client.load_flow` runtime needs a `type` field on the configuration dict to pick the right connection class (`AzureOpenAI` versus `OpenAI`). The `AzureOpenAIModelConfiguration` that the CLI passes you doesn't carry that field, so add it before you call `load_flow`:

```python
prepared_config = dict(model_config)
prepared_config.setdefault(
    "type",
    "azure_openai" if "azure_endpoint" in prepared_config else "openai",
)
self._flow = load_flow(source=prompty_path, model={"configuration": prepared_config})
```

Without this step, you see the misleading error `Not Support connection type None for embedding api` at invocation time.

## Author a code-only evaluator

A code-only evaluator is a folder with only `<name>.py` and no `<name>.prompty`. The CLI detects the missing prompty and treats the evaluator as a pure Python check. It never calls a model, so a run that uses only code-only evaluators needs no Microsoft Foundry configuration.

Use code-only evaluators for deterministic, rule-based checks: forbidden-term scans, regex or format validation, length limits, JSON-schema conformance, and so on.

Most code-only evaluators are a simple pass/fail check. The idiomatic way to express that check is to return `score: 1` for pass and `score: 0` for fail, and leave the default threshold of `1` in place. The framework then derives `result = "pass"` when `score` (1) is greater than or equal to `threshold` (1), and `"fail"` when `score` (0) is less than `threshold` (1).

The `__init__` method for a code-only evaluator omits `model_config`:

```python
class ForbiddenTermsEvaluator:
    def __init__(self, *, threshold, options=None):
        self._terms = (options or {}).get("terms", [])

    def __call__(self, *, response: str = "", **_) -> dict:
        hit = [t for t in self._terms if t.lower() in response.lower()]
        # Default threshold is 1, so 1 -> pass, 0 -> fail.
        return {
            "score": 0 if hit else 1,
            "reason": f"Found: {', '.join(hit)}" if hit else "clean",
        }
```

The following table summarizes how code-only evaluators differ from LLM-judge evaluators.

| Aspect | LLM-judge (`.py` + `.prompty`) | Code-only (`.py` only) |
|-----------------------|--------------------------------|-----------------------------------------|
| `__init__` arguments | `model_config`, `threshold`, `options` | `threshold`, `options` (no `model_config`) |
| `score` | Integer 1-5 | Any number, no 1-5 clamp (typically 0 or 1) |
| Default threshold | 3 | 1 |
| Foundry configuration | Required | Not required |

### Result contract

The framework owns `result` and `threshold` for both kinds of evaluator. On success, return just `{"score", "reason"}`; the framework derives `result = "pass" if score >= threshold else "fail"` and attaches `threshold`. To signal a failure, raise an exception or return `{"error": "<msg>"}`.

Scores must be oriented so that higher is better, because the framework passes when `score >= threshold`. With the default non-LLM threshold of `1`, encode a boolean outcome as `1` (pass) or `0` (fail). Set the threshold in the eval document to match whatever scale your score uses - there's no `[1, 5]` constraint for code-only evaluators. For a graded check, return a fractional score and set a fractional threshold. For example, a partial-match evaluator that returns a ratio in `[0, 1]` would set `threshold: 0.7` to require a 70% match.

> [!TIP]
> Because a missing `.prompty` file silently turns an evaluator into a code-only one, the CLI guards against an accidentally omitted prompty: if a `.py`-only evaluator's code references LLM machinery (`load_flow`, `promptflow`, `model_config`, or `.prompty`), the CLI logs a warning that suggests you might have forgotten the prompty file. The warning never blocks the run.

## Reference custom evaluators from an eval document

Add custom evaluators to the `evaluators` map, just like built-in evaluators. The threshold defaults to `3` for LLM-judge evaluators (the 1-5 scale) and `1` for code-only evaluators. Set the threshold explicitly if you want a different cutoff:

```json
{
  "schemaVersion": "1.7.0",
  "items": [
    {
      "prompt": "How do I file an expense report?",
      "evaluators": {
        "Relevance": {},
        "professional_tone": { "threshold": 4 },
        "consistency_check": {
          "threshold": 3,
          "options": { "samples": 5 }
        }
      }
    }
  ]
}
```

Use `evaluators_mode` (`extend` or `replace`) exactly as you would with built-in evaluators to control whether the custom evaluator runs alongside the defaults or replaces them. For more information, see [Configure evaluators](evaluations-cli-create-tests.md#configure-evaluators).

## Security model

Custom evaluators run with the same permissions as the CLI itself. Review the code in any custom evaluator before you add it to your project - it can do anything that Python can do.

## Learn more about the .prompty format

The `.prompty` format is an open Microsoft standard for LLM prompts. For the full list of frontmatter fields, model parameters, template syntax, and supported providers, see the following resources:

- [prompty.ai](https://prompty.ai) - overview and how-to guides.
- [microsoft/prompty](https://github.com/microsoft/prompty) - source and TypeSpec schema.

The `model.parameters` block passes straight through to the Chat Completions API, so parameters like `temperature`, `max_tokens`, `top_p`, `response_format`, `seed`, and `stop` are all available.

## Troubleshooting

Use the following table to resolve common custom evaluator issues.

| Symptom | Likely cause and next step |
|---------|----------------------------|
| `Unknown evaluator '<name>'` | Check that the folder is at `<your_project>/custom-evaluators/<name>/`, that the file basenames match the folder name, and that you're running the CLI from the project root. |
| `Custom evaluator '<name>' is missing required file '<name>.py'` | Every evaluator folder must contain `<name>.py`. A `<name>.prompty` file is needed only for LLM-judge evaluators; omit it for code-only ones. |
| `Custom evaluator '<name>' failed to import` | A Python syntax error or a missing dependency in your `.py` file. The error message includes the underlying exception. |
| Result shows `error` with reason `could not parse score` | The model didn't return well-formed JSON. Verify that your prompty has `response_format: { type: json_object }` (or an equivalent JSON schema) and that the template explicitly asks for the `{"score": ..., "reason": ...}` shape. |

For richer logs, run the CLI with `--log-level debug`.

## Related content

- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Evaluators reference](evaluations-cli-evaluators.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
- [CLI reference](evaluations-cli-reference.md)
- [Troubleshooting and support](evaluations-cli-troubleshooting.md)
