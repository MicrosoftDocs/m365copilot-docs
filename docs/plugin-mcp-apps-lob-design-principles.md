---
title: Design line-of-business MCP apps for Microsoft 365 Copilot
description: Learn core design patterns and common pitfalls for building MCP apps that integrate complex LOB data, relationships, permissions, and workflows with Microsoft 365 Copilot.
#customer intent: As a developer building an MCP app for an LOB system, I want guidance on core design patterns and common pitfalls so that I can handle complex data models, relationships, permissions, and business workflows reliably.
author: kaul-vineet
ms.author: vineetkaul
ms.localizationpriority: medium
ms.date: 09/16/2026
ms.topic: article
---

<!-- cSpell:ignore casefold closedwon ITSM kaul vineet vineetkaul -->

# Design line-of-business MCP apps for Microsoft 365 Copilot

This article provides developers and architects with core design patterns and common pitfalls for integrating complex LOB data, relationships, permissions, and workflows with Microsoft 365 Copilot.

## Why LOB MCP apps require additional design

MCP apps add an interactive app widget to an MCP tool response. Copilot provides the conversational entry point, the MCP server connects to an external system, and the app widget lets users review, explore, or act on data without leaving the conversation.

Users working in Microsoft 365 Copilot often need to retrieve information or perform actions in line-of-business (LOB) systems such as Salesforce, ServiceNow, HubSpot, Microsoft Dynamics 365, SAP business applications, Workday, Jira, and Coupa. These packaged enterprise applications include extensive prebuilt data structures, relationships, and business logic, which organizations often customize further. As a result, even two deployments of the same LOB product can expose different fields, values, relationships, permissions, and workflows. User requests are also varied and can combine business names, filters, related records, and actions without following a fixed structure.

For example, a user might ask Copilot, “Find Global Fizz and show its related open records.” Supporting requests like this requires more than exposing tools that retrieve or update data. The MCP app must interpret business terms, validate them against the target environment, resolve related records, preserve access controls, and coordinate multi-step workflows. These requirements call for deliberate patterns across tool design, data handling, and interactive experiences.

For foundational guidance, see [Build an MCP plugin](build-mcp-plugins.md), [Add UI with MCP apps](plugin-mcp-apps.md), and [UX guidelines for MCP apps](plugin-mcp-apps-ui-guidelines.md).

