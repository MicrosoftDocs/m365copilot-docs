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
