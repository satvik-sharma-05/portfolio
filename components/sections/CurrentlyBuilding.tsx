"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Brain } from "lucide-react";

const currentProjects = [
    {
        title: "Agentic AI Systems",
        description: "Building autonomous agents that can plan, reason, and execute complex tasks",
        icon: Brain,
        status: "In Progress",
    },
    {
        title: "Multi-Modal AI",
        description: "Exploring vision-language models for document understanding",
        icon: Sparkles,
        status: "Research",
    },
    {
        title: "AI Infrastructure",
        description: "Scalable deployment pipelines for production AI systems",
        icon: Zap,
        status: "Active",
    },
];

export default function CurrentlyBuilding() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-dark to-black">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    Currently <span className="text-gradient">Building</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {currentProjects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="glass-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group cursor-pointer"
                            >
                                {/* Animated glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-0 group-hover:opacity-20 transition-smooth animate-glow" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="p-2 sm:p-3 bg-primary bg-opacity-20 rounded-full">
                                            <Icon className="text-primary" size={24} />
                                        </div>
                                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary bg-opacity-20 rounded-full text-[10px] sm:text-xs text-primary font-semibold">
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
