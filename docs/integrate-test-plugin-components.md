---
title: Test your plugin components together
description: Test the skills, remote MCP connectors, optional declarative agent, and dependencies your registry plugin will reference.
author: calvindrover-rgb
ms.author: calvind
ms.localizationpriority: medium
ms.date: 11/13/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Test your plugin components together

Test what your plugin package contains or references: skills, remote MCP connectors, and a declarative agent if you include one. This **Package & test** task establishes component behavior and integration before you create the release artifact. Final package validation, installation, and release-experience checks follow in [Test and validate your plugin](validate-plugin.md). Choose the tests for your components, keep a [test record](#record-integration-results), then complete [Before you package](#before-you-package).

## Choose your tests

### Verify components in the integrated scenario

| In your plugin | Test with | Section |
| --- | --- | --- |
| Plugin-level skills, with or without an agent | Cowork development session; supported Chat skill selection | [Test skills](#test-skills) |
| Plugin connectors pointing to remote MCP servers | Inspector, then the same task through the plugin in Cowork | [Test remote MCP connectors](#test-remote-mcp-connectors) |
| Declarative agent, if included | Work IQ Dev Tools ask command and DevUI | [Test an included declarative agent](#test-an-included-declarative-agent) |
| Dependencies used by your solution | Connector diagnostics, then repeat the integrated task | [Test dependencies](#test-dependencies) |

### Know which connector you're testing

- **Plugin connector:** An app-manifest `agentConnectors[]` entry. This article tests the remote MCP kind: the package references a server; it doesn't contain the running service.
- **Copilot connector (synced):** Ingests knowledge into Microsoft Graph. Test its ingestion and subsequent retrieval as dependencies.
- **Copilot connector (federated):** Retrieves live data under the connected identity. Test live access separately from ingestion.
- **Power Platform connector:** A Copilot Studio tool. Testing it doesn't establish that its agent is a registry plugin.

The [plugin authoring reference](https://microsoft.github.io/wiqd/getting-started/plugin-reference/) also documents an explicit route for existing OpenAPI custom-connector references. Use that route's requirements if applicable; the MCP procedure in this article doesn't test that connector kind.

## How to judge a result

Check each component independently, then run a task that uses the components together. A successful direct service call establishes server behavior. The integrated task establishes selection, input, authentication, and use of returned data.

Before testing, define the required checks and acceptable evidence for each component and target experience. Include component selection, correct results, and access boundaries. Use evidence appropriate to the claim:

| Component or claim | Evidence to keep |
| --- | --- |
| Skill selection and behavior | Host evidence that identifies the selected or loaded skill, plus the required outputs and files. In [Cowork's side panel](/copilot/cowork/use-cowork#whats-in-the-side-panel), **Skills** identifies loaded skills. Explicit selection doesn't establish automatic invocation. |
| Remote MCP invocation | Authenticated service logs correlated with the host request, identifying the operation, inputs, and result. A direct Inspector call doesn't establish invocation through the plugin. |
| Included agent | Deployed agent identity, request and response, and available capability-selection, retrieval, and citation diagnostics. Agent diagnostics alone don't establish invocation of every included skill or script. |
| Skill script execution | Execution diagnostics when exposed. Required output files establish the output result, not proof that a particular script ran. If execution of that script is a release requirement, obtain evidence that establishes it. |

- Judge **response correctness** separately from **invocation evidence**. An agent can produce plausible release notes without loading your skill.
- Missing evidence for a required check remains **Unverified** and blocks readiness. Don't weaken a required check because diagnostics are unavailable.
- When a host doesn't expose additional diagnostic detail, record that limitation without claiming the detail was verified. Unavailable diagnostics aren't a separate blocker when the evidence already satisfies the required checks.
- Treat silent fallback or an incomplete result as failure.
- Save sanitized evidence in approved storage, never credentials. Agent snapshots can contain sensitive content.

## Prerequisites and known test data

Use an existing plugin project, a development tenant, known test identities, and nonproduction data. Select the environments and Microsoft experiences you intend to support. Authorize required sign-in, consent, connections, and external services before testing.

For the following commands, install [Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/installation/): Node.js 24.15+ and npm are required for its CLI, plus PowerShell 7+ on Windows.

Prepare:

- **Known record:** Issue 123 in a test repository, with its exact title, status, and URL recorded from the source.
- **Skill input:** `Added CSV export; Fixed duplicate rows; Updated help text.` For a release-notes skill, expect Features, Fixes, and Other respectively, plus any promised file or script-produced content.

Replace example names, IDs, and placeholders. Sign in and check readiness before tenant commands:

```powershell
wiqd auth login --interactive
wiqd doctor
```

**Verify:** Sign-in and readiness checks succeed for the intended tenant.

For optional assistant prompts, install [GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-cli). If its WIQD guide plugin isn't already installed, run these commands, then start a fresh session in your existing plugin project:

```powershell
copilot plugin install wiqd@awesome-copilot
copilot plugin list --json
copilot
```

**Verify:** Inventory shows the installed, enabled WIQD guide. Existing installations should follow the installation guide rather than add duplicates. This guide plugin doesn't install the WIQD CLI. Paste assistant prompts into the coding-assistant session; deployed-agent requests instead use the `-q` option in [Test an included declarative agent](#test-an-included-declarative-agent).

## Test skills

**Plugin component:** Plugin-level skills registered through app-manifest `agentSkills`.

**What this proves:** The intended skill loads and produces expected output in a development deployment.

**Still to prove after packaging:** The exact artifact validates, installs through your distribution route, and runs in every claimed experience.

**Evidence to keep:** Deployment/version, loaded skill, input, output files, and available remote-call logs.

Use [Copilot Cowork](/copilot/cowork/use-cowork) for the development deployment. Reuse its actual printed install/test link when available.

1. If provisioning is required, inspect `m365agents.yml` and the selected environment file under its configured `environmentFolderPath` first. Confirm the tenant and effective `AGENT_SCOPE`; standard scaffolds use `local` for personal scope and `dev` for shared scope, but names alone aren't proof. Approve the proposed changes, then run:

   ```powershell
   wiqd plugin provision --env "<test-environment>"
   ```

   **Verify:** Provisioning succeeds and returns the deployment's install/test link.

1. Open that returned link and complete installation and required connections using the test identity. Start a Cowork session and request release notes using the known input.

   **Verify:** Your skill appears under **Skills** in the session side panel.

1. Inspect the response and any file under **Output folder** > **Preview** or **Download**.

   **Verify:** All changes appear in the intended categories and promised files match requirements.

1. Run the [discovery and invocation tests](build-copilot-chat-skills.md#test-discovery-and-invocation) in each supported experience, using this deployment and the known input.

   **Verify:** Discovery, selection, and failure behavior meet the skill's requirements for that experience.

A personally uploaded skill tests different registration from the plugin's `agentSkills`; agent-attached skills instead use `agent_skills` in the declarative-agent manifest. Loaded-skill evidence doesn't establish per-script execution.

In the [documented lifecycle](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/), provisioning creates or updates the tenant deployment in its selected scope and writes environment bindings. Reusing an existing resource identity can affect current users; authorize those changes. Provisioning doesn't run the separate publish or share commands. The install link isn't proof of registry publication, audience availability, or installation of your final ZIP. Continue separately through [Publish & distribute](publish.md) and [Make available & govern](deploy-plugin.md), including applicable approval, installation, consent, and connections.

**Prefer to use GitHub Copilot CLI?**

```text
Help test <skill-name> in this plugin's existing Cowork development deployment.
Reuse its printed install link. Ask before provisioning; inspect the actual
environment scope first. Don't publish or share. Request release notes for
"Added CSV export; Fixed duplicate rows; Updated help text." Compare categories
and promised files; test missing input. Guide explicit/automatic Chat selection
if supported. Let me operate inaccessible UI and handle sign-in/consent.
Show actual evidence and ask before installs, exposure, or external changes.
```

## Test remote MCP connectors

**Plugin component:** `agentConnectors[]` entries pointing to remote MCP services.

**What this proves:** Server behavior independently, then authenticated use through your development plugin.

**Still to prove after packaging:** Connector declarations, connection setup, and runtime calls work from the exact installed artifact.

**Evidence to keep:** Endpoint/version, tool schema, inputs/results, identity, and correlated host/server records.

Use [MCP Inspector](/windows/ai/mcp/servers/test-mcp-server) with Node.js 22.19.0+, the trusted Streamable HTTP endpoint, its authentication details, and a safe read-only operation.

1. Launch Inspector, replacing the example URL:

   ```powershell
   $serverUrl = 'https://your-server.example/mcp'
   npx @modelcontextprotocol/inspector --server-url "$serverUrl" --transport http
   ```

   **Verify:** Authentication completes and the expected server identity and capabilities appear.

1. List tools, select the lookup operation, enter the schema-defined fields for the known record, and execute it.

   **Verify:** The schema and returned title, status, and URL match expectations.

1. Repeat with a nonexistent record and a restricted identity.

   **Verify:** Missing-record behavior is actionable and unauthorized content stays inaccessible.

1. Open the development plugin's Cowork install and test link, using the provisioning step in [Test skills](#test-skills) if needed; connector-only projects don't require a skill. Complete connection setup and request the same record. If a skill should use the connector, invoke it with that request.

   **Verify:** Authenticated service logs show the expected operation and inputs, and returned values match the session result.

1. Test any approved write operation only against disposable records, including cancellation.

   **Verify:** Approved changes match the request and cancellation leaves source data unchanged.

Compare the endpoint and auth reference in your component configuration with what actually ran. Follow the [connector requirements](https://microsoft.github.io/wiqd/getting-started/plugin-reference/#connector-requirements), including applicable tool-description requirements; server success alone doesn't establish host connection readiness.

For a local service, start it with its project's command. After approving exposure, follow [Create a persistent dev tunnel](plugin-debug-local.md#create-a-persistent-dev-tunnel). For this plugin connector, set `remoteMcpServer.mcpServerUrl` to the public HTTPS endpoint with its actual MCP path; update its development deployment through the project's workflow and retest. Retain application authentication and stop the tunnel when testing is complete.

**Verify:** Service logs show the authenticated host request at the intended endpoint.

**Prefer to use GitHub Copilot CLI?**

```text
Help test this plugin's remote MCP connector at <endpoint>. Show the Inspector
command and ask before downloads or launch. Let me authenticate and call
<read-only-tool/input>; compare with <expected-record>. Then guide the same
task in the existing Cowork deployment and correlate sanitized server logs.
Ask before exposure, deployment, or writes; report diagnostics you can't see.
```

## Test an included declarative agent

**Plugin component:** An optional declarative agent composed into the plugin project.

**What this proves:** Agent responses and available selected-plugin, retrieval, and citation diagnostics.

**Still to prove after packaging:** The packaged agent references and complete installed-plugin scenario work in claimed experiences.

**Evidence to keep:** Agent/version, request/conversation ID, selected capability, input, and actual output.

Follow the [supported plugin project anatomy](https://microsoft.github.io/wiqd/getting-started/plugin-reference/). Use [Work IQ Dev Tools](https://microsoft.github.io/wiqd/) and [DevUI](https://microsoft.github.io/wiqd/extensions/provided/devui/) against the already-deployed agent corresponding to that component.

1. List agents and run the lookup:

   ```powershell
   wiqd agent list
   wiqd plugin ask --component agent --agent-id "<agent-id>" -q "Find issue 123 in my test repository. Return its title, status, and source URL."
   ```

   **Verify:** The selected agent and returned values match the component and source record.

1. Enable the documented DevUI preview flag and repeat:

   ```powershell
   wiqd config flags set devui true
   wiqd devui start --agent "<agent-name>"
   wiqd devui ask --agent "<agent-name>" -q "Find issue 123 in my test repository. Return its title, status, and source URL."
   ```

   Inspect selected plugins, retrieval, citations, and raw results.

   **Verify:** Available diagnostics identify the intended capability and expected returned data.

1. If the agent has an attached skill, check its output:

   ```powershell
   wiqd devui ask --agent "<agent-name>" -q "Draft release notes from these changes: Added CSV export; Fixed duplicate rows; Updated help text."
   ```

   **Verify:** Changes and promised files satisfy the skill's requirements.

1. Stop the diagnostic server:

   ```powershell
   wiqd devui stop
   ```

   **Verify:** The command reports stopped or not running.

DevUI's published diagnostics don't establish per-skill or per-script invocation. Record output correctness separately. Test agent-specific instructions, suggested prompts, and out-of-scope requests against their defined behavior too.

**Prefer to use GitHub Copilot CLI?**

```text
Use WIQD to list agents; let me choose the component's deployed <agent-id>.
Ask it for issue 123 in <repository>, comparing with <expected-title/status/URL>.
Open DevUI and repeat; help inspect selected plugins, retrieval, citations,
raw results, and request IDs. If <skill-name> is attached, request release
notes for "Added CSV export; Fixed duplicate rows; Updated help text."
Compare outputs separately from invocation evidence. Show commands/results
and stop DevUI. Ask before configuration, deployment, sharing, or external
writes. Let me handle sign-in and inaccessible UI; don't publish anything.
```

See the [documented DevUI agentic workflow](https://microsoft.github.io/wiqd/extensions/provided/devui/workflows/).

## Test dependencies

Test the services and knowledge your components rely on, and then repeat the integrated plugin task. These dependency checks aren't additional plugin-component registrations.

### Synced Copilot connector

**Dependency:** Indexed knowledge used by the included agent.

**What this proves:** Ingestion, freshness, permissions, and subsequent retrieval.

**Still to prove after packaging:** The installed plugin uses the intended connection and records.

**Evidence to keep:** Connection ID, crawl output, indexed count, citations, and source values.

For the GitHub Issues template, follow [Build your first synced connector](build-your-first-connector.md) for prerequisites, repository configuration, consent, crawling, and indexing checks. For other implementations, use their documented crawl and diagnostic procedures.

1. Confirm that the connection ID configured for the included agent matches the tested connection and that the known record is indexed.

   **Verify:** Connection diagnostics identify the intended source and expected indexed items.

1. Query the agent configured with that connection, then update a disposable issue, rerun the connector, and query again. Test deletion through its reconciliation path and restricted access where item permissions apply.

   **Verify:** Values, citations, updates, deletion handling, and access match requirements.

### Federated Copilot connector

**Dependency:** An available [federated connection](/microsoft-365/copilot/connectors/federated-connectors-overview) used in your supported scenario.

**What this proves:** Live retrieval under the connected identity.

**Still to prove after packaging:** Your complete installed-plugin scenario uses its intended data-access path.

**Evidence to keep:** Identity, source record, response/citations, and available service logs.

1. In Copilot Chat, select **...** > **Settings** > **Sources**, find the source, select **Connect**, and authenticate.

   **Verify:** Connection succeeds for the intended identity.

1. Ask for the known record by source name or ID. Update a disposable record and repeat. Also, test a restricted identity.

   **Verify:** Live changes appear and source permissions remain enforced.

## Test complete user scenarios

Run the same known task through the intended experience with all required components enabled. For example, ask a skill to retrieve the known issue and produce release notes only if that combined workflow is part of your solution.

1. Start a new conversation with the intended test identity and input.

   **Verify:** The expected skill or agent handles the request.

1. Collect the [component-specific evidence](#how-to-judge-a-result). For remote calls, correlate available host diagnostics with authenticated service logs.

   **Verify:** The intended component is selected. Where a tool is required, it receives the correct input and identity, and its actual output is used.

1. Compare the response and files with the expected result.

   **Verify:** Content, citations, and promised outputs match requirements.

### Test failures and boundaries

Repeat with missing or ambiguous input, expired authentication, denied consent, restricted data, unavailable dependencies, empty or malformed results, script failures, timeouts, throttling, and retries. Confirm safe, actionable failure behavior and required confirmations. Record each expected outcome before running the test.

## Record integration results

Use one record per scenario and identity. Bring it into [package testing](validate-plugin.md); fill package fields after packaging.

| Field | Keep |
| --- | --- |
| Components | Versions, files, endpoints, connection references, and source revision |
| Package | Identity, version, ZIP path, and optional SHA256 hash; pending before packaging |
| Context | Environment, experience/release state, feature flags, test identity role, and date |
| Scenario | Required checks, acceptable evidence, repeatable input, and expected versus actual result |
| Evidence | Sanitized invocation logs, request IDs, outputs, and report locations |
| Decision | Pass, Fail, or Unverified; required evidence gaps, diagnostic limitations, owner, and next action |

## Before you package

- **Invocation:** Confirm intended capability selection and expected inputs/output.
- **Access:** Complete authorized/restricted access, consent, and confirmation checks.
- **Results and failures:** Complete the applicable [failure tests](#test-failures-and-boundaries).
- **Intended experiences:** Record development results separately for every supported release experience; plan final installed-artifact checks.
- **Handoff record:** Save the [test records](#record-integration-results) and resolve implementation blockers before packaging.
- **Package references:** Confirm the component versions, files, identifiers, connection references, and endpoints tested are the ones the package will reference.

## Related content

- [Copilot Studio testing](/microsoft-copilot-studio/authoring-test-bot) and [activity-map diagnostics](/microsoft-copilot-studio/authoring-review-activity) for agents using Power Platform connectors or MCP tools.
- [Agent Builder testing](agent-builder-build-agents.md#test-your-agent) and [attached-skill tests](agent-builder-add-skills.md). These authoring tests don't establish a supported registry packaging route.

## Next step

Continue **Package & test**: [Create the plugin package](package-plugin.md), then [Validate and test the package](validate-plugin.md) using the same evidence record and the exact packaged references.
