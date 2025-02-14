---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

To complete this tutorial, you should have some familiarity with Python. For an introduction to Python, see the [Python tutorial on W3Schools](https://www.w3schools.com/python/default.asp).

> [!NOTE]
> This tutorial uses Python version 3.10.4 and pip version 24.3.1.

## Prerequisites

1. Install [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/) on your development computer.
2. Install [Jupyter](https://jupyter.org/install) to use Jupyter notebooks with this tutorial.
3. Get a Microsoft work or school account with an Exchange Online mailbox, if you don't already have one. 

    > [!NOTE]
    > If you don't have a Microsoft 365 tenant, you might qualify for one through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program); for details, see the [FAQ](https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-). Alternatively, you can [sign up for a one-month free trial or purchase a Microsoft 365 plan](https://www.microsoft.com/en-us/microsoft-365/try).

4. Get an OpenAI API Key. To get one, create an account with OpenAI and follow the steps in the [Developer quickstart](https://platform.openai.com/docs/quickstart). You need to buy a license to use the OpenAI GPT models, but you can pay only for what you need.
5. Get a Tavily Search API Key, if you want your agent to do a web search to answer your user queries. To get one, go to the [Tavily site](https://app.tavily.com/sign-in) and create an account. We recommend that you get this API key; it has a free tier for hobby-level projects.
6. Optionally, if you want log traces, go to [LangSmith](https://smith.langchain.com/) and make sure to set your environment variables to start logging traces. LangSmith isn't required but it's helpful.
