
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const CURRENT_TENANTS = [
    { id: 'T-101', name: 'Dr. Alexander Hoffman', assetId: '1', yield: '$4,200', score: 98, status: 'In Good Standing', cycle: 'Cycle 24/36' },
    { id: 'T-102', name: 'Sarah Sterling', assetId: '3', yield: '$3,800', score: 92, status: 'Assessment Pending', cycle: 'Cycle 12/24' },
    { id: 'T-103', name: 'Enterprise Node #42', assetId: '4', yield: '$8,450', score: 99, status: 'In Good Standing', cycle: 'Cycle 5/12' }
];

export default function LandlordCurrentTenantsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Asset Occupancy</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Active Residents</h1>
                    <p className="text-[16px] text-[#6B7280]">Real-time monitoring of verified residents and structural yield stability.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="px-[24px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[14px] font-[700] text-[#111827] hover:bg-[#F9FAFB] transition-all">Audit All Nodes</button>
                    <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">Generate Yield Report</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {[
                    { label: "Aggregate Score", val: "94.8/100" },
                    { label: "Retention Pulse", val: "98.2%" },
                    { label: "Cycle Velocity", val: "High" },
                    { label: "Active Disputes", val: "0" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Resident Entity</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Asset Allocation</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Yield Protocol</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Occupancy Cycle</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Node Status</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {CURRENT_TENANTS.map((tenant) => {
                            const asset = MOCK_ASSETS.find(a => a.id === tenant.assetId);
                            return (
                                <tr key={tenant.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[40px] h-[40px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] font-[700]">
                                                {tenant.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#111827]">{tenant.name}</p>
                                                <p className="text-[11px] text-[#6B7280]">ID: {tenant.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[600] text-[#111827]">{asset?.title}</p>
                                        <p className="text-[11px] text-[#6B7280]">{asset?.address}</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[15px] font-[700] text-[#111827]">{tenant.yield}</p>
                                        <p className="text-[11px] text-[#10B981] font-[600]">Paid Cycle</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <div className="space-y-[6px]">
                                            <p className="text-[13px] font-[600] text-[#111827]">{tenant.cycle}</p>
                                            <div className="w-[80px] h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#1D4ED8] w-[65%]" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className={`px-[10px] py-[4px] rounded-[4px] text-[10px] font-[800] uppercase ${tenant.status === 'In Good Standing' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>
                                            {tenant.status}
                                        </span>
                                    </td>
                                    <td className="p-[20px] text-right">
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Forensic Analysis</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Card className="bg-[#111827] border-none p-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-[40px] shadow-2xl">
                <div className="space-y-[12px]">
                    <h3 className="text-[20px] font-[700]">Automated Resident Support</h3>
                    <p className="text-white/50 text-[14px] max-w-[500px] leading-[1.6]">
                        Platform AI is currently managing 92% of resident interactions and ticket clusters for your portfolio.
                    </p>
                </div>
                <button className="px-[32px] py-[16px] bg-[#FFFFFF] text-[#111827] font-[700] rounded-[8px] hover:bg-[#1D4ED8] hover:text-[#FFFFFF] transition-all text-[14px] shrink-0">
                    Configuration Hub
                </button>
            </Card>
        </div>
    );
}
