"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function TenantCard({ tenant, index }) {
    if (!tenant) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="bg-[#FFFFFF] p-[28px] rounded-[20px] border border-[#E5E7EB] hover:border-[#1D4ED8] hover:shadow-xl transition-all group">
                <div className="flex items-center gap-[20px] mb-[24px]">
                    <div className="w-[64px] h-[64px] rounded-full bg-[#F3F4F6] border border-[#E5E7EB] overflow-hidden">
                        <img src={`https://i.pravatar.cc/64?img=${index + 10}`} alt={tenant.name} />
                    </div>
                    <div>
                        <h3 className="text-[18px] font-[800] text-[#111827] mb-[4px]">{tenant.name || 'Tenant Node'}</h3>
                        <p className="text-[14px] text-[#6B7280]">Unit {tenant.unit || 'A1'}</p>
                    </div>
                    <div className="ml-auto">
                        <span className={`px-[10px] py-[4px] rounded-[6px] text-[10px] font-[800] uppercase tracking-[0.1em] 
                            ${tenant.status === 'active' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                            {tenant.status || 'Active'}
                        </span>
                    </div>
                </div>

                <div className="space-y-[16px] mb-[28px]">
                    <div className="flex justify-between items-center text-[14px]">
                        <span className="text-[#6B7280] font-[500]">Lease Term</span>
                        <span className="text-[#111827] font-[700] underline decoration-[#D1D5DB] decoration-[2px]">Oct 2023 - Oct 2024</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                        <span className="text-[#6B7280] font-[500]">Monthly Ledger</span>
                        <span className="text-[#111827] font-[800]">${(tenant.rent || 2400).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                        <span className="text-[#6B7280] font-[500]">Security Deposit</span>
                        <span className="text-[#10B981] font-[700]">Verified Hold</span>
                    </div>
                </div>

                <div className="flex gap-[12px]">
                    <button className="flex-1 px-[16px] py-[10px] bg-[#111827] text-[#FFFFFF] font-[700] rounded-[8px] text-[13px] hover:bg-[#374151] transition-all">
                        Tenant Portal
                    </button>
                    <button className="px-[16px] py-[10px] border border-[#D1D5DB] text-[#374151] font-[700] rounded-[8px] text-[13px] hover:bg-[#F9FAFB] transition-all">
                        Message
                    </button>
                </div>
            </Card>
        </motion.div>
    );
}
