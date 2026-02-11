"use client";

import React, { useState } from 'react';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { motion } from 'framer-motion';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Mock API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="bg-[#111827] py-[96px] text-[#FFFFFF] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 background-grid-pattern" /> {/* Generic background class */}

            <div className="container mx-auto px-[24px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-[64px]">
                <div className="md:w-1/2">
                    <span className="text-[#10B981] font-[700] uppercase tracking-[0.1em] text-[12px]">Stay Informed</span>
                    <h2 className="text-[36px] font-[800] mt-[16px] mb-[24px] leading-tight">
                        Receive Institutional <br />
                        <span className="text-[#1D4ED8]">Market Intelligence</span>
                    </h2>
                    <p className="text-[18px] text-[#9CA3AF] max-w-[480px]">
                        Weekly forensic analysis of market trends, regulatory shifts, and yield opportunities delivered directly to your inbox.
                    </p>
                </div>

                <div className="md:w-1/2 w-full max-w-[480px]">
                    <form onSubmit={handleSubmit} className="bg-[#1F2937] p-[32px] rounded-[16px] border border-[#374151]">
                        <div className="mb-[24px]">
                            <label htmlFor="email" className="block text-[14px] font-[600] text-[#D1D5DB] mb-[8px]">
                                Professional Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@organization.com"
                                className="w-full bg-[#111827] border border-[#374151] rounded-[8px] px-[16px] py-[14px] text-[#FFFFFF] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                                required
                            />
                        </div>

                        <PrimaryButton
                            type="submit"
                            loading={status === 'loading'}
                            className="w-full justify-center"
                        >
                            {status === 'success' ? 'Subscribed Successfully' : 'Subscribe to Briefing'}
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
}
