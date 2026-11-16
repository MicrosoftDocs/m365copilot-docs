---
title: Publish your Microsoft 365 Copilot plugin through Microsoft Marketplace
description: Confirm the public route for your artifact, prepare a Partner Center submission, track certification, and complete customer installation and access requirements after listing.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
---

# Publish your plugin through Microsoft Marketplace

During **Publish & distribute**, use Microsoft Marketplace when customers outside your organization need an eligible published capability. This page connects artifact-specific eligibility and certification to Partner Center submission and the customer actions required after listing. You finish with a tracked submission or listing and a clear handoff to **Make available & govern**.

Marketplace listing isn't installation, user assignment, consent, or connection setup. It doesn't make a capability available in every customer organization or every Copilot experience.

## Before you begin

Have the following ready:

- The exact artifact, package version, included capabilities, and intended experiences.
- A documented public submission route for that artifact, not just a ZIP that passes local packaging.
- An enrolled, verified publisher account with access to the applicable Microsoft 365 and Copilot program in Partner Center.
- A tested package and its validation findings, including incomplete checks and known limitations.
- Support, privacy, terms, branding, listing, authentication, and customer setup information.
- Certification testing instructions and access details, provided through the supported submission process rather than committed to source.
- An owner for certification responses, customer support, updates, and retirement.

## Confirm the route for the artifact

