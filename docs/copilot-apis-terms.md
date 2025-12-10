---
title: Terms of use
description: Microsoft 365 Copilot APIs PREVIEW Terms of Use
ms.topic: article
author: JasonFriedman10
ms.author: jfriedman
ms.date: 12/09/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

# Microsoft 365 Copilot APIs PREVIEW Terms of Use

Last Updated: November 2025

Thank you for developing with Microsoft!

By accessing or using Microsoft 365 Copilot APIs, including within a software application, website, tool, service, or product you create for human consumption or offer to Customers (your "**Application**"), you are agreeing to these terms and to comply with any accompanying documentation that applies to your use of the Microsoft 365 Copilot APIs ("**M365 Copilot API**") with Microsoft Corporation ("**Microsoft**", "**we**", "**us**", or "**our**"). You represent and warrant to us that you have the authority to accept these M365 Copilot API Terms ("**API Terms**") on behalf of yourself, a company, and/or other entity, as applicable. We may change, amend or terminate these API Terms at any time. **Your use of the Microsoft 365 Copilot APIs after any change or amendment means you agree to the new Terms. If you do not agree to the new Terms or if we terminate these Terms, you must stop using the M365 Copilot APIs.**

**THIS PREVIEW IS PROVIDED "AS-IS," "WITH ALL FAULTS," AND "AS AVAILABLE." Microsoft provides no performance guarantee and Customer bear the risk of using it. The Preview is not included in any SLA and may not be covered by customer support.** We may change or not release a final or commercial version of M365 Copilot APIs in our sole discretion.

## Defined Terms

a) "**Customer(s)**" means

1) the licensee of a Microsoft online service ("**Microsoft Offering**") and if the licensee is an organization, includes their administrators and end users; or

2) developers and Independent Software Vendors ("ISV") developing Applications in single tenancy or multi-tenant environments.

b) "Microsoft 365 Copilot APIs" means (i) any form of machine accessible application programming interface that Microsoft makes available under these Terms which provides access to a Microsoft Offering, including all associated tools, elements, components and executables therein, (ii) any Microsoft sample code that enables interactions with a Microsoft Offering, and (iii) documentation that Microsoft makes available to help enable your access to the M365 Copilot APIs.

c) The Microsoft 365 Copilot APIs include:

   a. REST Interface: [Microsoft 365 Copilot Retrieval API Overview](api/ai-services/retrieval/overview.md), [Microsoft 365 Copilot Search API (Preview) Overview](api/ai-services/search/overview.md), [Meeting insights API (Preview)](api/ai-services/meeting-insights/resources/callaiinsight.md), [Change Notifications API](api/ai-services/change-notifications/aiinteraction-changenotifications.md), [Interaction export API](api/ai-services/interaction-export/resources/aiinteractionhistory.md?pivots=graph-v1), [Microsoft 365 Copilot Chat API (Preview) Overview](api/ai-services/chat/overview.md), [Copilot admin limited mode API](api/admin-settings/resources/copilotadminlimitedmode.md?pivots=graph-v1)

   b. M365 Agent SDK: [microsoft/Agents: The Microsoft 365 Agent SDK simplifies building full stack, multichannel, trusted agents for platforms including M365, Teams, Copilot Studio, and Webchat.](https://github.com/microsoft/Agents) available under the [microsoft/Agents: The Microsoft 365 Agent SDK simplifies building full stack, multichannel, trusted agents for platforms including M365, Teams, Copilot Studio, and Webchat.](https://github.com/microsoft/Agents)namespace Microsoft.Agents.M365Copilot.Beta.Copilot.Retrieval

   c. M365 Copilot APIs Client Libraries: [Microsoft 365 Copilot APIs Client Libraries (Preview)](sdks/api-libraries.md?source=recommendations&tabs=csharp)

## 1. Application Registration

These Terms govern your use of M365 Copilot APIs except:

a) if you have entered into another agreement with Microsoft that expressly supersedes these Terms and governs your use of specific M365 Copilot APIs, or

b) for any APIs other than the APIs listed in these terms, if you access APIs that present accompanying terms ("**Accompanying Terms**") and you have accepted those Accompanying Terms, then those Accompanying Terms will apply to your access of those APIs.

