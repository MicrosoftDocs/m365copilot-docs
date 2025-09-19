---
title: "TypeSpec agents for Microsoft 365 Copilot scenarios"
description: "End-to-end scenarios using TypeSpec from basic to advanced scenarios, including capabilities, authentication, and real-world examples."
---

# How to create TypeSpec agents for Microsoft 365 Copilot

This guide provides complete examples of creating TypeSpec agents for Microsoft 365 Copilot, from simple basic agents to complex implementations with multiple capabilities and authentication methods.

## 1. Basic Agent with No Capabilities

**Use Case**: A simple agent that provides basic information and greetings without any external integrations or special capabilities.

**What it does**: This agent can answer simple questions, provide general information, and have basic conversations. It doesn't need to access external APIs, search the web, or use any Microsoft 365 services.

### [main.tsp](#tab/main.tsp)

```typespec
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;

@agent({
  name: "Basic Helper Agent",
  description: "A simple agent that provides basic information and assistance"
})
@instructions("""
  You are a helpful assistant that provides basic information and support. 
  Be friendly, professional, and helpful in all interactions. Provide clear, 
  concise answers to user questions. If you don't know something, be honest 
  about your limitations and suggest alternative ways to find the information.
""")
namespace BasicHelperAgent {
  // No capabilities defined - agent relies only on built-in conversational abilities
}
```

---

## 2. Agent with Multiple Capabilities

**Use Case**: A knowledge worker assistant that can search the web for information, access an organization's SharePoint content, and find information about colleagues in the organization.

**What it does**: This agent helps knowledge workers by combining web search for external information, file access for document retrieval, and people search for finding colleagues and their contact information. Perfect for research tasks and collaboration scenarios.

### [main.tsp](#tab/main.tsp)

```typespec
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;

@agent({
  name: "Knowledge Worker Assistant",
  description: "An intelligent assistant that helps with research, file management, and finding colleagues"
})
@instructions("""
  You are a knowledgeable research assistant specialized in helping knowledge workers 
  find information efficiently. You can search the web for external research, access 
  SharePoint documents for organizational content, and help locate colleagues within 
  the organization. Always provide comprehensive research results, cite your sources, 
  and suggest additional resources when relevant. When searching for people, respect 
  privacy and only share publicly available organizational information.
""")
namespace KnowledgeWorkerAgent {
  // Web search capability for external research
  op webSearch is AgentCapabilities.WebSearch<Sites = [
    {
      url: "https://learn.microsoft.com";
    },
    {
      url: "https://docs.microsoft.com";
    }
  ]>;

  // OneDrive and SharePoint access for document retrieval
  op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
    ItemsByUrl = [
      { url: "https://contoso.sharepoint.com/sites/IT" }
    ]
  >;

  // People search for finding colleagues
  op people is AgentCapabilities.People;
}
```

---

## 3. Simple Agent with Anonymous API Action

**Use Case**: A facilities management agent that helps employees report and track maintenance issues using a public repairs API.

**What it does**: This agent allows employees to report facility issues (broken equipment, lighting problems, HVAC issues) and check the status of existing repair requests. The repairs API is publicly accessible and doesn't require authentication, making it easy for anyone to report issues.

#### [main.tsp](#tab/main.tsp)

```typespec
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "Facilities Repair Agent",
  description: "Report and track facility maintenance issues and repair requests"
})
@instructions("""
  You are a facilities management assistant that helps employees report and track 
  maintenance issues. You can help users submit new repair requests by gathering 
  all necessary details (description, location, category, priority) and submit 
  them to the facilities team. You can also check the status of existing repair 
  tickets and provide updates on progress. Always be helpful in categorizing 
  issues correctly and setting appropriate priority levels based on safety and 
  business impact.
""")
namespace FacilitiesRepairAgent {
  op reportIssue is RepairsAPI.reportIssue;
  op getRepairStatus is RepairsAPI.getRepairStatus;
  op getOpenRepairs is RepairsAPI.getOpenRepairs;
}
```

#### [actions.tsp](#tab/actions.tsp)

