
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Link from 'next/link';
import { FiMessageSquare, FiFileText, FiBookOpen, FiHelpCircle, FiArrowRight, FiActivity } from 'react-icons/fi';

export default function TenantSupportPage() {
    const SUPPORT_NODES = [
        { title: "Live Signal Node", desc: "Real-time communication with operational agents.", href: "/tenant/support/chat", color: "text-[#1D4ED8]", bg: "bg-[#EFF6FF]", icon: FiMessageSquare },
        { title: "Incident Ledger", desc: "Track and audit technical anomaly resolutions.", href: "/tenant/support/tickets", color: "text-[#10B981]", bg: "bg-[#F0FDF4]", icon: FiFileText },
        { title: "Knowledge Hub", desc: "Comprehensive documentation for platform structural navigation.", href: "/tenant/support/knowledge-base", color: "text-[#F59E0B]", bg: "bg-[#FFFBEB]", icon: FiBookOpen },
        { title: "Forensic FAQ", desc: "Direct answers to common operational queries.", href: "/tenant/support/faq", color: "text-[#6B7280]", bg: "bg-[#F9FAFB]", icon: FiHelpCircle }
    ];

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
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-[48px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Network Assistance</span>
                    <h1 className="text-[36px] font-[800] text-[#111827] tracking-tight">Support Hub</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Resolve technical anomalies and query the platform knowledge base.</p>
                </div>
                <Link href="/tenant/support/chat">
                    <button className="h-[52px] px-[28px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[700] rounded-[12px] hover:bg-[#1D4ED8] transition-all flex items-center gap-[12px] shadow-lg active:scale-95">
                        <div className="w-[10px] h-[10px] bg-[#10B981] rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                        Initialize Live Node
                    </button>
                </Link>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-[32px]"
            >
                {SUPPORT_NODES.map((node) => {
                    const Icon = node.icon;
                    return (
                        <motion.div key={node.title} variants={item}>
                            <Link href={node.href}>
                                <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[40px] hover:border-[#1D4ED8] hover:shadow-xl transition-all group h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-[24px] opacity-0 group-hover:opacity-5 transition-opacity">
                                        <Icon className={`w-[80px] h-[80px] ${node.color}`} />
                                    </div>
                                    <div className="flex items-start gap-[28px] relative z-10">
                                        <div className={`w-[64px] h-[64px] rounded-[18px] flex items-center justify-center ${node.bg} ${node.color} group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all border border-transparent group-hover:border-[#1D4ED8]/10 shadow-sm`}>
                                            <Icon className="w-[28px] h-[28px]" />
                                        </div>
                                        <div className="flex-grow space-y-[8px]">
                                            <h3 className="text-[19px] font-[800] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{node.title}</h3>
                                            <p className="text-[15px] text-[#64748B] leading-[1.6] font-[500]">{node.desc}</p>
                                        </div>
                                        <div className="text-[#CBD5E1] group-hover:text-[#1D4ED8] transition-all group-hover:translate-x-1">
                                            <FiArrowRight className="w-[20px] h-[20px]" strokeWidth={3} />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-[56px] bg-[#FFFFFF] rounded-[32px] border border-[#E2E8F0] shadow-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-[32px] opacity-10">
                            <FiActivity className="w-[120px] h-[120px] text-[#1D4ED8]" />
                        </div>
                        <div className="max-w-[500px] space-y-[32px] relative z-10">
                            <div className="space-y-[8px]">
                                <h2 className="text-[28px] font-[800] text-[#111827]">Signal Incident</h2>
                                <p className="text-[15px] text-[#64748B] font-[500]">Can't find the data? Transmit a high-priority incident signal to our human operations node.</p>
                            </div>
                            <form className="space-y-[28px]">
                                <TextField
                                    label="Incident Subject"
                                    placeholder="e.g. Credential Sync Discrepancy"
                                    className="h-[56px]"
                                />
                                <div className="space-y-[10px]">
                                    <label className="text-[14px] font-[700] text-[#111827] uppercase tracking-wider">Structural Detail</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-[20px] py-[18px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] focus:outline-none focus:border-[#1D4ED8] focus:bg-[#FFFFFF] transition-all resize-none text-[15px] font-[500]"
                                        placeholder="Describe the technical anomaly in detail..."
                                    />
                                </div>
                                <PrimaryButton className="w-full h-[60px] text-white text-[15px] font-[800] shadow-[0_12px_24px_rgba(29,78,216,0.2)]">
                                    Transmit Incident Signal
                                </PrimaryButton>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-[32px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-[#0F172A] border-none p-[40px] text-[#FFFFFF] shadow-2xl relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-[24px] opacity-10">
                                <FiActivity className="w-[64px] h-[64px]" />
                            </div>
                            <h3 className="text-[18px] font-[800] mb-[32px] flex items-center gap-[10px]">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#10B981] animate-pulse" />
                                System Integrity
                            </h3>
                            <div className="space-y-[32px]">
                                {[
                                    { label: "Market Indices", val: "Operational", color: "text-[#10B981]" },
                                    { label: "Auth Node", val: "Operational", color: "text-[#10B981]" },
                                    { label: "Payment Ledger", val: "Active Audit", color: "text-[#F59E0B]" }
                                ].map(sys => (
                                    <div key={sys.label} className="space-y-[12px] border-b border-[#FFFFFF]/10 pb-[20px] last:border-0 last:pb-0">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[11px] text-[#FFFFFF]/50 font-[800] uppercase tracking-[0.1em]">{sys.label}</span>
                                            <span className={`text-[13px] font-[800] ${sys.color}`}>{sys.val}</span>
                                        </div>
                                        <div className="h-[4px] bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: sys.val === 'Operational' ? '100%' : '85%' }}
                                                transition={{ duration: 2 }}
                                                className={`h-full ${sys.val === 'Operational' ? 'bg-[#10B981]' : 'bg-[#F59E0B]'}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[32px] text-center shadow-sm">
                        <div className="w-[56px] h-[56px] bg-[#EFF6FF] text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto mb-[20px]">
                            <FiHelpCircle className="w-[24px] h-[24px]" />
                        </div>
                        <h4 className="text-[16px] font-[800] text-[#111827] mb-[12px]">Direct Operations Channel</h4>
                        <p className="text-[14px] text-[#64748B] leading-[1.6] mb-[24px]">Speak directly with our forensic team for urgent structural queries.</p>
                        <button className="text-[14px] font-[800] text-[#1D4ED8] hover:underline flex items-center justify-center gap-[6px] w-full">
                            Request Callback <FiArrowRight />
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

