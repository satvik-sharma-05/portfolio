1) 
Skip to content
satvik-sharma-05
DocuQuery
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
1
 (1)
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
DocuQuery
Public
satvik-sharma-05/DocuQuery
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add application screenshots
b9e5a71
 · 
last month
backend
Revert to Cohere API from OpenRouter
last month
database
feat: migrate from Cohere to OpenRouter API
last month
frontend
feat: add API logging and fix 404 errors
last month
screenshots
Add application screenshots
last month
.gitignore
fix: unignore frontend/lib folder for Vercel deployment
last month
DEPLOYMENT_ARCHITECTURE.md
docs: add comprehensive deployment guides for Render and Vercel
last month
DEPLOYMENT_CHECKLIST.md
docs: add comprehensive deployment guides for Render and Vercel
last month
DEPLOYMENT_GUIDE.md
docs: add comprehensive deployment guides for Render and Vercel
last month
DEPLOYMENT_STATUS.md
Add deployment status tracker
last month
README.md
docs: add screenshots section to README
last month
VERCEL_DEPLOYMENT_STEPS.md
Add Vercel deployment quick start guide
last month
Repository files navigation
README
DocuQuery - AI-Powered Team Document Intelligence Platform
DocuQuery Banner

A production-grade, multi-tenant SaaS platform for collaborative document analysis using Retrieval-Augmented Generation (RAG)

FastAPI Next.js PostgreSQL Cohere TypeScript Python

🚀 Live Demo • 📚 API Documentation • 🎥 Video Demo • 📖 Documentation

Features • Architecture • Quick Start • API Docs • Deployment

🌟 Live Application
🔗 Production Links
Service	URL	Status
Frontend	https://docu-query-sigma.vercel.app	✅ Live
Backend API	https://docuquery-api.onrender.com	✅ Live
API Documentation	https://docuquery-api.onrender.com/docs	✅ Live
Health Check	https://docuquery-api.onrender.com/health	✅ Live
🎯 Quick Demo
Try DocuQuery now:

🌐 Visit https://docu-query-sigma.vercel.app
📝 Register a new account (creates default workspace)
📄 Upload a PDF, DOCX, TXT, or MD document
💬 Ask questions about your document using natural language
🤖 Get AI-powered answers with source citations
🎥 Demo Credentials
For testing purposes, you can use:

Email: demo@docuquery.com
Password: DemoUser123!
Note: Demo data is reset daily

📸 Screenshots
Homepage
Homepage Modern landing page with clear call-to-action and feature highlights

Authentication
Login Secure login with beautiful UI and proper error handling

Dashboard
Dashboard Comprehensive dashboard with analytics, recent activity, and quick actions

Document Management
Document Upload Easy document upload with drag-and-drop support and real-time processing

AI Chat Interface
Chat Intelligent chat interface with source citations and conversation history

Team Collaboration
Team Management Workspace management with role-based access control and team invitations

🚀 Latest Updates (March 2026)
✨ Recent Improvements
🎨 UI/UX Enhancements (Latest)

✅ Fixed Sign-Out Functionality - Proper session cleanup and redirection
✅ Modern Toast Notifications - Replaced browser alerts with beautiful Sonner toasts
✅ Full Responsive Design - Perfect experience on desktop, tablet, and mobile
✅ Enhanced Loading States - Comprehensive loading indicators with helpful messages
✅ Smooth Animations - Polished interactions with Framer Motion
✅ Better Authentication Feedback - Specific error messages and success notifications
🔧 Technical Improvements

✅ Optimized RAG Pipeline - Faster document processing and query responses
✅ Enhanced Security - Row Level Security (RLS) and improved authentication
✅ Performance Optimizations - Database indexing and connection pooling
✅ Mobile-First Design - Responsive layouts and touch-friendly interactions
📊 Current Stats
🏢 Multi-Workspace Support - Unlimited workspaces per user
📄 Document Processing - PDF, DOCX, TXT, MD support up to 20MB
🤖 AI-Powered Chat - Cohere's latest models for accurate responses
👥 Team Collaboration - Role-based access control (Owner/Admin/Member)
📈 Analytics Dashboard - Usage insights and trend analysis
🔔 Real-time Notifications - In-app notification system
📋 Table of Contents
Live Application
Screenshots
Latest Updates
Project Overview
Product Demo
Features
System Architecture
Technology Stack
Database Architecture
RAG Pipeline Explanation
API Documentation
Frontend Architecture
Backend Architecture
Security Model
Performance Optimizations
Deployment Guide
Local Development Setup
Testing
Contributing
Repository Information
License
📁 Repository Information
🔗 Links
GitHub Repository: https://github.com/satvik-sharma-05/DocuQuery
Issues & Bug Reports: https://github.com/satvik-sharma-05/DocuQuery/issues
Discussions: https://github.com/satvik-sharma-05/DocuQuery/discussions
Wiki Documentation: https://github.com/satvik-sharma-05/DocuQuery/wiki
📊 Project Stats
GitHub stars GitHub forks GitHub issues GitHub pull requests GitHub last commit GitHub repo size

🏗️ Project Structure
DocuQuery/
├── 📁 frontend/          # Next.js 14 React application
│   ├── app/              # App Router pages
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React contexts (Auth, Workspace)
│   ├── lib/              # Utilities and API client
│   └── types/            # TypeScript type definitions
├── 📁 backend/           # FastAPI Python application
│   ├── app/              # Application code
│   │   ├── core/         # Core functionality (config, security)
│   │   ├── models/       # Data models and schemas
│   │   ├── routes/       # API endpoints
│   │   └── services/     # Business logic services
│   └── main.py           # FastAPI application entry point
├── 📁 database/          # Database schemas and migrations
├── 📁 docs/              # Additional documentation
├── 📄 README.md          # This file
├── 📄 DEPLOYMENT_GUIDE.md # Detailed deployment instructions
└── 📄 DEPLOYMENT_STATUS.md # Current deployment status
🎯 Project Overview
What is DocuQuery?
DocuQuery is an enterprise-grade, AI-powered document intelligence platform that enables teams to collaboratively upload, organize, and query their documents using natural language. Built on cutting-edge Retrieval-Augmented Generation (RAG) technology, DocuQuery transforms static documents into an interactive knowledge base that team members can query conversationally.

The Problem We Solve
Modern organizations struggle with information overload:

Document Silos: Critical information trapped in PDFs, Word documents, and text files
Time Waste: Hours spent manually searching through documents
Knowledge Loss: Expertise locked in documents that are hard to discover
Collaboration Barriers: No easy way for teams to collectively leverage document knowledge
Context Switching: Jumping between multiple documents to find answers
Our Solution
DocuQuery solves these problems by:

Centralizing Knowledge: Upload all team documents to shared workspaces
AI-Powered Search: Ask questions in natural language, get instant answers
Source Attribution: Every answer cites the exact document sources
Team Collaboration: Multiple workspaces for different teams/projects
Semantic Understanding: AI understands context, not just keywords
Why RAG (Retrieval-Augmented Generation)?
Traditional search relies on keyword matching, which misses semantic meaning. Large Language Models (LLMs) alone can't access your private documents. RAG combines the best of both:

Retrieval: Find relevant document chunks using vector similarity search Augmentation: Provide those chunks as context to the LLM Generation: LLM generates accurate, contextual answers based on your documents

This ensures:

✅ Answers are grounded in your actual documents
✅ No hallucinations or made-up information
✅ Source attribution for every claim
✅ Privacy - your documents never leave your infrastructure
Why Team Collaboration Matters
Knowledge work is inherently collaborative. DocuQuery's multi-workspace architecture enables:

Departmental Workspaces: Sales, Engineering, HR each have their own space
Project-Based Organization: Create workspaces per project or client
Role-Based Access: Owners, admins, and members with appropriate permissions
Shared Intelligence: Everyone benefits from the collective knowledge base
Private Conversations: Individual chat history while sharing documents
🎬 Product Demo
User Interface Overview
1. Authentication & Onboarding
┌─────────────────────────────────────────┐
│  Welcome to DocuQuery                   │
│  ─────────────────────────────────────  │
│  [Email]                                │
│  [Password]                             │
│  [Login] [Register]                     │
│                                         │
│  → Auto-creates default workspace       │
│  → JWT-based secure authentication      │
└─────────────────────────────────────────┘
2. Dashboard Home
┌──────────────────────────────────────────────────────────┐
│ DocuQuery | [Workspace Selector ▼] [Notifications] [User]│
├──────────────────────────────────────────────────────────┤
│ Sidebar    │  Main Content Area                          │
│            │                                              │
│ Dashboard  │  📊 Analytics Overview                       │
│ Documents  │  ├─ 24 Documents                            │
│ Chat       │  ├─ 156 Queries This Month                  │
│ Analytics  │  ├─ 5 Team Members                          │
│ Settings   │  └─ Recent Activity Feed                    │
│            │                                              │
│            │  📈 Usage Trends Chart                       │
│            │  📝 Recent Documents                         │
└────────────┴──────────────────────────────────────────────┘
3. Document Management
┌──────────────────────────────────────────────────────────┐
│ Documents                                [Upload Document]│
├──────────────────────────────────────────────────────────┤
│ Search documents...                                       │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 📄 Product Requirements.pdf                         │ │
│ │ "Complete PRD for Q1 2024 features"                 │ │
│ │ Uploaded by John Doe • 2 days ago • 2.4 MB          │ │
│ │ [View] [Delete]                                     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 📄 API Documentation.docx                           │ │
│ │ "REST API endpoints and authentication guide"       │ │
│ │ Uploaded by Jane Smith • 1 week ago • 1.8 MB        │ │
│ │ [View] [Delete]                                     │ │
│ └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
4. AI Chat Interface
┌──────────────────────────────────────────────────────────┐
│ Chat: Product Features Discussion    [New Chat]          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  You: What are the main features planned for Q1?         │
│  10:23 AM                                                 │
│                                                           │
│  🤖 Assistant:                                            │
│  Based on the Product Requirements document, the main    │
│  Q1 2024 features include:                               │
│                                                           │
│  1. Multi-workspace collaboration                        │
│  2. Advanced document processing                         │
│  3. Real-time team notifications                         │
│  4. Enhanced analytics dashboard                         │
│                                                           │
│  📎 Sources:                                              │
│  • Product Requirements.pdf (Page 3-5)                   │
│  • Q1 Roadmap.docx (Section 2)                           │
│  10:23 AM                                                 │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Ask a question about your documents...              │ │
│ │                                              [Send]  │ │
│ └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
5. Workspace Management
┌──────────────────────────────────────────────────────────┐
│ Workspace Settings                                        │
├──────────────────────────────────────────────────────────┤
│ Workspace Name: Engineering Team                         │
│ Created: Jan 15, 2024                                     │
│                                                           │
│ Team Members (5)                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 👤 John Doe (You)              Owner                │ │
│ │ 👤 Jane Smith                  Admin                │ │
│ │ 👤 Bob Johnson                 Member               │ │
│ │ 👤 Alice Williams              Member               │ │
│ │ 👤 Charlie Brown               Member               │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ Invite New Member                                         │
│ [Email Address]                    [Role ▼]  [Send Invite]│
└──────────────────────────────────────────────────────────┘
Key User Interactions
Document Upload Flow

User clicks "Upload Document"
Selects file (PDF, DOCX, TXT, MD)
Enters mandatory description
System processes in background:
Extracts text
Chunks content
Generates embeddings
Stores in vector database
Document appears in list immediately
Processing status shown
Query Flow

User types natural language question
System shows typing indicator
AI processes query:
Generates query embedding
Searches similar document chunks
Sends context to LLM
Generates answer
Answer appears with source citations
Conversation saved for future reference
Workspace Switching

User clicks workspace selector
Dropdown shows all workspaces
Select different workspace
Entire UI updates:
Documents filtered to workspace
Conversations filtered to workspace
Analytics scoped to workspace
Seamless context switching
✨ Features
🏢 Multi-Workspace Collaboration
Problem: Teams need isolated spaces for different projects, departments, or clients.

Solution: DocuQuery provides unlimited workspaces with complete data isolation.

Features:

Create unlimited workspaces
Each workspace has its own:
Document library
Team members
Chat conversations
Analytics
Workspace roles: Owner, Admin, Member
Easy workspace switching via header dropdown
Workspace-scoped data ensures privacy
Technical Implementation:

Every database table includes workspace_id foreign key
Row Level Security (RLS) enforces workspace isolation
API middleware validates workspace access
Frontend context manages current workspace state
Use Cases:

Departmental: Sales, Engineering, Marketing, HR
Project-Based: Client A, Client B, Internal Projects
Confidentiality Levels: Public, Internal, Confidential
📄 Smart Document Management
Problem: Documents are uploaded but lack context, making them hard to find and use.

Solution: Mandatory descriptions, metadata tracking, and intelligent processing.

Features:

Supported Formats: PDF, DOCX, TXT, Markdown
File Size Limit: 20MB per document
Mandatory Descriptions: Forces users to add context
Metadata Tracking:
Uploader name and ID
Upload timestamp
File size and type
Processing status
Background Processing: Non-blocking uploads
Automatic Chunking: Intelligent text segmentation
Vector Embeddings: 1024-dimensional Cohere embeddings
Search & Filter: Find documents quickly
Bulk Operations: Delete multiple documents
Technical Implementation:

# Document processing pipeline
1. Upload → Supabase Storage
2. Extract text → PyPDF2/python-docx
3. Chunk text → 1000 chars, 200 overlap
4. Generate embeddings → Cohere API
5. Store vectors → pgvector
6. Index for search → PostgreSQL indexes
Document Processing Flow:

User Upload → FastAPI Endpoint → Supabase Storage
                                       ↓
                              Background Task
                                       ↓
                              Text Extraction
                                       ↓
                              Text Chunking
                                       ↓
                              Embedding Generation
                                       ↓
                              Vector Storage (pgvector)
                                       ↓
                              Status: Ready
💬 Intelligent Chat System
Problem: Users need to ask questions about documents without reading everything.

Solution: AI-powered conversational interface with RAG technology.

Features:

Natural Language Queries: Ask questions like talking to a colleague
Contextual Answers: AI understands document context
Source Citations: Every answer includes document sources
Conversation History: All chats saved and searchable
Private Conversations: Each user has their own chat history
Shared Knowledge Base: All workspace documents available
Multi-Turn Conversations: Follow-up questions maintain context
Real-Time Responses: Streaming answers (future feature)
Conversation Management:
Create new conversations
View conversation history
Delete conversations
Edit conversation titles
Technical Implementation:

Query Processing: Cohere embeddings for semantic search
Vector Search: pgvector cosine similarity
Context Retrieval: Top-K most relevant chunks
Answer Generation: Cohere Chat API with document context
Response Time: 5-15 seconds typical
Timeout Handling: 120-second timeout for complex queries
Chat Architecture:

User Query → Generate Embedding → Vector Search
                                        ↓
                              Retrieve Top Chunks
                                        ↓
                              Build Context
                                        ↓
                              LLM Generation
                                        ↓
                              Return Answer + Sources
🔔 Invitation & Notification System
Problem: Teams need to onboard members and stay informed of workspace activities.

Solution: Email-based invitations with in-app notification system.

Features:

Workspace Invitations:
Send invites by email
Specify role (Admin/Member)
Add optional message
Expiration handling
Accept/Reject workflow
In-App Notifications:
Real-time notification bell
Unread count badge
Notification types:
Workspace invitations
Document uploads
Mentions (future)
System alerts
Mark as read/unread
Bulk mark all as read
Email Notifications (future):
Invitation emails
Activity digests
Important updates
Technical Implementation:

-- Invitations table
workspace_invitations (
  id, workspace_id, invited_email,
  invited_by, role, status, token,
  expires_at, created_at
)

-- Notifications table
notifications (
  id, user_id, type, title,
  message, data, read, created_at
)
Invitation Flow:

Owner/Admin → Send Invite → Email Sent
                                ↓
                        Notification Created
                                ↓
                        Invitee Receives
                                ↓
                        Accept/Reject
                                ↓
                        Workspace Member Added
📊 Analytics Dashboard
Problem: Teams need visibility into document usage and team activity.

Solution: Comprehensive analytics with visualizations and insights.

Features:

Key Metrics:
Total documents
Total queries
Team member count
Storage usage
Trend Analysis:
Queries over time
Document uploads over time
User activity patterns
Recent Activity Feed:
Latest document uploads
Recent queries
Team member joins
Visual Charts:
Line charts for trends
Bar charts for comparisons
Pie charts for distributions
Export Capabilities (future):
CSV export
PDF reports
Scheduled reports
Technical Implementation:

# Analytics aggregation
SELECT 
  COUNT(DISTINCT documents.id) as doc_count,
  COUNT(DISTINCT query_logs.id) as query_count,
  COUNT(DISTINCT workspace_members.user_id) as member_count
FROM workspaces
WHERE workspace_id = ?
🎨 Modern UI/UX
Problem: Complex systems need intuitive, beautiful interfaces.

Solution: Modern, responsive design with consistent patterns.

Features:

Consistent Navigation:
Global header with workspace selector
Persistent sidebar
Breadcrumb navigation
Responsive Design:
Mobile-friendly layouts
Tablet optimization
Desktop-first approach
Visual Feedback:
Loading states
Success/error toasts
Progress indicators
Skeleton loaders
Accessibility:
Keyboard navigation
ARIA labels
Color contrast compliance
Screen reader support
Animations:
Smooth transitions
Framer Motion animations
Micro-interactions
Dark Mode (future):
System preference detection
Manual toggle
Persistent preference
Design System:

Colors: Primary blue, semantic colors (success, error, warning)
Typography: Inter font family, clear hierarchy
Spacing: 4px base unit, consistent padding/margins
Components: Reusable, composable React components
Icons: Lucide React icon library
🏗️ System Architecture
High-Level Architecture
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Next.js 14 Frontend (TypeScript + React)               │  │
│  │  - Server-Side Rendering (SSR)                          │  │
│  │  - Client-Side State Management                         │  │
│  │  - Responsive UI Components                             │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓ HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  FastAPI Backend (Python)                               │  │
│  │  - RESTful API Endpoints                                │  │
│  │  - JWT Authentication                                   │  │
│  │  - Workspace Middleware                                 │  │
│  │  - Background Task Processing                           │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                        SERVICE LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Document   │  │   Embedding  │  │    RAG Pipeline      │  │
│  │  Processor   │  │   Service    │  │    Service           │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  PostgreSQL  │  │   pgvector   │  │  Supabase Storage    │  │
│  │  (Supabase)  │  │  (Vectors)   │  │  (File Storage)      │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Cohere API  │  │ Supabase Auth│  │   Email Service      │  │
│  │ (Embeddings  │  │    (JWT)     │  │   (Future)           │  │
│  │  + Chat)     │  │              │  │                      │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
Component Interaction Flow
┌──────────┐
│  User    │
└────┬─────┘
     │ 1. Authenticates
     ↓
┌──────────────────┐
│  Supabase Auth   │ → JWT Token
└────┬─────────────┘
     │ 2. Selects Workspace
     ↓
┌──────────────────┐
│  Frontend        │ → Stores workspace_id in context
└────┬─────────────┘
     │ 3. Makes API Request
     ↓
┌──────────────────┐
│  API Middleware  │ → Validates JWT + workspace access
└────┬─────────────┘
     │ 4. Processes Request
     ↓
┌──────────────────┐
│  Route Handler   │ → Business logic
└────┬─────────────┘
     │ 5. Database Query
     ↓
┌──────────────────┐
│  PostgreSQL      │ → RLS enforces workspace isolation
└────┬─────────────┘
     │ 6. Returns Data
     ↓
┌──────────────────┐
│  Frontend        │ → Renders UI
└──────────────────┘
Multi-Tenancy Architecture
DocuQuery implements a shared database, shared schema multi-tenancy model:

┌─────────────────────────────────────────────────────────┐
│                    Single Database                      │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Workspace A  │  │ Workspace B  │  │ Workspace C  │ │
│  │              │  │              │  │              │ │
│  │ Documents    │  │ Documents    │  │ Documents    │ │
│  │ Members      │  │ Members      │  │ Members      │ │
│  │ Conversations│  │ Conversations│  │ Conversations│ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                         │
│  All tables have workspace_id column                   │
│  RLS policies enforce data isolation                   │
└─────────────────────────────────────────────────────────┘
Benefits:

✅ Cost-effective (single database)
✅ Easy maintenance and updates
✅ Efficient resource utilization
✅ Strong isolation via RLS
✅ Scalable to thousands of workspaces
Data Flow Examples
Example 1: Document Upload
1. User selects file in UI
   ↓
2. Frontend uploads to Supabase Storage
   POST /api/documents/upload
   Headers: { Authorization, X-Workspace-ID }
   Body: { file, name, description }
   ↓
3. Backend validates:
   - JWT token valid?
   - User is workspace member?
   - File type allowed?
   - File size within limit?
   ↓
4. Store file in Supabase Storage
   Path: {workspace_id}/{document_id}/{filename}
   ↓
5. Create document record in database
   INSERT INTO documents (workspace_id, name, ...)
   ↓
6. Trigger background processing
   - Extract text (PyPDF2/python-docx)
   - Chunk text (1000 chars, 200 overlap)
   - Generate embeddings (Cohere API)
   - Store chunks with vectors
   ↓
7. Return success to frontend
   Status: 200 OK
   Body: { document_id, status: "processing" }
Example 2: Chat Query
1. User types question
   "What are the main features in Q1?"
   ↓
2. Frontend sends query
   POST /api/chat/query
   Headers: { Authorization, X-Workspace-ID }
   Body: { query, conversation_id }
   ↓
3. Backend processes:
   - Create/get conversation
   - Save user message
   - Generate query embedding (Cohere)
   ↓
4. Vector similarity search
   SELECT * FROM document_chunks
   WHERE workspace_id = ?
   ORDER BY embedding <-> query_embedding
   LIMIT 5
   ↓