```typespec
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "Facilities Repair API",
    descriptionForModel: "API for reporting and tracking facility maintenance issues and repairs",
    descriptionForHuman: "Use this API to report facility issues and check repair status"
})
@server("https://repairs.contoso.com", "Facilities Repair API")
namespace RepairsAPI {
  @route("/repairs")
  @post
  @action
  op reportIssue(
    @body issue: RepairIssueRequest
  ): RepairIssueResponse;

  @route("/repairs/{ticketId}")
  @get
  @action
  op getRepairStatus(
    @path ticketId: string
  ): RepairStatusResponse;

  @route("/repairs")
  @get
  @action
  op getOpenRepairs(
    @query location?: string,
    @query priority?: "low" | "medium" | "high" | "urgent"
  ): RepairListResponse;

  model RepairIssueRequest {
    title: string;
    description: string;
    location: string;
    category: "electrical" | "plumbing" | "hvac" | "security" | "cleaning" | "other";
    priority: "low" | "medium" | "high" | "urgent";
    reportedBy: string;
  }

  model RepairIssueResponse {
    ticketId: string;
    status: "submitted" | "assigned" | "in-progress" | "completed" | "cancelled";
    estimatedCompletion?: string;
    assignedTechnician?: string;
  }

  model RepairStatusResponse {
    ticketId: string;
    title: string;
    status: "submitted" | "assigned" | "in-progress" | "completed" | "cancelled";
    priority: "low" | "medium" | "high" | "urgent";
    createdDate: string;
    lastUpdated: string;
    assignedTechnician?: string;
    estimatedCompletion?: string;
    completionNotes?: string;
  }

  model RepairListResponse {
    repairs: RepairStatusResponse[];
    totalCount: int32;
  }
}
```

---

## 4. Advanced Agent with API Key Authentication

**Use Case**: A facilities management agent for supervisors and facility managers who need advanced access to the repairs system including creating work orders, assigning technicians, and accessing detailed reports.

**What it does**: This agent provides advanced facilities management capabilities for authorized personnel. Supervisors can create detailed work orders, assign specific technicians, update repair priorities, access cost information, and generate facility maintenance reports. The API key authentication ensures only authorized staff can perform these administrative functions.

#### [main.tsp](#tab/main.tsp)

```typespec
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "Facilities Management Pro Agent",
  description: "Advanced facilities management for supervisors with work order creation, technician assignment, and reporting capabilities"
})
@instructions("""
  You are an advanced facilities management assistant designed for supervisors 
  and facility managers. You have access to comprehensive work order management 
  capabilities including creating detailed work orders, assigning technicians 
  based on expertise and availability, updating priorities based on business 
  impact, and generating detailed facility reports. Always prioritize safety-critical 
  issues, consider resource allocation efficiently, and provide data-driven 
  insights for facility maintenance planning. Ensure all work orders include 
  complete details for proper execution.
""")
namespace FacilitiesManagementAgent {
  op createWorkOrder is AdvancedRepairsAPI.createWorkOrder;
  op assignTechnician is AdvancedRepairsAPI.assignTechnician;
  op updateWorkOrder is AdvancedRepairsAPI.updateWorkOrder;
  op getFacilityStatusReport is AdvancedRepairsAPI.getFacilityStatusReport;
  op getAvailableTechnicians is AdvancedRepairsAPI.getAvailableTechnicians;
}
```

#### [actions.tsp](#tab/actions.tsp)

