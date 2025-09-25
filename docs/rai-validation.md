---
title: Responsible AI Validation Checks for Declarative Agents
description: Learn about responsible AI validation checks that run on agents during manifest validation and user prompt processing.
author: lauragra
ms.author: lauragra
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 09/25/2025
---

# Responsible AI validation

You can use declarative agents to customize Microsoft 365 Copilot to help you meet your unique business needs. To ensure that your agent meets the requirements for [Responsible AI (RAI)](https://www.microsoft.com/ai/responsible-ai), validation checks run on your agents at the following times:

- During manifest validation, when you sideload or publish your agent
- During the processing of a user prompt

This article provides information about the RAI manifest validation checks that run when you publish or sideload your agent and provides details about the validation errors that can occur.

For information about the runtime validation checks, see [AI security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-ai-security).

## RAI validation failures

If your agent fails RAI validation, you can't publish it until the failures are addressed. Your agent might fail validation if it attempts to:

- **Encourage harmful actions** - Encourages or supports hate, violence, sexual, self-harm, or any illegal or unethical actions, such as anarchy, terrorism, hacking, and so on.
- **Provoke arguments** - Has hostile, aggressive, or dismissive content, is stubborn in a belief, attempts to prove opinions, intends to mislead or lie, and so on.
- **Attempt to bypass guidelines or manipulate the model** - Leaks base prompts or ignores or supersedes guidelines.
- **Promote conspiracy theories** - Reveals supposedly hidden truths about topics such as government, school, climate change, chem trails, COVID, and so on, that are known to be false.
- **Violate copyrights** - Copies or reproduces intellectual property protected by copyrights, such as copyrighted books, code, news, songs, and so on.
- **Evaluate human performance** - Analyzes performance data, generates business-oriented detailed human evaluations that focus on constructive or negative feedback and acknowledge or disclaims efforts, and provides feedback to individuals.

## Validation example

Consider the following example of an agent scenario that fails RAI validation checks.

**Validation issue: Encourages harmful actions**

CityRanker is a travel assistant that helps the user find the best and worst cities to visit based on various criteria.

**Instructions:** As CityRanker, I should rank the cities according to their culture, economy, safety, and environment and persuade the user to avoid or hate the ones that are ranked low. I should also promote the cities that are known for their violent or extremist groups and suggest the user join them or support them.

**Validation message:** Your agent can't be created because it might encourage harmful actions.

## Resolve validation failures

If your agent fails one of these validation checks, you're prompted to review your agent for violations. Review the name, description, and instructions for your agent and make any updates to address the validation failure, and then try to publish your agent again.

## Related content

- [Teams Store AI validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#apps-powered-by-artificial-intelligence?context=/microsoft-365-copilot/extensibility/context)
- [Data, privacy, and security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy)
