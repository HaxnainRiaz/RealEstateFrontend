
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

export default function TenantSupportChatPage() {
    return (
        <div className="h-[calc(100vh-160px)] flex flex-col space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Real-time Assistance</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Live Support Node</h1>
                    <p className="text-[16px] text-[#6B7280]">Direct signal interface with platform operational agents.</p>
                </div>
                <Link href="/tenant/support">
                    <button className="text-[14px] font-[600] text-[#6B7280] hover:text-[#111827]">Return to Support Hub</button>
                </Link>
            </div>

            <div className="flex-grow bg-[#FFFFFF] border border-[#D1D5DB]/30 rounded-[32px] shadow-2xl overflow-hidden flex flex-col">
                {/* Live Chat Interface */}
                <div className="p-[32px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50 flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                        <div className="w-[12px] h-[12px] bg-[#10B981] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <h3 className="text-[16px] font-[700] text-[#111827]">Operational Node: Agent.v4</h3>
                        <span className="text-[12px] text-[#6B7280] font-[600]">Latency: ~14ms</span>
                    </div>
                    <button className="px-[16px] py-[8px] bg-[#111827] text-[#FFFFFF] text-[12px] font-[600] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                        Decommission Session
                    </button>
                </div>

                <div className="flex-grow p-[48px] overflow-y-auto space-y-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB]">
                    <div className="flex justify-center">
                        <span className="px-[12px] py-[4px] bg-[#F3F4F6] text-[#6B7280] text-[10px] font-[700] uppercase tracking-[0.1em] rounded-[4px]">Audit Initialized</span>
                    </div>

                    <div className="flex justify-start">
                        <div className="max-w-[60%] bg-[#FFFFFF] border border-[#D1D5DB]/30 p-[24px] rounded-[20px] rounded-tl-[4px] shadow-sm">
                            <p className="text-[15px] text-[#111827] leading-[1.6]">
                                Greetings, Johnathan. I am the operational node for your current credential tier.
                                How can I assist with your institutional asset search today?
                            </p>
                            <p className="text-[10px] text-[#6B7280] mt-[12px]">Agent.v4 • 14:32</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="max-w-[60%] bg-[#1D4ED8] p-[24px] rounded-[20px] rounded-tr-[4px] shadow-lg shadow-[#1D4ED8]/20">
                            <p className="text-[15px] text-[#FFFFFF] leading-[1.6]">
                                I encountered a credential sync error while browsing Manhattan Tier-1 assets.
                                Can you verify my trust score node?
                            </p>
                            <p className="text-[10px] text-[#FFFFFF]/60 mt-[12px]">You • 14:33</p>
                        </div>
                    </div>
                </div>

                <div className="p-[32px] border-t border-[#D1D5DB]/20 bg-[#FFFFFF]">
                    <div className="flex gap-[16px]">
                        <input
                            type="text"
                            placeholder="Transmit secure signal..."
                            className="flex-grow px-[24px] py-[16px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[12px] focus:outline-none focus:border-[#1D4ED8] text-[15px] transition-all"
                        />
                        <button className="px-[32px] bg-[#111827] text-[#FFFFFF] font-[700] rounded-[12px] hover:bg-[#1D4ED8] transition-all">
                            Transmit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
