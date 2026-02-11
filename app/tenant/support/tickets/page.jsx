
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const TICKETS = [
    { id: 'TIC-102', title: 'Credential Sync Anomaly', status: 'In Audit', priority: 'High', date: 'Oct 24, 2023' },
    { id: 'TIC-088', title: 'Yield Display Recalibration', status: 'Resolved', priority: 'Medium', date: 'Oct 12, 2023' }
];

export default function TenantSupportTicketsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Incident Ledger</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Support Tickets</h1>
                    <p className="text-[16px] text-[#6B7280]">Historical tracking of technical anomaly resolutions.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                    Initialize New Incident
                </button>
            </div>

            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Incident ID</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Subject</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Priority</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Timestamp</th>
                            <th className="p-[24px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                            <th className="p-[24px] text-right text-[11px] font-[700] uppercase text-[#6B7280]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {TICKETS.map((tic, i) => (
                            <tr key={tic.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                <td className="p-[24px] text-[13px] font-[600] text-[#6B7280]">{tic.id}</td>
                                <td className="p-[24px] text-[15px] font-[700] text-[#111827]">{tic.title}</td>
                                <td className="p-[24px]">
                                    <span className={`px-[10px] py-[4px] rounded-[4px] text-[10px] font-[700] uppercase border ${tic.priority === 'High' ? 'bg-[#FEF2F2] text-[#EF4444] border-[#EF4444]/20' : 'bg-[#FFFBEB] text-[#F59E0B] border-[#F59E0B]/20'}`}>
                                        {tic.priority}
                                    </span>
                                </td>
                                <td className="p-[24px] text-[14px] text-[#6B7280]">{tic.date}</td>
                                <td className="p-[24px]">
                                    <span className={`px-[10px] py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[11px] font-[700] uppercase rounded-[4px]`}>
                                        {tic.status}
                                    </span>
                                </td>
                                <td className="p-[24px] text-right">
                                    <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                                        Inspect Audit →
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
