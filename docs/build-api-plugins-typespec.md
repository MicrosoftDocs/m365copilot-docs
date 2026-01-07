---
title: Build API plugins as declarative agent actions using TypeSpec for Microsoft 365 Copilot
description: Learn how to build API plugins as declarative agent actions with TypeSpec for Microsoft 365 Copilot
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.topic: how-to
---

# Build API plugins with TypeSpec for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

[API plugins](overview-api-plugins.md) are custom actions for declarative agents that connect a REST API with an [OpenAPI specification](https://www.openapis.org/what-is-openapi) to Microsoft 365 Copilot. This guide demonstrates how to add an API plugin to a declarative agent by using [TypeSpec](https://typespec.io/) and the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit).

## Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- An existing REST API (this walkthrough uses the [JSON Placeholder API](https://jsonplaceholder.typicode.com))
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit)
- An agent created with the [Microsoft 365 Agents Toolkit](build-declarative-agents-typespec.md) and TypeSpec for Microsoft 365 Copilot

> [!TIP]
> For the best results, make sure that the API you are generating follows the guidelines detailed in [How to make an OpenAPI document effective in extending Copilot](openapi-document-guidance.md).

## Adding a `GET` operation

To start, add a `GET` operation to list all post items. Open the `main.tsp` file and add a new namespace `PostsAPI` in the `MyAgent` namespace with the following content.

```typescript
// Omitted for brevity
namespace MyAgent {
  // Omitted for brevity
  @service
  @server("https://jsonplaceholder.typicode.com")
  @actions(#{
    nameForHuman: "Posts APIs",
    descriptionForHuman: "Manage blog post items with the JSON Placeholder API.",
    descriptionForModel: "Read, create, update and delete blog post items with the JSON Placeholder API."
  })
  namespace PostsAPI {

    /**
     * List all blog post items.
     */
    @route("/posts")
    @get op listPosts(): PostItem[];

    /**
     * Structure of a blog post item.
     */
    model PostItem {
      /**
       * The ID of the user who created the post.
       */
      userId: integer;

      /**
       * The ID of the post.
       */
      @visibility(Lifecycle.Read)
      id: integer;

      /**
       * The title of the post.
       */
      title: string;

      /**
       * The body of the post.
       */
      body: string;
    }
  }
  // Omitted for brevity
}
```

This code defines the `PostItem` model and the REST API `GET /posts`.

## Adding a `GET` operation with a query parameter

The `GET` operation in the previous example takes no parameters. To enable filtering by user ID, update the `GET` operation with an optional query parameter to filter the results by user ID.

Open the `main.tsp` file and replace the existing `listPosts` operation with the following content.

```typescript
/**
 * List all blog post items.
  * @param userId The ID of the user who created the post. If not provided, all posts will be returned.
  */
@route("/posts")
@get op listPosts(@query userId?: integer): PostItem[];
```

The `@query userId?` parameter added to `listPosts` updates the REST API to `GET /posts?userId={userId}`.

## Add an adaptive card to a `GET` operation

Adding an [Adaptive Card](api-plugin-adaptive-cards.md) to the `listPosts` operation changes how the citations in the generated response are rendered.

Create a new file named **post-card.json** in the **appPackage** directory and add the following content.

```json
{
  "type": "AdaptiveCard",
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "$data": "${$root}",
      "items": [
        {
          "type": "TextBlock",
          "text": "**${if(title, title, 'N/A')}**",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "${if(body, body, 'N/A')}",
          "wrap": true
        }
      ]
    }
  ],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "Read More",
      "url": "https://www.bing.com/search?q=https://jsonplaceholder.typicode.com/posts/${id}"
    }
  ]
}
```

Open the `main.tsp` file and add the `@card` decorator to the `listPosts` operation, as shown in the following code snippet.

```typescript
/**
 * List all blog post items.
  * @param userId The ID of the user who created the post. If not provided, all posts will be returned.
  */
@route("/posts")
@card(#{ dataPath: "$", file: "post-card.json", properties: #{ title: "$.title" } })
@get op listPosts(@query userId?: integer): PostItem[];
```

## Adding a `POST` operation

Open the `main.tsp` file and within the `PostsAPI` namespace, add the following content.

```typescript
/**
 * Create a new blog post item.
 * @param post The post item to create.
 */
@route("/posts")
@post op createPost(@body post: PostItem): PostItem;
```

This code defines the REST API `POST /posts`, which creates a new blog post.

## Adding a `PATCH` operation

Open the `main.tsp` file and within the `PostsAPI` namespace, add the following content.

```typescript
/**
 * Updates a blog post item.
 * @param id The ID of the post to update.
 * @param post The updated post item.
 */
@route("/posts/{id}")
@patch op updatePost(@path id: integer, @body post: PostItem): PostItem;
```

This code defines the REST API `PATCH /posts/{id}`, which updates an existing blog post.

## Adding a `DELETE` operation

Open the `main.tsp` file and within the `PostsAPI` namespace, add the following content.

