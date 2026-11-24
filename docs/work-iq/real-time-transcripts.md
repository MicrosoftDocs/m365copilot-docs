---
title: Work IQ real-time transcripts developer guide (preview)
description: Learn how to use the Work IQ MCP server to subscribe to a live Microsoft Teams meeting or call and receive its transcript as a stream while the meeting is in progress.
author: hrazi
ms.author: harazi
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/14/2026
ai-usage: ai-assisted
---

<!-- cSpell:ignore Wilber hrazi harazi orgid -->

# Work IQ real-time transcripts developer guide (preview)

Work IQ real-time transcripts let your agent or app receive the transcript of a Microsoft Teams meeting or call **while it's in progress**. You subscribe to a live meeting through the [Work IQ MCP server](mcp/overview.md), and Work IQ streams each caption segment (speaker, text, language, and capture time) to your app as it's produced. You can also retrieve recently recorded segments on demand to catch up or fill a gap.

Use real-time transcripts to build experiences such as:

- A meeting copilot that answers questions or tracks action items during the meeting.
- A late-joiner catch-up that summarizes what was said before someone joined.
- An incident-bridge assistant that keeps a running summary of a major-incident call.

> [!IMPORTANT]
> Work IQ real-time transcripts are available in public preview. Features, schemas, and payload fields can change before general availability. Preview features are subject to the applicable preview terms. See the [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context).

Real-time transcripts complement the [Microsoft Graph meeting transcript APIs](/graph/api/resources/calltranscript), which return the transcript **after** the meeting ends.

## How it works

1. Your app signs in the user and gets a delegated Work IQ access token.
1. Your app connects to the Work IQ MCP server.
1. Your app identifies the meeting to capture, either from the user's calendar or from a Microsoft Graph call-events notification.
1. Your app subscribes to the meeting transcript by calling the `create_entity` tool. Work IQ returns a subscription ID and a stream URL.
1. Your app opens the stream URL and receives transcript segments as server-sent events (SSE).
1. Optionally, your app calls the `getArtifacts` action to retrieve segments recorded in the last few minutes.
1. When it's done, your app unsubscribes by calling the `delete_entity` tool.

## Prerequisites

Before you start, ensure you have the following requirements.

### Tenant requirements

| Requirement | Who | Details |
| --- | --- | --- |
| Work IQ is enabled for the tenant | Tenant admin | See [Enable your tenant for Work IQ](enable-work-iq.md). |
| **Work IQ access** to real-time transcripts is on | Teams admin | Off by default. In the Teams admin center, go to **Meetings** > **Meeting settings** > **Transcript API access** and turn on **WorkIQ access**, or run `Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global`. See [Manage Work IQ access to real-time transcripts](/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts). |
| **Allow AI in all meetings** is on | Teams admin | If AI isn't allowed in the meeting, no transcript is available. |
| Work IQ MCP policy allows the subscription operations | Tenant admin | Subscribing, retrieving segments, and unsubscribing use the `create_entity`, `do_action`, and `delete_entity` tools. See [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md). |

> [!IMPORTANT]
> The **WorkIQ access** setting takes effect on November 14, 2026. If apps in your organization already receive real-time transcripts through Work IQ, turn the setting on before that date to keep them working.

The setting that applies is the one in the **organizer's** organization, not the organization of your app or of the signed-in user.

### App registration

Register an application in Microsoft Entra ID that your users sign in to:

1. [Register an application](/entra/identity-platform/quickstart-register-app). For a desktop or CLI app, add a public client redirect URI of `http://localhost`. For a web app, use a confidential client with your app's redirect URI.
1. Add the **Work IQ** delegated permission `WorkIQAgent.Ask`. For details, see [Work IQ API permissions reference](permissions.md).
1. Grant admin consent for the permission.

This single app is all you need to capture **scheduled meetings** from the signed-in user's calendar. To capture **ad hoc group calls and 1:1 calls**, you also need a call-events subscription.

### Meeting requirements

An app receives a real-time transcript only when:

- The meeting or call is live.
- **Transcription is running.** Work IQ doesn't start transcription. In Teams, select **More** > **Record and transcribe** > **Start transcription**. Starting a recording also starts transcription.
- The app acts on behalf of a signed-in user who **has joined the meeting**. Being invited isn't enough; the user must be in the meeting or call while your app receives the transcript.

