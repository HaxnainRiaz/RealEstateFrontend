
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const GUIDES = [
    { title: "The Institutional Tenant", desc: "How to optimize your profile for high-tier asset access.", time: "15 min" },
    { title: "Portfolio Deployment v1", desc: "A technical guide to initial inventory listing.", time: "25 min" },
    { title: "Yield Forensics 101", desc: "Understanding the data points that drive modern ROI.", time: "20 min" },
    { title: "Security Protocols", desc: "Safeguarding your identities in a distributed ecosystem.", time: "10 min" }
];

export default function GuidesPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/resources" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to Knowledge Center
                </Link>
                <SectionHeader
                    subtitle="Learning Protocols"
                    title="Strategic Guides"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                    {GUIDES.map((guide, i) => (
                        <motion.div
                            key={guide.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 hover:border-[#1D4ED8] transition-all group cursor-pointer p-[48px]">
                                <div className="flex justify-between items-start mb-[32px]">
                                    <div className="w-[40px] h-[40px] bg-[#1D4ED8]/10 rounded-[4px] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] flex items-center justify-center transition-all">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                    </div>
                                    <span className="text-[12px] font-[600] text-[#6B7280]">{guide.time} READ</span>
                                </div>
                                <CardTitle className="text-[24px]">{guide.title}</CardTitle>
                                <CardDescription className="text-[16px] mt-[16px] leading-[1.6]">
                                    {guide.desc}
                                </CardDescription>
                                <div className="mt-[40px] pt-[24px] border-t border-[#D1D5DB]/20 flex items-center justify-between">
                                    <span className="text-[14px] font-[600] text-[#111827]">Download PDF</span>
                                    <span className="text-[#1D4ED8] transition-transform group-hover:translate-x-[4px]">→</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
