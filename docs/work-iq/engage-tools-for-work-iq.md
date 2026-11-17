---
title: Engage Tools for Work IQ
description: Discover Engage Tools for Work IQ, letting agents search Viva Engage conversations, communities, and people. Learn setup and permission requirements.
ms.date: 11/10/2026
ms.topic: concept-article
author: aditijha4
ms.author: aditijha
---

# Engage Tools for Work IQ (preview)

Engage Tools for Work IQ enable agents to work with Viva Engage conversations, communities, people, campaigns, and events. Agents can find organizational knowledge, review discussions, create or edit posts, and participate in conversations.

> [!NOTE]
> Engage Tools for Work IQ are available in preview.

Work IQ exposes these capabilities through its MCP interface under `/engage`. Agents discover available resource paths and inspect their schemas through Work IQ rather than relying on a fixed catalog of Engage-specific tools.

For more information about this model, see [Work IQ MCP entity model](mcp/entity-model.md).

## Before you begin

Configure access to Work IQ for your organization. For tenant setup requirements, see [Enable Work IQ in your organization](enable-work-iq.md).

## Authentication, identity, and permissions

Engage Tools for Work IQ operate under the signed-in user's identity and existing Viva Engage permissions.

Your application also needs administrator consent for the delegated `WorkIQ.Read` permission for read-only operations or `WorkIQ.Act` for operations that read and change data. For details, see [Work IQ API permissions reference](permissions.md).

Work IQ MCP tenant policies also apply. Mutation operations are blocked by default; an administrator must enable supported write scenarios through tenant policy before agents can create or edit posts or perform other actions that modify data. For details, see [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md).

- **Public and private content:** Agents can retrieve content from public and private Engage communities that the signed-in user can access.
- **Public and private destinations:** Agents can create posts, reply, and perform other supported actions in public or private communities where the signed-in user has the required permissions.
- **Delegated user identity:** Engage operations use the signed-in user's identity and permissions.
- **Application-only access:** Application-only permissions aren't supported. An application identity or service principal alone can't access or act in Engage.

Engage enforces the signed-in user's permissions when accessing content or performing actions. Agents shouldn't assume that access to one resource grants access to another.

## Supported scenarios

| Scenario | What an agent can do |
|---|---|
| Find information | Search relevant content in Viva Engage. |
| Explore communities | Find communities, get recommendations, and read community conversations. |
| Work with conversations | Create a conversation, retrieve a conversation, or edit an eligible message. |
| Participate in discussions | Reply in a thread or react to a message. |
| Catch up on activity | Read the signed-in user's home feed and inbox posts. |
| Explore people and contributions | Read a user profile, posts, storyline activity, and conversations in which a person participated. |
| Work with campaigns | Create a campaign and read campaign conversations. |
| Follow events | Find events, read event posts, and retrieve unanswered event questions. |
| Explore themes | Retrieve trending themes in Engage. |
| Organize conversations | Bookmark, pin, feature, or mute supported conversations, or mute a user where permitted. |

## Use Engage Tools

Discover the available `/engage` resource paths and inspect the schemas of the operations that match the task. Use the discovered parameters and response structures rather than assuming a fixed list of operations.

For more information, see [Work IQ MCP entity model](mcp/entity-model.md).

Use search to find conversations about a topic or keyword. Use community feeds to explore activity in a particular community.

Search and feed responses can contain previews and only a limited number of replies. When more context is needed:

1. Retrieve the relevant conversations.
2. Follow pagination information to obtain more results or replies.
3. Review retrieved content before summarizing or taking an action.
4. Include returned conversation links when the user needs to review sources.

Don't assume that one response is a complete conversation history or an exhaustive set of search results.

## Handle public and private content

Engage results can include conversations from public and private communities. For community conversations, use the returned `scope.community.privacy` field to distinguish public and private sources. Preserve any sensitivity label information returned in `scope.community.sensitivityLabel`.

Other conversation types, such as storyline posts, might not include community privacy metadata.

When an agent combines, summarizes, or publishes information:

- Preserve the distinction between public and private source content, along with any returned sensitivity labels.
- Don't assume that access to private content permits sharing it with a broader audience.
- Confirm the intended destination and audience before creating a post or reply.
- Don't treat permission to read a source as permission to publish to another destination.
- Include source links when appropriate so the user can review the underlying conversations.

## Example: Summarize questions in a community

A user asks:

> *Find conversations about the product launch in the Marketing community and summarize the questions people are asking.*

An agent can:

1. Discover the relevant `/engage` resources and inspect their schemas.
2. Find the Marketing community and retrieve its identifier.
3. Search for product-launch conversations in that community.
4. Retrieve relevant conversations and additional reply pages as needed.
5. Summarize questions from the retrieved content.
6. Include returned conversation links for review.

If the Marketing community is private, Engage returns its content only where the signed-in user has access. The agent shouldn't assume that information from that community can be published to a public destination without appropriate review.