Registration for your Application may be required pursuant to documentation. If registration is required, you must register your Application with Microsoft. Your registration must be accurate and kept up-to-date by you at all times. Once you have successfully registered an Application, you will be given access credentials for your Application. "**Access Credentials**" means the necessary security keys, secrets, tokens, and other credentials to access the M365 Copilot APIs. The Access Credentials enable us to associate your Application with your use of the Microsoft APIs. All activities that occur using your Access Credentials are your responsibility. Access Credentials are non-transferable and non-assignable. Keep them secret. Do not try to circumvent them.

Registration types are limited to (i) single tenant internal uses only and (ii) multi-tenant. Note that ISVs are prohibited from using a customer as a proxy to set up a single tenant use and must register as multi-tenant.

## 2. Competitive Benchmarking

If you are a direct competitor, and you access or use the software for purposes of competitive benchmarking, analysis, or intelligence gathering, you waive as against Microsoft, its subsidiaries, and its affiliated companies (including prospectively) any competitive use, access, and benchmarking test restrictions in the terms governing your software to the extent your terms of use are, or purport to be, more restrictive than Microsoft's terms. If you do not waive any such purported restrictions in the terms governing your software, you are not allowed to access or use this software, and will not do so.

## 3. M365 Copilot API License and Guidelines

a) Microsoft 365 Copilot APIs License. Subject to your compliance with all of these Terms, Microsoft grants you a limited, non-exclusive, non-assignable, non-transferable, revocable license to use the M365 Copilot APIs to develop, test, and support your Application, and allow Customers to use your integration of the Microsoft Copilot APIs within your Application. You may use the Microsoft Copilot APIs only as expressly permitted in these Terms. Violation of these Terms may result in the suspension or termination of your use of the M365 Copilot APIs. These APIs will be made available to customers who hold an active M365 Copilot license.

b) M365 Copilot API Guidelines

You may NOT:

1. Use the M365 Copilot APIs in a way that could impair, harm or damage Microsoft, the M365 Copilot APIs, any Microsoft Offering, or anyone's use of the M365 Copilot APIs or any Microsoft Offerings;

2. Use the M365 Copilot APIs to disrupt, interfere with, or attempt to gain unauthorized access to services, servers, devices, or networks connected to or which can be accessed via the M365 Copilot APIs;

3. Use the M365 Copilot APIs, or any information accessed or obtained using the M365 Copilot APIs, for the purpose of migrating Customers away from a Microsoft Offering unless approved by your customers;

4. Scrape, build databases or otherwise create copies of any data accessed or obtained using the M365 Copilot APIs, except as necessary to enable an intended usage scenario for your Application;

5. Copilot APIs are subject to throttling and quota enforcement. During Public Preview, requests may be rate-limited or rejected to protect service reliability and ensure fair usage across Microsoft 365 Copilot experiences. Microsoft may apply per-user, per-tenant, or per-API limits, and may adjust these limits at any time without notice. Developers should refer to the official developer documentation for API-specific throttling limits and guidance, and should design applications to anticipate throttled responses.

6. Attempt to circumvent the limitations Microsoft sets on your use of the M365 Copilot APIs. Microsoft sets and enforces limits on your use of the M365 Copilot APIs (e.g., limiting the number of requests that you may make or the number of users you may serve), in its sole discretion;

7. Use M365 Copilot APIs in any manner that works around any technical limitations of the M365 Copilot APIs or of the accessed Microsoft Offering, or reverse engineer, decompile or disassemble the Microsoft APIs, except and only to the extent that applicable law expressly permits, despite this limitation;

8. Use the M365 Copilot APIs, or any data obtained using the M365 Copilot APIs , to conduct performance testing of a Microsoft Offering unless expressly permitted by Microsoft pursuant to a duly executed written agreement;

9. Use the M365 Copilot APIs , or any data obtained using the M365 Copilot APIs, to identify, exploit or publicly disclose any potential security vulnerabilities;

10. Request, use or make available any data obtained using the M365 Copilot APIs outside any permissions expressly granted by your customers in connection with using your Application;

11. Use or transfer any data accessed or obtained using the M365 Copilot APIs, including any data aggregated, anonymized or derived from that data (collectively the "M365 Copilot APIs Data") for advertising or marketing purposes including (i) targeting ads, or (ii) serving ads. For purposes of clarity, this prohibition on using Microsoft APIs Data for advertising or marketing purposes does not extend to using other data, such as (i) the number of users of your Application, (ii) a user identifier you independently receive from a user (e.g., an email address you receive when a user enrolls to use your Application, a device identifier, or an advertising identifier), or (iii) a product or service identifier that identifies a Microsoft Offering;

12. Make your Application available for use in a manner that circumvents the need for users to obtain a valid license to the Microsoft application or service that is accessed through the M365 Copilot APIs;