```typescript
/**
 * Deletes a blog post item.
 * @param id The ID of the post to delete.
 */
@route("/posts/{id}")
@delete op deletePost(@path id: integer): void;
```

This code defines the REST API `DELETE /posts/{id}`, which deletes an existing blog post.

## Test the custom actions

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.
1. In the **Lifecycle** pane, select **Provision**.
1. Wait for provisioning to complete, then open [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) in your browser.
1. Select your agent from the list of agents.
1. Test the agent with the following prompts, or try your own.

### Test the GET operation

**Prompt:** "List all blog posts and render them as a table."

:::image type="content" source="assets/images/api-plugins/api-plugin-typespec-get.png" alt-text="A screenshot of an answer from a declarative agent based on new GET operations":::

**Prompt:** "List all blog posts for the user with ID 1 and render them as a table."

:::image type="content" source="assets/images/api-plugins/api-plugin-typespec-card.png" alt-text="A screenshot of an answer from a declarative agent based on GET operations with adaptive cards":::

### Test the POST operation

**Prompt:** "Create a new blog post with user ID 1, title 'New Post', and body 'This is a new post'."

:::image type="content" source="assets/images/api-plugins/api-plugin-typespec-post.png" alt-text="A screenshot of an answer from a declarative agent based on POST operations":::

### Test the PATCH operation

**Prompt:** "Update the blog post with ID 30 and update the title to 'Updated Title' and body to 'Updated Body'."

:::image type="content" source="assets/images/api-plugins/api-plugin-typespec-patch.png" alt-text="A screenshot of an answer from a declarative agent based on PATCH operations":::

### Test the DELETE operation

**Prompt:** "Delete the blog post with ID 50."

:::image type="content" source="assets/images/api-plugins/api-plugin-typespec-delete.png" alt-text="A screenshot of an answer from a declarative agent based on DELETE operations":::

## Example of a complete `main.tsp` file

The following is an example of a complete `main.tsp` file with the `GET`, `POST`, `PATCH`, and `DELETE` operations added.

```typescript
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;
using TypeSpec.M365.Copilot.Agents;

@agent(
  "My Posts Agent",
  "Declarative agent focusing on blog posts management."
)

@instructions("""
  You should help users with blog posts management.
  You can read, create, update and delete blog post items.
  You can also search for blog posts by user ID.
""")

@conversationStarter(#{
  title: "List Blog Posts",
  text: "List all blog posts and render them as a table."
})

@conversationStarter(#{
  title: "Lists a user's blog posts",
  text: "List all blog posts for the user with ID 1 and render them as a table."
})

@conversationStarter(#{
  title: "Delete a blog post",
  text: "Delete the blog post with ID 50."
})

@conversationStarter(#{
  title: "Update a blog post",
  text: "Update the blog post with ID 30 and update the title to 'Updated Title' and body to 'Updated Body'."
})

@conversationStarter(#{
  title: "Create a blog post",
  text: "Create a new blog post with user ID 1, title 'New Post' and body 'This is a new post'."
})

@conversationStarter(#{
  title: "Get a blog post",
  text: "Get all the details about the blog post with ID 10."
})

namespace MyAgent {
  @service
  @server("https://jsonplaceholder.typicode.com")
  @actions(#{
    nameForHuman: "Posts APIs",
    descriptionForHuman: "Manage blog post items on JSON Placeholder APIs.",
    descriptionForModel: "Read, create, update and delete blog post items on the JSON Placeholder APIs."
  })
  namespace PostsAPI {
    /**
     * List all blog post items.
     * @param userId The ID of the user who created the post. If not provided, all posts will be returned.
     */
    @route("/posts")
    @card(#{ dataPath: "$", file: "post-card.json", properties: #{ title: "$.title" } })
    @get op listPosts(@query userId?: integer): PostItem[];

    /**
     * Get a blog post item by ID.
     */
    @route("/posts/{id}")
    @card(#{ dataPath: "$", file: "post-card.json", properties: #{ title: "$.title" } })
    @get op getPost(@path id: integer): PostItem;

    /**
     * Create a new blog post item.
     * @param post The post item to create.
     */
    @route("/posts")
    @post op createPost(@body post: PostItem): PostItem;

    /**
     * Updates a blog post item.
     * @param id The ID of the post to update.
     * @param post The updated post item.
     */
    @route("/posts/{id}")
    @patch op updatePost(@path id: integer, @body post: PostItem): PostItem;

    /**
     * Deletes a blog post item.
     * @param id The ID of the post to delete.
     */
    @route("/posts/{id}")
    @delete op deletePost(@path id: integer): void;

    model PostItem {
      /**
       * The ID of the user who created the post.
       */
      userId: integer;

      /**
       * The ID of the post.
       */
      @visibility(Lifecycle.Read)
      id: integer;

      /**
       * The title of the post.
       */
      title: string;

      /**
       * The body of the post.
       */
      body: string;
    }
  }
}
```
