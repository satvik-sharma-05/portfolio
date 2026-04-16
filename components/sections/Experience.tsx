"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "Future Interns",
        role: "Machine Learning Intern",
        location: "Remote",
        duration: "March 2026 – April 2026",
        description: "Successfully completed a 1-month intensive internship program in Machine Learning, working on real-world ML projects and gaining hands-on experience with modern machine learning frameworks and techniques.",
        skills: ["Machine Learning", "Python", "Data Analysis", "Model Training", "ML Frameworks"],
    },
    {
        company: "Warewe Consultancy",
        role: "Full Stack Developer Intern",
        location: "Gurugram, India",
        duration: "June 2025 – July 2025",
        description: "Contributed to end-to-end development of scalable web applications by implementing RESTful APIs, optimizing database queries, and enhancing UI/UX components, while collaborating in an agile environment to deliver high-quality, production ready solutions.",
        skills: ["REST APIs", "Database Optimization", "UI/UX", "Agile"],
    },
    {
        company: "Zidio Development",
        role: "Full Stack Developer Intern",
        location: "Remote",
        duration: "May 2025 – June 2025",
        description: "Built REST APIs using Node.js and Express for authentication and data management. Optimized MongoDB queries reducing API latency by 40%. Implemented JWT authentication and protected API routes.",
        skills: ["Node.js", "Express", "MongoDB", "JWT", "API Optimization"],
    },
];

export default function Experience() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-dark">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    Work <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block" />

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-3.5 sm:left-[18px] lg:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-primary rounded-full border-2 sm:border-4 border-dark hidden sm:block" />

                                <div className="sm:ml-12 lg:ml-20 glass-dark p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:border-primary transition-smooth">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{exp.role}</h3>
                                            <p className="text-primary text-base sm:text-lg font-semibold">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                                            <Briefcase size={14} className="sm:w-4 sm:h-4" />
                                            <span>Internship</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="sm:w-4 sm:h-4" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="sm:w-4 sm:h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs text-primary"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
