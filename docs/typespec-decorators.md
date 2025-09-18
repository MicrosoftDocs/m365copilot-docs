---
title: "Built-in Decorators for TypeSpec for Microsoft 365 Copilot"
description: "Built-in Decorators for TypeSpec for Microsoft 365 Copilot"
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

# Decorators for TypeSpec for Microsoft 365 Copilot

## `@instructions`

Defines the instructions that define the behavior of an agent.

```typespec
@instructions(instructions: valueof string)
```

### Target

`Namespace`

### Parameters

| Name | Type | Description |
|------|------|-------------|
| instructions | valueof `string` | Not localizable. The detailed instructions or guidelines on how the declarative agent should behave, its functions, and any behaviors to avoid. It MUST contain at least one nonwhitespace character and MUST be 8,000 characters or less. |

### Examples

```typespec
@instructions("Always respond with a positive energy.")
```

```typespec
@instructions("""
  You are a customer support agent specializing in technical troubleshooting.
  Always provide step-by-step solutions and ask clarifying questions when needed.
""")
```

```typespec
@instructions("""
  You are a financial advisor assistant. Provide general financial information
  but always remind users to consult with qualified professionals for specific advice.
  Never provide specific investment recommendations.
""")
```

## `@agent`

Indicates that a namespace represents an agent.

```typespec
@agent(name: valueof string, description: valueof string)
```

### Target

`Namespace`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | valueof `string` | Localizable. The name of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 100 characters or less. |
| description | valueof `string` | Localizable. The description of the declarative agent. It MUST contain at least one nonwhitespace character and MUST be 1,000 characters or less. |

### Examples

```typespec
@agent("IT Support Assistant", "An AI agent that helps with technical support and troubleshooting")
```

```typespec
@agent("Project Manager", "A helpful assistant for project management tasks and coordination")
```

```typespec
@agent("Data Analytics Helper", "An agent specialized in data analysis and reporting tasks")
```

## `@disclaimer`

An optional object containing a disclaimer message that, if provided, will be displayed to users at the start of a conversation to satisfy legal or compliance requirements.

```typespec
@disclaimer(disclaimer: valueof Disclaimer)
```

### Target

`Namespace`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| disclaimer | valueof `Disclaimer` | The disclaimer information that will be shown to users. |

### Examples

```typespec
@disclaimer(#{
  text: "This agent provides general information only and should not be considered professional advice."
})
```

```typespec
@disclaimer(#{
  text: "All financial information provided is for educational purposes. Please consult with a qualified financial advisor before making investment decisions."
})
```

```typespec
@disclaimer(#{
  text: "This technical support agent provides general guidance. For critical systems, please contact your IT department directly."
})
```

## `@conversationStarter`

Indicates that a namespace contains a conversation starter.

```typespec
@conversationStarter(conversationStarter: valueof ConversationStarter)
```

### Target

`Namespace`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| conversationStarter | valueof `ConversationStarter` | The conversation starter information including title and text. |

### Examples

```typespec
@conversationStarter(#{
  title: "Get Started",
  text: "How can I help you today?"
})
```

```typespec
@conversationStarter(#{
  title: "Check Status",
  text: "What's the status of my recent requests?"
})
```

```typespec
@conversationStarter(#{
  title: "Report Issue",
  text: "I need to report a technical problem"
})
```

## `@behaviorOverrides`

Define settings that modify the behavior of the DA orchestration.

```typespec
@behaviorOverrides(behaviorOverrides: valueof BehaviorOverrides)
```

### Target

`Namespace`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| behaviorOverrides | valueof `BehaviorOverrides` | Settings that modify the behavior of the declarative agent orchestration. |

### Examples

```typespec
@behaviorOverrides(#{
  discourageModelKnowledge: true,
  disableSuggestions: false
})
```

```typespec
@behaviorOverrides(#{
  disableSuggestions: true
})
```

```typespec
@behaviorOverrides(#{
  discourageModelKnowledge: false,
  disableSuggestions: false
})
```

## `@actions`

Defines the action that can be defined on an info object in an OpenAPI specification.

```typespec
@actions(data: valueof ActionMetadata)
```

### Target

`Namespace`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| data | valueof `ActionMetadata` | The action metadata including human-readable names, descriptions, and URLs. |

### Examples

```typespec
@actions(#{
  nameForHuman: "Customer Support API",
  descriptionForModel: "Provides customer support ticket management",
  descriptionForHuman: "Manage and track customer support requests",
  privacyPolicyUrl: "https://company.com/privacy",
  legalInfoUrl: "https://company.com/legal",
  contactEmail: "support@company.com"
})
```

