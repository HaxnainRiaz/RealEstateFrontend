"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LazyLoad({ children, placeholder, threshold = 0.1 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={ref} className="min-h-[100px] w-full">
            <AnimatePresence>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                ) : (
                    placeholder || (
                        <div className="w-full h-[200px] bg-[#F3F4F6] animate-pulse rounded-[8px]" />
                    )
                )}
            </AnimatePresence>
        </div>
    );
}
