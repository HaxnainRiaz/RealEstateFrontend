
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';
import Card, { CardTitle } from '@/components/ui/data/Card';
import Link from 'next/link';

export default function TenantApplicationsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Engagement History</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">My Applications</h1>
                    <p className="text-[16px] text-[#6B7280]">Tracking all active and archived asset requests.</p>
                </div>
                <div className="flex gap-[16px]">
                    <Link href="/tenant/applications/history" className="text-[14px] font-[700] text-[#6B7280] hover:text-[#111827] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
                        Archival History
                    </Link>
                    <Link href="/tenant/applications/wizard">
                        <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all shadow-lg active:scale-[0.98]">
                            Initialize New Signal
                        </button>
                    </Link>
                </div>
            </div>

            <div className="space-y-[24px]">
                {MOCK_REQUESTS.length > 0 ? (
                    MOCK_REQUESTS.map((req, i) => {
                        const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                        return (
                            <motion.div
                                key={req.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-0 overflow-hidden hover:border-[#1D4ED8] transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <div className="w-full md:w-[240px] aspect-video md:aspect-square bg-[#F9FAFB] border-r border-[#D1D5DB]/10" />
                                        <div className="flex-grow p-[32px] flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                            <div className="space-y-[12px]">
                                                <div className="flex items-center gap-[12px]">
                                                    <span className="px-[12px] py-[4px] bg-[#1D4ED8]/5 text-[#1D4ED8] text-[10px] font-[700] uppercase rounded-[4px] border border-[#1D4ED8]/10">
                                                        {req.type}
                                                    </span>
                                                    <span className="text-[12px] text-[#6B7280] font-[600]">ID: {req.id}</span>
                                                </div>
                                                <h3 className="text-[20px] font-[700] text-[#111827]">{asset?.title}</h3>
                                                <p className="text-[14px] text-[#6B7280]">{asset?.address}</p>
                                            </div>

                                            <div className="flex flex-col md:items-end gap-[16px]">
                                                <div className="flex flex-col md:items-end">
                                                    <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em] mb-[4px]">Current Status</p>
                                                    <p className="text-[16px] font-[700] text-[#111827]">{req.status}</p>
                                                </div>
                                                <div className="flex gap-[12px]">
                                                    <button className="px-[20px] py-[10px] bg-[#F3F4F6] text-[#111827] text-[13px] font-[600] rounded-[6px] hover:bg-[#E5E7EB] transition-all">
                                                        Message Node
                                                    </button>
                                                    <Link href={`/tenant/listings/${asset?.id}`}>
                                                        <button className="px-[20px] py-[10px] bg-[#111827] text-[#FFFFFF] text-[13px] font-[600] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="py-[160px] text-center bg-[#F9FAFB] rounded-[32px] border border-dashed border-[#D1D5DB]">
                        <p className="text-[18px] text-[#6B7280]">No active applications found.</p>
                        <Link href="/tenant/listings" className="text-[#1D4ED8] font-[600] mt-[16px] block">Start exploring inventory</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
