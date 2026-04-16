"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
    {
        phase: "Foundation",
        title: "Beginner",
        description: "Started with C++ and problem-solving fundamentals",
        icon: "🎯",
    },
    {
        phase: "Growth",
        title: "DSA Mastery",
        description: "Deep dive into algorithms and data structures",
        icon: "🧠",
    },
    {
        phase: "Evolution",
        title: "AI/ML",
        description: "Explored machine learning, deep learning, and LLMs",
        icon: "🤖",
    },
    {
        phase: "Impact",
        title: "Real Projects",
        description: "Built production-grade AI systems and full-stack applications",
        icon: "🚀",
    },
];

export default function Journey() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const timeline = timelineRef.current;

        if (!section || !timeline) return;

        const ctx = gsap.context(() => {
            gsap.to(timeline, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: ".timeline-container",
                    pinSpacing: true,
                },
                height: "100%",
            });

            gsap.utils.toArray<HTMLElement>(".journey-step").forEach((step, i) => {
                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                    },
                    opacity: 0,
                    x: i % 2 === 0 ? -100 : 100,
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[400vh] bg-dark py-20">
            <div className="timeline-container sticky top-0 h-screen flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-center mb-20"
                    >
                        My <span className="text-gradient">Journey</span>
                    </motion.h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 w-1 h-0 bg-primary transform -translate-x-1/2" ref={timelineRef} />

                        {/* Journey Steps */}
                        <div className="space-y-32">
                            {journeySteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`journey-step flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                        }`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                                        <div className="glass-dark p-6 rounded-2xl hover:scale-105 transition-smooth">
                                            <div className="text-4xl mb-4">{step.icon}</div>
                                            <p className="text-primary text-sm font-semibold mb-2">{step.phase}</p>
                                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-400">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-dark z-10 flex-shrink-0" />
                                    <div className="w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
