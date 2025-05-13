---
description: "Create Python Request"
---

```python

retrieval_body = RetrievalPostRequestBody()
retrieval_body.query_string = "What is the latest in my organization?"
retrieva_body.maximum_number_of_results = 10
retrieval = await client.copilot.retrieval.post(retrieval_body)

```
