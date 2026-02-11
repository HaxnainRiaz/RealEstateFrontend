"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function MaintenanceTicket({ ticket }) {
    if (!ticket) return null;

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex justify-between items-start mb-[32px]">
                <div>
                    <span className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] block mb-[8px]">Incident Node #{ticket.id}</span>
                    <h3 className="text-[24px] font-[800] text-[#111827]">{ticket.title}</h3>
                </div>
                <div className={`px-[16px] py-[6px] rounded-[8px] text-[12px] font-[700] uppercase tracking-[0.05em] 
                    ${ticket.priority === 'critical' ? 'bg-[#EF4444] text-[#FFFFFF]' : 'bg-[#F3F4F6] text-[#374151]'}`}>
                    {ticket.priority} Priority
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[40px]">
                <div className="space-y-[24px]">
                    <div>
                        <h4 className="text-[14px] font-[700] text-[#111827] mb-[12px] uppercase tracking-[0.05em]">Forensic Description</h4>
                        <p className="text-[16px] text-[#4B5563] leading-[1.6]">{ticket.description}</p>
                    </div>

                    <div className="flex gap-[32px]">
                        <div>
                            <p className="text-[12px] font-[600] text-[#9CA3AF] uppercase">Node Location</p>
                            <p className="text-[14px] font-[700] text-[#111827]">Unit {ticket.unit}</p>
                        </div>
                        <div>
                            <p className="text-[12px] font-[600] text-[#9CA3AF] uppercase">Reported By</p>
                            <p className="text-[14px] font-[700] text-[#111827]">{ticket.tenantName}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] p-[24px]">
                    <h4 className="text-[14px] font-[700] text-[#111827] mb-[16px] uppercase tracking-[0.05em]">Action Protocol</h4>
                    <div className="space-y-[16px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#10B981]" />
                            <p className="text-[14px] text-[#374151]">Dispatch dispatched to node site</p>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D1D5DB]" />
                            <p className="text-[14px] text-[#6B7280]">Verification of component failure</p>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#D1D5DB]" />
                            <p className="text-[14px] text-[#6B7280]">Deployment of logic remediation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-[16px]">
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] font-[700] rounded-[8px] hover:bg-[#374151] transition-all">
                    Assign Technician
                </button>
                <button className="px-[24px] py-[12px] border border-[#D1D5DB] text-[#374151] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                    Mark Resolved
                </button>
            </div>
        </Card>
    );
}
