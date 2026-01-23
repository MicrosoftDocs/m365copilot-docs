---
title: Microsoft Work IQ CLI (Technical Preview)
description: Learn how to use Microsoft Work IQ CLI and MCP server to query your Microsoft 365 Copilot data using natural language from AI assistants and IDEs.
author: slevert
ms.author: slevert
ms.topic: overview
ms.localizationpriority: medium
ms.date: 01/23/2026
---

# Microsoft Work IQ CLI (Public Preview)

Microsoft Work IQ is a command-line interface (CLI) and Model Context Protocol (MCP) server that connects AI assistants to your Microsoft 365 Copilot data. Work IQ enables you to query your emails, meetings, documents, Teams messages, workplace insights, people-related information and more using natural language.

With Work IQ, you can ask questions like:

- "What did my manager say about the project deadline?"
- "Find my recent documents about Q4 planning"
- "Summarize today's messages in the Engineering channel and propose a plan of action"

> [!IMPORTANT]
> Work IQ is currently in public preview. Features and APIs may change.

## What is the Work IQ CLI?

The Work IQ CLI bridges the gap between AI coding assistants and your Microsoft 365 data. By exposing your Microsoft 365 Copilot data through the Model Context Protocol, Work IQ enables AI assistants in your development environment to access and reason over your workplace information.

Key capabilities include:

| Data type | Example queries |
| --- | --- |
| **Emails** | "What did John say about the proposal?" |
| **Meetings** | "What's on my calendar tomorrow?" |
| **Documents** | "Find my recent PowerPoint presentations" |
| **Teams messages** | "Summarize today's messages in the Engineering channel" |
| **People** | "Who is working on Project Alpha?" |

## How Work IQ works

Work IQ operates in two modes:

- **CLI mode**: Run queries directly from your terminal with the `workiq ask` command.
- **MCP server mode**: Integrate with AI assistants like GitHub Copilot in VS Code or in the CLI, allowing your coding assistant to access your Microsoft 365 data contextually.

The MCP server mode is particularly powerful because it allows your AI assistant to automatically pull in relevant workplace context when you're working on code. For example, if you're implementing a feature discussed in a recent meeting, your AI assistant can access that meeting context to provide more relevant suggestions and even start the implementation.

## Prerequisites

Before you can use Work IQ, ensure you have:

- Node.js installed on your machine
- A Microsoft 365 subscription with Copilot
- Administrative consent for the Work IQ application in your Microsoft Entra tenant

> [!NOTE]
> To access Microsoft 365 tenant data, the Work IQ CLI and MCP Server need to be consented to permissions that require administrative rights on the tenant. If you're not a tenant administrator, contact them to provide access. For more information about consent, see [User and admin consent overview](/entra/identity/enterprise-apps/user-admin-consent-overview).

## Platform support

Work IQ supports the following platforms:

- Windows (x64 and ARM64)
- Linux (x64 and ARM64)
- macOS (x64 and ARM64)
- Windows Subsystem for Linux (WSL) with browser support

## Install Work IQ

You can install Work IQ globally using npm or run it directly with npx.

### Install with GitHub Copilot CLI

The fastest way to get started is with GitHub Copilot CLI:

1. Open GitHub Copilot CLI:

   ```bash
   copilot
   ```

1. Add the plugins marketplace (one-time setup):

   ```bash
   /plugin marketplace add github/copilot-plugins
   ```

1. Install WorkIQ:

   ```bash
   /plugin install workiq@copilot-plugins
   ```

1. Restart Copilot CLI and start querying your Microsoft 365 data:

   ```text
   You: What are my upcoming meetings this week?
   You: Summarize emails from Sarah about the budget
   You: Find documents I worked on yesterday
   ```

### Install globally

```bash
npm install -g @microsoft/workiq
```

### Run with npx (no installation required)

```bash
npx -y @microsoft/workiq mcp
```

### Install in VS Code

Use the following buttons to add Work IQ as an MCP server in VS Code:

- [Install in VS Code](https://vscode.dev/redirect/mcp/install?name=workiq&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40microsoft%2Fworkiq%22%2C%22mcp%22%5D%7D)
- [Install in VS Code Insiders](https://insiders.vscode.dev/redirect/mcp/install?name=workiq&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40microsoft%2Fworkiq%22%2C%22mcp%22%5D%7D&quality=insiders)

### Manual MCP configuration

Add the following configuration to your MCP settings file:

```json
{
  "workiq": {
    "command": "npx",
    "args": [
      "-y",
      "@microsoft/workiq",
      "mcp"
    ],
    "tools": [
      "*"
    ]
  }
}
```

## Accept the End User License Agreement

Before using Work IQ for the first time, you must accept the End User License Agreement (EULA):

```bash
workiq accept-eula
```

## CLI reference

### Commands

| Command | Description |
| --- | --- |
| `workiq accept-eula` | Accept the End User License Agreement (EULA) |
| `workiq ask` | Ask a question to a specific agent or run in interactive mode |
| `workiq mcp` | Start MCP stdio server for agent communication |
| `workiq version` | Show version information |

### Global options

| Option | Description | Default |
| --- | --- | --- |
| `-t, --tenant-id <tenant-id>` | The Entra tenant ID to use for authentication | `common` |
| `--version` | Show version information | |
| `-?, -h, --help` | Show help and usage information | |

### workiq ask options

| Option | Description |
| --- | --- |
| `-q, --question <question>` | The question to ask the agent |

## Key scenarios

The following scenarios demonstrate how Work IQ can help you be more productive by connecting your AI assistant to your workplace data.

### Scenario 1: Preparing for a meeting

Before an important meeting, you want to quickly catch up on all related communications and documents. Instead of manually searching through emails and Teams messages, you can use Work IQ to get a comprehensive summary.

**Using the CLI:**

```bash
workiq ask -q "What emails and documents were shared about the Q4 budget review meeting?"
```

**Using GitHub Copilot in VS Code:**

Simply ask your AI assistant: "What context do I need for my upcoming Q4 budget review meeting? Check my emails and Teams messages."

Work IQ searches across your Microsoft 365 data and provides a summary of:

- Recent emails about the budget review
- Documents shared by attendees
- Related Teams discussions
- Key decisions or action items mentioned

### Scenario 2: Finding project context while coding

When you're implementing a feature that was discussed in meetings or emails, Work IQ helps your AI assistant understand the business context behind the code you're writing.

**Using the CLI:**

```bash
workiq ask -q "What requirements did Sarah share about the customer portal authentication feature?"
```

**Using GitHub Copilot in VS Code:**

While writing code, ask: "What authentication requirements did my team discuss for the customer portal? Check my meetings and emails."

Your AI assistant retrieves:

- Meeting notes where the feature was discussed
- Emails with technical requirements
- Shared documents with specifications
- Team feedback and decisions

This context helps your AI assistant provide more relevant code suggestions aligned with your team's decisions.

### Scenario 3: Daily standup preparation

Prepare for your daily standup by quickly summarizing what happened yesterday and what's planned for today.

**Using the CLI:**

```bash
workiq ask
```

This launches interactive mode where you can have a conversation:

```text
You: What meetings did I have yesterday and what were the key outcomes?
You: What's on my calendar for today?
You: Are there any urgent emails I need to respond to?
```

**Using GitHub Copilot in VS Code:**

Ask your AI assistant: "Help me prepare for standup. What did I work on yesterday based on my meetings and emails, and what's on my calendar today?"

Work IQ provides:

- Summary of yesterday's meetings with key decisions
- Today's scheduled meetings and their context
- Pending emails that may require action
- Teams messages that need your attention

## Security and privacy

Work IQ inherits all data protections provided by Microsoft 365 Copilot:

- **Enterprise-grade security**: All data access follows your organization's security policies.
- **Respect for permissions**: Work IQ can only access data you already have permission to view.
- **Admin visibility**: Enterprise administrators have visibility into and control over Work IQ usage within their tenant.
- **No data storage**: Work IQ doesn't store your Microsoft 365 data. It retrieves information on-demand when you make queries.

## Provide feedback

Work IQ is a proprietary tool, but the development team welcomes community feedback. Use the [GitHub Issues](https://github.com/microsoft/work-iq-mcp/issues) page to:

- Create bug reports based on your experience
- Provide feedback on documented behavior and APIs
- Suggest features or product improvements
- Share insights on developer experience or integration scenarios

## Related content

- [Model Context Protocol documentation](https://modelcontextprotocol.io/)
- [Build plugins from an MCP server for Microsoft 365 Copilot](build-mcp-plugins.md)
- [User and admin consent overview](/entra/identity/enterprise-apps/user-admin-consent-overview)
