
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_PAYMENTS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';

export default function TenantPaymentHistoryPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Ledger Audit</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Settlement History</h1>
                <p className="text-[16px] text-[#6B7280]">Historical record of all financial engagements on the platform.</p>
            </div>

            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Protocol ID</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Description</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Amount</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Timestamp</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                            <th className="p-[24px] text-right text-[11px] font-[700] uppercase text-[#6B7280]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {MOCK_PAYMENTS.map((pmt, i) => (
                            <tr key={pmt.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                <td className="p-[24px] text-[13px] font-[600] text-[#6B7280]">{pmt.id}</td>
                                <td className="p-[24px] text-[15px] font-[700] text-[#111827]">{pmt.title}</td>
                                <td className="p-[24px] text-[15px] font-[700] text-[#111827]">${pmt.amount.toLocaleString()}</td>
                                <td className="p-[24px] text-[14px] text-[#6B7280]">{pmt.date}</td>
                                <td className="p-[24px]">
                                    <span className={`px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[700] uppercase rounded-[4px]`}>
                                        {pmt.status}
                                    </span>
                                </td>
                                <td className="p-[24px] text-right">
                                    <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">View Forensic Receipt</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
