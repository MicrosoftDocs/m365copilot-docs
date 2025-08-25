---
title: Best practices for building Copilot extensibility solutions
description: Learn the best practices for building extensibility solutions for Microsoft 365 Copilot.
ms.date: 08/30/2025
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
---

# Best practices for building extensibility solutions (agents, connectors, actions)

You can extend Microsoft 365 Copilot to meet your organization’s unique needs by building agents, connectors, and plugins (also called actions) that integrate enterprise data, automate workflows, and deliver tailored user experiences. This guide outlines best practices to help developers build secure, scalable, and maintainable extensibility solutions—starting from design through deployment.

## Step 1: Choose the right extensibility path

Start by selecting the appropriate extensibility model based on your scenario:

| Extensibility option | Description |
| ------ | ------ |
| Declarative agents | Built using Copilot Studio or Teams Toolkit. Ideal for low-code scenarios with built-in orchestration. |
| Custom engine agents | Bring your own orchestrator and models. Suitable for advanced use cases requiring full control. |
| Copilot connectors | Ingest and index enterprise data into Microsoft Graph to ground Copilot responses. |
| Plugins (actions)  | Extend Copilot with real-time capabilities to trigger workflows or retrieve data from external systems.  |

Use the [Copilot extensibility decision guide](https://learn.microsoft.com/microsoft-365-copilot/extensibility/decision-guide) to determine the best fit.

## Step 2: Design for modularity and reuse

Design modular, reusable components to build scalable and maintainable extensibility solutions. Whether you're developing agents, connectors, or plugins, modularity enables you to separate concerns, reduce duplication, and accelerate development across multiple use cases.

### Separate knowledge and capabilities

In Microsoft 365 Copilot extensibility, agents are powered by two [core components](agents-overview.md#agent-core-components):

- [**Knowledge sources**](knowledge-sources.md) provide the grounding data that agents use to generate accurate, context-aware responses.
- **Capabilities** define what the agent can do—such as retrieving real-time data, performing calculations, or interacting with external systems.

**Best practices:**

- Keep knowledge sources and capabilities loosely coupled.
- Use knowledge sources for grounding only—not for logic or decision-making.
- Design capabilities to be stateless and parameterized.
- Expose capabilities as OpenAPI endpoints or Power Automate flows for reuse.

## Step 3: Use orchestration layers

Orchestration layers define how our agent processes user input, selects knowledge or capabilities, and returns a response. Microsoft supports two orchestration models:

| Orchestration model | Description | Use case |
| Declarative orchestration | Built-in orchestration in Copilot Studio or Agents Toolkit. Uses topics, triggers, and generative answers. | You want a low-code, guided experience with built-in orchestration. |
| Custom orchestration | Bring your own orchestrator and models. Gives you control over logic and flow. | You need advanced logic, multi-agent workflows, or integration with external AI. |

**Best practices:**

- Use **Generative answers** in Copilot Studio to ground responses.
- Define structured flows with topics and triggers.
- Implement fallback behaviors, error handling, and multi-turn logic.

## Step 4: Build secure and compliant connectors

Connectors ground Copilot responses in enterprise data. Follow governance and compliance best practices.

**Best practices:**

- [**Use Microsoft Copilot connectors**](connectors-overview.md) to ingest external data.
- [**Ensure connectors meet compliance requirements**](security-compliance.md), including [Responsible AI](rai-validation.md) (RAI), [data loss prevention](https://learn.microsoft.com/purview/dlp-learn-about-dlp) (DLP), and access control policies.
- [**Use filters and scopes**](connectors-overview.md#filtering-and-scoping). Apply filters and scoping rules to ensure that only relevant data is indexed and exposed to Copilot. Applying filters helps reduce noise, improve performance, and minimize the risk of overexposing sensitive information.

## Step 5: Configure agent capabilities

Capabilities enable agents to take action, perform reasoning, or access tools and services.

**Best practices:**

- Use built-in capabilities (for example, code interpreter) or custom APIs.
- Design capabilities to be stateless and reusable.
- Validate inputs and handle errors gracefully.

## Step 6: Test and debug with developer tools

Use Copilot developer mode to test and debug your extensibility solution.

**Best practices:**

- Enable developer mode to surface debug cards.
- Validate orchestration and action selection.
- Use test flows and sample inputs to simulate real-world scenarios.

## Step 7: Understand surface availability

Know where your agents and actions appear across Microsoft 365 apps.

| Surface | Declarative agents | Plugins/Actions |
| --------| --------| ----------|
| Teams   |  :white_check_mark: |  :white_check_mark: |  
| Outlook |  :white_check_mark: |  :white_check_mark: |  
| Word    |  :white_check_mark: |         :x:         |  
| Excel   |  :white_check_mark: |         :x:         |  
| Web     |  :white_check_mark: |  :white_check_mark: |  
| Mobile  |  :white_check_mark: |  :white_check_mark: |  

## Step 8: Plan for publishing and lifecycle management

Publishing paths vary by extensibility type.

**Best practices:**

- **Declarative agents:** Share via link or publish to catalog.
- **Custom agents:** Publish via Copilot Chat or Teams.
- **Plugins/actions:** Must be certified before being used in Copilot.
- Use **Power Platform Pipelines or GitHub** for application lifecycle management.
- Apply **DLP and access control policies** before publishing.
