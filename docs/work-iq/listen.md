---
title: Work IQ Listen developer guide (preview)
description: Learn how to use Work IQ Listen to subscribe to workplace events, receive notifications, and prepare permission-aware outcomes for users.
author: MSFTgraph-sorceress
ms.author: hstoffels
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/13/2026
ai-usage: ai-assisted
---

<!-- cSpell:ignore THVSAAA Priya -->

# Work IQ Listen developer guide (preview)

Work IQ Listen lets third-party agents and apps subscribe to workplace events instead of polling a mailbox or calendar. When a matching event occurs, such as a meeting recap that assigns the user action items or a flagged email that remains unanswered, Listen notifies your agent. The agent then reads the context the user is allowed to see through Work IQ and prepares a private next step, such as a draft reply, a meeting brief, or a task list.

> [!IMPORTANT]
> Work IQ Listen is available in public preview and must be enabled for your tenant. Features, tool names, schemas, and payload fields can change before general availability. Preview features are subject to the applicable preview terms. See the [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context).

Listen is a capability accessed through existing [Work IQ MCP tools](mcp/tool-reference.md), not a separate MCP tool. This preview supports only the Work IQ MCP server with delegated authentication. REST, A2A, and app-only access aren't available.

## How Listen works

Listen uses a *doorbell* model: the notification tells your agent to wake up, but doesn't carry work content or grant access to it. When an event matches a subscription, Listen calls your registered HTTPS endpoint with identifiers and an opaque event reference. Your agent connects to Work IQ, presents the user's delegated token, and fetches the event. Authorization is evaluated when the agent accesses the data, even if the notification arrives days after the subscription was created.

> [!IMPORTANT]
> A notification is a wake-up signal, not content and not consent. Receiving one never grants permission to read data or act on the user's behalf.

| Concept | Purpose |
|---|---|
| Event catalog | Events available to your tenant. Browse it with `fetch`; discovery is the source of truth for event names and paths. |
| Subscription | An interest in an event for one user, with a callback URL. Create it with `create_entity`; the service identifies it with a `registrationId`. |
| Notification | A lightweight request to your callback containing identifiers, an event reference, and a fetch path, not work content. |
| Context fetch | A read through Work IQ with the user's delegated identity that returns only what the user is allowed to see. |
| Your agent | Fetches related context, reasons over it, prepares a private outcome, and requests approval before acting through separately authorized APIs. |

Each subscription belongs to the user whose work the event describes. One person's agent doesn't receive another person's events. In multiperson scenarios, give each participant their own agent and subscriptions.

## Event catalog

The preview catalog contains seven event scenarios. Availability can vary by tenant. Discover the catalog before subscribing; don't hard-code names from this article.

Most scenarios use a base event and a variant. For example, `ResponseOwed` is the base event for a flagged email that remains unanswered.

| Event scenario | What your agent learns | Base event | Variant |
|---|---|---|---|
| Flagged email still unanswered | Someone is waiting on an email the user flagged, and since when. | `ResponseOwed` | `FlaggedEmailAgingWithoutReply` |
| Mention awaiting a response | People mentioned the user in an email, chat, or meeting chat and are still waiting. | `ResponseOwed` | `EmailMentionWithoutEngagement` or `ChatMentionWithoutEngagement` |
| Shared file not reviewed | A colleague who matters to the user shared a file directly with them, but the user hasn't opened it. | `ResponseOwed` | `FileSharedNotReviewed` |
| Upcoming one-on-one meeting | A one-on-one meeting is about to start. | `MeetingUpcoming` | `OneOnOneMeeting` |
| Missed meeting | The user missed a meeting, whether its recap is ready, and which action items they own. | `MeetingMissed` | None |
| Action items assigned to the user | A meeting recap assigned the user one or more action items. | `MeetingRecapReady` | `ActionItemsAssignedToUser` |
| Upcoming meeting with external guests | A small meeting with people outside the organization is coming up. | `MeetingUpcoming` | `MeetingWithExternalInvitees` |

Events aren't immediate. Each event fires after its condition holds for a period of time, such as a wait for a reply or a lead time before a meeting, and only once per condition: once per flagged email, mention, or meeting. To remind the user later, schedule a reminder in your app and recheck the source first.

