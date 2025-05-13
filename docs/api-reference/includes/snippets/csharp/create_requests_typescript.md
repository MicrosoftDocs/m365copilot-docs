---
description: "Create TypeScript Request"
---

```typescript

retrieval_body = RetrievalPostRequestBody()
retrieval_body.query_string = "What is the latest in my organization"
retrieva_body.maximum_number_of_results = 2
retrieval = await client.copilot.retrieval.post(retrieval_body)

const requestBody: RetrievalPostRequestBody = {
  queryString: 'What is the latest in my organization',
  maximumNumberOfResults: 2
};

const retrieval = await graphClient.api('/copilot/retrieval').post(requestBody);

```