---
title: Write effective instructions for declarative agents
description: Learn how to write effective instructions for your declarative agent.
author: lauragra
ms.author: jchudakova,avalluri,sumalle
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 02/19/2025
---

# Overview

Declarative agents are customized versions of Microsoft 365 Copilot that help you to create personalized experiences by declaring specific instructions, actions, and knowledge. To fully embrace the power of instructions in Declarative Agents, take a step back and think of the following aspects to include in your Declarative Agent’s instructions:
1.	What is the goal your agent must accomplish?
2.	What Workflows do you envision your end users going through:
  a.	Is there any Business logic you would like to incorporate?
  b.	Is there any desired end user experience you would like to incorporate?
3.	For each workflow listed above, you may include detailed step by step instructions detailing what the agent must do.

If your Declarative Agent also has Actions (API Plugins), then also read [How to make an OpenAPI document effective in extending Copilot capabilities | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/openapi-document-guidance). OpenAPI spec helps the Agent understand ‘how’ to execute any instruction involving executing an API.

This guidance applies to developers and makers who are using Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)) or [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) to create declarative agents.

## Instruction components

A well-structured set of instructions ensures that the agent understands its role and tasks and how to interact with users. The following are the main components of declarative agent instructions:

- Purpose
- General guidelines, including general directions, tone, and restrictions
- Skills

In addition, when relevant, instructions include:

- Step-by-step instructions
- Error handling and limitations
- Feedback and iteration
- Interaction examples
- Non-standard terms
- Follow-up and closing

The following diagram shows the primary components of declarative agent instructions.

:::image type="content" source="assets/images/instruction-components.png" alt-text="Diagram of the components of agent instructions, including purpose, guidelines, and skills" border="false":::

<!-- ### Purpose

Clearly define the role and the area of expertise of the agent, including the primary function it serves.

```md
You're a learning coach, dedicated to helping me enhance my understanding of complex topics, practice existing skills, and find the right learning process.
```

### Guidelines

Define how the agent should communicate. An agent might be concise, detailed, interactive, or suggestive. Also include any restrictions that should be applied.

```md
1. Avoid sharing external links.
2. Maintain an informal tone throughout our interactions.
```

### Skills

List the main tasks the agent is expected to perform. This can include generating suggestions, automating tasks, providing explanations, or guiding the user through processes. It can also reflect the agent conversation starters.

```md
You're a learning coach. When asked a question, break down complex concepts into beginner, intermediate, and advanced levels.
Use different techniques for learning complex topics depending on the topic.
```

### Step-by-step instructions

Clearly define the workflow structure and outline the order in which to complete tasks. This helps the agent to guide users through processes in a logical and efficient way. For example, if a task involves multiple steps, instruct the agent that the steps should be completed in sequential order and that that users must complete each step before they move on to the next.

```md
Follow these steps:
1. Ask for the name of the individual.
2. List the nomination categories.
3. Ask about their contributions.
4. Draft the nomination.
```

### Interaction examples

Provide examples of ideal interactions that show how the agent should respond in different scenarios.

```md
**User prompt**: I'm having trouble understanding the basics of machine learning. Can you explain it to me?

**Learning coach response**:

- **Beginner explanation**: Machine learning is a type of artificial intelligence where computers learn from data to make decisions or predictions. Think of it like teaching a dog new tricks - at first, it needs guidance, but over time, it learns to do it on its own with practice.
- **Intermediate explanation**: At a higher level, machine learning involves algorithms that find patterns in data. These patterns help the machine make predictions or decisions without being explicitly programmed. For example, a machine learning model could predict house prices based on historical data.
- **Advanced explanation**: "In technical terms, machine learning uses statistical techniques and algorithms like linear regression, decision trees, and neural networks to build models that generalize well on new data, minimizing error through optimization techniques.
```

### Error handling and limitations

Instruct the agent how to handle situations when a user requests something without providing the necessary prerequisites. If it is important for the agent not to mention specific topics, state this clearly in the instructions.

Error handling can be part of the general directions or a specific skill description.

```md
- If you encounter a situation where you cannot proceed, respond with, "I need more information to assist you further. Could you clarify?"
- Avoid providing external links.
```

### Feedback and iteration

Instruct the agent to seek feedback from the user to refine its suggestions and improve the interaction.

Feedback can be part of the general directions or a skill description.

```md
- After providing a suggestion, ask me if it meets my needs or if adjustments are needed.
- If I provide feedback, adjust your response or offer alternative solutions.
- Continue refining your suggestions based on my input until I'm satisfied.
```

### Non-standard terms

Define any specific terms that are non-standard or unique to the organization in the instructions. This ensures that the agent understands and uses these terms correctly in its responses. Providing a glossary of these terms can be helpful for both the agent and the users.

Term definitions can be part of the general directions or a specific skill description.

```md
LEU means Learning Engagement Units. This term is used to quantify the engagement level of learners in various training programs.
```

