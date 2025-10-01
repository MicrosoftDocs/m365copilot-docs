---
title: TypeSpec agents for Microsoft 365 Copilot scenarios
description: End-to-end scenarios using TypeSpec from basic to advanced scenarios, including capabilities, authentication, and real-world examples.
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 -->

# TypeSpec agent scenarios for Microsoft 365 Copilot

This guide provides complete examples of creating TypeSpec agents for Microsoft 365 Copilot, from simple basic agents to complex implementations with multiple capabilities and authentication methods.

[!INCLUDE [preview-disclaimer-typespec](includes/preview-disclaimer-typespec.md)]

## Basic agent with no capabilities

**Use Case**: A simple agent that provides basic information and greetings without any external integrations or special capabilities.

**What it does**: This agent can answer simple questions, provide general information, and have basic conversations. It doesn't need to access external APIs, search the web, or access any Microsoft 365 data.

### [main.tsp](#tab/main)

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;

@agent({
  name: "Basic Helper Agent",
  description: "A simple agent that provides basic information and assistance"
})
@instructions("""
  You are a helpful assistant that provides basic information and support.
  Be friendly, professional, and helpful in all interactions. Provide clear,
  concise answers to user questions. If you don't know something, be honest
  about your limitations and suggest alternative ways to find the information.
""")
namespace BasicHelperAgent {
  // No capabilities defined - agent relies only on built-in conversational abilities
}
```

### [actions.tsp](#tab/actions)

No **actions.tsp** file is required in this scenario.

### [card.json](#tab/card)

No **card.json** file is required in this scenario.

---

## Agent with multiple capabilities

**Use Case**: A knowledge worker assistant that can search the web for information, access an organization's SharePoint content, and find information about colleagues in the organization.

**What it does**: This agent helps knowledge workers by combining web search for external information, file access for document retrieval, and people search for finding colleagues and their contact information. Perfect for research tasks and collaboration scenarios.

### [main.tsp](#tab/main)

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;

@agent({
  name: "Knowledge Worker Assistant",
  description: "An intelligent assistant that helps with research, file management, and finding colleagues"
})
@instructions("""
  You are a knowledgeable research assistant specialized in helping knowledge workers
  find information efficiently. You can search the web for external research, access
  SharePoint documents for organizational content, and help locate colleagues within
  the organization. Always provide comprehensive research results, cite your sources,
  and suggest additional resources when relevant. When searching for people, respect
  privacy and only share publicly available organizational information.
""")
namespace KnowledgeWorkerAgent {
  // Web search capability for external research
  op webSearch is AgentCapabilities.WebSearch<Sites = [
    {
      url: "https://learn.microsoft.com";
    },
    {
      url: "https://www.microsoft.com";
    }
  ]>;

  // OneDrive and SharePoint access for document retrieval
  op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
    ItemsByUrl = [
      { url: "https://contoso.sharepoint.com/sites/IT" }
    ]
  >;

  // People search for finding colleagues
  op people is AgentCapabilities.People;
}
```

### [actions.tsp](#tab/actions)

No **actions.tsp** file is required in this scenario.

### [card.json](#tab/card)

No **card.json** file is required in this scenario.

---

## Simple agent with anonymous API action

**Use Case**: A facilities management agent that helps users report and track maintenance issues using a public repairs API.

**What it does**: This agent allows users to report facility issues (broken equipment, lighting problems, etc.) and check the status of existing repair requests. The repairs API is publicly accessible and doesn't require authentication, making it easy for anyone to report issues.

### [main.tsp](#tab/main)

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "Facilities Repair Agent",
  description: "Report and track facility maintenance issues and repair requests"
})
@instructions("""
  You are a facilities management assistant that helps employees report and track
  maintenance issues. You can help users submit new repair requests by gathering
  all necessary details (description, location, category, priority) and submit
  them to the facilities team. You can also check the status of existing repair
  tickets and provide updates on progress. Always be helpful in categorizing
  issues correctly and setting appropriate priority levels based on safety and
  business impact.
""")
namespace FacilitiesRepairAgent {
  op reportIssue is RepairsAPI.reportIssue;
  op getRepairStatus is RepairsAPI.getRepairStatus;
  op getOpenRepairs is RepairsAPI.getOpenRepairs;
}
```

### [actions.tsp](#tab/actions)

```typescript
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "Facilities Repair API",
    descriptionForModel: "API for reporting and tracking facility maintenance issues and repairs",
    descriptionForHuman: "Use this API to report facility issues and check repair status"
})
@server("https://repairs.contoso.com", "Facilities Repair API")
namespace RepairsAPI {
  @route("/repairs")
  @post
  @action
  op reportIssue(
    @body issue: RepairIssueRequest
  ): RepairIssueResponse;

