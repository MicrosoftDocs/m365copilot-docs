---
ms.localizationpriority: medium
---
<!-- markdownlint-disable MD041 -->

In this exercise you will register a new application in Azure Active Directory to enable [user authentication](/graph/auth-v2-user). You can register an application using the Microsoft Entra admin center, or by using the [Microsoft Graph PowerShell SDK](/graph/powershell/get-started).

## Register application for user authentication

In this section, you register an application that supports user authentication using [device code flow](/azure/active-directory/develop/v2-oauth2-device-code).


1. Open a browser, go to the [Microsoft Entra admin center](https://entra.microsoft.com), and sign using a Global administrator account.

2. In the left navigation, select **Microsoft Entra ID**, expand **Identity**, expand **Applications**, and then select **App registrations**.

    :::image type="content" source="../../images/entra-portal-app-registrations.png" alt-text="A screenshot of the App registrations":::

3. Select **New registration**. Enter a name for your application; for example, `Clippy`.

4. Set **Supported account types** as needed. The following table lists the options.

    | Option | Who can sign in? |
    |--------|------------------|
    | **Accounts in this organizational directory only** | Only users in your Microsoft 365 organization |
    | **Accounts in any organizational directory** | Users in any Microsoft 365 organization (work or school accounts) |
    | **Accounts in any organizational directory ... and personal Microsoft accounts** | Users in any Microsoft 365 organization (work or school accounts) and personal Microsoft accounts |

5. Leave **Redirect URI** empty.

6. Select **Register**. On the application's **Overview** page, copy the value of the **Application (client) ID** and save it; you will need it in the next step. If you chose **Accounts in this organizational directory only** for **Supported account types**, also copy the **Directory (tenant) ID** and save it.

    :::image type="content" source="../../images/aad-application-id.png" alt-text="A screenshot of the application ID of the new app registration":::

7. Select **Authentication** under **Manage**. Locate the **Advanced settings** section and change the **Allow public client flows** toggle to **Yes**, then choose **Save**.

    :::image type="content" source="../../images/aad-default-client-type.png" alt-text="A screenshot of the Allow public client flows toggle":::

8. Under **Manage,**, go to **API Permissions** and choose **Add a Permission**. In **Microsoft APIs**, choose **Microsoft Graph**, and select **Delegated permissions**. From the list of permissions, select *Calendars.Read*, *Contacts.Read*, *Mail.Read*, *User.Read*, *Calendars.ReadBasic*, *Mail.ReadBasic*, and *User.ReadAll*.