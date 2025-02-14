---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

Next, set up the project:

1. Go to the [CopilotDevX GitHub repo](https://github.com/OfficeDev/CopilotDevX)  GitHub repo and download the zip file or clone the repository.

2. Go to the folder that contains the .env file. Add your values for the fields as follows:

    ```
        OPENAI_API_KEY=xxxxxx
        TAVILY_API_KEY=xxxxxx
        LANGCHAIN_API_KEY=xxxxxx
        CLIENT_ID=xxxxx
        TENANT_ID=xxxxx
        USERNAME={your email id}
    ```

3. Install all the required libraries:
   1. Open a Windows command prompt. 
   2. Go to the folder that contains requirements.txt. 
   3. Run the following command to install all the right libraries:
     `pip install --requirement=.\requirements.txt`
