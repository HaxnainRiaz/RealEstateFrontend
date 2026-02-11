
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_PAYMENTS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';

export default function TenantPaymentReceiptsPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Forensic Vault</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Settlement Receipts</h1>
                <p className="text-[16px] text-[#6B7280]">Downloadable evidential nodes for institutional payments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {MOCK_PAYMENTS.map((pmt, i) => (
                    <motion.div
                        key={pmt.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group cursor-pointer h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-[24px]">
                                    <div className="w-[48px] h-[48px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/10 group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><path d="M10 9H9h1" /></svg>
                                    </div>
                                    <span className="text-[12px] font-[700] text-[#1D4ED8]">${pmt.amount.toLocaleString()}</span>
                                </div>
                                <h3 className="text-[16px] font-[700] text-[#111827] mb-[4px]">{pmt.title}</h3>
                                <p className="text-[13px] text-[#6B7280]">ID: {pmt.id}</p>
                            </div>

                            <div className="mt-[32px] pt-[24px] border-t border-[#D1D5DB]/20 flex justify-between items-center">
                                <span className="text-[12px] text-[#6B7280] font-[600]">{pmt.date}</span>
                                <button className="text-[13px] font-[700] text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Download PDF →
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
