
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const NOTIF_CHANNELS = [
    { id: '1', title: 'Market Alerts', channels: ['Email', 'SMS', 'Push'] },
    { id: '2', title: 'Settlement Signals', channels: ['Email', 'App'] },
    { id: '3', title: 'Structural Updates', channels: ['Email', 'Push'] },
    { id: '4', title: 'Security Audits', channels: ['Email', 'SMS'] }
];

import { BackButton } from '@/components/ui/navigation';

export default function TenantNotificationsPage() {
    return (
        <div className="max-w-[800px] space-y-[40px]">
            <BackButton href="/tenant/profile" />
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Signal Distribution</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Notification Center</h1>
                <p className="text-[16px] text-[#6B7280]">Configure how institutional data is transmitted to your nodes.</p>
            </div>

            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="p-[32px] bg-[#F9FAFB] border-b border-[#D1D5DB]/20 grid grid-cols-12 gap-[24px]">
                    <div className="col-span-6"><span className="text-[11px] font-[700] uppercase text-[#6B7280]">Signal Category</span></div>
                    <div className="col-span-2 text-center"><span className="text-[11px] font-[700] uppercase text-[#6B7280]">Email</span></div>
                    <div className="col-span-2 text-center"><span className="text-[11px] font-[700] uppercase text-[#6B7280]">SMS</span></div>
                    <div className="col-span-2 text-center"><span className="text-[11px] font-[700] uppercase text-[#6B7280]">Push</span></div>
                </div>
                <div className="divide-y divide-[#F3F4F6]">
                    {NOTIF_CHANNELS.map((item) => (
                        <div key={item.id} className="p-[32px] grid grid-cols-12 gap-[24px] items-center hover:bg-[#F9FAFB]/50 transition-colors">
                            <div className="col-span-6">
                                <p className="text-[15px] font-[700] text-[#111827]">{item.title}</p>
                            </div>
                            {['Email', 'SMS', 'Push'].map(ch => (
                                <div key={ch} className="col-span-2 flex justify-center">
                                    <input
                                        type="checkbox"
                                        defaultChecked={item.channels.includes(ch)}
                                        className="w-[20px] h-[20px] rounded-[4px] border-[#D1D5DB] text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <Card className="bg-[#111827] border-none p-[40px] text-white">
                <div className="flex justify-between items-center">
                    <div className="space-y-[8px]">
                        <h3 className="text-[16px] font-[700]">Quiet Hours Protocol</h3>
                        <p className="text-[13px] text-white/60">Silence non-critical market signals between 22:00 and 06:00 Local.</p>
                    </div>
                    <div className="w-[48px] h-[24px] bg-[#FFFFFF]/10 rounded-full relative">
                        <div className="absolute top-[4px] left-[4px] w-[16px] h-[16px] bg-[#FFFFFF] rounded-full" />
                    </div>
                </div>
            </Card>
        </div>
    );
}
