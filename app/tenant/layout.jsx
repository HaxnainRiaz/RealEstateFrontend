
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import {
    FiGrid,
    FiSearch,
    FiFileText,
    FiCreditCard,
    FiFolder,
    FiMessageSquare,
    FiLifeBuoy,
    FiUser,
    FiMenu,
    FiBell,
    FiLogOut,
    FiPlus
} from 'react-icons/fi';

const MENU_ITEMS = [
    { label: 'Dashboard', href: '/tenant/dashboard', icon: FiGrid },
    { label: 'Browse Assets', href: '/tenant/listings', icon: FiSearch },
    { label: 'Applications', href: '/tenant/applications', icon: FiFileText },
    { label: 'Payments', href: '/tenant/payments', icon: FiCreditCard },
    { label: 'Documents', href: '/tenant/documents', icon: FiFolder },
    { label: 'Messages', href: '/tenant/messages', icon: FiMessageSquare },
    { label: 'Support Node', href: '/tenant/support', icon: FiLifeBuoy },
    { label: 'Identity', href: '/tenant/profile', icon: FiUser },
];

export default function TenantLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const { logout } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 h-screen bg-[#FFFFFF] border-r border-[#E2E8F0] z-50 transition-all duration-300 ease-[0.22, 1, 0.36, 1] ${isSidebarOpen ? 'w-[280px]' : 'w-[88px]'}`}
            >
                <div className="h-[80px] flex items-center px-[28px] border-b border-[#F1F5F9]">
                    <Link href="/" className="flex items-center gap-[14px] overflow-hidden">
                        <div className="w-[36px] h-[36px] bg-[#1D4ED8] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(29,78,216,0.25)] flex-shrink-0">
                            <span className="text-[#FFFFFF] font-[900] text-[18px]">T</span>
                        </div>
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="text-[20px] font-[800] text-[#0F172A] whitespace-nowrap"
                                >
                                    Tirios <span className="text-[#1D4ED8]">Portal</span>
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </div>

                <nav className="p-[16px] space-y-[4px]">
                    {MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-[16px] px-[16px] py-[12px] rounded-[12px] transition-all group relative ${isActive
                                    ? 'bg-[#1D4ED8] text-[#FFFFFF] shadow-[0_8px_16px_rgba(29,78,216,0.15)]'
                                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                                    }`}
                            >
                                <Icon className={`w-[20px] h-[20px] transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -5 }}
                                            className="text-[14px] font-[600] whitespace-nowrap"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                {!isSidebarOpen && isActive && (
                                    <div className="absolute left-0 w-[4px] h-[24px] bg-[#FFFFFF] rounded-r-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-[16px] border-t border-[#F1F5F9]">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-[16px] px-[16px] py-[14px] rounded-[12px] text-[#EF4444] hover:bg-[#FEF2F2] transition-all group"
                    >
                        <FiLogOut className="w-[20px] h-[20px] transition-transform group-hover:-translate-x-1" />
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-[14px] font-[600]"
                                >
                                    Logout Session
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className={`flex-grow flex flex-col transition-all duration-300 ${isSidebarOpen ? 'pl-[280px]' : 'pl-[88px]'}`}>
                {/* Top Header */}
                <header className="h-[80px] bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E2E8F0] flex items-center justify-between px-[40px] sticky top-0 z-40">
                    <div className="flex items-center gap-[28px]">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="p-[10px] hover:bg-[#F1F5F9] rounded-[10px] transition-colors border border-transparent hover:border-[#E2E8F0] text-[#64748B]"
                        >
                            <FiMenu className="w-[22px] h-[22px]" />
                        </button>
                        <div className="h-[24px] w-[1px] bg-[#E2E8F0]" />
                        <h2 className="text-[18px] font-[700] text-[#0F172A] tracking-tight">
                            {MENU_ITEMS.find(item => pathname.startsWith(item.href))?.label || 'Tenant Workspace'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-[24px]">
                        <button className="p-[10px] text-[#64748B] hover:bg-[#F1F5F9] rounded-[10px] transition-all relative">
                            <FiBell className="w-[20px] h-[20px]" />
                            <span className="absolute top-[8px] right-[8px] w-[8px] h-[8px] bg-[#1D4ED8] rounded-full border-2 border-[#FFFFFF]" />
                        </button>

                        <div className="flex items-center gap-[14px] border-l border-[#E2E8F0] pl-[24px]">
                            <div className="flex flex-col items-end hidden lg:flex">
                                <p className="text-[13px] font-[700] text-[#0F172A]">Tenant User</p>
                                <p className="text-[11px] font-[600] text-[#1D4ED8] uppercase tracking-wider">Verified User</p>
                            </div>
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F1F5F9] border-2 border-[#E2E8F0] p-[2px] overflow-hidden">
                                <div className="w-full h-full rounded-[8px] bg-gradient-to-br from-[#10B981] to-[#3B82F6]" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-[40px] max-w-[1400px] w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

