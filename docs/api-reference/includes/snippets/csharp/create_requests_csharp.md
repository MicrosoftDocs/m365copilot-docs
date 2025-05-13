---
description: "Create CSharp Request"
---

```csharp

var requestBody = new RetrievalPostRequestBody
{
    QueryString = "what is the DTO policy?",
    MaximumNumberOfResults = 2
};


var result = await client.Copilot.Retrieval.PostAsync(requestBody);

```
