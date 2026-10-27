---
title: "Declarative agent architecture"
description: Understand the managed runtime, developer responsibilities, data flow, and design constraints of declarative agents in Microsoft 365 Copilot.
#customer intent: As a developer, I want to understand which parts of a declarative agent I control so that I can choose an architecture that fits my scenario.
author: TheBluLion
ms.author: euloh
ms.reviewer: jhaskett-msft
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 10/23/2026
ms.contributor: mapichle, ericsche
---

# Declarative agent architecture

Declarative agents run on Microsoft 365 Copilot's managed orchestration and language-model infrastructure. You configure the agent's instructions, knowledge sources, and supported capabilities rather than implementing and hosting your own conversational runtime.

An agent can use Microsoft 365 knowledge sources, built-in capabilities such as code interpreter, [custom skills (preview)](declarative-agent-skills.md), and actions provided by MCP servers or REST APIs. It can also delegate tasks to [connected agents](declarative-agent-connected-agent.md). Availability depends on the authoring tool, manifest version, target experience, licensing, and organizational policies.

Use this article to understand the boundary between the managed platform and the components you configure or operate. For a comparison with an architecture that gives you control over orchestration and model hosting, see [Compare declarative and custom engine agents](agents-overview.md).

## Architecture components

Microsoft 365 Copilot provides the runtime that interprets user requests, retrieves relevant context, selects capabilities, and generates responses. Your configuration and external services determine what the agent can use to complete a task.

<!-- Art Library Source# ConceptArt-0-000-150 -->
:::image type="content" source="assets/images/declarative-agents/declarative-agents-architecture-diagram.png" alt-text="Diagram of the architecture of a declarative agent." lightbox="assets/images/declarative-agents/declarative-agents-architecture-diagram.png":::

| Component | Managed platform | Developer responsibilities |
|-----------|------------------|----------------------------|
| Client | Hosts conversations in supported Microsoft 365 experiences. | Choose target experiences and test their supported interactions, document context, and response formats. |
| Infrastructure | Hosts the Copilot orchestration and model runtime. | Configure the agent and host any external APIs, MCP servers, or other services it uses. |
| Catalog and distribution | Provides supported acquisition, publishing, and administration experiences. | Select the supported package and distribution route, maintain versions, and work with administrators on access and deployment. |
| Security and compliance | Applies Microsoft 365 identity, data-access, and platform protections. | Configure permissions and authentication, evaluate data flows, and enforce authorization and data protection in external services. |
| Orchestrator and language model | Selects and invokes capabilities and generates responses. | Write instructions and tool descriptions, configure supported behavior settings, and evaluate the resulting behavior. You don't replace the managed orchestrator with custom runtime code. |
| Knowledge and capabilities | Retrieves supported knowledge and runs enabled built-in capabilities. | Select relevant sources and capabilities, confirm user access, and test retrieval quality. |
| Tool calling | Invokes configured MCP or API actions through the supported integration. | Define tool inputs and outputs, configure authentication and confirmations, and implement reliable service behavior. |

Supported configuration settings influence the managed runtime; they don't give you full control over its implementation. For example, the manifest supports a [default response mode](declarative-agent-manifest-1.9.md#default-response-mode-values), which users can override. Follow the selected manifest schema and authoring tool for available settings.

> [!NOTE]
> Retrieved content and tool responses can contain untrusted instructions. Platform protections don't replace authorization checks in your services or evaluation of the agent's behavior. Plan the applicable [data, privacy, and security requirements](data-privacy-security.md).

## Declarative agent data flow

The following conceptual flow describes how an agent uses its configuration and capabilities. It isn't a fixed execution sequence or a guarantee of how many retrievals or tool calls occur.

1. **Receive a request.** The user submits a prompt in a supported experience. Conversation history and available app context can contribute to the request.
1. **Select relevant context and capabilities.** Copilot uses the agent's instructions, knowledge configuration, and tool descriptions to determine how to address the request.
1. **Retrieve information or invoke actions.** Copilot retrieves available knowledge or calls an enabled capability. External actions use the configured authentication and [confirmation behavior](plugin-confirmation-prompts.md). External services enforce their own authorization and business rules.
1. **Generate a response.** Copilot uses the available context and capability results to respond. Depending on the task, the interaction can include further calls, requests for user input, or delegation to a connected agent.

