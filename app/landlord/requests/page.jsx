
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';

export default function LandlordRequestsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Tenant Screenings</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Rental Requests</h1>
                    <p className="text-[16px] text-[#6B7280]">Manage credentialed applications for your asset portfolio.</p>
                </div>
            </div>

            <div className="space-y-[16px]">
                {MOCK_REQUESTS.map((req, i) => {
                    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                    return (
                        <motion.div
                            key={req.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-[4px] h-full bg-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[32px]">
                                    <div className="flex items-center gap-[24px]">
                                        <div className="w-[56px] h-[56px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/20">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[12px] mb-[4px]">
                                                <h3 className="text-[18px] font-[700] text-[#111827]">Candidate Node: T-{req.id.split('-')[1]}</h3>
                                                <span className="px-[8px] py-[2px] bg-[#10B981]/10 text-[#10B981] text-[10px] font-[700] uppercase rounded-[4px]">Score 94</span>
                                            </div>
                                            <p className="text-[14px] text-[#6B7280]">Applying for: <span className="text-[#111827] font-[600]">{asset?.title}</span></p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-[48px]">
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">Current Status</p>
                                            <p className="text-[15px] font-[700] text-[#111827]">{req.status}</p>
                                        </div>
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">Signal Date</p>
                                            <p className="text-[15px] font-[700] text-[#111827]">{req.date}</p>
                                        </div>
                                        <div className="flex gap-[12px]">
                                            <button className="px-[20px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[13px] font-[600] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                                                Audit Credentials
                                            </button>
                                            <button className="px-[20px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[13px] font-[600] rounded-[6px] hover:bg-[#F3F4F6] transition-all">
                                                Archive
                                            </button>
                                        </div>
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
