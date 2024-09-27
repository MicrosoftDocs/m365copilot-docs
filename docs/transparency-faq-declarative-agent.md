---
title: Declarative agents FAQ
description: The transparency FAQ for declarative agents provides detailed information about what declarative agents are, their intended uses, and how they're evaluated.
author: simranajwani
ms.author: simranajwani
ms.topic: faq
ms.date: 09/16/2024
---

# Declarative agents FAQ

The transparency FAQ for declarative agents provides detailed information about what declarative agents are, their intended uses, and how they're evaluated.

## What are declarative agents?

Declarative agents are customized versions of Microsoft 365 Copilot that enable customers to create personalized experiences that run in Microsoft 365 Copilot. This feature builds on top of the Microsoft 365 Copilot system. Users can build declarative agents with capabilities and instructions on their purpose and behavior. Users can also add the option to access enterprise knowledge (including SharePoint and Graph Connectors). Read more about declarative agents: [Declarative agents for Microsoft 365](/microsoft-365-copilot/extensibility/overview-declarative-agent). Read more about overall Copilot Extensibility options: [Extend Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/).

## What can declarative agents do?

Declarative agents provide a custom chat experience without a need to write imperative code. They can be created and used privately or published to make them available to other users. End users can see declarative agents on the right side panel under Copilot.

## What are declarative agents intended uses?

To provide a custom chat experience using the power of Microsoft 365 Copilot. Users are familiar with the idea of asking an expert; equipped with appropriate instructions, connectors, and actions, declarative agents can become such an expert with a minimum of development effort.

Read more about how you can tailor your declarative agents here: [Declarative agents for Microsoft 365](overview-declarative-agent.md#tailor-declarative-agents-for-your-scenario).

## How were declarative agents evaluated? What metrics are used to measure performance?

All response generation features of agents are tested, measured, and validated internally before releasing generally. Such evaluations are done using extensive experimentation to ensure accurate, grounded, and responsible responses that align with human preferences.

For each capability that is supported in declarative agents, we conduct several tests to validate Microsoft 365 Copilot. In addition to all Microsoft 365 Copilot related capabilities, Responsible AI (RAI) testing was performed on different harm types to evaluate defect rates. The defect scores are then used to improve the model and mitigate the harm. It's important to keep in mind that the system was designed to mimic natural human communication, but the output can be inaccurate, incorrect, or out of date.

## What are the limitations of declarative agents? How can users minimize the effects of declarative agent's limitations when using the system?

In Copilot Studio, declarative agents are only supported for use in English for public preview.

For end users, there are user disclaimers with terms and privacy commitments on each declarative agent's homepage. For line-of-business developers and IT admins, Microsoft Admin Center is where to manage Copilot extensibility solutions. For detailed information about how Microsoft 365 Copilot uses, protects, and shares organizational information to power extensibility, see [Data, Privacy, and Security for Microsoft 365 Copilot.](/copilot/microsoft-365/microsoft-365-copilot-privacy).
