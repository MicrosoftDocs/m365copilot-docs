---
title: Plan your plugin
description: Define the users, outcome, experiences, requirements, reusable assets, constraints, and responsibilities for a Microsoft 365 Copilot plugin.
#customer intent: As a solution owner, I want to plan my plugin so that I can choose the appropriate capabilities and identify requirements before implementation.
author: jessicaaawu
ms.author: wujessica
ms.topic: article
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.custom: [copilot-learning-hub]
---

# Plan your plugin

Start with the problem your plugin should solve: who needs it, what they need to accomplish, and where they need to use it. Then identify the information, actions, and existing capabilities the solution might need.

You don't need to choose capabilities, development tools, or a publishing route yet. Record what you know and the constraints that could affect those choices. You'll use that plan in [Choose capabilities for your plugin](choose-plugin-components.md).

## Define the outcome

Write a short description of the solution that answers:

- Who will use it?
- What task or problem will it address?
- What result would show that it works?
- Where do users need to find and use it?

Also identify who will build, administer, publish, and support the solution. One person or team might fill several roles.

If your goal is to use Microsoft 365 work context or Copilot capabilities in an application or custom agent that you host, see [Build Copilot-powered apps and agents](apps-agents-overview.md).

## Describe what the solution needs to do

List the knowledge and actions required to produce the outcome. Focus on the user's task rather than how you'll implement it.

Consider:

- What organizational content or business context does the solution need?
- What questions, tasks, or workflows should it support?
- Does it need to retrieve information or create, update, or send anything?
- Which Microsoft 365 data, external data, APIs, tools, or services are involved?
- Which actions could have consequential effects and need confirmation or human oversight?

These requirements will help you compare agents, skills, Copilot connectors, MCP servers, and other capabilities in the next step.

## Look for capabilities you can reuse

Check whether part of the solution already exists. Candidates might include agents, skills, Copilot connectors, MCP servers, APIs, applications, or services.

For each promising asset, record its owner, what it does, where it works, who can use it, and any known permissions or reuse restrictions. You can confirm technical compatibility after you choose the components and tools.

## Identify where and how it will be used

List the Microsoft experiences in which users need the solution and the audience that should have access. For example, the audience might be a development team, selected users, one organization, or customers in multiple organizations.

Record any known requirements for environments, regions, licensing, discovery, acquisition, and connections. Support can differ by experience, capability, package, and publishing route. Confirm those combinations when you choose components and a distribution route.

## Record constraints that could change the design

You don't need to complete every review at this stage. Identify requirements or open questions that could affect what you build:

| Area | Questions to record |
|---|---|
| **Identity and access** | Which identities, permissions, authentication methods, consent, and external connections might be needed? |
| **Data and security** | What data will the solution access or change? What privacy, compliance, retention, and oversight requirements apply? |
| **Distribution** | Who should be able to discover and use it? Will it need organizational deployment or distribution to multiple customers? |
| **Compatibility** | Are there known experience, region, package, manifest, rollout, or connection constraints? |
| **Licensing and cost** | What licenses, usage charges, hosting costs, or servicing costs might affect the choice? |
| **Operations** | Who will own support, monitoring, updates, access changes, and eventual retirement? |

Use [Data, privacy, and security](data-privacy-security.md) and [Licensing and cost considerations](cost-considerations.md) for the detailed checks. You'll choose and confirm the supported publishing route later.

## What to take to the next step

Keep a brief record of:

- The intended users, their problem, and the outcome you want.
- The experiences and audience the solution must support.
- The knowledge, data, tasks, and actions it needs.
- Existing capabilities or services worth reusing.
- Constraints and open questions that could affect the design.
- The people or teams who can resolve those questions.

You're ready for [Choose capabilities for your plugin](choose-plugin-components.md) when you have enough information to compare what to build and what to reuse. Leave implementation details open when they depend on the components and tools you select.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Data, privacy, and security](data-privacy-security.md)
- [Licensing and cost considerations](cost-considerations.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [For builders](builder-guide.md)
- [For administrators](administrator-guide.md)
- [For ISVs and software publishers](isv-publisher-guide.md)