Declarative agents can chain API calls, use one call's output as another call's input, and combine SharePoint knowledge or code interpreter with API actions. For supported patterns and examples, see [Chaining function calls in API plugins](instructions-api-plugins.md#chaining-function-calls-in-api-plugins).

Instructions guide model behavior; they aren't a substitute for application logic that must enforce a transaction, exact execution order, or recovery procedure. Implement those requirements in an API or workflow service, or evaluate a custom engine architecture when you need to own the orchestration.

### Design for capability-specific limits

Check limits in the guidance for each capability and integration. A manifest field's character limit, a knowledge-source configuration limit, and a runtime context limit describe different constraints.

| Area | Design consideration | Guidance |
|------|----------------------|----------|
| Agent configuration | Use properties and capabilities supported by the selected schema version and authoring tool. | [Declarative agent manifest reference](declarative-agent-manifest-1.9.md) |
| Knowledge retrieval | Select relevant sources and follow source-specific file, scope, access, and indexing requirements. A response doesn't necessarily include every item in a source. | [Knowledge sources](knowledge-sources.md) and [Optimize content retrieval](optimize-content-retrieval.md) |
| Tool definitions and payloads | Keep tools focused and inputs and outputs relevant. Large plugin inputs and outputs can be truncated, and effective context limits can change with models and system overhead. | [MCP and API plugin limitations](overview-plugins.md#limitations) |
| Document context | Follow the host app's supported document interactions and content formats rather than assuming all document content is represented identically. | [Interact with documents](declarative-agent-document-interaction.md) |
| Service behavior and latency | Test response times, authentication failures, service errors, and the limits of your external APIs or MCP servers. | [Integrate and test components](integrate-test-plugin-components.md) |

For large data sets, design APIs to filter, aggregate, or return the relevant subset rather than sending all records into a conversation. When a scenario needs document content, test the supported host experience: declarative agents can access the entire open document in Word and PowerPoint, subject to the [document-format considerations](declarative-agent-document-interaction.md#document-format).

## Advantages and limitations

Key advantages and primary limitations of declarative agents help determine when this architecture is appropriate for specific use cases.

### Key advantages

Declarative agents provide significant benefits for organizations that want to implement AI solutions within existing Microsoft 365 environments:

- **Managed conversational runtime**: Microsoft hosts the orchestrator and model infrastructure, so you don't need to implement that runtime.
- **Access to Microsoft capabilities**: Agents can use supported knowledge sources and built-in capabilities alongside external tools.
- **Configuration-based customization**: Instructions, capabilities, and actions tailor the experience without requiring a custom conversational engine. External integrations can still require code and hosting.

### Primary limitations

The declarative approach also introduces constraints that might limit certain use cases:

- **Managed orchestration**: You influence behavior through supported configuration rather than controlling every runtime decision. Evaluate representative tasks instead of treating instructions as a deterministic workflow engine.
- **Platform and host dependencies**: Capabilities, response presentation, licensing, and administration depend on the selected Microsoft 365 experience. Confirm support in each target host.
- **Context and retrieval constraints**: Knowledge retrieval and tool results must fit the available context. Large sources or payloads don't guarantee complete coverage in a response.
- **Dynamic web content considerations**: Scoped web search uses Bing-indexed content rather than directly querying the underlying data source. Dynamically generated content can be incomplete or stale. Use a supported API integration when the task requires direct access to current, structured data. See [Web search grounding and dynamic content](knowledge-sources.md#web-search-grounding-and-dynamic-content).
- **Ongoing evaluation**: Platform and model updates can change behavior. Test instructions, retrieval, and tool use as the agent and its dependencies evolve.

## Use case alignment

Choose the architecture based on the control your solution requires, not simply on whether the task has multiple steps.

### Optimal scenarios

Declarative agents are optimal for:

- **Information retrieval**: Agents that primarily need to search and summarize information from Microsoft 365 or external sources.
- **Assisted actions**: Agents that combine knowledge and supported API or MCP actions to help users complete a task.
- **Document assistance and analysis**: Agents that work with supported document context or use capabilities such as code interpreter.
- **Productivity enhancement**: Tasks that benefit from a managed conversational experience within Microsoft 365.

### Unsuitable scenarios

Consider a custom engine agent or a separately implemented workflow when your requirements include:

- **Custom runtime control**: You must implement your own orchestration, model hosting, or user interface rather than use the managed Copilot runtime.
- **Durable business processes**: The system must enforce exact execution order, transaction boundaries, retries, or recovery independently of a conversation.
- **Large-scale data processing**: The task requires exhaustive processing of a data set rather than retrieval or analysis of relevant conversational context. Perform that processing in a service and expose the appropriate result to the agent.
- **Direct access to dynamic sources**: The task requires current, ordered results from a source that isn't adequately represented in web search. Provide a supported API or MCP integration instead of relying on scoped web search alone.

These requirements don't always exclude a declarative agent as the conversational interface. A service can own the business process while the agent gathers inputs, invokes a supported action, and presents the result.

## Related content

- [Agents overview](agents-overview.md)
- [Custom engine agent architecture](custom-engine-agent-architecture.md)
- [MCP and API plugins for declarative agents](overview-plugins.md)
- [Chaining function calls in API plugins](instructions-api-plugins.md#chaining-function-calls-in-api-plugins)
- [Connect to other agents](declarative-agent-connected-agent.md)
- [Plan data, privacy, and security](data-privacy-security.md)
- [Web and scoped web search](knowledge-sources.md#web-and-scoped-web-search)
