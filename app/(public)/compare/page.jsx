
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function CompareHeroPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <div className="max-w-[1000px] mx-auto text-center mb-[80px]">
                    <SectionHeader
                        subtitle="Analysis Suite"
                        title="Professional Asset Comparison"
                        centered
                    />
                    <p className="text-[20px] text-[#6B7280] leading-[1.6] max-w-[700px] mx-auto mt-[-32px]">
                        Side-by-side technical audit of our institutional inventory.
                        Evaluate properties based on yield, neighborhood forensics, and structural quality.
                    </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-[32px] p-[80px] border border-[#D1D5DB]/30 flex flex-col items-center">
                    <div className="w-[120px] h-[120px] bg-[#1D4ED8]/10 rounded-[24px] flex items-center justify-center text-[#1D4ED8] mb-[48px]">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    </div>
                    <h3 className="text-[24px] font-[700] text-[#111827] mb-[24px]">Start your analysis.</h3>
                    <p className="text-[#6B7280] text-center max-w-[400px] mb-[48px]">
                        Search our live catalog to select assets for comparison.
                        Up to 3 properties can be analyzed simultaneously.
                    </p>
                    <Link href="/tenant/listings">
                        <PrimaryButton className="px-[64px]">Browse All Assets</PrimaryButton>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
