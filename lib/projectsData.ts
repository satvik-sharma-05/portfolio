export interface Project {
    id: number;
    title: string;
    tagline: string;
    problem: string;
    approach: string;
    tech: string[];
    impact: string;
    github?: string;
    live?: string;
    image?: string;
    priority: number;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "DocuQuery",
        tagline: "AI-Powered Document Intelligence Platform",
        problem: "Teams struggle with information overload across multiple documents, spending hours manually searching for specific information.",
        approach: "Built a production-grade RAG platform with multi-workspace collaboration, semantic search using pgvector, and Cohere embeddings for accurate document querying.",
        tech: ["Next.js", "FastAPI", "PostgreSQL", "Cohere", "pgvector", "TypeScript", "Python"],
        impact: "Enables teams to query documents conversationally with source citations, reducing search time by 80%. Multi-tenant SaaS with vector search and JWT auth.",
        github: "https://github.com/satvik-sharma-05/DocuQuery",
        live: "https://docu-query-sigma.vercel.app",
        image: "/pics/DoccuQuery.png",
        priority: 1,
        featured: true,
    },
    {
        id: 2,
        title: "HackTrack",
        tagline: "AI-Powered Hackathon Discovery Platform",
        problem: "Hackathon participants struggle to find relevant projects and compatible teammates based on skills and interests.",
        approach: "Implemented semantic matching using sentence-transformers (384-dim embeddings) and vector similarity search to recommend projects and team members.",
        tech: ["React", "Node.js", "MongoDB", "Sentence-Transformers", "Socket.io", "Express"],
        impact: "Smart project recommendations with 85% match accuracy. Real-time chat, 500+ hackathons aggregated, and intelligent team formation.",
        github: "https://github.com/satvik-sharma-05/HackTrack",
        live: "https://hacktrack-frontend.vercel.app",
        image: "/pics/hacktrack.png",
        priority: 2,
    },
    {
        id: 3,
        title: "BizIntel AI",
        tagline: "Hybrid RAG Business Intelligence Platform",
        problem: "Businesses need intelligent document processing with entity relationships and semantic understanding for strategic decisions.",
        approach: "Built hybrid RAG system combining FAISS (40%), BM25 (30%), and Neo4j (30%) for multi-database intelligence with knowledge graph.",
        tech: ["Next.js", "FastAPI", "MongoDB", "Neo4j", "FAISS", "OpenRouter"],
        impact: "Market analysis, location intelligence, revenue forecasting with entity extraction and relationship mapping. Multi-agent AI system.",
        github: "https://github.com/satvik-sharma-05/BizIntel-AI",
        live: "https://biz-intel-ai-two.vercel.app",
        image: "/pics/BizIntel.png",
        priority: 3,
    },
    {
        id: 4,
        title: "PathFinder AI",
        tagline: "Career Guidance Platform with Multi-Roadmap Support",
        problem: "Students (Class 6-12 and UG) struggle with career decisions and lack personalized guidance for their unique goals.",
        approach: "Multi-roadmap architecture with dedicated AI mentor per roadmap using Google Gemma 3N. Context-aware conversations with thinking indicators.",
        tech: ["Next.js", "TypeScript", "MongoDB", "OpenRouter", "JWT", "Framer Motion"],
        impact: "Unlimited career paths, roadmap-specific chatbot, progress tracking with XP/levels, skill gap analysis, and what-if simulator.",
        github: "https://github.com/satvik-sharma-05/pathfinder",
        live: "https://pathfinder-3.vercel.app",
        image: "/pics/pathfinder.png",
        priority: 4,
    },
    {
        id: 5,
        title: "HireAI",
        tagline: "GenAI-Powered Recruitment Platform",
        problem: "Manual resume screening is time-consuming, inconsistent, and prone to bias in candidate evaluation.",
        approach: "Built NLP pipeline using spaCy and TF-IDF for automated skill extraction, semantic matching, and explainable AI insights.",
        tech: ["Next.js", "FastAPI", "MongoDB", "spaCy", "TF-IDF", "OpenRouter"],
        impact: "Automated resume analysis with 85% accuracy, reducing screening time by 70%. AI decision support with HIRE/CONSIDER/REJECT recommendations.",
        github: "https://github.com/satvik-sharma-05/HireAI",
        live: "https://hire-ai-nine.vercel.app",
        image: "/pics/hireAI.png",
        priority: 5,
    },
    {
        id: 6,
        title: "SmartSupport AI",
        tagline: "AI-Powered Support Ticket Classification",
        problem: "Support teams manually categorize and prioritize thousands of tickets, leading to delays and inconsistent handling.",
        approach: "Rule-based classifier with keyword analysis for automatic categorization (Billing, Technical, Account, General) and priority assignment.",
        tech: ["React", "FastAPI", "Python", "Tailwind CSS", "Vite"],
        impact: "Instant classification with 75-80% accuracy. Automatic priority assignment (High/Medium/Low) with confidence scores.",
        github: "https://github.com/satvik-sharma-05/SmartSupportAI",
        live: "https://smart-support-ai-sandy.vercel.app",
        image: "/pics/smart_support.png",
        priority: 6,
    },
    {
        id: 7,
        title: "ForecastIQ",
        tagline: "ML-Powered Time-Series Forecasting Platform",
        problem: "Businesses struggle to predict future sales and demand patterns for inventory and resource planning.",
        approach: "Pre-trained ML models (Linear Regression, Random Forest) with 15 engineered features for automated time-series forecasting.",
        tech: ["React", "FastAPI", "MongoDB", "Scikit-learn", "Pandas", "Recharts"],
        impact: "7-90 day forecasts with MAE/RMSE/R² metrics. AI-generated insights for peak demand, trends, and business recommendations.",
        github: "https://github.com/satvik-sharma-05/ForecastIQ",
        live: "https://forecast-iq-theta.vercel.app",
        image: "/pics/forcastIQ.png",
        priority: 7,
    },
    {
        id: 8,
        title: "RAG Email Classifier (n8n)",
        tagline: "Automated Email Classification with RAG",
        problem: "Customer support teams manually classify and respond to hundreds of emails daily, causing delays.",
        approach: "RAG-based email classifier using n8n workflows with vector similarity search and context-aware AI responses.",
        tech: ["n8n", "LLM", "Vector DB", "Gmail API", "Telegram API"],
        impact: "Automatic email classification, context-aware responses, reduced hallucinations, and Telegram alerts for support teams.",
        github: "https://github.com/satvik-sharma-05/rag-based-email-classifier-n8n",
        live: "https://youtu.be/09tzul6kLU4",
        image: "/pics/DoccuQuery.png",
        priority: 8,
    },
];
