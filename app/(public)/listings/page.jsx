"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function PublicListingsPage() {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAssets = MOCK_ASSETS.filter(asset => {
        const matchesFilter = filter === 'All' || asset.category === filter;
        const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            asset.address.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Architectural Gradient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#1D4ED8]/5 to-transparent" />
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-[24px] sm:px-[40px] pt-[120px] pb-[80px]">

                {/* Header & Search Section */}
                <div className="mb-[64px] space-y-[40px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-[700px] mx-auto"
                    >
                        <span className="inline-block px-[16px] py-[6px] rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-[12px] font-[700] uppercase tracking-[0.1em] mb-[16px]">
                            Global Marketplace
                        </span>
                        <h1 className="text-[48px] sm:text-[64px] font-[800] text-[#0F172A] tracking-[-0.03em] leading-[1.1] mb-[20px]">
                            Discover Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#2563EB]">
                                Next Asset
                            </span>
                        </h1>
                        <p className="text-[18px] text-[#64748B] leading-[1.6]">
                            Explore verified institutional properties. <br className="hidden sm:block" />
                            Transparent pricing. Direct landlord connection.
                        </p>
                    </motion.div>

                    {/* Search & Filter Bar - Glassmorphic */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="sticky top-[100px] z-30 max-w-[800px] mx-auto"
                    >
                        <div className="bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-[8px] flex flex-col sm:flex-row gap-[8px]">
                            {/* Search Input */}
                            <div className="relative flex-1 group">
                                <div className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[#94A3B8] group-focus-within:text-[#1D4ED8] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search location, property, etc..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-[56px] pl-[48px] pr-[20px] bg-transparent text-[16px] font-[500] text-[#0F172A] placeholder-[#94A3B8] outline-none rounded-[16px] focus:bg-[#F8FAFC] transition-colors"
                                />
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden sm:block w-[1px] bg-[#E2E8F0] my-[8px]" />

                            {/* Filters */}
                            <div className="flex bg-[#F1F5F9] p-[4px] rounded-[16px] overflow-x-auto sm:overflow-visible">
                                {['All', 'Institutional', 'Modern', 'Enterprise'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`relative px-[20px] py-[10px] text-[13px] font-[600] rounded-[12px] whitespace-nowrap transition-all duration-300 ${filter === cat ? 'text-[#0F172A] shadow-sm' : 'text-[#64748B] hover:text-[#0F172A]'
                                            }`}
                                    >
                                        {filter === cat && (
                                            <motion.div
                                                layoutId="activeFilter"
                                                className="absolute inset-0 bg-[#FFFFFF] rounded-[12px] shadow-sm"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{cat}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Properties Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAssets.map((asset) => (
                            <motion.div
                                key={asset.id}
                                variants={itemVariants}
                                layout
                                className="group"
                            >
                                <Link href={`/listings/${asset.id}`} className="block h-full">
                                    <div className="h-full bg-[#FFFFFF] rounded-[24px] overflow-hidden border border-[#E2E8F0] hover:border-[#1D4ED8]/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">

                                        {/* Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
                                            <div className="absolute top-[16px] left-[16px] z-10 flex gap-[8px]">
                                                {asset.status === 'available' && (
                                                    <span className="px-[12px] py-[6px] bg-[#10B981]/90 backdrop-blur-md text-[#FFFFFF] text-[11px] font-[700] uppercase tracking-wider rounded-full shadow-lg">
                                                        Available
                                                    </span>
                                                )}
                                                <span className="px-[12px] py-[6px] bg-[#FFFFFF]/90 backdrop-blur-md text-[#0F172A] text-[11px] font-[700] uppercase tracking-wider rounded-full shadow-lg border border-[#E2E8F0]">
                                                    {asset.category}
                                                </span>
                                            </div>

                                            <img
                                                src={asset.thumbnail || asset.images[0]}
                                                alt={asset.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />

                                            {/* Gradient Overlay on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Price Badge */}
                                            <div className="absolute bottom-[16px] right-[16px] z-10 translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="px-[16px] py-[8px] bg-[#FFFFFF] rounded-[12px] shadow-lg flex items-center gap-[6px]">
                                                    <span className="text-[16px] font-[800] text-[#0F172A]">
                                                        ${asset.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-[12px] font-[500] text-[#64748B]">/mo</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-[24px]">
                                            <h3 className="text-[20px] font-[700] text-[#0F172A] mb-[8px] group-hover:text-[#1D4ED8] transition-colors">
                                                {asset.title}
                                            </h3>
                                            <p className="text-[14px] text-[#64748B] font-[500] flex items-center gap-[6px] mb-[20px]">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {asset.address}
                                            </p>

                                            {/* Specs Grid */}
                                            <div className="grid grid-cols-3 gap-[12px] py-[16px] border-t border-[#F1F5F9]">
                                                {[
                                                    { label: 'Beds', value: asset.beds, icon: '🛏️' },
                                                    { label: 'Baths', value: asset.baths, icon: '🚿' },
                                                    { label: 'Sqft', value: asset.sqft.toLocaleString(), icon: '📐' },
                                                ].map((spec) => (
                                                    <div key={spec.label} className="text-center p-[8px] rounded-[12px] bg-[#F8FAFC] group-hover:bg-[#EFF6FF] transition-colors">
                                                        <span className="text-[12px] block mb-[2px]">{spec.icon}</span>
                                                        <span className="text-[13px] font-[700] text-[#0F172A] block">{spec.value}</span>
                                                        <span className="text-[10px] font-[600] text-[#94A3B8] uppercase tracking-wider">{spec.label}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Action Button */}
                                            <div className="mt-[20px] pt-[20px] flex items-center justify-between border-t border-[#F1F5F9]">
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-[24px] h-[24px] rounded-full border-2 border-[#FFFFFF] bg-[#E2E8F0]" />
                                                    ))}
                                                    <span className="ml-[8px] text-[12px] text-[#64748B] font-[500] self-center">+12 interested</span>
                                                </div>
                                                <span className="text-[14px] font-[700] text-[#1D4ED8] flex items-center gap-[4px] group-hover:gap-[8px] transition-all">
                                                    View Details
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredAssets.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-[100px] text-center"
                    >
                        <div className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-[24px] mx-auto flex items-center justify-center mb-[24px]">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <h3 className="text-[24px] font-[800] text-[#0F172A] mb-[8px]">No matches found</h3>
                        <p className="text-[#64748B] mb-[32px]">We couldn't find any properties matching your criteria.</p>
                        <button
                            onClick={() => { setFilter('All'); setSearchQuery(''); }}
                            className="px-[32px] py-[16px] bg-[#1D4ED8] text-[#FFFFFF] font-[700] rounded-[16px] hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#1D4ED8]/20 transition-all hover:-translate-y-1"
                        >
                            Reset All Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
