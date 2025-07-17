---
title: Grant privileges to AI administrators for managing Microsoft 365 Copilot connectors
description: Learn how to delegate permissions to AI administrators so they can configure and administer Copilot connectors without a Global Administrator.
author: bala5765
ms.author: bak
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 07/01/2025
---

# Grant privileges to AI administrators for managing Microsoft 365 Copilot connectors

Microsoft 365 Copilot connectors enable organizations to build tailored integrations to enhance their AI systems and services. Generally, AI Administrators are responsible for setting up and managing these connectors. However, certain tasks like application registration and consenting to specific Microsoft Graph API permissions often require intervention from Global Administrators. Delegating these permissions to AI Administrators can reduce dependencies, allowing them to set up Copilot connectors independently. This guide outlines step-by-step instructions for granting these privileges while maintaining organizational control.

> [!NOTE]
> Delegating these privileges is an optional step and can be skipped if Global admins don't want to delegate these permissions.

## Permissions that can be delegated to AI admins

To enable AI Administrators to independently manage the setup and operation of custom connectors, grant them the following permissions.

- Application registration permissions: Granting these permissions allows AI Administrators to register applications from the Microsoft Entra admin center to set up custom connectors. Application registration privileges are, by default, enabled for all users in an organization. Granting these permissions are only needed if this privilege is disabled for organizational reasons.

- Consent privileges: Granting this privilege allows AI Administrators to grant consent for connector-related [Microsoft Graph API permissions](/graph/permissions-reference) such as **ExternalItem.ReadWrite.OwnedBy** and **ExternalConnection.ReadWrite.OwnedBy** which are specific to creating connections and ingesting items.

### Grant application registration permissions

If application registration permissions are enabled for all users within the organization, no extra configuration is required. However, if these permissions are restricted, Then Global Administrators can grant these permissions to AI Administrators by using a custom role. For more information on using custom roles to grant application registration permissions, see [Delegate app registration permissions in Microsoft Entra ID](/entra/identity/role-based-access-control/delegate-app-roles).

### Grant consent privileges

Granting consent privileges to AI Administrators involves creating a custom policy and role tailored to the required permissions. Follow these steps:

1. Define a policy that specifically grants permissions for **ExternalItem.\*** and **ExternalConnection.\***.
1. Create a custom role and assign the newly created consent policy to this role.
1. Assign the custom role to users with the AI Administrator role, enabling them to manage consent for the specified permissions.

## Grant permissions with PowerShell

A [PowerShell script](https://www.powershellgallery.com/packages/Connector.Cmd) is available to perform the above operations to simplify the above steps of providing application registration permissions and consent privileges to AI Administrators.

When executed, the script performs the following actions:

- Grants application registration permissions to users who are currently assigned the **AI Administrator** role.
- Grants consent permissions by doing the following actions:
  - Creates a custom consent policy named "Grant Consent Permissions To AI Admins", allowing the users to consent to **ExternalItem.\*** and **ExternalConnection.\***.
  - Establishes a custom role named **Custom Connector Management for Copilot** and assigns the consent policy to this role.
  - Assigns the custom role to existing AI Administrators.

To use the PowerShell script, follow these steps.

1. To install the script, use the `Install-Module` command in PowerShell.

    ```powershell
    Install-Module Connector.Cmd
    ```

    > [!IMPORTANT]
    > These steps require Connector.Cmd version 1.4 or later.

1. To invoke the script, use the following command.

    ```powershell
    GrantAppConsentAndManagementPermissionToAiAdmin
    ```

1. Sign in as a Global Administrator and approve the requested permissions.

When the script completes without error, existing users with the **AI Administrator** role have the necessary permissions to set up and manage Copilot connectors.

## Confirm results

To ensure the setup is successful, follow these steps to test the configuration:

1. Sign in to the Microsoft Entra admin center as an AI Administrator.
1. Navigate to the **App registrations** section and create a new application.
1. Add **ExternalItem.ReadWrite.OwnedBy** and **ExternalConnection.ReadWrite.OwnedBy** permissions to the application.
1. Consent to these permissions directly within the portal.

If successful, the configuration is complete, and AI Administrators have the necessary privileges.

## Frequently asked questions

### Does the PowerShell script grant consent to all Graph API permissions?

No, the script limits consent privileges to **ExternalItem.\*** and **ExternalConnection.\***. This ensures minimal required permissions are granted without risking broader access.

### What if the connector application requires permissions beyond ExternalItem.\* and ExternalConnection.\*?

In such cases, Global Administrators must manually grant consent for other permissions. To extend AI Administrator privileges:

1. Manually create or update a custom consent policy as described in [Grant consent privileges](#grant-consent-privileges).
1. Add the other permissions required for the application.
1. Assign the updated policy to the custom role created earlier.

### How can I revoke privileges granted to AI Administrators?

To remove privileges, navigate to the **Roles & admins** page in the Microsoft Entra admin center or Microsoft 365 admin center. Locate the custom role created during setup and delete it.

:::image type="content" source="assets/images/connector-admin-delegation-role.png" alt-text="A screenshot of the Roles & admins page in Microsoft Entra admin center":::

### Do privileges automatically apply to newly assigned AI Administrators?

No, privileges granted through the PowerShell script only apply to current AI Administrators. For new AI Administrators, rerun the script or manually assign the custom role to the newly assigned AI admins from the Microsoft Entra admin center.

:::image type="content" source="assets/images/connector-admin-delegation-assignments.png" alt-text="A screenshot of the Assignments page in Microsoft Entra admin center":::

### Is it mandatory to grant these privileges to AI Administrators?

No, granting these privileges is optional. Organizations can choose whether to delegate permissions based on their internal processes. If centralized control is preferred, Global Administrators can retain responsibility for these tasks.

## Related content

- [Delegate app registration permissions in Microsoft Entra ID](/entra/identity/role-based-access-control/delegate-app-roles)
- [Application registration permissions for custom roles in Microsoft Entra ID](/entra/identity/role-based-access-control/custom-available-permissions)