  @route("/repairs/{ticketId}")
  @get
  @action
  op getRepairStatus(
    @path ticketId: string
  ): RepairStatusResponse;

  @route("/repairs")
  @get
  @action
  op getOpenRepairs(
    @query location?: string,
    @query priority?: "low" | "medium" | "high" | "urgent"
  ): RepairListResponse;

  model RepairIssueRequest {
    title: string;
    description: string;
    location: string;
    category: "electrical" | "plumbing" | "hvac" | "security" | "cleaning" | "other";
    priority: "low" | "medium" | "high" | "urgent";
    reportedBy: string;
  }

  model RepairIssueResponse {
    ticketId: string;
    status: "submitted" | "assigned" | "in-progress" | "completed" | "cancelled";
    estimatedCompletion?: string;
    assignedTechnician?: string;
  }

  model RepairStatusResponse {
    ticketId: string;
    title: string;
    status: "submitted" | "assigned" | "in-progress" | "completed" | "cancelled";
    priority: "low" | "medium" | "high" | "urgent";
    createdDate: string;
    lastUpdated: string;
    assignedTechnician?: string;
    estimatedCompletion?: string;
    completionNotes?: string;
  }

  model RepairListResponse {
    repairs: RepairStatusResponse[];
    totalCount: int32;
  }
}
```

### [card.json](#tab/card)

No **card.json** file is required in this scenario.

---

## Advanced agent with API key authentication

**Use Case**: A repairs management agent that helps teams track and manage facility maintenance tasks using a publicly available API with API key authentication.

**What it does**: This agent provides comprehensive repair management capabilities for maintenance teams. It can list, create, update, and delete repair tasks, filter repairs by assignee or description, and provide rich card-based responses with images. The API key authentication ensures controlled access to the repair management system while demonstrating real-world API integration patterns.

### [main.tsp](#tab/main)

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "Repairs Hub Agent",
  description: "Smart repair management agent for tracking and coordinating facility maintenance tasks"
})
@instructions("""
  You are a specialized repairs management assistant that helps teams efficiently track,
  organize, and coordinate facility maintenance tasks. You excel at managing repair
  workflows including creating detailed repair tickets, assigning tasks to team members,
  tracking progress, and providing status updates. You can filter repairs by various
  criteria such as assignee, keywords in descriptions, or completion status. Always
  provide clear, organized information using tables and cards when displaying repair
  data. When creating repairs, gather all necessary details and confirm the information
  before submission. Help prioritize urgent repairs and ensure proper task assignment
  for optimal team productivity.
""")
@conversationStarter(#{
  title: "List repairs",
  text: "List all repairs"
})
@conversationStarter(#{
  title: "List Karin's repairs",
  text: "List all repairs assigned to Karin"
})
@conversationStarter(#{
  title: "Find oil repairs",
  text: "List all repairs that are about oil"
})
@conversationStarter(#{
  title: "Create repair",
  text: "Create a new repair and assign it to me"
})
namespace RepairsAgent {
  // Repair management operations
  op listRepairs is RepairsHub.listRepairs;
  op createRepair is RepairsHub.createRepair;
  op updateRepair is RepairsHub.updateRepair;
  op deleteRepair is RepairsHub.deleteRepair;
}
```

### [actions.tsp](#tab/actions)

