
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/ui/navigation/Navbar';
// Footer will be implemented in components/ui/layout/Footer.jsx eventually, but for now we'll put a placeholder or basic structure

export default function PublicLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen border-t-[4px] border-[#1D4ED8]">
            <header className="sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md">
                <Navbar />
            </header>

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-[#F9FAFB] border-t border-[#D1D5DB] py-[80px] px-[80px]">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[48px]">
                    <div className="space-y-[24px]">
                        <h3 className="text-[20px] font-[700] text-[#111827]">Tirios MVP</h3>
                        <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                            A modern enterprise real estate platform built for scale and efficiency.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-[600] text-[#111827] uppercase tracking-[0.02em] mb-[24px]">Platform</h4>
                        <ul className="space-y-[12px] text-[14px] text-[#6B7280]">
                            <li><a href="/how-it-works" className="hover:text-[#1D4ED8] transition-colors">How it works</a></li>
                            <li><a href="/pricing" className="hover:text-[#1D4ED8] transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-[600] text-[#111827] uppercase tracking-[0.02em] mb-[24px]">Company</h4>
                        <ul className="space-y-[12px] text-[14px] text-[#6B7280]">
                            <li><a href="/about" className="hover:text-[#1D4ED8] transition-colors">About</a></li>
                            <li><a href="/blog" className="hover:text-[#1D4ED8] transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-[600] text-[#111827] uppercase tracking-[0.02em] mb-[24px]">Legal</h4>
                        <ul className="space-y-[12px] text-[14px] text-[#6B7280]">
                            <li><a href="/legal/terms" className="hover:text-[#1D4ED8] transition-colors">Terms</a></li>
                            <li><a href="/legal/privacy" className="hover:text-[#1D4ED8] transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1240px] mx-auto mt-[80px] pt-[40px] border-t border-[#D1D5DB]">
                    <p className="text-[12px] text-[#6B7280]">© {new Date().getFullYear()} Real Estate Platform MVP. Built with Next.js.</p>
                </div>
            </footer>
        </div>
    );
}
