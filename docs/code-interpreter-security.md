---
title: Code Interpreter security architecture in Microsoft 365 Copilot
description: Learn about the security architecture for the code interpreter capability in Microsoft 365 Copilot and agents.
#customer intent: As a developer, I want to understand the security and governance features for code interpreter.
author: Lauragra
ms.author: lauragra
ms.reviewer: lauragra
ms.date: 11/19/2025
ms.topic: concept-article
---

# Code interpreter security architecture

Code interpreter is an advanced feature available in Microsoft 365 Copilot and agents built with Microsoft 365 Copilot that solves complex tasks via Python code. It uses the reasoning model to write and run code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. Large language models (LLMs) generate all code, and the system runs it in a secure, isolated environment. Microsoft doesn't train foundation models on customer data. For more information, see [Privacy and protections](/copilot/microsoft-365/microsoft-365-copilot-privacy).

This article describes the comprehensive security and governance framework that code interpreter uses to protect customer data and infrastructure from malicious code.

## Architecture and isolation

### Isolated environment

Code interpreter in Copilot and agents runs within isolated virtual machines (VMs) hosted on Microsoft Azure. Each session is separated from other sessions and from core Copilot services. This separation minimizes the risk of cross-session contamination or unauthorized data access.

### Session lifecycle management

Every time code interpreter runs code, it starts with a fresh VM. The system destroys the VM after the session ends. The VM is deleted and no data is persisted or stored. This design prevents persistent storage of code or data to reduce the risk of data leakage.

### Network and resource controls

Code interpreter VMs enforce strict network controls. They don't allow any inbound or outbound traffic. This restriction prevents code from communicating with external servers and prevents the exfiltration of data. Resource quotas limit time, CPU, memory, and disk usage to mitigate denial-of-service (DoS) risks and ensure fair resource allocation.

## Security and governance

### Responsible AI (RAI) governance

Code interpreter adheres to the Microsoft RAI policies. These policies require rigorous threat modeling, continuous monitoring, and proactive risk mitigation. Regular security reviews and updates help safeguard against emerging threats and vulnerabilities.

### Data residency and privacy protections

The environments in which code interpreter runs code comply with the Microsoft data residency commitments. Customer data remains within specified geographic boundaries, as governed by Microsoft 365 data residency policies, and follows the Microsoft 365 data residency terms. This compliance ensures regulatory adherence and enhances privacy.

For more information about privacy protections, see [Data, Privacy, and Security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy).

### Microsoft Azure infrastructure security

Microsoft Azure infrastructure enforces robust security controls at hardware and software levels. VMs use security-hardened images, and access is limited to authorized processes. Role-based access control (RBAC), encryption at rest and in transit, and continuous vulnerability scanning are standard practices.

### Runtime safeguards and monitoring

All code that code interpreter runs is monitored and scanned in real time for malicious patterns. Suspicious activities - such as attempts to access restricted files or escalate privileges - trigger an immediate termination of the session and alert security teams. Sandboxing ensures any impact is contained and the environment is destroyed after use.

### Policy enforcement and compliance

Copilot and its agents are governed by comprehensive security policies aligned with industry standards and compliance frameworks, including ISO 27001, SOC 2, and General Data Protection Regulation (GDPR). These policies help maintain customer data security and system integrity.

## Related content

- [Add the code interpreter capability to your agent](code-interpreter.md)
- [Responsible AI validation](rai-validation.md)
