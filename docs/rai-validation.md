---
title: Responsible AI Validation Checks for Declarative Agents
description: Learn about responsible AI validation checks that run on agents during manifest validation and user propmpt processing.
author: lauragra
ms.author: lauragra
ms.topic: conceptual
ms.date: 12/11/2024
---

# Responsible AI validation checks

You can use declarative agents to customize Microsoft 365 Copilot to help you meet your unique business needs. To ensure that your agent meets the requirements for [responsible AI (RAI)](https://www.microsoft.com/en-us/ai/tools-practices), validation checks run on your agents at the following times:

- During manifest validation, when you sideload or publish your agent.
- During the processing of a user prompt.

This article provides information about the validation checks that run on your agent during the RAI validation checks and provides details about the validation errors that can occur.

## Agent validation checks

The following RAI components components run as part of the declarative agent validation process:

- The RAI LLM prompt
- Jailbreak classifier
- Offensiveness classifier

## RAI validation failure codes

The following table lists the codes for RAI-related validation failures and the corresponding reason for the failure.

| Failure code | Description |
|:-------------|:------------|
| 22           | **Harms others** - Encourages or supports hate, violence, sexual, self-harm, or any illegal or unethical actions, such as anarchy, terrorism, hacking, and so on.            |
| 23           | **Creates bias** - Maintains or worsens unfair generalization, bias, stereotypes of social groups, racism, and so on.|
| 24           |  **Reveals identity** - Collects specific real-world age, date of birth, gender, race, ethnicity, religion, nationality, immigration status, refugee status, and so on of an individual to expose or reveal it to others or send it elsewhere. |
| 27           |  **Expresses beliefs** - Shows or seeks to convince users of religious, philosophical, political, or other personal or controversial beliefs, opinions, or affiliations, such as religious organizations, political parties, and so on.|
| 28           | **Shows political opinion** - Politically opinionated, encouraging political votes, elections, political campaigns, and so on.|
| 29           | **Describes sex life and orientation** - Talks about sexual orientation, sexual or gender identity, sex life, and so on.|
| 32           | **Involves hiring** - Evaluates resumes or job applications to automate hiring decisions. Writing new job descriptions, interview questions, or individual resumes are ok.          |
| 33           | **Uses face recognition** - Recognizes faces, determines emotions from faces, and so on.|
| 34           | **Provokes arguments** - Has hostile or aggressive or dismissive content, stubborn in a belief, attempting to prove some opinions, intends to mislead or lie, and so on.            |
| 35           | **Jailbreak** - Leaking base prompts, ignoring or superseding guidelines, conspiracy theory revealing the hidden truth about topics such as government, school, climate change, chemtrails, COVID, and so on.|
| 36           | **Violates copyrights** - Copies or reproduces intellectual property protected by copyrights, such as copyrighted books, code, news, songs, and so on.|
| 40           | **Evaluates human performance** - Involves analyzing performance data, generating business-oriented detailed human evaluations, ensuring accuracy and relevance, focusing on constructive or negative feedback, acknowledging or disclaim efforts, and providing feedback to individual need.|

## Validation examples

## Related content

- [Teams Store AI validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#apps-powered-by-artificial-intelligence?context=/microsoft-365-copilot/extensibility/context)