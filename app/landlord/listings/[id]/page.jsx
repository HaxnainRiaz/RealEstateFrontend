
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Link from 'next/link';

export default function LandlordListingDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const asset = MOCK_ASSETS.find(a => a.id === id) || MOCK_ASSETS[0];
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-[24px] md:gap-[32px]">
                <div className="space-y-[12px] md:space-y-[16px]">
                    <Link href="/landlord/listings" className="text-[12px] md:text-[14px] font-[600] text-[#1D4ED8] flex items-center gap-[8px] hover:underline">
                        ← Back to Inventory
                    </Link>
                    <div className="space-y-[6px] md:space-y-[8px]">
                        <span className="inline-block px-[10px] md:px-[12px] py-[2px] md:py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[10px] md:text-[12px] font-[700] uppercase rounded-[4px]">
                            {asset.status === 'available' ? 'Active Index' : 'Occupied Node'}
                        </span>
                        <h1 className="text-[28px] md:text-[40px] font-[700] text-[#111827] leading-[1.2] md:leading-[1.1]">{asset.title}</h1>
                        <p className="text-[15px] md:text-[18px] text-[#6B7280]">{asset.address}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-[12px] md:gap-[16px]">
                    <button className="flex-grow md:flex-grow-0 px-[20px] md:px-[24px] py-[12px] md:py-[14px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[13px] md:text-[14px] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                        Decommission
                    </button>
                    <PrimaryButton className="flex-grow md:flex-grow-0 px-[28px] md:px-[32px] py-[12px] md:py-[14px] text-[13px] md:text-[14px]">
                        Edit Logic
                    </PrimaryButton>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[48px]">
                {/* Visuals & Specs */}
                <div className="lg:col-span-8 space-y-[32px] md:space-y-[48px]">
                    <div className="aspect-[16/10] md:aspect-video bg-[#F3F4F6] rounded-[24px] md:rounded-[32px] border border-[#D1D5DB]/30 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[#6B7280] font-[600] text-[14px] md:text-[16px]">
                            ASSET VISUAL BUFFER
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[24px]">
                        {[
                            { label: "Monthly Yield", val: `$${asset.price}` },
                            { label: "Surface Area", val: `${asset.sqft} SQFT` },
                            { label: "Occupancy", val: asset.status === 'available' ? '0%' : '100%' },
                            { label: "Annual IRR", val: asset.yield }
                        ].map(spec => (
                            <Card key={spec.label} className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[20px] md:p-[24px]">
                                <p className="text-[9px] md:text-[10px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[6px] md:mb-[8px]">{spec.label}</p>
                                <p className="text-[16px] md:text-[18px] font-[700] text-[#111827] truncate">{spec.val}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="space-y-[16px] md:space-y-[24px]">
                        <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Structural Analysis</h3>
                        <p className="text-[14px] md:text-[16px] text-[#6B7280] leading-[1.8]">
                            {asset.description}
                        </p>
                    </div>

                    <div className="space-y-[16px] md:space-y-[24px]">
                        <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Feature Matrix</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px]">
                            {asset.features.map(feat => (
                                <div key={feat} className="p-[14px] md:p-[16px] bg-[#F9FAFB] border border-[#D1D5DB]/20 rounded-[12px] flex items-center gap-[12px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#1D4ED8] shrink-0" />
                                    <span className="text-[13px] md:text-[14px] font-[600] text-[#111827] truncate">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Performance & Resident HUD */}
                <div className="lg:col-span-4 space-y-[32px] md:space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] shadow-sm">
                        <div className="flex justify-between items-center mb-[24px] md:mb-[32px]">
                            <h3 className="text-[16px] md:text-[18px] font-[700] text-[#111827]">Yield Forensics</h3>
                            <Link href={`/landlord/listings/${asset.id}/performance`} className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] hover:underline shrink-0">Full Audit →</Link>
                        </div>
                        <div className="space-y-[20px] md:space-y-[24px]">
                            {[
                                { l: "Gross Revenue (YTD)", v: "$42,800" },
                                { l: "Operating Expense", v: "14.2%" },
                                { l: "Net Capital Flow", v: "$36,722" }
                            ].map(item => (
                                <div key={item.l} className="flex justify-between items-center border-b border-[#E2E8F0] pb-[12px]">
                                    <span className="text-[11px] md:text-[12px] text-[#6B7280] font-[600] uppercase tracking-[0.05em] truncate pr-[8px]">{item.l}</span>
                                    <span className="text-[14px] md:text-[15px] font-[700] shrink-0 text-[#111827]">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] shadow-sm">
                        <h3 className="text-[16px] md:text-[18px] font-[700] text-[#111827] mb-[20px] md:mb-[24px]">Resident Node</h3>
                        {asset.status === 'occupied' ? (
                            <div className="space-y-[20px] md:space-y-[24px]">
                                <div className="flex items-center gap-[16px]">
                                    <div className="w-[48px] md:w-[56px] h-[48px] md:h-[56px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] font-[700] shrink-0 text-[14px] md:text-[16px]">JC</div>
                                    <div className="min-w-0">
                                        <p className="text-[14px] md:text-[15px] font-[700] text-[#111827] truncate">John Collins</p>
                                        <p className="text-[11px] md:text-[12px] text-[#6B7280] truncate">Verified Resident • Score 94</p>
                                    </div>
                                </div>
                                <div className="pt-[16px] border-t border-[#D1D5DB]/20 flex flex-col sm:flex-row gap-[12px] justify-between">
                                    <button className="text-[12px] md:text-[13px] font-[700] text-[#1D4ED8] hover:underline text-left">Message Resident</button>
                                    <button className="text-[12px] md:text-[13px] font-[700] text-[#111827] hover:underline text-left">View Forensic Ledger</button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center space-y-[16px]">
                                <div className="w-[48px] md:w-[56px] h-[48px] md:h-[56px] bg-[#F9FAFB] rounded-full mx-auto flex items-center justify-center text-[#D1D5DB]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
                                </div>
                                <p className="text-[13px] md:text-[14px] text-[#6B7280]">No active resident node detected for this asset.</p>
                                <PrimaryButton className="w-full py-[12px] text-[13px]">
                                    Promote to Marketplace
                                </PrimaryButton>
                            </div>
                        )}
                    </Card>

                    <Card className="bg-[#FEF2F2] border-[#EF4444]/20 p-[24px] md:p-[32px]">
                        <h4 className="text-[14px] md:text-[15px] font-[700] text-[#EF4444] mb-[8px]">Maintenance Signals</h4>
                        <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-[1.6]">
                            No active repair nodes reported for this structure in the last 30 cycles.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
