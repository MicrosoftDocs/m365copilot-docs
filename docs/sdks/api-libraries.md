---
title: Microsoft 365 Copilot APIs Client Libraries (Preview)
description: "Learn how the Microsoft 365 Copilot API client libraries simplify AI solution development with robust features like retry handling, secure redirects, and payload compression."
author: lramosvea
ms.author: lramosvea
ms.localizationpriority: medium
ms.date: 06/17/2025
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

## Client libraries support

The Copilot API libraries are open-source projects on GitHub. If you encounter a bug, file an issue with the details on the [Issues](https://github.com/microsoft/Agents-M365Copilot/issues) tab. Contributors review and release fixes as needed.

## Install the libraries

The Copilot API client libraries are included as a module in the Microsoft 365 Agents SDK. These libraries can be included in your projects via GitHub and popular platform package managers.

### Install the Copilot APIs .NET client libraries

The Copilot APIs .NET client libraries are available in the following NuGet packages:

- [Microsoft.Agents.M365Copilot.Beta](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet/src/Microsoft.Agents.M365Copilot.Beta) -  Contains the models and request builders for accessing the beta endpoint. Microsoft.Agents.M365Copilot.Beta has a dependency on Microsoft.Agents.M365Copilot.Core. The same dependency structure applies to both the TypeScript and Python libraries as well.
- [Microsoft.Agents.M365Copilot.Core](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet/src/Microsoft.Agents.M365Copilot.Core) - The core library for making calls to the Copilot APIs.

To install the Microsoft.Agents.M365Copilot packages into your project, use the [dotnet CLI](/nuget/quickstart/install-and-use-a-package-using-the-dotnet-cli), the [Package Manager UI in Visual Studio](/nuget/quickstart/install-and-use-a-package-in-visual-studio), or the [Package Manager Console in Visual Studio](/nuget/quickstart/install-and-use-a-package-in-visual-studio).

### dotnet CLI

```dotnetcli
dotnet add package Microsoft.Agent.M365Copilot.Beta
```

### Package Manager Console

```powershell
Install-Package Microsoft.Agent.M365Copilot.Beta
```

## Create a Copilot APIs client and make an API call

The following code example shows how to create an instance of a Microsoft 365 Copilot APIs client with an authentication provider in the supported languages. The authentication provider handles acquiring access tokens for the application. Many different authentication providers are available for each language and platform. The different authentication providers support different client scenarios. For details about which provider and options are appropriate for your scenario, see [Choose an Authentication Provider](/graph/sdks/choose-authentication-providers). 

The example also shows how to make a call to the Retrieval API. To call this API, you first need to create a request object, and then run the POST method on the request.

The client ID is the app registration ID that is generated when you [register your app in the Azure portal](/graph/auth-register-app-v2).

# [C#](#tab/csharp)

[!INCLUDE [sample-code](../api-reference/includes/snippets/csharp/create_client_csharp.md)]

---

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](../api-reference/retrieval-api-overview.md)
- [Use the Retrieval API](../api-reference/copilotroot-retrieval.md)
