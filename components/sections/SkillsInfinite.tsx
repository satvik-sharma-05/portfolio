"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Code2,
    Brain,
    Database,
    Layers,
    Zap,
    GitBranch,
    Server,
    Cpu,
    Network,
    Box
} from "lucide-react";

const skills = [
    { name: "Python", icon: Code2, experience: "3+ years", projects: "15+ projects" },
    { name: "TensorFlow", icon: Brain, experience: "2+ years", projects: "Medical imaging, NLP" },
    { name: "PyTorch", icon: Cpu, experience: "2+ years", projects: "Deep learning models" },
    { name: "React", icon: Layers, experience: "2+ years", projects: "10+ web apps" },
    { name: "Next.js", icon: Zap, experience: "1+ year", projects: "Full-stack platforms" },
    { name: "FastAPI", icon: Server, experience: "2+ years", projects: "REST APIs, RAG systems" },
    { name: "PostgreSQL", icon: Database, experience: "2+ years", projects: "Vector databases" },
    { name: "MongoDB", icon: Database, experience: "1+ year", projects: "NoSQL solutions" },
    { name: "Docker", icon: Box, experience: "1+ year", projects: "Containerization" },
    { name: "Git", icon: GitBranch, experience: "3+ years", projects: "Version control" },
    { name: "LLMs", icon: Brain, experience: "1+ year", projects: "RAG, embeddings" },
    { name: "Node.js", icon: Network, experience: "2+ years", projects: "Backend services" },
];

// Duplicate for seamless loop
const duplicatedSkills = [...skills, ...skills];

export default function SkillsInfinite() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
                >
                    Tech <span className="text-gradient">Arsenal</span>
                </motion.h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-3 sm:gap-4 lg:gap-6"
                    animate={{
                        x: [0, -50 * skills.length],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50, // Slower on mobile
                            ease: "linear",
                        },
                    }}
                    style={{
                        width: "fit-content",
                    }}
                >
                    {duplicatedSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <motion.div
                                key={index}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                onTouchStart={() => setHoveredIndex(index)}
                                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 2000)}
                                whileHover={{ scale: 1.05, y: -10 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[200px]"
                            >
                                <div className="glass-dark p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl h-full border border-transparent hover:border-primary transition-all duration-300 cursor-pointer">
                                    <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 lg:space-y-4">
                                        <div className="p-2 sm:p-3 lg:p-4 bg-primary/20 rounded-full">
                                            <Icon className="text-primary" size={24} />
                                        </div>
                                        <h3 className="text-sm sm:text-base lg:text-xl font-bold">{skill.name}</h3>

                                        {/* Expanded Info on Hover/Touch */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={
                                                isHovered
                                                    ? { opacity: 1, height: "auto" }
                                                    : { opacity: 0, height: 0 }
                                            }
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                                                <p>{skill.experience}</p>
                                                <p className="text-[10px] sm:text-xs">{skill.projects}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
