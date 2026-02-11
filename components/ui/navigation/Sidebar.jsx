"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Sidebar({ items = [], footer }) {
    const pathname = usePathname();

    return (
        <aside className="w-[280px] h-[calc(100vh-80px)] bg-[#FFFFFF] border-r border-[#E5E7EB] flex flex-col p-[24px] sticky top-[80px]">
            <div className="flex-1 space-y-[4px]">
                {items.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={idx} href={item.href}>
                            <motion.div
                                whileHover={{ x: 4 }}
                                className={`
                                    flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] transition-all
                                    ${isActive ? 'bg-[#1D4ED8]/10 text-[#1D4ED8]' : 'text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]'}
                                `}
                            >
                                <div className={`w-[20px] h-[20px] flex items-center justify-center ${isActive ? 'text-[#1D4ED8]' : 'text-[#9CA3AF]'}`}>
                                    {item.icon}
                                </div>
                                <span className={`text-[14px] font-[600] ${isActive ? 'text-[#1D4ED8]' : 'text-[#374151]'}`}>
                                    {item.label}
                                </span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>

            {footer && (
                <div className="pt-[24px] border-t border-[#F3F4F6] mt-auto">
                    {footer}
                </div>
            )}
        </aside>
    );
}
