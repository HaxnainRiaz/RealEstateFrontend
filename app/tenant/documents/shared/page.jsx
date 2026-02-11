
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const SHARED = [
    { id: '1', title: 'Asset Onboarding Bundle', with: 'Manhattan Management Node', date: 'Oct 24, 2023', access: 'Read Only' },
    { id: '2', title: 'Financial Audit Nodes', with: 'Compliance AI Node', date: 'Oct 12, 2023', access: 'Limited Time' }
];

export default function TenantDocumentSharedPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Portal Collaboration</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Shared Nodes</h1>
                <p className="text-[16px] text-[#6B7280]">Credential packages currently shared with management entities.</p>
            </div>

            <div className="space-y-[16px]">
                {SHARED.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:bg-[#F9FAFB] transition-colors relative group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                <div className="flex items-center gap-[24px]">
                                    <div className="w-[48px] h-[48px] bg-[#1D4ED8]/5 rounded-full flex items-center justify-center text-[#1D4ED8] shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <div className="space-y-[4px]">
                                        <h3 className="text-[18px] font-[700] text-[#111827]">{item.title}</h3>
                                        <p className="text-[14px] text-[#6B7280]">Shared with: <span className="text-[#1D4ED8] font-[600]">{item.with}</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-[48px]">
                                    <div className="text-right">
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Access Level</p>
                                        <p className="text-[15px] font-[700] text-[#111827]">{item.access}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Timestamp</p>
                                        <p className="text-[15px] font-[700] text-[#111827]">{item.date}</p>
                                    </div>
                                    <button className="px-[16px] py-[8px] bg-[#EF4444]/5 text-[#EF4444] text-[12px] font-[700] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity border border-[#EF4444]/20">
                                        Revoke Signal
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#111827] border-none p-[48px] text-center text-[#FFFFFF] shadow-2xl">
                <h3 className="text-[20px] font-[700] mb-[12px]">Collaboration Security</h3>
                <p className="text-[#FFFFFF]/60 max-w-[500px] mx-auto text-[14px] leading-[1.6]">
                    Shared nodes utilize temporal cryptographic tokens that automatically expire after
                    defined engagement cycles unless renewed via the management node.
                </p>
            </Card>
        </div>
    );
}
