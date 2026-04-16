"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { projects, Project } from "@/lib/projectsData";
import Image from "next/image";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Sort by priority
    const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority);

    // Duplicate projects for infinite loop
    const duplicatedProjects = [...sortedProjects, ...sortedProjects, ...sortedProjects];

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [0, -100 * sortedProjects.length],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: sortedProjects.length * 4, // Faster: 4 seconds per project
                        ease: "linear",
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls, sortedProjects.length]);

    // Arrow key navigation for high-speed scrolling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't scroll if modal is open
            if (selectedProject) return;

            const scrollAmount = 800; // High speed scroll

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                setIsPaused(true);
                controls.stop();

                if (scrollContainerRef.current) {
                    const currentX = scrollContainerRef.current.scrollLeft;
                    scrollContainerRef.current.scrollTo({
                        left: currentX - scrollAmount,
                        behavior: "smooth",
                    });
                }
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                setIsPaused(true);
                controls.stop();

                if (scrollContainerRef.current) {
                    const currentX = scrollContainerRef.current.scrollLeft;
                    scrollContainerRef.current.scrollTo({
                        left: currentX + scrollAmount,
                        behavior: "smooth",
                    });
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject, controls]);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <section id="projects" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Projects</h2>
                    <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                        Selected work in AI, ML, and software engineering
                    </p>
                </motion.div>
            </div>

            {/* Infinite Scrolling Container */}
            <div
                ref={scrollContainerRef}
                className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            >
                <motion.div
                    className="flex gap-3 sm:gap-4 lg:gap-6 cursor-pointer px-4 sm:px-6"
                    animate={controls}
                    style={{ width: "fit-content" }}
                >
                    {duplicatedProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.id}-${index}`}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                            isFirst={index === 0}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Arrow Key Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm px-4"
            >
                <span className="hidden sm:inline">Use ← → arrow keys to navigate • </span>
                <span className="sm:hidden">Swipe to navigate • </span>
                Hover/tap to pause
            </motion.div>

            {/* Custom scrollbar hide styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Expanded Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// Project Card Component
function ProjectCard({
    project,
    onClick,
    isFirst,
}: {
    project: Project;
    onClick: () => void;
    isFirst?: boolean;
}) {
    return (
        <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={`group relative w-[280px] sm:w-[320px] lg:w-[380px] flex-shrink-0 bg-black/60 backdrop-blur-sm border rounded-xl overflow-hidden cursor-pointer snap-center ${isFirst ? "border-primary/60" : "border-gray-800"
                }`}
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(255,107,0,0.2)]" />

            {/* Content */}
            <div className="relative z-10">
                {/* Image */}
                <div className="relative w-full h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                            <span className="text-3xl sm:text-4xl">🚀</span>
                        </div>
                    )}
                    {isFirst && (
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold">
                            Featured
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 sm:py-1 bg-gray-900/80 border border-gray-800 rounded-md text-[10px] sm:text-xs text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-500">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Project Modal Component
function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl sm:rounded-2xl shadow-2xl my-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="sticky top-2 sm:top-4 right-2 sm:right-4 float-right z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 border border-gray-700 hover:border-primary rounded-full transition-all duration-300"
                >
                    <X size={16} className="sm:w-5 sm:h-5 text-gray-400 hover:text-primary" />
                </button>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gradient-to-br from-gray-800 to-black rounded-lg sm:rounded-xl overflow-hidden">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-600">
                                    <span className="text-4xl sm:text-5xl lg:text-6xl">🚀</span>
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 sm:gap-3">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base font-medium shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]"
                                >
                                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    <span className="hidden sm:inline">Live Demo</span>
                                    <span className="sm:hidden">Demo</span>
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 text-sm sm:text-base font-medium"
                                >
                                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Right: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {/* Title */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-primary text-base sm:text-lg font-medium">
                                {project.tagline}
                            </p>
                        </div>

                        {/* Problem */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Problem
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {project.problem}
                            </p>
                        </motion.div>

                        {/* Approach */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Approach
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {project.approach}
                            </p>
                        </motion.div>

                        {/* Impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Impact
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {project.impact}
                            </p>
                        </motion.div>

                        {/* Tech Arsenal */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {project.tech.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/80 border border-gray-800 rounded-lg text-xs sm:text-sm text-gray-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