## Before you begin

| Requirement | Details |
|---|---|
| Work IQ enabled in your Microsoft 365 tenant | See [Enable your tenant for Work IQ](enable-work-iq.md). |
| Listen enabled for your tenant | Listen must be turned on for your tenant during the preview. For questions, [contact the Listen team](#get-help-and-share-feedback). |
| Work IQ MCP server and an MCP client | Your app calls Listen through the Work IQ MCP server. See [Work IQ MCP overview](mcp/overview.md). |
| Microsoft Entra app registration | Use delegated permissions with admin and user consent. App-only access isn't supported. See [Work IQ API permissions reference](permissions.md). |
| HTTPS callback endpoint | Provide a publicly reachable endpoint you control. Listen validates it before delivering notifications. |
| Test users and synthetic data | Events fire from real activity. Plan test accounts, content, and timing in advance. |

### Credit consumption

Listen uses existing Work IQ credit consumption rates. Subscription calls, such as creating a subscription, are subject to the Work IQ Tool API rate. Notifications that wake your agent aren't charged during the preview. Fetching events and related content is charged as standard Work IQ tool calls. Preview pricing can change before general availability.

For general billing guidance, see [Work IQ access and pricing](index.md#access-and-pricing).

### Application components

Build the following components:

- An HTTPS callback receiver that validates, records, and acknowledges notifications quickly.
- A worker that fetches events and related context with the user's delegated identity and prepares a private outcome.
- An approval experience that shows the user the exact action and captures explicit approval before sending, sharing, posting, or scheduling anything.

Use a state store for subscriptions and deduplication. A durable queue between the receiver and worker is recommended so slow fetches and reasoning don't delay acknowledgments.

## Create and use a subscription

The following examples show MCP tool arguments, not complete JSON-RPC requests. Replace placeholders with values returned by discovery and `get_schema`.

### 1. Discover the catalog

Start at the discovery root and follow child paths until `isLeaf` is `true`. Don't construct a path from a display name.

Call `fetch`:

```json
{
  "entityUrls": ["/events/discovery"]
}
```

### 2. Retrieve the creation schema

Request the creation schema for the leaf path returned by discovery. Validate your subscription request against this schema before calling `create_entity`.

Call `get_schema`:

```json
{
  "path": "<leaf path from discovery>",
  "operationType": "create",
  "format": "jsonschema"
}
```

### 3. Create a subscription

Build the body from the schema. It defines the event and variant, how often the subscription fires, and the callback. Use the leaf path returned by discovery as `parentUrl`.

The following `create_entity` arguments are a template, not a complete subscription body. Replace the event and variant placeholder with the fields required by the returned schema. The `contoso.example` hostname is fictional; use your own HTTPS endpoint.

```json
{
  "parentUrl": "<leaf path from discovery>",
  "jsonBody": {
    "<event and variant fields from get_schema>": "...",
    "delivery": {
      "mode": "Webhook",
      "callbackUrl": "https://events.contoso.example/workiq"
    }
  }
}
```

Events can't be filtered on content, such as a subject or message body.

### 4. Validate your callback

The create response returns a `registrationId`, a `resourcePath`, and a `status`. When the status is `pendingWebhookValidation`, Listen sends a validation request containing a challenge to your callback. Delivery starts only after the challenge is answered.

The following validation payload is illustrative and uses synthetic data:

```json
{
  "type": "validation",
  "registrationId": "reg_demo",
  "challenge": "demo_challenge",
  "expiresAt": "2026-11-11T23:45:00Z"
}
```

Answer before the challenge expires. Listen uses its own validation handshake; don't assume that the Microsoft Graph change-notification handshake applies.

> [!IMPORTANT]
> This guide doesn't specify the challenge response format or callback authentication contract. Confirm those details with the [Listen team](#get-help-and-share-feedback) before implementing a production receiver. Don't infer them from the illustrative payload.

### 5. Confirm that the subscription is active

Read the subscription and confirm that its status is `active`. The following `fetch` arguments use a synthetic registration ID; replace it with the ID returned by the service.

```json
{
  "entityUrls": ["/events/subscriptions/reg_demo"]
}
```

Store the registration ID, the user it belongs to, the event, and your callback configuration. A successful create response while validation is pending doesn't mean delivery has started.

### 6. Receive and acknowledge notifications

When a subscription matches, Listen sends a notification to your callback. Handle it in this order:

1. Validate the envelope, which carries the `registrationId`, a `deliveryId`, the event reference, and the fetch path. Reject anything malformed or unfamiliar.
1. Record the `deliveryId` to recognize repeated deliveries.
1. Hand the work to your worker or durable queue.
1. Acknowledge the request.

Don't wait for a model call or a user decision before acknowledging. Recording a delivery ID doesn't replace [deduplicating the event and its business effect](#handle-events-reliably).

### 7. Fetch the permitted context

From your worker, fetch the event with the user's delegated identity. Treat the event reference as opaque and pass it unchanged to the Work IQ event path:

```json
{
  "entityUrls": ["/events/items/{eventReference}"]
}
```

Then read the related items you need, such as the flagged message, shared file, or meeting. The underlying item reflects its current state, which might have changed since the event occurred. A message might have been edited, moved, or deleted. Recheck the source before acting.

### 8. Prepare an outcome and get approval

Prepare a private recap, draft, or brief for the user. Deduplicate on the business effect so you don't prepare or deliver the same outcome twice.

Before any visible write, show the user the acting account, action and channel, recipients or target, subject or event fields, and complete body. Get explicit approval for that exact action. Reading, authorized fetches, and private drafting can happen without this approval; sending, sharing, posting, or scheduling can't.

Re-read the targets and sources immediately before acting. If anything material changes, request approval again. Show a result or receipt, or state that the outcome is blocked or unknown. Don't infer success from a prepared draft or blindly retry an action with an uncertain result.

A ready summary or an assigned action item is evidence of work, not consent to act.

### 9. Stop and clean up

Cancel subscriptions when a pilot ends or a user opts out. Disabling your receiver doesn't cancel a subscription on the service side.

This guide doesn't specify the cancellation operation or schema. Confirm the supported cancellation procedure with the [Listen team](#get-help-and-share-feedback) before starting a pilot that creates subscriptions.

## Event payload reference

Event responses are deliberately small. They identify what happened, whose event it is, why it matters, and the public Microsoft 365 identifiers needed for follow-up reads. Fetch related items under the user's permissions for their titles, subjects, message bodies, links, and times.

### Common fields

| Field | Meaning |
|---|---|
| `eventName` | The base event: `ResponseOwed`, `MeetingUpcoming`, `MeetingMissed`, or `MeetingRecapReady`. Route on this value. |
| Variant flag | A Boolean named for the variant, such as `flaggedEmailAgingWithoutReply`. Route on the flags that are `true`. An upcoming one-on-one meeting with an external guest sets both `oneOnOneMeeting` and `meetingWithExternalInvitees`. `MeetingMissed` needs only `eventName`. |
| `userId` | The user whose event this is. |
| `eventId` | The event identity and part of every deduplication key. For meeting events, it also identifies the meeting to fetch. |

### Event-specific fields

On `ResponseOwed` events, `relationship` indicates why the person matters to the user, such as `DirectManager` or `Top5Collaborator`.

| Event scenario | Additional fields | Follow-up reads |
|---|---|---|
| Flagged email still unanswered | `flaggedMessageId`, `lastInboundUtc`, `relationship`, and `details.senderDetails` (`email`, `displayName`) | Read the flagged message by `flaggedMessageId` for its subject, sender, and thread. |
| Mention awaiting a response | `mentions[]`, with `triggerActorEmail`, `triggerActorDisplayName`, `relationship`, and `sourceItemId` for each person waiting | Read each message by `sourceItemId` for its time, text, chat or thread name, and link. For chat messages, `eventId` is the chat ID needed for the fetch. |
| Shared file not reviewed | `fileId`, `sharerEmail`, `sharerDisplayName`, and `relationship` | Read the file by `fileId` for its name, link, and sharing details. |
| Upcoming one-on-one meeting | `details.organizerDetails` and `details.isOrganizer` | Read the meeting by `eventId` for its title, time, and invitees. If `isOrganizer` is `true`, `organizerDetails` describes the user; identify the other person from the invitees. |
| Missed meeting | `isSummarized`, `ownerActionItems[]` (`id`, `owner`, `action`), and `details.organizerDetails` | Read the meeting and recap by `eventId`. If `isSummarized` is `false`, the recap isn't ready. |
| Action items assigned to the user | `ownerActionItems[]` (`id`, `owner`, `action`) and `details.organizerDetails` | Read the meeting and full recap by `eventId`. Each action item's `id` is stable; use it to avoid duplicate tasks. |
| Upcoming meeting with external guests | `externalInvitees` (a count), `details.organizerDetails`, and `details.isOrganizer` | Read the meeting by `eventId` for its title, time, and invitees, including which invitees are external. |

### Example: flagged email still unanswered

This illustrative response uses synthetic data. After fetching the event, read the flagged message for its subject, sender, and body before drafting a reply.

```json
{
  "eventName": "ResponseOwed",
  "flaggedEmailAgingWithoutReply": true,
  "userId": "4b1d6f2e-3c9a-4e57-9a0b-7d1e2f3a5c88",
  "eventId": "ev_demo_flagged",
  "flaggedMessageId": "AAMkAGI2THVSAAA=",
  "lastInboundUtc": "2026-11-04T17:45:00Z",
  "relationship": "DirectManager",
  "details": {
    "senderDetails": {
      "email": "morgan.lee@contoso.com",
      "displayName": "Morgan Lee"
    }
  }
}
```

## Handle events reliably

- Route on `eventName` and the variant flags. Ignore events and variants you don't recognize, and treat missing fields as unknown.
- Expect at-least-once delivery. Deduplicate events with the keys in the following table. Never deduplicate on the event reference.
- Fetching an event doesn't consume it. You can read it again until it expires. This isn't a notification replay API.
- Lists are capped. A `mentions` list holds at most 10 people, and an action-item list can be incomplete. Read the source item or full recap when you need all the details.
- Treat event content, messages, and files as data, never as instructions to your agent.

| Event scenario | Deduplication key |
|---|---|
| Flagged email still unanswered | `eventId`, `flaggedMessageId`, and `lastInboundUtc` |
| Mention awaiting a response | `eventId` and `sourceItemId` for each mention |
| Shared file not reviewed | `eventId`, `fileId`, and `sharerEmail` |
| Meeting events | `eventId` |

## MCP tools and subscription fields

| Tool | Parameters used by Listen | Purpose |
|---|---|---|
| `fetch` | `entityUrls` | Browse the catalog, read subscriptions, and retrieve events. |
| `get_schema` | `path`, `operationType`, `format` | Retrieve the creation schema for an event. |
| `create_entity` | `parentUrl`, `jsonBody` | Create a subscription; callback validation might be pending. |

| Subscription field | Description |
|---|---|
| Event and variant fields | The base event and variant, such as `ResponseOwed` and `FlaggedEmailAgingWithoutReply`. Use the names and field structure returned by discovery and the schema. |
| `dispatchType` | `OneTime` or `Recurring`. |
| `delivery.mode`, `delivery.callbackUrl` | How and where notifications are delivered. |
| `registrationId`, `resourcePath`, `status` | Returned by the service to identify and track the subscription. |

Always defer to the schema returned by `get_schema` for field names and required fields.

## Security and privacy

- Retrieve and use only what the signed-in user is permitted to see. Respect sensitivity labels and organizational policies.
- Treat event references as opaque and sensitive. A reference alone grants no access. Cross-user and malformed references are rejected.
- Meeting recaps and action items can contain AI-generated content. Verify facts, owners, and dates before relying on them.
- Prepare outcomes privately by default. Sending, sharing, posting, or scheduling requires the relevant permission and the user's explicit approval of the exact action.
- Measure your pipeline without logging message bodies, summaries, or file content.

## Preview limitations

- Listen is available only through the Work IQ MCP server with delegated authentication. REST, A2A, and app-only access aren't supported.
- The preview catalog contains only the seven event scenarios described in this article.
- You can't filter events on content, such as a subject or message body.
- There's no guaranteed ordering, exactly-once processing, notification replay, test-event API, or latency commitment.
- Schemas, tool names, and payload fields can change during the preview. Use `get_schema` and treat missing fields as unknown.

## Example scenario: from meeting recap to customer preparation

The following synthetic scenario follows a discounted quote from an assigned action item to a customer meeting. Alex is an account executive, Jordan works in Finance, Priya is a buyer at Fabrikam, and Raj runs the initial meeting.

| Moment | Agent notified | Listen event | Private outcome |
|---|---|---|---|
| Raj's meeting recap assigns Alex two items: get Finance sign-off on a 12% discount by Friday, and send Priya an updated quote. | Alex's agent | `MeetingRecapReady` with `ActionItemsAssignedToUser` | Fetches the meeting, recap, action items, customer deadline, and current quote terms; offers to create tasks and follow-ups. |
| Alex shares the discount request with Jordan, who doesn't open it. | Jordan's agent | `ResponseOwed` with `FileSharedNotReviewed` | Fetches the file, proposed discount, payment terms, and customer deadline; prepares the decision requested. |
| Alex's one-on-one meeting with Priya is about to start. | Alex's agent | `MeetingUpcoming` with both `OneOnOneMeeting` and `MeetingWithExternalInvitees` | Prepares a brief with Finance's decision, corrected quote terms, buyer's deadline, and what is safe to share with an external guest. |

Each person's agent fetches only what that person can access and waits for approval before taking a visible action. Because events fire only after their conditions hold, stage each condition in advance for a demo.

### Design principles for proactive agents

| Do | Avoid |
|---|---|
| Explain that Listen woke your agent and that the agent then read context the user can access. | Implying that the notification contained the answer. |
| Prepare outcomes privately and ask the user to approve the exact action. | Letting the agent send, approve, or decide on its own. |
| Re-read targets and sources immediately before acting, and request approval again if anything material changed. | Acting on a notification or an earlier approval alone. |
| Show a result or receipt, or state plainly that the outcome is blocked or unknown. | Inferring success from a prepared draft or blindly retrying an uncertain action. |

## Test your scenarios

The preview doesn't include a replay, force-fire, or test-event API. Test with real activity in a test tenant using synthetic data. For example:

- Flag a message and don't answer it.
- Mention a test user who doesn't reply.
- Share a file that the test user doesn't open.
- Schedule a one-on-one meeting or a meeting with an external guest.
- Hold a meeting whose recap assigns the test user an action item.

Some events fire only after a condition holds for hours or days. Plan your test schedule accordingly.

Before a pilot review or demo, confirm that:

- Discovery exposes every event and variant you use, and each test user's subscription is active.
- The receiving user can open each source item, with sensitivity labels and permissions tested.
- Every live action has a prepared payload, a human approver, and a fallback for blocked or unknown outcomes.
- Recordings hide tenant secrets, real customer or employee data, and unrelated notifications.

## Troubleshooting

| Symptom | Check first |
|---|---|
| An event is missing from the catalog | Confirm that Listen is enabled for your tenant, and then browse discovery again from the root. |
| The create body is rejected | Validate the body against `get_schema`; check field names and required fields. |
| The subscription stays pending | Confirm that the HTTPS callback is reachable and answers validation correctly. |
| The subscription is active but no notifications arrive | Check that the condition has had time to occur and that the receiver is reachable. |
| Fetch is denied | Verify the delegated caller, home tenant, and consent. |
| The event or item can't be found | The event might have expired or the item might have changed. Recheck its current state. |

## Get help and share feedback

Send questions, blockers, and feedback to [Work IQ Listen Developer Support](mailto:wiqlisten-support@microsoft.com). The alias reaches the product managers and engineers who build Listen.

Name the area in the subject line: subscriptions and MCP tools, events and fetch, reading Microsoft 365 items, or scenarios. If your scenario needs an event that isn't in the catalog, describe what you're building and which moment should notify your agent.

| Include | Don't include |
|---|---|
| Environment, event, and expected behavior | Access tokens, client secrets, or callback secrets |
| Operation and UTC time range | Raw event references or validation challenges |
| Last subscription state and impact | Full summaries, message bodies, or file contents |
| Correlation IDs and a minimal sanitized reproduction | Customer data or unnecessary personal data |

## Related content

- [Work IQ overview](index.md)
- [Work IQ API overview](api-overview.md)
- [Enable your tenant for Work IQ](enable-work-iq.md)
- [Work IQ MCP overview](mcp/overview.md)
- [Work IQ CLI](cli.md)
