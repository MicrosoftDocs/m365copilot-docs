---
author: isvargasmsft
ms.topic: include
---

<!-- markdownlint-disable MD041-->

### Ensuring a secure implementation of Declarative Agents in Microsoft 365

Microsoft 365 customers and partners can build declarative agents that extend Microsoft 365 Copilot with custom instructions, grounding knowledge, and actions invoked via REST API descriptions configured by the declarative agent. At runtime, Microsoft 365 Copilot reasons over a combination of the user’s prompt, custom instructions that are part of the declarative agent, and data which was provided by custom actions. All of this data might influence the behavior of the system, and such processing comes with security risks, specifically that if a custom action can provide data from untrusted sources (such as emails or support tickets), an attacker might be able to craft a message payload which causes your agent to behave in a way they control – incorrectly answering questions or even invoking custom actions. While Microsoft takes many measures to prevent such attacks, organizations should only enable declarative agents that use trusted knowledge sources and connect to trusted REST APIs via custom actions. If the use of untrusted data sources is necessary, design the declarative agent around the possibility of breach and don't give it the ability to perform sensitive operations without careful human intervention.

Microsoft 365 provides organizations with extensive controls governing who can acquire and use integrated apps and the specific apps enabled for groups or individuals within a Microsoft 365 tenant, including those apps that include declarative agents.  Tools like Copilot Studio, which enable users to create their own declarative agents, also include extensive controls that allow admins to govern connectors used for both knowledge and custom actions.