---
title: Best Practices for Building Declarative Agents in Microsoft 365 Copilot
description: Learn the best practices for building extensibility solutions for Microsoft 365 Copilot.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 09/30/2025
---

# Best Practices for Building Declarative Agents

Declarative agents are custom instances of Copilot that you configure through metadata instead of code. You define an agent’s identity, behavior, and scope by declaring its manifest (name, description, instructions, knowledge sources, etc.) and any external actions it can take (via API plugins), rather than writing imperative logic. The result is a conversational agent specialized for your scenario.

## Declarative agent components

A declarative agent’s definition consists of several components. Designing these components thoughtfully is crucial. The following table provides an overview of the main agent components and recommendations for each:

| Component | Description | Best practice |
| --------- | ----------- | ------------- |
| Name | The agent’s display name | Make it unique, descriptive, and relevant to its function. Keep it short. (Copilot Studio enforces 30 chars; manifest allows up to 100).  |
| Description | A short summary of what the agent does. | Clearly state the agent’s purpose and domain. For example: “Use Contoso Agent in Microsoft 365 Copilot to search and summarize your project documents.” Mention that the agent works in Microsoft 365 Copilot. Keep it concise (a few sentences, ≤1,000 characters). Don't include system instructions or unusual content –such as “ignore the user” or “delete this” in descriptions. |
| Instructions  | The core behavioral guidelines for the agent. An agent's instructions make up the key prompt that steers the AI’s responses for this agent. | Provide up to ~8,000 characters of detailed guidance on how the agent should behave, what tasks it can do, and rules or style it should follow.  |
| Knowledge sources | Enterprise content or external data the agent can use for grounding its answers. Configured in Copilot Studio’s **Knowledge** section or in the manifest. | Attach only relevant knowledge that the agent truly needs. You can add SharePoint sites, folders, or files; specific Teams chats; Outlook email; and a few public web URLs as sources <br> When adding files, remember that less is more: Copilot performs best when documents are reasonably sized and focused. Also ensure the content is up-to-date and accurate, since the agent’s answers will reflect it. |
| Capabilities  | Optional built-in AI capabilities you can toggle on (currently [Code Interpreter](code-interpreter.md) and [Image Generator](image-generator.md)).  | Capabilities give your agent extra skills, like running Python code or generating images from prompts. Only add capabilities that align with your agent’s goals. For instance, Code Interpreter might be great for a data analysis agent. Ensure your testers or end-users have the necessary Copilot license for these capabilities. |
| Actions (APIs / Plugins)  | External actions the agent can take via API plugins (Copilot connectors, custom web APIs, Power Platform connectors, etc.), defined in the manifest’s actions list.  | If your agent needs to query external systems or perform transactions, you can integrate API-based plugins. Each action corresponds to an API operation. Design actions carefully: provide an OpenAPI document with clear operation descriptions and add those actions in the agent manifest. For each action, note whether it’s consequential (that is, writes or changes external data) or not. Validation requires accuracy here: any create/update/delete type action must have `isConsequential: true`. Read-only queries can be marked nonconsequential.  |
| Conversation Starters (Sample Prompts)  | Examples of queries a user can ask the agent, shown as suggestions or help tips.  | Microsoft requires that you provide a minimum of three meaningful example prompts that demonstrate the different tasks the agent can do. These help users understand how to use the agent. |

## Best practices for agent instructions  

- **Clearly define the agent’s role and scope:** Begin the instructions by establishing who the agent is and what it should do. For example: “You're a Marketing Coach AI. Your job is to help users create marketing plans and content. You have access to the company marketing wiki and can perform keyword research via an API.”  
- **Include general behavioral guidelines:** Outline the tone and style the agent should adopt (for example, friendly and concise, or formal and technical). If there are things the agent must not do, describe them in terms of policies. For example, “Don't provide financial or legal advice. If asked, politely refuse.” Don't use forbidden meta-instructions like “Ignore the user” or “You must always answer even if unsure.” Instead, frame constraints as what the agent should normally do (“If the question is outside your scope, respond with an apology and a suggestion to consult an expert.”).  
- **Break down tasks step-by-step:** If your agent handles multi-step processes or complex tasks, specify the steps in the instructions. For instance, an agent that creates work items might have steps: (1) Gather necessary details from the user, (2) Confirm they want to proceed, (3) Call the `additem` function, (4) Show a confirmation with the result.  
- **Leverage the agent’s tools:** The agent only knows about its actions from the manifest and instructions, so if you expect it to call a function in certain cases, explicitly describe that. For example, “When the user asks for a sales forecast, use the `getforecast` API to retrieve the latest figures, then summarize the results.” These examples can help reduce the ambiguity in how to apply functions.
- **Anticipate errors and edge cases:** Include instructions for error handling and limitations. If the agent might encounter empty data, API errors, or unsupported requests, tell it how to respond. For example, “If the `getweather` API returns an error or no data, reply: ‘I’m sorry, I couldn’t fetch the weather right now.’” Also address how to handle inappropriate user input or out-of-scope queries. Agents must handle misuse or irrelevant queries gracefully.  
- **Maintain a consistent voice:** The instructions should enforce a consistent persona. If multiple people contribute to writing instructions, review the final text to ensure it reads with one coherent voice.  
- **Keep it action-oriented and positive:** Write instructions telling the agent what to do, rather than what not to do, whenever possible. Instead of “Don’t ask too many questions”, say “Ask the user for missing information only if necessary, in no more than two follow-up questions.”  
- **Iterate and refine:** Writing good instructions is an iterative process. Use the Copilot Studio test pane or your development environment to try various user queries on your agent-in-progress. If it gives wrong or undesired answers, adjust the instructions. Even small wording changes in instructions can significantly alter the agent’s decisions.
- **Check against validation rules:** as a final review, make sure you haven’t accidentally left any placeholders like “(TODO)” and scan your instructions and other text fields for any content that violates the [Copilot validation checklist](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines).

