
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_TENANTS, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import {
    FiUsers,
    FiShield,
    FiActivity,
    FiSearch,
    FiMoreVertical,
    FiTrendingUp,
    FiUserCheck,
    FiClock,
    FiFileText
} from 'react-icons/fi';

export default function LandlordTenantsPage() {
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Occupancy Metrics</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Active Tenants</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Structural monitoring of credentialed occupants across all nodes.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="h-[52px] px-[24px] bg-[#0F172A] text-[#FFFFFF] text-[14px] font-[800] rounded-[12px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center gap-[8px] active:scale-95">
                        <FiUserCheck />
                        Audit All Credentials
                    </button>
                </div>
            </div>

            {/* Tenant HUD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {[
                    { label: "Aggregate Occupancy", val: "94.2%", icon: FiUsers, color: "text-[#10B981]", bg: "bg-[#F0FDF4]" },
                    { label: "Credential Scans (24h)", val: "128", icon: FiShield, color: "text-[#1D4ED8]", bg: "bg-[#EFF6FF]" },
                    { label: "Average Reliability", val: "9.8/10", icon: FiActivity, color: "text-[#0F172A]", bg: "bg-[#F1F5F9]" }
                ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} className="bg-[#FFFFFF] border-[#E2E8F0] p-[28px] hover:shadow-md transition-all">
                            <div className="flex items-center gap-[16px] mb-[16px]">
                                <div className={`p-[10px] rounded-[10px] ${stat.bg} ${stat.color}`}>
                                    <Icon className="w-[20px] h-[20px]" />
                                </div>
                                <p className="text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em]">{stat.label}</p>
                            </div>
                            <h3 className="text-[28px] font-[800] text-[#0F172A]">{stat.val}</h3>
                        </Card>
                    );
                })}
            </div>

            <div className="bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-sm">
                <div className="p-[24px] border-b border-[#F1F5F9] flex justify-between items-center bg-[#F8FAFC]/50">
                    <div className="flex items-center bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] px-[14px] py-[8px] gap-[10px] focus-within:ring-2 focus-within:ring-[#1D4ED8]/20 transition-all">
                        <FiSearch className="text-[#64748B] w-[18px] h-[18px]" />
                        <input
                            type="text"
                            placeholder="Filter tenant nodes..."
                            className="bg-transparent border-none outline-none text-[13px] font-[500] w-[300px]"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
                                <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Tenant Identity</th>
                                <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Node Assignment</th>
                                <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Quality Score</th>
                                <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Transmission Balance</th>
                                <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B] text-right">Node Forensics</th>
                            </tr>
                        </thead>
                        <motion.tbody
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="divide-y divide-[#F1F5F9]"
                        >
                            {MOCK_TENANTS.map((tenant) => {
                                const asset = MOCK_ASSETS.find(a => a.id === tenant.assetId);
                                const balance = typeof tenant.balance === 'string' ? parseFloat(tenant.balance.replace('$', '').replace(',', '')) : tenant.balance;
                                const quality = typeof tenant.quality === 'string' ? parseInt(tenant.quality) : tenant.quality;
                                return (
                                    <motion.tr key={tenant.id} variants={item} className="hover:bg-[#F8FAFC]/80 transition-colors group cursor-pointer">
                                        <td className="p-[20px]">
                                            <div className="flex items-center gap-[16px]">
                                                <div className="w-[44px] h-[44px] bg-[#F1F5F9] rounded-[12px] flex items-center justify-center text-[#1D4ED8] font-[800] border border-[#E2E8F0]">
                                                    {tenant.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="text-[15px] font-[800] text-[#0F172A]">{tenant.name}</p>
                                                    <p className="text-[12px] text-[#64748B] font-[500] uppercase tracking-wider">ID: TX-{tenant.id.split('-')[1]}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-[20px]">
                                            <div className="flex flex-col">
                                                <span className="text-[14px] font-[700] text-[#0F172A] underline decoration-[#1D4ED8]/20">{asset?.title}</span>
                                                <span className="text-[12px] text-[#64748B] font-[500] mt-[2px]">Primary Residence</span>
                                            </div>
                                        </td>
                                        <td className="p-[20px]">
                                            <div className="flex items-center gap-[8px]">
                                                <div className="flex-grow h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden w-[100px]">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${quality}%` }}
                                                        className={`h-full ${quality > 90 ? 'bg-[#10B981]' : 'bg-[#1D4ED8]'}`}
                                                    />
                                                </div>
                                                <span className="text-[14px] font-[800] text-[#0F172A]">{quality}</span>
                                            </div>
                                        </td>
                                        <td className="p-[20px]">
                                            <div className="flex flex-col">
                                                <span className={`text-[15px] font-[800] ${balance > 0 ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>
                                                    ${balance.toLocaleString()}
                                                </span>
                                                <span className="text-[11px] text-[#64748B] font-[700] uppercase tracking-[0.1em] mt-[2px]">Locked Reserve</span>
                                            </div>
                                        </td>
                                        <td className="p-[20px] text-right">
                                            <div className="flex justify-end gap-[12px]">
                                                <button className="h-[40px] px-[16px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] text-[12px] font-[800] rounded-[8px] hover:text-[#0F172A] hover:border-[#0F172A] transition-all flex items-center gap-[8px]">
                                                    <FiFileText />
                                                    View Forensics
                                                </button>
                                                <button className="p-[10px] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-[10px] transition-all">
                                                    <FiMoreVertical />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </motion.tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
