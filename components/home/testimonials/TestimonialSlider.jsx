"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <section className="py-[120px] bg-[#FFFFFF] min-h-[400px]" />;

    return (
        <section ref={containerRef} className="py-[120px] bg-[#FFFFFF] overflow-hidden">
            <div className="container mx-auto px-[24px] mb-[64px] text-center">
                <span className="text-[#1D4ED8] font-[700] uppercase tracking-[0.1em] text-[14px]">Trusted By Leaders</span>
                <h2 className="text-[36px] md:text-[48px] font-[800] text-[#111827] mt-[16px]">
                    Validated by the <span className="text-[#1D4ED8]">Industry</span>
                </h2>
            </div>

            <div className="relative w-full">
                <div className="flex gap-[32px] px-[24px] md:px-[80px] overflow-x-auto pb-[40px] hide-scrollbar snap-x snap-mandatory">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                    {/* Duplicate for infinite loop illusion if we were using a marquee, for now just simple snap scroll */}
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <div key={`dup-${idx}`} className="min-w-[300px] md:min-w-[400px] snap-center hidden md:block">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
