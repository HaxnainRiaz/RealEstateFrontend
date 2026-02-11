
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const CATEGORIES = [
    { title: 'Asset Onboarding', count: 12, desc: 'Structural guidelines for new residents.' },
    { title: 'Financial Protocols', count: 8, desc: 'Yield modeling and settlement forensics.' },
    { title: 'Technical Nodes', count: 15, desc: 'Interface usage and cryptographic verification.' },
    { title: 'Compliance Vault', count: 5, desc: 'Legal frameworks and residential rules.' }
];

export default function TenantKnowledgeBasePage() {
    return (
        <div className="space-y-[40px]">
            <div className="text-center max-w-[700px] mx-auto space-y-[24px]">
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Data Repository</span>
                <h1 className="text-[40px] font-[700] text-[#111827]">Knowledge Hub</h1>
                <p className="text-[18px] text-[#6B7280]">Comprehensive documentation for platform structural navigation.</p>
                <div className="relative pt-[24px]">
                    <input
                        type="text"
                        placeholder="Search knowledge clusters..."
                        className="w-full px-[32px] py-[24px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[16px] shadow-xl focus:outline-none focus:border-[#1D4ED8] text-[16px]"
                    />
                    <div className="absolute right-[24px] top-[48px] text-[#D1D5DB]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] pt-[40px]">
                {CATEGORIES.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] hover:border-[#1D4ED8] transition-all group cursor-pointer h-full">
                            <div className="flex justify-between items-start mb-[32px]">
                                <div className="w-[64px] h-[64px] bg-[#F9FAFB] rounded-[20px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/10 group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                </div>
                                <span className="text-[13px] font-[700] text-[#D1D5DB]">{cat.count} Articles</span>
                            </div>
                            <h3 className="text-[22px] font-[700] text-[#111827] mb-[12px] group-hover:text-[#1D4ED8] transition-colors">{cat.title}</h3>
                            <p className="text-[16px] text-[#6B7280] leading-[1.6]">{cat.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
