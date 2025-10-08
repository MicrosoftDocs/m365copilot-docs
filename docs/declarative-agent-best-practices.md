---
title: Best practices for building declarative agents in Microsoft 365 Copilot
description: Learn the best practices for building extensibility solutions for Microsoft 365 Copilot.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 09/24/2025
---

# Best practices for building declarative agents

Declarative agents are AI assistants that customize Microsoft 365 Copilot for specific business scenarios via custom instructions, knowledge sources, and actions. This article summarizes the best practices for building declarative agents that are tailored to your unique business needs.

## Declarative agent components

A declarative agent consists of several components. It's important to apply best practices to your design for each component of your agent. The following table provides recommended best practices for each agent component.

| Component | Description | Best practice |
| --------- | ----------- | ------------- |
| Name | The agent’s display name | Make sure that your display name conveys the purpose for your agent for user discovery in the Agent Store. The name should meet the character limits based on the development tool: 30 characters for the Copilot Studio lite experience; 100 characters for the Microsoft 365 Agents Toolkit. For information about app name requirements, see the [Teams Store validation requirements](https://learn.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#app-name)|
| Description | A short summary of what the agent does. | Clearly state the agent’s purpose and domain. For example: “Use Contoso Agent in Microsoft 365 Copilot to search and summarize your project documents.” Mention that the agent works in Microsoft 365 Copilot. Keep it concise (a few sentences, ≤1,000 characters), and limit the instructions to what the agent *should* do, rather than what it should *not* do.|
| Instructions  | The core behavioral guidelines for the agent. The agent's instructions are the key prompt that steers the AI’s responses for this agent. | Provide up to ~8,000 characters of detailed guidance for how the agent should behave, what tasks it can do, and rules or style it should follow. For more information, see [Write effective instructions](declarative-agent-instructions.md) |
| Knowledge sources | Enterprise content or external data the agent can use for grounding its answers. Configured in Copilot Studio’s **Knowledge** section or in the manifest. | Add only relevant knowledge that the agent truly needs. You can add SharePoint sites, folders, or files; specific Teams chats; Outlook email; and a few public web URLs as sources. <br><br> When adding files, remember that less is more: Copilot performs best when documents are reasonably sized and focused. Also ensure the content is up-to-date and accurate because the agent uses content in its knowledge sources in its responses. |
| Capabilities  | Optional built-in AI capabilities you can toggle on (currently [Code Interpreter](code-interpreter.md) and [Image Generator](image-generator.md)).  | Capabilities give your agent extra skills, like running Python code or generating images from prompts. Only add capabilities that align with your agent’s goals. For example, Code Interpreter might be great for a data analysis agent. |
| Actions (APIs/plugins)  | External actions the agent can take via API plugins (Copilot connectors, custom web APIs, and Power Platform connectors), defined in the agent manifest.  | If your agent needs to query external systems or perform transactions, you can integrate API-based plugins. Each action corresponds to an API operation. Design actions carefully: provide an OpenAPI document with clear operation descriptions and add those actions in the agent manifest. For each action, note whether it’s consequential (that is, writes or changes external data) or not. Validation requires accuracy: any create/update/delete type action must have `isConsequential: true`. Read-only queries can be marked nonconsequential.  |
| Conversation starters (sample prompts)  | Examples of queries a user can ask the agent, shown as suggestions or help tips.  | Be sure to include at least three sample prompts that reflect the core capabilities of your agent. These help users understand how to use the agent. For example: <br> - *Draft an email to **person** about **subject**.* <br>- *Compare and contrast the proposals in **file** and **file**.* <br>-  *Create a line graph to show sales trends over the last six months.* <br> A minimum of three meaningful example prompts that demonstrate the different tasks the agent can do are required.  |

## Best practices for agent instructions

The following best practices expand on the guidelines presented in the article [Write effective instructions for declarative agents](declarative-agent-instructions.md). The best practices here focus on strategic, contextual, and collaborative aspects of creating agent instructions. It is intended to help you enhance the behaviorof your agents through thoughtful planning, testing, and iteration.


| Focus Area | Guidance | Purpose|
| ----- | ----- | ----- |
| **Instruction Strategy** | Define the agent’s purpose and anticipate edge cases. Balance autonomy with constraints. | Helps agents act with clarity and resilience across varied scenarios.| 
| **Contextual Intelligence**| Adapt instructions to the platform (Word, Teams, etc.), user roles, and time-sensitive contexts. | Ensures instructions remain relevant and effective across environments.     |
| **Collaborative Iteration**| Involve cross-functional teams in authoring and reviewing. Test across modalities and maintain version history. | Improves instruction quality and consistency through shared ownership.      |
| **Instruction Diagnostics**| Use telemetry, failure pattern analysis, and user feedback to refine instructions. | Enables data-driven improvements and better user outcomes.                  |
| **Instruction Architecture**| Modularize instructions into reusable blocks. Apply metadata and templates for consistency. | Supports scalable and maintainable instruction design.                      

For more information and specific guidance for creating agent instructions, see [Write effective  instructions for declarative agents](declarative-agent-instructions.md).

## Choose the right knowledge sources

You can ground your declarative agents in public and organizational knowledge – such as SharePoint content, user data like emails and chats, and public websites.  

Keep the following key considerations in mind when choosing [knowledge sources](copilot-studio-lite-knowledge.md) for your agent:

- **Relevance over quantity:** Be selective about what knowledge you add. Consider whether the source will help the agent answer the kinds of questions you expect users to ask.

- **Use SharePoint and connectors for structured data:** For more static or structured knowledge, SharePoint is ideal. If you have a knowledge base in PDF or Office documents, host them on a SharePoint site and add that site as a source. If you require other systems (like database records or CRM data), see if a Copilot connector exists for them or add an API plugin.  

- **Licensing and access considerations:** Some knowledge features require the user to have a Microsoft 365 copilot license. Keep this in mind if you plan to share the agent. If someone without a Copilot license tries to use it, those personal knowledge sources won’t function for them. Also, permissions matter - the agent can only retrieve content that the user has access to.

- **Data freshness and maintenance:** The agent’s knowledge of added sources updates over time. Periodically review and refresh the knowledge sources.  

- **Scope team chats:** If you add teams conversations, you have two options: all your teams chats/meetings, or specific ones. Generally, adding specific chat threads yields more targeted results and less noise. For example, grounding an agent in a particular project channel’s history, rather than sifting through every chat you’ve ever had, will help it answer project-specific questions more accurately.

- **Use SharePoint and connectors for structured data:** For more static or structured knowledge, SharePoint is ideal. If you have a knowledge base in PDF or Office documents, host them on a SharePoint site and add that site as a source. If you require other systems (like database records or CRM data) see if a Copilot connector exists for them or add an API plugin.

- **Test responses with and without knowledge:** Test some queries before and after adding knowledge sources. For example, ask a question that should be answered from a particular document. Without the document, does the agent struggle or generate false information? After you add the document, does the agent find the answer? If you notice the agent still isn’t using the information, you might need to adjust your instructions. Or, if the agent is overusing a knowledge source, consider removing that source or refining instructions to use it only in context. 

## Test and iterate

Even after following all the design best practices and guidelines, thoroughly test your agent to verify that it works as intended. Apply the following best practices to test and iterate on your agent:

- **Use the built-in test chat:** - **Use the built-in test chat:** In Copilot Studio’s right navigation pane, you can chat with a live preview of your agent while building it. Do this frequently. Try all your conversation starters and sample prompts. Also, test edge questions, long questions, irrelevant questions, and so on, to see how the agent responds. If something odd happens, refine your instructions or knowledge sources and test again.  

- **Test in multiple apps:** If you have access to the Microsoft 365 Copilot experience in Microsoft 365 apps, such as Word, Excel, Teams, and Outlook, add your agent in each of those places to see how it behaves outside of the authoring environment. You might notice that in Word, for example, certain responses, such as suggested actions, behave differently than in Teams. Catch those discrepancies early. Your agent must be functional across all Microsoft 365 apps.  

- **Check the confirmation flows:** If your agent uses actionable functions that require confirmations, fully test those loops. For example, type a query that triggers the action, verify that the confirmation prompt text is clear, select **Allow** (or whatever the button says), and then check the result. Also, test choosing **Cancel/Deny** to see how the agent reacts.

- **Load testing (if possible):** As a developer, you might not easily simulate heavy load; however, consider what happens if the agent is asked multiple questions rapidly, or if multiple users all use it at the same time. If you have an API component, use profiling or logs to ensure that your agent responds without a delay.

- **Peer or user testing:** If you can, have a colleague test the agent. They might ask things you didn’t expect and find gaps in the instructions or knowledge. A new user might use different words that the agent doesn’t respond to as well. It’s also a good way to catch any usability issues; for example, if a tester doesn't know what to ask your agent, you might need to add more conversation starters.

- **Validate outputs for accuracy:** Because declarative agents often answer based on knowledge sources, spot-check the answers it gives against the source material. If the agent summarizes a document, verify that the summary is correct. If it cites a policy, verify that it quoted the right detail. Make sure that for any factual query, the agent prefers the provided knowledge sources. 

## Related content

- [Build agents with Copilot Studio](copilot-studio-lite-build.md)
- [Build agents with Agents Toolkit](declarative-agent-tool-comparison.md#agents-toolkit)
- [Add knowledge sources to your declarative agent in Copilot Studio](copilot-studio-lite-knowledge.md)
- [Write effective  instructions for declarative agents](declarative-agent-instructions.md)
- [Validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)