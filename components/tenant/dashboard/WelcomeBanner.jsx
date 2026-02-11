"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function WelcomeBanner({ user }) {
    return (
        <Card className="bg-[#1D4ED8] text-[#FFFFFF] p-[32px] flex items-center justify-between rounded-[16px] shadow-lg mb-[32px] overflow-hidden relative">
            <div className="relative z-10">
                <span className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#93C5FD] mb-[8px] block">Tenant Portal</span>
                <h1 className="text-[32px] font-[800] mb-[8px]">Welcome back, {user?.name || 'Resident'}</h1>
                <p className="text-[16px] text-[#DBEAFE]">Your residence status is <span className="font-[700] text-[#10B981] bg-[#10B981]/20 px-[8px] py-[2px] rounded-[4px]">Active</span></p>
            </div>

            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#ffffff]/10 to-transparent pointer-events-none" />
            <div className="hidden md:block relative z-10">
                <button className="bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] font-[600] py-[12px] px-[24px] rounded-[8px] border border-[#FFFFFF]/20 transition-colors backdrop-blur-sm">
                    View Lease Terms
                </button>
            </div>
        </Card>
    );
}
