---
title: "Authentication support in TypeSpec for Microsoft 365 Copilot"
description: "Learn how to configure authentication for TypeSpec-based solutions using OAuth2, Entra ID SSO, API keys, and anonymous access."
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 MD059 -->

# Authentication support in TypeSpec for Microsoft 365 Copilot

TypeSpec for Microsoft 365 Copilot supports multiple authentication methods to secure API plugins and integrate with external services. The supported authentication types include **No Authentication** for public endpoints, **API Key Authentication** for simple token-based access, **OAuth2 Authorization Code Flow** for secure third-party integrations, and **Entra ID SSO Authentication** for seamless Microsoft 365 identity integration.

[!INCLUDE [preview-disclaimer-typespec](includes/preview-disclaimer-typespec.md)]

> [!NOTE]
> This documentation covers Microsoft 365 Copilot-specific authentication scenarios. For comprehensive TypeSpec authentication documentation, including all native authentication decorators and patterns, please refer to the [official TypeSpec documentation on Authentication](https://typespec.io/docs/libraries/http/authentication).

## No Authentication (Anonymous)

Public endpoints that don't require any authentication credentials.

### Examples

```typespec
@service
@actions(#{
    nameForHuman: "GitHub APIs",
    descriptionForModel: "Access to public repositories and content that doesn't require authentication",
    descriptionForHuman: "Use this API to access public GitHub repositories and Microsoft Learn content"
})
@server("https://api.github.com", "GitHub Public API")
namespace GitHubAPI {
  // GitHub public repository information
  @route("/repos/{owner}/{repo}")
  @get
  op getGitHubPublicRepo(
    @path owner: string,
    @path repo: string
  ): GitHubPublicRepoResponse;

  // GitHub public user profile
  @route("/users/{username}")
  @get
  op getGitHubPublicProfile(
    @path username: string
  ): GitHubPublicProfileResponse;
}
```

## API Key Authentication

Authentication using API keys or Personal Access Tokens applied to entire namespaces.

### Examples

```typespec
// GitHub API with Personal Access Token
@service
@actions(#{
    nameForHuman: "GitHub Private API",
    descriptionForModel: "Access to private GitHub repositories and user data using Personal Access Token",
    descriptionForHuman: "Use this API to manage your private GitHub repositories and starred repos"
})
@server("https://api.github.com", "GitHub API")
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "X-GitHub-Token">)
namespace GitHubAPI {
  @route("/user/repos")
  @get
  op getPrivateRepos(
    @query org?: string
  ): GitHubReposResponse;

  @route("/repos/{owner}/{repo}/issues")
  @post
  op createIssue(
    @path owner: string,
    @path repo: string,
    @body issue: GitHubIssueRequest
  ): GitHubIssueResponse;
}

// Azure Cognitive Services with subscription key
@service
@actions(#{
    nameForHuman: "Azure Cognitive Services",
    descriptionForModel: "AI-powered content analysis and translation services from Microsoft Azure",
    descriptionForHuman: "Use this API to analyze text content and translate between languages"
})
@server("https://cognitiveservices.azure.com", "Azure Cognitive Services")
@useAuth(ApiKeyAuth<ApiKeyLocation.query, "subscription-key">)
namespace AzureCognitiveServices {
  @route("/cognitive/analyze")
  @post
  op analyzeContent(
    @body content: CognitiveAnalysisRequest
  ): CognitiveAnalysisResponse;

  @route("/cognitive/translate")
  @post
  op translateText(
    @body translation: TranslationRequest
  ): TranslationResponse;
}
```

## OAuth2 Authorization Code Flow

User-delegated permissions for accessing user data in Microsoft Graph and GitHub.

### Microsoft Graph Examples

```typespec
// Microsoft Graph with OAuth2
@service
@actions(#{
    nameForHuman: "Microsoft Graph",
    descriptionForModel: "Access to user's Microsoft 365 profile, emails, and calendar with OAuth2 authentication",
    descriptionForHuman: "Use this API to access your Microsoft 365 profile, read emails, and manage calendar events"
})
@server("https://graph.microsoft.com/v1.0", "Microsoft Graph API")
@useAuth(OAuth2Auth<[{
  type: OAuth2FlowType.authorizationCode;
  authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
  tokenUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token";
  refreshUrl: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token";
  scopes: ["User.Read", "Mail.Read", "Calendars.ReadWrite"];
}]>)
namespace MicrosoftGraph {
  @route("/me")
  @get
  op getUserProfile(): GraphUserResponse;

  @route("/me/messages")
  @get
  op getUserEmails(
    @query unreadOnly?: boolean
  ): OutlookEmailsResponse;

  @route("/me/events")
  @post
  op createCalendarEvent(
    @body event: CalendarEventRequest
  ): CalendarEventResponse;
}
```

### GitHub OAuth Examples

```typespec
// GitHub OAuth for Repository Management
@service
@actions(#{
    nameForHuman: "GitHub APIs",
    descriptionForModel: "Access to GitHub repositories, issues, and user data with OAuth2 authentication",
    descriptionForHuman: "Use this API to manage your GitHub repositories and create issues"
})
@server("https://api.github.com", "GitHub API")
@useAuth(OAuth2Auth<[{
  type: OAuth2FlowType.authorizationCode;
  authorizationUrl: "https://github.com/login/oauth/authorize";
  tokenUrl: "https://github.com/login/oauth/access_token";
  refreshUrl: "https://github.com/login/oauth/access_token";
  scopes: ["repo", "read:org", "user:email"];
}]>)
namespace GitHubAPI {
  @route("/user/repos")
  @get
  op getUserRepos(): GitHubReposResponse;

  @route("/repos/{owner}/{repo}")
  @get
  op getRepository(
    @path owner: string,
    @path repo: string
  ): GitHubRepoResponse;

  @route("/repos/{owner}/{repo}/issues")
  @post
  op createIssue(
    @path owner: string,
    @path repo: string,
    @body issue: GitHubIssueRequest
  ): GitHubIssueResponse;
}
```

## Entra ID SSO Authentication

Seamless authentication leveraging the user's existing Microsoft 365 session for native integration scenarios. [Manual steps](api-plugin-authentication.md#update-the-microsoft-entra-app-registration) are required to complete the SSO registration.

### Examples

```typespec
// Microsoft 365 SSO for core productivity features
@service
@actions(#{
    nameForHuman: "Microsoft Graph",
    descriptionForModel: "Access to Microsoft GRaph productivity features using seamless SSO authentication",
    descriptionForHuman: "Use this API to access your Microsoft 365 profile, emails, and calendar events"
})
@server("https://graph.microsoft.com/v1.0", "Microsoft Graph API")
@useAuth(OAuth2Auth<[{
  type: OAuth2FlowType.authorizationCode;
  authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
  tokenUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token";
  refreshUrl: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token";
  scopes: ["User.Read", "Mail.Read", "Calendars.Read"];
}]>)
namespace Microsoft365Productivity {
  @route("/me")
  @get
  op getCurrentUserProfile(): GraphCurrentUserResponse;

  @route("/me/messages")
  @get
  op getUserEmails(
    @query folderId?: string,
    @query unreadOnly?: boolean
  ): OutlookEmailsResponse;

  @route("/me/events")
  @get
  op getUserCalendarEvents(): CalendarEventsResponse;
}
```