```typespec
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "Advanced Facilities Management API",
    descriptionForModel: "Comprehensive facilities management API for supervisors with work order management, technician assignment, and detailed reporting",
    descriptionForHuman: "Use this API to manage work orders, assign technicians, and generate facility reports"
})
@server("https://repairs-pro.contoso.com", "Advanced Facilities API")
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "X-Facilities-API-Key">)
namespace AdvancedRepairsAPI {
  @route("/work-orders")
  @post
  @action
  op createWorkOrder(
    @body workOrder: WorkOrderRequest
  ): WorkOrderResponse;

  @route("/work-orders/{orderId}/assign")
  @post
  @action
  op assignTechnician(
    @path orderId: string,
    @body assignment: TechnicianAssignment
  ): AssignmentResponse;

  @route("/work-orders/{orderId}")
  @patch
  op updateWorkOrder(
    @path orderId: string,
    @body update: WorkOrderUpdate
  ): WorkOrderResponse;

  @route("/reports/facility-status")
  @get
  @action
  op getFacilityStatusReport(
    @query location?: string,
    @query dateRange?: string
  ): FacilityStatusReport;

  @route("/technicians")
  @get
  @action
  op getAvailableTechnicians(
    @query specialty?: string,
    @query shift?: "day" | "evening" | "night"
  ): TechnicianListResponse;

  model WorkOrderRequest {
    title: string;
    description: string;
    location: string;
    category: "electrical" | "plumbing" | "hvac" | "security" | "cleaning" | "structural" | "landscaping";
    priority: "low" | "medium" | "high" | "urgent" | "emergency";
    requestedBy: string;
    budgetCode?: string;
    requiredSkills?: string[];
    estimatedHours?: int32;
    scheduledDate?: string;
  }

  model WorkOrderResponse {
    orderId: string;
    status: "created" | "assigned" | "in-progress" | "on-hold" | "completed" | "cancelled";
    assignedTechnician?: string;
    estimatedCost?: float64;
    actualCost?: float64;
    createdDate: string;
    completionDate?: string;
  }

  model TechnicianAssignment {
    technicianId: string;
    scheduledStart: string;
    estimatedDuration: int32;
    notes?: string;
  }

  model AssignmentResponse {
    assignmentId: string;
    technicianName: string;
    scheduledStart: string;
    status: "assigned" | "confirmed" | "in-progress";
  }

  model WorkOrderUpdate {
    status?: "in-progress" | "on-hold" | "completed" | "cancelled";
    priority?: "low" | "medium" | "high" | "urgent" | "emergency";
    notes?: string;
    actualCost?: float64;
    completionNotes?: string;
  }

  model FacilityStatusReport {
    location: string;
    totalWorkOrders: int32;
    completedWorkOrders: int32;
    pendingWorkOrders: int32;
    averageCompletionTime: float64;
    totalCost: float64;
    topIssueCategories: CategoryCount[];
  }

  model CategoryCount {
    category: string;
    count: int32;
  }

  model TechnicianListResponse {
    technicians: TechnicianInfo[];
  }

  model TechnicianInfo {
    technicianId: string;
    name: string;
    specialties: string[];
    currentShift: "day" | "evening" | "night";
    availabilityStatus: "available" | "busy" | "off-duty";
    currentWorkOrders: int32;
  }
}
```

---

## 5. Complex Agent with OAuth2 and Multiple Microsoft Graph Capabilities

**Use Case**: An executive assistant agent that provides comprehensive productivity and collaboration support by integrating deeply with Microsoft 365 services including email management, calendar scheduling, team collaboration, and document management.

**What it does**: This sophisticated agent serves as a digital executive assistant that can manage complex workflows across Microsoft 365. It can read and analyze emails to identify action items, schedule meetings with conflict resolution, access and summarize documents from SharePoint and OneDrive, coordinate with Teams for project collaboration, and provide insights about organizational relationships. The OAuth2 authentication ensures secure access to user data with appropriate permissions.

#### [main.tsp](#tab/main.tsp)

```typespec
import "@typespec/http";
import "@typespec/openapi3";
import "@microsoft/typespec-m365-copilot";
import "./actions.tsp";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Agents;
using TypeSpec.M365.Copilot.Actions;

@agent({
  name: "Executive Assistant Pro",
  description: "Comprehensive executive assistant with advanced Microsoft 365 integration for email management, calendar coordination, team collaboration, and document insights"
})
@instructions("""
  You are a sophisticated executive assistant with comprehensive access to Microsoft 365 
  services. You excel at managing complex executive workflows including email triage 
  and analysis, intelligent calendar management with conflict resolution, document 
  summarization and insights, and cross-team collaboration coordination. You can 
  identify action items from emails, suggest optimal meeting times, provide executive 
  briefings from document analysis, and facilitate team communications. Always maintain 
  confidentiality, prioritize based on business impact and executive preferences, and 
  provide proactive insights to optimize productivity and decision-making.
""")
namespace ExecutiveAssistantAgent {
  // Microsoft 365 capabilities for collaboration
  op oneDriveAndSharePoint is AgentCapabilities.OneDriveAndSharePoint<
    ItemsByUrl = [
      { url: "https://contoso.sharepoint.com/sites/ExecutiveTeam" },
      { url: "https://contoso.sharepoint.com/sites/BoardMaterials" }
    ]
  >;

  op email is AgentCapabilities.Email<
    Folders = [
      { folderId: "Inbox" },
      { folderId: "VIP" },
      { folderId: "Board-Communications" }
    ]
  >;

  op teamsMessages is AgentCapabilities.TeamsMessages;
  op people is AgentCapabilities.People;

  // Microsoft Graph API operations
  op getEmailInsights is MicrosoftGraphExecutive.getEmailInsights;
  op extractActionItems is MicrosoftGraphExecutive.extractActionItems;
  op categorizeEmails is MicrosoftGraphExecutive.categorizeEmails;
  op findOptimalMeetingTime is MicrosoftGraphExecutive.findOptimalMeetingTime;
  op resolveMeetingConflicts is MicrosoftGraphExecutive.resolveMeetingConflicts;
  op getMeetingPreparationBriefs is MicrosoftGraphExecutive.getMeetingPreparationBriefs;
  op getCollaborationInsights is MicrosoftGraphExecutive.getCollaborationInsights;
  op getManagerInsights is MicrosoftGraphExecutive.getManagerInsights;
  op generateDocumentSummary is MicrosoftGraphExecutive.generateDocumentSummary;
  op getTrendingDocuments is MicrosoftGraphExecutive.getTrendingDocuments;
}
```

