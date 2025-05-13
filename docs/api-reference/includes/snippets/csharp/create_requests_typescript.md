---
description: "Create TypeScript Request"
---

```typescript

const requestBody: RetrievalPostRequestBody = {
  queryString: 'What is the latest in my organization',
  maximumNumberOfResults: 2
};

const retrieval = await graphClient.api('/copilot/retrieval').post(requestBody);

```