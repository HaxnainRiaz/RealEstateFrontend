
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { label: 'Browse Properties', href: '/listings' },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full h-[80px] px-[80px] flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-[#FFFFFF] shadow-[0_4px_6px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>
            <div className="flex items-center gap-[48px]">
                <Link href="/" className="text-[24px] font-[700] tracking-[-0.02em] text-[#111827] flex items-center gap-[10px]">
                    <div className="w-[32px] h-[32px] bg-[#1D4ED8] rounded-[4px]" />
                    <span>Tirios</span>
                </Link>

                <div className="hidden md:flex items-center gap-[32px]">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[14px] font-[500] transition-colors ${pathname === link.href ? 'text-[#1D4ED8]' : 'text-[#6B7280] hover:text-[#111827]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-[24px]">
                <Link
                    href="/login"
                    className="text-[14px] font-[600] text-[#111827] hover:text-[#1D4ED8] transition-colors"
                >
                    Sign In
                </Link>
                <Link
                    href="/register"
                    className="bg-[#1D4ED8] text-[#FFFFFF] text-[14px] font-[600] px-[24px] py-[12px] rounded-[8px] hover:bg-[#2563EB] transition-all shadow-[0_4px_6px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
