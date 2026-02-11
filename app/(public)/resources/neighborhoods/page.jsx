
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const NEIGHBORHOODS = [
    { slug: 'manhattan-ny', name: 'Manhattan, NY', status: 'Established Tier 1', yield: '4.2%' },
    { slug: 'austin-tx', name: 'Austin, TX', status: 'High Growth Node', yield: '6.8%' },
    { slug: 'miami-fl', name: 'Miami, FL', status: 'Market Expansion', yield: '5.9%' }
];

export default function NeighborhoodsHubPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/resources" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to Resources
                </Link>
                <SectionHeader
                    subtitle="Spatial Forensics"
                    title="Neighborhood Intelligence"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] mt-[64px]">
                    {NEIGHBORHOODS.map((area, i) => (
                        <motion.div
                            key={area.slug}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/resources/neighborhoods/${area.slug}`} className="group block">
                                <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] transition-all p-[40px]">
                                    <div className="aspect-[4/3] bg-[#F9FAFB] rounded-[12px] mb-[24px] overflow-hidden border border-[#D1D5DB]/10" />
                                    <CardTitle className="text-[20px]">{area.name}</CardTitle>
                                    <div className="mt-[16px] space-y-[8px]">
                                        <div className="flex justify-between text-[14px]">
                                            <span className="text-[#6B7280]">Status</span>
                                            <span className="font-[600] text-[#111827]">{area.status}</span>
                                        </div>
                                        <div className="flex justify-between text-[14px]">
                                            <span className="text-[#6B7280]">Average Yield</span>
                                            <span className="font-[600] text-[#1D4ED8]">{area.yield}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[32px] text-[14px] font-[700] text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Forensic Data <span>→</span>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
