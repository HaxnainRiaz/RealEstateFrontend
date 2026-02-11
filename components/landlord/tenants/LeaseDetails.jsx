"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function LeaseDetails({ lease }) {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-[32px]">
                <h3 className="text-[20px] font-[800] text-[#111827]">Active Lease Forensic</h3>
                <span className="text-[12px] font-[700] text-[#1D4ED8] bg-[#1D4ED8]/10 px-[12px] py-[4px] rounded-full">Primary Node Contract</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[40px]">
                <div className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]">
                    <p className="text-[12px] text-[#6B7280] font-[700] uppercase tracking-[0.05em] mb-[8px]">Contract Span</p>
                    <p className="text-[16px] font-[800] text-[#111827]">12 Months</p>
                    <p className="text-[12px] text-[#9CA3AF] mt-[4px]">Expires 14 Oct 2024</p>
                </div>
                <div className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]">
                    <p className="text-[12px] text-[#6B7280] font-[700] uppercase tracking-[0.05em] mb-[8px]">Escalation Clause</p>
                    <p className="text-[16px] font-[800] text-[#111827]">3% Annual</p>
                    <p className="text-[12px] text-[#9CA3AF] mt-[4px]">Next: 15 Oct 2024</p>
                </div>
                <div className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]">
                    <p className="text-[12px] text-[#6B7280] font-[700] uppercase tracking-[0.05em] mb-[8px]">Notice Period</p>
                    <p className="text-[16px] font-[800] text-[#111827]">60 Days</p>
                    <p className="text-[12px] text-[#9CA3AF] mt-[4px]">Mutual termination permitted</p>
                </div>
            </div>

            <div className="space-y-[24px]">
                <h4 className="text-[14px] font-[700] text-[#111827] uppercase tracking-[0.1em]">Contract Provisions</h4>
                <div className="space-y-[12px]">
                    {[
                        "Subletting prohibited without landlord logic approval",
                        "Maintenance signals must be triggered via tenant portal",
                        "Utilities decentralized to tenant node responsibility",
                        "Pet policy: Restricted (Standard Node Fee applies)"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-[12px]">
                            <svg className="mt-[4px] text-[#10B981]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <p className="text-[14px] text-[#374151] font-[500]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[40px] flex gap-[12px]">
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] font-[700] rounded-[8px] hover:bg-[#374151] transition-all">
                    Download PDF
                </button>
                <button className="px-[24px] py-[12px] border border-[#D1D5DB] text-[#374151] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                    Initialize Renewal
                </button>
            </div>
        </Card>
    );
}
