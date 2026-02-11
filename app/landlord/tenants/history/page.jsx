
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const ARCHIVED_TENANTS = [
    { id: 'T-HIST-01', name: 'Marcus Vane', assetId: '2', period: '2021 - 2023', exitReason: 'Contract Completion', quality: '98/100' },
    { id: 'T-HIST-02', name: 'Global Logistics Corp', assetId: '4', period: '2020 - 2022', exitReason: 'Expansion', quality: '100/100' },
    { id: 'T-HIST-03', name: 'Emily Zhang', assetId: '1', period: '2022 - 2023', exitReason: 'Relocation', quality: '85/100' }
];

export default function LandlordTenantHistoryPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Historical Forensics</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Resident Archive</h1>
                <p className="text-[16px] text-[#6B7280]">Historical ledger of all structural occupancy nodes and exit forensics.</p>
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Historical Resident</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Asset Occupied</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Temporal Window</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Exit Analysis</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Quality Audit</th>
                            <th className="p-[20px] text-right text-[11px] font-[700] uppercase text-[#6B7280]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {ARCHIVED_TENANTS.map((tenant, i) => {
                            const asset = MOCK_ASSETS.find(a => a.id === tenant.assetId);
                            return (
                                <tr key={tenant.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[36px] h-[36px] bg-[#F3F4F6] rounded-full flex items-center justify-center text-[#6B7280] font-[700]">
                                                {tenant.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#111827]">{tenant.name}</p>
                                                <p className="text-[11px] text-[#6B7280]">ID: {tenant.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[600] text-[#111827]">{asset?.title || "Unknown Asset"}</p>
                                    </td>
                                    <td className="p-[20px] text-[14px] text-[#6B7280]">{tenant.period}</td>
                                    <td className="p-[20px] text-[14px] text-[#111827] font-[600]">{tenant.exitReason}</td>
                                    <td className="p-[20px]">
                                        <span className="text-[15px] font-[700] text-[#10B981]">{tenant.quality}</span>
                                    </td>
                                    <td className="p-[20px] text-right">
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Download Archive</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                    <h3 className="text-[18px] font-[700] text-[#111827] mb-[24px]">Exit Sentiment Forensics</h3>
                    <div className="space-y-[20px]">
                        {[
                            { l: "Contract Completion", v: "84%", c: "bg-[#10B981]" },
                            { l: "Relocation Signals", v: "12%", c: "bg-[#1D4ED8]" },
                            { l: "Platform Termination", v: "4%", c: "bg-[#EF4444]" }
                        ].map(item => (
                            <div key={item.l} className="space-y-[8px]">
                                <div className="flex justify-between text-[12px] font-[700]">
                                    <span className="text-[#6B7280] uppercase tracking-[0.05em]">{item.l}</span>
                                    <span>{item.v}</span>
                                </div>
                                <div className="h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                    <div className={`h-full ${item.c}`} style={{ width: item.v }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#111827] border-none p-[40px] text-white flex flex-col items-start justify-between shadow-xl">
                    <div className="space-y-[16px]">
                        <h3 className="text-[18px] font-[700]">Archival Integrity</h3>
                        <p className="text-white/50 text-[14px] leading-[1.6]">
                            All historical resident nodes are stored in encrypted cold storage with 99.99% retrieval availability for institutional audits.
                        </p>
                    </div>
                    <button className="mt-[32px] px-[24px] py-[12px] bg-[#1D4ED8] text-white font-[700] rounded-[8px] hover:bg-[#2563EB] transition-all text-[13px]">
                        Request Global Audit
                    </button>
                </Card>
            </div>
        </div>
    );
}
