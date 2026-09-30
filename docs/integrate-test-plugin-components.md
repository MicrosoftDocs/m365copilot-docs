---
title: Integrate and Test Microsoft 365 Copilot Plugin Components
description: Confirm that the agents, skills, connectors, and MCP-based capabilities in your plugin work together and are ready for packaging.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Integrate and test your plugin components

Package and test turns working components into a tested release artifact. Complete the work in this order:

| Step | What you confirm | Start with |
|---|---|---|
| Integrate capabilities | The completed components work together in the intended development or test environment. | This article |
| Create the package | One supported packaging route produces the exact versioned artifact you intend to release. | [Create the plugin package](package-plugin.md) |
| Validate and test the package | The exact artifact passes package validation, installs successfully, and works in every claimed Microsoft experience. | [Validate and test the package](validate-plugin.md) |
| Evaluate agent quality, when required | The deployed agent meets the response-quality criteria for the release. | [Agent evaluation overview](evaluation-overview.md) |

This article covers the first step. It doesn't test the final package. Package validation and installed-plugin testing begin after you create the artifact.

## Prepare the test environment

Before testing:

- Use the intended versions of every component.
- Configure the development or test identities, permissions, consent, and connections.
- Start or make required remote services available in the development or test environment.
- Confirm that the target users and test accounts can access the intended Microsoft experiences.
- Use representative test data that doesn't expose production secrets or unnecessary personal information.
- Record the expected result, environment, owner, and required evidence for each scenario.

## Verify components in the integrated scenario

| Component | Integration checks |
|---|---|
| Declarative agent | Identity, instructions, conversation starters, knowledge, capability selection, responses, boundaries, and unsupported prompts |
| Skill | Discovery or attachment, instructions, resources, scripts, inputs, outputs, unsupported requests, and failures |
| Connector | Authentication, schema, indexing or retrieval, freshness, security trimming, permissions, updates, deletions, and source failures |
| MCP server | Tool or resource discovery, authentication, inputs, structured results, confirmations, errors, timeouts, availability, and logs |

Use the applicable product-specific testing guidance:

- [Debug agents using Copilot Studio](debugging-agents-copilot-studio.md)
- [Debug agents using Agents Toolkit](debugging-agents-vscode.md)
- [Review custom skill support and known issues](declarative-agent-skills.md#support-matrix)
- [Build and test a custom Copilot connector](build-your-first-connector.md)
- [Debug MCP and API plugins locally](plugin-debug-local.md)
- [Test a deployed declarative agent with Work IQ DevUI](https://microsoft.github.io/wiqd/extensions/provided/devui/)
- [Send test prompts with Work IQ Dev Tools](https://microsoft.github.io/wiqd/extensions/provided/workiq/)

Work IQ DevUI is a preview browser-based debugging surface that can show selected plugins, retrieval, citations, request identifiers, and raw results. The WIQD Work IQ commands are experimental and can list deployed declarative agents or send a test prompt by agent ID or name. These routes test a deployed declarative agent; they don't replace package validation or testing the final installed plugin.

## Test complete user scenarios

Test the end-to-end scenarios from the solution brief rather than testing only individual features.

1. Start with a representative user prompt or task.
1. Confirm that the intended agent or Microsoft experience handles the request.
1. Confirm that the correct skill, connector, action, or MCP tool is selected.
1. Verify authentication, consent, confirmation, and permission behavior.
1. Confirm that the component receives the intended inputs and returns the expected result.
1. Confirm that the final response is accurate, useful, and understandable.
1. Verify that logs and diagnostics identify the components involved.

When testing in Microsoft 365 Copilot, you can enter `-developer on` in Copilot Chat to inspect agent metadata and action selection. Enter `-developer off` when you finish.

## Test failures and boundaries

Include:

- Missing or expired authentication.
- Insufficient permissions or denied consent.
- Unavailable data, connections, APIs, or remote services.
- Invalid, ambiguous, or unsupported user input.
- Empty, partial, delayed, or malformed results.
- Timeouts, throttling, and retry behavior.
- Attempts to access data outside the user's permissions.
- Instructions that should prevent or redirect an unsupported operation.

Don't treat a silent fallback as success. The user and support team should be able to understand what failed and what action is required.

## Record integration results

For every test scenario, record:

- Environment and Microsoft experience.
- Component and service versions.
- Identity, permission, and connection configuration.
- Expected and actual result.
- Logs or evidence.
- Known limitation, owner, and resolution or acceptance decision.

Record the exact files, configurations, endpoints, component versions, owners, and evidence that the package author must use.

## Confirm readiness to package

Integration testing is complete when:

- Every required component is built, configured, extended, or reused.
- Every component works independently in the development or test environment.
- The components work together for the end-to-end scenarios.
- Required identities, permissions, connections, data, and services are available.
- Expected authentication, confirmation, error, and failure behavior is implemented.
- Component ownership, dependencies, versions, limitations, and support responsibilities are documented.
- The implementation files and configuration are identified and ready to assemble.
- No unresolved implementation blocker prevents package creation.

Continue to [package your plugin](package-plugin.md).

## Related content

- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Set up your development environment](prerequisites.md)
- [Test and validate your plugin](validate-plugin.md)
