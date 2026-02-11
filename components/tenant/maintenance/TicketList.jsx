"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const TICKETS = [
    { id: "SIG-8812", title: "Flickering Node Lights (Kitchen)", status: "processing", priority: "low", date: "Oct 24" },
    { id: "SIG-8813", title: "Cooling Loop Failure (HVAC)", status: "dispatched", priority: "critical", date: "Oct 25" }
];

export default function TicketList() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[20px] font-[800] text-[#111827]">Signal Incident Log</h3>
                <button className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">Archive</button>
            </div>

            <div className="space-y-[12px]">
                {TICKETS.map((tkt, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 1 }}
                        className="p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] flex items-center justify-between hover:border-[#1D4ED8]/30 transition-all"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className={`w-[12px] h-[12px] rounded-full ${tkt.status === 'processing' ? 'bg-[#F59E0B]' : 'bg-[#1D4ED8] animate-pulse'
                                }`} />
                            <div>
                                <h4 className="text-[14px] font-[700] text-[#111827]">{tkt.title}</h4>
                                <p className="text-[12px] text-[#6B7280]">Signal #{tkt.id} • Registered {tkt.date}</p>
                            </div>
                        </div>
                        <span className={`px-[8px] py-[3px] rounded-[4px] text-[10px] font-[800] uppercase tracking-[0.05em] 
                            ${tkt.priority === 'critical' ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-[#F3F4F6] text-[#374151]'}`}>
                            {tkt.priority}
                        </span>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
