
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';
import Section from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Link from 'next/link';

export default function TenantListingDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const asset = MOCK_ASSETS.find(a => a.id === id) || MOCK_ASSETS[0];
    const [isApplying, setIsApplying] = useState(false);

    const handleApply = () => {
        setIsApplying(true);
        setTimeout(() => {
            router.push('/tenant/applications/wizard'); // Hypothetical wizard path
        }, 1500);
    };

    return (
        <div className="space-y-[40px]">
            {/* Detail Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-[32px]">
                <div className="space-y-[16px]">
                    <Link href="/tenant/listings" className="text-[14px] font-[600] text-[#1D4ED8] flex items-center gap-[8px] hover:underline">
                        ← Return to Catalog
                    </Link>
                    <div className="space-y-[8px]">
                        <span className="px-[12px] py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[12px] font-[700] uppercase rounded-[4px]">
                            {asset.category} Asset Managed
                        </span>
                        <h1 className="text-[40px] font-[700] text-[#111827] leading-[1.1]">{asset.title}</h1>
                        <p className="text-[18px] text-[#6B7280]">{asset.address}</p>
                    </div>
                </div>

                <Card className="bg-[#FFFFFF] p-[32px] border-[#D1D5DB]/30 min-w-[320px] shadow-2xl">
                    <div className="space-y-[24px]">
                        <div className="flex justify-between items-baseline">
                            <span className="text-[28px] font-[700] text-[#111827]">${asset.price.toLocaleString()}</span>
                            <span className="text-[#6B7280] text-[14px]">/ month</span>
                        </div>
                        <PrimaryButton
                            className="w-full py-[20px]"
                            onClick={handleApply}
                            loading={isApplying}
                        >
                            Initiate Application
                        </PrimaryButton>
                        <p className="text-[12px] text-center text-[#6B7280]">
                            Direct settlement protocol enabled for this asset.
                        </p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px]">
                {/* Gallery & Content */}
                <div className="lg:col-span-8 space-y-[64px]">
                    <div className="aspect-[16/9] bg-[#F9FAFB] rounded-[32px] border border-[#D1D5DB]/50 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#F3F4F6]" />
                        <div className="absolute bottom-[40px] left-[40px] text-[#FFFFFF] z-10 font-[700] text-[12px] uppercase">Asset Visual Node v1.0</div>
                    </div>

                    <div className="space-y-[40px]">
                        <div className="space-y-[24px]">
                            <h2 className="text-[24px] font-[700] text-[#111827]">Operational Overview</h2>
                            <p className="text-[18px] text-[#6B7280] leading-[1.8]">
                                {asset.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                            {[
                                { label: 'Surface Area', val: `${asset.sqft} SQFT` },
                                { label: 'Sleep Nodes', val: asset.beds },
                                { label: 'Sanitary Nodes', val: asset.baths },
                                { label: 'Build Quality', val: 'Enterprise' }
                            ].map(spec => (
                                <div key={spec.label} className="p-[20px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20">
                                    <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em] mb-[4px]">{spec.label}</p>
                                    <p className="text-[16px] font-[700] text-[#111827]">{spec.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-[32px]">
                        <h2 className="text-[24px] font-[700] text-[#111827]">Technical Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                            {asset.features.map(feat => (
                                <div key={feat} className="flex items-center gap-[12px] p-[16px] border border-[#D1D5DB]/30 rounded-[12px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#1D4ED8]" />
                                    <span className="text-[15px] font-[600] text-[#111827]">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-[40px]">
                    <Card className="bg-[#111827] text-[#FFFFFF] p-[40px] border-none shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Institutional Intel</h3>
                        <div className="space-y-[24px]">
                            {[
                                { label: "Target Yield", val: asset.yield },
                                { label: "Stability Index", val: "9.2/10" },
                                { label: "Energy Protocol", val: "Grade A" }
                            ].map(stat => (
                                <div key={stat.label} className="flex justify-between items-center border-b border-[#FFFFFF]/10 pb-[12px]">
                                    <span className="text-[13px] text-[#000000]/60 font-[600] uppercase tracking-[0.05em]">{stat.label}</span>
                                    <span className="text-[16px] text-[#000000] font-[700]">{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] p-[40px] border-[#D1D5DB]/30">
                        <h3 className="text-[18px] font-[700] text-[#111827] mb-[16px]">Asset Location</h3>
                        <div className="aspect-square bg-[#F9FAFB] rounded-[16px] mb-[24px] border border-[#D1D5DB]/20 flex items-center justify-center">
                            <span className="text-[12px] text-[#6B7280] font-[600]">MAP COMPONENT NODE</span>
                        </div>
                        <PrimaryButton className="w-full border border-[#D1D5DB] text-[#111827] shadow-none">
                            Explore Neighborhood
                        </PrimaryButton>
                    </Card>
                </div>
            </div>
        </div>
    );
}
