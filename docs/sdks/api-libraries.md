---
title: Microsoft 365 Copilot APIs Client Libraries (Preview)
description: "Learn how the Microsoft 365 Copilot API client libraries simplify AI solution development with robust features like retry handling, secure redirects, and payload compression."
author: lramosvea
ms.author: lramosvea
ms.localizationpriority: medium
ms.date: 04/11/2025
ms.topic: overview
---

# Microsoft 365 Copilot APIs client libraries (preview)

The Microsoft 365 Copilot APIs client libraries are designed to facilitate the development of high-quality, efficient, and resilient AI solutions that access the Copilot APIs. These libraries include service and core libraries.

The service libraries offer models and request builders that provide a rich, typed experience for working with Microsoft 365 Copilot APIs.

The core libraries offer advanced features to facilitate interactions with the Copilot APIs. These features include embedded support for retry handling, secure redirects, transparent authentication, and payload compression. These capabilities help you enhance the quality of your AI solution's communications with the Copilot APIs without adding complexity. Additionally, the core libraries simplify routine tasks such as paging through collections and creating batch requests.

## Supported languages

The Copilot APIs client libraries are currently available for the following languages:

- [C#](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet)
- [TypeScript](https://github.com/microsoft/Agents-M365Copilot/tree/main/typescript)
- [Python](https://github.com/microsoft/Agents-M365Copilot/tree/main/python)

## Client libraries in preview status

The Copilot APIs client libraries can be in preview status when initially released or after a significant update. Avoid using the preview release of these libraries in production solutions, regardless of whether your solution uses version 1.0 or the beta version of the Copilot APIs.

## Client libraries supportability

The Copilot API libraries are open-source projects on GitHub. If you encounter an issue, file an issue with the details on the [Issues](https://github.com/microsoft/Agents-M365Copilot/issues) tab. Contributors will review and release a fix as needed.

## Install the libraries

The Copilot API client libraries are included as a module in the Microsoft 365 Agents SDK. These libraries can be included in your projects via GitHub and popular platform package managers.

### Install the Copilot APIs .NET client libraries

The Copilot APIs are included in the following NuGet packages:

- [Microsoft.Agents.M365Copilot.Beta](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet/src/Microsoft.Agents.M365Copilot.Beta): Contains the models and request builders for accessing the beta endpoint. Microsoft.Agents.M365Copilot.Beta has a dependency on Microsoft.Agents.M365Copilot.Core. The same dependency structure applies to both the TypeScript and Python libraries as well.
- Microsoft.Agents.M365Copilot.Core: The core library for making calls to the Copilot APIs.

To install the Microsoft.Agents.M365Copilot packages into your project, you can use the [dotnet CLI](/nuget/quickstart/install-and-use-a-package-using-the-dotnet-cli), the [Package Manager UI in Visual Studio](/nuget/quickstart/install-and-use-a-package-in-visual-studio) or the [Package Manager Console in Visual Studio](/nuget/quickstart/install-and-use-a-package-in-visual-studio).

### dotnet CLI

```dotnetcli
dotnet add package Microsoft.Agent.M365Copilot.Beta
```

### Package Manager Console

```powershell
Install-Package Microsoft.Agent.M365Copilot.Beta
```

### Install the Copilot APIs Python client libraries

The Copilot APIs Python client libraries are available in the Python Package Index.

```py
pip install microsoft-agents-m365copilot-beta
```

### Install the Copilot APIs TypeScript client libraries

The Copilot APIs TypeScript client libraries are available in npm.

```Shell
npm install @microsoft/agents-m365copilot-beta –save
```

## Create a Copilot APIs client

The Copilot APIs client is designed to make it simple to make calls to the Copilot APIs. The following code examples show how to create an instance of a Microsoft 365 Copilot APIs client with an authentication provider in the supported languages. The authentication provider handles acquiring access tokens for the application.

Many different authentication providers are available for each language and platform. The different authentication providers support different client scenarios. For details about which provider and options are appropriate for your scenario, see [Choose an Authentication Provider](/graph/sdks/choose-authentication-providers). 

The client ID is the app registration ID that is generated when you [register your app in the Azure portal](/graph/auth-register-app-v2).

### [C#](#tab/csharp)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_client_csharp.md)]
> Include `using` statements for `Azure.Identity` and `Microsoft.Graph` to run this code.

### [Python](#tab/python)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_client_python.md)]
> Include import statements for DeviceCodeCredential from azure.identity and MicrosoftAgentsM365CopilotServiceClient from microsoft_agents_m365copilot_beta to run this code.

### [TypeScript](#tab/typescript)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_client_typescript.md)]
> Include import statements for DeviceCodeCredential from @azure/identity,  AgentsM365CopilotBetaServiceClient from @microsoft/agents-m365copilot-beta, and AzureIdentityAuthenticationProvider from @microsoft/kiota-authentication-azure to run this code.

## Make API calls

The Copilot APIs client libraries provide a client class to use as the starting point for creating all API requests. To retrieve relevant text extracts from SharePoint calling the Retrieval API, you first need to create a request object and then run the POST method on the request.

### [C#](#tab/csharp)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_requests_csharp.md)]

### [Python](#tab/python)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_requests_python.md)]

### [TypeScript](#tab/typescript)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_requests_typescript.md)]

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](../api-reference/retrieval-api-overview.md)
- [Use the Retrieval API](../api-reference/copilotroot-retrieval.md)
