---
title: Work IQ A2A quickstart
description: Learn how to test your tenant configuration using the Agent-to-Agent (A2A) protocol
author: MSFTgraph-sorceress
ms.author: hstoffels
ms.topic: quickstart
ms.localizationpriority: medium
ms.date: 06/02/2026
---

# Work IQ A2A quickstart

<!-- cSpell:ignore AADSTS MSAL azurecli -->

## Prerequisites

- [Enable your tenant for Work IQ](../enable-work-iq.md)
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet/8.0) version 8 or later for running the sample code

## Register the application in Microsoft Entra

Register an application with permissions to access Work IQ. When you register the app, you get two values: `APP_ID` and `TENANT_ID`. Use these values with the A2A sample to test your tenant configuration.

> [!TIP]
> **Building a server-side agent (web app)?** This quickstart uses a **public-client** registration (mobile/desktop) for the simplest path to a working sample. If your application is a server-side service that calls Work IQ on behalf of an end user (for example, a web agent that signs the user in and then forwards their identity to Work IQ), use a **confidential-client** registration with a client secret or certificate. Exchange the user's token by using the [On-Behalf-Of (OBO) flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow). The Work IQ API surface and the **WorkIQAgent.Ask** delegated permission are the same in both flows.

### [Admin center](#tab/entra-admin)

