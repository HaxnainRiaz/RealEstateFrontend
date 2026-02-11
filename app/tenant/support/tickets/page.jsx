
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { FiArrowLeft, FiActivity, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const TICKETS = [
    { id: 'TIC-102', title: 'Credential Sync Anomaly', status: 'In Audit', priority: 'High', date: 'Oct 24, 2023', icon: FiAlertCircle, color: 'text-[#EF4444]', bg: 'bg-[#FEF2F2]' },
    { id: 'TIC-088', title: 'Yield Display Recalibration', status: 'Resolved', priority: 'Medium', date: 'Oct 12, 2023', icon: FiCheckCircle, color: 'text-[#10B981]', bg: 'bg-[#F0FDF4]' }
];

export default function TenantSupportTicketsPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[16px]">
                    <Link href="/tenant/support" className="p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group">
                        <FiArrowLeft className="w-[18px] h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                    </Link>
                    <div>
                        <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Incident Ledger</span>
                        <h1 className="text-[32px] font-[700] text-[#111827]">Support Tickets</h1>
                    </div>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all shadow-lg shadow-black/5">
                    Initialize New Incident
                </button>
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
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
                        <motion.tbody
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="divide-y divide-[#D1D5DB]/20"
                        >
                            {TICKETS.map((tic) => (
                                <motion.tr key={tic.id} variants={item} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                    <td className="p-[24px] text-[13px] font-[800] text-[#64748B] uppercase whitespace-nowrap">{tic.id}</td>
                                    <td className="p-[24px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className={`p-[8px] rounded-[8px] ${tic.bg} ${tic.color}`}>
                                                <tic.icon className="w-[16px] h-[16px]" />
                                            </div>
                                            <span className="text-[15px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{tic.title}</span>
                                        </div>
                                    </td>
                                    <td className="p-[24px]">
                                        <span className={`px-[10px] py-[4px] rounded-[4px] text-[10px] font-[800] uppercase border ${tic.priority === 'High' ? 'bg-[#FEF2F2] text-[#EF4444] border-[#EF4444]/20' : 'bg-[#FFFBEB] text-[#F59E0B] border-[#F59E0B]/20'}`}>
                                            {tic.priority}
                                        </span>
                                    </td>
                                    <td className="p-[24px]">
                                        <div className="flex items-center gap-[8px] text-[13px] text-[#64748B] font-[600]">
                                            <FiClock className="w-[14px] h-[14px]" />
                                            {tic.date}
                                        </div>
                                    </td>
                                    <td className="p-[24px]">
                                        <span className={`px-[10px] py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[11px] font-[800] uppercase rounded-[4px] border border-[#1D4ED8]/20`}>
                                            {tic.status}
                                        </span>
                                    </td>
                                    <td className="p-[24px] text-right">
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline opacity-0 group-hover:opacity-100 transition-all flex items-center justify-end gap-[6px] ml-auto">
                                            Inspect Audit <FiActivity className="w-[14px] h-[14px]" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </motion.tbody>
                    </table>
                </div>
            </Card>

            {/* Quick Resolution Card */}
            <Card className="bg-[#111827] border-none p-[40px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-[24px] opacity-10">
                    <FiActivity className="w-[80px] h-[80px]" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-[32px]">
                    <div className="space-y-[8px]">
                        <h4 className="text-[20px] font-[800]">Automated Forensic Check</h4>
                        <p className="text-white/60 text-[14px] max-w-[500px]">Run a local structural audit on your unit's credentials to automatically resolve common sync anomalies.</p>
                    </div>
                    <button className="px-[24px] py-[14px] bg-[#1D4ED8] text-white text-[14px] font-[700] rounded-[10px] hover:bg-[#2563EB] transition-all shadow-lg active:scale-95 flex items-center gap-[10px]">
                        Initialize Auto-Audit
                    </button>
                </div>
            </Card>
        </div>
    );
}

