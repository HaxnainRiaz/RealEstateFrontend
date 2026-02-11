
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

const MOCK_CHATS = [
    { id: '1', name: 'Compliance Node', lastMsg: "Johnathan, we've completed the initial structural audit...", time: '14:20', unread: true },
    { id: '2', name: 'Asset Manager: Manhattan', lastMsg: 'Viewing protocol confirmed for Oct 28.', time: 'Yesterday', unread: false },
    { id: '3', name: 'System Signal', lastMsg: 'Security assessment update available.', time: '2 days ago', unread: false }
];

export default function TenantMessagesPage() {
    const [activeChat, setActiveChat] = useState(MOCK_CHATS[0]);

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Communication Hub</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Secure Messaging</h1>
                    <p className="text-[16px] text-[#6B7280]">Direct encrypted signals with management and support nodes.</p>
                </div>
                <Link href="/tenant/support/chat">
                    <button className="px-[24px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[14px] font-[600] rounded-[8px] hover:bg-[#F9FAFB] transition-all flex items-center gap-[10px] shadow-sm">
                        <div className="w-[8px] h-[8px] bg-[#10B981] rounded-full" />
                        Live Support Node
                    </button>
                </Link>
            </div>

            <div className="flex-grow flex gap-[32px] overflow-hidden pb-[40px]">
                {/* Chat List */}
                <div className="w-full md:w-[360px] flex flex-col gap-[16px] overflow-y-auto pr-[8px]">
                    {MOCK_CHATS.map((chat) => (
                        <button
                            key={chat.id}
                            onClick={() => setActiveChat(chat)}
                            className={`text-left p-[24px] rounded-[16px] border transition-all relative overflow-hidden group ${activeChat.id === chat.id ? 'bg-[#FFFFFF] border-[#1D4ED8] shadow-lg' : 'bg-[#F9FAFB] border-[#D1D5DB]/30 hover:bg-[#FFFFFF]'}`}
                        >
                            <div className="flex justify-between items-start mb-[8px]">
                                <h4 className="text-[15px] font-[700] text-[#111827]">{chat.name}</h4>
                                <span className="text-[11px] text-[#6B7280] font-[600]">{chat.time}</span>
                            </div>
                            <p className="text-[13px] text-[#6B7280] truncate leading-[1.4] font-[500]">{chat.lastMsg}</p>
                            {chat.unread && (
                                <div className="absolute top-[28px] right-[16px] w-[6px] h-[6px] bg-[#1D4ED8] rounded-full shadow-[0_0_8px_rgba(29,78,216,0.5)]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Chat Interface Preview */}
                <div className="hidden md:flex flex-grow flex-col bg-[#FFFFFF] border border-[#D1D5DB]/30 rounded-[24px] overflow-hidden shadow-sm">
                    {/* Chat Header */}
                    <div className="p-[28px] border-b border-[#D1D5DB]/20 flex items-center justify-between bg-[#F9FAFB]/30">
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[44px] h-[44px] bg-[#1D4ED8] rounded-full flex items-center justify-center text-white font-[700] text-[15px] shadow-lg">
                                {activeChat.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-[17px] font-[700] text-[#111827]">{activeChat.name}</h3>
                                <p className="text-[12px] text-[#10B981] font-[700] flex items-center gap-[4px] uppercase tracking-[0.05em]">
                                    <span className="w-[6px] h-[6px] bg-[#10B981] rounded-full animate-pulse" /> Node Verified
                                </p>
                            </div>
                        </div>
                        <Link href={`/tenant/messages/${activeChat.id}`}>
                            <button className="px-[20px] py-[10px] bg-[#111827] text-[#FFFFFF] text-[12px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                Maximize Signal →
                            </button>
                        </Link>
                    </div>

                    {/* Message Stream Preview */}
                    <div className="flex-grow p-[40px] overflow-y-auto space-y-[32px] bg-gradient-to-b from-white to-[#F9FAFB]">
                        <div className="flex justify-center">
                            <span className="px-[12px] py-[4px] bg-[#D1D5DB]/20 text-[#6B7280] text-[10px] font-[800] uppercase tracking-[0.1em] rounded-[4px]">Audit Trail Initialized</span>
                        </div>

                        <div className="flex justify-start">
                            <div className="max-w-[75%] bg-[#FFFFFF] border border-[#D1D5DB]/30 p-[24px] rounded-[20px] rounded-tl-[4px] shadow-sm">
                                <p className="text-[15px] text-[#111827] leading-[1.8] font-[500]">{activeChat.lastMsg}</p>
                                <p className="text-[11px] text-[#6B7280] mt-[12px] font-[600]">Agent Verification: Pass</p>
                            </div>
                        </div>
                    </div>

                    {/* Input Protocol Placeholder */}
                    <div className="p-[28px] border-t border-[#D1D5DB]/20 bg-[#FFFFFF]">
                        <div className="flex gap-[16px]">
                            <Link href={`/tenant/messages/${activeChat.id}`} className="flex-grow">
                                <div className="w-full px-[24px] py-[16px] bg-[#F9FAFB] border border-[#D1D5DB]/30 rounded-[12px] text-[#D1D5DB] text-[15px] flex items-center font-[500]">
                                    Expand session node to transmit signal...
                                </div>
                            </Link>
                            <button className="px-[32px] bg-[#F3F4F6] text-[#D1D5DB] font-[700] rounded-[12px] cursor-not-allowed">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
