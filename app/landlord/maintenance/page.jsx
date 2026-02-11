
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_ISSUES, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import {
    FiTool,
    FiAlertTriangle,
    FiClock,
    FiCheckCircle,
    FiActivity,
    FiServer,
    FiPlus,
    FiFileText,
    FiCpu,
    FiActivity as FiPulse
} from 'react-icons/fi';

export default function LandlordMaintenancePage() {
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
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Incident Response</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Maintenance Protocol</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Operational oversight and resource allocation for structural integrity.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="h-[52px] px-[24px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-[14px] font-[700] rounded-[12px] hover:border-[#1D4ED8] transition-all flex items-center gap-[8px] active:scale-95 shadow-sm">
                        <FiFileText />
                        Audit Reports
                    </button>
                    <button className="h-[52px] px-[24px] bg-[#0F172A] text-[#FFFFFF] text-[14px] font-[800] rounded-[12px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center gap-[8px] active:scale-95">
                        <FiPlus />
                        Initiate Repair Node
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[48px]">
                {/* Active Incident Queue */}
                <div className="lg:col-span-8 space-y-[32px]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[20px] font-[800] text-[#0F172A] flex items-center gap-[12px]">
                            <FiPulse className="text-[#1D4ED8]" />
                            Active Incident Queue
                        </h2>
                        <span className="px-[10px] py-[4px] bg-[#F1F5F9] text-[#64748B] text-[11px] font-[800] rounded-[6px]">
                            {MOCK_ISSUES.length} Priority Tasks
                        </span>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-[16px]"
                    >
                        {MOCK_ISSUES.map((issue) => {
                            const asset = MOCK_ASSETS.find(a => a.id === issue.assetId);
                            return (
                                <motion.div key={issue.id} variants={item}>
                                    <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[24px] hover:border-[#1D4ED8] hover:shadow-md transition-all group relative overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-[4px] h-full ${issue.priority === 'High' ? 'bg-[#EF4444]' : 'bg-[#F59E0B]'}`} />

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                                            <div className="flex items-center gap-[24px]">
                                                <div className={`w-[56px] h-[56px] rounded-[14px] flex-shrink-0 flex items-center justify-center border ${issue.priority === 'High' ? 'bg-[#FEF2F2] border-[#EF4444]/20 text-[#EF4444]' : 'bg-[#FFFBEB] border-[#F59E0B]/20 text-[#F59E0B]'}`}>
                                                    <FiAlertTriangle className="w-[24px] h-[24px]" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-[12px] mb-[6px]">
                                                        <h3 className="text-[18px] font-[800] text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">{issue.title}</h3>
                                                        <span className="px-[8px] py-[2px] bg-[#F1F5F9] text-[#64748B] text-[10px] font-[800] uppercase tracking-wider rounded-[4px]">ID: {issue.id}</span>
                                                    </div>
                                                    <p className="text-[14px] text-[#64748B] font-[500]">
                                                        Asset Node: <span className="font-[700] text-[#0F172A]">{asset?.title}</span>
                                                    </p>
                                                    <div className="flex items-center gap-[12px] mt-[8px]">
                                                        <span className="text-[11px] text-[#64748B] font-[700] uppercase tracking-wider flex items-center gap-[4px]">
                                                            <FiClock className="w-[12px] h-[12px]" />
                                                            {issue.date}
                                                        </span>
                                                        <span className={`text-[11px] font-[800] uppercase tracking-wider ${issue.priority === 'High' ? 'text-[#EF4444]' : 'text-[#F59E0B]'}`}>
                                                            {issue.priority} Priority
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-[32px]">
                                                <div className="text-right hidden sm:block">
                                                    <p className="text-[10px] text-[#64748B] uppercase font-[800] mb-[4px] tracking-wider">Protocol Status</p>
                                                    <p className="text-[14px] font-[800] text-[#0F172A]">{issue.status}</p>
                                                </div>
                                                <button className="h-[44px] px-[20px] bg-[#0F172A] text-[#FFFFFF] text-[13px] font-[800] rounded-[10px] hover:bg-[#1D4ED8] transition-all active:scale-95 shadow-lg shadow-gray-200">
                                                    Resolve
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Maintenance Data Visualization */}
                <div className="lg:col-span-4 space-y-[40px]">
                    <div>
                        <h2 className="text-[20px] font-[800] text-[#0F172A] flex items-center gap-[12px] mb-[24px]">
                            <FiCpu className="text-[#1D4ED8]" />
                            Resource Allocation
                        </h2>
                        <Card className="bg-[#0F172A] border-none p-[40px] text-[#FFFFFF] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-[20px] opacity-10">
                                <FiServer className="w-[120px] h-[120px]" />
                            </div>
                            <div className="space-y-[32px] relative z-10">
                                {[
                                    { label: "HVAC Systems", val: "42%", color: "bg-[#1D4ED8]" },
                                    { label: "Structural Enclosure", val: "28%", color: "bg-[#10B981]" },
                                    { label: "Node Infrastructure", val: "18%", color: "bg-[#64748B]" },
                                    { label: "Others", val: "12%", color: "bg-[#FFFFFF]/20" }
                                ].map(stat => (
                                    <div key={stat.label} className="space-y-[12px]">
                                        <div className="flex justify-between text-[13px] font-[700] text-[#94A3B8]">
                                            <span className="uppercase tracking-wider">{stat.label}</span>
                                            <span className="text-[#FFFFFF]">{stat.val}</span>
                                        </div>
                                        <div className="h-[6px] bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: stat.val }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={`h-full ${stat.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-[800] text-[#0F172A] mb-[24px]">Network Latency</h3>
                        <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[32px] hover:shadow-lg transition-all">
                            <div className="space-y-[24px]">
                                {[
                                    { label: "Initial Signal", val: "14m", color: "text-[#10B981]" },
                                    { label: "Protocol Dispatch", val: "48m", color: "text-[#1D4ED8]" },
                                    { label: "Structural Resolution", val: "4.2h", color: "text-[#0F172A]" }
                                ].map(item => (
                                    <div key={item.label} className="flex justify-between items-center bg-[#F8FAFC] p-[16px] rounded-[12px]">
                                        <span className="text-[#64748B] font-[800] text-[11px] uppercase tracking-[0.1em]">{item.label}</span>
                                        <span className={`font-[800] text-[16px] ${item.color}`}>{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
