---
title: TypeSpec for Microsoft 365 Copilot overview
description: Learn about TypeSpec for Microsoft 365 Copilot, a powerful domain-specific language for building declarative agents and API plugins
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: overview
---

# TypeSpec for Microsoft 365 Copilot overview

TypeSpec for Microsoft 365 Copilot is a powerful domain-specific language (DSL) that enables developers to create declarative agents and API plugins using a clean, expressive syntax. Built on the foundation of [TypeSpec](https://typespec.io/), this specialized language provides Microsoft 365-specific decorators and capabilities that streamline the development process for extending Microsoft 365 Copilot. TypeSpec serves as an alternative to manually authoring JSON manifest files, offering a more developer-friendly approach with enhanced productivity and maintainability.

TypeSpec for Microsoft 365 Copilot transforms how developers build Copilot extensibility solutions by providing a high-level abstraction layer over complex JSON schemas. The language automatically generates the required manifest files and configurations, reducing development time and minimizing errors. With its rich IntelliSense support, type safety, and comprehensive validation, TypeSpec empowers developers to focus on building innovative AI-powered experiences rather than wrestling with configuration details.

## Type safety and developer experience

TypeSpec for Microsoft 365 Copilot provides a strongly typed development experience that catches errors at compile time rather than runtime. The language includes comprehensive type checking for all Microsoft 365 Copilot-specific constructs, ensuring that your declarative agents and API plugins are correctly configured before deployment. This type safety extends to all aspects of your agent definition, from basic metadata to complex capability configurations and API operation definitions.

The developer experience is enhanced through rich IntelliSense support in Visual Studio Code, providing real-time feedback, auto-completion, and inline documentation. The language integrates seamlessly with the Microsoft 365 Agents Toolkit, offering a complete development workflow from creation to deployment. Error messages are clear and actionable, helping developers quickly identify and resolve issues during development.

## Simplified agent and plugin authoring

TypeSpec dramatically simplifies the process of creating declarative agents and API plugins by replacing verbose JSON configurations with intuitive, decorator-based syntax. Instead of manually crafting complex manifest files, developers can use semantic decorators like `@agent`, `@instructions`, and `@capabilities` to define their agents. This approach reduces the likelihood of configuration errors and makes the codebase more maintainable and readable.

The language provides built-in decorators for all Microsoft 365 Copilot capabilities, including web search, OneDrive and SharePoint integration, Teams messages, code interpreter, and more. API plugins benefit from automatic OpenAPI specification generation, where TypeSpec operations are seamlessly converted into REST API definitions. This automation eliminates the need to maintain separate API documentation and ensures consistency between your TypeSpec definitions and the resulting API contracts.

## Automatic manifest generation and validation

One of the most powerful features of TypeSpec for Microsoft 365 Copilot is its ability to automatically generate valid manifest files from your TypeSpec definitions. The language compiler analyzes your TypeSpec code and produces the appropriate JSON manifests for declarative agents and API plugins, ensuring they conform to the latest schema requirements. This generation process includes comprehensive validation, catching common configuration errors before they reach production.

The automatic generation extends beyond basic manifest creation to include complex configurations such as adaptive cards, authentication settings, and capability-specific metadata. TypeSpec validates all references, ensures proper data binding for adaptive cards, and verifies that all required properties are present. This validation occurs during the build process, providing immediate feedback to developers and preventing deployment of invalid configurations.

## Examples

Here are practical examples demonstrating TypeSpec for Microsoft 365 Copilot syntax:

### Basic declarative agent

```typespec
@agent(
  "Customer Support Assistant",
  "An AI agent that helps with customer support inquiries and ticket management"
)
@instructions("""
  You are a customer support specialist. Help users with their inquiries,
  provide troubleshooting steps, and escalate complex issues when necessary.
  Always maintain a helpful and professional tone.
""")
@conversationStarter(#{
  title: "Check Ticket Status",
  text: "What's the status of my support ticket?"
})
namespace CustomerSupportAgent {
  // Agent capabilities defined here
}
```

### Agent with capabilities

```typespec
namespace MyAgent {
  op webSearch is AgentCapabilities.WebSearch<TSites = [
    {
      url: "https://docs.microsoft.com"
    }
  ]>;

  op oneDriveSearch is AgentCapabilities.OneDriveAndSharePoint<
    TItemsByUrl = [
      {
        url: "https://contoso.sharepoint.com/sites/projects"
      }
    ]
  >;

  op codeInterpreter is AgentCapabilities.CodeInterpreter;
}
```

### API plugin with operations

```typespec
@service
@server("https://api.contoso.com")
@actions(#{
  nameForHuman: "Project Management API",
  descriptionForHuman: "Manage projects and tasks",
  descriptionForModel: "API for creating, updating, and tracking project tasks"
})
namespace ProjectAPI {
  @route("/projects")
  @get op listProjects(): Project[];

  @route("/projects/{id}")
  @get op getProject(@path id: string): Project;

  @route("/projects")
  @post op createProject(@body project: CreateProjectRequest): Project;
}
```

## Get started

Ready to start building with TypeSpec for Microsoft 365 Copilot? Follow these steps:

- **[Build declarative agents with TypeSpec](build-declarative-agents-typespec.md)** - Step-by-step tutorial for creating a declarative agent using TypeSpec and the Microsoft 365 Agents Toolkit
- **[Build API plugins with TypeSpec](build-api-plugins-typespec.md)** - Complete guide to creating API plugins with REST operations, adaptive cards, and authentication
- **[Start with a sample](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples)** - Community-provided samples that can get you inspired!

## Related content

- [TypeSpec for Microsoft 365 Copilot reference](typespec-reference.md) - Complete reference for all decorators and language features
- [Declarative agents overview](overview-declarative-agent.md) - Understanding declarative agents and their capabilities
- [API plugins overview](overview-api-plugins.md) - Learn about API plugins and their role in Microsoft 365 Copilot
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) - The official development toolkit for building Copilot extensions
- [TypeSpec language documentation](https://typespec.io/) - Official TypeSpec language specification and guides