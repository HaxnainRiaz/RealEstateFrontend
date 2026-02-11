
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
    { label: 'Dashboard', href: '/tenant/dashboard' },
    { label: 'Browse Assets', href: '/tenant/listings' },
    { label: 'Applications', href: '/tenant/applications' },
    { label: 'Payments', href: '/tenant/payments' },
    { label: 'Documents', href: '/tenant/documents' },
    { label: 'Messages', href: '/tenant/messages' },
    { label: 'Support Node', href: '/tenant/support' },
    { label: 'Identity', href: '/tenant/profile' },
];

export default function TenantLayout({ children }) {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            {/* Sidebar */}
            <aside className={`bg-[#FFFFFF] border-r border-[#D1D5DB] transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[280px]' : 'w-[80px]'}`}>
                <div className="h-[80px] flex items-center px-[24px] border-b border-[#D1D5DB]">
                    <Link href="/" className="flex items-center gap-[12px] overflow-hidden">
                        <div className="w-[32px] h-[32px] bg-[#1D4ED8] rounded-[4px] shrink-0" />
                        <span className={`text-[20px] font-[700] text-[#111827] whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                            Tirios <span className="text-[#1D4ED8]">Portal</span>
                        </span>
                    </Link>
                </div>

                <nav className="p-[16px] space-y-[4px]">
                    {MENU_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-[12px] px-[12px] py-[12px] rounded-[8px] transition-all group ${pathname.startsWith(item.href)
                                ? 'bg-[#1D4ED8] text-[#FFFFFF]'
                                : 'text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]'
                                }`}
                        >
                            <div className="w-[20px] h-[20px] bg-current opacity-20 group-hover:opacity-40 rounded-[2px]" />
                            <span className={`text-[14px] font-[500] whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col">
                {/* Top Header */}
                <header className="h-[80px] bg-[#FFFFFF] border-b border-[#D1D5DB] flex items-center justify-between px-[40px] sticky top-0 z-40">
                    <div className="flex items-center gap-[24px]">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="p-[8px] hover:bg-[#F3F4F6] rounded-[4px] transition-colors"
                        >
                            <div className="w-[20px] h-[2px] bg-[#111827] mb-[4px]" />
                            <div className="w-[20px] h-[2px] bg-[#111827] mb-[4px]" />
                            <div className="w-[20px] h-[2px] bg-[#111827]" />
                        </button>
                        <h2 className="text-[18px] font-[600] text-[#111827]">
                            {MENU_ITEMS.find(item => pathname.startsWith(item.href))?.label || 'Tenant Portal'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-[16px]">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
                        <div className="hidden md:block">
                            <p className="text-[14px] font-[600] text-[#111827]">Tenant User</p>
                            <p className="text-[12px] text-[#6B7280]">tenant@example.com</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-[40px] max-w-[1200px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
