
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const ALERTS = [
    { id: '1', type: 'System', title: 'Credential Audit Complete', content: 'Your institutional identity node has been successfully verified for Manhattan tier-1 assets.', date: '2h ago', priority: 'Low' },
    { id: '2', type: 'Market', title: 'Price Reduction: Skyview Loft', content: 'A property in your saved list has recalibrated its monthly assessment.', date: '5h ago', priority: 'Medium' },
    { id: '3', type: 'Security', title: 'New Access Detected', content: 'A primary node access was detected from a new coordinates (IP: 192.168.1.1).', date: 'Yesterday', priority: 'High' }
];

export default function TenantAlertsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Network Signals</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">System Alerts</h1>
                    <p className="text-[16px] text-[#6B7280]">Real-time audit trails and notification forensics.</p>
                </div>
                <button className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">Mark all as read</button>
            </div>

            <div className="space-y-[16px]">
                {ALERTS.map((alert, i) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all relative group overflow-hidden">
                            <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${alert.priority === 'High' ? 'bg-[#EF4444]' : alert.priority === 'Medium' ? 'bg-[#F59E0B]' : 'bg-[#1D4ED8]'}`} />
                            <div className="flex justify-between items-start gap-[32px]">
                                <div className="space-y-[12px]">
                                    <div className="flex items-center gap-[12px]">
                                        <span className="text-[11px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">{alert.type} Node</span>
                                        <span className="text-[10px] text-[#D1D5DB]">/</span>
                                        <span className="text-[11px] font-[600] text-[#6B7280]">{alert.date}</span>
                                    </div>
                                    <h3 className="text-[18px] font-[700] text-[#111827]">{alert.title}</h3>
                                    <p className="text-[15px] text-[#6B7280] leading-[1.6] max-w-[700px]">{alert.content}</p>
                                </div>
                                <button className="px-[16px] py-[8px] border border-[#D1D5DB] rounded-[6px] text-[12px] font-[600] text-[#111827] hover:bg-[#F9FAFB] transition-colors">
                                    Acknowledge
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
