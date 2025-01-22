---
title: Debug API plugins locally
description: Learn how to enable communication between Microsoft 365 Copilot and an API running locally
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 12/02/2024
ms.topic: conceptual
---

# Debug API plugins locally

API plugins enable declarative agents in Microsoft 365 Copilot to call REST APIs to retrieve data and perform tasks. However, these APIs must be hosted on servers that are addressable over the internet in order for Microsoft 365 Copilot to reach them. Typically, debugging tools host debug sessions on `localhost` (127.0.0.1), which is only accessible from the machine running the debugging tool. By using a reverse proxy, such as [dev tunnels](/azure/developer/dev-tunnels/overview), you can expose your debug session to the internet to enable debugging calls from Microsoft 365 Copilot.

This article shows you how to use the `devtunnel` tool to enable local debugging for your API.

> [!NOTE]
> Your debugging tools may already provide a reverse proxy solution. We recommend checking the documentation for your developer tools to confirm. For example, if you [created a new API](build-api-plugins-new-api.md) using Teams Toolkit, the toolkit handles configuring reverse proxy for you.

## Prerequisites

- The `devtunnel` CLI [installed](/azure/developer/dev-tunnels/get-started#install) on the machine where you host your debug sessions
- The HTTP port number used by your debugging tool

## Create a persistent dev tunnel

The `devtunnel` CLI allows you to create a persistent dev tunnel - a tunnel that you can stop and start as needed without the hosted URL changing. Using a tunnel with a persistent URL simplifies debugging for API plugins since there's no need to update your declarative agent app packages with new URLs.

1. If you aren't already logged in to the devtunnel CLI, use `devtunnel user login --help` to see the available options. Log in to the CLI before proceeding.

1. Create the tunnel, allowing anonymous access. Anonymous access is necessary to allow Microsoft 365 Copilot to access your tunnel and is unrelated to any authentication required by your API.

    ```powershell
    devtunnel create --allow-anonymous
    ```

    > [!TIP]
    > Creating a new tunnel switches your default tunnel to the newly created one. This allows you to omit the `tunnel-id` argument to subsequent commands. If you create multiple tunnels you may need to use the `tunnel-id` argument to ensure you are using the expected tunnel. For more information, use the `devtunnel --help` command or see [Dev tunnels command-line reference](/azure/developer/dev-tunnels/cli-commands).

1. Add the HTTP port number used by your debugging tool. Replace `<port>` with your port number, and set the `--protocol` parameter to `https` if your debugging tool is using HTTPS on the port, or `http` if it isn't using HTTPS.

    ```powershell
    devtunnel port create --port-number <port> --protocol https
    ```

1. Start the dev tunnel.

    ```powershell
    devtunnel host
    ```

1. For the first time running this dev tunnel, copy the URL labeled **Connect via browser**. Open this URL in your browser and select **Continue** to enable the tunnel.

    > [!NOTE]
    > After selecting **Continue**, your browser will display an error. This is expected and can be ignored.

1. Save the URL as your **API base URL**.

Once the tunnel is enabled, you can stop the tunnel with **CTRL + C**. You can restart the tunnel with the `devtunnel host host-id` command.

## Using the dev tunnel

To use your dev tunnel for debugging, you need to sideload an app package with an OpenAPI specification that uses the dev tunnel's URL in the `servers` array. For more information, see the [OpenAPI reference](https://spec.openapis.org/oas/v3.1.1.html#server-object).

```yml
servers:
  - url: <your-dev-tunnel-url>
```

If you're using Teams Toolkit in Visual Studio Code to manage your declarative agent, you can add an environment variable to the **/env/.env.dev.user** file named `OPENAPI_SERVER_URL` and update your OpenAPI specification to use that environment variable. Use the **Provision** step in the **Lifecycle** pane to sideload your agent.

In your OpenAPI spec, add:

```yml
servers:
  - url: ${{OPENAPI_SERVER_URL}}
```

In your **/env/.env.dev.user** file, add:

```ini
OPENAPI_SERVER_URL=<your-dev-tunnel-url>
```

If you're not using Teams Toolkit, you can generate a new app package ZIP file and [upload your agent](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).
