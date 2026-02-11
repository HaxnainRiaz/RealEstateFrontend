
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Section from '@/components/shared/layout/Section';

const SCHEDULE = [
    { id: '1', title: 'Monthly Assessment - Nov', date: 'Nov 01, 2023', amount: '$4,200.00', status: 'Scheduled' },
    { id: '2', title: 'Monthly Assessment - Dec', date: 'Dec 01, 2023', amount: '$4,200.00', status: 'Awaiting Lock-in' },
    { id: '3', title: 'Monthly Assessment - Jan', date: 'Jan 01, 2024', amount: '$4,200.00', status: 'Awaiting Lock-in' }
];

export default function TenantPaymentSchedulePage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Yield Timing</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Engagement Schedule</h1>
                    <p className="text-[16px] text-[#6B7280]">Temporal projection of upcoming institutional assessments.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                    Adjust Parameters
                </button>
            </div>

            <div className="space-y-[24px]">
                {SCHEDULE.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className={`p-[32px] border transition-all ${item.status === 'Scheduled' ? 'bg-[#FFFFFF] border-[#1D4ED8] shadow-[0_0_20px_rgba(29,78,216,0.1)]' : 'bg-[#F9FAFB] border-[#D1D5DB]/30 opacity-70'}`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                <div className="flex items-center gap-[24px]">
                                    <div className={`w-[56px] h-[56px] rounded-[16px] flex items-center justify-center border ${item.status === 'Scheduled' ? 'bg-[#1D4ED8]/5 border-[#1D4ED8]/20 text-[#1D4ED8]' : 'bg-[#D1D5DB]/10 border-[#D1D5DB]/20 text-[#D1D5DB]'}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    </div>
                                    <div className="space-y-[4px]">
                                        <h3 className="text-[18px] font-[700] text-[#111827]">{item.title}</h3>
                                        <p className="text-[14px] text-[#6B7280]">{item.status}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-[48px]">
                                    <div className="text-right">
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Target Date</p>
                                        <p className={`text-[15px] font-[700] ${item.status === 'Scheduled' ? 'text-[#111827]' : 'text-[#6B7280]'}`}>{item.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Amount</p>
                                        <p className={`text-[15px] font-[700] ${item.status === 'Scheduled' ? 'text-[#1D4ED8]' : 'text-[#6B7280]'}`}>{item.amount}</p>
                                    </div>
                                    <button className={`px-[20px] py-[10px] text-[13px] font-[600] rounded-[6px] transition-all ${item.status === 'Scheduled' ? 'bg-[#111827] text-[#FFFFFF] hover:bg-[#1D4ED8]' : 'bg-[#D1D5DB] text-[#FFFFFF] cursor-not-allowed'}`}>
                                        {item.status === 'Scheduled' ? 'Analyze Protocol' : 'Locked'}
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
