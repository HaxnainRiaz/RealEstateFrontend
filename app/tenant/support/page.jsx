
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Link from 'next/link';

export default function TenantSupportPage() {
    const SUPPORT_NODES = [
        { title: "Live Signal Node", desc: "Real-time communication with operational agents.", href: "/tenant/support/chat", color: "#1D4ED8", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
        { title: "Incident Ledger", desc: "Track and audit technical anomaly resolutions.", href: "/tenant/support/tickets", color: "#10B981", icon: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" },
        { title: "Knowledge Hub", desc: "Comprehensive documentation for platform structural navigation.", href: "/tenant/support/knowledge-base", color: "#F59E0B", icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
        { title: "Forensic FAQ", desc: "Direct answers to common operational queries.", href: "/tenant/support/faq", color: "#6B7280", icon: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" }
    ];

    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Network Assistance</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Support Hub</h1>
                    <p className="text-[16px] text-[#6B7280]">Resolve technical anomalies and query the platform knowledge base.</p>
                </div>
                <Link href="/tenant/support/chat">
                    <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all flex items-center gap-[10px]">
                        <div className="w-[8px] h-[8px] bg-[#10B981] rounded-full animate-pulse" />
                        Initialize Live Node
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                {SUPPORT_NODES.map((node, i) => (
                    <motion.div
                        key={node.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link href={node.href}>
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] hover:border-[#1D4ED8] transition-all group h-full">
                                <div className="flex items-start gap-[24px]">
                                    <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center bg-[#F9FAFB] text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all border border-[#D1D5DB]/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={node.icon} /></svg>
                                    </div>
                                    <div className="flex-grow space-y-[8px]">
                                        <h3 className="text-[18px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{node.title}</h3>
                                        <p className="text-[15px] text-[#6B7280] leading-[1.6]">{node.desc}</p>
                                    </div>
                                    <div className="text-[#D1D5DB] group-hover:text-[#1D4ED8] transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8">
                    <div className="p-[48px] bg-[#F9FAFB] rounded-[32px] border border-[#D1D5DB]/30 border-dashed">
                        <div className="max-w-[500px] space-y-[24px]">
                            <h2 className="text-[24px] font-[700] text-[#111827]">Signal Incident</h2>
                            <p className="text-[14px] text-[#6B7280]">Can't find the data? Transmit a high-priority incident signal to our human operations node.</p>
                            <form className="space-y-[24px]">
                                <TextField label="Incident Subject" placeholder="e.g. Credential Error" />
                                <div className="space-y-[8px]">
                                    <label className="text-[14px] font-[600] text-[#111827]">Structural Detail</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[12px] focus:outline-none focus:border-[#1D4ED8] resize-none text-[15px]"
                                        placeholder="Describe the technical anomaly..."
                                    />
                                </div>
                                <PrimaryButton className="w-full h-[56px] text-white">Transmit Signal</PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <Card className="bg-[#111827] border-none p-[40px] text-[#FFFFFF] shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">System Integrity</h3>
                        <div className="space-y-[24px]">
                            {[
                                { label: "Market Indices", val: "Operational", color: "text-[#10B981]" },
                                { label: "Authentication Node", val: "Operational", color: "text-[#10B981]" },
                                { label: "Payment Ledger", val: "Active Audit", color: "text-[#F59E0B]" }
                            ].map(sys => (
                                <div key={sys.label} className="flex justify-between items-center border-b border-[#FFFFFF]/10 pb-[12px]">
                                    <span className="text-[11px] text-[#FFFFFF]/60 font-[700] uppercase tracking-[0.05em]">{sys.label}</span>
                                    <span className={`text-[13px] font-[700] ${sys.color}`}>{sys.val}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