## Step 1: Connect to the Work IQ MCP server

Acquire a delegated access token with MSAL or any OAuth 2.0 library:

| Field | Value |
| --- | --- |
| Authority | `https://login.microsoftonline.com/{tenant-id}` |
| Client ID | Your app's client ID |
| Scope | `api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask` |

The Work IQ MCP server is a streamable HTTP MCP server at `https://workiq.svc.cloud.microsoft/mcp`. Send these headers on every request:

| Header | Value |
| --- | --- |
| `Authorization` | `Bearer {access-token}` |
| `Content-Type` | `application/json` |
| `Accept` | `application/json, text/event-stream` |
| `MCP-Protocol-Version` | `2025-06-18` |
| `Mcp-Session-Id` | The value the server returns in response to `initialize` |

Start the session with `initialize`, then send `notifications/initialized`:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": {},
    "clientInfo": { "name": "contoso-meeting-assistant", "version": "1.0.0" }
  }
}
```

```json
{ "jsonrpc": "2.0", "method": "notifications/initialized" }
```

> [!TIP]
> If you use an MCP client SDK, it handles the handshake, session header, and response parsing for you. A response can arrive as a single JSON body or as a one-shot `text/event-stream` with the JSON-RPC reply in its `data:` lines.

## Step 2: Find the meeting

For a scheduled Teams meeting, get its **meeting ID** and **passcode** from the signed-in user's calendar by using the `fetch` tool:

```json
{
  "method": "tools/call",
  "params": {
    "name": "fetch",
    "arguments": {
      "entityUrls": [ "/me/events?$select=subject,onlineMeeting,body,start,end&$top=10" ]
    }
  }
}
```

Read the meeting ID and passcode from the event's `onlineMeeting.joinUrl`. In a join URL such as `https://teams.microsoft.com/meet/264556145032712?p=Em3VJ7sB`, the numeric path segment is the meeting ID and the `p` query parameter is the passcode. You can also read them from the **Meeting ID** and **Passcode** lines in the event `body`.

## Step 3: Subscribe to the transcript

Call `create_entity` on the subscriptions collection:

```json
{
  "method": "tools/call",
  "params": {
    "name": "create_entity",
    "arguments": {
      "parentUrl": "/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions",
      "jsonBody": {
        "@odata.type": "#microsoft.graph.multiActivitySubscription",
        "userId": "{signed-in-user-object-id}",
        "meetingInfo": {
          "@odata.type": "#microsoft.graph.joinMeetingIdMeetingInfo",
          "joinMeetingId": "264556145032712",
          "passcode": "Em3VJ7sB"
        },
        "activities": {
          "transcript": { "@odata.type": "#microsoft.graph.transcriptActivity" }
        }
      }
    }
  }
}
```

