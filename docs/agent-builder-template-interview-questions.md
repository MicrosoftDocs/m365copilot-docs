---
title: Create an Interview Question Assistant agent from a template
description: Learn how to create a declarative agent from the *----*  template in Copilot Studio agent builder
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 04/01/2025
---

# Use the Interview Question Assistant template to build an agent

## Overview

The Interview Question Assistant declarative agent template is designed to support hiring managers and interviewers by streamlining the process of drafting high-quality interview questions. The purpose of this agent is to help you quickly create effective interview questions.

## Prerequisites

[!INCLUDE [agent-template-prerequisites](includes/agent-template-prerequisites.md)]

## Capabilities

The Interview Question Assistant support multiple languages and:can:

- Help create effective and relevant interview questions that are:
    - tailored to specific roles and job descriptions
    - clear, concise, and aligned to the given job requirements
- Adapt the complexity of questions based on the level of the specified position
- Generate both questions and sample answers based on the job descriptions the user provides
- Provide guidance on best practices for interviewing, such as offering tips on how to frame questions to assess various competencies and skills

## Use cases

These agents are useful for scenarios such as:

| **Scenario** | **Description** |
| -----------  | -----------  |
| General interview preparation  | Offers guidance on what makes a good interview question and how to create them |
| Role-specific interview preparation | Provides tailored interview questions and sample answers for specific roles, such as software developer positions or sales jobs  |
| Template-based question generation   | Uses existing templates to create interview questions for a variety of roles |
| Team coordination   | Helps interview teams coordinate and align their questions  |
| Interviewer training   | Helps new interviewers understand best practices and guidelines for conducting interviews |
| Continuous improvement   | Provides feedback and suggestions for improving interview questions based on past interviews and outcomes. |

## Extension opportunities

You can enhance the functionality of your Interview Question Assistant agents by connecting to additional resources via Microsoft Graph connectors, Power Platform connectors, or API plugins, depending on the source system in use. Here are some ideas:

- **Scope your agent to a particular topic:** Connect a SharePoint site or files containing content relevant to the topic to create specialized Interview Assistant agents.
- **Link to your interview training materials:** To expand your Interview Assistant's knowledge base and increase its usefulness, consider using Microsoft Graph Connectors or APIs to connect your Interview Assistant to your interview training tools.

<!-- Note about IT involvement -->
[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

## Limitations

[!INCLUDE [agent-template-limitations](includes/agent-template-limitations.md)]
- This agent doesn't provide interview advice. The answers provided are based on configured knowledge sources or general knowledge and don't reflect the opinions of Microsoft.
- While the agent can generate questions based on templates and job descriptions, it might not fully capture the unique nuances of every role. Customize questions as needed.
- Ensure that the interview questions generated comply with local labor laws and regulations.
