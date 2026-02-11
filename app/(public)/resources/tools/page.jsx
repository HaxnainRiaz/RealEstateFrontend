
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const TOOLS = [
    { title: "Yield Modeler", desc: "Advanced IRR and Cap Rate projection engine for institutional portfolios.", href: "/pricing/calculator" },
    { title: "Tenant Quality Auditor", desc: "Credential-based screening protocol simulation tool.", href: "#" },
    { title: "Forensic Market Maps", desc: "Interactive mapping of growth coordinates and neighborhood data.", href: "/resources/neighborhoods" },
    { title: "Settlement Estimator", desc: "Projected closing and maintenance cost modeling.", href: "#" }
];

export default function ToolsHubPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/resources" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to Resources
                </Link>
                <SectionHeader
                    subtitle="Precision Engines"
                    title="Institutional Tools"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mt-[64px]">
                    {TOOLS.map((tool, i) => (
                        <motion.div
                            key={tool.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 hover:border-[#1D4ED8] transition-all group p-[48px]">
                                <CardTitle className="text-[24px] flex justify-between items-center">
                                    {tool.title}
                                    <span className="text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </CardTitle>
                                <CardDescription className="text-[16px] mt-[16px] leading-[1.6]">
                                    {tool.desc}
                                </CardDescription>
                                <div className="mt-[40px]">
                                    <Link href={tool.href}>
                                        <button className="text-[14px] font-[600] text-[#111827] border-b-[2px] border-[#1D4ED8] pb-[4px]">
                                            Launch Interface
                                        </button>
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
