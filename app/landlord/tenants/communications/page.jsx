
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Section from '@/components/shared/layout/Section';

const MESSAGES = [
    { id: 'msg-1', from: 'Dr. Alexander Hoffman', asset: 'The Metropolitan Suite', snippet: 'Requested HVAC recalibration for the primary bedroom node.', date: '2h ago', priority: 'High', unread: true },
    { id: 'msg-2', from: 'Sarah Sterling', asset: 'Skyview Loft', snippet: 'Confirmed settlement protocol for the upcoming cycle.', date: '5h ago', priority: 'Medium', unread: false },
    { id: 'msg-3', from: 'Platform AI Node', asset: 'System Message', snippet: 'Annual yield assessment for Manhattan cluster is now available.', date: 'Yesterday', priority: 'Low', unread: false }
];

export default function LandlordTenantCommunicationsPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Signal Hub</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Resident Communications</h1>
                <p className="text-[16px] text-[#6B7280]">Centralized node for all structural and financial resident signals.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                {/* Message Stream */}
                <div className="lg:col-span-8 space-y-[16px]">
                    <div className="flex justify-between items-center mb-[8px]">
                        <h3 className="text-[18px] font-[700] text-[#111827]">Inbound Signals</h3>
                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Mark all as acknowledged</button>
                    </div>
                    {MESSAGES.map((msg, i) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className={`bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all relative group cursor-pointer ${msg.unread ? 'border-l-[4px] border-l-[#1D4ED8]' : ''}`}>
                                <div className="flex justify-between items-start gap-[24px]">
                                    <div className="space-y-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <span className="text-[11px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em]">{msg.from}</span>
                                            <span className="text-[12px] text-[#D1D5DB]">/</span>
                                            <span className="text-[11px] font-[600] text-[#6B7280]">{msg.asset}</span>
                                        </div>
                                        <h4 className={`text-[17px] font-[700] ${msg.unread ? 'text-[#111827]' : 'text-[#6B7280]'}`}>{msg.snippet}</h4>
                                        <div className="flex gap-[16px]">
                                            <span className="text-[12px] text-[#D1D5DB] font-[500]">{msg.date}</span>
                                            <span className={`text-[10px] uppercase font-[800] tracking-[0.05em] ${msg.priority === 'High' ? 'text-[#EF4444]' : 'text-[#D1D5DB]'}`}>{msg.priority} Priority</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-[12px] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-[10px] bg-[#F9FAFB] rounded-[8px] border border-[#D1D5DB]/20 hover:bg-[#111827] hover:text-white transition-all">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                                        </button>
                                        <button className="px-[16px] py-[10px] bg-[#111827] text-white text-[12px] font-[700] rounded-[8px]">Respond</button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Automation & Analytics */}
                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Response Metrics</h3>
                        <div className="space-y-[32px]">
                            {[
                                { l: "Avg Response Latency", v: "14m", d: "Optimal Range" },
                                { l: "Resident Sentiment", v: "Positive", d: "94% Satisfaction" },
                                { l: "Auto-Resolution rate", v: "62%", d: "Managed by AI Node" }
                            ].map(metric => (
                                <div key={metric.l} className="space-y-[8px]">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[11px] font-[700] text-white/50 uppercase tracking-[0.1em]">{metric.l}</span>
                                        <span className="text-[15px] font-[800] text-[#1D4ED8] bg-white px-[8px] py-[2px] rounded-[4px]">{metric.v}</span>
                                    </div>
                                    <p className="text-[13px] text-white/50 leading-[1.6]">{metric.d}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Broadcast Signal</h4>
                        <p className="text-[13px] text-[#6B7280] leading-[1.6] mb-[24px]">
                            Transmit a platform-wide message to all active residents in your portfolio.
                        </p>
                        <textarea className="w-full h-[120px] p-[16px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[12px] text-[14px] outline-none focus:border-[#1D4ED8] transition-colors mb-[16px] resize-none" placeholder="Initiate broadcast..."></textarea>
                        <button className="w-full py-[14px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">Transmit Signal</button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
