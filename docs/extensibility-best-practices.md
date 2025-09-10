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

## Design agents for modularity and reuse

Break down your agent into reusable components:

- **Topics:** Each topic should handle a single task or question (e.g., “Submit a leave request,” “Check PTO balance”). Avoid monolithic flows.
- **Triggers:** Define clear triggers for each topic, mapping user intents to actions.
- **Capabilities:** Implement business logic as Power Automate flows or APIs. Expose these capabilities for reuse across agents and topics.

> [!TIP]:
> If you build a “Submit PTO request” capability, make it available to HR, Payroll, and Manager Assistant agents.

## Connect and Manage Knowledge Sources

**Ground your agent in authoritative enterprise data:**

Use SharePoint sites, Dataverse tables, uploaded documents, or Copilot connectors as knowledge sources.
Apply filters and scopes to index only relevant data, reducing noise and minimizing risk of exposing sensitive information.
Keep knowledge sources current—schedule regular reviews and updates.

Avoid: Embedding business logic in documents or tables. Keep logic in capabilities or topics for easier updates and reuse. use the same knowledge source or capability, but are independent and reusable.

#### Expose capabilities as APIs or flows

If you build a custom capability (like checking PTO balance), expose it as an API or Power Automate flow. This lets you reuse the capability in multiple agents or topics. For example, if you create a Power Automate flow called “Get PTO Balance” and expose it as a Power Automate flow, you can call the flow using different agents, such as an HR agent, a Payroll agent, and a Manager Assistant agent.

#### Avoid embedding business logic in knowledge sources

Don’t put calculations or decision logic in your SharePoint documents or Dataverse tables. Instead, keep logic in capabilities or topics so it’s easier to update and reuse. For example, the SharePoint site for your HR department should simply contain your HR policies. Your HR agent is responsible for determining whether or not an employee is eligible for PTO based on those policies.

### Optimize your agent's orchestration layers

Orchestration layers in Copilot agents are the logic and structure that determine how user input is processed, which topics or capabilities are activated, and how responses are generated. They act as the “brain” of the agent, coordinating conversation flow and tool selection.

Orchestration layers:

- enable agents to handle complex, multi-step interactions
- ensure the right knowledge source or capability is used for each user request
- support fallback, error handling, and dynamic topic selection, which makes your agents more robust and user-friendly.

**Best practices:**

- **Use generative orchestration** for dynamic, multi-turn conversations—let the agent select topics and actions based on user intent.
- **Keep topics modular** so each handles a specific task and can be reused.
- **Write clear agent instructions** that guide the orchestration logic step by step.
- **Test and refine** your orchestration layer implementation to ensure the agent responds accurately and efficiently.

## Optimize agent capabilities

Capabilities enable agents to take action, perform reasoning, or access tools and services.

**Best practices:**

- Use built-in capabilities (for example, code interpreter) or custom APIs.
- Design capabilities to be stateless and reusable.
- Validate inputs and handle errors gracefully.

## Test and debug with developer tools

Use Copilot developer mode to test and debug your extensibility solution.

**Best practices:**

- Enable developer mode to surface debug cards.
- Validate orchestration and action selection.
- Use test flows and sample inputs to simulate real-world scenarios.

## Understand surface availability

Know where your agents and actions appear across Microsoft 365 apps.

| Surface | Declarative agents | Plugins/Actions |
| --------| --------| ----------|
| Teams   |  :white_check_mark: |  :white_check_mark: |  
| Outlook |  :white_check_mark: |  :white_check_mark: |  
| Word    |  :white_check_mark: |         :x:         |  
| Excel   |  :white_check_mark: |         :x:         |  
| Web     |  :white_check_mark: |  :white_check_mark: |  
| Mobile  |  :white_check_mark: |  :white_check_mark: |  

## Plan for publishing and lifecycle management

Publishing paths vary by extensibility type.

**Best practices:**

- **Declarative agents:** Share via link or publish to catalog.
- **Custom agents:** Publish via Copilot Chat or Teams.
- **Plugins/actions:** Must be certified before being used in Copilot.
- Use **Power Platform Pipelines or GitHub** for application lifecycle management.
- Apply **DLP and access control policies** before publishing.



## Copilot connector best practices

### Build secure and compliant connectors

Connectors ground Copilot responses in enterprise data. Follow governance and compliance best practices.

**Best practices:**

- [**Use Microsoft Copilot connectors**](overview-copilot-connector.md) to ingest external data.
- [**Ensure connectors meet compliance requirements**](https://learn.microsoft.com/microsoft-copilot-studio/admin-certification), including [Responsible AI](rai-validation.md) (RAI), [data loss prevention](https://learn.microsoft.com/purview/dlp-learn-about-dlp) (DLP), and access control policies.
- [**Use filters and scopes**](
build-declarative-agents-add-knowledge.md). Apply filters and scoping rules to ensure that only relevant data is indexed and exposed to Copilot. Applying filters helps reduce noise, improve performance, and minimize the risk of overexposing sensitive information.