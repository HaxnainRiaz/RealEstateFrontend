
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import {
    FiPlus,
    FiHome,
    FiTrendingUp,
    FiActivity,
    FiEdit2,
    FiEye,
    FiFilter,
    FiDownload,
    FiMoreVertical
} from 'react-icons/fi';

export default function LandlordListingsPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="space-y-[48px]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Inventory Control</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Managed Assets</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Structural analysis and status synchronization of your property portfolio.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="h-[52px] px-[20px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-[14px] font-[700] rounded-[12px] hover:border-[#1D4ED8] transition-all flex items-center gap-[8px] active:scale-95 shadow-sm">
                        <FiDownload />
                        Export Nodes
                    </button>
                    <Link href="/landlord/listings/create">
                        <PrimaryButton className="h-[52px] px-[24px] flex items-center gap-[8px]">
                            <FiPlus className="w-[18px] h-[18px]" />
                            Add New Asset
                        </PrimaryButton>
                    </Link>
                </div>
            </div>

            {/* HUD Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {[
                    { label: "Pipeline Velocity", val: "High", icon: FiActivity, color: "text-[#10B981]", bg: "bg-[#F0FDF4]" },
                    { label: "Market Delta", val: "+2.4%", icon: FiTrendingUp, color: "text-[#1D4ED8]", bg: "bg-[#EFF6FF]" },
                    { label: "Active Audit Nodes", val: MOCK_ASSETS.length, icon: FiHome, color: "text-[#0F172A]", bg: "bg-[#F1F5F9]" }
                ].map(stat => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} className="bg-[#FFFFFF] border-[#E2E8F0] p-[28px] hover:shadow-md transition-all">
                            <div className="flex items-center gap-[16px]">
                                <div className={`p-[12px] rounded-[12px] ${stat.bg} ${stat.color}`}>
                                    <Icon className="w-[24px] h-[24px]" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em] mb-[4px]">{stat.label}</p>
                                    <p className="text-[24px] font-[800] text-[#0F172A] leading-none">{stat.val}</p>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Assets Table */}
            <div className="bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-sm">
                <div className="p-[24px] border-b border-[#F1F5F9] flex justify-between items-center bg-[#F8FAFC]/50">
                    <div className="flex items-center gap-[16px]">
                        <div className="flex items-center bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] px-[14px] py-[8px] gap-[10px] focus-within:ring-2 focus-within:ring-[#1D4ED8]/20 transition-all">
                            <FiHome className="text-[#64748B] w-[18px] h-[18px]" />
                            <input
                                type="text"
                                placeholder="Search managed assets..."
                                className="bg-transparent border-none outline-none text-[13px] font-[500] w-[300px]"
                            />
                        </div>
                        <button className="p-[10px] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-all">
                            <FiFilter />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
                                <th className="p-[24px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Asset Node</th>
                                <th className="p-[24px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Status Protocol</th>
                                <th className="p-[24px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Yield Metric</th>
                                <th className="p-[24px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Settlement Amount</th>
                                <th className="p-[24px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B] text-right">Node Controls</th>
                            </tr>
                        </thead>
                        <motion.tbody
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="divide-y divide-[#F1F5F9]"
                        >
                            {MOCK_ASSETS.map((asset) => (
                                <motion.tr
                                    key={asset.id}
                                    variants={item}
                                    className="hover:bg-[#F8FAFC]/80 transition-colors group cursor-pointer"
                                >
                                    <td className="p-[24px]">
                                        <div className="flex items-center gap-[20px]">
                                            <div className="w-[56px] h-[56px] bg-[#F1F5F9] rounded-[14px] flex-shrink-0 relative overflow-hidden group-hover:shadow-md transition-all">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-transparent" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <FiHome className="w-[24px] h-[24px] text-[#64748B] group-hover:text-[#1D4ED8] transition-colors" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[15px] font-[800] text-[#0F172A] mb-[4px]">{asset.title}</p>
                                                <p className="text-[12px] text-[#64748B] font-[500]">{asset.address}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[24px]">
                                        <div className="flex items-center gap-[8px]">
                                            <div className={`w-[6px] h-[6px] rounded-full ${asset.status === 'available' ? 'bg-[#10B981]' : 'bg-[#1D4ED8]'} animate-pulse`} />
                                            <span className={`px-[12px] py-[6px] rounded-[8px] text-[11px] font-[800] uppercase tracking-wider ${asset.status === 'available' ? 'bg-[#F0FDF4] text-[#10B981]' : 'bg-[#EFF6FF] text-[#1D4ED8]'}`}>
                                                {asset.status === 'available' ? 'Operational' : 'Subscribed'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-[24px]">
                                        <div className="flex flex-col">
                                            <span className="text-[15px] font-[800] text-[#0F172A]">{asset.yield}</span>
                                            <span className="text-[11px] text-[#64748B] font-[600] uppercase tracking-[0.05em] mt-[2px]">Projected ROI</span>
                                        </div>
                                    </td>
                                    <td className="p-[24px]">
                                        <div className="flex flex-col">
                                            <span className="text-[15px] font-[800] text-[#0F172A]">${asset.price.toLocaleString()}</span>
                                            <span className="text-[11px] text-[#64748B] font-[600] uppercase tracking-[0.05em] mt-[2px]">Monthly Assessment</span>
                                        </div>
                                    </td>
                                    <td className="p-[24px] text-right">
                                        <div className="flex justify-end gap-[12px]">
                                            <Link href={`/landlord/listings/${asset.id}`}>
                                                <button className="p-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] rounded-[10px] transition-all" title="View Forensics">
                                                    <FiEye className="w-[18px] h-[18px]" />
                                                </button>
                                            </Link>
                                            <button className="p-[10px] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-[10px] transition-all" title="Edit Asset">
                                                <FiEdit2 className="w-[18px] h-[18px]" />
                                            </button>
                                            <button className="p-[10px] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-[10px] transition-all">
                                                <FiMoreVertical className="w-[18px] h-[18px]" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </motion.tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
