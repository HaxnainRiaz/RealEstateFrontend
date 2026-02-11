"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { label: 'Marketplace', href: '/listings' },
    { label: 'Protocols', href: '/how-it-works' },
    { label: 'Valuations', href: '/pricing' },
    { label: 'Governance', href: '/about' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // Force solid state for all pages except the landing page top
    const isLandingPage = pathname === '/';
    const isSolidState = !isLandingPage || scrolled;

    // Style variables for high contrast visibility
    const navBackground = isSolidState
        ? 'bg-white/90 backdrop-blur-2xl border-b border-surface-sunken shadow-lg'
        : 'bg-transparent';

    // Explicitly use hex for high-contrast if needed, but semantic tokens should work
    // We'll use text-text-primary (dark) for solid state and white for transparent
    const navTextColor = isSolidState ? 'text-[#0A0F1C]' : 'text-white';
    const navSecondaryColor = isSolidState ? 'text-[#4A5568]' : 'text-white/80';

    return (
        <nav
            onMouseLeave={() => setHoveredLink(null)}
            className={`
                fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out
                ${isSolidState ? 'h-16 shadow-black/5' : 'h-24'}
                ${navBackground}
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-full">

                {/* Brand Identity */}
                <Link href="/" className="flex items-center gap-4 relative z-[110] group">
                    <div className="relative w-10 h-10">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#003D99] rounded-xl shadow-lg rotate-3 group-hover:rotate-0 transition-all duration-500 ease-spring"
                        />
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center font-mono text-white text-[10px] font-black -rotate-3 group-hover:rotate-0 transition-all duration-500 ease-spring uppercase tracking-tighter">
                            TR
                        </div>
                    </div>
                    <span className={`text-xl md:text-2xl font-display font-black tracking-tighter uppercase transition-colors duration-500 ${navTextColor}`}>
                        Tirios<span className="text-[#0066FF]">.</span>
                    </span>
                </Link>

                {/* Tactical Navigation Links */}
                <div className="hidden lg:flex items-center gap-1 relative">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.href)}
                                className={`
                                    relative px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500
                                    ${isActive ? 'text-[#0066FF]' : `${navSecondaryColor} hover:text-[#0066FF]`}
                                `}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active-pill"
                                        className="absolute bottom-0 left-5 right-5 h-0.5 bg-[#0066FF] rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <AnimatePresence>
                                    {hoveredLink === link.href && !isActive && (
                                        <motion.div
                                            layoutId="nav-hover-pill"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute inset-0 bg-[#0066FF]/5 rounded-xl -z-0"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </Link>
                        );
                    })}
                </div>

                {/* System Actions */}
                <div className="flex items-center gap-6 relative z-[110]">
                    <div className="hidden sm:flex items-center gap-4">
                        <Link
                            href="/login"
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${navSecondaryColor} hover:text-white hover:bg-[#0066FF] rounded-lg`}
                        >
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            className="
                                relative px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white 
                                bg-gradient-to-br from-[#0066FF] to-[#003D99]
                                rounded-xl shadow-xl shadow-primary-600/20
                                hover:shadow-primary-600/40 hover:-translate-y-0.5 active:translate-y-0
                                transition-all duration-300 ease-emphasized overflow-hidden group/btn
                            "
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-3.5 rounded-xl lg:hidden transition-all duration-300 ${isSolidState ? 'bg-surface-sunken text-text-primary' : 'bg-white/10 text-white backdrop-blur-md hover:bg-white/20'}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <line x1="18" y1="6" x2="6" y2="18" />
                            ) : (
                                <>
                                    <line x1="4" y1="8" x2="20" y2="8" />
                                    <line x1="4" y1="16" x2="20" y2="16" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Responsive Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#0A0F1C]/60 backdrop-blur-md lg:hidden z-[90]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 32 }}
                            className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white lg:hidden z-[100] p-12 flex flex-col shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <span className="text-[10px] font-black text-[#0066FF] uppercase tracking-widest font-mono">Mobile Terminal</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-surface-sunken rounded-xl text-text-primary hover:bg-surface-base transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-10">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-display font-black text-[#0A0F1C] hover:text-[#0066FF] transition-colors tracking-tighter"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto space-y-4">
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="block w-full py-5 text-center font-black text-[#4A5568] bg-surface-sunken rounded-2xl uppercase tracking-widest text-[10px] transition-all">
                                    Access Portal
                                </Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/register" className="block w-full py-5 text-center font-black text-white bg-[#0066FF] shadow-2xl shadow-primary-600/30 uppercase tracking-widest text-[10px] rounded-2xl transition-all">
                                    Join Protocol
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
