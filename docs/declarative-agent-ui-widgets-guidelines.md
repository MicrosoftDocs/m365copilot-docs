---
title: User experience guidelines for interactive UI widgets in declarative agents
description: Learn how to build UI widgets that look and feel native to Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 03/06/2026
ms.topic: article
---

<!-- markdownlint-disable MD024 -->

# User experience guidelines for interactive UI widgets in declarative agents

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

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-examples.png" lightbox="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-examples.png" alt-text="Examples of widgets in inline mode" border="false":::

#### When to use inline mode

Inline is recommended for:

- Previews (documents, images, drafts)
- Confirmations
- Simple actions
- Quick decision prompts

Inline experiences should remain concise and ideally fit within a single scroll of the response.

---

#### Inline mode layout

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-layout.png" lightbox="assets/images/declarative-agents/widget-ux-guidelines/inline-mode-layout.png" alt-text="Inline mode layout in Copilot chat" border="false":::

- **Agent header:** Identifies the responding agent and establishes context.
- **Inline widget:** Used to display structured content, previews, or action controls.
- **Model response:** A short, model-generated message shown after the widget to suggests edits, next steps and related actions.

---

#### Inline widget

Inline widgets appear directly within the chat flow, allowing users to view information and take action without leaving the conversation. They provide quick confirmations, simple actions, or visual aids.

:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/inline-widget-layout.png" lightbox="assets/images/declarative-agents/widget-ux-guidelines/inline-widget-layout.png" alt-text="Widget layout inside Copilot chat" border="false":::
  :::column-end:::
  :::column:::
    - **Title:** Include a title if your card is document-based or contains items with a parent element
    - **Expand to side-by-side view:** Use to open a side-by-side mode if the card contains rich media or interactivity.
    - **Actions:** Limit to two actions, placed at bottom of card. Actions should perform either a conversation turn or a tool call.
  :::column-end:::
:::row-end:::

##### Interaction guidelines

- **Keep interaction focused:** Avoid multi-step flows, nested navigation, or deep configuration. If the task requires iteration, comparison, or extensive editing, move to Side-by-Side.
- **Show summaries, not systems:** Inline displays previews, not full applications. Avoid internal scrolling, pagination, tabs, filters, or multi-level grouping.
- **Make state explicit:** Inline interactions must provide clear system feedback like loading state, disabled state, success confirmation, error state with recovery option. Never rely on model text alone to communicate system status.
- **Preserve conversational flow:** A widget should fit comfortably within a single response scroll. It should avoid dominating the viewport. It should complement the model response, not compete with it.

### Side-by-side mode (optional)

Side-by-side mode provides an expanded, immersive workspace that appears alongside the conversation. It is designed for richer workflows that cannot be effectively delivered within the inline surface. Unlike inline mode, which is optimized for lightweight interactions, side-by-side mode creates a dedicated workspace for deeper engagement, while preserving conversational context.

Side-by-side mode is optional and should be used intentionally.

#### When to use side-by-side mode

Use side-by-side mode when the experience requires:

- Multi-step editing or configuration
- Iterative workflows with persistent state
- Complex visual layouts (tables, canvases, dashboards)
- Extended review or comparison tasks
- Rich authoring (document drafting, design editing, structured inputs)
- Workspace-level interaction beyond a single scroll
- If the task can be completed in a concise, single-turn interaction, use inline mode instead.

---

#### Side-by-side layout

:::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/side-by-side-layout.png" lightbox="assets/images/declarative-agents/widget-ux-guidelines/side-by-side-layout.png" alt-text="Side-by-side layout in Copilot chat" border="false":::

- **Conversation pane:** The Copilot chat that remains the primary source of intent and control.
- **Chiclet card:** When side-by-side mode is active, the original inline widget collapses into a compact card in the conversation, preserving context with the expanded workspace.
- **Side-by-side panel header:** Displays the agent identity (icon and name) and includes a handoff option to the full application.
- **App workspace:** Larger MCP-rendered surface for editing, reviewing, or managing structured content. This is a contextual workspace within Copilot, not a standalone application shell.
- **Contextual controls:** Task-specific controls within the workspace (for example: edit tools, formatting, zoom, export).

##### Interaction guidelines

- **Keep workspace contextual:** Side-by-side mode provides a focused, task-specific workspace - not a full application shell. Avoid global navigation, multi-tab systems, settings panels, or unrelated features. If the experience resembles your entire SaaS product, it exceeds scope.
- **Preserve chat as primary:** The conversation remains the source of intent and control. Users must be able to continue chatting while Side-by-side mode is open, ask clarifying questions mid-task and see Copilot reasoning alongside their workspace.
- **Scope to the active task:** Side-by-side mode should support a single coherent workflow. Avoid switching between unrelated entities and launching nested experiences. If multiple workflows are needed, split into separate surfaces or actions.
- **Make state explicit:** Inline interactions must provide clear system feedback like loading state, disabled state, success confirmation, error state with recovery option. Never rely on model text alone to communicate system status.
- **Maintain progressive escalation:** Side-by-side mode should be entered intentionally. Do not default to side-by-side for simple previews or quick confirmations.

