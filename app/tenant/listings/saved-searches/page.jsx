
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

const SAVED_SEARCHES = [
    { id: '1', title: 'Manhattan High-Yield', criteria: 'Institutional Tier, 2+ Beds, <$5.5k', frequency: 'Real-time Alerts', date: 'Oct 24, 2023' },
    { id: '2', title: 'Coastal Modern Clusters', criteria: 'Modern Tier, Waterfront, All Price', frequency: 'Daily Summary', date: 'Oct 18, 2023' },
    { id: '3', title: 'Enterprise Hubs', criteria: 'Enterprise Tier, Commute Nodes, <$4.2k', frequency: 'Weekly Pulse', date: 'Oct 10, 2023' }
];

import { BackButton } from '@/components/ui/navigation';

export default function TenantSavedSearchesPage() {
    return (
        <div className="space-y-[40px]">
            <BackButton href="/tenant/listings" />
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Search Protocols</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Saved Queries</h1>
                    <p className="text-[16px] text-[#6B7280]">Automated monitoring for specific asset criteria.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                    Deploy New Query
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {SAVED_SEARCHES.map((search, i) => (
                    <motion.div
                        key={search.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] hover:border-[#1D4ED8] transition-all group relative overflow-hidden">
                            <div className="absolute top-[40px] right-[40px]">
                                <span className="px-[12px] py-[6px] bg-[#F3F4F6] text-[#6B7280] text-[11px] font-[700] uppercase rounded-[4px] border border-[#D1D5DB]/20">
                                    {search.frequency}
                                </span>
                            </div>

                            <div className="space-y-[24px]">
                                <div>
                                    <h3 className="text-[20px] font-[700] text-[#111827] mb-[8px]">{search.title}</h3>
                                    <p className="text-[16px] text-[#6B7280]">{search.criteria}</p>
                                </div>

                                <div className="flex items-center justify-between pt-[24px] border-t border-[#D1D5DB]/20">
                                    <span className="text-[12px] text-[#D1D5DB] font-[600]">Initialized: {search.date}</span>
                                    <div className="flex gap-[16px]">
                                        <button className="text-[13px] font-[700] text-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity">Decommission</button>
                                        <Link href="/tenant/listings" className="text-[13px] font-[700] text-[#1D4ED8]">Execute Probe →</Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
