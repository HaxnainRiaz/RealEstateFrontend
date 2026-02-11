"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

export default function LoginPage() {
    return (
        <div className="max-w-[800px] mx-auto py-[80px]">
            <div className="text-center mb-[64px]">
                <h1 className="text-[40px] font-[800] text-[#111827] tracking-[-0.02em]">Welcome Back</h1>
                <p className="text-[18px] text-[#6B7280] mt-[16px]">Select your portal to initialize a secure session.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                <Link href="/login/tenant">
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="h-full cursor-pointer hover:border-[#1D4ED8] transition-all p-[40px]">
                            <div className="w-[56px] h-[56px] bg-[#1D4ED8]/10 rounded-[12px] flex items-center justify-center text-[#1D4ED8] mb-[24px]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <CardTitle>Tenant Portal</CardTitle>
                            <CardDescription className="mt-[16px]">
                                Access your rental dashboard, pay rent, and schedule maintenance requests.
                            </CardDescription>
                            <div className="mt-[32px] text-[#1D4ED8] font-[700] flex items-center gap-[8px]">
                                Authenticate as Tenant <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </div>
                        </Card>
                    </motion.div>
                </Link>

                <Link href="/login/landlord">
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="h-full cursor-pointer hover:border-[#1D4ED8] transition-all p-[40px]">
                            <div className="w-[56px] h-[56px] bg-[#10B981]/10 rounded-[12px] flex items-center justify-center text-[#10B981] mb-[24px]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                            <CardTitle>Landlord Terminal</CardTitle>
                            <CardDescription className="mt-[16px]">
                                Manage your global inventory, track yield, and audit tenant applications.
                            </CardDescription>
                            <div className="mt-[32px] text-[#10B981] font-[700] flex items-center gap-[8px]">
                                Authenticate as Landlord <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </div>
                        </Card>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
}
