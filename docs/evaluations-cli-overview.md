---
title: Agent Evaluations CLI overview
description: Learn how to evaluate Microsoft 365 Copilot agents using automated testing and AI-powered metrics.
ms.date: 04/22/2026
author: lauragra
ms.author: lauragra
ms.topic: overview
ms.localizationpriority: high
---

# Agent Evaluations CLI overview

The Microsoft 365 Copilot Agent Evaluations CLI (@microsoft/m365-copilot-eval) helps you test, measure, and improve the quality of your agents through automated prompt evaluation and AI-based scoring.

This tool enables you to run structured evaluations, analyze results, and iterate on your agent behavior with measurable feedback.

## What you can do

The evaluation tool provides the following capabilities:

- Run batch and interactive evaluations.
- Automatically score responses using Azure AI + machine learning evaluation metrics.
- Test using JSON datasets, inline prompts, or interactive input.
- Generate reports in HTML, JSON, or CSV formats. 

## Evaluation metrics

Each response is scored using standard evaluation metrics:

- **Relevance (1–5):** How well the response addresses the prompt.
- **Coherence (1–5):** Logical structure and clarity.
- **Groundedness (1–5):** Use of supporting sources or citations.
- **Tool call accuracy (1–5):** Correct use of connected tools.
- **Citations (0–1):** Presence of correct citations.

## How the evaluation workflow works

Evaluations follow a consistent workflow:

1. Install and configure the CLI.
1. Provide environment configuration and credentials.
1. Create a dataset of test prompts.
1. Run evaluations against your agent.
1. Review results and iterate.

## Required environment variables

The evaluation tool uses environment variables to authenticate and connect to your tenant and Azure OpenAI in Foundry Models resource.

| Variable | Description |
|----------|------------|
| TENANT_ID | Microsoft Entra tenant ID where your agent is deployed |
| AZURE_AI_OPENAI_ENDPOINT | Azure OpenAI endpoint URL |
| AZURE_AI_API_KEY | Azure OpenAI API key |
| M365_AGENT_ID (optional) | Explicit agent ID for evaluation |

These values enable authentication and allow the tool to run LLM-based evaluation scoring.

## Related content

- [Quickstart: Run your first evaluation](evaluations-cli-quickstart.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
- [CLI reference](evaluations-cli-reference.md)
- [Troubleshooting and support](evaluations-cli-troubleshooting.md)