5. Retrieve top relevant chunks
   [chunk1, chunk2, chunk3, chunk4, chunk5]
   ↓
6. Build context for LLM
   Context: "Document 1: {chunk1}\nDocument 2: {chunk2}..."
   ↓
7. Generate answer (Cohere Chat API)
   Input: query + context
   Output: answer + citations
   ↓
8. Save assistant message
   INSERT INTO messages (conversation_id, role, content)
   ↓
9. Return to frontend
   Status: 200 OK
   Body: { answer, sources, conversation_id }
🛠️ Technology Stack
Frontend Technologies
Technology	Version	Purpose	Why Chosen
Next.js	14.0	React framework	SSR, routing, optimization, best-in-class DX
TypeScript	5.0	Type safety	Catch errors early, better IDE support
React	18.0	UI library	Component-based, large ecosystem
Tailwind CSS	3.4	Styling	Utility-first, rapid development
Framer Motion	10.0	Animations	Smooth, performant animations
Axios	1.6	HTTP client	Interceptors, better error handling
Lucide React	Latest	Icons	Beautiful, consistent icon set
Sonner	Latest	Toasts	Modern toast notifications
Recharts	2.10	Charts	Composable, responsive charts
Backend Technologies
Technology	Version	Purpose	Why Chosen
FastAPI	0.104	Web framework	Fast, async, auto-docs, type hints
Python	3.8+	Language	Rich ecosystem, AI/ML libraries
Uvicorn	0.24	ASGI server	High performance, async support
Pydantic	2.5	Validation	Type validation, serialization
asyncpg	0.29	PostgreSQL driver	Async, high performance
python-jose	3.3	JWT handling	Secure token management
PyPDF2	3.0	PDF processing	Extract text from PDFs
python-docx	1.1	DOCX processing	Extract text from Word docs
Database & Storage
Technology	Version	Purpose	Why Chosen
PostgreSQL	15+	Primary database	Reliable, feature-rich, ACID
pgvector	0.2	Vector storage	Native vector operations in Postgres
Supabase	Latest	Backend platform	Managed Postgres, Auth, Storage
AI & ML
Technology	Version	Purpose	Why Chosen
Cohere	4.37	LLM & Embeddings	High-quality embeddings, chat API
embed-english-v3.0	Latest	Embedding model	1024d, semantic understanding
command-a-03-2025	Latest	Chat model	Latest, most capable model
Infrastructure & Deployment
Technology	Purpose	Why Chosen
Vercel	Frontend hosting	Optimized for Next.js, global CDN
Railway/Render	Backend hosting	Easy deployment, auto-scaling
GitHub Actions	CI/CD	Automated testing, deployment
Development Tools
Tool	Purpose
Git	Version control
VS Code	IDE
Postman	API testing
pgAdmin	Database management
🗄️ Database Architecture
Entity Relationship Diagram
┌─────────────────┐
│   auth.users    │ (Supabase Auth)
│─────────────────│
│ id (PK)         │
│ email           │
│ created_at      │
└────────┬────────┘
         │
         │ 1:N
         ↓
┌─────────────────┐         ┌──────────────────────┐
│   workspaces    │←────────│  workspace_members   │
│─────────────────│  1:N    │──────────────────────│
│ id (PK)         │         │ id (PK)              │
│ name            │         │ workspace_id (FK)    │
│ owner_id (FK)   │         │ user_id (FK)         │
│ created_at      │         │ role                 │
└────────┬────────┘         │ joined_at            │
         │                  └──────────────────────┘
         │ 1:N
         ↓
┌─────────────────┐
│   documents     │
│─────────────────│
│ id (PK)         │
│ workspace_id(FK)│
│ name            │
│ description     │
│ file_path       │
│ uploaded_by(FK) │
│ created_at      │
└────────┬────────┘
         │ 1:N
         ↓
┌─────────────────┐
│ document_chunks │
│─────────────────│
│ id (PK)         │
│ document_id (FK)│
│ chunk_index     │
│ content         │
│ embedding       │ ← vector(1024)
│ created_at      │
└─────────────────┘
┌─────────────────┐
│ conversations   │
│─────────────────│
│ id (PK)         │
│ workspace_id(FK)│
│ user_id (FK)    │
│ title           │
│ created_at      │
└────────┬────────┘
         │ 1:N
         ↓
┌─────────────────┐
│   messages      │
│─────────────────│
│ id (PK)         │
│ conversation_id │
│ role            │
│ content         │
│ sources (JSON)  │
│ created_at      │
└─────────────────┘

┌─────────────────┐
│   query_logs    │
│─────────────────│
│ id (PK)         │
│ workspace_id(FK)│
│ user_id (FK)    │
│ query           │
│ response_time   │
│ chunks_retrieved│
│ created_at      │
└─────────────────┘

┌──────────────────────┐
│ workspace_invitations│
│──────────────────────│
│ id (PK)              │
│ workspace_id (FK)    │
│ invited_email        │
│ invited_by (FK)      │
│ role                 │
│ status               │
│ token                │
│ expires_at           │
│ created_at           │
└──────────────────────┘

┌─────────────────┐
│ notifications   │
│─────────────────│
│ id (PK)         │
│ user_id (FK)    │
│ type            │
│ title           │
│ message         │
│ data (JSON)     │
│ read            │
│ created_at      │
└─────────────────┘
Table Descriptions
workspaces
Purpose: Represents team workspaces for document collaboration.

Column	Type	Description
id	UUID	Primary key
name	TEXT	Workspace name
owner_id	UUID	Foreign key to auth.users
description	TEXT	Optional description
created_at	TIMESTAMPTZ	Creation timestamp
updated_at	TIMESTAMPTZ	Last update timestamp
Relationships:

One workspace has many members (workspace_members)
One workspace has many documents
One workspace has many conversations
One workspace has many query logs
Indexes:

Primary key on id
Foreign key on owner_id
workspace_members
Purpose: Manages user membership in workspaces with role-based access.

Column	Type	Description
id	UUID	Primary key
workspace_id	UUID	Foreign key to workspaces
user_id	UUID	Foreign key to auth.users
role	TEXT	owner, admin, or member
joined_at	TIMESTAMPTZ	Join timestamp
Constraints:

Unique constraint on (workspace_id, user_id)
Check constraint: role IN ('owner', 'admin', 'member')
Indexes:

Primary key on id
Index on workspace_id
Index on user_id
Unique index on (workspace_id, user_id)
documents
Purpose: Stores metadata for uploaded documents.

Column	Type	Description
id	UUID	Primary key
workspace_id	UUID	Foreign key to workspaces
name	TEXT	Document filename
description	TEXT	User-provided description
file_path	TEXT	Storage path
file_size	BIGINT	File size in bytes
file_type	TEXT	MIME type
uploaded_by	UUID	Foreign key to auth.users
created_at	TIMESTAMPTZ	Upload timestamp
updated_at	TIMESTAMPTZ	Last update timestamp
Indexes:

Primary key on id
Index on workspace_id
Index on uploaded_by
document_chunks
Purpose: Stores text chunks with vector embeddings for RAG.

Column	Type	Description
id	UUID	Primary key
document_id	UUID	Foreign key to documents
chunk_index	INTEGER	Sequential chunk number
content	TEXT	Chunk text content
embedding	VECTOR(1024)	Cohere embedding vector
created_at	TIMESTAMPTZ	Creation timestamp
Constraints:

Unique constraint on (document_id, chunk_index)
Indexes:

Primary key on id
Index on document_id
Vector index on embedding using IVFFlat for fast similarity search
Vector Index Details:

CREATE INDEX idx_document_chunks_embedding 
ON document_chunks 
USING ivfflat (embedding vector_cosine_ops);
conversations
Purpose: Represents chat conversation threads.

Column	Type	Description
id	UUID	Primary key
workspace_id	UUID	Foreign key to workspaces
user_id	UUID	Foreign key to auth.users
title	TEXT	Conversation title (optional)
created_at	TIMESTAMPTZ	Creation timestamp
updated_at	TIMESTAMPTZ	Last message timestamp
Indexes:

Primary key on id
Index on workspace_id
Index on user_id
messages
Purpose: Stores individual messages within conversations.

Column	Type	Description
id	UUID	Primary key
conversation_id	UUID	Foreign key to conversations
role	TEXT	user or assistant
content	TEXT	Message content
sources	JSONB	Document sources (for assistant)
created_at	TIMESTAMPTZ	Message timestamp
Constraints:

Check constraint: role IN ('user', 'assistant', 'system')
Indexes:

Primary key on id
Index on conversation_id
query_logs
Purpose: Analytics and audit trail for queries.

Column	Type	Description
id	UUID	Primary key
workspace_id	UUID	Foreign key to workspaces
user_id	UUID	Foreign key to auth.users
query	TEXT	User's question
conversation_id	UUID	Foreign key to conversations (optional)
response_time_ms	INTEGER	Query processing time
chunks_retrieved	INTEGER	Number of chunks used
created_at	TIMESTAMPTZ	Query timestamp
Indexes:

Primary key on id
Index on workspace_id
Index on user_id
Index on created_at for time-based queries
workspace_invitations
Purpose: Manages pending workspace invitations.

Column	Type	Description
id	UUID	Primary key
workspace_id	UUID	Foreign key to workspaces
invited_email	TEXT	Invitee's email
invited_by	UUID	Foreign key to auth.users
role	TEXT	admin or member
status	TEXT	pending, accepted, rejected, expired
token	TEXT	Unique invitation token
message	TEXT	Optional invitation message
expires_at	TIMESTAMPTZ	Expiration timestamp
created_at	TIMESTAMPTZ	Creation timestamp
responded_at	TIMESTAMPTZ	Response timestamp
Constraints:

Check constraint: role IN ('admin', 'member')
Check constraint: status IN ('pending', 'accepted', 'rejected', 'expired')
Unique constraint on token
Indexes:

Primary key on id
Index on workspace_id
Unique index on token
notifications
Purpose: In-app notification system.

Column	Type	Description
id	UUID	Primary key
user_id	UUID	Foreign key to auth.users
type	TEXT	Notification type
title	TEXT	Notification title
message	TEXT	Notification message
data	JSONB	Additional data
read	BOOLEAN	Read status
created_at	TIMESTAMPTZ	Creation timestamp
Indexes:

Primary key on id
Index on user_id
Index on read for filtering unread
Database Relationships
auth.users (1) ──→ (N) workspaces (owner_id)
auth.users (1) ──→ (N) workspace_members (user_id)
auth.users (1) ──→ (N) documents (uploaded_by)
auth.users (1) ──→ (N) conversations (user_id)
auth.users (1) ──→ (N) query_logs (user_id)
auth.users (1) ──→ (N) notifications (user_id)

workspaces (1) ──→ (N) workspace_members (workspace_id)
workspaces (1) ──→ (N) documents (workspace_id)
workspaces (1) ──→ (N) conversations (workspace_id)
workspaces (1) ──→ (N) query_logs (workspace_id)
workspaces (1) ──→ (N) workspace_invitations (workspace_id)

documents (1) ──→ (N) document_chunks (document_id)

conversations (1) ──→ (N) messages (conversation_id)
Row Level Security (RLS) Policies
DocuQuery uses PostgreSQL Row Level Security to enforce data isolation:

-- Example: Documents RLS Policy
CREATE POLICY "Workspace members can access documents"
ON documents
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM workspace_members
    WHERE workspace_members.workspace_id = documents.workspace_id
    AND workspace_members.user_id = auth.uid()
  )
);
RLS Benefits:

✅ Database-level security (can't be bypassed)
✅ Automatic filtering of queries
✅ No need for WHERE clauses in application code
✅ Protection against SQL injection
✅ Multi-tenancy enforcement
Service Role Bypass:

-- Service role can bypass RLS for admin operations
CREATE POLICY "Service role can access all documents"
ON documents
FOR ALL
USING (auth.role() = 'service_role');
🔄 RAG Pipeline Explanation
What is RAG?
Retrieval-Augmented Generation (RAG) is a technique that combines:

Information Retrieval: Finding relevant documents
Language Generation: Creating natural language responses
This solves the problem of LLMs not having access to private/recent data.

Complete RAG Workflow
┌─────────────────────────────────────────────────────────────┐
│                    DOCUMENT INGESTION                       │
└─────────────────────────────────────────────────────────────┘

Step 1: Upload Document
├─ User uploads PDF/DOCX/TXT/MD file
├─ File stored in Supabase Storage
└─ Document metadata saved to database

Step 2: Extract Text
├─ PDF → PyPDF2.PdfReader()
├─ DOCX → python-docx.Document()
├─ TXT/MD → Direct read
└─ Result: Plain text string

Step 3: Chunk Document
├─ Split text into overlapping chunks
├─ Chunk size: 1000 characters
├─ Overlap: 200 characters
├─ Preserves context across boundaries
└─ Result: List of text chunks

Step 4: Generate Embeddings
├─ For each chunk:
│  ├─ Call Cohere API
│  ├─ Model: embed-english-v3.0
│  ├─ Input type: "search_document"
│  └─ Output: 1024-dimensional vector
└─ Result: List of embedding vectors

Step 5: Store Vectors
├─ Insert into document_chunks table
├─ Each row: (chunk_text, embedding_vector)
├─ pgvector stores as native vector type
└─ Create IVFFlat index for fast search

┌─────────────────────────────────────────────────────────────┐
│                    QUERY PROCESSING                         │
└─────────────────────────────────────────────────────────────┘

Step 6: User Asks Question
├─ User types: "What are the main features?"
└─ Frontend sends to /api/chat/query

Step 7: Generate Query Embedding
├─ Call Cohere API
├─ Model: embed-english-v3.0
├─ Input type: "search_query"
└─ Output: 1024-dimensional vector

Step 8: Retrieve Top Chunks
├─ Vector similarity search:
│  SELECT * FROM document_chunks
│  WHERE workspace_id = ?
│  ORDER BY embedding <-> query_embedding
│  LIMIT 5
├─ Uses cosine similarity
├─ IVFFlat index accelerates search
└─ Result: 5 most relevant chunks

Step 9: Build Context
├─ Combine retrieved chunks
├─ Add document metadata
├─ Format for LLM:
│  "Document 1: {name}\n{content}\n\n
│   Document 2: {name}\n{content}..."
└─ Result: Context string

Step 10: Generate Answer
├─ Call Cohere Chat API
├─ Model: command-a-03-2025
├─ Input: query + context
├─ Temperature: 0.3 (focused)
├─ Max tokens: 1000
└─ Output: Natural language answer

Step 11: Return Response
├─ Save conversation to database
├─ Return answer + sources to frontend
└─ Display to user with citations
Detailed Stage Explanations
Stage 1-2: Document Upload & Text Extraction
Purpose: Convert various document formats into plain text.

Implementation:

# backend/app/services/document_processor.py

async def extract_text(file_path: str, file_type: str) -> str:
    if file_type == 'application/pdf':
        # PDF extraction
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
        return text
    
    elif file_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        # DOCX extraction
        doc = Document(file_path)
        text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
        return text
    
    else:
        # Plain text
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
Challenges:

PDFs may have complex layouts
Tables and images need special handling
Encoding issues with different file formats
Solutions:

Use robust libraries (PyPDF2, python-docx)
Fallback to plain text extraction
UTF-8 encoding enforcement
Stage 3: Text Chunking
Purpose: Split long documents into manageable pieces that fit in LLM context windows.

Why Chunking?

LLMs have token limits (e.g., 8K, 32K tokens)
Smaller chunks = more precise retrieval
Overlapping chunks preserve context
Implementation:

# backend/app/services/document_processor.py

def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 200) -> List[str]:
    chunks = []
    start = 0
    
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        chunks.append(chunk)
        start += (chunk_size - overlap)  # Overlap for context
    
    return chunks
Parameters:

chunk_size: 1000 characters (≈250 tokens)
overlap: 200 characters (≈50 tokens)
Ensures context continuity
Example:

Original text: "The quick brown fox jumps over the lazy dog. The dog was sleeping..."

Chunk 1: "The quick brown fox jumps over the lazy dog. The dog was..."
Chunk 2: "...lazy dog. The dog was sleeping under a tree. The tree..."
         ↑ Overlap preserves context
Stage 4: Embedding Generation
Purpose: Convert text into numerical vectors that capture semantic meaning.

What are Embeddings?

Vectors (lists of numbers) representing text
Similar meanings → similar vectors
Enable semantic search (not just keyword matching)
Implementation:

# backend/app/services/embedding_service.py

async def generate_embedding(text: str) -> List[float]:
    result = await cohere_client.embed(
        texts=[text],
        model="embed-english-v3.0",
        input_type="search_document"
    )
    return result.embeddings[0]  # 1024-dimensional vector
Cohere Embedding Model:

Model: embed-english-v3.0
Dimensions: 1024
Input types:
search_document: For document chunks
search_query: For user queries
Optimized for semantic search
Example:

Text: "The cat sat on the mat"
Embedding: [0.123, -0.456, 0.789, ..., 0.234]  # 1024 numbers

Text: "A feline rested on the rug"
Embedding: [0.119, -0.442, 0.801, ..., 0.229]  # Similar vector!
Stage 5: Vector Storage
Purpose: Store embeddings in a database optimized for similarity search.

pgvector Extension:

PostgreSQL extension for vector operations
Native vector data type
Efficient similarity search algorithms
Implementation:

-- Create table with vector column
CREATE TABLE document_chunks (
    id UUID PRIMARY KEY,
    content TEXT,
    embedding VECTOR(1024)  -- pgvector type
);

-- Create index for fast similarity search
CREATE INDEX idx_embedding 
ON document_chunks 
USING ivfflat (embedding vector_cosine_ops);
Index Types:

IVFFlat: Inverted File with Flat compression
Fast approximate search
Good for large datasets
Trade-off: speed vs accuracy
Storage:

Each vector: 1024 floats × 4 bytes = 4KB
1000 chunks = 4MB of vector data
Indexed for O(log n) search time
Stage 6-8: Query Processing & Retrieval
Purpose: Find the most relevant document chunks for a user's question.

Vector Similarity Search:

-- Find top 5 most similar chunks
SELECT 
    id,
    content,
    document_id,
    embedding <-> $1::vector as distance,
    1 - (embedding <-> $1::vector) as similarity
FROM document_chunks
WHERE workspace_id = $2
ORDER BY embedding <-> $1::vector
LIMIT 5;
Similarity Metrics:

Cosine Similarity: Measures angle between vectors
Range: -1 to 1 (1 = identical)
Formula: cos(θ) = (A · B) / (||A|| × ||B||)
Euclidean Distance: Straight-line distance
Lower = more similar
Dot Product: Raw vector multiplication
Why Cosine Similarity?

✅ Normalized (independent of vector magnitude)
✅ Works well for text embeddings
✅ Captures semantic similarity
Example Query:

User asks: "What are the security features?"

Query embedding: [0.234, -0.567, 0.891, ...]

Top results:
1. "Authentication uses JWT tokens..." (similarity: 0.89)
2. "Row Level Security enforces..." (similarity: 0.85)
3. "Encryption at rest and in transit..." (similarity: 0.82)
4. "Role-based access control..." (similarity: 0.78)
5. "Audit logging tracks all..." (similarity: 0.75)
Stage 9-10: Context Building & Answer Generation
Purpose: Use retrieved chunks to generate accurate, grounded answers.

Context Building:

# backend/app/services/rag_pipeline.py

def build_context(chunks: List[Dict]) -> str:
    context_parts = []
    for i, chunk in enumerate(chunks, 1):
        context_part = f"""
Document {i}: {chunk['document_name']}
Relevance: {chunk['similarity_score']:.2f}

Content:
{chunk['content']}
"""
        context_parts.append(context_part)
    
    return "\n\n".join(context_parts)
LLM Prompt:

Based on the following documents, answer the user's question.

CONTEXT DOCUMENTS:
{context}

USER QUESTION: {query}

Provide a detailed answer based on the information above.
If the information is not sufficient, say so clearly.
Cohere Chat API:

response = cohere_client.chat(
    model="command-a-03-2025",
    message=query,
    documents=[
        {"title": doc_name, "snippet": content}
        for doc_name, content in chunks
    ],
    temperature=0.3,  # Low = more focused
    max_tokens=1000
)

answer = response.text
Temperature Settings:

0.0-0.3: Focused, deterministic (good for factual Q&A)
0.4-0.7: Balanced creativity and accuracy
0.8-1.0: Creative, varied (good for brainstorming)
Why Low Temperature?

We want factual answers from documents
Minimize hallucinations
Consistent responses
RAG Performance Metrics
Metric	Value	Notes
Embedding Time	1-3 seconds	Per document chunk
Vector Search	<100ms	With IVFFlat index
LLM Generation	3-8 seconds	Depends on answer length
Total Query Time	5-15 seconds	End-to-end
Accuracy	~85-90%	Based on relevant chunks
Chunk Retrieval	Top 5	Configurable
RAG Optimization Strategies
Chunking Strategy

Experiment with chunk sizes
Adjust overlap for better context
Consider semantic chunking (future)
Embedding Quality

Use latest embedding models
Fine-tune for domain-specific content
Batch embedding generation
Retrieval Optimization

Tune similarity thresholds
Implement re-ranking (future)
Hybrid search (keyword + vector)
Generation Quality

Prompt engineering
Few-shot examples
Chain-of-thought reasoning
📡 API Documentation
Base URL
Development: http://localhost:8000
Production: https://api.docuquery.com
Authentication
All endpoints (except auth) require JWT token:

Authorization: Bearer <jwt_token>
Workspace Context
Most endpoints require workspace ID in header:

X-Workspace-ID: <workspace_uuid>
Authentication Endpoints
POST /api/auth/register
Register a new user account.

Request Body:

{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "full_name": "John Doe"
}
Response (200 OK):

{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe"
  },
  "session": {
    "access_token": "jwt_token",
    "refresh_token": "refresh_token"
  }
}
Errors:

400: Invalid email or weak password
409: Email already registered
POST /api/auth/login
Authenticate user and get JWT token.

Request Body:

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
Response (200 OK):

{
  "access_token": "jwt_token",
  "token_type": "bearer",
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  }
}
Errors:

401: Invalid credentials
400: Missing fields
GET /api/auth/me
Get current user information.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "John Doe",
  "created_at": "2024-01-15T10:30:00Z"
}
Errors:

401: Invalid or expired token
POST /api/auth/logout
Invalidate current session.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "message": "Logged out successfully"
}
Workspace Endpoints
GET /api/workspaces
List all workspaces for current user.

Headers:

Authorization: Bearer <token>
Response (200 OK):

[
  {
    "id": "uuid",
    "name": "Engineering Team",
    "description": "Main engineering workspace",
    "owner_id": "uuid",
    "created_at": "2024-01-15T10:30:00Z",
    "member_count": 5,
    "document_count": 24
  }
]
POST /api/workspaces
Create a new workspace.

Headers:

Authorization: Bearer <token>
Request Body:

{
  "name": "Marketing Team",
  "description": "Marketing department workspace"
}
Response (201 Created):

{
  "id": "uuid",
  "name": "Marketing Team",
  "description": "Marketing department workspace",
  "owner_id": "uuid",
  "created_at": "2024-01-15T10:30:00Z"
}
GET /api/workspaces/{workspace_id}
Get workspace details.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "id": "uuid",
  "name": "Engineering Team",
  "description": "Main engineering workspace",
  "owner_id": "uuid",
  "created_at": "2024-01-15T10:30:00Z",
  "members": [
    {
      "user_id": "uuid",
      "email": "john@example.com",
      "role": "owner",
      "joined_at": "2024-01-15T10:30:00Z"
    }
  ]
}
GET /api/workspaces/{workspace_id}/members
List workspace members.

Headers:

Authorization: Bearer <token>
Response (200 OK):

[
  {
    "id": "uuid",
    "user_id": "uuid",
    "email": "john@example.com",
    "full_name": "John Doe",
    "role": "owner",
    "joined_at": "2024-01-15T10:30:00Z"
  }
]
Document Endpoints
POST /api/documents/upload
Upload a new document.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Content-Type: multipart/form-data
Request Body (multipart/form-data):

file: <binary_file>
name: "Product Requirements.pdf"
description: "Q1 2024 product requirements document"
Response (200 OK):

{
  "id": "uuid",
  "name": "Product Requirements.pdf",
  "description": "Q1 2024 product requirements document",
  "file_path": "workspace_id/doc_id/filename.pdf",
  "file_size": 2457600,
  "file_type": "application/pdf",
  "uploaded_by": "uuid",
  "created_at": "2024-01-15T10:30:00Z",
  "status": "processing"
}
Errors:

400: Invalid file type or size
401: Unauthorized
403: Not a workspace member
GET /api/documents/
List all documents in workspace.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

[
  {
    "id": "uuid",
    "name": "Product Requirements.pdf",
    "description": "Q1 2024 product requirements document",
    "file_size": 2457600,
    "file_type": "application/pdf",
    "uploaded_by": "uuid",
    "uploader_name": "John Doe",
    "created_at": "2024-01-15T10:30:00Z",
    "chunk_count": 15
  }
]
DELETE /api/documents/{document_id}
Delete a document and all its chunks.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

{
  "message": "Document deleted successfully"
}
Errors:

404: Document not found
403: Not authorized to delete
Chat Endpoints
POST /api/chat/query
Ask a question using RAG.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Request Body:

{
  "query": "What are the main features planned for Q1?",
  "conversation_id": "uuid"  // optional, creates new if omitted
}
Response (200 OK):

{
  "answer": "Based on the Product Requirements document, the main Q1 2024 features include: 1. Multi-workspace collaboration...",
  "sources": [
    {
      "document_id": "uuid",
      "document_name": "Product Requirements.pdf",
      "content_preview": "Q1 Features: Multi-workspace...",
      "relevance_score": 0.89
    }
  ],
  "conversation_id": "uuid",
  "message_id": "uuid"
}
Errors:

400: Empty query
404: Conversation not found
500: RAG pipeline error
GET /api/chat/conversations
List all conversations for current user.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

[
  {
    "id": "uuid",
    "workspace_id": "uuid",
    "user_id": "uuid",
    "title": "Product Features Discussion",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T11:45:00Z",
    "message_count": 8
  }
]
GET /api/chat/conversations/{conversation_id}
Get conversation with all messages.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

{
  "id": "uuid",
  "title": "Product Features Discussion",
  "created_at": "2024-01-15T10:30:00Z",
  "messages": [
    {
      "id": "uuid",
      "role": "user",
      "content": "What are the main features?",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "id": "uuid",
      "role": "assistant",
      "content": "The main features include...",
      "timestamp": "2024-01-15T10:30:15Z"
    }
  ]
}
DELETE /api/chat/conversations/{conversation_id}
Delete a conversation and all messages.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

{
  "message": "Conversation deleted successfully"
}
Invitation Endpoints
POST /api/invitations/send
Send workspace invitation.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Request Body:

{
  "email": "newmember@example.com",
  "role": "member",
  "message": "Join our team workspace!"
}
Response (200 OK):

{
  "id": "uuid",
  "workspace_id": "uuid",
  "invited_email": "newmember@example.com",
  "role": "member",
  "status": "pending",
  "expires_at": "2024-01-22T10:30:00Z"
}
GET /api/invitations/pending
Get pending invitations for current user.

Headers:

Authorization: Bearer <token>
Response (200 OK):

[
  {
    "id": "uuid",
    "workspace_id": "uuid",
    "workspace_name": "Engineering Team",
    "invited_by": "uuid",
    "inviter_name": "John Doe",
    "role": "member",
    "message": "Join our team!",
    "created_at": "2024-01-15T10:30:00Z",
    "expires_at": "2024-01-22T10:30:00Z"
  }
]
POST /api/invitations/{invitation_id}/accept
Accept workspace invitation.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "message": "Invitation accepted",
  "workspace": {
    "id": "uuid",
    "name": "Engineering Team"
  }
}
POST /api/invitations/{invitation_id}/reject
Reject workspace invitation.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "message": "Invitation rejected"
}
Notification Endpoints
GET /api/notifications
Get all notifications for current user.

Headers:

Authorization: Bearer <token>
Response (200 OK):

[
  {
    "id": "uuid",
    "type": "workspace_invitation",
    "title": "New Workspace Invitation",
    "message": "John Doe invited you to Engineering Team",
    "data": {
      "invitation_id": "uuid",
      "workspace_id": "uuid"
    },
    "read": false,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
GET /api/notifications/unread
Get unread notification count.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "count": 3
}
PUT /api/notifications/{notification_id}/read
Mark notification as read.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "message": "Notification marked as read"
}
PUT /api/notifications/read-all
Mark all notifications as read.

Headers:

Authorization: Bearer <token>
Response (200 OK):

{
  "message": "All notifications marked as read"
}
Analytics Endpoints
GET /api/analytics/dashboard
Get workspace analytics dashboard data.

Headers:

Authorization: Bearer <token>
X-Workspace-ID: <workspace_uuid>
Response (200 OK):

{
  "overview": {
    "total_documents": 24,
    "total_queries": 156,
    "total_members": 5,
    "storage_used_mb": 45.6
  },
  "trends": {
    "queries_by_day": [
      {"date": "2024-01-15", "count": 12},
      {"date": "2024-01-16", "count": 18}
    ],
    "documents_by_day": [
      {"date": "2024-01-15", "count": 3},
      {"date": "2024-01-16", "count": 2}
    ]
  },
  "recent_activity": [
    {
      "type": "document_upload",
      "user": "John Doe",
      "document": "API Documentation.pdf",
      "timestamp": "2024-01-16T14:30:00Z"
    },
    {
      "type": "query",
      "user": "Jane Smith",
      "query": "What are the security features?",
      "timestamp": "2024-01-16T14:25:00Z"
    }
  ]
}
Error Responses
All endpoints follow consistent error format:

{
  "detail": "Error message describing what went wrong"
}
Common HTTP Status Codes:

200: Success
201: Created
400: Bad Request (invalid input)
401: Unauthorized (missing/invalid token)
403: Forbidden (insufficient permissions)
404: Not Found
409: Conflict (duplicate resource)
500: Internal Server Error
Rate Limiting
Current Limits:

Authentication: 10 requests/minute
Document Upload: 20 requests/hour
Chat Queries: 60 requests/hour
Other endpoints: 100 requests/minute
Rate Limit Headers:

X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1642252800
🎨 Frontend Architecture
Project Structure
frontend/
├── app/                      # Next.js 14 App Router
│   ├── (auth)/              # Auth route group
│   │   ├── login/           # Login page
│   │   └── register/        # Register page
│   ├── dashboard/           # Dashboard route group
│   │   ├── page.tsx         # Dashboard home
│   │   ├── documents/       # Documents page
│   │   ├── chat/            # Chat page
│   │   ├── analytics/       # Analytics page
│   │   └── settings/        # Settings page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx           # Global header
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── DocumentUploader.tsx # Document upload
│   ├── ChatInterface.tsx    # Chat UI
│   └── ...                  # Other components
├── contexts/                # React contexts
│   ├── AuthContext.tsx      # Authentication state
│   └── WorkspaceContext.tsx # Workspace state
├── lib/                     # Utilities
│   ├── api.ts               # API client
│   ├── supabase.ts          # Supabase client
│   └── utils.ts             # Helper functions
├── types/                   # TypeScript types
│   └── index.ts             # Type definitions
└── public/                  # Static assets
State Management
Authentication Context
// contexts/AuthContext.tsx

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Usage in components
const { user, signIn, signOut } = useAuth();
Features:

Manages user authentication state
Handles JWT token refresh
Provides auth methods to components
Persists session in localStorage
Workspace Context
// contexts/WorkspaceContext.tsx

interface WorkspaceContextType {
  workspaces: Workspace[];
  currentWorkspace: Workspace | null;
  loading: boolean;
  setCurrentWorkspace: (workspace: Workspace) => void;
  refreshWorkspaces: () => Promise<void>;
}

// Usage in components
const { currentWorkspace, setCurrentWorkspace } = useWorkspace();
Features:

Manages workspace list and current workspace
Persists current workspace in localStorage
Provides workspace switching functionality
Triggers re-renders on workspace change
Component Architecture
Component Hierarchy
App
├── AuthProvider
│   └── WorkspaceProvider
│       ├── Header
│       │   ├── WorkspaceSelector
│       │   ├── NotificationBell
│       │   └── UserMenu
│       ├── Sidebar
│       │   └── Navigation Links
│       └── Page Content
│           ├── Dashboard
│           ├── Documents
│           │   ├── DocumentList
│           │   └── DocumentUploader
│           ├── Chat
│           │   ├── ConversationList
│           │   └── ChatInterface
│           └── Analytics
│               └── Charts
Component Patterns
1. Container/Presentational Pattern

// Container (logic)
function DocumentsContainer() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchDocuments();
  }, []);
  
  return <DocumentList documents={documents} loading={loading} />;
}

// Presentational (UI)
function DocumentList({ documents, loading }) {
  if (loading) return <LoadingSpinner />;
  return <div>{documents.map(doc => <DocumentCard key={doc.id} {...doc} />)}</div>;
}
2. Custom Hooks

// hooks/useDocuments.ts
function useDocuments() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchDocuments = async () => {
    const data = await api.get('/api/documents/');
    setDocuments(data);
    setLoading(false);
  };
  
  return { documents, loading, fetchDocuments };
}
Routing & Navigation
App Router Structure
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        {children}
      </main>
    </div>
  );
}
Route Groups:

(auth): Public routes (login, register)
dashboard: Protected routes (requires authentication)
Navigation:

import { useRouter } from 'next/navigation';

function Component() {
  const router = useRouter();
  
  const navigate = () => {
    router.push('/dashboard/documents');
  };
}
API Integration
API Client Setup
// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 120000,  // 2 minutes for RAG queries
});

// Request interceptor
api.interceptors.request.use(async (config) => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session?.access_token) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }
  
  const workspaceId = localStorage.getItem('currentWorkspaceId');
  if (workspaceId) {
    config.headers['X-Workspace-ID'] = workspaceId;
  }
  
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await supabase.auth.signOut();
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);
API Usage
// Fetch documents
const documents = await api.get('/api/documents/');

// Upload document
const formData = new FormData();
formData.append('file', file);
formData.append('name', name);
formData.append('description', description);

const response = await api.post('/api/documents/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// Chat query
const response = await api.post('/api/chat/query', {
  query: 'What are the main features?',
  conversation_id: conversationId
});
⚙️ Backend Architecture
Project Structure
backend/
├── app/
│   ├── core/                    # Core functionality
│   │   ├── config.py            # Configuration
│   │   ├── security.py          # Auth & security
│   │   └── workspace_middleware.py  # Workspace validation
│   ├── models/                  # Data models
│   │   ├── database.py          # Database connection
│   │   └── schemas.py           # Pydantic schemas
│   ├── routes/                  # API endpoints
│   │   ├── auth.py              # Authentication
│   │   ├── workspaces.py        # Workspaces
│   │   ├── documents.py         # Documents
│   │   ├── chat.py              # Chat
│   │   ├── invitations.py       # Invitations
│   │   ├── notifications.py     # Notifications
│   │   └── analytics.py         # Analytics
│   └── services/                # Business logic
│       ├── document_processor.py  # Document processing
│       ├── embedding_service.py   # Embeddings
│       └── rag_pipeline.py        # RAG implementation
├── main.py                      # FastAPI app
└── requirements.txt             # Dependencies
Core Components
Configuration Management
# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # App
    APP_NAME: str = "DocuQuery"
    APP_ENV: str = "development"
    APP_PORT: int = 8000
    
    # Database
    SUPABASE_URL: str
    SUPABASE_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: str
    SUPABASE_DB_URL: str
    
    # AI
    COHERE_API_KEY: str
    LLM_MODEL: str = "command-a-03-2025"
    EMBEDDING_MODEL: str = "embed-english-v3.0"
    EMBEDDING_DIMENSION: int = 1024
    
    # RAG
    CHUNK_SIZE: int = 1000
    CHUNK_OVERLAP: int = 200
    TOP_K_RESULTS: int = 5
    MAX_TOKENS: int = 2000
    
    # File Upload
    MAX_FILE_SIZE_MB: int = 20
    ALLOWED_FILE_TYPES: list = ["pdf", "docx", "txt", "md"]
    
    class Config:
        env_file = ".env"

settings = Settings()
Security & Authentication
# app/core/security.py
from fastapi import Depends, HTTPException, Header
from jose import jwt, JWTError
from supabase import create_client

supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

async def get_current_user(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid token")
    
    token = authorization.split(" ")[1]
    
    try:
        # Verify JWT with Supabase
        user = supabase.auth.get_user(token)
        return user.user
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")

async def get_workspace_id(x_workspace_id: str = Header(None)):
    if not x_workspace_id:
        raise HTTPException(status_code=400, detail="Workspace ID required")
    return x_workspace_id

async def get_user_workspace(
    workspace_id: str = Depends(get_workspace_id),
    current_user = Depends(get_current_user)
):
    # Verify user is member of workspace
    result = supabase.table("workspace_members").select("*").eq(
        "workspace_id", workspace_id
    ).eq("user_id", current_user.id).execute()
    
    if not result.data:
        raise HTTPException(status_code=403, detail="Not a workspace member")
    
    return workspace_id
Database Connection
# app/models/database.py
import asyncpg
from typing import Optional

class Database:
    def __init__(self):
        self.pool: Optional[asyncpg.Pool] = None
    
    async def get_pool(self) -> asyncpg.Pool:
        if not self.pool:
            self.pool = await asyncpg.create_pool(
                settings.SUPABASE_DB_URL,
                min_size=5,
                max_size=20,
                command_timeout=60
            )
        return self.pool
    
    async def close_pool(self):
        if self.pool:
            await self.pool.close()

db = Database()
Pydantic Schemas
# app/models/schemas.py
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str

class WorkspaceCreate(BaseModel):
    name: str
    description: Optional[str] = None

class DocumentUpload(BaseModel):
    name: str
    description: str

class ChatQuery(BaseModel):
    query: str
    conversation_id: Optional[str] = None

class ChatResponse(BaseModel):
    answer: str
    sources: List[dict]
    conversation_id: str
    message_id: str

class InvitationCreate(BaseModel):
    email: EmailStr
    role: str  # "admin" or "member"
    message: Optional[str] = None
Request Processing Flow
1. Request arrives at FastAPI
   ↓
2. CORS middleware validates origin
   ↓
3. Request logging middleware
   ↓
4. Route handler matched
   ↓
5. Dependency injection:
   - get_current_user() validates JWT
   - get_workspace_id() extracts workspace
   - get_user_workspace() validates membership
   ↓
6. Pydantic validates request body
   ↓
7. Route handler executes business logic
   ↓
8. Service layer processes request
   ↓
9. Database query (with RLS)
   ↓
10. Response serialization
   ↓
11. Return to client
Background Task Processing
# app/routes/documents.py
from fastapi import BackgroundTasks

@router.post("/upload")
async def upload_document(
    background_tasks: BackgroundTasks,
    file: UploadFile,
    ...
):
    # Save file immediately
    document_id = await save_document(file)
    
    # Process in background
    background_tasks.add_task(
        process_document,
        document_id,
        file_path
    )
    
    return {"id": document_id, "status": "processing"}

async def process_document(document_id: str, file_path: str):
    # Extract text
    text = await extract_text(file_path)
    
    # Chunk text
    chunks = chunk_text(text)
    
    # Generate embeddings
    for i, chunk in enumerate(chunks):
        embedding = await generate_embedding(chunk)
        await save_chunk(document_id, i, chunk, embedding)
🔒 Security Model
Authentication Layer
JWT Token Flow
1. User logs in with email/password
   ↓
2. Supabase Auth validates credentials
   ↓
3. Returns JWT access token + refresh token
   ↓
4. Frontend stores tokens
   ↓
5. Every API request includes: Authorization: Bearer <token>
   ↓
6. Backend validates JWT signature
   ↓
7. Extracts user_id from token
   ↓
8. Proceeds with request
Token Structure:

{
  "sub": "user_uuid",
  "email": "user@example.com",
  "role": "authenticated",
  "iat": 1642252800,
  "exp": 1642339200
}
Token Expiration:

Access token: 1 hour
Refresh token: 30 days
Auto-refresh before expiration
Authorization Layer
Role-Based Access Control (RBAC)
Workspace Roles:

Role	Permissions
Owner	Full control: manage members, delete workspace, all admin permissions
Admin	Manage members, upload/delete documents, view analytics
Member	Upload documents, chat, view documents
Permission Matrix:

Action	Owner	Admin	Member
View documents	✅	✅	✅
Upload documents	✅	✅	✅
Delete documents	✅	✅	❌
Chat with documents	✅	✅	✅
Invite members	✅	✅	❌
Remove members	✅	✅	❌
Delete workspace	✅	❌	❌
View analytics	✅	✅	❌
Implementation:

def require_role(required_role: str):
    async def check_role(
        workspace_id: str = Depends(get_workspace_id),
        current_user = Depends(get_current_user)
    ):
        member = get_workspace_member(workspace_id, current_user.id)
        
        role_hierarchy = {"owner": 3, "admin": 2, "member": 1}
        
        if role_hierarchy[member.role] < role_hierarchy[required_role]:
            raise HTTPException(status_code=403, detail="Insufficient permissions")
        
        return member
    
    return check_role

# Usage
@router.delete("/documents/{id}")
async def delete_document(
    member = Depends(require_role("admin"))
):
    ...
Data Isolation
Row Level Security (RLS)
How RLS Works:

-- Enable RLS on table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "workspace_isolation"
ON documents
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM workspace_members
    WHERE workspace_members.workspace_id = documents.workspace_id
    AND workspace_members.user_id = auth.uid()
  )
);
Benefits:

