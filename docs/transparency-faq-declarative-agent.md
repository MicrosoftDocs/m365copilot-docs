---
title: Declarative Agents in Microsoft 365 Copilot FAQ
description: The transparency FAQ for declarative agents provides detailed information about what declarative agents are, their intended uses, and how they're evaluated.
author: simranajwani
ms.author: simranajwani
ms.topic: faq
ms.localizationpriority: medium
ms.date: 07/21/2025
---

# Declarative agents FAQ

This FAQ answers common questions about what declarative agents for Microsoft 365 Copilot are, their intended uses, and how they're evaluated.

## What are declarative agents?

Declarative agents are customized versions of Microsoft 365 Copilot that enable customers to create personalized experiences that run in Microsoft 365 Copilot. This feature builds on the Microsoft 365 Copilot system. Users can build declarative agents with capabilities and instructions that define the agent's purpose and behavior. Users can also add the option to access enterprise knowledge (including SharePoint and Microsoft 365 Copilot connectors). To learn more, see [Declarative agents for Microsoft 365](/microsoft-365-copilot/extensibility/overview-declarative-agent). 

## What can declarative agents do?

Declarative agents provide a custom chat experience without a need to write imperative code. They can be created and used privately or published to make them available to other users. Users can see declarative agents on the right side panel in Microsoft 365 Copilot and in the Copilot experiences in Teams, Word, and PowerPoint.

## What are declarative agents intended uses?

Declarative agents provide a custom chat experience based on the power of Microsoft 365 Copilot. Users are familiar with the idea of asking an expert; equipped with appropriate instructions, connectors, and actions, declarative agents can become experts with a minimum of development effort.

For more information about how you can tailor your declarative agents, see [Declarative agents for Microsoft 365](overview-declarative-agent.md#tailor-declarative-agents-for-your-scenario).

## Are declarative agents available for Microsoft 365 Government tenants?

[!INCLUDE [declarative-agents-gov](includes/declarative-agents-gov.md)]

## How were declarative agents evaluated? What metrics are used to measure performance?

All response generation features of agents are tested, measured, and validated internally before they are released. Such evaluations are done using extensive experimentation to ensure accurate, grounded, and responsible responses that align with human preferences.

For each capability that is supported in declarative agents, we conduct several tests to validate Microsoft 365 Copilot. In addition to all Microsoft 365 Copilot related capabilities, Responsible AI (RAI) testing was performed on different harm types to evaluate defect rates. The defect scores are then used to improve the model and mitigate the harm. It's important to keep in mind that the system was designed to mimic natural human communication, but the output can be inaccurate, incorrect, or out of date.

## What are the limitations of declarative agents and how can users minimize the effects?

Disclaimers with terms and privacy commitments for users appear on the home page for each declarative agent. For line-of-business developers and IT admins, Copilot extensibility solutions are managed in the Microsoft 365 admin center. For more information about how Microsoft 365 Copilot uses, protects, and shares organizational information to power extensibility, see [Data, Privacy, and Security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy).

### Limitation on multiple API actions in a single turn

A declarative agent might stop responding when a single user turn triggers several
**different API actions**.
**How to minimize the effect:** Break the request into multiple user turns or limit the number of different API actions used at once.
