---
title: Write effective instructions for declarative agents
description: Learn how to write effective instructions for your declarative agent.
author: lauragra
ms.author: jchudakova
ms.topic: conceptual
ms.date: 10/17/2024
---

# Write effective instructions for declarative agents

Declarative agents are customized versions of Microsoft 365 Copilot that help you to create personalized experiences by declaring specific instructions, actions, and knowledge. This article provides guidance for writing effective instructions for a declarative agent. Use this guidance to help to ensure that your declarative agent responds appropriately to user requests, handles data accurately, and maintains a consistent workflow.

This guidance applies to developers and makers who are using [Teams Toolkit](/microsoft-365-copilot/extensibility/build-declarative-agents) or [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) to create declarative agents.

## Instruction components

A well-structured set of instructions ensures that the agent understands its role and tasks and how to interact with users. The following are the main components of declarative agent instructions:

-   Purpose
-   General guidelines, including general directions, tone, and restrictions
-   Skills

In addition, when relevant, instructions include:

-   Step-by-step instructions
-   Error handling and limitations
-   Feedback and iteration
-   Interaction examples
-   Non-standard terms
-   Follow-up and closing

The following diagram shows the primary components of declarative agent instructions.

:::image type="content" source="assets/images/instruction-components.png" alt-text="Diagram of the components of agent instructions, including purpose, guidelines, and skills" border="false":::

### Purpose

Clearly define the role and the area of expertise of the agent, including the primary function it serves.

|Example|
|:------|
|You are a learning coach, dedicated to helping me enhance my understanding of complex topics, practice existing skills, and find the right learning process. |


### Guidelines

Define how the agent should communicate. An agent might be concise, detailed, interactive, or suggestive. Also include any restrictions that should be applied.

|Example|
|:------|
|1. Avoid sharing external links.<br />2. Maintain an informal tone throughout our interactions. |

### Skills

List the main tasks the agent is expected to perform. This can include generating suggestions, automating tasks, providing explanations, or guiding the user through processes. It can also reflect the agent conversation starters.

|Example|
|:------|
|You are a learning coach. When asked a question, break down complex concepts into beginner, intermediate, and advanced levels. Use different techniques for learning complex topics depending on the topic. |

### Step-by-step instructions

Clearly define the workflow structure and outline the order in which to complete tasks. This helps the agent to guide users through processes in a logical and efficient way. For example, if a task involves multiple steps, instruct the agent that the steps should be completed in sequential order and that that users must complete each step before they move on to the next.

|Example|
|:------|
|Follow these steps:<br /><br />1. Ask for the name of the individual.<br />2. List the nomination categories.<br />3. Ask about their contributions.<br />4. Draft the nomination. |

### Interaction examples

Provide examples of ideal interactions that show how the agent should respond in different scenarios.

|Example|
|:------|
|**User prompt**: I'm having trouble understanding the basics of machine learning. Can you explain it to me?|
|**Learning coach response**:<br /><br />- **Beginner explanation**: Machine learning is a type of artificial intelligence where computers learn from data to make decisions or predictions. Think of it like teaching a dog new tricks - at first, it needs guidance, but over time, it learns to do it on its own with practice.<br />- **Intermediate explanation**: At a higher level, machine learning involves algorithms that find patterns in data. These patterns help the machine make predictions or decisions without being explicitly programmed. For example, a machine learning model could predict house prices based on historical data.<br />- **Advanced explanation**: "In technical terms, machine learning uses statistical techniques and algorithms like linear regression, decision trees, and neural networks to build models that generalize well on new data, minimizing error through optimization techniques.

### Error handling and limitations

Instruct the agent how to handle situations when a user requests something without providing the necessary prerequisites. If it is important for the agent not to mention specific topics, state this clearly in the instructions.

Error handling can be part of the general directions or a specific skill description.

|Example|
|:------|
|- If you encounter a situation where you cannot proceed, respond with, "I need more information to assist you further. Could you clarify?"<br />- Avoid providing external links. |

### Feedback and iteration

Instruct the agent to seek feedback from the user to refine its suggestions and improve the interaction.

Feedback can be part of the general directions or a skill description.

|Example|
|:------|
|- After providing a suggestion, ask me if it meets my needs or if adjustments are needed.<br />- If I provide feedback, adjust your response or offer alternative solutions.<br />- Continue refining your suggestions based on my input until I'm satisfied. |