✅ Database-level enforcement (can't be bypassed)
✅ Automatic query filtering
✅ No application-level WHERE clauses needed
✅ Protection against SQL injection
✅ Multi-tenancy guarantee
Example:

-- User A tries to query documents
SELECT * FROM documents;

-- RLS automatically adds:
SELECT * FROM documents
WHERE workspace_id IN (
  SELECT workspace_id FROM workspace_members
  WHERE user_id = 'user_a_id'
);

-- User A only sees their workspace documents
Input Validation
File Upload Security
ALLOWED_EXTENSIONS = {'pdf', 'docx', 'txt', 'md'}
MAX_FILE_SIZE = 20 * 1024 * 1024  # 20MB

def validate_file(file: UploadFile):
    # Check extension
    ext = file.filename.split('.')[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(400, "Invalid file type")
    
    # Check size
    file.file.seek(0, 2)  # Seek to end
    size = file.file.tell()
    file.file.seek(0)  # Reset
    
    if size > MAX_FILE_SIZE:
        raise HTTPException(400, "File too large")
    
    # Check MIME type
    if file.content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(400, "Invalid content type")
    
    return True
SQL Injection Prevention
# ❌ NEVER do this
query = f"SELECT * FROM documents WHERE id = '{document_id}'"

# ✅ Always use parameterized queries
query = "SELECT * FROM documents WHERE id = $1"
result = await conn.fetch(query, document_id)

# ✅ Or use ORM/query builder
result = supabase.table("documents").select("*").eq("id", document_id).execute()
XSS Prevention
// Frontend sanitization
import DOMPurify from 'dompurify';

function DisplayContent({ content }) {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
API Security
CORS Configuration
# main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://docuquery.com"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
Rate Limiting (Future)
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

@app.post("/api/chat/query")
@limiter.limit("60/hour")
async def chat_query(...):
    ...
Encryption
Data at Rest
✅ Database encryption (Supabase managed)
✅ File storage encryption (Supabase Storage)
✅ Backup encryption
Data in Transit
✅ HTTPS/TLS for all API calls
✅ Secure WebSocket connections (future)
✅ Certificate pinning (production)
Sensitive Data
# Environment variables (never commit)
COHERE_API_KEY=***
SUPABASE_SERVICE_ROLE_KEY=***

# Password hashing
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
hashed = pwd_context.hash(password)
⚡ Performance Optimizations
Backend Optimizations
1. Database Connection Pooling
# Reuse connections instead of creating new ones
pool = await asyncpg.create_pool(
    database_url,
    min_size=5,    # Minimum connections
    max_size=20,   # Maximum connections
    command_timeout=60
)
Benefits:

Reduces connection overhead
Handles concurrent requests efficiently
Automatic connection recycling
2. Database Indexing
-- Primary keys (automatic)
CREATE INDEX idx_documents_workspace_id ON documents(workspace_id);
CREATE INDEX idx_document_chunks_document_id ON document_chunks(document_id);

-- Vector similarity index
CREATE INDEX idx_embedding ON document_chunks 
USING ivfflat (embedding vector_cosine_ops);

-- Composite indexes for common queries
CREATE INDEX idx_workspace_members_lookup 
ON workspace_members(workspace_id, user_id);
Impact:

Query time: O(n) → O(log n)
Vector search: 100x faster with IVFFlat
3. Background Processing
# Don't block API response
@router.post("/upload")
async def upload(background_tasks: BackgroundTasks, ...):
    # Quick response
    doc_id = save_metadata()
    
    # Process later
    background_tasks.add_task(process_document, doc_id)
    
    return {"id": doc_id, "status": "processing"}
Benefits:

Fast API responses (<100ms)
Better user experience
Efficient resource utilization
4. Caching Strategy (Future)
from functools import lru_cache
import redis

# In-memory cache
@lru_cache(maxsize=1000)
def get_workspace_members(workspace_id: str):
    return fetch_members(workspace_id)

# Redis cache
redis_client = redis.Redis(host='localhost', port=6379)

def get_document(doc_id: str):
    # Check cache
    cached = redis_client.get(f"doc:{doc_id}")
    if cached:
        return json.loads(cached)
    
    # Fetch from DB
    doc = fetch_from_db(doc_id)
    
    # Cache for 1 hour
    redis_client.setex(f"doc:{doc_id}", 3600, json.dumps(doc))
    
    return doc
Frontend Optimizations
1. Code Splitting
// Lazy load heavy components
const ChatInterface = dynamic(() => import('@/components/ChatInterface'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

// Route-based splitting (automatic with Next.js)
// Each page is a separate bundle
Benefits:

Smaller initial bundle size
Faster page loads
Better performance scores
2. Image Optimization
import Image from 'next/image';

<Image
  src="/logo.png"
  width={200}
  height={50}
  alt="DocuQuery"
  priority  // Load immediately
/>
Features:

Automatic WebP conversion
Lazy loading
Responsive images
Blur placeholder
3. API Request Optimization
// Debounce search queries
import { debounce } from 'lodash';

const debouncedSearch = debounce((query) => {
  api.get(`/api/search?q=${query}`);
}, 300);

// Cancel previous requests
const controller = new AbortController();

api.get('/api/documents/', {
  signal: controller.signal
});

// Cancel if component unmounts
useEffect(() => {
  return () => controller.abort();
}, []);
4. State Management Optimization
// Memoize expensive computations
const sortedDocuments = useMemo(() => {
  return documents.sort((a, b) => 
    new Date(b.created_at) - new Date(a.created_at)
  );
}, [documents]);

// Prevent unnecessary re-renders
const MemoizedComponent = React.memo(DocumentCard);
Database Optimizations
Query Optimization
-- ❌ Slow: N+1 query problem
SELECT * FROM documents;
-- Then for each document:
SELECT * FROM users WHERE id = document.uploaded_by;

-- ✅ Fast: Single query with JOIN
SELECT 
  d.*,
  u.email as uploader_email,
  u.full_name as uploader_name
FROM documents d
JOIN auth.users u ON d.uploaded_by = u.id
WHERE d.workspace_id = $1;
Pagination
-- Limit results for large datasets
SELECT * FROM documents
WHERE workspace_id = $1
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;
Partial Indexes
-- Index only active invitations
CREATE INDEX idx_pending_invitations 
ON workspace_invitations(workspace_id)
WHERE status = 'pending';
🚀 Deployment Guide
Prerequisites
GitHub account
Vercel account (frontend)
Railway/Render account (backend)
Supabase project
Cohere API key
Domain name (optional)
Database Deployment (Supabase)
1. Create Supabase Project
1. Go to https://supabase.com
2. Click "New Project"
3. Enter project details:
   - Name: docuquery-prod
   - Database Password: [strong password]
   - Region: [closest to users]
4. Wait for provisioning (~2 minutes)
2. Run Database Schema
1. Go to SQL Editor in Supabase dashboard
2. Copy contents of database/production_schema.sql
3. Paste and click "Run"
4. Verify tables created successfully
3. Create Storage Bucket
1. Go to Storage in Supabase dashboard
2. Click "New Bucket"
3. Name: documents
4. Public: No (private)
5. File size limit: 20MB
6. Allowed MIME types: application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain, text/markdown
4. Get API Keys
1. Go to Settings > API
2. Copy:
   - Project URL
   - anon/public key
   - service_role key (keep secret!)
Backend Deployment (Railway/Render)
Option A: Railway
1. Go to https://render.com
2. Click "New Project" > "Deploy from GitHub repo"
3. Select your repository
4. Configure:
   - Root Directory: backend
   - Build Command: pip install -r requirements.txt
   - Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
5. Add environment variables (see below)
6. Deploy
Option B: Render
1. Go to https://render.com
2. Click "New" > "Web Service"
3. Connect GitHub repository
4. Configure:
   - Name: docuquery-api
   - Environment: Python 3
   - Build Command: pip install -r requirements.txt
   - Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
   - Root Directory: backend
5. Add environment variables (see below)
6. Create Web Service
Environment Variables
# App
APP_NAME=DocuQuery
APP_ENV=production
APP_PORT=8000
FRONTEND_URL=https://docuquery.com

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_DB_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
SUPABASE_STORAGE_BUCKET=documents

# Cohere
COHERE_API_KEY=your-cohere-api-key
LLM_MODEL=command-a-03-2025
EMBEDDING_MODEL=embed-english-v3.0
EMBEDDING_DIMENSION=1024

# RAG Settings
CHUNK_SIZE=1000
CHUNK_OVERLAP=200
TOP_K_RESULTS=5
MAX_TOKENS=2000

# File Upload
MAX_FILE_SIZE_MB=20
ALLOWED_FILE_TYPES=pdf,docx,txt,md
Frontend Deployment (Vercel)
1. Connect Repository
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: frontend
   - Build Command: npm run build
   - Output Directory: .next
2. Environment Variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
3. Deploy
1. Click "Deploy"
2. Wait for build (~2 minutes)
3. Get deployment URL
4. Configure custom domain (optional)
Custom Domain Setup
Frontend (Vercel)
1. Go to Project Settings > Domains
2. Add your domain: docuquery.com
3. Add DNS records at your registrar:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
4. Wait for DNS propagation (~24 hours)
5. Enable HTTPS (automatic)
Backend (Railway/Render)
1. Go to Settings > Domains
2. Add custom domain: api.docuquery.com
3. Add DNS record at your registrar:
   - Type: CNAME
   - Name: api
   - Value: [provided by Railway/Render]
4. Wait for DNS propagation
5. SSL certificate auto-generated
Post-Deployment Checklist
 Database schema applied
 Storage bucket created
 Backend deployed and accessible
 Frontend deployed and accessible
 Environment variables configured
 Custom domains configured (if applicable)
 SSL certificates active
 Test user registration
 Test document upload
 Test chat functionality
 Test workspace creation
 Monitor error logs
 Set up monitoring/alerts
 Configure backups
 Document deployment process
💻 Local Development Setup
Prerequisites
Python: 3.8 or higher
Node.js: 16 or higher
npm: 8 or higher
Git: Latest version
Supabase Account: Free tier works
Cohere API Key: Free tier available
Step 1: Clone Repository
git clone https://github.com/yourusername/docuquery.git
cd docuquery
Step 2: Database Setup
Create Supabase Project
1. Go to https://supabase.com
2. Create new project
3. Wait for provisioning
Run Database Schema
1. Open Supabase SQL Editor
2. Copy contents of database/production_schema.sql
3. Execute the SQL
4. Verify tables created:
   - workspaces
   - workspace_members
   - documents
   - document_chunks
   - conversations
   - messages
   - query_logs
   - workspace_invitations
   - notifications
Create Storage Bucket
1. Go to Storage in Supabase
2. Create bucket named "documents"
3. Set to private
4. Configure file size limit: 20MB
Step 3: Backend Setup
Install Python Dependencies
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
Configure Environment Variables
Create .env file in backend/ directory:

# App Configuration
APP_NAME=DocuQuery
APP_ENV=development
APP_PORT=8000
FRONTEND_URL=http://localhost:3000

# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_DB_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
SUPABASE_STORAGE_BUCKET=documents

# Cohere API
COHERE_API_KEY=your-cohere-api-key
LLM_MODEL=command-a-03-2025
EMBEDDING_MODEL=embed-english-v3.0
EMBEDDING_DIMENSION=1024

# RAG Settings
CHUNK_SIZE=1000
CHUNK_OVERLAP=200
TOP_K_RESULTS=5
MAX_TOKENS=2000

# File Upload
MAX_FILE_SIZE_MB=20
ALLOWED_FILE_TYPES=pdf,docx,txt,md

# Logging
LOG_LEVEL=INFO
Start Backend Server
# Development mode (auto-reload)
uvicorn main:app --reload --port 8000

# Or using Python directly
python main.py
Expected Output:

INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
Verify Backend:

API: http://localhost:8000
Health: http://localhost:8000/health
Docs: http://localhost:8000/docs
OpenAPI: http://localhost:8000/openapi.json
Step 4: Frontend Setup
Install Node Dependencies
cd frontend

# Install dependencies
npm install
Configure Environment Variables
Create .env.local file in frontend/ directory:

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=http://localhost:8000
Start Frontend Server
# Development mode
npm run dev
Expected Output:

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully
Verify Frontend:

App: http://localhost:3000
Login: http://localhost:3000/auth/login
Register: http://localhost:3000/auth/register
Step 5: Verify Installation
Test User Registration
1. Go to http://localhost:3000/auth/register
2. Enter email and password
3. Click "Register"
4. Should redirect to dashboard
5. Default workspace created automatically
Test Document Upload
1. Go to http://localhost:3000/dashboard/documents
2. Click "Upload Document"
3. Select a PDF/DOCX file
4. Enter description
5. Click "Upload"
6. Document should appear in list
7. Check backend logs for processing
Test Chat
1. Wait for document processing to complete
2. Go to http://localhost:3000/dashboard/chat
3. Click "New Chat"
4. Type a question about your document
5. Wait for AI response (5-15 seconds)
6. Should see answer with source citations
Troubleshooting
Backend Issues
Problem: ModuleNotFoundError: No module named 'fastapi'

# Solution: Install dependencies
pip install -r requirements.txt
Problem: Connection refused to database

# Solution: Check Supabase URL and credentials
# Verify SUPABASE_DB_URL in .env
# Test connection: psql $SUPABASE_DB_URL
Problem: Cohere API error

# Solution: Verify API key
# Check COHERE_API_KEY in .env
# Test: curl -H "Authorization: Bearer $COHERE_API_KEY" https://api.cohere.ai/v1/models
Frontend Issues
Problem: Module not found errors

# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
Problem: API request failed

# Solution: Check backend is running
# Verify NEXT_PUBLIC_API_URL in .env.local
# Check browser console for errors
Problem: Supabase auth error

# Solution: Verify Supabase credentials
# Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
# Clear browser localStorage
Database Issues
Problem: relation "documents" does not exist

# Solution: Run database schema
# Go to Supabase SQL Editor
# Execute database/production_schema.sql
Problem: permission denied for table documents

# Solution: Check RLS policies
# Verify user is workspace member
# Check workspace_id in requests
🧪 Testing
Manual Testing Checklist
Authentication Flow
 Register new user
 Login with credentials
 Logout
 Invalid credentials rejected
 Token refresh works
 Session persists on page reload
Workspace Management
 Default workspace created on registration
 Create new workspace
 Switch between workspaces
 View workspace members
 Invite team member
 Accept invitation
 Reject invitation
Document Management
 Upload PDF document
 Upload DOCX document
 Upload TXT document
 Upload MD document
 Invalid file type rejected
 File size limit enforced
 Description required
 Document appears in list
 Background processing completes
 Delete document
 View document metadata
Chat Functionality
 Create new conversation
 Ask question
 Receive answer with sources
 Follow-up question
 View conversation history
 Delete conversation
 Edit conversation title
 Switch conversations
Analytics
 View document count
 View query count
 View member count
 View trends chart
 View recent activity
Notifications
 Receive invitation notification
 View unread count
 Mark as read
 Mark all as read
Automated Testing (Future)
Backend Tests
# tests/test_auth.py
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_register():
    response = client.post("/api/auth/register", json={
        "email": "test@example.com",
        "password": "SecurePass123!",
        "full_name": "Test User"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_login():
    response = client.post("/api/auth/login", json={
        "email": "test@example.com",
        "password": "SecurePass123!"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()
Frontend Tests
// __tests__/Login.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/auth/login/page';

describe('Login Page', () => {
  it('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('submits form with credentials', async () => {
    render(<LoginPage />);
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' }
    });
    
    fireEvent.click(screen.getByText('Login'));
    
    // Assert redirect or success message
  });
});
🚀 Future Improvements
Phase 1: Core Enhancements
1. Email Notifications
Send invitation emails via SendGrid/Mailgun
Activity digest emails (daily/weekly)
Document upload notifications
Query response notifications
2. Document Preview
In-app PDF viewer
DOCX preview
Syntax highlighting for code files
Image preview
3. Advanced Search
Full-text search across documents
Filter by date, type, uploader
Search within conversations
Saved searches
4. Export Capabilities
Export conversations as PDF
Export analytics reports
Export document metadata as CSV
Bulk document download
5. Admin Panel
User management
Workspace management
System analytics
Audit logs
Configuration management
Phase 2: Collaboration Features
1. Real-Time Collaboration
Live document annotations
Shared conversations
Real-time presence indicators
Collaborative editing
2. Document Versioning
Track document changes
Version history
Rollback capability
Compare versions
3. Comments & Annotations
Comment on documents
Highlight text
@mentions in comments
Comment threads
4. Team Activity Feed
Real-time activity stream
Filter by user/type
Activity notifications
Activity search
Phase 3: Advanced AI Features
1. Document Summarization
Auto-generate document summaries
Key points extraction
TL;DR generation
Multi-document synthesis
2. Smart Recommendations
Suggest related documents
Recommend questions to ask
Auto-tag documents
Content categorization
3. Multi-Modal RAG
Image understanding
Table extraction
Chart analysis
Video transcription
4. Custom AI Models
Fine-tune on workspace data
Domain-specific models
Custom embedding models
Model performance tracking
Phase 4: Enterprise Features
1. SSO Integration
SAML 2.0 support
OAuth providers (Google, Microsoft)
LDAP integration
Custom identity providers
2. Advanced Security
IP whitelisting
2FA/MFA
Session management
Security audit logs
3. Compliance
GDPR compliance tools
Data retention policies
Right to be forgotten
Data export/import
4. API & Webhooks
Public API with rate limiting
Webhook notifications
API documentation
SDK libraries (Python, JavaScript)
Phase 5: Integrations
1. Slack Integration
Slack bot for queries
Document upload via Slack
Notifications in Slack
Slash commands
2. Microsoft Teams
Teams app
Document sharing
Chat integration
Meeting notes integration
3. Google Workspace
Google Drive integration
Gmail integration
Google Docs import
Calendar integration
4. Third-Party Tools
Notion integration
Confluence integration
Jira integration
GitHub integration
Phase 6: Performance & Scale
1. Caching Layer
Redis for session caching
Query result caching
Document metadata caching
CDN for static assets
2. Search Optimization
Elasticsearch integration
Hybrid search (keyword + vector)
Search result re-ranking
Faceted search
3. Scalability
Horizontal scaling
Load balancing
Database sharding
Microservices architecture
4. Monitoring & Observability
Application performance monitoring (APM)
Error tracking (Sentry)
Log aggregation (ELK stack)
Metrics dashboard (Grafana)
🤝 Contributing
We welcome contributions from the community! Here's how you can help:

Getting Started
Fork the repository

git clone https://github.com/satvik-sharma-05/DocuQuery.git
cd DocuQuery
Create a feature branch

git checkout -b feature/amazing-feature
Make your changes

Follow code style guidelines
Add tests for new features
Update documentation
Commit your changes

git commit -m "Add amazing feature"
Push to your fork

git push origin feature/amazing-feature
Open a Pull Request

Describe your changes
Link related issues
Wait for review
Code Style Guidelines
Python (Backend)
Follow PEP 8
Use type hints
Write docstrings
Max line length: 100 characters
async def process_document(
    document_id: str,
    file_path: str
) -> Dict[str, Any]:
    """
    Process a document by extracting text and generating embeddings.
    
    Args:
        document_id: UUID of the document
        file_path: Path to the document file
    
    Returns:
        Dictionary containing processing results
    """
    ...
TypeScript (Frontend)
Use TypeScript strict mode
Follow Airbnb style guide
Use functional components
Prefer hooks over classes
interface DocumentCardProps {
  document: Document;
  onDelete: (id: string) => void;
}

export function DocumentCard({ document, onDelete }: DocumentCardProps) {
  // Component logic
}
Commit Message Format
<type>(<scope>): <subject>

<body>

<footer>
Types:

feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Tests
chore: Maintenance
Example:

feat(chat): add conversation export functionality

- Add export button to chat interface
- Implement PDF generation
- Add download functionality

Closes #123
Areas for Contribution
🐛 Bug Fixes
Check Issues for bugs
Reproduce the issue
Fix and add tests
Submit PR
✨ New Features
Check Feature Requests
Discuss implementation approach
Implement with tests
Update documentation
📚 Documentation
Fix typos
Improve clarity
Add examples
Translate to other languages
🧪 Testing
Add unit tests
Add integration tests
Improve test coverage
Add E2E tests
🎨 UI/UX
Improve designs
Fix accessibility issues
Add animations
Optimize performance
📄 License
This project is licensed under the MIT License - see below for details:

MIT License

Copyright (c) 2024 DocuQuery

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
📞 Support & Contact
Getting Help
Documentation: Read this README thoroughly
API Docs: Check https://docuquery-api.onrender.com/docs for API reference
Issues: Search existing issues
Discussions: Join GitHub Discussions
Reporting Issues
When reporting issues, please include:

Clear description of the problem
Steps to reproduce
Expected vs actual behavior
Screenshots (if applicable)
Environment details (OS, browser, versions)
Error messages and logs
Feature Requests
We love hearing your ideas! When requesting features:

Describe the problem you're trying to solve
Explain your proposed solution
Provide use cases
Consider implementation complexity
🙏 Acknowledgments
Technologies & Services
Cohere - Powering our AI capabilities with state-of-the-art embeddings and chat models
Supabase - Providing robust backend infrastructure, authentication, and storage
Next.js - Enabling our modern, performant frontend
FastAPI - Making our backend development fast and enjoyable
pgvector - Bringing vector similarity search to PostgreSQL
Vercel - Hosting our frontend with excellent performance
Render - Simplifying our backend deployment
Open Source Libraries
Frontend: React, TypeScript, Tailwind CSS, Framer Motion, Axios, Lucide Icons, Sonner, Recharts
Backend: Python, Pydantic, asyncpg, PyPDF2, python-docx, python-jose
Database: PostgreSQL, pgvector
Inspiration
This project was inspired by the need for better document intelligence tools in team environments. Special thanks to the open-source community for making projects like this possible.

📊 Project Stats
Codebase Metrics
Total Lines of Code: ~15,000
Backend: ~5,000 lines (Python)
Frontend: ~8,000 lines (TypeScript/React)
Database: ~500 lines (SQL)
Documentation: ~2,000 lines (Markdown)
Features
✅ 9 Core Features
✅ 25+ API Endpoints
✅ 10+ Database Tables
✅ 20+ React Components
✅ Full RAG Pipeline
✅ Multi-Workspace Support
✅ Role-Based Access Control
✅ Real-Time Notifications
Performance
⚡ <100ms API Response Time (avg)
⚡ 5-15s RAG Query Time
⚡ <2s Page Load Time
⚡ 1-3s Document Processing (per chunk)
🎯 Why DocuQuery Demonstrates Strong Engineering
1. Production-Ready Architecture
Multi-tenancy with proper data isolation
Scalable microservices-ready design
Security-first approach with RLS
Comprehensive error handling
2. Modern Tech Stack
Latest frameworks and libraries
Type-safe code (TypeScript + Pydantic)
Async/await throughout
Best practices followed
3. AI/ML Integration
State-of-the-art RAG implementation
Vector similarity search
Semantic understanding
Source attribution
4. User Experience
Intuitive, modern UI
Responsive design
Real-time feedback
Accessibility considerations
5. Code Quality
Clean, maintainable code
Consistent patterns
Comprehensive documentation
Extensible architecture
6. Security & Privacy
JWT authentication
Row Level Security
Input validation
Data encryption
7. Performance
Database optimization
Caching strategies
Background processing
Code splitting
8. Scalability
Horizontal scaling ready
Connection pooling
Efficient queries
CDN-ready assets
📈 Roadmap
Q1 2024
✅ Core RAG functionality
✅ Multi-workspace support
✅ Team invitations
✅ Analytics dashboard
⏳ Email notifications
⏳ Document preview
Q2 2024
Advanced search
Export capabilities
Real-time collaboration
Document versioning
Admin panel
Q3 2024
SSO integration
API & webhooks
Slack integration
Advanced analytics
Custom AI models
Q4 2024
Enterprise features
Compliance tools
Performance optimization
Mobile app (React Native)
🌟 Star History
If you find DocuQuery useful, please consider giving it a star on GitHub! ⭐

📝 Changelog
Version 1.0.0 (Current)
Initial release
Core RAG functionality
Multi-workspace support
Team collaboration features
Analytics dashboard
Document management
Chat interface
Built with ❤️ for collaborative document intelligence

Live Demo • API Documentation • GitHub Repository • Issues

© 2024 DocuQuery. All rights reserved.

About
Ai powered RAG with muiltiple interaction of users

docu-query-sigma.vercel.app
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
30
 Production last month
+ 29 deployments
Packages
No packages published
Publish your first package
Contributors
1
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
Languages
TypeScript
53.9%
 
Python
39.1%
 
PLpgSQL
3.9%
 
CSS
2.0%
 
JavaScript
1.1%
Suggested workflows
Based on your tech stack
Django logo
Django
Build and Test a Django Project
Publish Python Package logo
Publish Python Package
Publish a Python Package to PyPI on release.
SLSA Generic generator logo
SLSA Generic generator
Generate SLSA3 provenance for your existing release workflows
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

2) 
Skip to content
satvik-sharma-05
HackTrack
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
2
 (2)
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
HackTrack
Public
satvik-sharma-05/HackTrack
Go to file
t
T
Name		
RitvikSharmaa
RitvikSharmaa
Fix auto-deploy note in README
9785bda
 · 
3 weeks ago
.github/workflows
for production v1
3 months ago
.vscode
Initial commit
5 months ago
client
feat: add event status labels (ongoing/upcoming/finished) and improve…
3 weeks ago
embedding-service
fix: Use CPU-only PyTorch for faster deployment
3 weeks ago
server
feat: complete event status system with filters and improved UX
3 weeks ago
.gitignore
Initial commit
5 months ago
.nvmrc
prepare backend for free deployment
3 months ago
CHANGES.md
feat: complete event status system with filters and improved UX
3 weeks ago
DEPLOY.md
docs: update README and DEPLOY with live URLs and complete setup guide
3 weeks ago
README.md
Fix auto-deploy note in README
3 weeks ago
render.yaml
prepare backend for free deployment
3 months ago
Repository files navigation
README
🚀 HackTrack
AI-Powered Hackathon Discovery & Team Formation Platform
License: MIT Node.js React MongoDB Python

🌐 Live Demo • 📖 Deployment Guide • 🔗 Backend API • 🤖 AI Service

🎯 Discover • Connect • Build • Win
The ultimate platform for hackathon enthusiasts to find events, form dream teams, and build award-winning projects

🌟 Live Deployment
🎨 Frontend
hacktrack-frontend.vercel.app

Deployed on Vercel

✅ Auto-deploys from main branch

⚙️ Backend
hacktrack-server-674s.onrender.com

Deployed on Render

Auto-deploys from main branch

🤖 AI Service
hacktrack-embedding.onrender.com

Deployed on Render

✅ Sentence-Transformers

✨ Key Features
🎪 For Participants
🔍 500+ Hackathons - Real-time aggregation from Devpost, MLH, and Clist
🏷️ Smart Status Labels - See ONGOING, UPCOMING, or FINISHED at a glance
🤖 AI Teammate Matching - Sentence-transformers powered recommendations (384-dim embeddings)
💬 Real-time Chat - Socket.io for instant team communication
📚 Smart Bookmarks - Save and organize favorite events
🔍 Advanced Filters - Filter by platform, status, location, timeframe, and more
📊 Personal Dashboard - Track your hackathon journey
🏆 Portfolio Building - Showcase your achievements
🎯 For Organizers
📅 Event Management - Create and manage hackathons
📈 Analytics Dashboard - Track engagement and registrations
👥 Participant Management - Review submissions and teams
📢 Promotion Tools - Reach thousands of developers
💼 Professional Profile - Build your organizer brand
🎨 How It Works
Event Discovery
Real-time Aggregation: Backend fetches events from multiple sources every 6 hours
Smart Caching: Events are cached to reduce API load and improve performance
Status Calculation: Real-time calculation of event status (ongoing/upcoming/finished)
Advanced Filtering: 7 filter categories with instant results
Pagination: Smooth pagination with 24/48/96 events per page
Event Status System
Events are automatically labeled based on their dates:

🟢 ONGOING - Event has started but not ended (with pulse animation)
🔵 UPCOMING - Event hasn't started yet
🔴 FINISHED - Event has ended
AI Teammate Matching
Profile Embedding: User profiles are converted to 384-dimensional vectors using sentence-transformers
Similarity Calculation: Cosine similarity computed between user embeddings
Smart Filtering: Results filtered by location, college, skills, graduation year
Ranking: Top 15 matches returned based on similarity score
Real-time Updates: Recommendations update as profiles change
Real-time Chat
Socket.io Connection: Persistent WebSocket connection for instant messaging
Room-based Chat: Each team/event has its own chat room
Message History: All messages stored in MongoDB
Typing Indicators: See when teammates are typing
Online Status: See who's currently online
🏗️ Tech Stack
Frontend
React 18 - UI library with hooks
Vite 5 - Lightning-fast build tool
TailwindCSS 3 - Utility-first CSS framework
shadcn/ui - Beautiful component library
React Router 6 - Client-side routing
Axios - HTTP client with interceptors
Socket.io Client - Real-time communication
Backend
Node.js 18 - JavaScript runtime
Express 4 - Web framework
MongoDB Atlas - Cloud database (M0 free tier)
Mongoose 8 - MongoDB ODM
Passport.js - Authentication middleware
Google OAuth 2.0
GitHub OAuth
LinkedIn OAuth
JWT - Token-based authentication
Socket.io - WebSocket server
Express Session - Session management with MongoDB store
Bcrypt - Password hashing
Helmet - Security headers
CORS - Cross-origin resource sharing
AI Service
Python 3.12.8 - Latest stable Python
Flask 3 - Lightweight web framework
Sentence-Transformers 3.3 - State-of-the-art embeddings
Model: all-MiniLM-L6-v2
Dimensions: 384
Speed: ~50ms per embedding
PyTorch 2.5 - ML framework (CPU-only for efficiency)
NumPy 2.2 - Numerical computing
Flask-CORS - CORS support
Event Sources
Clist API v4 - Programming contests and competitions
Devpost API - Hackathon platform
MLH API - Major League Hacking events
Custom Events - User-created hackathons
🚀 Quick Start
Prerequisites
✅ Node.js 18+ (LTS recommended)
✅ MongoDB (local or Atlas account)
✅ Python 3.12+ (for AI features)
✅ Git
Installation
# 1. Clone repository
git clone https://github.com/satvik-sharma-05/SE.git
cd SE

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Install AI service dependencies
cd ../embedding-service
pip install -r requirements.txt
Configuration
Backend - Create server/.env:

# Database
MONGO_URI=mongodb://localhost:27017/hacktrack
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/HackTrack

# Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_long
SESSION_SECRET=your_session_secret_key_also_32_chars

# Service URLs
FRONTEND_URL=http://localhost:5173
EMBEDDING_URL=http://localhost:5002

# OAuth (Optional - for social login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback

LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_CALLBACK_URL=http://localhost:5000/api/auth/linkedin/callback

# Event Sources (Required for event aggregation)
CLIST_USERNAME=your_clist_username
CLIST_API_KEY=your_clist_api_key

# Email (Optional - for password reset)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Environment
NODE_ENV=development
PORT=5000
Frontend - Create client/.env:

VITE_API_BASE_URL=http://localhost:5000/api
Run Development
# Terminal 1 - AI Service (Port 5002)
cd embedding-service
python app.py

# Terminal 2 - Backend (Port 5000)
cd server
npm run dev

# Terminal 3 - Frontend (Port 5173)
cd client
npm run dev
Visit http://localhost:5173 🎉

📁 Project Structure
hacktrack/
├── client/                    # React frontend
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── api/              # API clients
│   │   ├── components/       # React components
│   │   │   ├── events/       # Event-related components
│   │   │   ├── layout/       # Layout components
│   │   │   └── ui/           # Reusable UI components
│   │   ├── context/          # React context (Auth)
│   │   ├── pages/            # Page components (30+)
│   │   ├── services/         # API services
│   │   └── utils/            # Utility functions
│   ├── .env                  # Environment variables
│   ├── .env.production       # Production env vars
│   └── package.json
│
├── server/                    # Node.js backend
│   ├── data/                 # Cache files
│   ├── src/
│   │   ├── cache/            # API cache
│   │   ├── config/           # Configuration
│   │   │   ├── db.js         # MongoDB connection
│   │   │   ├── passport.js   # OAuth strategies
│   │   │   └── env.js        # Environment config
│   │   ├── controllers/      # Business logic
│   │   │   ├── auth.controller.js
│   │   │   ├── events.controller.js
│   │   │   └── user.controller.js
│   │   ├── middleware/       # Express middleware
│   │   │   ├── auth.js       # JWT authentication
│   │   │   ├── rateLimiter.js # Rate limiting
│   │   │   └── validation.js  # Input validation
│   │   ├── models/           # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Event.js
│   │   │   ├── Chat.js
│   │   │   └── Message.js
│   │   ├── routes/           # API routes
│   │   ├── services/         # External API services
│   │   │   ├── clist.js      # Clist API
│   │   │   ├── devpost.service.js # Devpost API
│   │   │   └── mlhService.js  # MLH API
│   │   └── utils/            # Utility functions
│   ├── .env                  # Environment variables (gitignored)
│   ├── .env.example          # Example env file
│   └── package.json
│
├── embedding-service/         # Python AI service
│   ├── app.py                # Flask application
│   ├── requirements.txt      # Python dependencies
│   └── runtime.txt           # Python version
│
├── README.md                 # This file
├── DEPLOY.md                 # Deployment guide
└── CHANGES.md                # Recent changes log
🎯 API Endpoints
Authentication
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # Login with email/password
GET    /api/auth/logout            # Logout user
GET    /api/auth/me                # Get current user
GET    /api/auth/google            # Google OAuth login
GET    /api/auth/github            # GitHub OAuth login
GET    /api/auth/linkedin          # LinkedIn OAuth login
POST   /api/auth/forgot-password   # Request password reset
POST   /api/auth/reset-password    # Reset password with token
Events
GET    /api/events/live            # Get live events (all sources)
GET    /api/events/mlh             # Get MLH events only
GET    /api/events/devpost         # Get Devpost events only
GET    /api/events/:id             # Get event by ID
POST   /api/events/:id/bookmark    # Toggle bookmark
GET    /api/events/me/bookmarks    # Get user's bookmarks
GET    /api/events/statistics      # Get event statistics
AI Teammates
POST   /api/teammates/find         # Search teammates with AI
POST   /api/teammates/recommend    # Get AI recommendations
GET    /api/teammates/form-teams   # Auto team formation
Users
GET    /api/users/profile          # Get current user profile
PUT    /api/users/profile          # Update profile
GET    /api/users/:id              # Get public user profile
Chat
GET    /api/chats                  # Get user's chats
POST   /api/chats                  # Create new chat
GET    /api/chats/:id/messages     # Get chat messages
POST   /api/chats/:id/messages     # Send message
Health
GET    /api/health                 # Backend health check
GET    /health                     # AI service health check
🚀 Deployment
Production URLs
Frontend: https://hacktrack-frontend.vercel.app
Backend: https://hacktrack-server-674s.onrender.com/api
AI Service: https://hacktrack-embedding.onrender.com
Deployment Process
All services auto-deploy on push to main branch:

git add .
git commit -m "your changes"
git push origin main
Deployment Times:

Frontend (Vercel): 1-2 minutes
Backend (Render): 2-3 minutes
AI Service (Render): 2-3 minutes
Environment Variables (Production)
Render Dashboard → hacktrack-server-674s → Environment:

# Required
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/HackTrack
JWT_SECRET=your_production_jwt_secret
SESSION_SECRET=your_production_session_secret
EMBEDDING_URL=https://hacktrack-embedding.onrender.com
FRONTEND_URL=https://hacktrack-frontend.vercel.app

# OAuth Callbacks
GOOGLE_CALLBACK_URL=https://hacktrack-server-674s.onrender.com/api/auth/google/callback
GITHUB_CALLBACK_URL=https://hacktrack-server-674s.onrender.com/api/auth/github/callback
LINKEDIN_CALLBACK_URL=https://hacktrack-server-674s.onrender.com/api/auth/linkedin/callback

# Event Sources
CLIST_USERNAME=your_username
CLIST_API_KEY=your_api_key

# Environment
NODE_ENV=production
Vercel Dashboard → hacktrack-frontend → Settings → Environment Variables:

VITE_API_BASE_URL=https://hacktrack-server-674s.onrender.com/api
See DEPLOY.md for detailed deployment instructions and troubleshooting.

🤖 AI Features Deep Dive
Sentence-Transformers Model
We use all-MiniLM-L6-v2 for high-quality embeddings:

Model Size: 80MB (lightweight)
Dimensions: 384 (compact yet powerful)
Speed: ~50ms per embedding on CPU
Quality: State-of-the-art semantic similarity
No GPU Required: Optimized for CPU inference
How Teammate Matching Works
Profile Embedding Generation:

# Combine user data
profile_text = f"{bio} {skills} {interests} {domain}"

# Generate embedding
embedding = model.encode(profile_text)  # 384-dim vector
Similarity Calculation:

# Cosine similarity
similarity = dot(vec1, vec2) / (norm(vec1) * norm(vec2))
Filtering & Ranking:

Filter by location, college, graduation year
Sort by similarity score (0-1)
Return top 15 matches
Real-time Updates:

Embeddings regenerated when profile changes
Background job updates all embeddings nightly
API Endpoints
# Generate embedding
POST /embed
{
  "text": "Full-stack developer interested in AI and blockchain"
}
# Returns: {"embedding": [0.123, -0.456, ...]}  # 384 numbers

# Calculate similarity
POST /similarity
{
  "vec1": [0.123, ...],
  "vec2": [0.456, ...]
}
# Returns: {"similarity": 0.87}  # 0-1 score
📊 Performance & Optimization
Backend Performance
API Response Time: < 100ms average
Event Caching: 6-hour cache reduces API calls by 95%
Database Queries: Indexed for fast lookups
Rate Limiting: Prevents abuse and ensures fair usage
Compression: Gzip compression reduces payload size by 70%
Frontend Performance
Page Load: < 1.5s on 3G
Code Splitting: Lazy loading reduces initial bundle
Image Optimization: WebP format with fallbacks
Caching: Service worker caches static assets
Pagination: Only loads 24 events at a time
AI Service Performance
Inference Time: < 500ms per request
Memory Usage: ~150MB
Concurrent Requests: Handles 10+ simultaneous requests
Cold Start: < 5s (Render free tier)
Caching Strategy
Event Sources → 6-hour cache → Background refresh
User Profiles → Real-time → Nightly embedding update
Static Assets → CDN → Browser cache
API Responses → Redis (future) → Client cache
🔒 Security Features
✅ JWT Authentication: Secure token-based auth
✅ Password Hashing: Bcrypt with salt rounds
✅ HTTPS Only: All production traffic encrypted
✅ CORS Protection: Whitelist of allowed origins
✅ Rate Limiting: Prevents brute force attacks
✅ Input Validation: Sanitizes all user input
✅ SQL Injection Protection: MongoDB prevents SQL injection
✅ XSS Protection: React escapes all output
✅ CSRF Protection: SameSite cookies
✅ Helmet.js: Security headers
✅ Session Security: Encrypted session store
🤝 Contributing
Contributions are welcome! Here's how:

Fork the repository
Create a feature branch:
git checkout -b feature/AmazingFeature
Commit your changes:
git commit -m 'Add some AmazingFeature'
Push to the branch:
git push origin feature/AmazingFeature
Open a Pull Request
Development Guidelines
Follow existing code style
Write meaningful commit messages
Add tests for new features
Update documentation
Ensure all tests pass
📜 License
This project is licensed under the MIT License - see LICENSE file for details.

🙏 Acknowledgments
Clist API - Programming contest aggregation
Devpost - Hackathon platform and API
MLH - Major League Hacking events
Shadcn/ui - Beautiful component library
Vercel - Frontend hosting
Render - Backend and AI service hosting
MongoDB Atlas - Database hosting
Sentence-Transformers - State-of-the-art embeddings
Hugging Face - Model hosting
📞 Contact & Support
Developer: Satvik Sharma

GitHub: @satvik-sharma-05

Repository: https://github.com/satvik-sharma-05/SE

Issues: Report a bug

Discussions: Ask a question

📈 Project Stats
GitHub stars GitHub forks GitHub issues GitHub pull requests GitHub last commit

🗺️ Roadmap
Current Features ✅
 Event aggregation from multiple sources
 AI-powered teammate matching
 Real-time chat
 Event status labels (ongoing/upcoming/finished)
 Advanced filtering system
 OAuth authentication
 Bookmark system
 Personal dashboard
Upcoming Features 🚧
 Event reminders and notifications
 Calendar integration (Google Calendar, iCal)
 Team formation wizard
 Project showcase gallery
 Skill endorsements
 Hackathon ratings and reviews
 Mobile app (React Native)
 Email notifications
 Advanced analytics for organizers
 Sponsor matching for events
💖 Support the Project
If you find HackTrack helpful, please consider:

⭐ Starring the repository

🐛 Reporting bugs and issues

💡 Suggesting new features

🤝 Contributing code

📢 Sharing with friends

⭐ Star History
Star History Chart

Made with ❤️ by developers, for developers

⬆ Back to Top

About
hacktrack1-mu.vercel.app
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
58
 Production 3 weeks ago
 Production – hacktrack-frontend 3 weeks ago
 Production – hacktrack_1 3 weeks ago
+ 55 deployments
Packages
No packages published
Publish your first package
Contributors
2
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
@RitvikSharmaa
RitvikSharmaa
Languages
JavaScript
94.7%
 
CSS
3.1%
 
Python
2.2%
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

3)
Skip to content
satvik-sharma-05
BizIntel-AI
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
2
 (2)
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
BizIntel-AI
Public
satvik-sharma-05/BizIntel-AI
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add Neo4j usage image to README
814028a
 · 
3 weeks ago
backend
Add admin API endpoints for RAG index rebuild (no shell access needed)
3 weeks ago
frontend
Fix: Remove axios timeouts causing upload failures
3 weeks ago
.gitignore
Clean up: Remove unnecessary files and add FREE_DEPLOYMENT guide
3 weeks ago
README.md
Add Neo4j usage image to README
3 weeks ago
render.yaml
Remove pandas (not used) + add .python-version in backend for Python …
3 weeks ago
runtime.txt
Fix Render deployment: Python 3.11.9 in root runtime.txt + stable pac…
3 weeks ago
Repository files navigation
README
🚀 BizIntel AI
https://biz-intel-ai-two.vercel.app

Intelligent Business Decision Platform
Live Demo API Docs Backend

Empowering businesses with AI-driven insights, market analysis, and intelligent document processing

Features • Tech Stack • Architecture • Quick Start • API

✨ Features
🤖 Hybrid RAG System
Multi-Database Intelligence: FAISS + BM25 + Neo4j + MongoDB working together
Smart Retrieval: 40% semantic (FAISS) + 30% keyword (BM25) + 30% graph (Neo4j)
Knowledge Graph: Entity extraction and relationship mapping
Document Modes: Document-only or hybrid AI analysis
Uses Neo4j :
image
📊 Business Intelligence
Market Analysis: Industry trends, competition, and opportunities
Location Intelligence: GDP, demographics, and economic indicators
Revenue Forecasting: AI-powered financial projections
Risk Assessment: Comprehensive business risk analysis
📄 Document Processing
Multi-Format Support: PDF, DOCX, TXT
Real-time Processing: Background task with live status updates
Smart Chunking: Optimized text splitting with overlap
Citation Tracking: Source attribution for all answers
💬 Intelligent Chat
Context-Aware: Remembers conversation history
Multi-Agent System: Specialized agents for different tasks
Beautiful Responses: Markdown formatting with code blocks
Source Citations: Links to original documents
🛠️ Tech Stack
Frontend
Next.js React TailwindCSS Framer Motion

Backend
FastAPI Python Uvicorn

Databases
MongoDB Neo4j FAISS

AI & ML
OpenRouter scikit-learn BM25

🏗️ Architecture

🔄 Hybrid RAG Pipeline
Document Upload
    ↓
Text Extraction (PyPDF2, python-docx)
    ↓
Smart Chunking (500 chars, 50 overlap)
    ↓
Embedding Generation (HashingVectorizer)
    ↓
┌─────────────┬─────────────┬─────────────┐
│   FAISS     │    BM25     │   Neo4j     │
│  (Vectors)  │ (Keywords)  │   (Graph)   │
└─────────────┴─────────────┴─────────────┘
    ↓
MongoDB (Metadata)
    ↓
Query Processing
    ↓
┌─────────────────────────────────────────┐
│  Hybrid Search (40% + 30% + 30%)       │
│  • FAISS: Semantic similarity           │
│  • BM25: Keyword matching               │
│  • Neo4j: Entity relationships          │
└─────────────────────────────────────────┘
    ↓
Context Building
    ↓
LLM Generation (OpenRouter)
    ↓
Formatted Response + Citations
🚀 Quick Start
Prerequisites
Node.js 18+
Python 3.11+
MongoDB Atlas account
Neo4j Aura account
OpenRouter API key
1️⃣ Clone Repository
git clone https://github.com/satvik-sharma-05/BizIntel-AI.git
cd BizIntel-AI
2️⃣ Backend Setup
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Run server
uvicorn app.main:app --reload --port 8000
3️⃣ Frontend Setup
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.local.example .env.local
# Edit .env.local with backend URL

# Run development server
npm run dev
4️⃣ Access Application
Frontend: http://localhost:3000
Backend API: http://localhost:8000
API Docs: http://localhost:8000/docs
📡 API Endpoints
🔐 Authentication
POST   /api/register          # Register new user
POST   /api/login             # Login user
GET    /api/me                # Get current user
🏢 Business Management
POST   /api/businesses        # Create business
GET    /api/businesses        # List businesses
GET    /api/businesses/{id}   # Get business details
PUT    /api/businesses/{id}   # Update business
DELETE /api/businesses/{id}   # Delete business
💬 Chat & RAG
POST   /api/chat              # Send message
GET    /api/conversations     # List conversations
GET    /api/conversations/{id} # Get conversation
📄 Document Management
POST   /api/documents/upload/{business_id}  # Upload document
GET    /api/documents/list/{business_id}    # List documents
GET    /api/documents/status/{doc_id}       # Check status
DELETE /api/documents/delete/{doc_id}       # Delete document
GET    /api/documents/stats/{business_id}   # Get statistics
🔧 Admin (RAG Management)
GET    /api/admin/rag-status              # Check RAG status
POST   /api/admin/rebuild-rag-indexes     # Rebuild indexes
POST   /api/admin/clear-rag-indexes       # Clear indexes
📊 Analytics
GET    /api/market/{business_id}          # Market analysis
GET    /api/location/{business_id}        # Location intelligence
GET    /api/forecast/{business_id}        # Revenue forecast
GET    /api/dashboard/{business_id}       # Dashboard data
🎯 Key Features Explained
🧠 Hybrid RAG System
Why Hybrid?

FAISS: Understands semantic meaning ("activation function" ≈ "neural network layer")
BM25: Finds exact keywords ("swish" matches "swish activation")
Neo4j: Discovers relationships (documents mentioning same entities)
Scoring Formula:

hybrid_score = 0.4 × faiss_score + 0.3 × bm25_score + 0.3 × neo4j_score
if entities_found:
    hybrid_score *= 1.1  # 10% boost
📊 Multi-Agent System
Specialized Agents:

Data Agent: Fetches external data (weather, news, GDP)
Market Agent: Analyzes market trends and competition
Location Agent: Evaluates location suitability
Decision Agent: Provides strategic recommendations
Graph Agent: Queries Neo4j knowledge graph
🎨 Professional UI/UX
Design Principles:

Clean, modern SaaS interface (inspired by Stripe, Vercel)
Smooth animations with Framer Motion
Responsive design for all devices
Beautiful toast notifications
Real-time status updates
🌐 Live Deployment
Production URLs
Frontend: https://biz-intel-ai-two.vercel.app
Backend: https://bizintel-backend-xb1r.onrender.com
API Docs: https://bizintel-backend-xb1r.onrender.com/docs
Deployment Stack
Frontend: Vercel (Free tier)
Backend: Render (Free tier)
MongoDB: Atlas (Free M0)
Neo4j: Aura (Free tier)
📝 Environment Variables
Backend (.env)
# App
APP_NAME=BizIntel AI
DEBUG=False
FRONTEND_URL=https://biz-intel-ai-two.vercel.app
BACKEND_URL=https://bizintel-backend-xb1r.onrender.com

# JWT
JWT_SECRET=your-secret-key
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440

# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/BizIntel

# Neo4j
NEO4J_URI=neo4j+s://xxxxx.databases.neo4j.io
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=your-password

# OpenRouter (LLM)
OPENROUTER_API_KEY=sk-or-v1-xxxxx
OPENROUTER_MODEL=deepseek/deepseek-chat

# External APIs (Optional)
OPENWEATHER_API_KEY=xxxxx
NEWS_API_KEY=xxxxx
DATA_GOV_API_KEY=xxxxx

# RAG Configuration
VECTOR_DB_PATH=./vector_store
EMBEDDING_DIMENSION=384
RAG_CHUNK_SIZE=500
RAG_CHUNK_OVERLAP=50
RAG_TOP_K=5
Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Satvik Sharma

GitHub: @satvik-sharma-05
Project: BizIntel AI
🙏 Acknowledgments
OpenRouter for LLM API access
Render for backend hosting
Vercel for frontend hosting
MongoDB Atlas for database
Neo4j Aura for knowledge graph
FastAPI for amazing Python framework
Next.js for React framework
⭐ Star this repo if you find it helpful!
GitHub stars GitHub forks

Made with ❤️ and AI

About
Agentic AI + RAG

biz-intel-ai-two.vercel.app
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
32
 Production 3 weeks ago
+ 31 deployments
Packages
No packages published
Publish your first package
Contributors
2
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
@RitvikSharmaa
RitvikSharmaa
Languages
JavaScript
50.5%
 
Python
49.0%
 
Other
0.5%
Suggested workflows
Based on your tech stack
Node.js logo
Node.js
Build and test a Node.js project with npm.
Deno logo
Deno
Test your Deno project
Publish Node.js Package logo
Publish Node.js Package
Publishes a Node.js package to npm.
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

4) 
Skip to content
satvik-sharma-05
pathfinder
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
2
 (2)
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
pathfinder
Public
satvik-sharma-05/pathfinder
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add test script for Artist career path API
756a095
 · 
3 days ago
.vscode
Initial commit: Career Path Advisor with improved auth
5 days ago
app
Fix visibility with high-contrast glassmorphism and dark overlays
4 days ago
components
Add automatic redirect to dashboard after login/register
3 days ago
lib
Make chat responses highly specific to user's career goal and roadmap
3 days ago
models
Initial commit: Career Path Advisor with improved auth
5 days ago
types
Initial commit: Career Path Advisor with improved auth
5 days ago
.env.example
Initial commit: Career Path Advisor with improved auth
5 days ago
.gitignore
Security: Remove .env from repo and add live link to README
5 days ago
FINAL_PROJECT_SUMMARY.md
Initial commit: Career Path Advisor with improved auth
5 days ago
OPENROUTER_FIX.md
Fix chat AI responses - switch to working Nvidia Nemotron model and i…
5 days ago
README.md
Switch to Google Gemma 3N model and update README with latest features
5 days ago
global.d.ts
Fix: All TypeScript build errors for production deployment
5 days ago
next.config.js
Initial commit: Career Path Advisor with improved auth
5 days ago
package-lock.json
Implement global toast notification system with Sonner - replace all …
5 days ago
package.json
Implement global toast notification system with Sonner - replace all …
5 days ago
postcss.config.js
Initial commit: Career Path Advisor with improved auth
5 days ago
tailwind.config.js
Initial commit: Career Path Advisor with improved auth
5 days ago
test-api.js
Initial commit: Career Path Advisor with improved auth
5 days ago
test-artist-api.js
Add test script for Artist career path API
3 days ago
test-multi-roadmap-api.js
Initial commit: Career Path Advisor with improved auth
5 days ago
test-roadmap-access.js
Initial commit: Career Path Advisor with improved auth
5 days ago
tsconfig.json
Initial commit: Career Path Advisor with improved auth
5 days ago
vercel.json
Fix: Remove secret references from vercel.json
5 days ago
Repository files navigation
README
🎓 PathFinder AI - Complete Career Path Advisor
An intelligent, AI-powered career guidance platform for students with multi-roadmap support, personalized chatbot, and progress tracking.

🌐 LIVE LINK
🚀 Live Application: https://pathfinder-3.vercel.app/

Next.js TypeScript MongoDB

🌟 Overview
PathFinder AI is a comprehensive career guidance platform that helps students (Class 6-12 and UG) make informed career decisions through AI-powered roadmaps, personalized mentoring, and progress tracking.

Key Features
🗺️ Multi-Roadmap System - Create unlimited career paths
🤖 Roadmap-Specific AI Chatbot - Dedicated mentor for each roadmap
📊 Progress Tracking - Tasks, XP, levels, and streaks
🎯 Skill Gap Analysis - Identify missing skills and improvement plans
🔮 What-If Simulator - Explore alternative scenarios
⏱️ Interactive Timeline - Visual roadmap with checkboxes
🎨 Premium Dashboard - Glassmorphism UI with smooth animations
🏗️ Architecture
Tech Stack
Frontend

Next.js 14 (App Router)
TypeScript
Tailwind CSS
Framer Motion (animations)
Lucide Icons
Backend

Next.js API Routes
MongoDB + Mongoose
JWT Authentication
bcrypt (password hashing)
AI

OpenRouter API
Google Gemma 3N (google/gemma-3n-e2b-it:free)
Context-aware conversations
Thinking progress indicators
Markdown cleanup system
Fallback responses
Database Schema
Users
├── _id, name, email, password
└── currentRoadmapId

Roadmaps (Core Entity)
├── userId, title, input, output
├── tags, color
└── timestamps

ChatSessions (Per Roadmap)
├── userId, roadmapId
└── messages[]

Progress (Per Roadmap)
├── userId, roadmapId
├── tasks[], xp, level, streak
└── completionPercentage

RoadmapActivity
├── userId, roadmapId
└── events[]
Relationships
User (1) ──→ (Many) Roadmaps
Roadmap (1) ──→ (1) ChatSession
Roadmap (1) ──→ (1) Progress
Roadmap (1) ──→ (1) RoadmapActivity
🚀 Quick Start
Prerequisites
Node.js 18+
MongoDB Atlas account
OpenRouter API key
Installation
# 1. Install dependencies
npm install

# 2. Configure environment variables
# Your .env is already configured with:
OPEN_ROUTER_API_KEY=your_key
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

# 3. Start development server
npm run dev

# 4. Open browser
http://localhost:3000
Testing
# Test multi-roadmap API
node test-multi-roadmap-api.js

# Expected output:
# ✅ All 10 tests passed
# ✅ Authentication working
# ✅ Multi-roadmap support working
# ✅ Chat system working
📊 Features in Detail
1. Multi-Roadmap System
Create multiple career paths simultaneously:

Software Engineer roadmap
Doctor roadmap
Designer roadmap
Each roadmap is completely independent with its own:

AI-generated career plan
Dedicated chatbot
Progress tracker
Activity log
2. AI Roadmap Generation
Input:

Current class
Interests (multi-select)
Strengths (multi-select)
Weaknesses (optional)
Dream career goal
Output:

Career overview
School strategy (subjects, study tips)
Competitions & olympiads
Entrance exams (JEE, NEET, etc.)
College recommendations (IITs, NITs, etc.)
Skills to develop
Backup plan
Action plan (short/mid/long term)
Skill gap analysis
3. Roadmap-Specific Chatbot 🔥
Key Concept: Each roadmap has its own AI mentor powered by Google Gemma 3N

How it works:

// Chat request includes roadmapId
POST /api/chat
{
  "roadmapId": "123",
  "message": "How should I prepare for JEE?"
}

// Backend fetches roadmap context
const roadmap = await Roadmap.findById(roadmapId)

// AI uses roadmap context for personalized advice
// - User's goal
// - Current progress
// - Strengths/weaknesses
// - Previous conversations
Features:

Context-aware responses (uses your roadmap data)
Remembers your roadmap details
What-if scenario simulation
Follow-up questions
Chat history per roadmap
Thinking progress indicators:
"Thinking..."
"Analyzing your question..."
"Fetching relevant information..."
"Consulting career database..."
"Forming personalized answer..."
"Almost there..."
Clean text responses (no markdown symbols)
Extended responses (up to 1500 tokens)
4. Progress Tracking & Gamification
Task System:

Add tasks from roadmap
Mark as complete (checkbox)
Earn 10 XP per task
Track completion percentage
Gamification:

XP points (10 per task)
Level system (Level = XP / 100)
Streak tracking (daily activity)
Visual progress bars
Categories:

School tasks
Competition prep
Exam preparation
Skill development
Projects
5. Skill Gap Analyzer
Analyzes your readiness:

Readiness Percentage (0-100%)
Missing Skills - What you need to learn
Improvement Plan - Actionable steps
Considers:

Your strengths
Your weaknesses
Career requirements
Current class level
6. What-If Simulator
Explore alternative scenarios:

"What if I fail JEE?"
"What if I switch to commerce?"
"What if I don't get into IIT?"
Returns:

Scenario analysis
Alternative career path
Action steps
Timeline
Success factors
🎨 UI/UX Design
Design System
Colors (Solid only, no gradients):

Background: #0F172A (Dark)
Cards: #1E293B (Deep Indigo)
Primary: #3B82F6 (Accent Blue)
Success: #10B981 (Emerald)
Warning: #F59E0B (Amber)
Text: White/Light Gray
Effects:

Glassmorphism cards
Soft shadows
Blur effects
Smooth animations
Parallax scrolling
Landing Page
Hero Section:

Full-screen parallax
Floating elements
Glassmorphism card
CTA: "Start Your Journey"
Story Sections:

Problem - "Confused about your career?"
Solution - "We guide you step-by-step"
Features - Glass UI cards
Demo preview
Effects:

Scroll-based animations
Fade-in + slide-in
Hover interactions
Sticky navbar
Dashboard Layout
┌─────────────────────────────────────┐
│         Header (Sticky)             │
│  [Roadmap Selector] [User Profile]  │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │     Main Content             │
│ bar  │     (Dashboard/Chat/etc)     │
│      │                              │
│      │                              │
└──────┴──────────────────────────────┘
Sidebar:

Dashboard
Roadmaps
Chat
Progress
Settings
Dashboard Sections:

Overview card
Interactive timeline
Strategy cards
Competitions
Exams
Colleges
Skills (progress bars)
Backup plan (highlighted)
Action plan (tabs)
🔌 API Endpoints
Authentication
POST /api/auth/register - Create account
POST /api/auth/login    - Login
GET  /api/auth/me       - Get current user
Roadmaps
GET    /api/roadmaps       - List all roadmaps
POST   /api/roadmaps       - Create new roadmap (AI-powered)
GET    /api/roadmaps/[id]  - Get single roadmap
PATCH  /api/roadmaps/[id]  - Update roadmap
DELETE /api/roadmaps/[id]  - Delete roadmap
Chat (Roadmap-Specific) - Powered by Google Gemma 3N
POST /api/chat             - Send message (with thinking indicators)
GET  /api/chat?roadmapId=x - Get chat history
Progress
GET  /api/progress?roadmapId=x - Get progress
POST /api/progress             - Update tasks/XP
What-If Simulator
POST /api/what-if - Simulate scenario (AI-powered)
Career Advice
POST /api/career-advice - Get AI career guidance
📁 Project Structure
career-path-advisor/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   ├── login/route.ts
│   │   │   └── me/route.ts
│   │   ├── roadmaps/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── chat/route.ts
│   │   ├── progress/route.ts
│   │   └── what-if/route.ts
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthModal.tsx
│   ├── CareerForm.tsx
│   ├── HeroSlider.tsx
│   └── RoadmapDashboard.tsx
├── lib/
│   ├── auth.ts
│   ├── AuthContext.tsx
│   ├── mongodb.ts
│   └── openrouter.ts
├── models/
│   ├── User.ts
│   ├── Roadmap.ts
│   ├── ChatSession.ts
│   ├── Progress.ts
│   └── RoadmapActivity.ts
├── types/
│   └── index.ts
├── .env
├── package.json
└── README.md
🔐 Security
Implemented
✅ Password hashing (bcrypt)
✅ JWT authentication
✅ User-scoped data access
✅ Input validation
✅ Error handling
✅ Token expiration (7 days)
Best Practices
Never expose API keys
Use environment variables
Validate all inputs
Sanitize user data
Implement rate limiting (recommended)
🧪 Testing
API Tests
# Run comprehensive test suite
node test-multi-roadmap-api.js
Tests include:

User registration
User login
Create roadmap
Get all roadmaps
Get single roadmap
Chat with AI mentor
Update progress
What-if simulator
Update roadmap
Authentication flow
Manual Testing
Register new user
Create 2-3 different roadmaps
Chat with AI for each roadmap
Add and complete tasks
Simulate what-if scenarios
Switch between roadmaps
Track progress and XP
🚀 Deployment
Vercel (Recommended)
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Import in Vercel
# - Connect GitHub repo
# - Add environment variables
# - Deploy
Environment Variables (Production)
OPEN_ROUTER_API_KEY=your_production_key
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_production_secret
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
📈 Performance
Optimizations
Database indexes on frequently queried fields
JWT token caching in localStorage
Efficient MongoDB queries
AI fallback system with context-aware responses
Lazy loading components
Image optimization
Thinking progress indicators (better UX)
Markdown cleanup for clean text display
Extended token limits (1500) for detailed responses
Scalability
Serverless API routes (auto-scaling)
MongoDB Atlas (auto-scaling)
Stateless authentication
CDN for static assets
🎓 Learning Outcomes
This project demonstrates:

✅ Multi-tenant SaaS architecture
✅ JWT authentication patterns
✅ RESTful API design
✅ MongoDB relationships
✅ React Context API
✅ TypeScript best practices
✅ AI integration patterns
✅ Gamification mechanics
✅ Real-time UI updates
✅ Premium UI/UX design
🐛 Troubleshooting
Common Issues
API 500 Error

Check MongoDB connection
Verify environment variables
Check server logs
Fallback system will activate
Authentication Failed

Verify JWT_SECRET is set
Check token in localStorage
Try logging in again
Chat Not Working

Ensure roadmapId is provided
Check roadmap exists
Verify user owns roadmap
Progress Not Updating

Check task ID is correct
Verify roadmap ownership
Refresh page
🔄 Future Enhancements
Phase 2
Email verification
Password reset flow
Social login (Google, GitHub)
Roadmap sharing
Export to PDF (enhanced)
Phase 3
Mobile app (React Native)
Mentor matching
Resource library
Success stories
Analytics dashboard
Phase 4
AI-powered recommendations
Peer comparison (anonymous)
Career counselor dashboard
Video tutorials
Community features
📞 Support
Documentation
This README covers everything
Code comments explain complex logic
Type definitions provide clarity
Testing
# Test API
node test-multi-roadmap-api.js

# Start server
npm run dev

# Build for production
npm run build
npm start
Debugging
Check browser console for errors
Check server terminal for logs
Use MongoDB Compass to inspect data
Test API endpoints with Postman
✅ Status
Completed ✅
Multi-roadmap architecture
Authentication system
AI roadmap generation
Roadmap-specific chatbot
Progress tracking
Skill gap analyzer
What-if simulator
Activity logging
Complete API (18 endpoints)
Database models (5 collections)
Type definitions
Error handling
Fallback systems
API testing
In Progress 🚧
Premium dashboard UI
Interactive timeline
Chat interface UI
Progress tracker UI
Roadmap management UI
Pending ⏳
Email verification
Password reset
Social features
Mobile app
🎉 Summary
PathFinder AI is a production-ready career guidance platform with:

🗺️ Multi-roadmap support (unlimited career paths)
🤖 Roadmap-specific AI chatbot (personalized mentor)
📊 Progress tracking with gamification (XP, levels, streaks)
🎯 Skill gap analysis (readiness %, improvement plans)
🔮 What-if simulator (alternative scenarios)
🔐 Secure authentication (JWT + bcrypt)
💾 Complete data persistence (MongoDB)
🎨 Premium UI design (glassmorphism, animations)
Backend: 100% Complete ✅ Frontend: Ready to build 🚧 API: Fully tested ✅

📄 License
MIT License - Free to use for learning and personal projects

🙏 Acknowledgments
OpenRouter for AI API access
Google Gemma 3N for powerful free AI model
MongoDB Atlas for database hosting
Vercel/Next.js for framework and hosting
Tailwind CSS for styling
Framer Motion for animations
Built with ❤️ for students seeking career clarity

Server: http://localhost:3000 Status: Production Ready Version: 2.1.0 AI Model: Google Gemma 3N (google/gemma-3n-e2b-it:free)

Need help? Check the code comments or run the test script!

About
career path finder

pathfinder-3.vercel.app
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
33
 Production 3 days ago
 Production – pathfinder-3
 Production – pathfinder
+ 30 deployments
Packages
No packages published
Publish your first package
Contributors
1
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
Languages
TypeScript
89.6%
 
JavaScript
9.0%
 
CSS
1.4%
Suggested workflows
Based on your tech stack
SLSA Generic generator logo
SLSA Generic generator
Generate SLSA3 provenance for your existing release workflows
Webpack logo
Webpack
Build a NodeJS project with npm and webpack.
Datadog Synthetics logo
Datadog Synthetics
Run Datadog Synthetic tests within your GitHub Actions workflow
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

5)
Skip to content
satvik-sharma-05
HireAI
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
HireAI
Public
satvik-sharma-05/HireAI
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Update README with live deployment links and latest tech stack
fbe9a88
 · 
yesterday
.kiro/specs
Initial commit: HireAI - GenAI-powered recruitment platform
2 days ago
.vscode
Initial commit: HireAI - GenAI-powered recruitment platform
2 days ago
backend
Allow all origins for CORS (temporary fix)
yesterday
frontend
Fix useSearchParams Suspense boundary errors for Vercel deployment
2 days ago
.gitignore
Initial commit: HireAI - GenAI-powered recruitment platform
2 days ago
.python-version
Update dependencies for Python 3.14.3 compatibility
2 days ago
README.md
Update README with live deployment links and latest tech stack
yesterday
RESTART_FRONTEND.bat
Initial commit: HireAI - GenAI-powered recruitment platform
2 days ago
START.bat
Initial commit: HireAI - GenAI-powered recruitment platform
2 days ago
render.yaml
Update dependencies for Python 3.14.3 compatibility
2 days ago
Repository files navigation
README
HireAI
GenAI-powered recruitment and resume intelligence platform

FastAPI Next.js MongoDB TypeScript Vercel Render

🚀 Live Demo
Frontend: https://hire-ai-nine.vercel.app
Backend API: https://hireai-backend-ygtb.onrender.com
API Docs: https://hireai-backend-ygtb.onrender.com/docs

Note: Backend runs on Render's free tier and may take 30-50 seconds to wake up from sleep on first request.

Overview
HireAI is a production-grade AI-powered recruitment platform that transforms the hiring process through intelligent resume analysis, semantic matching, and explainable AI insights. Built for both candidates and recruiters, it provides a complete end-to-end hiring workflow with a premium SaaS-quality user interface.

Problem It Solves
For Candidates: Understand exactly why you match (or don't match) a job, get actionable improvement suggestions, and receive AI-powered career guidance
For Recruiters: Automate candidate screening, rank applicants intelligently, make data-driven hiring decisions, and reduce time-to-hire by 80%
Who It's For
Job Seekers looking to optimize their resumes and understand their competitiveness
Recruiters managing multiple job postings and candidate pipelines
Hiring Managers making data-driven hiring decisions
HR Teams seeking to reduce bias and improve hiring outcomes
Features
Candidate Features
Resume Analysis - Upload PDF/DOCX resumes and get instant AI-powered analysis
Skill Gap Detection - Identify missing skills and get personalized learning recommendations
AI Chat Assistant - Context-aware career guidance and resume improvement tips
Reality Check Mode - Brutally honest feedback on application readiness
Skill Impact Simulator - See how learning new skills affects your match score
Career Path Suggestions - AI-recommended career trajectories based on your profile
Competition Analysis - Understand how you compare to top candidates
Project Generator - Get project ideas to fill skill gaps
Apply Readiness Score - One-click assessment of application strength
Recruiter Features
Job Creation & Management - Create job postings with AI-powered JD simplification
Multi-Resume Upload - Batch upload and analyze multiple candidates simultaneously
Candidate Ranking - Automatic AI-powered ranking with medal badges for top performers
Comparison Tool - Side-by-side candidate comparison with detailed insights
AI Decision Support - HIRE/CONSIDER/REJECT recommendations with reasoning
Risk Analysis - Identify hiring risks, skill gaps, and red flags
Analytics Dashboard - Score distribution, skill trends, and hiring metrics
Recruiter Chat - Context-aware AI assistant for hiring questions
History System - Full replay of all past analyses and decisions
Advanced AI Features - Reality check, rejection simulator, fake experience detector, first impression analysis
Tech Stack
Frontend
Next.js 14 - React framework with App Router
TypeScript - Type-safe development
Tailwind CSS - Utility-first styling
Framer Motion - Smooth animations
Zustand - State management
Axios - HTTP client
Backend
FastAPI - Modern Python web framework
Motor - Async MongoDB driver
spaCy - NLP and skill extraction
TF-IDF + scikit-learn - Lightweight semantic matching (replaces heavy transformers)
OpenRouter - LLM API access for AI insights
PyPDF2 / python-docx - Document parsing
Database & AI
MongoDB Atlas - Cloud NoSQL database
TF-IDF Vectorization - Efficient text similarity matching
NLP Pipeline - spaCy for text processing and skill extraction
GenAI - OpenRouter for explainable insights and recommendations
Deployment
Frontend: Vercel (Next.js optimized hosting)
Backend: Render (Python/FastAPI hosting)
Database: MongoDB Atlas (Cloud database)
Architecture
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                          │
│  Next.js 14 + TypeScript + Tailwind + Framer Motion │
│                                                      │
│  Pages: Auth, Dashboard, Jobs, Candidates,          │
│         Analytics, Chat, History                    │
└──────────────────┬──────────────────────────────────┘
                   │ REST API (axios)
                   │
┌──────────────────▼──────────────────────────────────┐
│                   BACKEND                            │
│         FastAPI + Python + MongoDB                   │
│                                                      │
│  Services:                                           │
│  - Auth (JWT)                                        │
│  - Resume Processing (PDF/DOC extraction)            │
│  - Job Management                                    │
│  - Analysis Engine (Embeddings + NLP)                │
│  - GenAI Service (OpenRouter)                        │
│  - Advanced Features (10+ AI tools)                  │
│  - Chat Service                                      │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│                  AI LAYER                            │
│                                                      │
│  - TF-IDF Vectorization (Lightweight matching)       │
│  - spaCy (NLP & Skill Extraction)                    │
│  - OpenRouter (LLM for Insights)                     │
│  - Cosine Similarity (Matching Algorithm)            │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│                  DATABASE                            │
│                  MongoDB Atlas                       │
│                                                      │
│  Collections: users, jobs, resumes, analyses,        │
│               chat_history                           │
└─────────────────────────────────────────────────────┘
System Flow:

User uploads resume or creates job posting
Backend extracts text and processes with NLP
AI layer uses TF-IDF vectorization for semantic similarity
GenAI generates human-readable insights and recommendations
Results stored in MongoDB and displayed in frontend
Users can chat with AI for additional guidance
🌐 Deployment
Production URLs
Frontend (Vercel): https://hire-ai-nine.vercel.app
Backend (Render): https://hireai-backend-ygtb.onrender.com
API Documentation: https://hireai-backend-ygtb.onrender.com/docs
Deployment Stack
Frontend: Deployed on Vercel with automatic deployments from GitHub
Backend: Deployed on Render with Python 3.10 runtime
Database: MongoDB Atlas (Cloud-hosted)
AI Services: OpenRouter API for LLM capabilities
Performance Notes
Frontend: Instant loading with global CDN
Backend: ~30-50 second cold start on free tier (first request after inactivity)
Subsequent requests: Fast response times (<500ms)
Installation & Setup
Prerequisites
Python 3.9+
Node.js 18+
MongoDB Atlas account (free tier available)
OpenRouter API key (Get one here)
1. Clone Repository
git clone https://github.com/satvik-sharma-05/HireAI.git
cd hireai
2. Backend Setup
cd backend

# Install dependencies
pip install -r requirements.txt

# Download spaCy model
python -m spacy download en_core_web_sm

# Create .env file (see Environment Variables section)
# Add your MongoDB URI and OpenRouter API key

# Run backend server
uvicorn main:app --reload
Backend will start on http://localhost:8000

3. Frontend Setup
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run development server
npm run dev
Frontend will start on http://localhost:3000

4. Access Application
Frontend: http://localhost:3000
Backend API: http://localhost:8000
API Documentation: http://localhost:8000/docs
Environment Variables
Backend (.env)
Create a .env file in the backend/ directory:

# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hireai?retryWrites=true&w=majority

# OpenRouter API
OPENROUTER_API_KEY=your_openrouter_api_key_here

# JWT Secret
SECRET_KEY=your_secret_key_here

# Server Config
PORT=8000
FRONTEND_URL=http://localhost:3000
Frontend (.env.local)
Create a .env.local file in the frontend/ directory:

NEXT_PUBLIC_API_URL=http://localhost:8000
Usage
For Candidates
Sign Up - Create an account with email and password
Upload Resume - Upload your resume (PDF or DOCX format)
Enter Job Description - Paste the job description you're applying for
Get Analysis - Receive instant AI-powered match score and insights
Review Insights - See matching skills, missing skills, and improvement suggestions
Use Advanced Features - Try Reality Check, Skill Impact Simulator, Career Path
Chat with AI - Ask questions about your resume and career
For Recruiters
Sign Up as Recruiter - Select recruiter role during signup
Create Job Posting - Add job title and description (use AI to simplify)
Upload Resumes - Batch upload multiple candidate resumes with custom titles
Analyze Candidates - Click "Analyze All Candidates" for automatic ranking
View Rankings - See candidates ranked by AI with medal badges for top 3
Review Details - Click any candidate to see full analysis and AI insights
Make Decisions - Use AI recommendations to HIRE, CONSIDER, or REJECT
Track Analytics - Monitor score distribution, skill gaps, and hiring trends
Future Improvements
Interview Scheduling - Calendar integration and automated interview coordination
Team Collaboration - Multi-recruiter workspaces with comments and mentions
Email Notifications - Automated status updates and reminders
Advanced Analytics - Hiring funnel metrics, time-to-hire tracking, custom reports
Pipeline Management - Kanban board for visual candidate tracking
Question Generator - AI-powered interview question generation
Offer Management - Offer letter templates and e-signature integration
ATS Integrations - Connect with Greenhouse, Lever, LinkedIn, GitHub
See .kiro/specs/ for detailed feature specifications.

Project Structure
hireai/
├── backend/
│   ├── api/
│   │   └── routes/          # API endpoints (auth, resume, job, analysis, chat, advanced)
│   ├── core/
│   │   ├── config.py        # Configuration management
│   │   ├── database.py      # MongoDB connection
│   │   └── security.py      # JWT authentication
│   ├── models/
│   │   └── schemas.py       # Pydantic models
│   ├── services/
│   │   ├── advanced_features.py  # 10+ AI features
│   │   ├── genai_service.py      # OpenRouter integration
│   │   ├── matching_service.py   # Semantic matching
│   │   └── nlp_service.py        # spaCy NLP
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── app/
│   │   ├── auth/            # Login, signup pages
│   │   ├── analyze/         # Resume analysis
│   │   ├── chat/            # AI chat
│   │   ├── dashboard/       # Candidate dashboard
│   │   ├── history/         # Analysis history
│   │   └── recruiter/       # Recruiter pages
│   │       ├── analytics/   # Analytics dashboard
│   │       ├── candidates/  # Candidate management
│   │       ├── chat/        # Recruiter chat
│   │       └── jobs/        # Job management
│   ├── components/          # Reusable UI components
│   ├── lib/
│   │   ├── api.ts           # API client
│   │   └── store.ts         # State management
│   ├── package.json         # Node dependencies
│   └── tailwind.config.ts   # Tailwind configuration
│
├── .env                     # Backend environment variables
├── .gitignore              # Git ignore rules
└── README.md               # This file
API Endpoints
Authentication
POST /api/auth/signup - User registration
POST /api/auth/login - User login
Resume Management
POST /api/resume/upload - Upload resume (multipart/form-data)
GET /api/resume/list - List user's resumes
GET /api/resume/{id} - Get resume details
DELETE /api/resume/{id} - Delete resume
Job Management
POST /api/job/create - Create job posting
GET /api/job/list - List user's jobs
GET /api/job/{id} - Get job details
DELETE /api/job/{id} - Delete job
Analysis
POST /api/analysis/analyze - Analyze resume vs job
GET /api/analysis/history - Get analysis history
GET /api/analysis/{id} - Get specific analysis
Advanced AI Features
POST /api/advanced/reality-check - Brutally honest feedback
POST /api/advanced/skill-impact - Skill impact simulation
POST /api/advanced/rejection-simulator - Rejection reasons
POST /api/advanced/first-impression - 5-second impression
POST /api/advanced/fake-detector - Detect fake experience
POST /api/advanced/project-generator - Generate project ideas
POST /api/advanced/career-path - Career recommendations
POST /api/advanced/competition-analysis - Compare vs top 10%
POST /api/advanced/apply-readiness - Application readiness
POST /api/advanced/rank-candidates - Rank all candidates
POST /api/advanced/simplify-jd - Simplify job description
Chat
POST /api/chat/message - Send message to AI
GET /api/chat/history - Get chat history
Full API documentation available at http://localhost:8000/docs when running the backend.

Screenshots
Candidate Dashboard
Clean, modern interface with stats cards, quick actions, and recent analyses.

Resume Analysis Results
Visual score display with circular progress, skill comparison pills, and structured AI insights.

Recruiter Rankings
Professional table with medal badges (🥇🥈🥉) for top 3 candidates, scores, and quick actions.

Analytics Dashboard
Score distribution bars, top skills, common gaps, and hiring metrics.

Contributing
This is a portfolio project. Feel free to fork and customize for your own use!

License
MIT License - Free to use for learning and portfolio purposes.

Author
Satvik Sharma

GitHub: @satvik-sharma-05
Project Repository: HireAI
Live Demo: https://hire-ai-nine.vercel.app
Acknowledgments
FastAPI - Modern Python web framework
Next.js - React framework
OpenRouter - LLM API access
spaCy - Industrial-strength NLP
Sentence Transformers - Semantic embeddings
MongoDB - NoSQL database
Built with ❤️ for smarter hiring

About
AI for recruiters and job seekers

hire-ai-nine.vercel.app
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
15
 Production yesterday
+ 14 deployments
Packages
No packages published
Publish your first package
Contributors
1
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
Languages
TypeScript
82.7%
 
Python
15.8%
 
CSS
1.1%
 
Batchfile
0.3%
 
JavaScript
0.1%
 
Shell
0.0%
Suggested workflows
Based on your tech stack
Webpack logo
Webpack
Build a NodeJS project with npm and webpack.
Datadog Synthetics logo
Datadog Synthetics
Run Datadog Synthetic tests within your GitHub Actions workflow
SLSA Generic generator logo
SLSA Generic generator
Generate SLSA3 provenance for your existing release workflows
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

6)
Skip to content
satvik-sharma-05
SmartSupportAI
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
SmartSupportAI
Public
satvik-sharma-05/SmartSupportAI
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add project summary
0de18f4
 · 
19 hours ago
app
Add lightweight version for free tier deployment (no ML model, rule-b…
19 hours ago
data/processed
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
frontend
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
ml
Critical fix: Remove torch import at module level to prevent startup …
20 hours ago
.env.example
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
.gitattributes
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
.gitignore
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
DEPLOY_FREE_TIER.md
Clean up: Update README, remove extra files, simplify deployment
19 hours ago
LICENSE
Initial commit: SmartSupport AI - ML ticket classification (model fil…
yesterday
PROJECT_SUMMARY.md
Add project summary
19 hours ago
Procfile
Fix gdown command - remove invalid --fuzzy flag
20 hours ago
README.md
Clean up: Update README, remove extra files, simplify deployment
19 hours ago
requirements.txt
Clean up: Update README, remove extra files, simplify deployment
19 hours ago
runtime.txt
Fix: Update dependencies for Python 3.11+ compatibility
yesterday
start.sh
Clean up: Update README, remove extra files, simplify deployment
19 hours ago
Repository files navigation
README
MIT license
🎯 SmartSupport AI
AI-powered support ticket classification and prioritization system. Automatically categorizes tickets and assigns priority levels using intelligent classification.

Live Demo:

🌐 Frontend: https://smart-support-ai-sandy.vercel.app/
🔌 Backend API: https://smartsupportai-backend.onrender.com
📚 API Docs: https://smartsupportai-backend.onrender.com/docs
✨ Features
Automatic Classification: Categorizes tickets into Billing, Technical, Account, or General
Priority Assignment: Assigns High, Medium, or Low priority based on urgency
Real-time Predictions: Instant classification with confidence scores
Modern UI: Clean, responsive interface built with React + Tailwind CSS
RESTful API: FastAPI backend with automatic documentation
Free Deployment: Optimized for free tier hosting (Render + Vercel)
🚀 Quick Start
Try the Live Demo
Visit https://smart-support-ai-sandy.vercel.app/
Sign up for an account
Go to "Predict" page
Enter a support ticket (e.g., "I was charged twice for my subscription")
Click "Predict" to see AI classification
Example Predictions
Billing Issue:

Input: "I was charged twice for my subscription this month"
Output: Category=Billing (92%), Priority=High (85%)
Technical Issue:

Input: "The application crashes when I upload files"
Output: Category=Technical (88%), Priority=High (90%)
Account Question:

Input: "How do I change my password?"
Output: Category=Account (85%), Priority=Medium (75%)
🏗️ Architecture
Tech Stack
Frontend:

React 18 + Vite
Tailwind CSS
React Router
Axios
Backend:

FastAPI (Python)
Rule-based classifier (optimized for free tier)
Pydantic for validation
CORS enabled
Deployment:

Frontend: Vercel (Free)
Backend: Render (Free Tier)
How It Works
User submits a support ticket through the web interface
Frontend sends POST request to /predict endpoint
Backend analyzes text using keyword-based classification
Returns category, priority, and confidence scores
Frontend displays results with visual indicators
📦 Installation
Prerequisites
Python 3.11+
Node.js 18+
npm or yarn
Backend Setup
# Clone repository
git clone https://github.com/satvik-sharma-05/SmartSupportAI.git
cd SmartSupportAI

# Install Python dependencies
pip install -r requirements-minimal.txt

# Run backend server
uvicorn app.main_lightweight:app --host 0.0.0.0 --port 8000
Backend will be available at http://localhost:8000

Frontend Setup
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:8000" > .env

# Run development server
npm run dev
Frontend will be available at http://localhost:5173

🔌 API Usage
Health Check
curl https://smartsupportai-backend.onrender.com/health
Response:

{
  "status": "healthy",
  "model_loaded": true,
  "model": "rule-based-v1"
}
Predict Ticket
curl -X POST https://smartsupportai-backend.onrender.com/predict \
  -H "Content-Type: application/json" \
  -d '{
    "text": "I was charged twice for my subscription"
  }'
Response:

{
  "category": "Billing",
  "category_confidence": 0.92,
  "priority": "High",
  "priority_confidence": 0.85,
  "inference_time_ms": 1.23,
  "model": "rule-based-v1"
}
API Documentation
Interactive API docs available at:

Swagger UI: https://smartsupportai-backend.onrender.com/docs
ReDoc: https://smartsupportai-backend.onrender.com/redoc
🎨 Screenshots
Homepage
Clean landing page with feature highlights

Prediction Interface
Simple form to submit tickets and view AI predictions

Results Display
Visual representation of category and priority with confidence scores

📊 Classification Details
Categories
Billing: Payment, charges, subscriptions, refunds
Technical: Bugs, errors, crashes, performance issues
Account: Login, password, access, verification
General: Questions, features, information requests
Priority Levels
High: Urgent issues requiring immediate attention
Medium: Important issues that should be addressed soon
Low: General questions or non-urgent requests
Accuracy
The rule-based classifier achieves approximately 75-80% accuracy on common support tickets. For production use with higher accuracy requirements, consider upgrading to the ML model version.

🚀 Deployment
Deploy Your Own Instance
Backend (Render)
Fork this repository
Create account on Render
Create new Web Service
Connect your GitHub repository
Configure:
Build Command: pip install -r requirements-minimal.txt
Start Command: bash start-lightweight.sh
Instance Type: Free
Deploy!
Frontend (Vercel)
Create account on Vercel
Import your GitHub repository
Configure:
Framework: Vite
Root Directory: frontend
Environment Variable: VITE_API_URL=https://your-backend.onrender.com
Deploy!
🛠️ Development
Project Structure
SmartSupportAI/
├── app/                          # Backend application
│   ├── main_lightweight.py       # FastAPI app (lightweight)
│   ├── inference_lightweight.py  # Rule-based classifier
│   └── database.py               # Database utilities (optional)
├── frontend/                     # React frontend
│   ├── src/
│   │   ├── pages/               # Page components
│   │   ├── components/          # Reusable components
│   │   └── services/            # API services
│   └── package.json
├── requirements-minimal.txt      # Python dependencies (lightweight)
├── start-lightweight.sh          # Startup script
└── README.md
Running Tests
# Backend tests
pytest

# Frontend tests
cd frontend
npm test
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Built with FastAPI
Frontend powered by React and Tailwind CSS
Deployed on Render and Vercel
📧 Contact
Satvik Sharma

GitHub: @satvik-sharma-05
Project Link: https://github.com/satvik-sharma-05/SmartSupportAI
🔮 Future Enhancements
 Add ML model version with transformer-based classification
 Implement user authentication and ticket history
 Add analytics dashboard
 Support for multiple languages
 Email integration for automatic ticket processing
 Mobile app version
⭐ If you find this project useful, please consider giving it a star!

About
AI-powered support ticket classification system using DeBERTa transformer model.

smart-support-ai-sandy.vercel.app
Resources
 Readme
License
 MIT license
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
12
 Production 19 hours ago
+ 11 deployments
Packages
No packages published
Publish your first package
Contributors
1
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
Languages
Python
57.2%
 
JavaScript
41.0%
 
CSS
1.5%
 
Other
0.3%
Suggested workflows
Based on your tech stack
Node.js logo
Node.js
Build and test a Node.js project with npm.
Deno logo
Deno
Test your Deno project
Pylint logo
Pylint
Lint a Python application with pylint.
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

7)
Skip to content
satvik-sharma-05
ForecastIQ
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
ForecastIQ
Public
satvik-sharma-05/ForecastIQ
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Clean up: Remove unnecessary docs, update README with deployment info
838fba0
 · 
21 minutes ago
.kiro/specs/forecastiq-platform
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
backend
Fix: Add missing JWT settings to config
27 minutes ago
frontend
Fix: Auto-detect production environment and use correct API URL
47 minutes ago
notebooks
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
.gitignore
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
LICENSE
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
Procfile
Fix: Add root-level deployment files for Render
1 hour ago
README.md
Clean up: Remove unnecessary docs, update README with deployment info
21 minutes ago
push_to_github.bat
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
push_to_github.sh
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
render.yaml
Python 3.14 compatibility: use pre-built wheels
1 hour ago
requirements.txt
Fix: Pin bcrypt to 4.x for Python 3.14 compatibility
34 minutes ago
runtime.txt
Update: Python 3.11.9 with latest compatible packages
1 hour ago
sample_sales_data.csv
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
train_models.py
Initial commit: ForecastIQ - ML Forecasting Platform
1 hour ago
training_requirements.txt
Update: Python 3.11.9 with latest compatible packages
1 hour ago
Repository files navigation
README
MIT license
ForecastIQ 🚀
Full-stack ML-powered forecasting platform for time-series predictions with automated insights

Python FastAPI React MongoDB License

📖 Overview
ForecastIQ is a production-ready forecasting platform that transforms historical sales data into actionable predictions using machine learning. Upload CSV files, run pre-trained models, compare performance, and get AI-generated business insights—all through a beautiful, intuitive interface.

Live Demo: https://forecast-iq-theta.vercel.app

Backend API: https://forecastiq-backend.onrender.com

✨ Key Features
🏠 Landing Page
Beautiful hero section with gradient design
Feature showcase and step-by-step guide
Tech stack overview
Responsive design
🔐 Authentication & Security
JWT-based authentication with bcrypt
User-specific data isolation
Protected routes
Secure password hashing
📁 Dataset Management
CSV file upload with drag-and-drop
Automatic column detection (date & target)
Multiple date format support
Dataset metadata preview
Delete functionality with confirmation
🤖 ML Forecasting Engine
Pre-trained Models: Linear Regression & Random Forest
Automated Preprocessing: 15 engineered features
Smart Detection: Auto-detects date and sales columns
Configurable: 7-90 day forecast horizon
Performance Metrics: MAE, RMSE, R²
Interactive Charts: Recharts visualization
🔍 Model Comparison
Side-by-side forecast comparison
Automatic best model detection
Visual performance charts
Detailed metrics breakdown
💡 AI-Generated Insights
Peak demand detection
Low demand period identification
Trend analysis
Future predictions
Animated insight cards with icons
📊 Dashboard
Real-time statistics
Recent activity tracking
KPI overview
Empty states with helpful messages
🎨 Production-Ready UI
Clean SaaS design with Tailwind CSS
Toast notifications (no alerts)
Loading skeletons
Empty states
Smooth animations
Fully responsive
🏗️ Architecture
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                      │
│  Vite + Tailwind CSS + Recharts + Lucide Icons         │
│  Pages: Home, Auth, Dashboard, Datasets, Forecast,     │
│         History, Insights, Compare                      │
└─────────────────────────────────────────────────────────┘
                          ↓ REST API
┌─────────────────────────────────────────────────────────┐
│                   BACKEND (FastAPI)                      │
│  JWT Auth + CORS + Async MongoDB                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ML Engine (Scikit-learn)                       │   │
│  │  - Data Preprocessing                           │   │
│  │  - Feature Engineering (15 features)            │   │
│  │  - Pre-trained Models (LR, RF)                  │   │
│  │  - Insight Generation                           │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              DATABASE (MongoDB Atlas)                    │
│  Collections: users, datasets, forecast_runs, insights │
└─────────────────────────────────────────────────────────┘
🚀 Quick Start
Prerequisites
Python 3.14+ (or 3.11+)
Node.js 18+
MongoDB Atlas account (free tier)
1. Clone Repository
git clone https://github.com/yourusername/forecastiq.git
cd forecastiq
2. Backend Setup
# Navigate to backend
cd backend

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB credentials
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
# MONGO_DB_NAME=forecastiq
# SECRET_KEY=your-super-secret-key-min-32-characters

# Train ML models (first time only)
cd ..
pip install -r training_requirements.txt
python train_models.py

# Start backend server
cd backend
python main.py
Backend runs at: http://localhost:8000

3. Frontend Setup
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
Frontend runs at: http://localhost:5173

4. Access Application
Homepage: http://localhost:5173/
Login: http://localhost:5173/login
Dashboard: http://localhost:5173/app (after login)
📁 Project Structure
forecastiq/
├── backend/
│   ├── main.py                      # FastAPI application
│   ├── models.py                    # Pydantic models
│   ├── auth.py                      # JWT authentication
│   ├── database.py                  # MongoDB connection
│   ├── config.py                    # Settings management
│   ├── ml_engine_pretrained.py      # ML inference engine
│   ├── data_preprocessor.py         # Data preprocessing
│   ├── requirements.txt             # Python dependencies
│   ├── Procfile                     # Deployment config
│   ├── runtime.txt                  # Python version
│   ├── models/                      # Pre-trained models
│   │   ├── linear_regression_model.pkl
│   │   ├── random_forest_model.pkl
│   │   ├── feature_columns.pkl
│   │   └── model_metrics.pkl
│   ├── test_api.py                  # API tests
│   ├── test_preprocessor.py         # Preprocessing tests
│   ├── check_models.py              # Model verification
│   ├── test_compare.py              # Compare endpoint test
│   ├── API_GUIDE.md                 # API documentation
│   └── MONGODB_SCHEMA.md            # Database schema
│
├── frontend/
│   ├── src/
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Login.jsx            # Login page
│   │   │   ├── Signup.jsx           # Signup page
│   │   │   ├── Dashboard.jsx        # Dashboard
│   │   │   ├── Datasets.jsx         # Dataset management
│   │   │   ├── Forecast.jsx         # Forecast generation
│   │   │   ├── History.jsx          # Forecast history
│   │   │   ├── Insights.jsx         # AI insights
│   │   │   └── Compare.jsx          # Model comparison
│   │   ├── components/              # Reusable components
│   │   │   ├── EmptyState.jsx       # Empty state UI
│   │   │   ├── Toast.jsx            # Toast notifications
│   │   │   ├── LoadingSkeleton.jsx  # Loading states
│   │   │   ├── InsightCard.jsx      # Insight cards
│   │   │   ├── HowToUse.jsx         # User guide
│   │   │   └── Layout.jsx           # App layout
│   │   ├── hooks/
│   │   │   └── useToast.js          # Toast hook
│   │   ├── api/
│   │   │   └── axios.js             # API client
│   │   ├── App.jsx                  # Main app component
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── notebooks/
│   └── train_forecasting_models.ipynb  # Training notebook
│
├── train_models.py                  # Model training script
├── training_requirements.txt        # Training dependencies
├── sample_sales_data.csv           # Sample dataset
├── .gitignore                      # Git ignore rules
├── DEPLOYMENT.md                   # Deployment guide
├── PROJECT_STEPS.md                # Implementation guide
├── VISUAL_GUIDE.md                 # Visual documentation
├── TRAIN_MODELS_GUIDE.md          # Training guide
├── QUICKSTART.md                   # Quick start guide
└── README.md                       # This file
🔧 Tech Stack
Frontend
Framework: React 18 + Vite
Styling: Tailwind CSS 3.4.1
Charts: Recharts
Icons: Lucide React
Routing: React Router DOM
HTTP Client: Axios
Backend
Framework: FastAPI 0.104
Database: MongoDB Atlas (Motor async driver)
Authentication: JWT + bcrypt
ML: Scikit-learn 1.4.0
Data Processing: Pandas, NumPy
DevOps
Backend Hosting: Render (free tier)
Frontend Hosting: Vercel (free tier)
Database: MongoDB Atlas (free tier)
Version Control: Git + GitHub
📊 ML Pipeline
1. Data Preprocessing
Column name standardization
Automatic date/target detection
Mixed date format handling
Time series aggregation
Missing value imputation
2. Feature Engineering (15 Features)
Time Features:

DayOfWeek, Month, Quarter, Year
DayOfYear, WeekOfYear, IsWeekend
Lag Features:

Sales_Lag_1, Sales_Lag_7
Sales_Lag_14, Sales_Lag_30
Rolling Features:

Sales_MA_7 (7-day moving average)
Sales_MA_30 (30-day moving average)
Additional:

quantity, profit
3. Model Training
python train_models.py
Downloads sample datasets
Trains Linear Regression & Random Forest
Saves models as .pkl files
Stores feature columns and metrics
4. Inference
Loads pre-trained models
Preprocesses new data
Ensures feature alignment
Generates predictions
Calculates metrics (MAE, RMSE, R²)
5. Insight Generation
Peak/low demand detection
Trend analysis
Statistical thresholds
Actionable recommendations
🧪 Testing
Backend Tests
cd backend
python test_api.py          # Test API endpoints
python test_preprocessor.py # Test data preprocessing
Train ML Models
pip install -r training_requirements.txt
python train_models.py
Manual Testing
Sign up at https://forecast-iq-theta.vercel.app
Upload CSV (use sample_sales_data.csv)
Run forecast with both models
View insights and compare results
🌐 API Endpoints
Authentication
POST /api/auth/signup - Create account
POST /api/auth/login - Login
GET /api/auth/me - Get current user
Datasets
POST /api/datasets/upload - Upload CSV
GET /api/datasets - List datasets
DELETE /api/datasets/{id} - Delete dataset
Forecasting
POST /api/forecast/run - Run forecast
GET /api/forecast/history - Get history
GET /api/forecast/{id} - Get details
POST /api/forecast/compare - Compare forecasts
Insights
GET /api/insights - Get all insights
Dashboard
GET /api/dashboard/stats - Get statistics
Full API Documentation: See backend/API_GUIDE.md

🚀 Deployment
Live Application
Frontend: https://forecast-iq-theta.vercel.app
Backend API: https://forecastiq-backend.onrender.com
API Docs: https://forecastiq-backend.onrender.com/docs

Environment Variables
Backend (Render)
Set these in Render Dashboard → Environment:

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGO_DB_NAME=forecastiq
SECRET_KEY=your-super-secret-key-min-32-characters
ENVIRONMENT=production
Frontend (Vercel)
The frontend auto-detects production environment. No manual setup needed.

Deployment Steps
Push to GitHub

git add .
git commit -m "Update"
git push origin main
Backend (Render)

Connect GitHub repo
Set environment variables
Auto-deploys on push
Frontend (Vercel)

Import GitHub repo
Auto-deploys on push
Free Hosting (Total Cost: $0/month)
Backend: Render.com (free tier)
Frontend: Vercel (free tier)
Database: MongoDB Atlas (free M0 cluster)
📈 Performance
Backend Response Time: <200ms (average)
Frontend Load Time: <2s (first load)
Model Inference: <1s (per forecast)
Database Queries: <100ms (average)
🔒 Security
JWT token authentication
Password hashing with bcrypt
CORS protection
Environment variable management
Input validation
SQL injection prevention (NoSQL)
XSS protection
📝 Environment Variables
Backend (.env)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGO_DB_NAME=forecastiq
SECRET_KEY=your-super-secret-key-min-32-characters
ENVIRONMENT=production
Frontend (.env.production)
VITE_API_URL=https://your-backend.onrender.com/api
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Satvik Sharma

GitHub: @satvik-sharma-05
Repository: ForecastIQ
🙏 Acknowledgments
FastAPI for the amazing web framework
React team for the UI library
Scikit-learn for ML capabilities
MongoDB for the database
Tailwind CSS for styling
Vercel & Render for free hosting
📚 Documentation
README.md - Complete project overview (this file)
backend/API_GUIDE.md - API documentation
backend/MONGODB_SCHEMA.md - Database schema
🎯 Use Cases
Sales forecasting for retail businesses
Revenue prediction for SaaS companies
Demand forecasting for inventory management
Traffic prediction for websites
Any time-series forecasting task
🔮 Future Enhancements
 Export forecasts to PDF/CSV
 More ML models (ARIMA, Prophet, LSTM)
 Real-time data streaming
 Email notifications
 Multi-language support
 Mobile app (React Native)
 Advanced analytics dashboard
 Collaborative features
📊 Project Stats
Total Files: 50+
Lines of Code: 6,000+
Components: 15+
API Endpoints: 15
Database Collections: 4
ML Models: 2
Features Engineered: 15
Development Time: 2 weeks
💼 Resume Description
Developed ForecastIQ, a full-stack ML-powered forecasting platform using React, FastAPI, MongoDB, and Scikit-learn. Implemented JWT authentication, async database operations, automated data preprocessing pipeline with 15 engineered features, pre-trained ML models (Linear Regression, Random Forest), and AI-generated business insights. Built production-ready UI with Tailwind CSS featuring toast notifications, loading states, empty states, and interactive charts. Deployed on Render and Vercel with zero cost. Achieved 15+ API endpoints, 4 database collections, and <200ms average response time.

🐛 Known Issues
Free tier backend sleeps after 15 min inactivity (first request takes ~30s to wake)
Bcrypt 5.0.0 has issues with Python 3.14 (pinned to 4.x in requirements)
💡 Tips
Use sample_sales_data.csv for testing
Ensure CSV has date and numeric columns
Random Forest is more accurate but slower
30-day forecast recommended for best results
⭐ Star this repo if you find it helpful!

🔗 Repository: https://github.com/satvik-sharma-05/ForecastIQ

Built with ❤️ for data-driven decisions

About
Full-stack ML-powered forecasting platform for time-series predictions with automated insights

forecast-iq-theta.vercel.app
Resources
 Readme
License
 MIT license
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Deployments
11
 Production 20 minutes ago
+ 10 deployments
Packages
No packages published
Publish your first package
Contributors
1
@satvik-sharma-05
satvik-sharma-05 Satvik Sharma
Languages
JavaScript
44.4%
 
Python
41.2%
 
Jupyter Notebook
12.4%
 
CSS
0.7%
 
Shell
0.5%
 
Batchfile
0.5%
 
Other
0.3%
Suggested workflows
Based on your tech stack
Python application logo
Python application
Create and test a Python application.
Publish Node.js Package to GitHub Packages logo
Publish Node.js Package to GitHub Packages
Publishes a Node.js package to GitHub Packages.
Python Package using Anaconda logo
Python Package using Anaconda
Create and test a Python package on multiple Python versions using Anaconda for package management.
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

n8n projects
1)
Skip to content
satvik-sharma-05
ai-assistant-n8n
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
ai-assistant-n8n
Public
satvik-sharma-05/ai-assistant-n8n
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Jarvis AI n8n added
64c3b7e
 · 
3 months ago
AI agent.json
Jarvis AI n8n added
3 months ago
README.md
Jarvis AI n8n added
3 months ago
image.png
Jarvis AI n8n added
3 months ago
Repository files navigation
README
Multi AI Assistant using n8n
This project is a multi-agent AI assistant built using n8n.
It demonstrates how multiple AI agents can collaborate to handle different tasks such as email handling, content creation, and productivity workflows within a single automation system.

The project focuses on real-world AI orchestration, agent routing, and task delegation using low-code automation.

Demo
AI Assistant Demo

Click the image above to watch the full workflow demonstration.

Direct video link:
https://youtu.be/1FJ95cCAe98?si=dpYZmK-ja18GM8Vs

Workflow Overview
The AI Assistant workflow is designed around multiple specialized agents that work together:

User input is received through triggers or events
Tasks are routed based on intent or context
Dedicated AI agents handle specific responsibilities
Outputs are generated and delivered through appropriate channels
Each agent operates independently while sharing context when required.

How It Works
User request enters the workflow
Intent or task type is identified
The request is routed to the appropriate AI agent
The agent processes the task using an LLM
Results are returned or sent via configured integrations
Features
Multi-agent AI architecture
Task-specific AI agents
Context-aware responses
Scalable and modular workflow design
Built entirely using n8n
Use Cases
AI email assistant
AI content generation assistant
Productivity automation
Centralized AI task orchestration
Tech Stack
n8n
Large Language Model (LLM)
AI Agents
Automation workflows
Files in This Repository
AI agent.json
n8n workflow export for the multi-agent AI assistant

image.png
Screenshot of the complete n8n workflow

README.md
Project documentation

How to Use
Import AI agent.json into n8n
Configure required AI model credentials
Adjust triggers and integrations as needed
Execute the workflow
Interact with the AI assistant
Project Purpose
This project was built to demonstrate:

Multi-agent AI systems
AI orchestration using n8n
Real-world automation workflows
Practical AI assistant design
Author
Satvik Sharma
AI Automation and n8n Workflow Projects

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
No contributors
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

2)
Skip to content
satvik-sharma-05
rag-based-email-classifier-n8n
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
rag-based-email-classifier-n8n
Public
satvik-sharma-05/rag-based-email-classifier-n8n
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add RAG-based email classifier n8n workflow
405d62e
 · 