1. Go to the [Microsoft Entra admin center](https://entra.microsoft.com). In the left-hand navigation pane, select **Entra ID**, and then select **App registrations**.
1. Select **New registration**.
1. Add a descriptive name, set **Supported account types** to **Accounts in this organizational directory only**, and select **Register**.
1. Copy the **Application (client) ID**. This value is your `APP_ID`.
1. Select **Authentication**. Select **Add a platform** (or **Add Redirect URI**). In the dialog, select **Mobile and desktop applications**.
   - Select the suggested URI: `https://login.microsoftonline.com/common/oauth2/nativeclient`.
   - Under **Custom redirect URIs**, add the following two URIs **one at a time** (each on its own row):
     - `http://localhost`
     - `ms-appx-web://microsoft.aad.brokerplugin/<APP_ID>` (where `<APP_ID>` is your `APP_ID`)
   - Under **Advanced settings**, set **Allow public client flows** to **Yes**.
   - Select **Save**.
1. Select **API permissions**, **Add a permission**, and then **APIs my organization uses**. Search for `Work IQ`, and then select **Delegated permissions**. Select **WorkIQAgent.Ask** and then select **Add permissions**.
1. Select **Grant admin consent for [your tenant]**. Review the confirmation dialog and select **Yes**.
1. Copy your **Directory (tenant) ID** from the **Microsoft Entra ID** overview page.

The **WorkIQAgent.Ask** permission lets the app, on behalf of the signed-in user, query their Microsoft 365 work intelligence (mail, files, meetings, chats) through Work IQ.

### [Azure CLI](#tab/azure-cli)

1. Create the app registration *(Choose your own display name)*.

    ```azurecli
    APP_ID=$(az ad app create \
      --display-name "Work IQ Samples Client" \
      --sign-in-audience AzureADMyOrg \
      --is-fallback-public-client true \
      --query appId -o tsv)
    echo "APP_ID: $APP_ID"
    ```

1. Create the service principal for the app.

    ```azurecli
    az ad sp create --id $APP_ID
    ```

1. Configure the three public-client redirect URIs.

    - `http://localhost`                                          : interactive browser fallback
    - `login.microsoftonline.com/common/oauth2/nativeclient`      : legacy MSAL native
    - `ms-appx-web://microsoft.aad.brokerplugin/<APP_ID>`         : WAM broker on Windows

    ```azurecli
    az ad app update --id $APP_ID \
      --public-client-redirect-uris \
        "http://localhost" \
        "https://login.microsoftonline.com/common/oauth2/nativeclient" \
        "ms-appx-web://microsoft.aad.brokerplugin/$APP_ID"
    ```

1. Add the **WorkIQAgent.Ask** delegated permission and grant consent.

    > [!NOTE]
    > `dcc1f02-fc51-4226-8753-f668596af7f7` is the Work IQ application ID, and `0b1715fd-f4bf-4c63-b16d-5be31f9847c2` is the scope ID for **WorkIQAgent.Ask**.

    ```azurecli
    az ad app permission add --id $APP_ID \
      --api fdcc1f02-fc51-4226-8753-f668596af7f7 \
      --api-permissions "0b1715fd-f4bf-4c63-b16d-5be31f9847c2=Scope"
    az ad app permission admin-consent --id $APP_ID
    ```

1. Get your tenant ID.

    ```azurecli
    az account show --query tenantId -o tsv
    ```

---

## Quickstart: A2A protocol

The [Agent-to-Agent (A2A)](https://a2a-protocol.org) protocol is an open standard for agent communication. Work IQ supports both A2A v1.0 (this quickstart) and v0.3. The `A2A-Version` request header controls version dispatch.

- `A2A-Version: 1.0` - v1.0 wire format (this quickstart)
- `A2A-Version: 0.3` (or header omitted) - v0.3 wire format (kept as the no-header default for backward compatibility with existing v0.3 clients)

### Get the sample code

Clone the sample repository by using the following command.

```bash
git clone https://github.com/microsoft/work-iq-samples.git
cd work-iq-samples
```

### Run the sample (with the A2A SDK)

The `dotnet/a2a` sample uses the [A2A .NET SDK](https://github.com/a2aproject/a2a-dotnet).

```bash
cd dotnet/a2a
dotnet run -- --token WAM --appid <APP_ID> --tenant <TENANT_ID>
```

### Run the sample (raw HTTP, no SDK)

The `dotnet/a2a-raw` sample shows the wire protocol with no SDK abstraction. Using this sample is useful for porting to non-.NET languages.

```bash
cd dotnet/a2a-raw
dotnet run -- --token WAM --appid <APP_ID> --tenant <TENANT_ID>
```

### What happens

When you run the sample, a sign-in prompt appears (WAM dialog on Windows, system browser on macOS/Linux). After signing in, type a message at the `You >` prompt and press **Enter**. The agent reply appears below. Type `quit` to exit.

```bash
── READY — Work IQ Gateway — Sync — https://workiq.svc.cloud.microsoft/a2a/ ──
Type a message. 'quit' to exit.

You > Summarize my recent emails from Alice.
Agent > You've exchanged 8 emails with Alice this week. Key threads:
  - ...
  (2145 ms)

You > quit
```

### How it works

Work IQ accepts A2A v1.0 over **JSON-RPC** at `https://workiq.svc.cloud.microsoft/a2a/`. (A2A v1.0 also defines a REST binding at `/v1/message:send`; Work IQ might expose this REST binding in a future update.)

#### Work IQ Gateway

- Endpoint: `https://workiq.svc.cloud.microsoft/a2a/`
- Token audience: `api://workiq.svc.cloud.microsoft`
- Scope: `WorkIQAgent.Ask`

#### Synchronous `SendMessage`

```http
POST https://workiq.svc.cloud.microsoft/a2a/
Authorization: Bearer <token>
Content-Type: application/json
A2A-Version: 1.0

{
  "jsonrpc": "2.0",
  "id": "<request-guid>",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "messageId": "<message-guid>",
      "parts": [
        {
          "text": "What meetings do I have today?"
        }
      ],
      "metadata": {
        "Location": {
          "timeZoneOffset": -480,
          "timeZone": "America/Los_Angeles"
        }
      }
    }
  }
}
```

The `A2A-Version: 1.0` request header enables v1.0 method names (`SendMessage`) on the gateway. Without it, the server defaults to v0.3 and returns a JSON-RPC `-32601 "Method not found"` for v1.0 method names.

The response is a JSON-RPC envelope with `result.task` containing the agent's task and a `contextId` for multi-turn:

```json
{
  "jsonrpc": "2.0",
  "id": "<request-guid>",
  "result": {
    "task": {
      "id": "<task-id>",
      "contextId": "ctx-1",
      "status": {
        "state": "TASK_STATE_COMPLETED"
      },
      "artifacts": [
        {
          "artifactId": "<artifact-id>",
          "name": "Answer",
          "parts": [
            {
              "text": "Today you have: 9 AM standup, 11 AM review with Dana, 2 PM customer call."
            }
          ]
        }
      ]
    }
  }
}
```

Work IQ requires the `Location` metadata to ground time-sensitive queries ("today" or "this week") in the user's local time.

### Multi-turn conversations

To maintain conversation state, pass the `contextId` from the previous response in the next message.

```json
{
  "jsonrpc": "2.0",
  "id": "<request-guid-2>",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "messageId": "<message-guid-2>",
      "contextId": "ctx-1",
      "parts": [
        {
          "text": "Tell me more about the 2 PM customer call."
        }
      ]
    }
  }
}
```

### Key protocol details (A2A v1.0)

- **JSON-RPC envelope required:** every request must include `jsonrpc`, `id`, `method`, `params`.
- **POST to base URL:** the method (`SendMessage`) is inside the JSON-RPC body, not the URL path.
- **Field-presence parts:** parts are flat objects with one of `text`, `url`, `raw`, or `data` set; no `kind` discriminator.
- **SCREAMING_SNAKE_CASE enums:** roles use `ROLE_USER` / `ROLE_AGENT`; states use `TASK_STATE_WORKING` / `TASK_STATE_COMPLETED` / `TASK_STATE_FAILED` / etc.
- **Result wrapper:** task responses appear under `result.task`.
- **Version dispatch:** `A2A-Version: 1.0` selects v1.0; omitting the header (or sending `A2A-Version: 0.3`) selects v0.3, the no-header default.

### Agent discovery

To invoke a specific agent, pass its **agent ID** through `--agent-id`. You can find an agent's ID in two ways.

#### Recommended: WorkIQ CLI `list-agents` (experimental)

The [WorkIQ CLI](../cli.md) includes an experimental `list-agents` command that lists the agents available to your signed-in user.

```bash
workiq config set experimental=true
workiq list-agents
```

Each row shows the agent's display name, provider, and agent ID (the second line of each entry). Use that ID with `--agent-id` when running the sample.

#### Alternative: copy from the Microsoft 365 Copilot URL

1. Go to the Microsoft 365 Copilot Chat website: [https://m365.cloud.microsoft/chat/](https://m365.cloud.microsoft/chat/).
1. Select your agent in the left navigation.
1. The agent ID appears in the browser address bar after `/chat/agent/`:

```text
https://m365.cloud.microsoft/chat/agent/P_c0fd1ab0-cbf3-7eb9-1a7d-2d823549ef31.8ad61c39-5b6e-447c-b26a-a64eee436502
                                       └──────────────────────────── agent ID ─────────────────────────────────────┘
```

The format is `<LETTER>_<opaqueValue1>.<opaqueValue2>`.

#### Pass the agent ID to the sample

> [!IMPORTANT]
> Treat the entire agent ID as an opaque string. Don't deconstruct or parse its components. Pass it as-is to the API.

Pass the agent ID as an argument to the sample

```bash
dotnet run -- --token WAM --agent-id <AGENT_ID> --appid <APP_ID> --tenant <TENANT_ID>
```

> [!NOTE]
> Some Microsoft 365 agents (notably Word, Excel, and PowerPoint agents in the Copilot Chat UI) are designed to run in the context of those Office products and don't produce useful responses when invoked headlessly via A2A.

### A2A capabilities

| Capability                   | Status                                                              |
|------------------------------|---------------------------------------------------------------------|
| `SendMessage` (sync)         | ✅ Available                                                        |
| Multi-turn (`contextId`)     | ✅ Available                                                        |
| Text parts                   | ✅ Available                                                        |
| Citations                    | ✅ Available (delivery shape is being modernized; see release notes) |

---

## Authentication

| Method                            | Platform     | Usage                                                                                                              |
|-----------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------|
| **WAM** (Windows Account Manager) | Windows      | `--token WAM --appid <APP_ID> --tenant <TENANT_ID>`                                                                |
| **Interactive browser**           | macOS, Linux | Same command — Microsoft Identity Client falls back to a system browser sign-in.                                   |
| **Pre-obtained JWT**              | Any          | `--token <JWT>` (the token must be issued for your registered app, not for an arbitrary client like the Azure CLI) |

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `401 Unauthorized` | Token `aud` doesn't match `api://workiq.svc.cloud.microsoft`. Check the audience claim. |
| `403 Forbidden` (no scope error) | User not a member of a usage-based billing plan. Assign and wait 15–30 min. |
| `403 Forbidden` with `Required scopes = [...]` | Admin consent for `WorkIQAgent.Ask` wasn't granted. Rerun admin consent (admin setup, step 6 / Azure CLI step 3). |
| WAM `IncorrectConfiguration` (3399614466) | App registration is missing the broker redirect URI. Readd `ms-appx-web://microsoft.aad.brokerplugin/<APP_ID>` and try again. |
| WAM still fails after the redirect URI is set | Single-tenant app + `/common` authority mismatch. Pass `--tenant <TENANT_ID>` so Microsoft Identity Client uses the tenant-specific authority. |
| `AADSTS65001: consent required` | Admin consent hasn't been granted. Run `az ad app permission admin-consent --id <APP_ID>`. |
| Empty 200 / no agent text | If the user's Copilot license was assigned recently, the index can take 15–30 min to build. If you invoked a Word/Excel/PowerPoint agent, those agents run in the Office product and don't produce headless A2A responses. |

---

## Related content

- [Sample code on GitHub](https://github.com/microsoft/work-iq-samples)
- [Work IQ API overview](../api-overview.md)
- [Enable Work IQ in your tenant](../enable-work-iq.md)
- [A2A protocol specification](https://a2a-protocol.org/latest/specification/)
- [A2A .NET SDK](https://github.com/a2aproject/a2a-dotnet)
- [A2A v0.3 → v1.0 migration guide](https://github.com/a2aproject/a2a-dotnet/blob/main/docs/migration-guide-v1.md)
