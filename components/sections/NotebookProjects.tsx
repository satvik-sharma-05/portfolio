"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, BookOpen, Star } from "lucide-react";
import { projects } from "@/lib/projectsData";
import { gsap } from "gsap";

export default function NotebookProjects() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const pageRef = useRef<HTMLDivElement>(null);

    const totalPages = projects.length;
    const currentProject = projects[currentPage];

    const flipPage = (direction: "next" | "prev") => {
        if (isFlipping) return;

        const newPage = direction === "next"
            ? Math.min(currentPage + 1, totalPages - 1)
            : Math.max(currentPage - 1, 0);

        if (newPage === currentPage) return;

        setIsFlipping(true);

        // GSAP page flip animation
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentPage(newPage);
                setIsFlipping(false);
            },
        });

        if (direction === "next") {
            tl.to(pageRef.current, {
                rotateY: -180,
                duration: 0.8,
                ease: "power2.inOut",
                transformOrigin: "left center",
            });
        } else {
            tl.to(pageRef.current, {
                rotateY: 180,
                duration: 0.8,
                ease: "power2.inOut",
                transformOrigin: "right center",
            });
        }
    };

    useEffect(() => {
        // Reset rotation after flip
        if (!isFlipping && pageRef.current) {
            gsap.set(pageRef.current, { rotateY: 0 });
        }
    }, [isFlipping, currentPage]);

    return (
        <section id="projects" className="relative py-32 bg-gradient-to-b from-dark to-black overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="text-primary" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            Engineering <span className="text-gradient">Notebook</span>
                        </h2>
                    </div>
                    <p className="text-gray-400">Flip through my project journal</p>
                </motion.div>

                {/* Notebook Container */}
                <div className="relative max-w-6xl mx-auto" style={{ perspective: "2000px" }}>
                    {/* Notebook */}
                    <div className="relative">
                        {/* Spine/Binding */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transform -translate-x-1/2 z-20 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
                            {/* Spiral rings */}
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute left-1/2 w-3 h-3 bg-gray-600 rounded-full transform -translate-x-1/2 border border-gray-500"
                                    style={{ top: `${(i + 1) * 11}%` }}
                                />
                            ))}
                        </div>

                        {/* Page Container */}
                        <div
                            ref={pageRef}
                            className="relative grid grid-cols-2 gap-0"
                            style={{
                                transformStyle: "preserve-3d",
                                transformOrigin: "center center",
                            }}
                        >
                            {/* Left Page (Previous Project Preview) */}
                            <motion.div
                                className="relative bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-12 rounded-l-3xl shadow-2xl"
                                style={{
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                                }}
                            >
                                {currentPage > 0 && (
                                    <div className="opacity-50">
                                        <p className="text-sm text-gray-600 mb-2">Previous</p>
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            {projects[currentPage - 1].title}
                                        </h3>
                                    </div>
                                )}
                                {currentPage === 0 && (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-gray-500 italic">Start of notebook</p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Right Page (Current Project) */}
                            <motion.div
                                className="relative bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-12 rounded-r-3xl shadow-2xl"
                                style={{
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPage}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        {/* Featured Badge */}
                                        {currentProject.featured && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <Star className="text-primary fill-primary" size={20} />
                                                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                                                    Featured Project
                                                </span>
                                            </div>
                                        )}

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                                {currentProject.title}
                                            </h3>
                                            <p className="text-primary text-lg font-semibold">
                                                {currentProject.tagline}
                                            </p>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4 text-gray-700">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    Problem
                                                </h4>
                                                <p className="text-sm leading-relaxed">{currentProject.problem}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    Approach
                                                </h4>
                                                <p className="text-sm leading-relaxed">{currentProject.approach}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    Tech Stack
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentProject.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold border border-primary/30"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    Impact
                                                </h4>
                                                <p className="text-sm leading-relaxed">{currentProject.impact}</p>
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 pt-4">
                                            {currentProject.live && (
                                                <a
                                                    href={currentProject.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-smooth text-sm font-semibold"
                                                >
                                                    <ExternalLink size={16} />
                                                    Live Demo
                                                </a>
                                            )}
                                            {currentProject.github && (
                                                <a
                                                    href={currentProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-smooth text-sm font-semibold"
                                                >
                                                    <Github size={16} />
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {/* Page Shadow/Depth Effect */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/10 to-transparent rounded-l-3xl" />
                            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/10 to-transparent rounded-r-3xl" />
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => flipPage("prev")}
                        disabled={currentPage === 0 || isFlipping}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 p-4 glass-dark rounded-full hover:bg-primary/20 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="text-primary" size={28} />
                    </button>

                    <button
                        onClick={() => flipPage("next")}
                        disabled={currentPage === totalPages - 1 || isFlipping}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 p-4 glass-dark rounded-full hover:bg-primary/20 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next project"
                    >
                        <ChevronRight className="text-primary" size={28} />
                    </button>
                </div>

                {/* Page Counter */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <div className="text-gray-400 font-mono text-sm">
                        Page {String(currentPage + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                    </div>
                    <div className="flex gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isFlipping && index !== currentPage) {
                                        flipPage(index > currentPage ? "next" : "prev");
                                    }
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentPage ? "w-8 bg-primary" : "w-2 bg-gray-600"
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
