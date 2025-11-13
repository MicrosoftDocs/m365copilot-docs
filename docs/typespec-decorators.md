---
title: Built-in decorators for TypeSpec for Microsoft 365 Copilot
description: Learn about the built-in decorators for building agents and API plugins with TypeSpec for Microsoft 365 Copilot
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore valueof -->

# Decorators for TypeSpec for Microsoft 365 Copilot

This reference covers the built-in decorators available in TypeSpec for Microsoft 365 Copilot, organized by their primary use case.

> [!NOTE]
> This decorator reference focuses specifically on the `@microsoft/typespec-m365-copilot` decorators, but you can use all decorators defined in TypeSpec, including [built-in decorators](https://typespec.io/docs/standard-library/built-in-decorators/) and [OpenAPI decorators](https://typespec.io/docs/libraries/openapi/reference/decorators/).

## Declarative agent decorators

These decorators are used when building declarative agents to define agent behavior, conversation flow, and user experience.

### `@agent`

Indicates that a namespace represents an agent.

```typescript
@agent(name: valueof string, description: valueof string, id?: valueof string)
```

#### Target

`Namespace`

#### Parameters

| Name          | Type             | Description |
|---------------|------------------|-------------|
| `description` | valueof `string` | Localizable. The description of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. |
| `id`          | valueof `string` | Optional. The unique identifier of the agent. |
| `name`        | valueof `string` | Localizable. The name of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. |

#### Examples

```typescript
// Basic agent definition with simple name and description
@agent("IT Support Assistant", "An AI agent that helps with technical support and troubleshooting")
```

```typescript
// Project management agent with more detailed description
@agent("Project Manager", "A helpful assistant for project management tasks and coordination")
```

```typescript
// Agent with explicit ID for tracking and versioning
@agent("Data Analytics Helper", "An agent specialized in data analysis and reporting tasks", "data-analytics-v1")
```

### `@behaviorOverrides`

Define settings that modify the behavior of the agent orchestration.

```typescript
@behaviorOverrides(behaviorOverrides: valueof BehaviorOverrides)
```

#### Target

`Namespace`

#### Parameters

| Name                | Type                                            | Description |
|---------------------|-------------------------------------------------|-------------|
| `behaviorOverrides` | valueof [BehaviorOverrides](#behavioroverrides) | Define settings that modify the behavior of the agent orchestration. |

#### Models

##### BehaviorOverrides

Define settings that modify the behavior of the agent orchestration

| Name                       | Type      | Description |
|----------------------------|-----------|-------------|
| `discourageModelKnowledge` | `boolean` | A boolean value that indicates whether the declarative agent should be discouraged from using model knowledge when generating responses. |
| `disableSuggestions`       | `boolean` | A boolean value that indicates whether the suggestions feature is disabled. |

#### Examples

```typescript
// Conservative settings: discourage model knowledge but allow suggestions
@behaviorOverrides(#{
  discourageModelKnowledge: true,
  disableSuggestions: false
})
```

```typescript
// Minimal interaction: disable suggestions to reduce prompting
@behaviorOverrides(#{
  disableSuggestions: true
})
```

```typescript
// Default behavior: allow both model knowledge and suggestions
@behaviorOverrides(#{
  discourageModelKnowledge: false,
  disableSuggestions: false
})
```

### `@conversationStarter`

Indicates that a namespace contains a conversation starter.

```typescript
@conversationStarter(conversationStarter: valueof ConversationStarter)
```

#### Target

`Namespace`

#### Parameters

| Name                  | Type                                                | Description                           |
|-----------------------|-----------------------------------------------------|---------------------------------------|
| `conversationStarter` | valueof [ConversationStarter](#conversationstarter) | The conversation starter information. |

#### Models

##### ConversationStarter

Configuration object that defines a conversation starter for users.

| Name    | Type     | Description |
|---------|----------|-------------|
| `text`  | `string` | Localizable. A suggestion that the user can use to obtain the desired result from the DC. It MUST contain at least one nonwhitespace character. |
| `title` | `string` | Localizable. A unique title for the conversation starter. It MUST contain at least one nonwhitespace character. |

#### Examples

```typescript
// Generic welcome prompt for new users
@conversationStarter(#{
  title: "Get Started",
  text: "How can I help you today?"
})
```

```typescript
// Status check prompt for tracking ongoing work
@conversationStarter(#{
  title: "Check Status",
  text: "What's the status of my recent requests?"
})
```

```typescript
// Issue reporting prompt for technical support scenarios
@conversationStarter(#{
  text: "I need to report a technical problem"
})
```

### `@customExtension`

Indicates that a namespace contains a custom extension with a key-value pair for extensibility.

```typescript
@customExtension(key: valueof string, value: valueof unknown)
```

#### Target

`Namespace`

#### Parameters

| Name    | Type              | Description                                                          |
|---------|-------------------|----------------------------------------------------------------------|
| `key`   | valueof `string`  | The key for the custom extension.                                    |
| `value` | valueof `unknown` | The value for the custom extension. Can be any valid TypeSpec value. |

#### Examples

```typescript
// Adding a custom feature flag to an agent
@customExtension("featureFlag", "experimentalMode")
```

```typescript
// Adding custom metadata with a structured value
@customExtension("metadata", #{
  version: "1.0",
  environment: "production"
})
```

```typescript
// Adding a custom configuration setting
@customExtension("customConfig", #{
  maxRetries: 3,
  timeout: 30000
})
```

### `@disclaimer`

An optional object containing a disclaimer message that, if provided, is displayed to users at the start of a conversation to satisfy legal or compliance requirements.

```typescript
@disclaimer(disclaimer: valueof Disclaimer)
```

#### Target

`Namespace`

#### Parameters

| Name         | Type                              | Description                                        |
|--------------|-----------------------------------|----------------------------------------------------|
| `disclaimer` | valueof [Disclaimer](#disclaimer) | The disclaimer information that is shown to users. |

#### Models

##### Disclaimer

The disclaimer information that is shown to users.

| Name   | Type     | Description |
|--------|----------|-------------|
| `text` | `string` | A string that contains the disclaimer message. It MUST contain at least one nonwhitespace character. Characters beyond 500 MAY be ignored. |

#### Examples

```typescript
// General disclaimer for informational agents
@disclaimer(#{
  text: "This agent provides general information only and should not be considered professional advice."
})
```

```typescript
// Financial advice disclaimer with professional consultation reminder
@disclaimer(#{
  text: "All financial information provided is for educational purposes. Please consult with a qualified financial advisor before making investment decisions."
})
```

```typescript
// Technical support disclaimer for critical systems
@disclaimer(#{
  text: "This technical support agent provides general guidance. For critical systems, please contact your IT department directly."
})
```

### `@instructions`

Defines the instructions that define the behavior of an agent.

```typescript
@instructions(instructions: valueof string)
```

#### Target

`Namespace`

#### Parameters

| Name           | Type             | Description |
|----------------|------------------|-------------|
| `instructions` | valueof `string` | Not localizable. The detailed instructions or guidelines on how the declarative agent should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |

#### Examples

```typescript
// Simple, concise instructions for positive interaction
@instructions("Always respond with a positive energy.")
```

```typescript
// Detailed instructions for technical support with specific behaviors
@instructions("""
  You are a customer support agent specializing in technical troubleshooting.
  Always provide step-by-step solutions and ask clarifying questions when needed.
""")
```

```typescript
// Comprehensive instructions with disclaimers and behavioral constraints
@instructions("""
  You are a financial advisor assistant. Provide general financial information
  but always remind users to consult with qualified professionals for specific advice.
  Never provide specific investment recommendations.
""")
```

## API plugin decorators

These decorators are used when building API plugins to define API operations, authentication, and response handling.

### `@actions`

Defines the action that can be defined on an info object in an OpenAPI specification.

```typescript
@actions(data: valueof ActionMetadata)
```

#### Target

`Namespace`

#### Parameters

| Name   | Type                                      | Description                                                                 |
|--------|-------------------------------------------|-----------------------------------------------------------------------------|
| `data` | valueof [ActionMetadata](#actionmetadata) | The action metadata including human-readable names, descriptions, and URLs. |

#### Models

##### ActionMetadata

The action metadata including human-readable names, descriptions, and URLs.

| Name                  | Type     | Description |
|-----------------------|----------|-------------|
| `descriptionForHuman` | `string` | Required. A human-readable description of the plugin. Characters beyond 100 MAY be ignored. This property is localizable. |
| `nameForHuman`        | `string` | Required. A short, human-readable name for the plugin. It MUST contain at least one nonwhitespace character. Characters beyond 20 MAY be ignored. This property is localizable. |
| `contactEmail`        | `string` | Optional. An email address of a contact for safety/moderation, support, and deactivation. |
| `descriptionForModel` | `string` | Optional. The description for the plugin that is provided to the model. This description should describe what the plugin is for, and in what circumstances its functions are relevant. Characters beyond 2048 MAY be ignored. This property is localizable. |
| `legalInfoUrl`        | `string` | Optional. An absolute URL that locates a document containing the terms of service for the plugin. This property is localizable. |
| `logoUrl`             | `string` | Optional. A URL used to fetch a logo that MAY be used by the orchestrator. Implementations MAY provide alternative methods to provide logos that meet their visual requirements. This property is localizable. |
| `privacyPolicyUrl`    | `string` | Optional. An absolute URL that locates a document containing the privacy policy for the plugin. This property is localizable. |

#### Examples

```typescript
// Complete action metadata with all contact and legal information
@actions(#{
  nameForHuman: "Customer Support API",
  descriptionForModel: "Provides customer support ticket management",
  descriptionForHuman: "Manage and track customer support requests",
  privacyPolicyUrl: "https://company.com/privacy",
  legalInfoUrl: "https://company.com/legal",
  contactEmail: "support@company.com"
})
```

```typescript
// Enhanced action metadata with branding and comprehensive descriptions
@actions(#{
  nameForHuman: "Project Management Suite",
  descriptionForModel: "Comprehensive project management tools",
  privacyPolicyUrl: "https://company.com/privacy",
  legalInfoUrl: "https://company.com/terms",
  contactEmail: "pm-support@company.com",
  logoUrl: "https://company.com/logo.png",
  descriptionForHuman: "A complete project management solution for teams"
})
```

```typescript
// Minimal action metadata focusing on analytics functionality
@actions(#{
  nameForHuman: "Analytics Dashboard",
  descriptionForHuman: "Real-time analytics and reporting platform",
  descriptionForModel: "Generate reports and analyze business data"
})
```

### `@authReferenceId`

Defines the authentication reference ID for the authentication type.

```typescript
@authReferenceId(value: valueof string)
```

#### Target

`Model`

#### Parameters

| Name    | Type             | Description                                         |
|---------|------------------|-----------------------------------------------------|
| `value` | valueof `string` | The vault reference ID for the authentication type. |

#### Examples

```typescript
// Reference to the Developer Portal OAuth client registration ID (https://dev.teams.cloud.microsoft/oauth-configuration)
@authReferenceId("NzFmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IyM5NzQ5Njc3Yi04NDk2LTRlODYtOTdmZS1kNDUzODllZjUxYjM=")

// Reference to the Developer Portal API key registration ID (https://dev.teams.cloud.microsoft/api-key-registration)
@authReferenceId("5f701b3e-bf18-40fb-badd-9ad0b60b31c0")
```

### `@capabilities`

Support an action function's capabilities object as defined in the [API plugin manifest](overview-api-plugins.md) object. You can use this decorator to define simple adaptive cards with small definitions like `confirmation`. For more complex adaptive cards, you can use the `@card` decorator.

```typescript
@capabilities(capabilities: valueof FunctionCapabilitiesMetadata)
```

#### Target

`Operation`

#### Parameters

| Name           | Type                                                                  | Description |
|----------------|-----------------------------------------------------------------------|-------------|
| `capabilities` | valueof [FunctionCapabilitiesMetadata](#functioncapabilitiesmetadata) | Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function. |

#### Models

##### FunctionCapabilitiesMetadata

Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function.

| Name                | Type                                    | Description |
|---------------------|-----------------------------------------|-------------|
| `confirmation`      | [Confirmation](#confirmation)           | Optional. Describes a confirmation dialog that SHOULD be presented to the user before invoking the function. |
| `responseSemantics` | [ResponseSemantics](#responsesemantics) | Optional. Describes how the orchestrator can interpret the response payload and provide a visual rendering. |
| `securityInfo`      | [SecurityInfo](#securityinfo)           | Optional. Contains attestations about the behavior of the plugin in order to assess the risks of calling the function. If this property is omitted, the function is unable to interact with other plugins or capabilities of the containing agent. |

##### Confirmation

Describes how the orchestrator asks the user to confirm before calling a function.

| Name    | Type     | Description                                                                            |
|---------|----------|----------------------------------------------------------------------------------------|
| `body`  | `string` | Optional. The text of the confirmation dialog. This property is localizable.           |
| `title` | `string` | Optional. The title of the confirmation dialog. This property is localizable.          |
| `type`  | `string` | Optional. Specifies the type of confirmation. Possible values are: None, AdaptiveCard. |

##### ResponseSemantics

Contains information to identify semantics of response payload and enable rendering that information in a rich visual experience using Adaptive Cards.

| Name             | Type                                                        | Description |
|------------------|-------------------------------------------------------------|-------------|
| `dataPath`       | `string`                                                    | Required. A JSONPath RFC9535 query that identifies a set of elements from the function response to be rendered using the template specified in each item. |
| `oauthCardPath`  | `string`                                                    | Optional. |
| `properties`     | [ResponseSemanticsProperties](#responsesemanticsproperties) | Optional. Allows mapping of JSONPath queries to well-known data elements. Each JSONPath query is relative to a result value. |
| `staticTemplate` | `Record<unknown>`                                           | Optional. A JSON object that conforms with the Adaptive Card schema and templating language. This Adaptive Card instance is used to render a result from the plugin response. This value is used if the templateSelector isn't present or fails to resolve to an adaptive card. |

##### ResponseSemanticsProperties

Allows mapping of JSONPath queries to well-known data elements. Each JSONPath query is relative to a result value.

| Name                         | Type     | Description |
|------------------------------|----------|-------------|
| `informationProtectionLabel` | `string` | Optional. Data sensitivity indicator of the result contents. |
| `subTitle`                   | `string` | Optional. Subtitle of a citation for the result. |
| `templateSelector`           | `string` | Optional. A JSONPath expression to an Adaptive Card instance to be used for rendering the result. |
| `title`                      | `string` | Optional. Title of a citation for the result. |
| `thumbnailUrl`               | `string` | Optional. URL of a thumbnail image for the result. |
| `url`                        | `string` | Optional. URL of a citation for the result. |

##### SecurityInfo

Contains information use to determine the relative risk of invoking the function.

| Name           | Type       | Description |
|----------------|------------|-------------|
| `dataHandling` | `string[]` | Required. An array of strings that describe the data handling behavior of the function. Valid values are `GetPublicData`, `GetPrivateData`, `DataTransform`, `DataExport`, and `ResourceStateUpdate`. |

#### Examples

```typescript
// Simple confirmation dialog for destructive operations
@capabilities(#{
  confirmation: #{
    type: "AdaptiveCard",
    title: "Delete Ticket",
    body: "Are you sure you want to delete this support ticket? This action cannot be undone."
  }
})
```

```typescript
// Comprehensive capabilities with confirmation and response formatting
@capabilities(#{
  confirmation: #{
    type: "modal",
    title: "Create Project",
    body: """
    Creating a new project with the following details:
      * **Title**: {{ function.parameters.name }}
      * **Description**: {{ function.parameters.description }}
      * **Team Lead**: {{ function.parameters.teamLead }}
    """
  },
  responseSemantics: #{
    dataPath: "$.projects",
    properties: #{
      title: "$.name",
      subTitle: "$.description",
      url: "$.projectUrl",
      thumbnailUrl: "$.teamLogo"
    },
    staticTemplate: #{file: "adaptiveCards/dish.json"}
  }
})
```

### `@card`

Defines the adaptive card reference for a function.

```typescript
@card(cardPath: valueof CardMetadata)
```

#### Target

`Operation`

#### Parameters

| Name       | Type                                  | Description |
|------------|---------------------------------------|-------------|
| `cardPath` | valueof [CardMetadata](#cardmetadata) | Defines the adaptive card reference for a function. Simplified version of `responseSemantics`. |

#### Models

##### CardMetadata

Simplified responseSemantics focused on the adaptive card.

| Name       | Type     | Description |
|------------|----------|-------------|
| `dataPath` | `string` | Required. A JSONPath RFC9535 query that identifies a set of elements from the function response to be rendered using the template specified in each item. |
| `file`     | `string` | Required. Path to the adaptive card template. Relative to the appPackage directory. |
| `title`    | `string` | Required. Title of a citation for the result. |
| `url`      | `string` | Optional. URL of a citation for the result. |

#### Examples

```typescript
// Basic card configuration with data binding and static title
@card(#{
  dataPath: "$.tickets",
  file: "cards/ticketCard.json",
  title: "Support Ticket Details"
})
```

```typescript
// Dynamic card with URL binding and custom card file location
@card(#{
  dataPath: "$.projects",
  title: "$.name",
  url: "$.projectUrl",
  file: "cards/project.json"
})
```

### `@reasoning`

Defines the reasoning instructions of a function within an action.

```typescript
@reasoning(value: valueof string)
```

#### Target

`Operation`

#### Parameters

| Name    | Type             | Description                                   |
|---------|------------------|-----------------------------------------------|
| `value` | valueof `string` | The reasoning instructions for the operation. |

#### Examples

```typescript
// Prioritization logic for ticket search operations
@reasoning("""
  When searching for tickets, prioritize by severity level and creation date.
  Always include ticket ID and status in the response.
""")
```

```typescript
// Role-based access control reasoning for project operations
@reasoning("""
  For project queries, consider the user's role and project permissions.
  Filter results based on team membership and access levels.
""")
```

```typescript
// Data validation reasoning for analytics requests
@reasoning("""
  When processing analytics requests, validate date ranges and ensure
  the requested metrics are available for the specified time period.
""")
```

### `@responding`

Defines the responding instructions of a function within an action.

```typescript
@responding(value: valueof string)
```

#### Target

`Operation`

#### Parameters

| Name    | Type             | Description                                    |
|---------|------------------|------------------------------------------------|
| `value` | valueof `string` | The responding instructions for the operation. |

#### Examples

```typescript
// Structured table format for support ticket responses
@responding("""
  Present support tickets in a clear table format with columns: ID, Title, Priority, Status, Created Date.
  Include summary statistics at the end showing total tickets by status.
""")
```

```typescript
// Bullet point format for project information display
@responding("""
  Display project information using bullet points for easy reading.
  Always include project timeline and current phase information.
""")
```