```typescript
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "Repairs Hub API",
    descriptionForModel: "Comprehensive repair management system for tracking maintenance tasks, assignments, and progress",
    descriptionForHuman: "Use this API to manage facility repairs, track assignments, and coordinate maintenance activities"
})
@server("https://repairshub-apikey.contoso.com", "Repairs Hub API")
@useAuth(RepairsHubApiKeyAuth)
namespace RepairsHub {
  @route("/repairs")
  @get
  @action
  @card(#{
    dataPath: "$",
    title: "$.title",
    url: "$.image",
    file: "cards/card.json"
  })
  op listRepairs(
    @query assignedTo?: string
  ): string;

  @route("/repairs")
  @post
  @action
  @capabilities(#{
    confirmation: #{
      type: "AdaptiveCard",
      title: "Create a new repair",
      body: """
      Creating a new repair with the following details:
        * **Title**: {{ function.parameters.title }}
        * **Description**: {{ function.parameters.description }}
        * **Assigned To**: {{ function.parameters.assignedTo }}
      """
    }
  })
  op createRepair(
    @body repair: Repair
  ): Repair;

  @route("/repairs")
  @patch
  @action
  @capabilities(#{
    confirmation: #{
      type: "AdaptiveCard",
      title: "Update repair",
      body: """
      Updating a repair with the following details:
        * **ID**: {{ function.parameters.id }}
        * **Title**: {{ function.parameters.title }}
        * **Description**: {{ function.parameters.description }}
        * **Assigned To**: {{ function.parameters.assignedTo }}
      """
    }
  })
  op updateRepair(
    @body repair: Repair
  ): Repair;

  @route("/repairs")
  @delete
  @action
  @capabilities(#{
    confirmation: #{
      type: "AdaptiveCard",
      title: "Delete a repair",
      body: """
      Deleting a repair with the following details:
        * **ID**: {{ function.parameters.id }}
      """
    }
  })
  op deleteRepair(
    @body repair: Repair
  ): Repair;

  model Repair {
    id?: string;
    title: string;
    description?: string;
    assignedTo?: string;
    @format("date-time")
    date?: string;
    @format("uri")
    image?: string;
  }

  @authReferenceId("${{REPAIRSHUBAPIKEYAUTH_REFERENCE_ID}}")
  model RepairsHubApiKeyAuth is ApiKeyAuth<ApiKeyLocation.query, "code">;
}
```

### [card.json](#tab/card)

The **card.json** file needs to located in the **appPackage/cards** folder.

```json
{
  "type": "AdaptiveCard",
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "$data": "${$root}",
      "items": [
        {
          "type": "TextBlock",
          "text": "id: ${if(id, id, 'N/A')}",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "title: ${if(title, title, 'N/A')}",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "description: ${if(description, description, 'N/A')}",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "assignedTo: ${if(assignedTo, assignedTo, 'N/A')}",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "date: ${if(date, date, 'N/A')}",
          "wrap": true
        },
        {
          "type": "Image",
          "url": "${image}",
          "$when": "${image != null}"
        }
      ]
    }
  ]
}
```

---

## Complex agent with OAuth2 and GitHub API integration

**Use Case**: A project management agent that helps development teams manage their GitHub repositories, track issues, manage pull requests, and coordinate project activities using GitHub's comprehensive API.

**What it does**: This sophisticated agent serves as a project management assistant that integrates with GitHub to help development teams streamline their workflows. It can create and manage issues, review and merge pull requests, track project milestones, and provide insights about repository activity. The OAuth2 authentication ensures secure access to GitHub repositories with appropriate permissions, allowing teams to manage their projects efficiently through natural language interactions.

### [main.tsp](#tab/main)

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "GitHub Project Manager",
  description: "Smart project management agent with GitHub integration for issue tracking, pull request management, and project coordination"
})
@instructions("""
  You are an intelligent project management assistant specialized in GitHub workflows
  and development team coordination. You excel at managing GitHub repositories including
  creating and tracking issues, reviewing pull requests, coordinating project milestones,
  and providing insights about development activity. You can help prioritize work,
  track progress, manage code reviews, and facilitate team collaboration through GitHub's
  project management features. Always consider development best practices, help maintain
  code quality through proper review processes, and provide actionable insights to
  improve team productivity and project delivery.
""")
namespace GitHubProjectManager {
  // GitHub API operations for project management
  op createIssue is GitHubAPI.createIssue;
  op getIssues is GitHubAPI.getIssues;
  op updateIssue is GitHubAPI.updateIssue;
  op getPullRequests is GitHubAPI.getPullRequests;
  op createPullRequest is GitHubAPI.createPullRequest;
  op mergePullRequest is GitHubAPI.mergePullRequest;
  op getProjectInsights is GitHubAPI.getProjectInsights;
}
```

### [actions.tsp](#tab/actions)

```typescript
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "GitHub Project Management API",
    descriptionForModel: "GitHub API integration for project management including issue tracking, pull request management, and project insights",
    descriptionForHuman: "Use this API to manage GitHub repositories, track issues, and coordinate development projects"
})
@server("https://api.github.com", "GitHub API")
@useAuth(OAuth2Auth<[
  OAuthFlow<AuthorizationCodeFlow> & {
    authorizationUrl: "https://github.com/login/oauth/authorize";
    tokenUrl: "https://github.com/login/oauth/access_token";
    scopes: {
      "repo": "Full control of private repositories";
      "issues": "Read and write repository issues";
      "pull_requests": "Read and write pull requests";
      "project": "Read and write project data";
    };
  }
]>)
namespace GitHubAPI {
  // Issue Management
  @route("/repos/{owner}/{repo}/issues")
  @post
  @action
  op createIssue(
    @path owner: string,
    @path repo: string,
    @body issue: IssueCreateRequest
  ): IssueResponse;

