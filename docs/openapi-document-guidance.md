---
title: Create effective OpenAPI descriptions for extending Microsoft 365 Copilot
description: Learn the key elements of effective OpenAPI descriptions for extending Microsoft 365 Copilot agent capabilities.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 08/22/2025
---

# Create effective OpenAPI descriptions for extending Microsoft 365 Copilot

API plugins enable Microsoft 365 Copilot agents to interact with web services and access real-time information. An API plugin enables a user to interact with real-time data from their line of business (LOB) system through natural language commands to an agent within Copilot Chat.

An API plugin is comprised of an API service, its OpenAPI description, and a manifest file. The plugin manifest informs the Copilot orchestrator about the capabilities of the API. The plugin manifest includes an OpenAPI description for the API service. The OpenAPI description is important because it describes to Copilot how to connect to the API. For optimal plugin discoverability and performance with Copilot, provide a clear and meaningful OpenAPI description.

This article describes the elements that make an OpenAPI description effective for a plugin that extends Copilot agent capabilities.

## OpenAPI description elements

This section describes the elements of an OpenAPI description and how to optimize them for Copilot agents.

**OpenAPI Validation**: A good first step is to verify that your OpenAPI description follows the rules of the [OpenAPI Specification](https://swagger.io/resources/open-api/). You can use [Hidi](https://github.com/microsoft/OpenAPI.NET/tree/main/src/Microsoft.OpenApi.Hidi), a command line tool that can validate OpenAPI descriptions among other use cases, or any other tool of choice. A valid OpenAPI description not only works well with Copilot but also makes sure that your OpenAPI description can work with other tools.

**The info section**: The description field is optional in the OpenAPI specification, but it's essential for an OpenAPI description that is meant to extend Copilot skills. Copilot needs the description field to know what the API does and when to use the plugin. When generating a plugin manifest from an OpenAPI document, the description in the info section is used as the description for the plugin manifest. It is thus important to always have a description field that is brief and clear. For example, here's an info section of a repairs shop OpenAPI description.

```yaml
info:
  title: Repair Service
  description: A simple service to manage repairs for various items
  version: 1.0.0
```

**Operation IDs:** A useful technique to enhance an OpenAPI description's usability is adding an `operationID` for each combination of API path and HTTP method offered by the API. Operation IDs are unique identifiers for an operation in the API and are used by Copilot to create functions that are executed when responding to a user's prompt.

Additionally add a meaningful description of each operation supported by your API. After Copilot chooses to use a plugin based on the user's prompt and the plugin description, it searches through the descriptions of the paths to determine the endpoint to use to satisfy the user's request.

Operation IDs are shown during debugging as functions to indicate which operations Copilot is attempting to execute. Here's a sample of an OpenAPI document and a sample of the corresponding debugger output:

```yaml
paths:
  /repairs:
    get:
      operationId: listRepairs
      summary: List all repairs
      description: Returns a list of repairs with their details and images
```

Debugger output:

:::image type="content" source="assets/images/debugged-function.png" alt-text="Image of debugger showing the selected function of a plugin.":::

**Parameters:** If an operation supported by your API takes in parameters, include the parameters in the OpenAPI description. Include a description field for each parameter to briefly describe it, and where necessary, give an example of the parameter's usage. Parameters are used by Copilot to get all the required information from a user's prompt for making a request to the API.

Here's an example:

```yaml
parameters:
  - name: assignedTo
    in: query
    description: The name or ID of the person or team to whom the repair is assigned.
    schema:
      type: string
    required: false
```

**Responses:** Clearly define all possible responses for each operation, including both success and error responses. Each response must have a status code and a description of what it represents. Including examples of responses helps Copilot to understand what to expect from the API.

```yaml
responses:
  '200':
    description: A list of repairs
    content:
      application/json:
        schema:
          type: array
          items:
            $ref: '#/components/schemas/Repair'
        examples:
          example1:
            value:
              [
                {
                  "id": "1",
                  "item": "Laptop",
                  "status": "In Progress",
                  "assignedTo": "John Doe"
                }
              ]
  '404':
    description: No repairs found
  '500':
    description: Server error
```

## Related content

- [Write instructions for agents with API plugins](./instructions-api-plugins.md)
- [API plugins for Microsoft 365 Copilot](./overview-api-plugins.md)
