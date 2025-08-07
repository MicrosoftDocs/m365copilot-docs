---
title: API plugins for Microsoft 365 Copilot
description: Learn about API plugins in Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 08/06/2025
ms.topic: overview
ms.custom: [copilot-learning-hub]
---

# API plugins for Microsoft 365 Copilot

API plugins enable declarative agents in Microsoft 365 Copilot to interact with REST APIs that have an [OpenAPI description](https://www.openapis.org/what-is-openapi). With an API plugin, users can ask a declarative agent to not only query a REST API for information, but to create, update, and delete data and objects. Anything the REST API can do is accessible via natural language prompts.

> [!NOTE]
> In addition to calling REST APIs, there's a preview feature that enables a plugin to call APIs in a local library. We encourage you to experiment with this feature, but it shouldn't be used in a production plugin. For more information, see [Build API plugins for Microsoft 365 Copilot with the Office JavaScript Library](build-api-plugins-local-office-api.md).

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

An API plugin provides an OpenAPI description document and a plugin manifest that Copilot uses to learn the capabilities of the API. Copilot can then decide when an installed and enabled plugin's API is suited to answer any given prompt. To learn more about the manifest file that an API plugin requires, see [API plugin manifest schema for Microsoft 365 Copilot](./api-plugin-manifest.md).

For example, consider a budgets API that allows for querying and creating budgets, charging expenses, or adding funds to existing budgets. The prompt "How much is left in the Contoso travel budget" could trigger a budget plugin, making the following API call.

```http
GET /budgets?name=contoso%20travel
```

Copilot uses the response from the API call to generate its response: "The Contoso travel budget currently has $5,000 in available funds. If you need to allocate funds to specific categories or track expenses, I can assist you with that as well. Just let me know how I can help!"

The prompt "Charge $500 to the Contoso travel budget for Megan's airline ticket" could be translated to the following API call.

```http
POST /budgets/charge
Content-Type: application/json

{
  "budgetName": "Contoso travel",
  "amount": 500,
  "description": "Megan's airline ticket"
}
```

Copilot responds to the user, using the information returned: "The charge of $500 for Megan's airline ticket has been successfully processed. The Contoso travel budget now has $4,500 remaining in available funds. If you need to make any more transactions or require further assistance with your budget, please let me know!"

## How API plugins work

:::image type="content" source="assets/images/api-plugins/api-plugin-data-flow.svg" alt-text="A sequence diagram showing how an API plugin works" lightbox="assets/images/api-plugins/api-plugin-data-flow.svg":::

1. The user asks the agent "How much is left in the Fourth Coffee lobby renovation budget?"
1. The agent identifies a budget-related plugin from its available plugins that has a function `GetBudget` to get budget details. It maps parts of the user's question to the parameters of the function: `budgetName=""`.
1. The agent [asks the user](#confirming-actions) to allow it to send `Fourth Coffee lobby renovation` to the plugin.
1. The user chooses to allow data to be shared with the plugin once, or chooses to always allow data to be shared for this function.
1. If the plugin's API requires [authentication](api-plugin-authentication.md), the plugin requests a token or API key from the token store.
1. The token store returns a token or key. If needed, the token store causes the agent to prompt the user to sign in.
1. The agent sends a request to the plugin's API, which is hosted outside of Microsoft 365.

    ```http
    GET /budgets?budgetName=Fourth+Coffee+lobby+renovation
    ```

1. The API returns an API response in the format specified in its OpenAPI specification.

    ```json
    {
      "name": "Fourth Coffee lobby renovation",
      "availableFunds": 5000.00
    }
    ```

1. The agent generates a response based on the API response.
1. The agent sends the response "The available funds left in the Fourth Coffee lobby renovation budget are $5,000."

## Confirming actions

Copilot asks the user before sending any data to an API plugin.

:::image type="content" source="assets/images/api-plugins/get-always-allow.png" alt-text="A screenshot of a plugin confirmation dialog.":::

By default, APIs that only retrieve data give the user an "Always allow" option, while APIs that modify data don't. Plugin developers can override these defaults. For details, see [Confirmation prompts for API plugins for Microsoft 365 Copilot](api-plugin-confirmation-prompts.md).

## Customizing response presentation

Copilot generates conversational responses using data from API responses. Plugins can customize these responses by providing Adaptive Card templates to display data in a structured way.

:::image type="content" source="assets/images/api-plugins/adaptive-card-citation.png" alt-text="A screenshot of an Adaptive Card response from an API plugin":::

## Optimize your plugin for Copilot orchestrator

Microsoft 365 Copilot can uniquely choose the right skill from the many skills in its repertoire. But how can you make sure Copilot chooses _your plugin_ to provide the right skill?

The answer lies in how you describe your plugin, its skills, and the parameters for initiation of skills. Specify concise and accurate descriptions in your plugin manifest to best ensure that the Copilot orchestrator knows when and how to invoke your plugin.

The way you describe your plugin to the orchestrator depends on the type of plugin you build, as described in the following table.

| Plugin type  | Described by | Learn more|
|----------|-----------|------------|
|API plugins |  OpenAPI description | [How to make an OpenAPI document effective in extending Copilot](./openapi-document-guidance.md) |
| Copilot Studio actions | Names and descriptions in Copilot Studio conversation map | [Orchestrate copilot topics and actions with generative AI](/microsoft-copilot-studio/advanced-generative-actions)  |
| Message extension plugins | App manifest   | [Guidelines for message extension plugins](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context) |

## Generating API plugin packages

There are two tools developers can use to generate API plugin packages.

- The [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) in [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/) can create plugin packages based on an existing OpenAPI description. If you don't have an existing API, Agents Toolkit also has starter projects with an example API and corresponding plugin package.
- [Kiota](/openapi/kiota/overview) is a command line tool and a Visual Studio Code extension that can generate plugin packages based on an existing OpenAPI description.

## Limitations

### Declarative agent plugins

When a declarative agent that includes up to five plugins defined in the [declarative agent manifest](declarative-agent-manifest-1.5.md), the plugins are always injected into the prompt. When more than five plugins are defined, the agent uses semantic matching. Semantic matching is based on the plugin's description, not on any of the individual functions within the plugin itself.

A plugin can include an unlimited number of functions. All functions are returned, even if only one function is matched. However, due to token window limits, the quality of the responses might degrade if more than 10 functions are included.

### URLs in API responses are redacted

To protect the user's privacy, Copilot redacts any URLs contained in API responses. The sole exception to this behavior is any URL in a property specified by the `url` property in the [Response semantics properties object](api-plugin-manifest.md#response-semantics-properties-object).

## Related content

- [Build API plugins from an existing API for Microsoft 365 Copilot](build-api-plugins-existing-api.md)
- [Build API plugins with a new API for Microsoft 365 Copilot](build-api-plugins-new-api.md)
- [API plugin manifest schema for Microsoft 365 Copilot](./api-plugin-manifest.md)
- [Write effective instructions for declarative agents with API plugins](instructions-api-plugins.md)