13. Redistribute or resell, or sublicense access to, the M365 Copilot APIs, any data obtained using the M365 Copilot APIs, or any other Microsoft Offering accessed through the M365 Copilot APIs; or

14. Misrepresent expressly, by omission, or implication, the need for users to obtain a valid license to the Microsoft application or service that is accessed through the M365 Copilot APIs;

15. Falsify or alter any unique referral identifier in, or assigned to an Application, or otherwise obscure or alter the source of queries coming from an Application to hide a violation of this agreement; or

16. Use the M365 Copilot APIs or allow any user to use the Application in a way that violates applicable law, including:

    a. Illegal activities, such as child pornography, gambling, piracy, violating copyright, trademark or other intellectual property laws.

    b. Intending to exploit minors in any way.

    c. Accessing or authorizing anyone to access the Microsoft APIs from an embargoed country as prohibited by the U.S. government.

    d. Threatening, stalking, defaming, defrauding, degrading, victimizing or intimidating anyone for any reason.

    e. Violating applicable privacy laws and regulations.

17. Use the M365 Copilot APIs in a way that could create, in Microsoft's sole discretion and judgment, an unreasonable risk to Customers, your customers or users, from a security or privacy perspective.

18. You may not create an Application that is not human directed, such as bots, multiplexing or similar.

## 4. Security

You warrant that your Application has been developed to operate with M365 Copilot APIs content in a secure manner. Your network, operating system and the software of your servers, databases, and computer systems (collectively, "**Systems**") must be properly configured to securely operate your Application and store content collected through your Application (including the M365 Copilot APIs content). Your Application must use reasonable security measures to protect the private data of your users.

We may use technology to detect, prevent or limit the impact of any issues caused by your Application (before, after, or instead of suspension of your access). This may include, for example, (i) filtering to stop spam, (ii) performing security or privacy monitoring regarding scraping, denial of service attacks, user impersonation, application impersonation, or illicit consent grant(s), or (iii) limiting or terminating your access to the M365 Copilot APIs .

You will permit Microsoft reasonable access to your Application for purposes of monitoring compliance with these Terms. You will respond to any questions by Microsoft about your compliance with these Terms.

Without limiting the foregoing, upon request by Microsoft, you will provide us (or an independent auditor acting on our behalf) with up to two full-feature client account-level instances to access your Application (and/or other materials relating to your use of the M365 Copilot APIs) as reasonably requested by us to verify your compliance with these Terms (including, in particular, your security and privacy obligations under these Terms).

We may restrict or terminate access to the M365 Copilot APIs or perform an audit (including by hiring an independent auditor acting on our behalf) of your Application if you fail to provide adequate information and materials (including up to two full-featured instances of your Application) to verify your compliance with these Terms.

You must have a process to respond to any vulnerabilities in your Application, and in the case of any vulnerabilities related to your Application's connection to the Microsoft APIs discovered by you or reported to you by a third party, you agree that you will provide vulnerability details to the Microsoft Security Response Center (<secure@microsoft.com>).

In the event of a data breach by you resulting from any aspect of the Microsoft APIs involving your Application or any data collected through your Application, you will promptly contact the Microsoft Security Response Center (<secure@microsoft.com>) and provide details of the data breach. You agree to refrain from making public statements (e.g., press, blogs, social media, bulletin boards, etc.) without prior written and express permission from Microsoft in each instance as it relates to the M365 Copilot APIs.

The rights and requirements of this section -- **4. Security** -- will survive for five (5) years following any termination of these API Terms.

## 5. Your Compliance with Applicable Privacy and Data Protection Laws

You must comply with all laws and regulations applicable to your use of the data accessed through the M365 Copilot APIs, including without limitation laws related to privacy, biometric data, data protection and confidentiality of communications. Your use of the M365 Copilot APIs is conditioned upon implementing and maintaining appropriate protections and measures for your service and Application, and that includes your responsibility to the data obtained through the use of the M365 Copilot APIs . For the data you obtained through the M365 Copilot APIs, you must:

a) obtain all necessary consents before processing data and obtain additional consent if the processing changes ("Data Access Consents"),

b) In the event you're storing data locally, ensure that data is kept up to date and implement corrections, restrictions to data, or the deletion of data as reflected in the data obtained through your use of the Microsoft Copilot APIs,

c) implement proper retention and deletion policies, including deleting all data then your user abandons your Application, uninstalls your Application, closes its account with you, or abandons the account,

