
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { BackButton } from '@/components/ui/navigation';

const METHODS = [
    { id: '1', type: 'Institutional Bank (ACH)', detail: 'Chase Bank •••• 8829', status: 'Primary Node', date: 'Oct 2023' },
    { id: '2', type: 'Corporate Credit', detail: 'Amex Business •••• 1002', status: 'Secondary Node', date: 'Oct 2023' }
];

export default function TenantPaymentMethodsPage() {
    return (
        <div className="space-y-[40px]">
            <BackButton href="/tenant/payments" />
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Settlement Governance</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Financial Channels</h1>
                    <p className="text-[16px] text-[#6B7280]">Manage verified protocols for institutional asset settlements.</p>
                </div>
                <PrimaryButton className="px-[24px]">Link New Protocol</PrimaryButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {METHODS.map((method, i) => (
                    <motion.div
                        key={method.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] hover:border-[#1D4ED8] transition-all group overflow-hidden">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-[24px]">
                                    <div className="w-[64px] h-[64px] bg-[#F9FAFB] rounded-[16px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/10 group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                    </div>
                                    <div className="space-y-[4px]">
                                        <h3 className="text-[18px] font-[700] text-[#111827]">{method.type}</h3>
                                        <p className="text-[16px] font-[600] text-[#6B7280]">{method.detail}</p>
                                    </div>
                                </div>
                                <span className={`px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[10px] font-[700] uppercase rounded-[4px] border border-[#10B981]/20`}>
                                    {method.status}
                                </span>
                            </div>

                            <div className="mt-[40px] pt-[32px] border-t border-[#D1D5DB]/20 flex justify-between items-center">
                                <p className="text-[12px] text-[#D1D5DB] font-[600]">Credentialed: {method.date}</p>
                                <div className="flex gap-[20px]">
                                    <button className="text-[13px] font-[700] text-[#6B7280] hover:text-[#111827]">Audit Method</button>
                                    <button className="text-[13px] font-[700] text-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity">Decommission</button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#F9FAFB] border border-[#D1D5DB]/30 p-[48px] text-center max-w-[600px] mx-auto border-dashed">
                <h3 className="text-[20px] font-[700] text-[#111827] mb-[12px]">Entity Compliance Notification</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                    All settlement methods must pass verified institutional liquidity audits before
                    being signaled as primary engagement nodes.
                </p>
            </Card>
        </div>
    );
}
