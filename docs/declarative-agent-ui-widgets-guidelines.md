---
title: User experience guidelines for interactive UI widgets in declarative agents
description: Learn how to build UI widgets that look and feel native to Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 02/15/2026
ms.topic: how-to
---

# User experience guidelines for interactive UI widgets in declarative agents (preview)

This guide provides user experience (UX) guidance for developers building MCP-based UI experiences in Copilot. It covers patterns for creating native, coherent, and task-focused interactions that integrate smoothly into the conversational flow in Copilot.

---

## UX principles

Building a great Copilot Agent with the MCP based rich UI means delivering a focused, conversational experience that feels native to Copilot. Copilot Agents should feel like helpful extensions of the conversation surfacing the right action at the right time rather than full applications rebuilt inside Copilot.

:::row:::
  :::column:::
    :::image type="icon" source="assets/images/declarative-agents/widget-ux-guidelines/icon-conversation-bubble.png":::

    ### Deliver conversational value

    - Agent should provide greater value inside Copilot than as a standalone UI.
    - Leverage natural language, thread context, and multi-turn interaction to enable workflows that would be difficult or inefficient in a traditional navigation model.
    - Design experiences that take advantage of conversation, not replicate existing flows.
  :::column-end:::
  :::column:::
    :::image type="icon" source="assets/images/declarative-agents/widget-ux-guidelines/icon-prohibited.png":::

    ### Extract capabilities, don't replicate interfaces

    Avoid porting your full application experience into Copilot. Instead, identify high-value, atomic capabilities that can be exposed as tools. Each capability should:

    - Require only the minimum necessary inputs
    - Return structured, reliable outputs
    - Enable model to confidently determine the next step
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    :::image type="icon" source="assets/images/declarative-agents/widget-ux-guidelines/icon-copilot.png":::

    ### Design to feel native to Copilot

    - Leverage Copilot’s design system, components, and interaction patterns to ensure a seamless, predictable experience.
    - Consistency reduces cognitive load, increases predictability, and minimizes the need for users to learn new interaction models.
  :::column-end:::
  :::column:::
    :::image type="icon" source="assets/images/declarative-agents/widget-ux-guidelines/icon-shield.png":::

    ### Preserve human control

    Trust is foundational to enterprise adoption. Users must remain the ultimate decision-makers, particularly when actions affect enterprise data. Provide:

    - Clear visibility into agent actions
    - Explicit confirmations for sensitive operations
    - Transparent outcomes of what was created, modified, or updated
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    :::image type="icon" source="assets/images/declarative-agents/widget-ux-guidelines/icon-chart-increasing.png":::

    ### Scale density with intent

    Adapt the visual footprint of your UI to the user’s immediate need.

    - Use the inline widget for glanceable summaries and high-level actions.
    - Use the expanded view for tasks where the user needs a larger real estate to work alongside the chat.
  :::column-end:::
  :::column:::
  :::column-end:::
:::row-end:::

---

## Chat surfaces

Chat surfaces are the primary way users interact with agents built using the Copilot Apps SDK, defining how an app appears and behaves within the Copilot conversation.

When designing for Copilot, follow these core principles:

- **Conversation-first:** The chat remains the primary interaction model.
- **Progressive complexity:** Start lightweight. Expand only when needed.
- **Context preservation:** Users should not lose conversational context.
- **Clarity over duplication:** App UI and model text should complement each other - not repeat content.

Copilot currently supports two primary chat surfaces. Each surface serves a distinct purpose and should be chosen based on the complexity and depth of the interaction.

- All apps must support **inline mode**, where inline widgets appear before the generated model response.
- **Side‑by‑side mode** is an optional surface that can be used when richer interactions are needed.

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/chat-surfaces.png" alt-text="An image comparing inline mode with side-by-side mode in Copilot chat" border="false":::

---

### Inline mode

Inline mode is the default, in‑conversation chat surface in Copilot. Inline is not a mini-application. It enhances conversation, it does not replace it.

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-examples.png" alt-text="Examples of widgets in inline mode" border="false":::

#### When to use inline mode

Inline is recommended for:

- Previews (documents, images, drafts)
- Confirmations
- Simple actions
- Quick decision prompts

Inline experiences should remain concise and ideally fit within a single scroll of the response.

---

#### Inline mode layout

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-layout.png" alt-text="Inline mode layout in Copilot chat" border="false":::

- **Agent header:** Identifies the responding agent and establishes context.
- **Inline widget:** Used to display structured content, previews, or action controls.
- **Model response:** A short, model-generated message shown after the widget to suggests edits, next steps and related actions.

---

#### Inline widget

Inline widgets appear directly within the chat flow, allowing users to view information and take action without leaving the conversation. They provide quick confirmations, simple actions, or visual aids.

:::row:::
    :::column:::
        :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-widget-layout.png" alt-text="Widget layout inside Copilot chat" border="false":::
    :::column-end:::
    :::column:::
        ##### Layout

        - **Title:** Include a title if your card is document-based or contains items with a parent element
        - **Expand to side by side view:** Use to open a side by side mode if the card contains rich media or interactivity.
        - **Actions:** Limit to two actions, placed at bottom of card. Actions should perform either a conversation turn or a tool call.
    :::column-end:::
:::row-end:::

##### Interaction guidelines

- **Keep interaction focused:** Avoid multi-step flows, nested navigation, or deep configuration. If the task requires iteration, comparison, or extensive editing, move to Side-by-Side.
- **Show summaries, not systems:** Inline displays previews, not full applications. Avoid internal scrolling, pagination, tabs, filters, or multi-level grouping.
- **Make state explicit:** Inline interactions must provide clear system feedback like loading state, disabled state, success confirmation, error state with recovery option. Never rely on model text alone to communicate system status.
- **Preserve conversational flow:** A widget should fit comfortably within a single response scroll. It should avoid dominating the viewport. It should complement the model response, not compete with it.