---

## Best practices

:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/preserve-conversational-flow.png" alt-text="A screenshot of a widget with a Download button" border="false":::
  :::column-end:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/use-fluent-components.png" alt-text="A screenshot of FluentUI components in a widget" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    ### :white_check_mark: Preserve conversational flow

    Keep inline widgets lightweight and action-oriented. Support up to two primary actions (e.g., Approve, Edit, Download). If the task requires deep navigation, multi-step workflows, or heavy configuration, hand off to side-by-side mode.
  :::column-end:::
  :::column:::
    ### :white_check_mark: Use Fluent components for native fit

    Inline experiences should feel like a natural extension of Copilot. Use Copilot-aligned [Fluent 2](https://fluent2.microsoft.design/) components, spacing, typography, and tokens to ensure visual and interaction consistency.
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/avoid-scroll-heavy.png" alt-text="A screenshot of a widget with a large scroll bar" border="false":::
  :::column-end:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/no-duplicate-features.png" alt-text="A screenshot of a widget with a natural language prompt" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    ### :x: Avoid large, scroll-heavy layouts

    Inline widgets should be concise and glanceable. Avoid vertical scroll within the widget. Height should feel widget-sized, not application-sized. If content requires scrolling, complex tables, or detailed editing, transition to side-by-side mode.
  :::column-end:::
  :::column:::
    ### :x: Don't duplicate Copilot features in the widget

    Avoid recreating chat capabilities (prompt input, suggestions, reasoning summaries, retry controls) inside the widget. Duplication creates confusion, visual noise, and fragmented interaction models.
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/image-needed.png" alt-text="Image needed" border="false":::
  :::column-end:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/no-full-application.png" alt-text="A screenshot of a widget that mimics a full application" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    ### :x: Don't exceed more than two actions per widget

     Support up to two actions inside a widget. For complex tasks hand over to side-by-side mode.
  :::column-end:::
  :::column:::
    ### :x: Don't use a widget to resemble a full application

    Inline mode should feel like a natural extension of chat, not an entire application embedded inside it.
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/no-duplicate-content.png" alt-text="A screenshot of a widget that duplicates content in the model text" border="false":::
  :::column-end:::
  :::column:::
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/image-needed.png" alt-text="Image needed" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    ### :x: Don't duplicate content in model text and widget

    Do not repeat the same information in both the widget and the model message.
  :::column-end:::
  :::column:::
    ### :x: Avoid deep navigation in widgets

    Widgets should not contain multiple tabs, or deeper navigation. Consider splitting these into separate cards or tool actions.
  :::column-end:::
:::row-end:::

---

## Visual design guidelines

Visual and interaction consistency is critical to Copilot's user experience. Apps are expected to align with the Fluent design system so that users experience predictable behavior, familiar controls, and consistent experiences across apps. This consistency helps users build trust, move confidently between workflows, and safely take action across multiple apps within Copilot.

### Fluent Copilot theme guidelines

Create beautiful, cohesive Microsoft experiences using the Fluent 2 UI kits. Built in Figma, the Fluent 2 UI kits contain design assets that map to the code libraries. That means seamless handoff from design to development.

:::row:::
  :::column:::
    #### Color

    [Fluent 2 > Color](https://fluent2.microsoft.design/color)
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-colors.png" alt-text="A screenshot of various shades of blue, labeled 60, 70, 80, 90, 100" border="false":::
  :::column-end:::
  :::column:::
    #### Button

    [Fluent 2 > Button](https://fluent2.microsoft.design/components/web/react/core/button/usage)
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-button.png" alt-text="A screenshot of various Fluent button components" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    #### Typography

    [Fluent 2 > Typography](https://fluent2.microsoft.design/typography)
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-typography.png" alt-text="A screenshot of various text sizes and styles" border="false":::
  :::column-end:::
  :::column:::
    #### Radius

    [Fluent 2 > Shapes](https://fluent2.microsoft.design/shapes#corner-radius)
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-radius.png" alt-text="A screenshot of corner radiuses on a rectangle shape" border="false":::
  :::column-end:::
:::row-end:::
:::row:::
  :::column:::
    #### Spacing

    Global padding of an app card should be 24 pixels.
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-spacing.png" alt-text="A screenshot of padding around a card" border="false":::
  :::column-end:::
  :::column:::
    #### Iconography

    [Fluent 2 > Iconography](https://fluent2.microsoft.design/iconography)
    :::image type="content" source="assets/images/declarative-agents/widget-ux-guidelines/fluent-icons.png" alt-text="A screenshot of various Fluent icons" border="false":::
  :::column-end:::
:::row-end:::

## Related content

- [Add interactive UI widgets to declarative agents](declarative-agent-ui-widgets.md)
- [Fluent 2](https://fluent2.microsoft.design/)
