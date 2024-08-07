---
title: API plugins for Microsoft Copilot for Microsoft 365
description: Learn about API plugins in Microsoft Copilot for Microsoft 365
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
---

# API plugins for Microsoft Copilot for Microsoft 365

API plugins enable Copilot for Microsoft 365 to interact with REST APIs that are described by an [OpenAPI specification](https://www.openapis.org/what-is-openapi). With an API plugin, Copilot users can ask Copilot to not only query a REST API for information, but to create, update, and delete data and objects. Anything the REST API can do is accessible via natural language prompts.

> [!IMPORTANT]
> API plugins are currently in limited private preview. More details will be published once a public preview is announced.

An API plugin provides an OpenAPI specification document and a plugin manifest that Copilot uses to learn the capabilities of the API. Copilot can then decide when an installed and enabled plugin's API is suited to answer any given prompt.

For example, consider a budgets API that allows for querying and creating budgets, as well as charging expense or adding funds to existing budgets. The prompt "How much is left in the Contoso travel budget" could trigger a budget plugin, making the following API call.

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

## Confirming actions

For some actions, you may want the user to confirm the details before making the API call. Plugin developers can assign confirmation dialogs to specific functions. These dialogs are defined using [Adaptive Cards](/adaptive-cards) syntax.

Take the prompt to charge a budget. To avoid incorrect charges to budgets, a plugin can add a confirmation to that particular function. Copilot will present the dialog with the function parameters it generates, allowing the user to proceed or cancel.

:::image type="content" source="assets/images/api-plugins/plugin-confirmation.png" alt-text="A screenshot of a plugin confirmation dialog":::

## Customizing response presentation

Copilot generates conversational responses using data from API responses. Plugins can customize this by providing Adaptive Card templates to display data in a structured way.

:::image type="content" source="assets/images/api-plugins/adaptive-card-response.png" alt-text="A screenshot of an Adaptive Card response from an API plugin":::

## Generating API plugin packages

There are two tools developers can use to generate API plugin packages.

- The [Teams Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) in [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/) can create plugin packages based on an existing OpenAPI specification. If you don't have an existing API, Teams Toolkit also has starter projects with an example API and corresponding plugin package.
- [Kiota](/openapi/kiota/overview) is a command line tool and a Visual Studio Code extension that can generate plugin packages based on an existing OpenAPI specification.
