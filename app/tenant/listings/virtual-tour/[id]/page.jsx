
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';

export default function TenantVirtualTourPage() {
    const { id } = useParams();
    const asset = MOCK_ASSETS.find(a => a.id === id) || MOCK_ASSETS[0];

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col space-y-[40px]">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Immersive Forensics</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Virtual Node: {asset.title}</h1>
                    <p className="text-[16px] text-[#6B7280]">360° structural analysis and interior engagement.</p>
                </div>
                <Link href={`/tenant/listings/${asset.id}`}>
                    <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                        Return to Profile
                    </button>
                </Link>
            </div>

            <div className="flex-grow bg-[#111827] rounded-[32px] overflow-hidden relative group">
                {/* Immersive View Simulated */}
                <div className="absolute inset-0 bg-[#0A0F1D] flex items-center justify-center">
                    <div className="text-center space-y-[32px] z-10 px-[40px]">
                        <div className="relative inline-block">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-[80px] h-[80px] bg-[#1D4ED8] rounded-full flex items-center justify-center text-[#FFFFFF] shadow-[0_0_40px_rgba(29,78,216,0.4)]"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                            </motion.div>
                        </div>
                        <div className="space-y-[12px]">
                            <h3 className="text-[24px] font-[700] text-[#FFFFFF]">Initializing Immersive Environment</h3>
                            <p className="text-[14px] text-[#FFFFFF]/40 max-w-[500px] mx-auto leading-[1.6]">
                                Authenticating structural geometry nodes and loading 8K texture buffers for real-time engagement.
                            </p>
                        </div>
                        <div className="w-[300px] h-[4px] bg-[#FFFFFF]/10 rounded-full mx-auto overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 3 }}
                                className="h-full bg-[#1D4ED8]"
                            />
                        </div>
                    </div>

                    {/* Control HUD Simulation */}
                    <div className="absolute inset-x-0 bottom-[40px] px-[40px] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex gap-[16px]">
                            {['Overview', 'Bedroom 1', 'Kitchen', 'Terrace'].map(node => (
                                <button key={node} className="px-[20px] py-[10px] bg-[#FFFFFF]/10 backdrop-blur-md rounded-[8px] text-[12px] font-[700] text-[#FFFFFF] hover:bg-[#1D4ED8] transition-all border border-[#FFFFFF]/10">
                                    {node}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-[12px]">
                            <button className="w-[44px] h-[44px] bg-[#FFFFFF]/10 backdrop-blur-md rounded-full flex items-center justify-center text-[#FFFFFF] border border-[#FFFFFF]/10">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[40px] right-[40px] z-20">
                    <span className="px-[14px] py-[8px] bg-red-600 text-white text-[10px] font-[700] uppercase tracking-[0.1em] rounded-[4px] shadow-xl animate-pulse">
                        Live Forensic Feed
                    </span>
                </div>
            </div>
        </div>
    );
}