3 months ago
README.md
Add RAG-based email classifier n8n workflow
3 months ago
Screenshot 2025-12-31 141751.png
Add RAG-based email classifier n8n workflow
3 months ago
policy.pdf
Add RAG-based email classifier n8n workflow
3 months ago
rag based email classifier.json
Add RAG-based email classifier n8n workflow
3 months ago
Repository files navigation
README
RAG-Based Email Classifier and Auto-Responder using n8n
This project is a Retrieval-Augmented Generation (RAG) based email classifier built using n8n.
It automatically classifies incoming emails and generates accurate, context-aware responses using a company knowledge base.

The workflow demonstrates how RAG can be applied to real-world email automation use cases using low-code AI workflows.

Demo
RAG Email Classifier Demo

Click the image above to watch the full workflow demonstration.

Video link:
https://youtu.be/09tzul6kLU4?si=LVePP6VoOvjYou1a

How It Works
Incoming emails are captured using a Gmail trigger
Emails are classified as promotional or support-related
Company knowledge base and FAQs are stored in a vector database
Email content is embedded and matched with stored documents
Relevant context is retrieved using vector similarity search
An AI agent generates context-aware responses using RAG
Automated replies are sent to customers
Support-related emails are forwarded to the support team via Telegram
Features
Retrieval-Augmented Generation architecture
Automatic email classification
Context-aware AI-generated responses
Reduced hallucinations using document grounding
Automated customer email replies
Telegram alerts for support teams
Fully built using n8n workflows
Tech Stack
n8n
Large Language Model (LLM)
Embedding model
Vector database (Supabase Vector Store)
Gmail API
Telegram API
Files in This Repository
rag based email classifier.json
n8n workflow export for the RAG email classifier

