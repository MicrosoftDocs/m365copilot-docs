---
title: Use Microsoft Graph APIs in your LangChain agent
description: Learn how to build a custom engine agent that uses Microsoft Graph APIs.
author: sakov-ms
ms.author: sakov
ms.topic: tutorial
ms.localizationpriority: medium
ms.date: 05/20/2025
---

# Tutorial: Use Microsoft Graph APIs in your LangChain agent

Custom engine agents are specialized chat experiences that can be built on any LLM, toolchain, or orchestration tool. This tutorial shows you how to build a custom engine agent that serves as a personal assistant that can tell you about the weather or help you plan a work trip.

The following image shows an example of a chat with the personal assistant you'll build.

:::image type="content" source="assets/images/clippy.png" alt-text="An image of the Clippy personal assistant showing a hello message and a response to a user query." border="false":::

In this tutorial, you will:

> [!div class="checklist"]
>
> - Learn how to build a [LangChain](https://www.langchain.com/) agent in Python.
> - Add tools that connect with Microsoft Graph APIs.
> - Build the front end for your agent using [Chainlit](https://docs.chainlit.io/get-started/overview) library.

> [!TIP]
> You can download the code for this tutorial from the [CopilotDevX GitHub repo](https://github.com/OfficeDev/CopilotDevX).

## Prerequisites

- [Python](https://www.python.org/) 3.10 or later and [pip](https://pip.pypa.io/en/stable/) 24 or later.
- [Jupyter](https://jupyter.org/install)
- An OpenAI API Key. To get one, create an account with OpenAI and follow the steps in the [Developer quickstart](https://platform.openai.com/docs/quickstart). You need to buy a license to use the OpenAI GPT models, but you can pay only for what you need.
- A Tavily Search API Key, if you want your agent to do a web search to answer your user queries. To get one, go to the [Tavily site](https://app.tavily.com/sign-in) and create an account.
- Optionally, if you want log traces, go to [LangSmith](https://smith.langchain.com/) and make sure to set your environment variables to start logging traces. LangSmith isn't required but it's helpful.
- A Microsoft work or school account with an Exchange Online mailbox, if you don't already have one.

> [!NOTE]
> If you don't have a Microsoft work or school account with an Exchange mailbox, you might qualify for one through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program). For details, see the [developer program FAQ](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-). Alternatively, you can [sign up for a one-month free trial or purchase a Microsoft 365 plan](https://www.microsoft.com/microsoft-365/try).

## Register an app in Microsoft Entra admin center

Register an application in the Microsoft Entra admin center that supports user authentication using [device code flow](/azure/active-directory/develop/v2-oauth2-device-code). This is allows the custom engine agent to authenticate for Microsoft Graph.

1. Open a browser, go to the [Microsoft Entra admin center](https://entra.microsoft.com), and sign using a Global administrator account.

1. In the left navigation, select **Microsoft Entra ID**, expand **Identity**, expand **Applications**, and then select **App registrations**.

    :::image type="content" source="assets/images/entra-portal-app-registrations.png" alt-text="A screenshot of the App registrations":::

1. Select **New registration**. Enter a name for your application; for example, `Clippy`.

1. Set **Supported account types** to **Accounts in this organizational directory only**.

1. Leave **Redirect URI** empty.

1. Select **Register**. On the application's **Overview** page, copy the value of the **Application (client) ID** and **Directory (tenant) ID**. Save them, you'll need them in the next step.

1. Select **Authentication** under **Manage**. Locate the **Advanced settings** section and change the **Allow public client flows** toggle to **Yes**, then choose **Save**.

    :::image type="content" source="assets/images/aad-default-client-type.png" alt-text="A screenshot of the Allow public client flows toggle":::

## Download and configure the project

1. Download the code or clone the [CopilotDevX GitHub repo](https://github.com/OfficeDev/CopilotDevX) GitHub repo.

1. Open the **.env** file. Add your values for the fields as follows:

    ```ini
    OPENAI_API_KEY=<your OpenAPI key>
    TAVILY_API_KEY=<your Tavily API key>
    LANGCHAIN_API_KEY=<your LangChain API key>
    CLIENT_ID=<your Microsoft Entra app client ID>
    TENANT_ID=<your Microsoft Entra app tenant ID>
    USERNAME=<your email id>
    ```

1. Open your command-line interface (CLI) and install the required libraries by running the following command.

    ```bash
    pip install --requirement=.\requirements.txt
    ```

## Run your first agent

To verify that your LangChain setup is working, start with a simple agent.

1. Open your CLI in the root of the project.
1. Open a webpage that contains all of the project script by using the following command.

    ```bash
    jupyter notebook
    ```

1. Select the **firstAgent.ipynb** notebook. It will open in a separate page.
1. Select the **Run** menu, then select **Run All Cells**. At the bottom of the notebook, you will see the response from the agent.

The script does the following:

- Sets the variables from the .env file.
- Uses the `gpt-4o-mini` model.
- Asks the agent to act like a character from Star Wars.
- The `Hello! What are you up to?` text is the user query that is passed to the agent.

Congratulations! You have successfully created your first agent. You can change characters and text input fields and run the script again to see what your agent does.

## Run the Clippy agent

Now that your setup is working, you can run Clippy. Clippy is a personal assistant that can talk to Microsoft Graph APIs and web search APIs.

1. On the Jupyter home page, choose the **Clippy2** script to open it in a separate page.
1. Run the script. The output provides a Microsoft device code window that asks you to open a URL and provide a code.
1. Copy the code, select the URL, and a new tab or window opens. Paste the code and sign in. You only need to do this step for the first run. The access token is saved and used for later runs.

    :::image type="content" source="assets/images/enter-code.png" alt-text="An image of the CEnter code to allow access dialog box." border="false":::

1. Close the window. Wait for your agent to get the access token required. You should then see a series of queries and responses.

    :::image type="content" source="assets/images/clippy-response.png" alt-text="An image that shows a Clippy query and response." border="false":::

The script does the following:

- Imports libraries.
- Declares the scopes of the data to access via the Microsoft Graph APIs.
- Loads the .env files and sets those variables for the agent to use.
- Uses the Microsoft Authentication Library (MSAL) to get the access token.
- Creates two tools: `getEvents` and `getContacts`. Each tool talks to a Microsoft Graph API endpoint.
- Does web searches with Tavily Search, which is provided by LangChain.
- Creates a memory object to save the queries and send them as context (system messages) in the prompts sent to the agent.
- Logs all conversations against a session ID: `def234`.
- Sends user queries for the agent to respond.

Congratulations! Your personal assistant is set up and is answering complex questions about your work trip. You can change the queries in the script and run it again to see how your agent performs.

## Make the agent a standalone app

Now that your agent is up and running, you can give it a UI and host it so that you can access it in a browser. You use the Chainlit Python package to do this.

1. Open a command prompt and go to the folder that contains **ClippywithUI.py**.
1. Run the following command: `Chainlit run ClippywithUI.py -w`.
1. Your agent opens in a browser and you should be able to ask it questions.

    :::image type="content" source="assets/images/agent-in-browser.png" alt-text="An image of the Clippy personal assistant running in a browser." border="false":::

## Related content

- Learn how to use [app-only authentication](/graph/tutorials/python-app-only) with the Microsoft Graph SDK for Python.
- Learn more about the data you can access with [Microsoft Graph](/graph/overview).
