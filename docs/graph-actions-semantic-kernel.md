---
title: Invoke Microsoft Graph Actions with Semantic Kernel
description: Learn how to build Semantic Kernel plugins by using Visual Studio Code and Kiota Copilot agent plugins.
author: fabianwilliams
ms.author: fwilliams
ms.localizationpriority: medium
ms.date: 07/23/2025
ms.topic: conceptual
---

# Invoke Microsoft Graph actions with Semantic Kernel

Microsoft 365 Copilot agent plugins allow custom engine agents built with [Semantic Kernel](/semantic-kernel/overview/) to understand user prompts and securely use [Microsoft Graph](/graph/overview) API actions, such as sending emails, retrieving contacts, creating calendar invites, and accessing files. These plugins bridge the gap between large language models (LLMs) and REST APIs, allowing you to expose Microsoft 365 data through natural language interactions.

## What are Copilot agent plugins?

Copilot agent plugins are custom-built, AI-powered extensions that enable natural language interactions with Microsoft 365 data by exposing functions through the Semantic Kernel and Microsoft Graph APIs. Copilot agent plugins include an OpenAPI description for an API (such as Microsoft Graph) and a plugin manifest. Semantic Kernel, powered by your choice of language model, analyzes the user's intent and determines which plugin and API operation to invoke. This enables seamless and intelligent orchestration of Microsoft 365 data.

You can generate Copilot agent plugins by using Kiota, a command-line tool that simplifies plugin creation. For more information about plugin manifests, see the [API plugin manifest schema for Microsoft 365 Copilot](api-plugin-manifest-2.4.md).

## How Copilot agent plugins work

To load or install Copilot agent plugins in Semantic Kernel, use the `ImportPluginFromCopilotAgentPluginAsync` extension method from the `Microsoft.SemanticKernel.Plugins.OpenApi.Extensions` library.

The method requires the following inputs:

- Plugin name
- Path to the plugin directory
- Parameter filters – These filters help identify and load the correct plugin based on its unique parameters, structure, and the specific Microsoft 365 service it targets.

The following example shows the `ImportPluginFromCopilotAgentPluginAsync` method.

```csharp
private async Task AddCopilotAgentPluginAsync(Kernel kernel, IConfigurationRoot configuration, string pluginName)
{
    var copilotAgentPluginParameters = new CopilotAgentPluginParameters
    {
        FunctionExecutionParameters = new()
        {
            {
                "https://graph.microsoft.com/v1.0",
                new OpenApiFunctionExecutionParameters(
                    authCallback: this._bearerAuthenticationProviderWithCancellationToken.AuthenticateRequestAsync,
                    enableDynamicOperationPayload: false,
                    enablePayloadNamespacing: true)
                {
                    ParameterFilter = s_restApiParameterFilter
                }
            },
            {
                "https://graph.microsoft.com/beta",
                new OpenApiFunctionExecutionParameters(
                    authCallback: this._bearerAuthenticationProviderWithCancellationToken.AuthenticateRequestAsync,
                    enableDynamicOperationPayload: false,
                    enablePayloadNamespacing: true)
                {
                    ParameterFilter = s_restApiParameterFilter
                }
            }
        }
    };

    try
    {
        KernelPlugin plugin = await kernel.ImportPluginFromCopilotAgentPluginAsync(
            pluginName,
            GetCopilotAgentManifestPath(pluginName),
            copilotAgentPluginParameters).ConfigureAwait(false);

        AnsiConsole.MarkupLine($"[bold green]{pluginName} loaded successfully.[/]");
    }
    catch (Exception ex)
    {
        AnsiConsole.MarkupLine("[red]Failed to load {pluginName}.[/]");
        kernel.LoggerFactory.CreateLogger("Plugin Creation").LogError(ex, "Plugin creation failed. Message: {0}", ex.Message);
        throw new AggregateException($"Plugin creation failed for {pluginName}", ex);
    }
}
```

When Semantic Kernel processes a user prompt, it:

- Matches the prompt intent to a plugin (such as CalendarPlugin).
- Generates the appropriate Microsoft Graph API call.
- Runs the request with delegated auth.
- Returns the result as a natural language response.

## Prebuilt Copilot agent plugins for Microsoft Graph

Microsoft provides a set of prebuilt Copilot agent plugins that you can load into your project:

- **ContactsPlugin** – Manage address book entries.
- **MessagesPlugin** – Interact with your inbox.
- **CalendarPlugin** – Create or list meetings.
- **DriveItemsPlugin** – Search, read, and upload files.
- **M365 Copilot Plugin (Retrieval API Plugin)** – Search Microsoft 365 file content via semantic index.