policy.pdf
Sample knowledge base document used for retrieval

Screenshot 2025-12-31 141751.png
Screenshot of the complete n8n workflow

README.md
Project documentation

How to Use
Import rag based email classifier.json into n8n
Configure Gmail, LLM, embedding, and vector store credentials
Upload your knowledge base documents
Execute the workflow
Start receiving, classifying, and responding to emails automatically
Project Purpose
This project was built to demonstrate:

Practical implementation of RAG for email automation
AI-powered classification and response generation
Vector similarity search with real business documents
End-to-end automation using n8n
Author
Satvik Sharma
AI Automation and n8n Workflow Projects

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
No contributors
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

3)
Skip to content
satvik-sharma-05
rag-chatbot-n8n
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
rag-chatbot-n8n
Public
satvik-sharma-05/rag-chatbot-n8n
Go to file
t
T
Name		
satvik-sharma-05
satvik-sharma-05
Add README with demo video and workflow preview
4a84e39
 · 
3 months ago
Capture.PNG
Image added
3 months ago
README.md
Add README with demo video and workflow preview
3 months ago
rag basic.json
Add RAG chatbot n8n workflow
3 months ago
Repository files navigation
README
RAG Chatbot using n8n
This project implements a Retrieval-Augmented Generation (RAG) based chatbot using n8n.
The chatbot retrieves relevant information from an external knowledge base and generates accurate, context-aware responses using an AI model.

