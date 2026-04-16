"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                        Let's build something <span className="text-gradient">impactful</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 px-4">
                        I'm currently seeking internship opportunities in AI/ML and full-stack development.
                        <br className="hidden sm:block" />
                        Let's connect and create intelligent systems together.
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 px-4">
                        <motion.a
                            href="mailto:satviksharma0510@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary rounded-full hover:bg-opacity-90 transition-smooth glow-orange text-sm sm:text-base"
                        >
                            <Mail size={18} className="sm:w-5 sm:h-5" />
                            <span className="font-semibold">Email Me</span>
                        </motion.a>

                        <motion.a
                            href="https://github.com/satvik-sharma-05"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full hover:bg-opacity-20 transition-smooth text-sm sm:text-base"
                        >
                            <Github size={18} className="sm:w-5 sm:h-5" />
                            <span className="font-semibold">GitHub</span>
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/satvik-sharma-05"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full hover:bg-opacity-20 transition-smooth text-sm sm:text-base"
                        >
                            <Linkedin size={18} className="sm:w-5 sm:h-5" />
                            <span className="font-semibold">LinkedIn</span>
                        </motion.a>
                    </div>

                    {/* Quick Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl max-w-2xl mx-auto"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Satvik Sharma</h3>
                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                            Computer Engineering Student at Thapar Institute of Engineering and Technology
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary bg-opacity-20 rounded-full">AI/ML Engineer</span>
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary bg-opacity-20 rounded-full">Full-stack Developer</span>
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary bg-opacity-20 rounded-full">Open to Opportunities</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 sm:mt-20 text-center text-gray-500 text-xs sm:text-sm px-4"
            >
                <p>© 2026 Satvik Sharma. Built with Next.js, Three.js, and GSAP.</p>
            </motion.footer>
        </section>
    );
}
