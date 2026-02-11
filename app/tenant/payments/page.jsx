"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card, { CardTitle } from '@/components/ui/data/Card';
import { MOCK_PAYMENTS } from '@/lib/mockData';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function TenantPaymentsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Settlement Center</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Financial Settlements</h1>
                    <p className="text-[16px] text-[#6B7280]">Execute and track your institutional rental payments.</p>
                </div>
                <div className="flex gap-[12px]">
                    <Link href="/tenant/payments/history" className="text-[13px] font-[700] text-[#6B7280] hover:text-[#1D4ED8] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /></svg>
                        Ledger History
                    </Link>
                    <Link href="/tenant/payments/schedule" className="text-[13px] font-[700] text-[#6B7280] hover:text-[#1D4ED8] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        Yield Timing
                    </Link>
                    <Link href="/tenant/payments/receipts" className="text-[13px] font-[700] text-[#6B7280] hover:text-[#1D4ED8] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                        Receipt Vault
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                {/* Active Balance */}
                <div className="lg:col-span-4">
                    <Card className="bg-[#111827] border-none p-[40px] text-[#FFFFFF] shadow-2xl h-full">
                        <div className="space-y-[32px]">
                            <div>
                                <p className="text-[12px] font-[700] text-[#FFFFFF]/60 uppercase tracking-[0.05em] mb-[8px]">Active Balance</p>
                                <h2 className="text-[40px] font-[700]">$0.00</h2>
                            </div>
                            <div className="space-y-[12px]">
                                <div className="flex justify-between text-[14px]">
                                    <span className="text-[#FFFFFF]/60">Next Assessment</span>
                                    <span className="font-[600]">Nov 01, 2023</span>
                                </div>
                                <div className="flex justify-between text-[14px]">
                                    <span className="text-[#FFFFFF]/60">Amount Scheduled</span>
                                    <span className="font-[700] text-[#1D4ED8] bg-[#FFFFFF] px-[8px] py-[2px] rounded-[4px]">$4,200.00</span>
                                </div>
                            </div>
                            <PrimaryButton className="w-full h-[56px] text-white">Transact Now</PrimaryButton>
                        </div>
                    </Card>
                </div>

                {/* Payment Methods */}
                <div className="lg:col-span-8">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] shadow-sm h-full">
                        <div className="flex justify-between items-center mb-[32px]">
                            <h3 className="text-[20px] font-[700] text-[#111827]">Linked Settlement Methods</h3>
                            <button className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">+ Link New Protocol</button>
                        </div>
                        <div className="space-y-[16px]">
                            {[
                                { type: 'Institutional Bank (ACH)', detail: 'Chase **** 8829', status: 'Primary' },
                                { type: 'Corporate Credit', detail: 'Amex **** 1002', status: 'Secondary' }
                            ].map(method => (
                                <div key={method.detail} className="flex items-center justify-between p-[24px] border border-[#D1D5DB]/20 rounded-[12px] hover:border-[#1D4ED8] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[48px] h-[48px] bg-[#F9FAFB] rounded-[8px] flex items-center justify-center text-[#1D4ED8]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-[700] text-[#111827]">{method.type}</p>
                                            <p className="text-[13px] text-[#6B7280]">{method.detail}</p>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-[700] text-[#10B981] uppercase tracking-[0.05em]">{method.status}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            {/* History */}
            <div className="space-y-[24px]">
                <h2 className="text-[20px] font-[700] text-[#111827]">Settlement History</h2>
                <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Ledger ID</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Description</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Amount</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Timestamp</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#D1D5DB]/20">
                            {MOCK_PAYMENTS.map((pmt) => (
                                <tr key={pmt.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                    <td className="p-[20px] text-[13px] font-[600] text-[#6B7280]">{pmt.id}</td>
                                    <td className="p-[20px] text-[14px] font-[700] text-[#111827]">{pmt.title}</td>
                                    <td className="p-[20px] text-[14px] font-[700] text-[#111827]">${pmt.amount.toLocaleString()}</td>
                                    <td className="p-[20px] text-[13px] text-[#6B7280]">{pmt.date}</td>
                                    <td className="p-[20px]">
                                        <span className="px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[700] uppercase rounded-[4px]">
                                            {pmt.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