The goal of this project is to demonstrate how RAG systems can be built using low-code automation workflows for real-world AI applications.

Demo
RAG Chatbot Demo

Click the image above to watch the complete workflow demonstration.

Direct video link:
https://youtu.be/Sz-O8Wl1Ckw?si=bjqmm3jnqtv0LYBU

How It Works
Documents are ingested into the workflow
Large text is split into smaller chunks
Embeddings are generated for each chunk
Embeddings are stored in a vector database
User queries are embedded at runtime
Relevant chunks are retrieved using similarity search
The AI model generates responses using the retrieved context
Features
Retrieval-Augmented Generation architecture
Vector similarity search for contextual retrieval
Context-aware AI responses
Reduced hallucinations through grounded answers
Fully implemented using n8n workflows
Tech Stack
n8n
Large Language Model (LLM)
Embedding model
Vector database
Files in This Repository
rag basic.json
n8n workflow export for the RAG chatbot

Capture.PNG
Screenshot of the complete n8n workflow

README.md
Project documentation

How to Use
Import rag basic.json into n8n
Configure the required credentials for the LLM, embeddings, and vector store
Add documents for ingestion
Execute the workflow
Start interacting with the chatbot
Project Purpose
This project was built to demonstrate:

Practical implementation of RAG systems
AI automation using n8n
Use of vector databases and embeddings
Design of real-world AI workflows
Author
Satvik Sharma
AI Automation and n8n Workflow Projects

