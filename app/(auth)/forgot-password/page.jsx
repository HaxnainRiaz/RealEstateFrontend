
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Email identifier required");
            return;
        }
        setError(null);
        setIsLoading(true);

        // Mock recovery logic
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="space-y-[32px]">
            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.div
                        key="request"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-[32px]"
                    >
                        <div className="text-center">
                            <h1 className="text-[32px] font-[700] text-[#111827] tracking-[-0.01em]">Recover Access</h1>
                            <p className="text-[16px] text-[#6B7280] mt-[8px]">
                                Enter your institutional email to initiate credentials recovery protocols.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-[24px]">
                            <TextField
                                label="Registered Email"
                                placeholder="e.g. user@example.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError(null);
                                }}
                                error={error}
                                required
                            />

                            <PrimaryButton
                                type="submit"
                                className="w-full h-[56px]"
                                loading={isLoading}
                            >
                                Transmit Recovery Signal
                            </PrimaryButton>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-[24px] py-[20px]"
                    >
                        <div className="w-[64px] h-[64px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981] mb-[8px]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </div>
                        <h2 className="text-[24px] font-[700] text-[#111827]">Signal Transmitted</h2>
                        <p className="text-[16px] text-[#6B7280] leading-[1.6]">
                            A secure recovery packet has been sent to **{email}**. Check your inbox to verify credentials.
                        </p>
                        <Link href="/login/tenant">
                            <button className="text-[14px] font-[600] text-[#1D4ED8] hover:underline mt-[8px]">
                                Return to Authentication Hub
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isSubmitted && (
                <div className="pt-[24px] border-t border-[#D1D5DB] text-center">
                    <Link href="/login/tenant" className="text-[14px] text-[#6B7280] hover:text-[#111827] flex items-center justify-center gap-[8px]">
                        <span>←</span> Back to login
                    </Link>
                </div>
            )}
        </div>
    );
}
