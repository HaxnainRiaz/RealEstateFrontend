
"use client";

import React from 'react';
import Section, { SectionHeader } from '@/components/shared/layout/Section';

export default function LegalLayout({ title, lastUpdated, children }) {
    return (
        <div className="bg-[#FFFFFF] pt-[160px] pb-[120px]">
            <Section>
                <div className="max-w-[800px] mx-auto">
                    <SectionHeader
                        subtitle="Legal Framework"
                        title={title}
                    />
                    <div className="flex items-center gap-[12px] text-[14px] text-[#6B7280] mb-[64px]">
                        <span>Version 1.4.2</span>
                        <span>•</span>
                        <span>Last Updated: {lastUpdated}</span>
                    </div>

                    <div className="prose prose-slate max-w-none text-[16px] text-[#111827] leading-[1.6] space-y-[32px]">
                        {children}
                    </div>
                </div>
            </Section>
        </div>
    );
}
