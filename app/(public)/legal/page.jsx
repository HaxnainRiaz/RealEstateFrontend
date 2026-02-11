
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const LEGAL_DOCS = [
    { title: "Terms of Service", desc: "The institutional protocol for platform usage.", href: "/legal/terms" },
    { title: "Privacy Protocol", desc: "How we safeguard your identity and asset forensics.", href: "/legal/privacy" },
    { title: "Cookie Policy", desc: "Structural tracking for session persistence.", href: "/legal/cookies" }
];

export default function LegalHubPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <SectionHeader
                    subtitle="Compliance Architecture"
                    title="Legal Framework"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[64px]">
                    {LEGAL_DOCS.map((doc, i) => (
                        <motion.div
                            key={doc.href}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={doc.href} className="group block">
                                <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] transition-all p-[40px]">
                                    <CardTitle className="text-[20px] mb-[12px] group-hover:text-[#1D4ED8] transition-colors">{doc.title}</CardTitle>
                                    <CardDescription className="text-[14px]">
                                        {doc.desc}
                                    </CardDescription>
                                    <div className="mt-[32px] flex items-center gap-[8px] text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] opacity-60 group-hover:opacity-100 transition-opacity">
                                        View Document <span>→</span>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-[80px] p-[64px] bg-[#F9FAFB] rounded-[32px] border border-[#D1D5DB]/50">
                    <h3 className="text-[24px] font-[700] text-[#111827] mb-[24px]">Credential Transparency</h3>
                    <p className="text-[16px] text-[#6B7280] leading-[1.6]">
                        Tirios MVP operates under strict institutional transparency protocols. Our legal framework is designed to
                        protect both asset owners and residents through clear, verifiable structural agreements.
                    </p>
                </div>
            </Section>
        </div>
    );
}