#### [actions.tsp](#tab/actions.tsp)

```typespec
import "@typespec/http";
import "@microsoft/typespec-m365-copilot";

using TypeSpec.Http;
using TypeSpec.M365.Copilot.Actions;

@service
@actions(#{
    nameForHuman: "Microsoft Graph Executive Services",
    descriptionForModel: "Advanced Microsoft Graph integration for executive-level productivity, calendar management, email analysis, and collaboration insights",
    descriptionForHuman: "Use this API for advanced email management, intelligent calendar scheduling, and executive productivity insights"
})
@server("https://graph.microsoft.com", "Microsoft Graph API")
@useAuth(OAuth2Auth<[
  OAuthFlow<AuthorizationCodeFlow> & {
    authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
    tokenUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    scopes: {
      "https://graph.microsoft.com/User.Read": "Read user profile";
      "https://graph.microsoft.com/Mail.ReadWrite": "Read and manage email";
      "https://graph.microsoft.com/Calendars.ReadWrite": "Manage calendar and meetings";
      "https://graph.microsoft.com/Contacts.ReadWrite": "Access and manage contacts";
      "https://graph.microsoft.com/Files.ReadWrite.All": "Access all files";
      "https://graph.microsoft.com/Sites.ReadWrite.All": "Access SharePoint sites";
      "https://graph.microsoft.com/People.Read.All": "Read organization directory";
      "https://graph.microsoft.com/Reports.Read.All": "Read usage reports";
      "https://graph.microsoft.com/TeamworkTag.ReadWrite": "Manage Teams tags";
    };
  }
]>)
namespace MicrosoftGraphExecutive {
  // Email Management and Analysis
  @route("/me/messages/insights")
  @get
  @action
  op getEmailInsights(
    @query timeRange?: "today" | "week" | "month",
    @query priority?: "high" | "medium" | "low"
  ): EmailInsightsResponse;

  @route("/me/messages/action-items")
  @get
  @action
  op extractActionItems(
    @query folderId?: string,
    @query daysBack?: int32
  ): ActionItemsResponse;

  @route("/me/messages/bulk-categorize")
  @post
  @action
  op categorizeEmails(
    @body request: EmailCategorizationRequest
  ): EmailCategorizationResponse;

  // Advanced Calendar Management
  @route("/me/calendar/intelligent-scheduling")
  @post
  @action
  op suggestMeetingTimes(
    @body request: IntelligentSchedulingRequest
  ): MeetingTimeResponse;

  @route("/me/calendar/conflict-resolution")
  @post
  @action
  op resolveScheduleConflicts(
    @body request: ConflictResolutionRequest
  ): ConflictResolutionResponse;

  @route("/me/calendar/meeting-briefs")
  @get
  @action
  op getMeetingBriefs(
    @query timeRange: "today" | "tomorrow" | "week",
    @query includePreparation?: boolean
  ): MeetingBriefsResponse;

  // Collaboration and Team Insights
  @route("/me/collaboration-insights")
  @get
  @action
  op getCollaborationInsights(
    @query analysisDepth?: "basic" | "detailed",
    @query timeRange?: "month" | "quarter"
  ): CollaborationInsightsResponse;
    @route("/me/calendar/intelligent-scheduling")
    @post
    @action
    op findOptimalMeetingTime(
      @body request: IntelligentSchedulingRequest
    ): MeetingTimeResponse;

    @route("/me/calendar/conflicts/resolve")
    @post
    @action
    op resolveMeetingConflicts(
      @body request: ConflictResolutionRequest
    ): ConflictResolutionResponse;

    @route("/me/calendar/preparation-briefs")
    @get
    @action
    op getMeetingPreparationBriefs(
      @query upcomingDays?: int32
    ): MeetingBriefsResponse;

    // People and Relationship Insights
    @route("/me/people/collaboration-insights")
    @get
    @action
    op getCollaborationInsights(
      @query personId?: string,
      @query timeRange?: "week" | "month" | "quarter"
    ): CollaborationInsightsResponse;

  @route("/me/manager-insights")
  @get
  @action
  op getManagerInsights(): ManagerInsightsResponse;

  // Document and Content Management
  @route("/me/documents/executive-summary")
  @post
  @action
  op generateDocumentSummary(
    @body request: DocumentSummaryRequest
  ): DocumentSummaryResponse;

  @route("/me/files/trending")
  @get
  @action
  op getTrendingDocuments(
    @query timeRange?: "week" | "month",
    @query includeShared?: boolean
  @route("/me/files/trending")
  @get
  @action
  op getTrendingDocuments(
    @query timeRange?: "week" | "month",
    @query includeShared?: boolean
  ): TrendingDocumentsResponse;

  // Response Models
  model EmailInsightsResponse {
    totalEmails: int32;
    unreadCount: int32;
    highPriorityCount: int32;
    averageResponseTime: float64;
    topSenders: SenderInsight[];
    sentimentAnalysis: SentimentSummary;
    actionItemsCount: int32;
  }

  model SenderInsight {
    senderEmail: string;
    senderName: string;
    emailCount: int32;
    averagePriority: string;
  }

  model SentimentSummary {
    positive: int32;
    neutral: int32;
    negative: int32;
    urgent: int32;
  }

  model ActionItemsResponse {
    actionItems: ActionItem[];
    totalCount: int32;
  }

  model ActionItem {
    emailId: string;
    subject: string;
    sender: string;
    extractedAction: string;
    dueDate?: string;
    priority: "high" | "medium" | "low";
    category: "meeting" | "review" | "approval" | "response" | "task";
  }

  model EmailCategorizationRequest {
    messageIds: string[];
    autoApplyRules: boolean;
  }

  model EmailCategorizationResponse {
    categorizedEmails: CategorizedEmail[];
    newRulesCreated: EmailRule[];
  }

  model CategorizedEmail {
    messageId: string;
    suggestedCategory: string;
    confidence: float64;
    appliedActions: string[];
  }

  model EmailRule {
    ruleId: string;
    name: string;
    criteria: string;
    actions: string[];
  }

  model IntelligentSchedulingRequest {
    attendeeEmails: string[];
    meetingDuration: int32;
    preferredTimeSlots: string[];
    meetingType: "in-person" | "virtual" | "hybrid";
    urgency: "immediate" | "this-week" | "next-week" | "flexible";
  }

  model MeetingTimeResponse {
    suggestedTimes: MeetingTimeSuggestion[];
    conflictAnalysis: ConflictAnalysis;
    attendeeAvailability: AttendeeAvailability[];
  }

  model MeetingTimeSuggestion {
    startTime: string;
    endTime: string;
    confidence: float64;
    availableAttendees: int32;
    conflictingAttendees: int32;
    roomSuggestions?: RoomSuggestion[];
  }

  model ConflictAnalysis {
    totalConflicts: int32;
    conflictsByAttendee: AttendeeConflict[];
    alternativeOptions: int32;
  }

  model AttendeeConflict {
    attendeeEmail: string;
    conflictingMeetings: string[];
    flexibilityScore: float64;
  }

  model AttendeeAvailability {
    attendeeEmail: string;
    attendeeName: string;
    availability: "available" | "busy" | "tentative" | "out-of-office";
    nextAvailableSlot?: string;
  }

  model RoomSuggestion {
    roomEmail: string;
    roomName: string;
    capacity: int32;
    location: string;
    amenities: string[];
  }

  model ConflictResolutionRequest {
    conflictingMeetingIds: string[];
    resolutionStrategy: "reschedule" | "decline" | "delegate" | "shorten";
    priorityMeetingId?: string;
  }

  model ConflictResolutionResponse {
    resolutionActions: ResolutionAction[];
    updatedMeetings: MeetingUpdate[];
    notificationsSent: string[];
  }

  model ResolutionAction {
    meetingId: string;
    action: "rescheduled" | "declined" | "delegated" | "shortened";
    newTime?: string;
    delegatedTo?: string;
    reasonCode: string;
  }

  model MeetingUpdate {
    meetingId: string;
    originalTime: string;
    newTime?: string;
    status: "confirmed" | "pending" | "cancelled";
  }

  model MeetingBriefsResponse {
    upcomingMeetings: MeetingBrief[];
    totalMeetings: int32;
  }

  model MeetingBrief {
    meetingId: string;
    subject: string;
    startTime: string;
    attendees: string[];
    preparationItems: PreparationItem[];
    relatedDocuments: DocumentReference[];
    backgroundContext: string;
  }

  model PreparationItem {
    type: "review-document" | "prepare-presentation" | "gather-data" | "follow-up";
    description: string;
    priority: "high" | "medium" | "low";
    estimatedTime: int32;
  }

  model DocumentReference {
    documentId: string;
    title: string;
    url: string;
    lastModified: string;
    relevanceScore: float64;
  }

  model CollaborationInsightsResponse {
    collaborationScore: float64;
    frequentCollaborators: CollaboratorInsight[];
    projectInvolvement: ProjectInvolvement[];
    communicationPatterns: CommunicationPattern[];
  }

  model CollaboratorInsight {
    personId: string;
    name: string;
    email: string;
    collaborationFrequency: int32;
    lastInteraction: string;
    relationshipStrength: "strong" | "moderate" | "weak";
    sharedProjects: string[];
  }

  model ProjectInvolvement {
    projectName: string;
    role: string;
    involvementLevel: "lead" | "contributor" | "reviewer";
    lastActivity: string;
    teamMembers: string[];
  }

  model CommunicationPattern {
    channel: "email" | "teams" | "meetings";
    frequency: int32;
    averageResponseTime: float64;
    peakHours: string[];
  }

  model ManagerInsightsResponse {
    teamSize: int32;
    directReports: TeamMemberInsight[];
    teamProductivity: ProductivityMetrics;
    upcomingReviews: ReviewSchedule[];
    teamMeetingInsights: TeamMeetingInsights;
  }

  model TeamMemberInsight {
    employeeId: string;
    name: string;
    position: string;
    workloadScore: float64;
    lastOneOnOne: string;
    nextReviewDate: string;
    recentAchievements: string[];
  }

  model ProductivityMetrics {
    averageEmailResponseTime: float64;
    meetingEfficiencyScore: float64;
    collaborationIndex: float64;
    documentSharing: int32;
    overallTeamHealth: "excellent" | "good" | "needs-attention";
  }

  model ReviewSchedule {
    employeeId: string;
    employeeName: string;
    reviewType: "annual" | "quarterly" | "probationary" | "promotion";
    scheduledDate: string;
    preparationStatus: "not-started" | "in-progress" | "completed";
  }

  model TeamMeetingInsights {
    averageMeetingDuration: float64;
    meetingFrequency: int32;
    attendanceRate: float64;
    actionItemCompletion: float64;
    recommendedOptimizations: string[];
  }

  model DocumentSummaryRequest {
    documentIds: string[];
    summaryType: "executive" | "technical" | "brief";
    focusAreas?: string[];
  }

  model DocumentSummaryResponse {
    summaries: DocumentSummary[];
    keyInsights: string[];
    actionItems: string[];
    relatedDocuments: DocumentReference[];
  }

  model DocumentSummary {
    documentId: string;
    title: string;
    summary: string;
    keyPoints: string[];
    lastModified: string;
    relevanceScore: float64;
  }

  model TrendingDocumentsResponse {
    trendingDocuments: TrendingDocument[];
    categories: TrendingCategory[];
  }

  model TrendingDocument {
    documentId: string;
    title: string;
    url: string;
    viewCount: int32;
    shareCount: int32;
    lastModified: string;
    trendingScore: float64;
    category: string;
  }

  model TrendingCategory {
    categoryName: string;
    documentCount: int32;
    growthRate: float64;
  }
}
```

---

## Summary

These examples demonstrate the progression from simple to complex TypeSpec agents:

1. **Basic Agent**: No capabilities, pure conversational AI
2. **Multi-Capability Agent**: Combines web search, file access, and people search
3. **Simple API Integration**: Anonymous access to external services
4. **Authenticated API Integration**: Secure access with API keys
5. **Complex Microsoft 365 Integration**: Advanced OAuth2 with comprehensive Graph API access

Each example builds upon the previous ones, showing how to add capabilities, authentication, and custom actions to create increasingly sophisticated agents for real-world scenarios.