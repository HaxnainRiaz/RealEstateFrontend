
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function VerifyEmailPage() {
    const [isVerifying, setIsVerifying] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        // Mock verification protocol
        const timer = setTimeout(() => {
            setIsVerifying(false);
            setIsSuccess(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="text-center space-y-[32px] py-[40px]">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {isVerifying ? (
                    <div className="space-y-[32px]">
                        <div className="w-[80px] h-[80px] border-[4px] border-[#1D4ED8]/20 border-t-[#1D4ED8] rounded-full animate-spin mx-auto" />
                        <h1 className="text-[28px] font-[700] text-[#111827]">Auditing Credentials</h1>
                        <p className="text-[16px] text-[#6B7280]">
                            Executing institutional verification protocol. Please remain connected.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-[32px]">
                        <div className="w-[80px] h-[80px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </div>
                        <h1 className="text-[28px] font-[700] text-[#111827]">Verification Successful</h1>
                        <p className="text-[16px] text-[#6B7280] leading-[1.6]">
                            Your institutional identity has been cryptographically verified. <br />You now have full access to the portal ecosystem.
                        </p>
                        <div className="pt-[16px]">
                            <Link href="/tenant/dashboard">
                                <PrimaryButton className="w-full h-[56px]">Enter Technical Dashboard</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
