
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { BackButton } from '@/components/ui/navigation';

export default function TenantListingsMapPage() {
    return (
        <div className="h-[calc(100vh-160px)] flex flex-col space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <BackButton href="/tenant/listings" className="mb-[24px]" />
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Spatial Intelligence</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Market Map Node</h1>
                    <p className="text-[16px] text-[#6B7280]">Geospatial distribution of verified institutional assets.</p>
                </div>
                <div className="flex gap-[12px]">
                    <Link href="/tenant/listings">
                        <button className="px-[24px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[14px] font-[600] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                            List View
                        </button>
                    </Link>
                    <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                        Filter Node
                    </button>
                </div>
            </div>

            <div className="flex-grow bg-[#F3F4F6] rounded-[32px] border border-[#D1D5DB]/30 relative overflow-hidden flex items-center justify-center">
                {/* Map Simulation */}
                <div className="absolute inset-0 bg-[#F9FAFB] flex items-center justify-center">
                    <div className="text-center space-y-[24px] z-10">
                        <div className="w-[64px] h-[64px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mx-auto text-[#1D4ED8]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <h3 className="text-[20px] font-[700] text-[#111827]">Interactive Spatial Data</h3>
                        <p className="text-[14px] text-[#6B7280] max-w-[400px]">
                            Real-time property coordinates are projected onto this interface for neighborhood forensics.
                        </p>
                    </div>

                    {/* Mock Markers */}
                    {[
                        { t: '12%', l: '24%', p: '$4,200', id: '1' },
                        { t: '45%', l: '62%', p: '$3,800', id: '2' },
                        { t: '78%', l: '35%', p: '$5,100', id: '3' },
                        { t: '32%', l: '18%', p: '$2,950', id: '4' }
                    ].map(m => (
                        <motion.div
                            key={m.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (parseInt(m.id) * 0.1) }}
                            style={{ top: m.t, left: m.l }}
                            className="absolute"
                        >
                            <div className="px-[12px] py-[6px] bg-[#1D4ED8] text-[#FFFFFF] text-[12px] font-[700] rounded-[6px] shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                {m.p}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Map Overlay Controls */}
                <div className="absolute bottom-[40px] left-[40px] right-[40px] flex justify-between items-end pointer-events-none">
                    <Card className="bg-[#FFFFFF]/90 backdrop-blur-md p-[24px] border-[#D1D5DB]/30 shadow-2xl pointer-events-auto min-w-[280px]">
                        <h4 className="text-[14px] font-[700] mb-[12px]">Asset Concentration</h4>
                        <div className="space-y-[12px]">
                            <div className="flex justify-between items-center text-[12px]">
                                <span className="text-[#6B7280] font-[600]">Manhattan Core</span>
                                <span className="font-[700]">42 nodes</span>
                            </div>
                            <div className="h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                <div className="h-full bg-[#1D4ED8] w-[75%]" />
                            </div>
                        </div>
                    </Card>

                    <div className="flex gap-[12px] pointer-events-auto">
                        <button className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center text-[#111827] shadow-xl border border-[#D1D5DB]/20 hover:bg-[#F9FAFB]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                        </button>
                        <button className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center text-[#111827] shadow-xl border border-[#D1D5DB]/20 hover:bg-[#F9FAFB]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
