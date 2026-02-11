
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Card from '@/components/ui/data/Card';

const MOCK_MESSAGES = [
    { id: '1', sender: 'Management Node', content: "Johnathan, we've completed the initial structural audit of your application for the Skyview Loft. Can you provide evidence of your annual yield protocol?", time: 'Yesterday, 10:24', type: 'inbound' },
    { id: '2', sender: 'You', content: "I've uploaded the financial forensics to the vault. Please verify the sync status.", time: 'Yesterday, 11:05', type: 'outbound' },
    { id: '3', sender: 'Management Node', content: "Sync verified. We are proceeding with the final credentialing layer. Estimated resolution: 24h.", time: 'Yesterday, 14:12', type: 'inbound' }
];

export default function TenantMessageDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [inputText, setInputText] = useState('');

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col space-y-[40px]">
            <div className="flex justify-between items-start">
                <div className="space-y-[16px]">
                    <button
                        onClick={() => router.push('/tenant/messages')}
                        className="text-[14px] font-[600] text-[#1D4ED8] flex items-center gap-[8px] hover:underline"
                    >
                        ← Return to Signal Queue
                    </button>
                    <div className="space-y-[8px]">
                        <div className="flex items-center gap-[12px]">
                            <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em]">Signal Node: {id}</span>
                            <div className="w-[8px] h-[8px] bg-[#10B981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[14px] font-[700] text-[#111827]">Operational Agent.v2</span>
                        </div>
                        <h1 className="text-[28px] font-[700] text-[#111827]">Credential Audit: Skyview Loft</h1>
                    </div>
                </div>
                <div className="flex gap-[16px]">
                    <button className="px-[20px] py-[10px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] text-[13px] font-[700] text-[#111827] hover:bg-[#F9FAFB] transition-colors shadow-sm">
                        Mark as Resolved
                    </button>
                </div>
            </div>

            <div className="flex-grow bg-[#FFFFFF] border border-[#D1D5DB]/30 rounded-[32px] shadow-2xl overflow-hidden flex flex-col relative">
                <div className="absolute inset-0 bg-grid-[#F3F4F6] opacity-10 pointer-events-none" />

                <div className="flex-grow p-[48px] overflow-y-auto space-y-[40px] relative z-10">
                    {MOCK_MESSAGES.map((msg, i) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex ${msg.type === 'outbound' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[70%] space-y-[12px]`}>
                                <div className={`p-[24px] rounded-[24px] shadow-sm ${msg.type === 'outbound'
                                        ? 'bg-[#1D4ED8] text-[#FFFFFF] rounded-tr-[4px]'
                                        : 'bg-[#F9FAFB] border border-[#D1D5DB]/30 text-[#111827] rounded-tl-[4px]'
                                    }`}>
                                    <p className="text-[15px] leading-[1.8] font-[500] whitespace-pre-wrap">{msg.content}</p>
                                </div>
                                <div className={`flex items-center gap-[8px] text-[11px] font-[700] uppercase tracking-[0.05em] ${msg.type === 'outbound' ? 'justify-end text-[#1D4ED8]' : 'text-[#6B7280]'}`}>
                                    <span>{msg.sender}</span>
                                    <span className="text-[#D1D5DB]">•</span>
                                    <span>{msg.time}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="p-[32px] border-t border-[#D1D5DB]/20 bg-[#FFFFFF] relative z-10">
                    <div className="flex gap-[16px]">
                        <div className="flex-grow relative">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Transmit encrypted signal..."
                                rows="1"
                                className="w-full px-[24px] py-[16px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[16px] focus:outline-none focus:border-[#1D4ED8] text-[15px] transition-all resize-none shadow-inner"
                            />
                        </div>
                        <button
                            className="px-[32px] h-[58px] bg-[#111827] text-[#FFFFFF] font-[700] rounded-[16px] hover:bg-[#1D4ED8] transition-all shadow-xl active:scale-[0.98]"
                            disabled={!inputText.trim()}
                        >
                            Transmit
                        </button>
                    </div>
                    <div className="mt-[16px] flex items-center justify-between">
                        <div className="flex gap-[24px]">
                            <button className="flex items-center gap-[8px] text-[12px] font-[700] text-[#6B7280] hover:text-[#111827] transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                Attach Node
                            </button>
                        </div>
                        <p className="text-[11px] font-[600] text-[#D1D5DB] uppercase tracking-[0.1em]">AES-256 Protocol Enabled</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