d) maintain and comply with a written statement available to Customers and users that describes your privacy practices regarding data and information you collect and use ("Your Privacy Statement"), and that statement must be as protective as the [Microsoft Privacy Statement](https://privacy.microsoft.com/privacystatement), and

e) When your Application allows end users to sign in with a Microsoft account and Microsoft is not providing the user interface for the sign in, your Privacy Statement must provide a link to <https://account.live.com/consent/Manage> and/or [https://myapps.microsoft.com](https://myapps.microsoft.com/), or such other location(s) as we may specify from time to time, with a clear indication that Customers and end users can go to the Microsoft site(s) to revoke Data Access Consents at any time. If Customers or end users must take additional steps to disable your Application's access to Customer or end user data, then Your Privacy Statement must clearly indicate to Customers and end users the additional steps required to disable access.

Nothing in the Agreement shall be construed as creating a joint controller or processor-subprocessor relationship between you and Microsoft.

## 6. Changes to the M365 Copilot APIs Terms

**WE MAY CHANGE OR DISCONTINUE THE AVAILABILITY OF SOME OR ALL OF THE M365 Copilot APIs AT ANY TIME FOR ANY REASON WITH OR WITHOUT NOTICE.** Such changes may include, without limitation, removing or limiting access to specific API(s), requiring fees or setting and enforcing limits on your use of additions to the M365 Copilot APIs. We may also impose limits on certain features and services or restrict your access to some or all of the M365 Copilot APIs. We may release subsequent versions of the M365 Copilot APIs and require that you use those subsequent versions, at your sole cost and expense.

**WE MAY MODIFY THESE TERMS AT ANY TIME, WITH OR WITHOUT PRIOR NOTICE TO YOU. YOUR CONTINUED USE OF THE M365 Copilot APIs** **FOLLOWING THE RELEASE OF A SUBSEQUENT VERSION OF THESE TERMS WILL BE DEEMED YOUR ACCEPTANCE OF ANY MODIFICATIONS TO THESE TERMS.**

## 7. Feedback

If you give feedback about the M365 Copilot APIs to Microsoft, you give to Microsoft, without charge, the right to use, share and commercialize your feedback in any way and for any purpose. You will not give feedback that is subject to a license that requires Microsoft to license its software or documentation to third parties because Microsoft includes your feedback in them. These rights survive these Terms.

## 8. Confidentiality

You may be given access to certain non-public information, software, and specifications relating to the M365 Copilot APIs ("**Confidential Information**"), which is confidential and proprietary to Microsoft. You may use Confidential Information only as necessary in exercising your rights granted under these Terms. You may not disclose any Confidential Information to any third party without Microsoft's prior written consent. You agree that you will protect any Confidential Information from unauthorized use, access, or disclosure in the same manner that you would use to protect your own confidential and proprietary information.

## 9. Disclaimer of Warranties, Limitation of Liability and Indemnity

a) **Disclaimer of Warranties**

**WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, GUARANTEES OR CONDITIONS WITH RESPECT TO YOUR USE OF THE M365 Copilot APIs. YOU UNDERSTAND THAT USE OF THE M365 Copilot APIs IS AT YOUR OWN RISK AND THAT WE PROVIDE THE M365 Copilot APIs ON AN "AS IS" BASIS "WITH ALL FAULTS" AND "AS AVAILABLE" TO THE EXTENT PERMITTED UNDER YOUR LOCAL LAW, WE EXCLUDE ANY IMPLIED WARRANTIES, INCLUDING FOR MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, AND NON-INFRINGEMENT. YOU MAY HAVE CERTAIN RIGHTS UNDER YOUR LOCAL LAW. NOTHING IN THESE TERMS ARE INTENDED TO AFFECT THOSE RIGHTS, IF THEY ARE APPLICABLE. WE DO NOT GUARANTEE THE M365 Copilot APIs WILL FUNCTION WITHOUT INTERRUPTION OR ERRORS IN FUNCTIONING. IN PARTICULAR, THE OPERATION OF THE M365 Copilot APIs MAY BE INTERRUPTED DUE TO MAINTENANCE, UPDATES, OR SYSTEM OR NETWORK FAILURES. WE DISCLAIM ALL LIABILITY FOR DAMAGES CAUSED BY ANY SUCH INTERRUPTION, ERRORS IN FUNCTIONING, OR THAT DATA LOSS WILL NOT OCCUR.**

b) **Limitation of Liability**

