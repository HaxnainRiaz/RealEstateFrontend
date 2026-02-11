"use client";

import React from 'react';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="py-[96px] bg-[#111827] text-[#FFFFFF]">
            <div className="container mx-auto px-[24px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[48px]">
                    <div className="max-w-[600px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[36px] md:text-[48px] font-[800] mb-[24px]"
                        >
                            Ready to Elevate Your <br className="hidden md:block" />
                            <span className="text-[#1D4ED8]">Portfolio Performance?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[18px] text-[#D1D5DB]"
                        >
                            Join the network of institutional investors leveraging our proprietary forensic analytics and asset management protocols.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <PrimaryButton
                            className="w-full md:w-auto text-[18px] py-[18px] px-[40px]"
                            onClick={() => window.location.href = '/register'}
                        >
                            Initialize Access
                        </PrimaryButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
