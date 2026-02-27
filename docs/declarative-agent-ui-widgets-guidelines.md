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

## UX principles

Building a great Copilot Agent with the MCP based rich UI means delivering a focused, conversational experience that feels native to Copilot. Copilot Agents should feel like helpful extensions of the conversation surfacing the right action at the right time rather than full applications rebuilt inside Copilot.

:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/conversation-bubble.png" alt-text="Conversation bubble":::

    ### Deliver conversational value

    - Agent should provide greater value inside Copilot than as a standalone UI.
    - Leverage natural language, thread context, and multi-turn interaction to enable workflows that would be difficult or inefficient in a traditional navigation model.
    - Design experiences that take advantage of conversation, not replicate existing flows.
  :::column-end:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/prohibited.png" alt-text="Prohibited":::

    ### Extract capabilities, don't replicate interfaces

    Avoid porting your full application experience into Copilot. Instead, identify high-value, atomic capabilities that can be exposed as tools. Each capability should:

    - Require only the minimum necessary inputs
    - Return structured, reliable outputs
    - Enable model to confidently determine the next step
  :::column-end:::
:::row-end:::

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

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/chat-surfaces.png" alt-text="An image comparing inline mode with side-by-side mode in Copilot chat":::
