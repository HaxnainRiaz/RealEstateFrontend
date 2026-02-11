
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const RESOURCE_CATEGORIES = [
    { title: "Strategic Guides", desc: "In-depth blueprints for institutional management and tenant success.", href: "/resources/guides" },
    { title: "Institutional Tools", desc: "Calculators, yield models, and screening protocols for power users.", href: "/resources/tools" },
    { title: "Neighborhood Forensics", desc: "Data-driven analysis of local markets and growth coordinates.", href: "/resources/neighborhoods" }
];

export default function ResourcesPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <SectionHeader
                    subtitle="Knowledge Center"
                    title="Tirios Resources"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] mb-[80px]">
                    {RESOURCE_CATEGORIES.map((cat, i) => (
                        <motion.div
                            key={cat.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={cat.href} className="group block">
                                <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] group-hover:shadow-2xl transition-all duration-500 p-[48px]">
                                    <div className="w-[64px] h-[64px] bg-[#1D4ED8]/10 rounded-[8px] mb-[32px] group-hover:scale-110 transition-transform" />
                                    <CardTitle className="text-[24px]">{cat.title}</CardTitle>
                                    <CardDescription className="text-[16px] mt-[16px] leading-[1.6]">
                                        {cat.desc}
                                    </CardDescription>
                                    <div className="mt-[32px] flex items-center gap-[8px] text-[14px] font-[700] text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore Catalog <span>→</span>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Guide */}
                <div className="bg-[#111827] rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    <div className="flex-1 p-[80px]">
                        <span className="text-[#1D4ED8] text-[12px] font-[700] uppercase tracking-[0.1em] mb-[24px] block">Premium Guide</span>
                        <h2 className="text-[40px] font-[700] text-[#FFFFFF] leading-[1.2] mb-[24px]">
                            Institutional Grade: <br />The 2024 Management Blueprint.
                        </h2>
                        <p className="text-[#FFFFFF]/60 text-[18px] leading-[1.6] mb-[48px]">
                            Our most comprehensive research yet. A 120-page tactical audit of the evolving real estate ecosystem.
                        </p>
                        <button className="px-[40px] py-[20px] bg-[#1D4ED8] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#2563EB] transition-all">
                            Download Full Report
                        </button>
                    </div>
                    <div className="flex-1 bg-[#1D4ED8]/10 border-l border-[#FFFFFF]/10" />
                </div>
            </Section>
        </div>
    );
}