```typespec
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

```typespec
@actions(#{
  nameForHuman: "Analytics Dashboard",
  descriptionForHuman: "Real-time analytics and reporting platform",
  descriptionForModel: "Generate reports and analyze business data",
  legalInfoUrl: "https://analytics.company.com/terms",
  privacyPolicyUrl: "https://analytics.company.com/privacy"
})
```

## `@reasoning`

Defines the reasoning instructions of a function within an action.

```typespec
@reasoning(value: valueof string)
```

### Target

`Operation`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| value | valueof `string` | The reasoning instructions for the operation. |

### Examples

```typespec
@reasoning("""
  When searching for tickets, prioritize by severity level and creation date.
  Always include ticket ID and status in the response.
""")
```

```typespec
@reasoning("""
  For project queries, consider the user's role and project permissions.
  Filter results based on team membership and access levels.
""")
```

```typespec
@reasoning("""
  When processing analytics requests, validate date ranges and ensure
  the requested metrics are available for the specified time period.
""")
```

## `@responding`

Defines the responding instructions of a function within an action.

```typespec
@responding(value: valueof string)
```

### Target

`Operation`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| value | valueof `string` | The responding instructions for the operation. |

### Examples

```typespec
@responding("""
  Present support tickets in a clear table format with columns: ID, Title, Priority, Status, Created Date.
  Include summary statistics at the end showing total tickets by status.
""")
```

```typespec
@responding("""
  Display project information using bullet points for easy reading.
  Always include project timeline and current phase information.
""")
```

```typespec
@responding("""
  Format analytics results as charts when possible. For numerical data,
  include percentage changes from previous periods where applicable.
""")
```

## `@capabilities`

Support an action function's capabilities object as defined in the API Plugin manifest object. You can use this decorator to define simple adaptive cards with small definitions like `confirmation`. For more complex adaptive cards, you can use the `@card` decorator.

```typespec
@capabilities(capabilities: valueof FunctionCapabilitiesMetadata)
```

### Target

`Operation`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| capabilities | valueof `FunctionCapabilitiesMetadata` | The capabilities metadata including confirmation, response semantics, and security info. |

### Examples

```typespec
@capabilities(#{
  confirmation: #{
    type: "AdaptiveCard",
    title: "Delete Ticket",
    body: "Are you sure you want to delete this support ticket? This action cannot be undone."
  }
})
```

```typespec
@capabilities(#{
  confirmation: #{
    type: "modal",
    title: "Create Project",
    body: """   
    Creating a new project with the following details:       
      * **Name**: {{ function.parameters.name }}
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
    staticTemplate: #{
      title: "Project Created",
      body: "Your new project has been successfully created."
    }
  },
  securityInfo: #{
    dataHandling: #["project-data", "team-information"]
  }
})
```

```typespec
@capabilities(#{
  responseSemantics: #{
    dataPath: "$.analytics",
    properties: #{
      title: "$.reportName",
      subTitle: "$.timeRange",
      informationProtectionLabel: "internal"
    },
    oauthCardPath: "analyticsAuth.json"
  },
  securityInfo: #{
    dataHandling: #["analytics-data", "business-metrics"]
  }
})
```

## `@card`

Defines the adaptive card reference for a function.

```typespec
@card(cardPath: valueof CardMetadata)
```

### Target

`Operation`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| cardPath | valueof `CardMetadata` | The adaptive card metadata including file path, title, and data path. |

### Examples

```typespec
@card(#{
  dataPath: "$.tickets",
  file: "ticketCard.json",
  title: "Support Ticket Details"
})
```

```typespec
@card(#{
  dataPath: "$.projects", 
  title: "$.name", 
  url: "$.projectUrl", 
  file: "cards/project.json"
})
```

```typespec
@card(#{
  dataPath: "$.reports", 
  file: "./analytics/reportCard.json",
  title: "Analytics Report",
  url: "https://analytics.company.com"
})
```

## `@authReferenceId`

Defines the authentication reference id for the authentication type.

```typespec
@authReferenceId(value: valueof string)
```

### Target

`Model`

### Parameters
| Name | Type | Description |
|------|------|-------------|
| value | valueof `string` | The vault reference id for the authentication type. |

### Examples

```typespec
@authReferenceId("corporate-sso")
```

```typespec
@authReferenceId("azure-ad-integration")
```

```typespec
@authReferenceId("api-key-auth-v2")
```