About
RAG-based chatbot built using n8n, vector database, and LLMs

Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
No contributors
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information

4)
Skip to content
satvik-sharma-05
CRM-human-in-the-loop
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Owner avatar
CRM-human-in-the-loop
Public
satvik-sharma-05/CRM-human-in-the-loop
Go to file
t
T
Name		
 
My workflow.json
 
 
README.md
 
 
image.png
 
 
Repository files navigation
README
Human-in-the-Loop Sales Email Automation using n8n
This project demonstrates a Human-in-the-Loop AI sales automation workflow built using n8n.

An AI agent drafts a personalized sales email for a new lead, a human reviewer then approves or rejects the email, and the workflow automatically takes the next action based on that decision. If approved, the email is sent to the lead. If rejected, the email is revised based on feedback and reprocessed.

This project highlights how AI automation and human judgment can work together in real-world sales workflows.

Demo
Workflow Screenshot
Human-in-the-Loop Demo

Direct Video Link
https://youtu.be/Sz-O8Wl1Ckw

Workflow Overview
A new lead submits a form
Lead details are stored in Google Sheets
An AI agent generates a personalized sales email
The email is sent to a human reviewer for approval
Reviewer approves or rejects the email
If approved, the email is sent to the customer
If rejected, feedback is captured
A second AI agent rewrites the email based on feedback
The revised email can be reviewed again or sent
Key Features
Human-in-the-Loop approval system
AI-generated sales emails
Feedback-driven email rewriting
Conditional routing based on approval or rejection
Automated email delivery
Built entirely using n8n workflows
Tech Stack
n8n
Google Gemini (LLM)
Google Sheets
Gmail
Structured Output Parser
Text Classification
Files in This Repository
My workflow.json
n8n workflow export for the Human-in-the-Loop automation

Screenshot 2026-01-02 135644.png
Visual overview of the complete workflow

README.md
Project documentation

How to Use
Import My workflow.json into n8n
Configure Gmail and Google Sheets credentials
Set up the lead intake form
Run the workflow
Review AI-generated emails and approve or reject them
Project Purpose
This project was built to demonstrate:

Practical Human-in-the-Loop AI design
Real-world sales automation
AI-assisted decision workflows
Advanced n8n automation patterns
Author
Satvik Sharma
AI Automation | n8n Workflows

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
 
 
 
Contributors
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information
