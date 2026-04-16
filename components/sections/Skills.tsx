"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsFlow = [
    { name: "C++", category: "Foundation", color: "from-blue-500 to-blue-700" },
    { name: "Problem Solving", category: "Core", color: "from-purple-500 to-purple-700" },
    { name: "Python", category: "Language", color: "from-yellow-500 to-yellow-700" },
    { name: "Machine Learning", category: "AI", color: "from-green-500 to-green-700" },
    { name: "Deep Learning", category: "AI", color: "from-red-500 to-red-700" },
    { name: "LLMs & RAG", category: "GenAI", color: "from-primary to-orange-700" },
    { name: "Full-stack", category: "Engineering", color: "from-primary to-orange-700" },
];

export default function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="relative py-32 bg-gradient-to-b from-dark to-black">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold text-center mb-20"
                >
                    Skills <span className="text-gradient">Evolution</span>
                </motion.h2>

                <div ref={ref} className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {skillsFlow.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div
                                    className={`glass-dark p-6 rounded-2xl hover:scale-110 transition-smooth cursor-pointer min-w-[180px]`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-smooth`} />
                                    <p className="text-xs text-primary mb-2 font-semibold">{skill.category}</p>
                                    <h3 className="text-xl font-bold relative z-10">{skill.name}</h3>
                                </div>
                                {index < skillsFlow.length - 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: "40px" } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                        className="hidden lg:block absolute top-1/2 -right-10 h-0.5 bg-primary"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-400 mb-6">Tech Stack</p>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {["Python", "TypeScript", "React", "Next.js", "FastAPI", "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "Cohere", "OpenAI", "Docker", "Git"].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 glass rounded-full text-sm hover:bg-primary hover:bg-opacity-20 transition-smooth"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
