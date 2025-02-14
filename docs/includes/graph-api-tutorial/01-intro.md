---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

Custom engine agents are specialized chat experiences that can be built on any LLM, toolchain, or orchestration tool and tailored to the domain or tenant workflows.

This tutorial shows you how to build a custom engine agent that serves as a personal assistant that can tell you about the weather or help you plan a work trip. 

The following image shows an example of a chat with the personal assistant you'll build.

:::image type="content" source="assets/images/clippy.png" alt-text="An image of the Clippy personal assistant showing a hello message and a response to a user query." border="false":::

In this tutorial, you will:

1. Learn how to build a LangChain agent in Python.
2. Add tools that connect with Microsoft Graph APIs like **getContacts**.
3. Build the front end for your agent using Chainlit library.


> [!TIP]
> You can download the code for this tutorial from the [CopilotDevX GitHub repo](https://github.com/OfficeDev/CopilotDevX).

## Prerequisites

To complete this tutorial, you should have some familiarity with Python. For an introduction to Python, see the [Python tutorial on W3Schools](https://www.w3schools.com/python/default.asp).

> [!NOTE]
> This tutorial uses Python version 3.10.4 and pip version 24.3.1. The steps haven't been tested with other versions.

In addition, complete the following steps:

1. Install [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/) on your development computer.
2. Install [Jupyter](https://jupyter.org/install) to use Jupyter notebooks with this tutorial.
3. You need a Microsoft work or school account with an Exchange Online mailbox. 

    > [!NOTE]
    > If you don't have a Microsoft 365 tenant, you might qualify for one through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program); for details, see the [FAQ](https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-). Alternatively, you can [sign up for a 1-month free trial or purchase a Microsoft 365 plan](https://www.microsoft.com/en-us/microsoft-365/try).

4. You need an OpenAI API Key. To get one, create an account with OpenAI and follow the steps in the [Developer quickstart](https://platform.openai.com/docs/quickstart). You will need to buy a license to use the OpenAI GPT models, but you can pay only for what you need.
5. You need a Tavily Search API Key, if you want your agent to do a web search to answer your user queries. To get one, go to the [Tavily site](https://app.tavily.com/sign-in) and create an account. We recommend that you get this API key; it has a free tier for hobby-level projects.
6. Optionally, if you want log traces, go to [LangSmith](https://smith.langchain.com/) and make sure to set your environment variables to start logging traces. LangSmith is not required but it's helpful.
