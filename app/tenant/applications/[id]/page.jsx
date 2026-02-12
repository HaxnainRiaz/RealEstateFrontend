
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { BackButton } from '@/components/ui/navigation';

export default function TenantApplicationDetailPage() {
    const { id } = useParams();
    const req = MOCK_REQUESTS.find(r => r.id === id) || MOCK_REQUESTS[0];
    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);

    return (
        <div className="space-y-[40px]">
            <div className="flex justify-between items-start">
                <div className="space-y-[16px]">
                    <BackButton label="Back to Signals" href="/tenant/applications" />
                    <div className="space-y-[8px]">
                        <div className="flex items-center gap-[12px]">
                            <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em]">Signal Node: {req.id}</span>
                            <span className="px-[12px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[700] uppercase rounded-[4px] border border-[#10B981]/20">
                                {req.status}
                            </span>
                        </div>
                        <h1 className="text-[32px] font-[700] text-[#111827]">Application Forensic Report</h1>
                    </div>
                </div>
                <button className="px-[24px] py-[12px] bg-[#EF4444]/10 text-[#EF4444] text-[14px] font-[600] rounded-[8px] border border-[#EF4444]/20 hover:bg-[#EF4444] hover:text-[#FFFFFF] transition-all">
                    Decommission Signal
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Asset Summary</h3>
                        <div className="flex gap-[32px]">
                            <div className="w-[200px] aspect-video bg-[#F9FAFB] rounded-[12px] overflow-hidden flex-shrink-0" />
                            <div className="space-y-[12px]">
                                <h4 className="text-[18px] font-[700] text-[#111827]">{asset?.title}</h4>
                                <p className="text-[14px] text-[#6B7280] leading-[1.6]">{asset?.address}</p>
                                <div className="flex gap-[24px] pt-[12px]">
                                    <div>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em] mb-[4px]">Price</p>
                                        <p className="text-[15px] font-[700] text-[#111827]">${asset?.price.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em] mb-[4px]">Yield Type</p>
                                        <p className="text-[15px] font-[700] text-[#111827]">{asset?.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Audit Timeline</h3>
                        <div className="space-y-[32px]">
                            {[
                                { t: "Credential Verification", d: "Passed - Cryptographic check complete.", date: "Today, 14:20", active: true },
                                { t: "Asset Availability Check", d: "Confirmed - Node is available for occupancy.", date: "Today, 10:05", active: false },
                                { t: "Initial Signal Transmitted", d: "System verified signal receipt.", date: "Oct 24, 2023", active: false }
                            ].map((event, i) => (
                                <div key={event.t} className="flex gap-[24px] relative">
                                    {i < 2 && <div className="absolute left-[8px] top-[24px] bottom-[-24px] w-[2px] bg-[#F3F4F6]" />}
                                    <div className={`w-[18px] h-[18px] rounded-full mt-[4px] shrink-0 z-10 ${event.active ? 'bg-[#1D4ED8] shadow-[0_0_15px_rgba(29,78,216,0.4)]' : 'bg-[#D1D5DB]'}`} />
                                    <div className="space-y-[4px]">
                                        <div className="flex items-center gap-[12px]">
                                            <p className={`text-[15px] font-[700] ${event.active ? 'text-[#111827]' : 'text-[#6B7280]'}`}>{event.t}</p>
                                            <span className="text-[12px] text-[#D1D5DB] font-[500]">{event.date}</span>
                                        </div>
                                        <p className="text-[14px] text-[#6B7280]">{event.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[40px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-[#FFFFFF] shadow-2xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Support Protocol</h3>
                        <p className="text-[14px] text-[#FFFFFF]/60 leading-[1.8] mb-[32px]">
                            This application is currently being audited by the Manhattan Management Node.
                            Average resolution latency is ~48h for your credential tier.
                        </p>
                        <button className="w-full py-[14px] bg-[#1D4ED8] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#2563EB] transition-all">
                            Message Auditor
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] shadow-sm text-center">
                        <h3 className="text-[16px] font-[700] text-[#111827] mb-[8px]">Next Milestone</h3>
                        <p className="text-[13px] text-[#6B7280] mb-[24px]">Structural Interview Signaling</p>
                        <div className="w-[64px] h-[64px] bg-[#F9FAFB] rounded-full mx-auto flex items-center justify-center text-[#D1D5DB] border border-[#D1D5DB]/20 border-dashed">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
