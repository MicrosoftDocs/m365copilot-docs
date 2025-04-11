
# Microsoft 365 Copilot APIs client libraries

The Microsoft 365 Copilot APIs client libraries are designed to facilitate the development of high-quality, efficient, and resilient AI solutions that access the Microsoft 365 Copilot APIs. These libraries include service and core libraries.

The service libraries offer models and request builders that provide a rich, strongly typed experience for working with Microsoft 365 Copilot APIs.

The core libraries offer advanced features to facilitate interactions with the Microsoft 365 Copilot APIs. These features include embedded support for retry handling, secure redirects, transparent authentication, and payload compression, all of which enhance the quality of your AI solution's communications with the Microsoft 365 Copilot APIs without adding complexity. Additionally, the core libraries simplify routine tasks such as paging through collections and creating batch requests.

## Supported languages

The Microsoft 365 Copilot API client libraries are currently available for the following languages:
- [C#](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet)
- [TypeScript](https://github.com/microsoft/Agents-M365Copilot/tree/main/typescript)
- [Python](https://github.com/microsoft/Agents-M365Copilot/tree/main/python)

## Client libraries in preview status

The Microsoft 365 Copilot APIs client libraries can be in preview status when initially released or after a significant update. A preview release may not always be promoted to generally available (GA) status.

Additionally, avoid using the preview release of these libraries in production solutions, regardless of whether it utilizes version 1.0 or the beta version of the Microsoft 365 Copilot API.

## Client libraries supportability

The Microsoft 365 Copilot APIs libraries are open-source projects on GitHub. If you encounter an issue, submit it with the necessary details on the "issues" page. Contributors will review and release a fix as needed. While Microsoft Customer Service and Support doesn't officially support SDKs and libraries, it does support the HTTP requests for Microsoft 365 Copilot API calls.

## Install the libraries

The Microsoft 365 Copilot APIs client libraries are included as a module in the Microsoft 365 Agents SDK. These libraries can be included in your projects via GitHub and popular platform package managers.

### Install the Microsoft 365 Copilot APIs .NET client libraries

The Microsoft 365 Copilot APIs are included in the following NuGet packages:
- [Microsoft.Agents.M365Copilot.Beta](https://github.com/microsoft/Agents-M365Copilot/tree/main/dotnet/src/Microsoft.Agents.M365Copilot.Beta): Contains the models and request builders for accessing the beta endpoint. Microsoft.Agents.M365Copilot.Beta has a dependency on Microsoft.Agents.M365Copilot.Core
- Microsoft.Agents.M365Copilot.Core: The core library for making calls to Microsoft 365 Copilot APIs.

To install the Microsoft.Agents.M365Copilot packages into your project, you can use the [dotnet CLI](https://learn.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-using-the-dotnet-cli), the [Package Manager UI in Visual Studio](https://learn.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-in-visual-studio) or the [Package Manager Console in Visual Studio](https://learn.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-in-visual-studio).

### dotnet CLI

```dotnetcli
dotnet add package Microsoft.Agent.M365Copilot.Beta 
```

### Package Manager Console

```powershell
Install-Package Microsoft.Agent.M365Copilot.Beta 
```

### Install the Microsoft 365 Copilot APIs TypeScript client libraries

The Microsoft 365 Copilot APIs TypeScript client libraries are available in npm. 

```Shell
npm install @microsoft/agents-m365copilot-beta –save 
```

### Install the Microsoft 365 Copilot APIs Python client libraries

The Microsoft 365 Copilot APIs TypeScript client libraries are available in Pypi. 

```py
pip install microsoft-agents-m365copilot-beta 
```

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](../api-reference/retrieval-api-overview.md)
- [Use the retrieval API](../api-reference/copilotroot-retrieval.md)



