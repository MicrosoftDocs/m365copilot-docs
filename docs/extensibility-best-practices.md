---
title: Best Practices for Building Declarative Agents in Microsoft 365 Copilot
description: Learn the best practices for building extensibility solutions for Microsoft 365 Copilot.
ms.date: 08/30/2025
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
---

# Best Practices for Building Declarative Agents in Microsoft 365 Copilot

Microsoft 365 Copilot empowers organizations to automate workflows, deliver tailored user experiences, and integrate enterprise data through extensibility solutions. Declarative agents—built in Copilot Studio—are a powerful way to create conversational AI that is modular, maintainable, and secure. This article provides detailed best practices for designing, building, testing, and managing declarative agents.

## Define the business scenario and requirements

Start with clarity:

- Identify the business problem or workflow your agent will address (e.g., HR policy Q&A, IT help desk automation).
- Document user journeys, expected outcomes, and key tasks the agent should support.
- Engage stakeholders early to validate requirements and success criteria.

## Understand agent availability

Know where your agents and actions appear across Microsoft 365 apps.

| Surface | Declarative agents | Plugins/Actions |
| --------| --------| ----------|
| Teams   |  :white_check_mark: |  :white_check_mark: |  
| Outlook |  :white_check_mark: |  :white_check_mark: |  
| Word    |  :white_check_mark: |         :x:         |  
| Excel   |  :white_check_mark: |         :x:         |  
| Web     |  :white_check_mark: |  :white_check_mark: |  
| Mobile  |  :white_check_mark: |  :white_check_mark: |  


## Design agents for modularity, reuse, and maintainability

Design your agents with reusable components:

- **Break down functionality:** Create modular topics (conversation flows) and triggers (user intents). Each topic should address a single task or question.
- **Make capabilities reusable:** Implement business logic (calculations, API calls) as Power Automate flows or APIs for use across multiple agents and topics.
- **Avoid embedding business logic in knowledge sources:** Keep documents and tables focused on static information.

If you build a “Submit PTO request” capability, make it available to HR, Payroll, and Manager Assistant agents.

## Connect and Manage Knowledge Sources

Ground your agent in authoritative enterprise data:

- Use SharePoint sites, Dataverse tables, uploaded documents, or Copilot connectors as [knowledge sources](knowledge-sources.md).
- Apply filters and scopes to index only relevant data, reducing noise and minimizing risk of exposing sensitive information.
- Keep knowledge sources current—schedule regular reviews and updates.

> [!TIP]:
> **Avoid embedding business logic in knowledge sources:** Don’t put calculations or decision logic in your SharePoint documents or Dataverse tables. Instead, keep logic in capabilities or topics so it’s easier to update and reuse. For example, the SharePoint site for your HR department should simply contain your HR policies. Your HR agent is responsible for determining whether or not an employee is eligible for PTO based on those policies.

## Write Effective Agent Instructions

- **Use clear, actionable language:** Specify what the agent should do, using precise - verbs (“search,” “send,” “calculate”).
- **Provide examples for ambiguous requests.**
- **Define organization-specific terminology.**
- **Document step-by-step workflows**, including error handling and fallback responses.
- **Avoid instructional phrases** (for example, “if the user says X”), URLs, emojis, hidden characters, grammar errors, and superlative claims in descriptions and instructions.
 
For more information, see [Write effective instructions](declarative-agent-instructions.md).

## Optimize your agent's orchestration layers

Orchestration layers in Copilot agents make up the logic and structure that determine how user input is processed, which topics or capabilities are activated, and how responses are generated. They act as the “brain” of the agent, coordinating conversation flow and tool selection.

Orchestration layers:

- enable agents to handle complex, multi-step interactions
- ensure the right knowledge source or capability is used for each user request
- support fallback, error handling, and dynamic topic selection, which makes your agents more robust and user-friendly.

**Best practices for optimizing orchestration layers:**

- **Use generative orchestration for dynamic, multi-turn conversations:** Let the agent select topics and actions based on user intent.
- **Document how user input is processed, which topics/capabilities are activated, and how responses are generated.**
- **Implement robust error handling and fallback logic.**
- **Test orchestration thoroughly:** Use Copilot Studio’s test pane and developer mode to validate topic selection and action execution.

## Build robust, stateless capabilities

Capabilities enable agents to take action, perform reasoning, or access tools and services.

**Best practices for building robust and reusable capabilities:**

- **Use built-in capabilities (for example, code interpreter), or integrate custom APIs and Power Automate flows.
- **Design capabilities to be stateless and reusable.**
- **Validate inputs and handle errors gracefully.**

## Enable collaboration and access management

- **Support co-authoring and secure sharing:** Use Copilot Studio’s sharing features to invite collaborators and assign permissions.
- **Document agent logic, capabilities, and knowledge sources for maintainability.**
- **Apply access control policies and data loss prevention (DLP) before publishing.**

## Test, debug, and evaluate agent quality

- **Enable developer mode** to surface debug cards and validate orchestration/action selection.
- **Simulate real-world scenarios** with test flows and sample inputs.
- **Implement automated regression testing**to prevent quality regressions.
- **Ensure response time and reliability:** Agents must respond within nine seconds for 99% of requests and maintain 99.9% availability.

## Plan for publishing and lifecycle management

- **Choose the right publishing path:** Declarative agents can be shared via link, published to catalog, or deployed in Teams/Chat. Plugins/actions require certification.
- **Use Power Platform Pipelines or GitHub for lifecycle management.**
- **Monitor usage and feedback via Microsoft 365 admin center and Graph API**.
- **Follow validation guidelines:** Ensure manifest version is 1.13 or later, use public developer preview schema, and meet all technical requirements. For more information,k see [Validation guidelines for agents](https://learn.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)

