
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import Link from 'next/link';
import { BackButton } from '@/components/ui/navigation';

export default function TenantRecentlyViewedPage() {
    const history = MOCK_ASSETS.slice(0, 4);

    return (
        <div className="space-y-[40px]">
            <BackButton href="/tenant/listings" />
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Temporal Cache</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Engagement History</h1>
                <p className="text-[16px] text-[#6B7280]">Recent asset forensic nodes accessed by your session.</p>
            </div>

            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="divide-y divide-[#D1D5DB]/20">
                    {history.map((asset, i) => (
                        <motion.div
                            key={asset.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/tenant/listings/${asset.id}`} className="flex items-center gap-[40px] p-[32px] hover:bg-[#F9FAFB] transition-colors group">
                                <div className="w-[120px] aspect-video bg-[#F3F4F6] rounded-[8px] overflow-hidden flex-shrink-0" />
                                <div className="flex-grow">
                                    <div className="flex items-center gap-[12px] mb-[4px]">
                                        <h3 className="text-[18px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{asset.title}</h3>
                                        <span className="px-[8px] py-[2px] bg-[#1D4ED8]/5 text-[#1D4ED8] text-[10px] font-[700] uppercase rounded-[4px] border border-[#1D4ED8]/10">{asset.category} Asset</span>
                                    </div>
                                    <p className="text-[14px] text-[#6B7280]">{asset.address}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-[18px] font-[700] text-[#111827]">${asset.price.toLocaleString()}</p>
                                    <p className="text-[12px] text-[#6B7280] font-[600]">Accessed 4h ago</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {history.length > 0 && (
                <div className="flex justify-center">
                    <button className="text-[13px] font-[700] text-[#6B7280] hover:text-[#EF4444] transition-colors">Clear Exposure History</button>
                </div>
            )}
        </div>
    );
}
