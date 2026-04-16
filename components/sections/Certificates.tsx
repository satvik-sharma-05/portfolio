"use client";

import { motion } from "framer-motion";
import { Award, FileText, Download } from "lucide-react";

const certificates = [
    {
        category: "Resume",
        title: "Satvik Sharma",
        description: "AI/ML Engineer Resume",
        date: "Updated 2026",
        file: "/certificates/resume_4.pdf",
        isResume: true,
    },
    {
        category: "Warewe Consultancy",
        title: "Full Stack Developer Intern",
        description: "Internship Experience Certificate",
        date: "June 2025 - July 2025",
        file: "/certificates/warewe/Satvik_Sharma-_Internship_Experience_Certificate[1].pdf",
    },
    {
        category: "Zidio Development",
        title: "Full Stack Developer Intern",
        description: "Training Certificate",
        date: "May 2025 - June 2025",
        file: "/certificates/zidio/Tranning Certificate.pdf",
    },
    {
        category: "Zidio Development",
        title: "Internship Certificate",
        description: "Completion Certificate",
        date: "May 2025 - June 2025",
        file: "/certificates/zidio/Certificate.pdf",
    },
];

export default function Certificates() {
    const handleDownload = (file: string, title: string) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = title.replace(/\s+/g, "_") + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-dark">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <span className="text-gradient">Certificates & Resume</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.98 }}
                            className={`glass-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:border-primary transition-smooth group cursor-pointer relative ${cert.isResume ? "border-primary/60" : ""
                                }`}
                        >
                            {cert.isResume && (
                                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 bg-primary/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold">
                                    Resume
                                </div>
                            )}

                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 bg-primary bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-smooth">
                                    {cert.isResume ? (
                                        <FileText className="text-primary" size={20} />
                                    ) : (
                                        <Award className="text-primary" size={20} />
                                    )}
                                </div>
                                <p className="text-primary text-xs sm:text-sm font-semibold">{cert.category}</p>
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{cert.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{cert.description}</p>
                            <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4">{cert.date}</p>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <a
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 sm:py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-all duration-300 text-xs sm:text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View
                                </a>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDownload(cert.file, cert.title);
                                    }}
                                    className="flex items-center justify-center gap-2 px-3 py-1.5 sm:py-2 border border-primary/30 hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                                >
                                    <Download size={14} className="sm:w-4 sm:h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