  @route("/repos/{owner}/{repo}/issues")
  @get
  @action
  op getIssues(
    @path owner: string,
    @path repo: string,
    @query state?: "open" | "closed" | "all",
    @query labels?: string,
    @query assignee?: string,
    @query milestone?: string,
    @query since?: string
  ): IssueListResponse;

  @route("/repos/{owner}/{repo}/issues/{issue_number}")
  @patch
  @action
  op updateIssue(
    @path owner: string,
    @path repo: string,
    @path issue_number: int32,
    @body update: IssueUpdateRequest
  ): IssueResponse;

  // Pull Request Management
  @route("/repos/{owner}/{repo}/pulls")
  @get
  @action
  op getPullRequests(
    @path owner: string,
    @path repo: string,
    @query state?: "open" | "closed" | "all",
    @query head?: string,
    @query base?: string,
    @query sort?: "created" | "updated" | "popularity"
  ): PullRequestListResponse;

  // Project Insights
  @route("/repos/{owner}/{repo}/stats/contributors")
  @get
  @action
  op getProjectInsights(
    @path owner: string,
    @path repo: string
  ): ProjectInsightsResponse;

  // Request/Response Models
  model IssueCreateRequest {
    title: string;
    body?: string;
    assignees?: string[];
    milestone?: int32;
    labels?: string[];
  }

  model IssueUpdateRequest {
    title?: string;
    body?: string;
    state?: "open" | "closed";
    assignees?: string[];
    milestone?: int32;
    labels?: string[];
  }

  model IssueResponse {
    id: int32;
    number: int32;
    title: string;
    body?: string;
    state: "open" | "closed";
    assignees: User[];
    milestone?: Milestone;
    labels: Label[];
    created_at: string;
    updated_at: string;
    closed_at?: string;
    html_url: string;
  }

  model IssueListResponse {
    issues: IssueResponse[];
    total_count: int32;
  }

  model PullRequestResponse {
    id: int32;
    number: int32;
    title: string;
    body?: string;
    state: "open" | "closed";
    head: BranchInfo;
    base: BranchInfo;
    user: User;
    assignees: User[];
    reviewers: User[];
    created_at: string;
    updated_at: string;
    merged_at?: string;
    html_url: string;
    draft: boolean;
  }

  model PullRequestListResponse {
    pull_requests: PullRequestResponse[];
    total_count: int32;
  }

  model ProjectInsightsResponse {
    total_commits: int32;
    contributors: ContributorStats[];
    top_languages: LanguageStats[];
    recent_activity: ActivitySummary;
  }

  model User {
    id: int32;
    login: string;
    avatar_url: string;
    html_url: string;
  }

  model Milestone {
    id: int32;
    number: int32;
    title: string;
    description?: string;
    state: "open" | "closed";
    due_on?: string;
  }

  model Label {
    id: int32;
    name: string;
    description?: string;
    color: string;
  }

  model BranchInfo {
    label: string;
    ref: string;
    sha: string;
    repo: RepositoryInfo;
  }

  model RepositoryInfo {
    id: int32;
    name: string;
    full_name: string;
    owner: User;
    html_url: string;
  }

  model ContributorStats {
    author: User;
    total_commits: int32;
    weeks: WeeklyStats[];
  }

  model WeeklyStats {
    week: string;
    additions: int32;
    deletions: int32;
    commits: int32;
  }

  model LanguageStats {
    language: string;
    bytes: int32;
    percentage: float64;
  }

  model ActivitySummary {
    commits_last_week: int32;
    issues_opened: int32;
    issues_closed: int32;
    pull_requests_opened: int32;
    pull_requests_merged: int32;
  }
}
```

### [card.json](#tab/card)

No **card.json** file is required in this scenario.

---

## Summary

These examples demonstrate the progression from simple to complex TypeSpec agents:

- [Basic agent](#basic-agent-with-no-capabilities): No capabilities, pure conversational AI
- [Multi-capability agent](#agent-with-multiple-capabilities): Combines web search, file access, and people search
- [Simple API integration](#simple-agent-with-anonymous-api-action): Anonymous access to external services
- [Authenticated API integration](#advanced-agent-with-api-key-authentication): Secure access with API keys
- [Complex GitHub integration](#complex-agent-with-oauth2-and-github-api-integration): Advanced OAuth2 with comprehensive GitHub API access for project management

Each example builds upon the previous ones, showing how to add capabilities, authentication, and custom actions to create increasingly sophisticated agents for real-world scenarios.