You can also [create plugins](/microsoft-365-copilot/extensibility/build-api-plugins-existing-api?tabs=toolkit) for other services using Kiota and an OpenAPI description file.

## Plugin capabilities and examples

The following table provides examples of prompts and the Copilot agent plugins they invoke.

| Prompt                                                   | Description                                          | Plugin invoked       | Expected outcome                                  | Notes                                        |
|----------------------------------------------------------|------------------------------------------------------|----------------------|--------------------------------------------------|----------------------------------------------|
| What can you tell me about my contact?       | Retrieves contact details.                           | ContactsPlugin       | Returns structured contact profile.               | Tip: Prefix with "my contact" improves accuracy. |
| Do I have any email from my coworker?                    | Searches mailbox for recent emails.                 | MessagesPlugin       | Displays email subjects, timestamps, and sender.  | Full name improves match quality.             |
| Send an email to my contact...               | Composes and sends an email .                        | MessagesPlugin       | Confirms successful send.                         | Note: External domains might block sends.       |
| What meetings do I have this week?                       | Lists meetings based on the current week.            | CalendarPlugin       | Returns event times and attendees.               | Natural language dates are supported.         |
| Create a calendar event titled Sync Meeting.     | Creates a new calendar event.                       | CalendarPlugin       | Confirms creation with start and end time.            | Time formats like "1500 to 1530 Eastern" work. |
| Show me what a user worked on for Semantic Kernel.        | Retrieves file content metadata.                     | Microsoft 365 Copilot Plugin  | Summarizes document details.                      | Requires accessible file (for example, OneDrive).     |
| Check my email from my manager, summarize it, and set up a meeting. | Retrieves email, summarizes, creates event.       | Multiple plugins      | Confirms meeting setup and summary.              | Uses Contacts, Messages, and Calendar plugins. |

## Get started with Copilot agent plugins

### Prerequisites

Before you start, make sure that you have:

- A Microsoft Entra ID admin account
- A Microsoft 365 developer tenant (If you don't have a developer tenant, you might qualify for one through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program).)
- [Visual Studio Code](https://code.visualstudio.com/)
- [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel)

### Register the Microsoft Identity Platform app

1. Go to **Azure Active Directory > App registrations > New registration**.
2. Fill in the name and supported account types.
3. Set redirect URI: `http://localhost`.
4. Record the Application (client) ID and Directory (tenant) ID.

### Configure permissions

1. Go to **API permissions > Add a permission**.
2. Choose Microsoft Graph > Delegated permissions.
3. Add: `Contacts.Read`, `Mail.Read`, `Calendars.Read`, `Files.Read`.
4. Select **Grant admin consent**.

### Configure secrets (if applicable)

1. Go to **Certificates & secrets > New client secret**.
2. Copy the secret value.

### Update app settings

1. Copy `appsettings.json` to `appsettings.Development.json`.
2. Fill in: `TenantId`, `ClientId`, `ClientSecret`, `RedirectUri`.
3. For OpenAI or Azure OpenAI: also set `ApiKey`, `ModelId`.

### Run the application

#### Option 1: Run sample app

You can run the [sample app](https://aka.ms/m365caps-quickstartdemo), as shown in the following example.

```bash
dotnet run demo
# or for debug mode:
dotnet run demo --debug
```

Follow the prompts to authenticate, choose the LLM, select plugins, and run queries.

#### Option 2: Integrate into your own app

If you're integrating Copilot agent plugin functionality into your own .NET application, you need to configure your project with the appropriate libraries. This includes assemblies for configuration, authentication, logging, and support for Microsoft Graph and Semantic Kernel plugins. To ensure that your project builds successfully and has access to all required features, add the following required NuGet packages.


```bash
dotnet add package Microsoft.Extensions.Configuration
dotnet add package Microsoft.Extensions.Configuration.Json
dotnet add package Microsoft.Identity.Client
dotnet add package Microsoft.Extensions.Logging
dotnet add package Microsoft.SemanticKernel
dotnet add package Microsoft.SemanticKernel.Plugins.Core
dotnet add package Microsoft.SemanticKernel.Plugins.OpenApi
dotnet add package Microsoft.SemanticKernel.Planners.OpenAI
dotnet add package Microsoft.SemanticKernel.Plugins.MSGraph
dotnet add package Microsoft.SemanticKernel.Plugins.OpenApi.Extensions
```

## Related content

- [Custom engine agents overview](overview-custom-engine-agent.md)