**IF YOU HAVE ANY BASIS FOR RECOVERING DAMAGES (INCLUDING BREACH OF THESE TERMS), YOU AGREE THAT YOUR EXCLUSIVE REMEDY IS TO RECOVER, FROM MICROSOFT OR ANY AFFILIATES, RESELLERS, DISTRIBUTORS, SUPPLIERS (AND RESPECTIVE EMPLOYEES, SHAREHOLDERS, OR DIRECTORS) AND VENDORS, ONLY DIRECT DAMAGES UP TO USD $5.00 COLLECTIVELY. YOU CAN'T RECOVER ANY OTHER DAMAGES OR LOSSES, INCLUDING, WITHOUT LIMITATION, DIRECT, CONSEQUENTIAL, LOST PROFITS, SPECIAL, INDIRECT, INCIDENTAL, OR PUNITIVE.** These limitations and exclusions apply even if this remedy doesn't fully compensate you for any losses or fails of its essential purpose or if we knew or should have known about the possibility of the damages. To the maximum extent permitted by law, these limitations and exclusions apply to any claims related to these Terms or your use of the M365 Copilot APIs.

c) **Indemnification**

You will defend, hold harmless, and indemnify Microsoft from any claim or action brought by a third party, including all damages, liabilities, costs and expenses, and reasonable attorney fees, to the extent resulting from, alleged to have resulted from, or in connection with your breach of the obligations herein or infringement of Microsoft's or third party's intellectual property.

d) **No Injunctive Relief**

In no event shall you seek or be entitled to rescission, injunctive or other equitable relief, or to enjoin or restrain the operation of the M365 Copilot APIs , content or other material used or displayed through the current Microsoft website or successor site.

e) **No Third-Party Beneficiaries**

There are no third-party beneficiaries to this Agreement.

f) **Termination**

   a) We may suspend or immediately terminate these Terms, any rights granted herein, and/or your license to the M365 Copilot APIs , in our sole discretion at any time, for any reason. You may terminate these Terms at any time by ceasing your access to the M365 Copilot APIs.

   b) Upon termination, all licenses granted herein immediately expire and you must cease use of the M365 Copilot APIs. You must also comply with your customers instruction to return or delete any data accessed or obtained through the M365 Copilot APIs, unless expressly permitted by Microsoft or prohibited by law. Neither party will be liable to the other for any damages resulting solely from termination of these Terms.

## 10. General Terms

### Applicable Law

a) **United States**.

1. If you reside in the United States, Washington state law governs the interpretation of these M365 Copilot API Terms and applies to claims for breach of it, regardless of conflict of laws principles. The laws of the state where you live govern all other claims, including claims under state consumer protection laws, unfair competition laws, and in tort.

2. **Outside the United States**.

If you reside in any other country, the laws of that country apply.

b) **Support.**

Because the M365 Copilot APIs are provided "as is," we may not provide support services for them. You are solely responsible for the quality of your Application and providing support for your Application.

c) **Assignment and Delegation.**

You may not assign or delegate any rights or obligations under these Terms, including in connection with a change of control. Any purported assignment and delegation shall be ineffective. We may freely assign or delegate all rights and obligations under these Terms, fully or partially without notice to you.

d) **Reservation of Rights.**

All rights not expressly granted herein are reserved by Microsoft. You acknowledge that all intellectual property rights within the M365 Copilot APIs remain the property of Microsoft and nothing within these Terms will act to transfer any of these intellectual property rights to you.

e) **Microsoft and you are independent contractors.**

Nothing in this Agreement shall be construed as creating an employer-employee relationship, processor-subprocessor relationship, a partnership, or a joint venture between the parties.

f) **No Waiver.**

Either party's failure to act with respect to a breach of these Terms does not waive either party's right to act with respect to that breach or subsequent similar or other breaches.

g) **Survival.**

Sections of these Terms that, by their terms, require performance after the termination or expiration of these Terms will survive, such as, for example, the rights and requirements of section 5. Security.

h) **Modifications.**

We may modify these Terms at any time with or without individual notice to you. Any modifications will be effective upon your continued use of the M365 Copilot APIs.

i) **Entire Agreement.**

These Terms and any documents incorporated into these Terms by reference, constitute the entire agreement between you and us regarding the M365 Copilot APIs and supersede all prior agreements and understandings, whether written or oral, or whether established by custom, practice, policy or precedent, with respect to the subject matter of these Terms. If any provision of these Terms is found to be illegal, void, or unenforceable, the unenforceable provision will be modified so as to render it enforceable to the maximum extent possible.
