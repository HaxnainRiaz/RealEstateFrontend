"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const TICKETS = [
    { id: "TKT-1024", task: "HVAC Unit Failure", priority: "critical", status: "open", unit: "4B", duration: "14m ago" },
    { id: "TKT-1025", task: "Leaking Faucet", priority: "low", status: "scheduled", unit: "12A", duration: "2h ago" },
    { id: "TKT-1026", task: "Broken Window", priority: "high", status: "open", unit: "8C", duration: "5h ago" },
    { id: "TKT-1027", task: "Pest Control", priority: "medium", status: "completed", unit: "Lobby", duration: "1d ago" }
];

export default function MaintenanceList() {
    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[20px] font-[700] text-[#111827]">Repair Forensic Queue</h3>
                <button className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">View Historical Archive</button>
            </div>

            <div className="space-y-[12px]">
                {TICKETS.map((tkt, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] hover:bg-[#F3F4F6] transition-colors group"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className={`w-[8px] h-[32px] rounded-full ${tkt.priority === 'critical' ? 'bg-[#EF4444]' :
                                    tkt.priority === 'high' ? 'bg-[#F59E0B]' :
                                        tkt.priority === 'medium' ? 'bg-[#3B82F6]' : 'bg-[#D1D5DB]'
                                }`} />
                            <div>
                                <h4 className="text-[14px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">
                                    {tkt.task} <span className="text-[#9CA3AF] font-[500] ml-[8px]">#{tkt.id}</span>
                                </h4>
                                <p className="text-[12px] text-[#6B7280]">Unit {tkt.unit} • Incident recorded {tkt.duration}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-[16px]">
                            <span className={`px-[8px] py-[3px] rounded-[4px] text-[10px] font-[700] uppercase tracking-[0.05em] ${tkt.status === 'open' ? 'bg-[#EF4444]/10 text-[#EF4444]' :
                                    tkt.status === 'scheduled' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' :
                                        'bg-[#10B981]/10 text-[#10B981]'
                                }`}>
                                {tkt.status}
                            </span>
                            <button className="p-[8px] text-[#9CA3AF] hover:text-[#111827] transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
