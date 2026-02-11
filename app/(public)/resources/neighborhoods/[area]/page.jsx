
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

export default function NeighborhoodDetailPage() {
    const { area } = useParams();
    const name = area.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/resources/neighborhoods" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to All Markets
                </Link>
                <SectionHeader
                    subtitle="Coordinate Audit"
                    title={name}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] mt-[64px]">
                    <div className="lg:col-span-8 space-y-[48px]">
                        <div className="aspect-video bg-[#F9FAFB] rounded-[32px] border border-[#D1D5DB]/30 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-[#6B7280]">Interactive Sub-Market Visualizer</div>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <h3 className="text-[28px] font-[700] mb-[24px]">Structural Market Sentiment</h3>
                            <p className="text-[18px] text-[#6B7280] leading-[1.8]">
                                Detailed analysis of current yield fluctuations and institutional demand within the {name} perimeter.
                                Data points include occupancy velocity, school district demographics, and commercial infrastructure investment trends.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-[32px]">
                        <Card className="bg-[#111827] text-[#FFFFFF] p-[40px] border-none">
                            <CardTitle className="text-[#FFFFFF] mb-[24px]">Asset Physics</CardTitle>
                            <div className="space-y-[24px]">
                                {[
                                    { label: "Stability Index", val: "8.4/10" },
                                    { label: "Cap Rate Avg", val: "5.2%" },
                                    { label: "Inventory Velocity", val: "High" }
                                ].map(stat => (
                                    <div key={stat.label} className="border-b border-[#FFFFFF]/10 pb-[12px] last:border-0">
                                        <p className="text-[#FFFFFF]/60 text-[12px] uppercase tracking-[0.05em]">{stat.label}</p>
                                        <p className="text-[20px] font-[700]">{stat.val}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="bg-[#F9FAFB] p-[40px] border-[#D1D5DB]/30">
                            <CardTitle className="text-[18px] mb-[16px]">Deployment Signal</CardTitle>
                            <p className="text-[14px] text-[#6B7280] leading-[1.6] mb-[24px]">
                                Institutional recommendation based on 90-day sentiment analysis and secondary market liquidity.
                            </p>
                            <div className="px-[16px] py-[8px] bg-[#10B981] text-[#FFFFFF] text-[12px] font-[700] rounded-[4px] inline-block">
                                STRONG ACCUMULATE
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
