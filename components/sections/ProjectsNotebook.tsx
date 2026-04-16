"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, BookOpen } from "lucide-react";

const projects = [
    {
        title: "DocuQuery",
        subtitle: "AI-Powered Document Intelligence Platform",
        problem: "Teams struggle with information overload across multiple documents, spending hours manually searching for specific information.",
        approach: "Built a production-grade RAG (Retrieval-Augmented Generation) platform with multi-workspace collaboration, semantic search using pgvector, and Cohere embeddings for accurate document querying.",
        tech: ["Next.js", "FastAPI", "PostgreSQL", "Cohere", "pgvector", "TypeScript", "Python"],
        impact: "Enables teams to query documents conversationally with source citations, reducing search time by 80%",
        metrics: ["Multi-tenant SaaS", "Vector search", "JWT auth", "Real-time chat"],
        link: "https://docu-query-sigma.vercel.app",
        github: "https://github.com/satvik-sharma-05/DocuQuery",
    },
    {
        title: "HackMatch AI",
        subtitle: "Intelligent Hackathon Platform",
        problem: "Hackathon participants struggle to find relevant projects and compatible teammates based on skills and interests.",
        approach: "Implemented semantic matching using OpenAI embeddings and vector similarity search to recommend projects and team members based on skill profiles.",
        tech: ["React", "Node.js", "OpenAI", "Pinecone", "Express", "MongoDB"],
        impact: "Smart project recommendations with 85% match accuracy",
        metrics: ["Semantic search", "Team formation", "Skill matching", "Real-time updates"],
        link: "#",
        github: "#",
    },
    {
        title: "Resume Analyzer",
        subtitle: "NLP-Based Resume Intelligence",
        problem: "Manual resume screening is time-consuming, inconsistent, and prone to bias in candidate evaluation.",
        approach: "Built an NLP pipeline using spaCy and TensorFlow for automated skill extraction, job matching, and candidate ranking with explainable AI.",
        tech: ["Python", "spaCy", "TensorFlow", "Flask", "scikit-learn"],
        impact: "Automated resume analysis with 85% accuracy, reducing screening time by 70%",
        metrics: ["NLP pipeline", "Skill extraction", "Job matching", "Ranking algorithm"],
        link: "#",
        github: "#",
    },
    {
        title: "Medical Imaging Classifier",
        subtitle: "Deep Learning for Healthcare",
        problem: "Medical image diagnosis requires expert analysis, which is time-consuming and not always accessible.",
        approach: "Developed a CNN-based classification system using transfer learning (ResNet) for automated medical image analysis with confidence scores.",
        tech: ["PyTorch", "ResNet", "FastAPI", "Docker", "OpenCV"],
        impact: "90%+ accuracy on medical image classification with deployment-ready API",
        metrics: ["Transfer learning", "CNN architecture", "API deployment", "Docker containerization"],
        link: "#",
        github: "#",
    },
];

export default function ProjectsNotebook() {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentPage((prev) => {
            const next = prev + newDirection;
            if (next < 0) return projects.length - 1;
            if (next >= projects.length) return 0;
            return next;
        });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotateY: 0,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction < 0 ? 45 : -45,
        }),
    };

    const project = projects[currentPage];

    return (
        <section id="projects" className="relative py-32 bg-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="text-primary" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            Project <span className="text-gradient">Notebook</span>
                        </h2>
                    </div>
                    <p className="text-gray-400">Swipe through my engineering journey</p>
                </motion.div>

                {/* Notebook Container */}
                <div className="max-w-5xl mx-auto relative" style={{ perspective: "2000px" }}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentPage}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                rotateY: { duration: 0.4 },
                            }}
                            className="glass-dark p-8 md:p-12 rounded-3xl border-2 border-primary/20"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* Page Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-primary text-lg">{project.subtitle}</p>
                                </div>
                                <div className="text-sm text-gray-500">
                                    Page {currentPage + 1} / {projects.length}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Problem
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                                </div>

                                <div>
                                    <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Approach
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed">{project.approach}</p>
                                </div>

                                <div>
                                    <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Impact
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed mb-3">{project.impact}</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {project.metrics.map((metric) => (
                                            <div key={metric} className="text-xs text-gray-400 bg-black/30 px-3 py-2 rounded-lg">
                                                ✓ {metric}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-4">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-primary rounded-full hover:bg-opacity-90 transition-smooth font-semibold"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:border-primary transition-smooth font-semibold"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-4 glass-dark rounded-full hover:bg-primary/20 transition-smooth"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="text-primary" size={24} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-4 glass-dark rounded-full hover:bg-primary/20 transition-smooth"
                        aria-label="Next project"
                    >
                        <ChevronRight className="text-primary" size={24} />
                    </button>
                </div>

                {/* Page Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentPage ? 1 : -1);
                                setCurrentPage(index);
                            }}
                            className={`h-2 rounded-full transition-all ${index === currentPage ? "w-8 bg-primary" : "w-2 bg-gray-600"
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