### Follow-up and closing

Instruct the agent to follow up interactions to remind users that it is available for further assistance and offer to help with related tasks.

Also instruct the agent how to properly close a session, such as by summarizing what was achieved or suggesting next steps.

Closing instructions can be part of the general directions or a skill description.

```md
- After providing a suggestion, ask me if it meets my needs or if adjustments are needed.
- At the end of each interaction with me on a specific topic, ask me how you did and ask me to use the thumbs up and down.
```
-->
## Use Clear, Actionable Language
- **Focus on what Copilot should do**—not what to avoid.
- Use precise, specific verbs: **ask, search, send, check, use.**
- Supplement with examples to minimize ambiguity.
- Define any specific terms that are non-standard or unique to the organization in the instructions. 

## Build Step-by-Step Workflows with Transitions
Break workflows into modular, unambiguous, and non-conflicting steps. Each step should include:
- **Goal**: The purpose of the step.
- **Action**: What the agent should do and which tool(s) to use.
- **Transition**: Clear criteria for moving to the next step or ending the workflow.

## Structure instructions in Markdown
To provide emphasis and clarity on order of steps, use markdown:
- Use #, ##, and ### for section headers.
- Use - for bullet points and 1. for numbered lists. Prefer to use bullet points unless the order of steps is important in which case use numbered lists. Also nest lists properly, that is, use indentations (two spaces or a tab) for sub points under a main bullet.
- Highlight tool or system names (e.g., `Jira`, `ServiceNow`, `Teams`) using backticks.
- **Bold** critical instructions

## Explicitly reference the capabilities, knowledge and actions
Clearly call out the names of the actions, capabilities, or knowledge sources involved at each step:
- **Actions**: e.g., Use `Jira` to fetch tickets.
- **Graph Connector Knowledge**: e.g., Use `ServiceNow KB` for help articles.
- **SharePoint Knowledge**: e.g., Reference SharePoint or OneDrive internal documents.
- **Email Messages**: e.g., Check user emails for relevant information.
- **Teams Messages**: e.g., Search Teams chat history.
- **Code Interpreter**: e.g., Use code interpreter to generate bar or pie charts.
- **People Capability**: e.g., Use people capability to fetch user email or UPN.

## Provide examples
Sometimes the instructions might be hard to understand- and examples work well here:
- For simple scenarios, you do not need to give examples.
- For complex scenarios, Declarative agents work best with _few shot prompting_. That is, give more than one example to illustrate different aspects or edge cases.

## Common Prompt Failure Modes
Be aware of these pitfalls and their solutions:
- **Over-eager tool use**:
-   _Problem_: The model may call tools without needed inputs.
-   _Solution_: Instruct: “Only call the tool if required inputs are available; otherwise, ask the user.”
- **Repetitive phrasing**:
-   _Problem_: The model reuses example phrasing verbatim.
-   _Solution_: Encourage varied responses and natural language. Also consider adding more than one example instead of just one (_few shot prompting_). Or experiment with altogether removing the example to save on tokens.
- **Verbose explanations**:
-   _Problem_: The model may over-explain or provide excessive formatting.
-   _Solution_: Add constraints and concise examples to limit verbosity.

## Iterate on your instructions
Developing instructions for declarative agents is often iterative and typically consists of the following steps:

1. **Create** instructions and conversation starters for your agent following the structure and format described in this article.
1. **Publish** your agent. Responsible AI (RAI) practices are integrated into the validation process to ensure that agents uphold ethical standards. For more details, see:
    - [RAI validation](rai-validation.md)
    - [RAI tools and practices](https://www.microsoft.com/ai/tools-practices)
    - [Apps powered by artificial intelligence](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#apps-powered-by-artificial-intelligence?context=/microsoft-365-copilot/extensibility/context)
1. **Test** your agent.
    1. Compare a user prompt against Microsoft 365 Copilot to confirm that the agent brings additional value when answering.
    1. Verify that the conversation starters work as expected with the step-by-step guidance.
    1. Verify that the agent acts according to the instructions provided.
    1. Confirm that user prompts outside of the conversation starters are handled appropriately.
1. **Iterate** on instructions to explore whether you can further improve the output.
    - Modify instructions to change the behavior of the agent.
    - Try adding knowledge like web search, OneDrive/SharePoint, or Microsoft 365 Copilot connectors (formerly Microsoft Graph connectors), if needed using Agents Toolkit or Copilot Studio.

The following diagram illustrates the iterative process for creating and refining declarative agent instructions.

:::image type="content" source="assets/images/instruction-process.png" alt-text="Diagram showing the iterative steps to create and refine agent instructions" border="false":::
<!--
## Best practices for agent instructions

In summary, it's important to keep your agent instructions structured and follow an iterative process of to test and improve your instructions until the agent provides satisfying results.

As you develop your instructions, apply the following best practices:

- **Be specific**. Vague or ambiguous instructions can lead to misunderstandings and incorrect responses. Clearly define the tasks, context, expectations, and any specific requirements.

- **Break tasks into smaller steps**. Performance is better when the flow consists of smaller and more granular steps.

- **Use clear syntax**. Include punctuation, headings, and section separators that allow easier parsing of the instructions. Use delimiters between sections to separate instructions from examples.

- **Use examples**. Provide detailed examples and scenarios to illustrate the desired outcomes. The more precise the instructions, the better the agent can perform its tasks accurately and efficiently. **Few-shot prompting** involves providing the agent with a few solved examples before asking it to solve a new problem. **Chain-of-thought** techniques instruct the agent to provide a step-by-step solution.

- **Use Do instead of Do Not**. Tell the agent what to do; avoid telling it what not to do. Telling the agent what to do provides more specificity.

- **Avoid contrasting instructions**. Describe the expected behavior of the agent under valid or positive use cases only instead of giving both valid/positive and invalid/negative instructions. Such instructions create ambiguity and that can confuse the model. If you must instruct the agent with both valid and invalid use cases, clearly describe the queries that you want the agent to process and provide [interaction examples](#interaction-examples) to show the expected response to each query.

- **Add knowledge**. If you add knowledge to the agent, describe what is represented by each knowledge source in your instructions. -->

## Example Instruction Template
Below is sample instructions for an Agent which can help resolving common IT issues.

```md
# OBJECTIVE
Guide users through issue resolution by gathering information, checking outages, narrowing down solutions, and creating tickets if needed. Ensure the interaction is focused, friendly, and efficient.

# RESPONSE RULES
- Ask one clarifying question at a time, only when needed.
- Present information as concise bullet points or tables.
- Avoid overwhelming users with details or options.
- Always confirm before moving to the next step or ending.
- Use tools only if data is sufficient; otherwise, ask for missing info.

# WORKFLOW

## Step 1: Gather Basic Details
- **Goal:** Identify the user’s issue.
- **Action:**
  - Proceed if the description is clear.
  - If unclear, ask a single, focused clarifying question.
    - Example:
      User: “Issue accessing a portal.”
      Assistant: “Which portal?”
- **Transition:** Once clear, proceed to Step 2.

## Step 2: Check for Ongoing Outages
- **Goal:** Rule out known outages.
- **Action:**
  - Query `ServiceNow` for current outages.
  - If an outage is found:
    - Share details and ETA.
    - Ask: “Is your issue unrelated? If yes, I can help further.”
    - If yes, go to Step 3. If no/no response, end politely.
  - If none, inform the user and go to Step 3.

## Step 3: Narrow Down Resolution
- **Goal:** Find best-fit solutions from the knowledge base.
- **Action:**
  - Search `ServiceNow KB` for related articles.
  - **Iterative narrowing:** Don’t list all results. Instead:
    - Ask clarifying questions based on article differences.
    - Eliminate irrelevant options with user responses.
    - Repeat until the best solution is found.
  - Provide step-by-step fix instructions.
  - Confirm: “Did this help? If not, I can go deeper or create a ticket.”
    - If more info is provided, repeat this step.
    - If ticket needed, go to Step 4.
    - If resolved/no response, end politely.

## Step 4: Create Support Ticket
- **Goal:** Log unresolved issues.
- **Action:**
  1. Map **category** and **subcategory** from the `sys_choice` SharePoint file.
     - Use only valid pairs. Leave blank if not clear.
  2. Fetch user’s UPN (email) with the people capability.
  3. Fill the ticket with:
     - Caller ID (email)
     - Category, Subcategory (if mapped)
     - Description, attempted steps, error codes, metadata
- **Transition:** Confirm ticket creation and next steps.

# OUTPUT FORMATTING RULES
- Use bullets for actions, lists, next steps.
- Use tables for structured data where UI allows.
- Avoid long paragraphs; keep responses skimmable.
- Always confirm before ending or submitting tickets.

# EXAMPLES

## Valid Example
**User:** “I can’t connect to VPN.”  
**Assistant:**
- “Are you seeing a specific error?”  
  (User: “DNS server not responding.”)
- “Let me check for outages.”  
  (No outage.)
- “No outages. Searching knowledge base…”  
  (Finds articles. Asks: “Are you on office Wi-Fi or home?”)
  (User: “Home.”)
- “Try resetting your DNS settings. Here’s how…”
- “Did this help? If not, I can create a support ticket.”

## Invalid Example
- “Here are 15 articles I found…” *(Overwhelms the user)*
- “I’m raising a ticket” *(without confirming details)*


```

## Related content

- For a sample manifest file for a declarative agent created with Agents Toolkit, see [Declarative agent schema for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/declarative-agent-manifest#declarative-agent-manifest-example).
- For information about how to use Copilot Studio to create declarative agents, see [Extend with agents](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext).
- For information about validation requirements for declarative agents, see [Validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365-copilot/extensibility/context).