The following design principles, based on the [Salesforce](https://github.com/microsoft/mcp-interactiveUI-samples/tree/main/mcp-apps/salesforce-crm/python), [ServiceNow](https://github.com/microsoft/mcp-interactiveUI-samples/tree/main/mcp-apps/servicenow-itsm/python), and [HubSpot](https://github.com/microsoft/mcp-interactiveUI-samples/tree/main/mcp-apps/hubspot-crm/python) reference samples, address these challenges from the data model through tool design and interactive workflows.

## Map the LOB data model before defining tools

Before defining tools, review the conversation flow and requirements for the scenarios the LOB MCP app will support, together with the LOB application's data model. Each LOB application has its own out-of-the-box data model, which organizations can customize extensively. Verify each entity and field against the current environment, including its API name, user-facing label, data type, required or read-only status, accepted values, and relationships. Do not assume that a sample schema matches the target LOB configuration.

Work with the LOB application customization team to identify environment-specific changes. Keep the MCP server, tool schemas, and app widgets aligned with the current data model so they do not drift from the LOB system.

## Separate responsibilities across MCP app components

LOB MCP apps coordinate customized business rules, source-system permissions, related records, and consequential updates across agent instructions, MCP tools, LOB integration, and the app widget. Keep these responsibilities separate so rules are enforced consistently and each layer can be secured, tested, and changed independently.

- **Use agent instructions and tool descriptions to guide tool selection and argument preparation.** Validate every tool call on the server; do not rely on instructions to enforce permissions, allowed values, relationships, or query safety.
- **Use the MCP server entry point—the code that receives incoming MCP requests—to route tool calls.** Keep business rules, value translation, relationship resolution, and result preparation in the tool handlers or helper code used by those handlers.
- **Use the LOB client or adapter for downstream authentication and API communication.** Keep pagination, retries, throttling, and source-system error handling behind this boundary.
- **Build and maintain the app widget in its source files.** The app widget displays results, collects input, and uses the host bridge to call MCP tools. It must not store credentials, make authorization decisions, or call the LOB API directly. Generate the deployable app widget HTML from this source; do not edit generated files directly.

## Match authentication to the LOB system

Microsoft 365 Copilot and the LOB system are separate authentication boundaries. LOB systems support different methods, so verify what the target system supports before choosing an approach:

- **Delegated identity** uses each user's sign-in token. It preserves per-user permissions and audit history, but requires LOB support, additional authentication setup, and token management.
- **Application identity** uses a client ID with a secret or certificate. It simplifies service-to-service access, but the LOB system attributes actions to the application instead of the user.
- **Shared credential** uses one private token, API key, or service-account password for everyone. It is simple to configure, but the LOB system cannot apply per-user permissions or attribution.

For MCP endpoint options, see [MCP authentication](plugin-authentication.md).

## Build a contextual experience, not another application

LOB systems already provide full applications for broad workflows, exploration, and administration. Do not recreate that application inside Microsoft 365 Copilot. Use an LOB MCP app for the focused UI needed by the current conversation, and direct broader work to the LOB system.

Let the conversation establish the task and use the app widget when the task benefits from structured review or interaction.

> **User:** "Show my open opportunities closing this month."

The app widget can present the filtered records for review and editing without reproducing the full CRM experience.

### Let users traverse related business entities in the app widget

LOB information is often distributed across related entities. Understanding an account, case, employee, or supplier can require viewing its associated records while keeping the primary record in context. Use app widget state and UX features such as expandable sections or detail views so users can explore these relationships without making a separate conversational request for each entity.

For example, when a user asks Copilot for an account, the returned account becomes the primary record that the app widget keeps in context:

> **User:** "Show the Global account."

Show the account's key fields with controls for related entities such as Opportunities, Cases, and Contacts. Preserve the account context in app widget state. When a selected view needs related data, invoke the appropriate MCP tool through the host bridge using the current account ID. Load related records only when the user opens that view, and keep the primary record visible.

Use lists to show the key fields for review, and add an **Edit** button that opens the detailed form for the selected record.

:::image type="content" source="assets/images/lob-mcp-apps/related-entity-360-modal.png" lightbox="assets/images/lob-mcp-apps/related-entity-360-modal.png" alt-text="App widget 360-degree view showing related business records":::

The conversation establishes the business context once, and the UI lets the user continue exploring that context through direct interaction.

The initial request may instead name the related view the user wants:

> **User:** "Show opportunities for the Global account."

Do not force every related-record request through this exploration pattern. When the initial request already names the related view, resolve the primary record and open the app widget directly in that view rather than making the user navigate from the primary-record view.

### Prefill app widgets with conversation context

LOB create forms can contain many required, controlled-value, and relationship fields. Users often provide some of this information in their request. Prefill those values in the create form so the user can review them and complete the remaining fields without repeating information.

> **User:** "Create a contact for Maya Chen at Contoso with the email `maya@contoso.com`."

```text
show_create_form(
    entity="contact",
    prefill={"first_name": "Maya", "last_name": "Chen",
             "email": "maya@contoso.com", "company_name": "Contoso"}
)
```

:::image type="content" source="assets/images/lob-mcp-apps/hubspot-prefilled-contact.png" lightbox="assets/images/lob-mcp-apps/hubspot-prefilled-contact.png" alt-text="HubSpot contact form prefilled with information from the user's request":::

The app widget opens with those values populated so the user can review them and complete any missing fields. Treat prefilled values as user input: validate them on the MCP server before creating the record.

Use [Work IQ](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/work-iq/) when Microsoft 365 work context can improve the task. It can help ground requests involving “my” and provide relevant context for creating or updating records.

## Design tools and interactions for LOB data

### Design tools around business operations

LOB systems typically expose large, complex APIs with many entities and operations. Do not mirror the entire API as MCP tools. Define a focused set of business operations that users need, and give each tool a distinct name, description, and input schema. Keep supporting work, such as building API filters and resolving related record names, inside the MCP server.

Create separate tools for common operations such as get, create, and update:

```text
get_records(...)
create_record(...)
update_record(...)
```

Also avoid one unrestricted tool that accepts any entity and action. Its broad schema makes validation, authorization, routing, and result handling less predictable.

### Handle record matches before viewing or editing

Users usually search for LOB records by business names, such as account, company, or contact names, rather than by stable record IDs. These names are often proper nouns, and users might enter partial values or make spelling mistakes. A search can therefore match zero, one, or multiple records. Resolve the request to a stable record ID, and never assume that the first match is the intended record. Declare the supported search fields and record-ID parameter in the tool schema.

> **User:** "Edit the Global account."

Use the agent instructions to tell Copilot which tool to call and how to handle each result:

> Edit-by-name: call the matching get tool with its declared name filter. If exactly one record matches, call the same tool again with its ID and `action="edit"`. If multiple records match, show a list with identifying fields and **Edit** controls. If no records match, report that no record was found.

Use the server-side tool definition to identify the matching Account tool and its supported inputs:

```python
{
    "name": "get_accounts",
    "description": "Get accounts. Pass account_id to retrieve one record; add action='edit' to open the edit form. Filters: name, industry, account_number, and type.",
    "handler": get_accounts,
}
```

A show request can return one matching record or a list. An edit request must resolve one stable record ID before opening the app widget's edit form.

### Map controlled values and dependencies

LOB systems often use controlled-value fields, also called picklists, choice fields, or enumerations. Users see labels such as `Closed Won`, while the API might require a stored code such as `closedwon`. Do not assume that a familiar label has the same stored value in every implementation.

Controlled-value fields accept only values configured in the target LOB environment. Stored values can be text codes, numbers, or other system identifiers. Using a display label, arbitrary text, or a stale stored value in queries or other CRUD requests can cause validation errors, failed writes, or missing results.

Retrieve labels and codes from the LOB metadata API and cache them for reference. If the LOB system does not provide a metadata API, maintain and verify the mappings through administrative configuration. Refresh the cached or configured mappings when the source configuration changes so the tools and app widgets do not drift.

For example, the following case-insensitive lookup translates a user-facing label into its stored code:

```python
label_to_code = {item["label"].casefold(): item["value"] for item in allowed_values}
normalized_value = user_value.casefold()
if normalized_value not in label_to_code:
    raise ValueError("The value is not supported by the LOB system.")
status_code = label_to_code[normalized_value]
```

When controlled-value fields have dependencies—one selection controls another—capture those relationships in the metadata used by the MCP server and app widget. For example, if **Category** controls **Subcategory**, selecting **Hardware** should show only its allowed subcategories. Validate the selected combination on the MCP server before writing to the LOB system.

```python
valid_codes = dependencies[category_code]
if subcategory_code not in valid_codes:
    raise ValueError("The subcategory is not valid for the selected category.")
```

### Build filtered lists on the MCP server

LOB queries often combine conditions across different field types and related records. Users express these conditions through business labels and names, while the LOB API requires exact field names, stored values, data types, and query operators. Define one focused list tool for each supported business entity so the MCP server can validate, translate, and execute the complete query.

> **User:** "Show deals worth at least 20,000."

Agent instructions guide Copilot to match the request to an appropriate tool and use only the filters declared in its description. The tool schema and handler reject unsupported filters.

> Before calling a list tool, match each condition in the user's request to a filter declared in the tool description. Do not omit an unsupported condition or replace it with a different filter. Ask the user to revise the request when the tool does not support a requested filter.

Copilot interprets “at least 20,000” as a minimum-amount condition. It selects `get_deals` because the tool description declares the corresponding `amount_min` filter:

```python
{
    "name": "get_deals",
    "description": "Get deals. Filters: amount_min (inclusive minimum amount), stage.",
    "handler": get_deals,
}
```

Copilot then maps the condition to the declared tool parameter:

```text
get_deals(amount_min="20000")
```

The MCP server validates the value and maps the tool parameter to the field and operator required by the LOB API:

```python
FILTERS = {"amount_min": ("amount", ">=")}

def build_filter(parameter: str, value: str) -> str:
    field, operator = FILTERS[parameter]
    return f"{field} {operator} {float(value)}"

lob_filter = build_filter("amount_min", "20000")
```

LOB records contain many data types, and each can require a different parameter shape and query operator. Applying one filtering pattern to every field can cause invalid queries or incorrect results. Map each supported data type to the appropriate parameters and operators:

| Data type | Operator | Parameter pattern | Example |
|---|---|---|---|
| Free-form text | Contains or `LIKE` | One parameter | `name` |
| Controlled value | Equality | One parameter | `stage` |
| Related record | Equality | One parameter | `account_id` |
| Number | Lower and upper bounds | `*_min`, `*_max` | `amount_min`, `amount_max` |
| Date | Start and end bounds | `*_from`, `*_to` | `close_date_from`, `close_date_to` |

Validate and format every value before adding it to the LOB query. Execute all conditions as one server-side query rather than asking Copilot to combine results from several tool calls, which can lose filters or produce inconsistent results. Return one authoritative structured list.

When the user refines the request in a later turn, retain the applicable filters and add or replace only the conditions that changed:

> **User:** "Show deals worth at least 20,000."
>
> **User:** "Now show only the closed-won deals."

```text
get_deals(amount_min="20000", stage="Closed Won")
```

Return the same structured list type after each refinement so the host renders the results consistently.

:::image type="content" source="assets/images/lob-mcp-apps/hubspot-filtered-orders.png" lightbox="assets/images/lob-mcp-apps/hubspot-filtered-orders.png" alt-text="HubSpot order list filtered from a natural-language request":::

### Limit and cache list results

LOB entities can contain thousands of records, and their APIs can be slow or throttled. Returning large lists increases response time and payload size, while displaying them overwhelms the app widget and occupies too much space in Microsoft 365 Copilot.

Apply default and maximum result limits on the MCP server, use predictable sorting, and indicate when more records are available. Let users refine their filters or use an explicit **Load more** action backed by server-side pagination.

Cache suitable list, metadata, and related-record results to reduce repeated LOB API calls:

```python
cache = TTLCache(maxsize=200, ttl=120)
items = None if refresh else cache.get(cache_key)
```

Choose expiration times based on how frequently the data changes. Include the query and security context in cache keys, do not share user-specific results between users, and invalidate affected entries after writes. When the user requests refreshed or latest data, bypass the cache and call the LOB API.

### Resolve related names in lists without N+1 lookups

LOB data is highly relational. Records often store links to accounts, contacts, owners, or other entities as system IDs, and can include self-referential relationships such as parent accounts or manager hierarchies. Users, however, need recognizable business names. Resolving each ID with a separate request creates an N+1 query pattern that becomes slower as the list and its relationships grow.

First use the LOB API's relationship projection, join, or display-value capability to return related names with the original query. If that is not supported, collect the unique foreign keys and use the LOB system's batch-association, batch-read, or `IN` query capability.

The fallback flow is:

```text
retrieve records → collect unique foreign keys → batch-read related names
```

Resolve the related values on the MCP server before returning the structured list. This replaces per-row lookups with a small number of requests and reduces loading time and throttling risk.

### Build aggregations on the MCP server

LOB entities can contain hundreds of thousands or more records. Summaries and dashboards can aggregate this data across categories, stages, owners, or time periods. Do not retrieve all underlying records and ask Copilot or the app widget to calculate the result. Use LOB aggregation APIs or grouped queries on the MCP server and return only the calculated data the app widget needs. If the LOB API does not support aggregation, calculate the result on the MCP server from a bounded, paginated data set and make the scope clear to the user.

:::image type="content" source="assets/images/lob-mcp-apps/server-aggregated-sales-pipeline.png" lightbox="assets/images/lob-mcp-apps/server-aggregated-sales-pipeline.png" alt-text="Sales pipeline dashboard built from server-aggregated opportunity data":::

### Resolve relationships before creating the record

Users recognize names such as company, contact, owner, or parent account, but LOB APIs usually store these relationships as record IDs. Design relationship fields so users enter recognizable names rather than record IDs. Label the field as a related record; an indicator such as `Company: Contoso 🔗` can reinforce that the server will resolve the name.

:::image type="content" source="assets/images/lob-mcp-apps/hubspot-relationship-field.png" lightbox="assets/images/lob-mcp-apps/hubspot-relationship-field.png" alt-text="HubSpot contact form with a Company relationship field and lookup indicator":::

When the user selects **Save**, resolve each relationship to exactly one matching record that the user is authorized to access and associate before calling the create API. Never select the first match when a name is ambiguous:

```text
"Contoso" → company_id="company_123"
```

If a name is unresolved or ambiguous, keep the form and its values open, and show a persistent structured alert with possible matches. Let the user select the intended record, then resubmit its stable record ID.

:::image type="content" source="assets/images/lob-mcp-apps/relationship-resolution-suggestions.png" lightbox="assets/images/lob-mcp-apps/relationship-resolution-suggestions.png" alt-text="Relationship-resolution alert showing suggested matching records":::

Return this correctable condition in `structuredContent` rather than setting top-level `isError`, so the app widget can request a correction without treating the tool call as failed.

### Protect relationship changes during updates

Relationship changes can have greater business impact than ordinary field edits, such as changing an account owner, reassigning a case, or moving a contact to another company.

A simpler pattern is to keep relationship fields read-only in general edit forms:

```text
Company: Contoso 🔗    [read-only]
```

This allows the user to understand the record’s relationships without making a consequential reassignment look like an ordinary text edit.

When relationship changes are supported, a dedicated tool keeps them separate from general updates.

### Use dedicated tools for actions with broader effects

Some business actions do more than update a field and have a dedicated LOB API. In a CRM system, converting a lead can create related account, contact, and opportunity records and invoke additional workflow rules.

Represent such operations with dedicated tools:

```text
convert_lead(lead_id="lead_123", create_opportunity=true)
```

The dedicated tool calls the LOB system's native operation rather than reconstructing it through generic create or update calls, which can bypass validation, related-record creation, workflow behavior, and audit history.

Resolving an incident through ServiceNow's native action is another example of a dedicated business operation.

:::image type="content" source="assets/images/lob-mcp-apps/servicenow-resolve-incident.png" lightbox="assets/images/lob-mcp-apps/servicenow-resolve-incident.png" alt-text="ServiceNow incident resolution performed through a dedicated action":::

## Start building an LOB MCP app

Use one of the following options to apply these design principles:

- **Customize a working app:** Open the **MCP Apps** tab in the [Microsoft Copilot Agent Kit's Agent Library](https://github.com/microsoft/Power-CAT-Copilot-Studio-Kit/blob/main/AGENT_LIBRARY.md) to download working LOB MCP apps for Salesforce CRM, ServiceNow ITSM, and HubSpot CRM. Together, these apps demonstrate the patterns in this article and can be adapted to your organization's data model and workflows.
- **Explore the source code:** Review the [MCP interactive UI samples](https://github.com/microsoft/mcp-interactiveUI-samples) for the server, app widget, and deployment source.

Connect an app to a development environment, try the experiences discussed in this article, and adapt them to your own LOB workflows.
