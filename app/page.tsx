"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import SkillsInfinite from "@/components/sections/SkillsInfinite";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Contact from "@/components/sections/Contact";
import ScrollSection from "@/components/ScrollSection";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            {/* Scroll Indicator */}
            <ScrollIndicator />

            <main className="relative">
                {/* Hero - No scroll animation (always visible on load) */}
                <Hero />

                {/* Skills - Scroll animated */}
                <ScrollSection>
                    <SkillsInfinite />
                </ScrollSection>

                {/* Projects - Scroll animated */}
                <ScrollSection delay={0.1}>
                    <Projects />
                </ScrollSection>

                {/* Experience - Scroll animated */}
                <ScrollSection delay={0.1}>
                    <Experience />
                </ScrollSection>

                {/* Certificates - Scroll animated */}
                <ScrollSection delay={0.1}>
                    <Certificates />
                </ScrollSection>

                {/* Currently Building - Scroll animated */}
                <ScrollSection delay={0.1}>
                    <CurrentlyBuilding />
                </ScrollSection>

                {/* Contact - Scroll animated */}
                <ScrollSection delay={0.1}>
                    <Contact />
                </ScrollSection>
            </main>
        </>
    );
}
