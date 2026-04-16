"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Particles from "../Particles";

export default function Hero() {
    const [scanComplete, setScanComplete] = useState(false);
    const scanLineRef = useRef<HTMLDivElement>(null);
    const connectLineRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        // Scan line animation
        const scanTimeline = gsap.timeline({
            delay: 1.2,
            onComplete: () => setScanComplete(true),
        });

        if (scanLineRef.current) {
            scanTimeline.fromTo(
                scanLineRef.current,
                { top: "0%", opacity: 1 },
                { top: "100%", duration: 1.5, ease: "power2.inOut" }
            );
        }

        // Connect line draw animation
        if (connectLineRef.current) {
            gsap.fromTo(
                connectLineRef.current,
                { strokeDashoffset: 1000 },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 2.5,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-dark via-black to-dark">
            {/* Animated Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <Particles />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen container mx-auto px-4 sm:px-6 flex items-center py-20 sm:py-0">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 w-full items-center">
                    {/* Left Side - Character Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center order-1 lg:order-1"
                    >
                        {/* Orange Glow Behind Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute inset-0 bg-primary/40 blur-[120px] rounded-full"
                        />

                        {/* Profile Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[550px] lg:h-[550px] overflow-hidden"
                        >
                            {/* Light Sweep Animation - Only on Image */}
                            <motion.div
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-10 pointer-events-none"
                            />

                            {/* Scan Line Effect */}
                            <div
                                ref={scanLineRef}
                                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 z-20 shadow-[0_0_20px_rgba(255,107,0,0.8)]"
                                style={{ top: "0%" }}
                            />

                            {/* Image with Subtle Float */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/profile-removebg-preview.png"
                                    alt="Satvik Sharma"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Corner Brackets - Orange */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: scanComplete ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-2 border-l-2 border-primary/60" />
                                <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-2 border-r-2 border-primary/60" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-2 border-l-2 border-primary/60" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-2 border-r-2 border-primary/60" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Clean Info Panel */}
                    <div className="relative space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-2 text-center lg:text-left">
                        {/* Main Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="space-y-2 sm:space-y-3"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                                Satvik Sharma
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
                                AI/ML Engineer
                            </p>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            Building intelligent systems that solve real-world problems
                        </motion.p>

                        {/* COD-Style Info Box - Orange Theme */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 2.5 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 40px rgba(255, 107, 0, 0.4)"
                            }}
                            className="relative p-4 sm:p-6 border-2 border-primary/40 bg-black/80 backdrop-blur-sm rounded-lg shadow-[0_0_30px_rgba(255,107,0,0.2)] max-w-xl mx-auto lg:mx-0"
                        >
                            {/* Connecting Line SVG - Orange */}
                            <svg
                                className="absolute -left-32 top-1/2 w-32 h-2 hidden lg:block"
                                style={{ transform: "translateY(-50%)" }}
                            >
                                <path
                                    ref={connectLineRef}
                                    d="M 0 1 L 128 1"
                                    stroke="rgba(255, 107, 0, 0.6)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="1000"
                                    strokeDashoffset="1000"
                                />
                                <circle cx="0" cy="1" r="4" fill="rgba(255, 107, 0, 0.8)" />
                            </svg>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                            {/* Info Lines */}
                            <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
                                <InfoLine label="NAME" value="Satvik Sharma" delay={2.7} />
                                <InfoLine label="ROLE" value="AI/ML Engineer" delay={2.9} />
                                <InfoLine
                                    label="SPECIALIZATION"
                                    value="Machine Learning • Deep Learning • Full Stack AI"
                                    delay={3.1}
                                />
                                <InfoLine
                                    label="STATUS"
                                    value="Available for opportunities"
                                    delay={3.3}
                                    highlight
                                />
                            </div>

                            {/* Blinking Cursor */}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-primary ml-1"
                            />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 3.5 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg hover:bg-orange-light transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] text-center text-sm sm:text-base"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary/40 text-white rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold text-center text-sm sm:text-base"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Info Line Component
function InfoLine({
    label,
    value,
    delay,
    highlight = false,
}: {
    label: string;
    value: string;
    delay: number;
    highlight?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col sm:flex-row gap-1 sm:gap-3"
        >
            <span className="text-primary/80 min-w-[100px] sm:min-w-[140px] text-xs uppercase tracking-wider">
                [ {label} ]
            </span>
            <span className={`${highlight ? "text-primary font-semibold" : "text-gray-200"} text-xs sm:text-sm break-words`}>
                {value}
            </span>
        </motion.div>
    );
}
