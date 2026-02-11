"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';

const TESTIMONIALS = [
    {
        content: "This platform has completely transformed how we manage our multi-family portfolio. The analytics are institutional-grade and the interface is intuitive.",
        author: "Sarah Jenkins",
        role: "Director of Assets",
        company: "Vanguard Properties",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        content: "Finally, a solution that understands the complexity of modern real estate. The automated workflows alone have saved us countless hours of administrative work.",
        author: "Michael Chen",
        role: "Managing Partner",
        company: "Focus Capital",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        content: "The tenant screening process is seamless. We've seen a measurable increase in tenant quality and retention since switching to this ecosystem.",
        author: "Elena Rodriguez",
        role: "Property Manager",
        company: "Urban Living",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-[120px] bg-surface-base overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
                <FaQuoteLeft className="w-[600px] h-[600px] text-primary-600" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
                        >
                            Institutional Validation
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-primary tracking-tighter"
                        >
                            Trusted by <span className="text-primary-600">Market Leaders.</span>
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-2xl bg-white border border-surface-sunken flex items-center justify-center text-text-primary hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm group"
                        >
                            <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-2xl bg-white border border-surface-sunken flex items-center justify-center text-text-primary hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm group"
                        >
                            <FiChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[450px] md:h-[400px] flex items-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full"
                        >
                            <div className="max-w-4xl mx-auto">
                                <TestimonialCard {...TESTIMONIALS[currentIndex]} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Nodes */}
                <div className="flex justify-center gap-3 mt-12">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-12 bg-primary-600' : 'w-3 bg-surface-sunken hover:bg-primary-200'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