| Artifact | Confirmed public route | Boundary |
|---|---|---|
| A declarative agent, including a declarative agent with skills | [Publish your agent](build-declarative-agents-add-custom-skills.md#publish-your-agent), then the applicable Partner Center submission process | Published eligibility for an agent with skills doesn't establish eligibility or an offer type for every composed plugin package. |
| A standalone MCP server | [Microsoft MCP server certification](/microsoft-copilot-studio/mcp-certification) | Use the MCP intake and certification requirements below; don't apply them to composed plugin packages. |
| A Copilot Cowork plugin | [Publish to the public](/copilot/cowork/cowork-plugin-development#step-9-publish-to-the-public) in the Cowork development guide directs publishers to Partner Center | Confirm the offer type and accepted artifact for your package version and included capabilities before submission. This handoff doesn't establish eligibility for every composed plugin package or standalone skill. |
| Another composed plugin package, standalone skill, or component format | Confirm that format's published eligibility and offer-specific instructions before creating an offer | Package creation, registry sharing, and a Marketplace-readiness report aren't proof of public eligibility. |

The [Microsoft Marketplace step-by-step submission guide](/partner-center/marketplace-offers/add-in-submission-guide) explains the common Partner Center workflow and includes Office Add-in examples. Those examples don't identify an offer type or accepted upload artifact for composed plugins. Use the supported package or manifest and offer type for your confirmed artifact route.

### MCP server certification

For **MCP servers only**, submit new certifications through the intake form linked from [Microsoft MCP server certification](/microsoft-copilot-studio/mcp-certification) and use the **Apps and Agents for M365 and Copilot** Partner Center offer type.

1. Prepare the MCP package, tool definitions, authentication configuration, required metadata, public documentation, icons, and testing information according to the certification guide. Confirm that your organization is a verified publisher and owns or controls the endpoint.

    **Verify:** The package and publisher meet the MCP-specific prerequisites. Don't substitute a composed plugin ZIP for the required MCP artifacts.

1. Submit the certification intake form linked from the product guide and follow the instructions Microsoft provides.

    **Verify:** Record the intake and any follow-up instructions. Intake isn't acceptance for processing or certification approval; preview processing capacity is limited.

1. Complete the directed submission, validation, functional and safety review, and any remediation.

    **Verify:** Track the review outcome and publication status separately. A passed validation report isn't certification.

Microsoft is moving already-certified MCP servers to the new certification path without publisher action solely for that transition. Microsoft contacts publishers if action is needed. The legacy certification process remains available through **November 18, 2026**, as described in the MCP certification guide. This cutoff and offer type don't apply to composed plugin packages.

## Prepare the package and listing

1. Build the artifact by using its product procedure, and then validate the exact version you want to submit.

    For a WIQD plugin project, [package before package validation](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#validation-as-a-first-class-step). Package and marketplace modes consume an existing ZIP and can upload it for validation. Marketplace mode adds policy and evidence checks. Missing evidence isn't a pass, and the report isn't official Store approval.

    **Verify:** Record the ZIP or manifest identity, version, validation findings, and required runtime tests. Keep the tested artifact and the submitted artifact aligned.

1. Prepare listing content that accurately describes capabilities, supported experiences, setup, licensing or purchase requirements, limitations, and external services. Add the required icons, screenshots, support link, privacy policy, and terms.

    **Verify:** The listing describes this artifact and version, and its public links work. Don't promise capabilities or hosts based on package format alone.

1. Prepare certification notes that explain installation, authentication, representative tasks, expected results, external dependencies, and how reviewers get required test access.

    **Verify:** Reviewers can reproduce the intended behavior by using the supplied instructions. Provide sensitive access information only through the supported certification channel.

## Submit through Partner Center

Use this common workflow **after confirming eligibility and the artifact-specific route**. For MCP servers, complete intake and follow its instructions first.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard/v2/home), open **Marketplace offers**, and select the **Microsoft 365 and Copilot** program when applicable. Confirm the publisher before creating the offer.

    **Verify:** The account is enrolled in the required program and the selected publisher is correct. You can't change the publisher after offer creation.

1. Create the supported offer type, reserve the offer name, and complete the product setup.

    **Verify:** The name and publisher match the artifact, and the selected offer type is explicitly supported by the product's submission instructions. Don't select Office Add-in merely because a generic example uses it.

1. Upload the package or manifest required by that offer, and resolve package findings.

    **Verify:** Partner Center reports the expected package version and upload status. Don't infer acceptance from successful local packaging.

1. Complete properties, legal and support information, localized listings, availability, and certification notes. Include customer configuration and purchase requirements where applicable.

    **Verify:** Required sections are complete and agree with the tested artifact and intended audience.

1. Review and submit for certification by following the [Partner Center submission workflow](/partner-center/marketplace-offers/add-in-submission-guide#step-9-make-sure-you-add-your-critical-testing-instructions).

    **Verify:** Record the offer ID, submitted version, date, current status, and owner. Keep draft, submitted, rejected, approved, and published states distinct.

1. Monitor the submission and respond to certification findings. Rebuild and retest affected behavior before uploading a corrected package.

    **Verify:** Track the accepted version and the actual listing state. Submission and certification approval don't by themselves establish that customers can acquire the offer.

Work IQ Dev Tools can prepare and validate artifacts; it doesn't submit to Partner Center on your behalf. `wiqd plugin publish` submits to the **organization catalog**, and `wiqd plugin share` grants direct access to a shared deployment. Neither operation creates a public Marketplace offer.

## After listing: Complete customer availability

Give customers the exact offer, publisher, and version, plus the product-specific acquisition and configuration instructions. Complete only the actions that apply to the distribution method.

1. Confirm the published offer and follow its supported acquisition instructions.

    **Verify:** The customer selected the intended publisher, offer, version, and required service plan. Listing doesn't prove installation.

1. When administrator installation applies to a listed plugin, use **Agents** > **Tools** in the Microsoft 365 admin center, select the plugin, and select **Install**. Follow [Install a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill) to review its details, select users or groups, and confirm installation. Uploading your own package is a separate distribution method, not the installation procedure for a listed plugin.

    **Verify:** The installed plugin matches the intended publisher and version, and the installation scope includes the intended users or groups.

1. Confirm the applicable publisher category under **Agents** > **Settings** > **Agent and plugin access**, then set user availability as required by the method.

    **Verify:** Intended users or groups have access. Use [Make your plugin available](deploy-plugin.md) and the [administration map](govern-plugins.md#manage-plugins-with-microsoft-agent-365) for the applicable controls.

1. Complete required permissions, consent, account sign-in, connections, and external-service setup.

    **Verify:** An intended user can complete the target task in the supported experience. Record the version, audience, experience, result, and any outstanding issue instead of treating acquisition as a successful runtime test.

Blocking a plugin that contains an agent also blocks the agent. An agent-and-skill package appears under both Tools and Agents as one entity; administrators can't block just one skill within the package. MCP tool-level blocking exists, but it doesn't establish individual-skill controls or a policy precedence rule. Follow the [plugin governance guidance](govern-plugins.md) and the product-specific control for each dependency.

## Next step

Enter **Make available & govern** with [Make your plugin available](deploy-plugin.md). After availability is confirmed, continue to **Monitor, update & retire** with [Monitor your plugin](monitor-plugin.md).
