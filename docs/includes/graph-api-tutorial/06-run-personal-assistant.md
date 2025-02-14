---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

Now that your setup is working, you can run Clippy. Clippy is a personal assistant that can talk to Microsoft Graph APIs and web search APIs.

1. On the Jupyter home page, choose the **Clippy2** script to open it in a separate page.
2. Run the script. The output provides a Microsoft device code window that asks you to open a URL and provide a code.
3. Copy the code, click the URL, and a new tab or window opens. Paste the code and sign in. You only need to do this for the first run; the access_token is saved and used for later runs.

    :::image type="content" source="assets/images/enter-code.png" alt-text="An image of the CEnter code to allow access dialog box." border="false":::

4. Close the window. Wait for a second for your agent to get the access_token required. You should then see a series of queries and responses.

    :::image type="content" source="assets/images/clippy-response.png" alt-text="An image that shows a Clippy query and response." border="false":::
 
The script does the following:

- Imports libraries.
- Declares the scopes of the data to access via the Microsoft Graph APIs.
- Loads the .env files and sets those variables for the agent to use.
- Uses the Microsoft Authentication Library (MSAL) to get the access token.
- Creates two tools: getEvents and getContacts. Each tool talk to a Microsoft Graph API endpoint. 
- A third tool called Tavily Search, which is provided by LangChain, does web searches.
- Creates a memory object to save the queries and send them as context (system messages) in the prompts sent to the agent.
- Logs all conversations against a session_id:def234.
- Sends user queries for the agent to respond.

Congratulations! Your personal assistant is set up and is answering complex questions about your work trip. You can change the queries in the script and run it again to see how your agent performs.
