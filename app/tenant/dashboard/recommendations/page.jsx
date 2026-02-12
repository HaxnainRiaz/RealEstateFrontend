
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import Link from 'next/link';
import { BackButton } from '@/components/ui/navigation';

export default function TenantRecommendationsPage() {
    const recommendations = MOCK_ASSETS.slice(0, 3);

    return (
        <div className="space-y-[40px]">
            <BackButton />
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Neural Matching</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Curated Recommendations</h1>
                <p className="text-[16px] text-[#6B7280]">Assets selected based on your verified credentials and search patterns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {recommendations.map((asset, i) => (
                    <motion.div
                        key={asset.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link href={`/tenant/listings/${asset.id}`} className="block group">
                            <Card className="p-0 overflow-hidden bg-[#FFFFFF] border-[#D1D5DB]/30 hover:border-[#1D4ED8] transition-all h-full flex flex-col">
                                <div className="aspect-[16/10] bg-[#F9FAFB] relative overflow-hidden">
                                    <div className="absolute inset-x-0 bottom-0 p-[24px] z-10">
                                        <span className="px-[12px] py-[6px] bg-[#FFFFFF]/90 backdrop-blur-md rounded-[4px] text-[12px] font-[700] text-[#111827]">
                                            {Math.floor(Math.random() * 10 + 90)}% Match
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-[#F3F4F6] group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-[32px] space-y-[16px] flex-grow">
                                    <div>
                                        <h4 className="text-[18px] font-[700] text-[#111827]">{asset.title}</h4>
                                        <p className="text-[14px] text-[#6B7280]">{asset.address}</p>
                                    </div>
                                    <div className="flex justify-between items-end pt-[20px] border-t border-[#D1D5DB]/20">
                                        <p className="text-[20px] font-[700] text-[#111827]">${asset.price.toLocaleString()}</p>
                                        <span className="text-[13px] font-[700] text-[#1D4ED8]">Analyze Details →</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#111827] rounded-[32px] p-[64px] text-center text-[#FFFFFF] space-y-[32px]">
                <h3 className="text-[24px] font-[700]">Want more precise matches?</h3>
                <p className="text-[#FFFFFF]/60 max-w-[500px] mx-auto leading-[1.6]">
                    Complete your comprehensive profile audit to unlock higher tier institutional assets
                    and tailored price projections.
                </p>
                <div className="flex justify-center gap-[16px]">
                    <Link href="/tenant/profile">
                        <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#2563EB] transition-all">
                            Level Up Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