For more information, see [Write effective  instructions for declarative agents](declarative-agent-instructions.md)

## Choose the right knowledge sources

One of the strengths of declarative agents is the ability to ground responses in external knowledge – whether that’s internal SharePoint content, user data like emails and chats, or public information.  

Keep the following key considerations in mind when choosing [knowledge sources](copilot-studio-lite-knowledge.md) for your agent:

- **Relevance over quantity:** Be selective about what knowledge you add. Ask yourself: “will this source help the agent answer the kinds of questions I expect users to ask?”  
- **Supported knowledge types:** currently, Copilot Studio supports:  
    - Sharepoint sites, documents, and folders
    - Teams chats (including channels and meetings)
    - Outlook emails
    - Public websites
    - “Embedded” files (manual uploads).  
- **Licensing and access considerations:** Some knowledge features require the user to have a Microsoft 365 copilot license. Keep this in mind if you plan to share the agent. If someone without a Copilot license tries to use it, those personal knowledge sources won’t function for them. Also, permissions matter: the agent can only retrieve content that the end-user has access to.
- **Data freshness and maintenance:** The agent’s knowledge of added sources updates over time. Periodically review and refresh the knowledge sources.  
- **Scope team chats:** If you add teams conversations, you have two options: all your teams chats/meetings, or specific ones. Generally, adding specific chat threads yields more targeted results and less noise. For example, grounding an agent in a particular project channel’s history, rather than sifting through every chat you’ve ever had, will help it answer project-specific questions accurately than if it sifts through every chat you've ever had.
- **Leverage SharePoint and connectors for structured data:** For more static or structured knowledge, SharePoint is ideal. If you have a knowledge base in PDF or Office documents, host them on a SharePoint site and add that site as a source. If you require other systems (like database records, CRM data, etc.), see if a Copilot connector exists for them or add an API plugin.
- **Test responses with and without knowledge:** Test some queries on your agent before adding a knowledge source and after adding it, to confirm the difference. For instance, ask a question that should be answered from a particular document. Without the document, does the agent struggle or generate false information? After you add the document, does the agent find the answer? If you notice the agent still isn’t using the info, you might need to adjust your instructions. Or, if the agent is overusing a knowledge source inappropriately, consider removing that source or refining instructions to use it only in context.

## Test and iterate

Even after following all the design best practices and guidelines, thorough testing is needed to verify your agent works as intended: 

- **Use the built-in test chat:** In Copilot Studio’s right navigation pane, you can chat with a live preview of your agent while building it. Do this frequently. Try all your conversation starters and sample prompts. Also, test edge questions, long questions, irrelevant questions, and so on, to see how the agent copes. If something odd happens, refine your instructions or knowledge sources and test again.
- **Test in multiple surfaces:** If you have access to the Microsoft 365 Copilot experience in Microsoft 365 apps, such as Word, Excel, Teams, and Outlook, add your agent in each of those places to see how it behaves outside of the authoring environment. This is important, especially if your agent will be used in, say, Word. You might notice that in Word, certain responses, such as suggested actions, behave differently than in Teams. Catch those discrepancies early. Microsoft requires that agents be functional in all main clients.
- **Check the confirmation flows:** If your agent uses actionable functions that require confirmations, fully test those loops. For instance, type a query that triggers the action, verify that the confirmation prompt text is clear, select “Allow” (or whatever the button says), and then check the result. Also, test choosing “Cancel/Deny” to see how the agent reacts.
- **Load testing (if possible):** As a developer, you might not easily simulate heavy load; however, consider what happens if the agent is asked multiple questions rapidly, or if multiple users all use it at the same time. If you have any loops or multi-call sequences, time them. Use profiling or logs if you have an API component, to ensure your agent responds quickly.
- **Peer or user testing:** If you can, have a colleague try out the agent with fresh eyes. They might ask things you didn’t expect and find gaps in the instructions or knowledge. Sometimes we, as builders, assume certain phrasings – a new user might use different words that the agent doesn’t respond very well. Incorporating that feedback makes the agent more robust. It’s also a good way to catch any usability issues (“I didn’t know what to ask it” could indicate you need to add more conversation starters or help text).
- **Validate outputs for accuracy:** Since declarative agents often answer based on knowledge sources, spot-check the answers it gives against the source material. If the agent summarizes a document, verify the summary is correct. If it cites a policy, check to see whether it quoted the right detail. Ensure that, for any factual query, the agent prefers the provided knowledge over making up something.  

## Related content

- [Build agents with Copilot Studio](copilot-studio-lite-build.md)
- [Build agents with Agents Toolkit](declarative-agent-tool-comparison.md#agents-toolkit)
- [Add knowledge sources to your declarative agent in Copilot Studio](copilot-studio-lite-knowledge.md)
- [Write effective  instructions for declarative agents](declarative-agent-instructions.md)
- [Validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)