"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollSection({ children, className = "", delay = 0 }: ScrollSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-10% 0px -10% 0px",
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.95 }
            }
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
