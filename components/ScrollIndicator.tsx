"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide indicator after scrolling 100px
            setIsVisible(window.scrollY < 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-2"
        >
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-3 bg-primary rounded-full mt-2"
                />
            </div>
        </motion.div>
    );
}
