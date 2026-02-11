"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import Toggle from '@/components/ui/input/Toggle';

export default function AutopayEnrollment() {
    const [enabled, setEnabled] = useState(false);

    return (
        <Card className={`p-[32px] rounded-[16px] border transition-all duration-500 ${enabled ? 'bg-[#1D4ED8]/5 border-[#1D4ED8]/30' : 'bg-[#FFFFFF] border-[#E5E7EB]'}`}>
            <div className="flex items-start justify-between mb-[32px]">
                <div>
                    <h3 className="text-[20px] font-[800] text-[#111827] mb-[8px]">Automated Yield Deployment</h3>
                    <p className="text-[14px] text-[#6B7280]">Enable recurring logic to automate rental obligations.</p>
                </div>
                <Toggle enabled={enabled} onChange={() => setEnabled(!enabled)} />
            </div>

            <div className={`space-y-[24px] transition-all duration-500 ${enabled ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                <div className="flex items-center gap-[16px] p-[20px] bg-[#FFFFFF] rounded-[12px] border border-[#F3F4F6] shadow-sm">
                    <div className="w-[40px] h-[40px] bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#9CA3AF]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-[700] uppercase text-[#9CA3AF] tracking-[0.05em]">Execution Date</p>
                        <p className="text-[14px] font-[700] text-[#111827]">1st of every month</p>
                    </div>
                </div>

                <div className="flex items-center gap-[16px] p-[20px] bg-[#FFFFFF] rounded-[12px] border border-[#F3F4F6] shadow-sm">
                    <div className="w-[40px] h-[40px] bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#9CA3AF]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-[700] uppercase text-[#9CA3AF] tracking-[0.05em]">Linked Node</p>
                        <p className="text-[14px] font-[700] text-[#111827]">CHASE Bank (**** 4242)</p>
                    </div>
                </div>

                <div className="bg-[#1D4ED8] p-[20px] rounded-[12px] text-[#FFFFFF] shadow-lg shadow-[#1D4ED8]/20">
                    <p className="text-[11px] font-[800] uppercase tracking-[0.1em] opacity-80 mb-[4px]">Forensic Benefit</p>
                    <p className="text-[13px] font-[600]">Enrolling in autopay maintains 100% data integrity for your credit node rating.</p>
                </div>
            </div>
        </Card>
    );
}