### Non-standard terms

Define any specific terms that are non-standard or unique to the organization in the instructions. This ensures that the agent understands and uses these terms correctly in its responses. Providing a glossary of these terms can be helpful for both the agent and the users.

Term definitions can be part of the general directions or a specific skill description.

#### Non-standard terms example 

LEU means Learning Engagement Units. This term is used to quantify the engagement level of learners in various training programs.

### Follow-up and closing

Instruct the agent to follow up interactions to remind users that it is available for further assistance and offer to help with related tasks.

Also instruct the agent how to properly close a session, such as by summarizing what was achieved or suggesting next steps.

Closing instructions can be part of the general directions or a skill description.

#### Follow up and closing example 

- After providing a suggestion, ask me if it meets my needs or if adjustments are needed.
- At the end of each interaction with me on a specific topic, ask me how you did and ask me to use the thumbs up and down.

## Iterate on your instructions

Developing instructions for declarative agents is often iterative and typically consists of the following steps:

1.  **Create** instructions and conversation starters for your agent following the structure and format described in this article.
2.  **Publish** your agent. Responsible AI practices are integrated into the validation process to ensure that agents uphold ethical standards. For more details, see:  
    - [Responsible AI tools and practices](https://www.microsoft.com/ai/tools-practices)  
    - [Apps powered by artificial intelligence](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#apps-powered-by-artificial-intelligence?context=/microsoft-365-copilot/extensibility/context)
3.  **Test** your agent.
    1.  Compare a user prompt against Microsoft 365 Copilot to confirm that the agent brings additional value when answering .
    2.  Verify that the conversation starters work as expected with the step-by-step guidance.
    3.  Verify that the agent acts according to the instructions provided.
    4.  Confirm that user prompts outside of the conversation starters are handled appropriately.
4.  **Iterate** on instructions to explore whether you can further improve the output.
    - Modify instructions to change the behavior of the agent.
    - Try adding knowledge like web search, OneDrive/SharePoint, or Microsoft Graph connectors, if needed using Teams Toolkit or Copilot Studio.

The following diagram illustrates the iterative process for creating and refining declarative agent instructions. 

:::image type="content" source="assets/images/instruction-process.png" alt-text="Diagram showing the iterative steps to create and refine agent instructions" border="false":::

## Best practices for agent instructions

In summary, it's important to keep your agent instructions structured and follow an iterative process of to test and improve your instructions until the agent provides satisfying results.

As you develop your instructions, apply the following best practices:

- **Be specific**. Vague or ambiguous instructions can lead to misunderstandings and incorrect responses. Clearly define the tasks, context, expectations, and any specific requirements.

- **Break tasks into smaller steps**. Performance is better when the flow consists of smaller and more granular steps.

- **Use clear syntax**. Include punctuation, headings, and section separators that allow easier parsing of the instructions. Use delimiters between sections to separate instructions from examples.

- **Use examples**. Provide detailed examples and scenarios to illustrate the desired outcomes. The more precise the instructions, the better the agent can perform its tasks accurately and efficiently. **Few-shot prompting** involves providing the agent with a few solved examples before asking it to solve a new problem. **Chain-of-thought** techniques instruct the agent to provide a step-by-step solution.

- **Use Do instead of Do Not**. Tell the agent what to do; avoid telling it what not to do. Telling the agent what to do provides more specificity.

- **Add knowledge**. If you add knowledge to the agent, describe what is represented by each knowledge source in your instructions.

## Declarative agent manifest

For a sample manifest file for a declarative agent created with the Teams Toolkit, see [Declarative agent schema for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/declarative-agent-manifest#declarative-agent-manifest-example).

The manifest includes the following fields:

- **Instructions** references the instructions file. This separation makes it easier for you to read the instructions.

- **Conversation starters** provide sample prompts for a user to show how the agent can be used.

- **Capabilities** allow you to add web search, OneDrive/SharePoint, or Microsoft Graph connectors knowledge.

> [!NOTE]
> You can also use Copilot Studio to create declarative agents. For details, see [Create a copilot extension](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext).

The following image shows a manifest file for a declarative agent.

:::image type="content" source="assets/images/instruction-manifest.png" alt-text="A declarative agent manifest file" border="false":::

The following image shows an instructions file for a declarative agent.

:::image type="content" source="assets/images/instruction-declarative-agent.png" alt-text="Instructions for a declarative agent" border="false":::

