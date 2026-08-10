---
title: Evaluators reference for Agent Evaluations CLI
description: Learn about the evaluation metrics available in the Microsoft 365 Copilot Agent Evaluations CLI, including LLM-based, retrieval, and string-matching evaluators.
ms.date: 08/04/2026
author: jasonjoh
ms.author: jasonjoh
ms.reviewer: sakov
ms.topic: concept-article
ms.localizationpriority: medium
---

<!-- cSpell:ignore Likert BLEU -->

# Evaluators reference for Agent Evaluations CLI

The Microsoft 365 Copilot Agent Evaluations CLI includes a set of evaluators that automatically score your agent's responses. Each evaluator measures a different aspect of quality, from semantic relevance to exact string matching. This article describes each evaluator, its scoring behavior, configuration options, and how to use it in your test datasets.

For information about how to configure evaluators in your datasets, see [Configure evaluators](evaluations-cli-create-tests.md#configure-evaluators).

You can find the evaluation dataset schema in [JSON Schema](https://json-schema.org/) format on [GitHub](https://raw.githubusercontent.com/microsoft/m365-copilot-eval/refs/heads/main/schema/v1/eval-document.schema.json).

## Evaluator summary

The following table summarizes all available evaluators.

| Evaluator                           | Type         | Scale        | Default threshold | Enabled by default | Required fields               |
|-------------------------------------|--------------|--------------|-------------------|--------------------|-------------------------------|
| [Relevance](#relevance)             | LLM-based    | 1-5          | 3                 | Yes                | `prompt`                      |
| [Coherence](#coherence)             | LLM-based    | 1-5          | 3                 | Yes                | `prompt`                      |
| [Groundedness](#groundedness)       | LLM-based    | 1-5          | 3                 | No                 | `prompt`                      |
| [Similarity](#similarity)           | LLM-based    | 1-5          | 3                 | No                 | `prompt`, `expected_response` |
| [RetrievalQuery](#retrievalquery)   | Non-LLM      | Pass/fail    | N/A               | No                 | `prompt`, evaluator config    |
| [RetrievalResult](#retrievalresult) | Non-LLM      | Proportional | 1.0               | No                 | `prompt`, evaluator config    |
| [Citations](#citations)             | Count-based  | >= 0         | 1                 | No                 | `prompt`                      |
| [PartialMatch](#partialmatch)       | String match | 0.0-1.0      | 0.5               | No                 | `prompt`, `expected_response` |
| [ExactMatch](#exactmatch)           | String match | Boolean      | N/A               | No                 | `prompt`, `expected_response` |

## LLM-based evaluators

LLM-based evaluators use an Azure OpenAI model in your Microsoft Foundry project (configured via your environment variables) to judge the quality of the agent's response. These evaluators are powered by the [Azure AI Evaluation SDK](/azure/ai-studio/concepts/evaluation-metrics-built-in). Scores range from 1 to 5 on a Likert scale, where higher values indicate better quality. By default, a score of 3 or higher is required to pass. You can change the required score in your test configuration.

### Relevance

The **Relevance** evaluator assesses how well the agent's response addresses the user's query. It evaluates whether the response directly and completely answers the question that was asked.

- **Enabled by default:** Yes
- **Scale:** 1-5 (Likert)
- **Default threshold:** 3
- **Required fields:** `prompt`
- **Ground truth required:** No

The Relevance evaluator doesn't require an `expected_response` - it evaluates the relationship between the query and the response only.

#### Relevance sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "default_evaluators": {
    "Relevance": {}
  },
  "items": [
    {
      "prompt": "What are the key features of our enterprise plan?",
      "expected_response": "The enterprise plan includes advanced security, unlimited storage, 24/7 support, and custom integrations."
    }
  ]
}
```

### Coherence

The **Coherence** evaluator measures the logical and orderly presentation of ideas in the agent's response. It evaluates whether the response has clear connections between sentences, appropriate transitions, and a logical sequence of ideas that is easy to follow.

- **Enabled by default:** Yes
- **Scale:** 1-5 (Likert)
- **Default threshold:** 3
- **Required fields:** `prompt`
- **Ground truth required:** No

#### Coherence sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "default_evaluators": {
    "Coherence": {}
  },
  "items": [
    {
      "prompt": "Explain the process for submitting an expense report.",
      "expected_response": "To submit an expense report, first collect your receipts. Then open the expense portal, create a new report, attach your receipts, and submit for manager approval."
    }
  ]
}
```

### Groundedness

The **Groundedness** evaluator checks whether the agent's response is consistent with and supported by the provided grounding context. It focuses on precision by verifying that the response doesn't contain claims or information that go beyond what the retrieved documents support.

- **Enabled by default:** No
- **Scale:** 1-5 (Likert)
- **Default threshold:** 3
- **Required fields:** `prompt`, `expected_response`
- **Ground truth required:** No

Use the Groundedness evaluator to detect hallucinations or unsupported claims in your agent's responses.

#### Groundedness sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "default_evaluators": {
    "Relevance": {},
    "Groundedness": {}
  },
  "items": [
    {
      "prompt": "What is our company's remote work policy?",
      "expected_response": "Employees can work remotely up to 3 days per week with manager approval."
    }
  ]
}
```

### Similarity

The **Similarity** evaluator measures the degree of semantic similarity between the agent's response and a provided `expected_response` (ground truth). Unlike token-overlap metrics such as F1 or Bilingual Evaluation Understudy (BLEU), it focuses on meaning and broader context rather than surface-level word matches.

- **Enabled by default:** No
- **Scale:** 1-5 (Likert)
- **Default threshold:** 3
- **Required fields:** `prompt`, `expected_response`
- **Ground truth required:** Yes

You need to configure `expected_response` in your dataset items for the Similarity evaluator.

#### Similarity sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "default_evaluators": {
    "Similarity": {}
  },
  "items": [
    {
      "prompt": "What is Microsoft Graph?",
      "expected_response": "Microsoft Graph is a unified API endpoint that provides access to data and intelligence in Microsoft 365 services."
    }
  ]
}
```

## Retrieval evaluators

Retrieval evaluators validate the end-to-end retrieval pipeline of your Microsoft 365 Copilot agent. They inspect how the agent translates user queries into retrieval operations and whether the expected resources appear in the results. These evaluators don't use an LLM judge - they perform deterministic checks on retrieval execution data.

### RetrievalQuery

The **RetrievalQuery** evaluator validates that Copilot correctly translated user intent into retrieval queries. It inspects the `queryString` values within the normalized `retrieval_executions[]` and verifies they match expected patterns.

- **Enabled by default:** No
- **Scale:** Pass/fail
- **Default threshold:** N/A
- **Required fields:** `prompt`, evaluator configuration
- **Ground truth required:** No

#### RetrievalQuery configuration options

| Option | Type | Required | Description |
|---|---|---|---|
| `capability` | string | Yes | The retrieval capability to scope which executions are examined (for example, `"OneDriveAndSharePoint"`, `"Email"`, `"GraphConnectors"`). |
| `selector` | string | Yes | A case-insensitive substring used to identify the target query within the retrieval executions. |
| `includes` | string | Yes | Substrings that MUST all appear in the matched query. |
| `excludes` | string | Yes | Substrings that MUST NOT appear in the matched query. |

#### RetrievalQuery sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "items": [
    {
      "prompt": "Find the Q4 sales report in SharePoint",
      "expected_response": "Here is the Q4 sales report.",
      "evaluators": {
        "RetrievalQuery": {
          "capability": "OneDriveAndSharePoint",
          "selector": "Q4 sales report",
          "includes": ["projections", "profit"],
          "excludes": ["FileType:OneNote"]
        }
      }
    }
  ]
}
```

### RetrievalResult

The **RetrievalResult** evaluator validates that expected resources actually appear in the documents, messages, and items that retrieval executions return. It checks whether specific text snippets are present in retrieval hit extracts within a configurable rank threshold.

- **Enabled by default:** No
- **Scale:** Proportional (0.0-1.0)
- **Default threshold:** 1.0 (all checks must pass)
- **Required fields:** `prompt`, evaluator configuration
- **Ground truth required:** No

The score is proportional to the number of expected items found. For example, if 2 of 3 expected items are found, the score is 0.67. However, a pass requires all checks to succeed (threshold is always 1.0). You must configure at least one of `expected_items` or `min_expected_count`.

#### RetrievalResult configuration options

| Option | Type | Required | Description |
|---|---|---|---|
| `expected_items` | array | Conditional | Array of objects specifying expected results. Each object can include `retrievalExtract_contains` (a text snippet to match in retrieval hit extracts). You must configure at least one of `expected_items` or `min_expected_count`. |
| `expected_items[].retrievalExtract_contains` | string | No | A text snippet that must appear in a retrieval hit extract. |
| `min_expected_count` | integer | Conditional | Minimum number of results that must be retrieved. You must configure at least one of `expected_items` or `min_expected_count`. |
| `max_rank` | integer | No | Maximum rank position to consider when matching expected items. Defaults to `10`. |

#### RetrievalResult sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "items": [
    {
      "prompt": "Find recent emails about the Contoso project",
      "expected_response": "Here are the recent emails about the Contoso project.",
      "evaluators": {
        "RetrievalResult": {
          "expected_items": [
            { "retrievalExtract_contains": "update" },
            { "retrievalExtract_contains": "budget" }
          ],
          "max_rank": 5,
          "min_expected_count": 2
        }
      }
    }
  ]
}
```

## String and count-based evaluators

These evaluators use deterministic string matching or counting logic. They don't require an LLM and run locally.

### Citations

The **Citations** evaluator counts the number of citation references in the agent's response, such as `[1]`, `[2]`, or hyperlink-style citations. It checks that the agent properly attributes its claims to sources. Set the threshold to the expected number of citations.

- **Enabled by default:** No
- **Scale:** >= 0 (count)
- **Default threshold:** 1
- **Required fields:** `prompt`
- **Ground truth required:** No

The score equals the citation count, and a minimum of 1 citation is required to pass by default.

#### Citations configuration options

| Option | Type | Required | Description |
|---|---|---|---|
| `citation_format` | string | No | Specifies the expected citation format, such as `"mixed"`. |

#### Citations sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "items": [
    {
      "prompt": "What is our return policy?",
      "expected_response": "Our return policy allows returns within 30 days [1].",
      "evaluators": {
        "Citations": {
          "threshold": 2,
          "citation_format": "mixed"
        }
      }
    }
  ]
}
```

### PartialMatch

The **PartialMatch** evaluator measures the degree of textual overlap between the agent's response and the `expected_response` using token-level similarity (analogous to an F1-score approach). This evaluator is useful when you expect the response to contain key phrases or information from the expected answer but don't need a verbatim match.

- **Enabled by default:** No
- **Scale:** 0.0-1.0
- **Default threshold:** 0.5
- **Required fields:** `prompt`, `expected_response`
- **Ground truth required:** Yes

The score ranges from 0.0 (no overlap) to 1.0 (complete match).

#### PartialMatch sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "items": [
    {
      "prompt": "Who is the CEO of Contoso?",
      "expected_response": "The CEO of Contoso is Jane Smith.",
      "evaluators": {
        "PartialMatch": {}
      }
    }
  ]
}
```

### ExactMatch

The **ExactMatch** evaluator performs a direct string comparison between the agent's response and the configured `expected_response`. It returns a boolean pass or fail - either the response matches exactly or it doesn't. This evaluator is useful for prompts with deterministic or formulaic expected answers.

- **Enabled by default:** No
- **Scale:** Boolean (pass or fail)
- **Default threshold:** N/A
- **Required fields:** `prompt`, `expected_response`
- **Ground truth required:** Yes

#### ExactMatch configuration options

| Option | Type | Required | Description |
|---|---|---|---|
| `case_sensitive` | boolean | No | Controls whether the comparison is case-sensitive. Defaults to `true`. |

#### ExactMatch sample dataset

```json
{
  "schemaVersion": "1.6.0",
  "items": [
    {
      "prompt": "What is 2 + 2?",
      "expected_response": "4",
      "evaluators": {
        "ExactMatch": { "case_sensitive": false }
      }
    }
  ]
}
```

## Related content

- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
- [CLI reference](evaluations-cli-reference.md)
