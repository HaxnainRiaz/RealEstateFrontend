
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { BackButton } from '@/components/ui/navigation';

export default function TenantApplicationHistoryPage() {
    // Mock archived applications
    const archived = [
        { id: 'req-arch-1', assetId: '2', status: 'Decommissioned', date: '2023-01-12', outcome: 'Expired' },
        { id: 'req-arch-2', assetId: '4', status: 'Archived', date: '2022-11-05', outcome: 'Withdrawn' }
    ];

    return (
        <div className="space-y-[40px]">
            <BackButton href="/tenant/applications" />
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Archival Nodes</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Application History</h1>
                <p className="text-[16px] text-[#6B7280]">Historical record of all platform engagement signals.</p>
            </div>

            <div className="space-y-[16px]">
                {archived.map((req, i) => {
                    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                    return (
                        <motion.div
                            key={req.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:bg-[#F9FAFB] transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                    <div className="space-y-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <span className="text-[11px] font-[700] text-[#6B7280] uppercase tracking-[0.1em]">Signal Node: {req.id}</span>
                                            <span className="text-[12px] text-[#D1D5DB]">/</span>
                                            <span className="text-[12px] text-[#6B7280]">{req.date}</span>
                                        </div>
                                        <h3 className="text-[18px] font-[700] text-[#111827]">{asset?.title || "Unknown Asset Node"}</h3>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-[32px]">
                                        <div className="text-right">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Structural Status</p>
                                            <p className="text-[15px] font-[700] text-[#6B7280]">{req.status}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Outcome</p>
                                            <p className="text-[15px] font-[700] text-[#111827]">{req.outcome}</p>
                                        </div>
                                        <button className="px-[20px] py-[10px] border border-[#D1D5DB] rounded-[6px] text-[13px] font-[600] text-[#111827] hover:bg-[#FFFFFF] transition-colors shadow-sm">
                                            Inspect Forensics
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