| Property | Required | Description |
| --- | --- | --- |
| `@odata.type` | Yes | Always `#microsoft.graph.multiActivitySubscription`. |
| `userId` | Yes | The object ID of the signed-in user. It must match the `oid` claim in the access token. |
| `meetingInfo` | Yes | Identifies the meeting. Use exactly one of the variants in [Ways to identify the meeting](#ways-to-identify-the-meeting). |
| `activities` | Yes | The activities to subscribe to. Set `transcript` to `{ "@odata.type": "#microsoft.graph.transcriptActivity" }`. |
| `chatInfo` | Only with `organizerMeetingInfo` | The meeting chat thread. |

The tool returns the subscription:

```json
{
  "statusCode": 201,
  "data": {
    "id": "0100...",
    "userId": "{signed-in-user-object-id}",
    "activities": {
      "transcript": {
        "status": "running",
        "transport": { "url": "/mcp/streams?t={opaque-token}" }
      }
    }
  }
}
```

Save `data.id`. You need it to retrieve segments and to unsubscribe.

## Step 4: Read the transcript stream

`activities.transcript.transport.url` is a relative URL. Append it to `https://workiq.svc.cloud.microsoft` and open it **promptly**; the URL expires about five minutes after you subscribe.

```http
GET https://workiq.svc.cloud.microsoft/mcp/streams?t={opaque-token}
Authorization: Bearer {access-token}
Accept: text/event-stream
MCP-Protocol-Version: 2025-06-18
```

The response is a server-sent events stream:

```text
event: status
data: {"state":"connected"}

event: segment
data: {"kind":"LiveCaptionDataV2","liveCaptionDataV2":{"activityType":"transcript","transcriptData":{"audioCaptureTime":"2026-11-11T19:31:15.123Z","speaker":{"user":{"rawId":"8:orgid:{object-id}","displayName":"Alex Wilber"},"room":{"rawId":null}},"text":"Shall we start with the roadmap?","spokenLanguage":"en-us"}}}

event: terminated
data: {"reason":"stream_ended"}
```

| Event | Description |
| --- | --- |
| `status` | The stream is connected. |
| `segment` | One transcript segment. Read `liveCaptionDataV2.transcriptData`. |
| `terminated` | The transcript feed ended, for example because the meeting ended. |
| `error` | The stream failed. The `data` contains a `code`. |

Lines that begin with `:` are keep-alive heartbeats; ignore them.

Each segment's `transcriptData` contains:

| Property | Description |
| --- | --- |
| `audioCaptureTime` | When the audio was captured, in ISO 8601 format with millisecond precision. |
| `speaker.user.displayName` | The speaker's display name. For a Teams Rooms device, `speaker.room.rawId` identifies the room. |
| `speaker.user.rawId` | The speaker's Teams identifier. |
| `text` | The transcribed text. |
| `spokenLanguage` | The spoken language, for example `en-us`. |

Real-time transcripts include speaker names. The Teams **Include speaker attribution** setting applies only to Microsoft Graph and doesn't affect Work IQ.

> [!IMPORTANT]
> The stream URL is single-use and the stream doesn't replay. If the connection drops, subscribe again to get a new stream URL. The new stream starts from the current point in the meeting, so use [getArtifacts](#step-5-optional-retrieve-recent-segments) to fill the gap.

## Step 5 (optional): Retrieve recent segments

Use the `getArtifacts` action to retrieve segments recorded around a point in time, for example to catch up a user who joined late or to fill a gap after a dropped stream.

```json
{
  "method": "tools/call",
  "params": {
    "name": "do_action",
    "arguments": {
      "actionUrl": "/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{subscription-id}/microsoft.graph.getArtifacts",
      "jsonBody": {
        "artifactTypes": [ "Transcript" ],
        "seedDateTime": "2026-11-11T19:30:00Z",
        "rangeInSec": 300,
        "userId": "{signed-in-user-object-id}",
        "maxResults": 50
      }
    }
  }
}
```

| Property | Required | Description |
| --- | --- | --- |
| `artifactTypes` | Yes | `["Transcript"]`. |
| `seedDateTime` | Yes | The anchor time, in ISO 8601 format. |
| `rangeInSec` | Yes | The window around the seed time, in seconds. Maximum 300. |
| `userId` | Yes | The object ID of the signed-in user. |
| `maxResults` | No | The maximum number of segments per page. |

The response contains a `payloads` array of segments and, if there are more, a `nextLink`:

```json
{
  "payloads": [
    {
      "audioCaptureDateTime": "2026-11-11T19:30:12Z",
      "speaker": { "user": { "rawId": "8:orgid:{object-id}", "displayName": "Alex Wilber" } },
      "text": "The number I mentioned was forty.",
      "spokenLanguage": "en-us"
    }
  ],
  "nextLink": "{opaque-token}"
}
```

To get the next page, call the action again with the same body and append `?skipToken={nextLink}` to `actionUrl`, using the entire URL-encoded `nextLink` value. Treat `nextLink` as opaque.

`getArtifacts` works only **during** the meeting. After the meeting ends, it stops returning segments.

### Deduplicate live and retrieved segments

Retrieved segments use `audioCaptureDateTime` with second precision; live segments use `audioCaptureTime` with millisecond precision. To merge them, compare the first 19 characters of the timestamp (`YYYY-MM-DDTHH:MM:SS`) together with the speaker and text.

## Step 6: Unsubscribe

When you no longer need the transcript, delete the subscription:

```json
{
  "method": "tools/call",
  "params": {
    "name": "delete_entity",
    "arguments": {
      "entityUrl": "/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{subscription-id}"
    }
  }
}
```

A `204` status code means the subscription was deleted. A `404` means the subscription already ended, for example when the meeting ended; you can ignore it.

## Ways to identify the meeting

The `meetingInfo` property supports three variants. Use exactly one.

| Call type | Meeting ID and passcode | Call conversation ID | Organizer and chat thread |
| --- | :---: | :---: | :---: |
| Scheduled meeting | ✔️ | ✔️ | ✔️ |
| Group call | | ✔️ | |
| 1:1 call | | ✔️ | |

### Meeting ID and passcode

Use for scheduled meetings. You can get both from the user's calendar, as shown in [Step 2](#step-2-find-the-meeting).

```json
"meetingInfo": {
  "@odata.type": "#microsoft.graph.joinMeetingIdMeetingInfo",
  "joinMeetingId": "264556145032712",
  "passcode": "Em3VJ7sB"
}
```

### Call conversation ID

Works for every call type, and is the only option for ad hoc group calls and 1:1 calls. The `callConversationId` is available only from a call-events notification. Pass it unchanged as `joinUrl`.

```json
"meetingInfo": {
  "@odata.type": "#microsoft.graph.joinUrlMeetingInfo",
  "joinUrl": "{callConversationId}"
}
```

### Organizer and chat thread

Use for scheduled meetings when you have the organizer and the meeting chat thread ID from a call-events notification. `chatInfo` is a top-level property of the subscription, not part of `meetingInfo`.

```json
"meetingInfo": {
  "@odata.type": "#microsoft.graph.organizerMeetingInfo",
  "organizer": {
    "@odata.type": "#microsoft.graph.identitySet",
    "user": {
      "@odata.type": "#microsoft.graph.identity",
      "id": "{organizer-object-id}",
      "tenantId": "{organizer-tenant-id}"
    }
  }
},
"chatInfo": {
  "@odata.type": "#microsoft.graph.chatInfo",
  "threadId": "19:meeting_{id}@thread.v2",
  "messageId": "0"
}
```

## Errors

When a tool call fails, the result has `isError: true` and an error object:

```json
{
  "code": "backend_unavailable",
  "message": "The meeting may not be live yet, or has no active transcript feed — start the meeting and try again.",
  "retryable": true,
  "correlationId": "{guid}",
  "requestId": "{guid}",
  "upstream": "9001",
  "category": "unavailable"
}
```

| `upstream` | Cause | What to do |
| --- | --- | --- |
| `9001` | The meeting isn't live, or transcription isn't running. | Make sure the meeting is live, the signed-in user has joined it, and transcription is on, then retry after a few seconds. |
| `8501` | The meeting wasn't found, or the meeting ID or passcode is wrong. | Check the meeting ID and passcode, and that the meeting is live. |

If the organizer's organization turns off **WorkIQ access**, or AI isn't allowed in the meeting, the request is denied. Ask the organizer's Teams admin to review the **Transcript API access** settings.

If you contact support, include the `correlationId` and `requestId`.

## Limitations

- **Latency.** Segments typically arrive 15 seconds to one minute after they're spoken, sometimes longer. `getArtifacts` has the same latency.
- **No replay.** You can't reopen a dropped stream. Subscribe again and use `getArtifacts` to fill the gap.
- **During the meeting only.** `getArtifacts` returns segments only while the meeting is in progress, for windows of up to 300 seconds around the seed time. To keep a transcript after the meeting, store the segments your app receives, subject to your organization's compliance requirements, or use the [Microsoft Graph transcript APIs](/graph/api/resources/calltranscript).
- **Delegated access only.** Your app acts on behalf of a signed-in user who joined the meeting. Unattended, app-only capture isn't supported.
- **Setting changes aren't immediate.** After an admin changes **WorkIQ access**, it can take some time to apply to new requests. Turning it off doesn't stop transcripts already in progress.

## Related content

- [Work IQ MCP overview](mcp/overview.md)
- [Work IQ MCP tool reference](mcp/tool-reference.md)
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
- [Enable your tenant for Work IQ](enable-work-iq.md)
- [Manage transcript API access for Teams meetings](/microsoftteams/meeting-transcript-api-access)
- [Microsoft Graph meeting transcripts](/graph/api/resources/calltranscript)
