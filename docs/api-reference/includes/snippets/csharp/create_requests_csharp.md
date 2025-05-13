---
description: "Create CSharp Request"
---

```csharp

var requestBody = new RetrievalPostRequestBody
{
    QueryString = "What is the latest in my organization?",
    MaximumNumberOfResults = 10
};


var result = await client.Copilot.Retrieval.PostAsync(requestBody);

```
