"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';
import { useAuth } from '@/lib/context/AuthContext';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Link from 'next/link';

export default function PublicListingDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const asset = MOCK_ASSETS.find(a => a.id === id) || MOCK_ASSETS[0];
    const [showAuthPrompt, setShowAuthPrompt] = useState(false);

    const handleProtectedAction = (action) => {
        if (!user) {
            setShowAuthPrompt(true);
            return;
        }

        // If authenticated, proceed with action
        switch (action) {
            case 'apply':
                router.push('/tenant/applications/wizard');
                break;
            case 'contact':
                router.push(`/tenant/messages/new?property=${id}`);
                break;
            case 'save':
                // Handle save logic
                alert('Property saved to your favorites!');
                break;
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] pt-[80px] md:pt-[120px] pb-[80px]">
            <div className="max-w-[1400px] mx-auto px-[20px] md:px-[40px]">
                {/* Back Navigation */}
                <Link
                    href="/listings"
                    className="inline-flex items-center gap-[8px] text-[14px] font-[600] text-[#1D4ED8] hover:underline mb-[24px] md:mb-[32px]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to All Listings
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[64px]">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-[32px] md:space-y-[48px]">
                        {/* Hero Image */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-[#1D4ED8]/20 to-[#10B981]/20 rounded-[24px] md:rounded-[32px] border border-[#D1D5DB]/50 overflow-hidden relative">
                            <img
                                src={asset.images[0]}
                                alt={asset.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <span className="text-[14px] md:text-[18px] font-[700] text-[#FFFFFF] bg-[#000000]/50 px-[16px] md:px-[24px] py-[8px] md:py-[12px] rounded-[8px] backdrop-blur-sm">View Gallery</span>
                            </div>
                            {asset.status === 'available' && (
                                <div className="absolute top-[16px] md:top-[32px] left-[16px] md:left-[32px]">
                                    <span className="px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-[#10B981] text-[#FFFFFF] rounded-[8px] text-[11px] md:text-[13px] font-[700] uppercase tracking-[0.05em] shadow-xl">
                                        Available Now
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Property Header */}
                        <div className="space-y-[12px] md:space-y-[16px]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="px-[10px] py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[11px] md:text-[12px] font-[700] uppercase rounded-[4px]">
                                        {asset.category} Asset
                                    </span>
                                    <h1 className="text-[32px] md:text-[48px] font-[800] text-[#111827] leading-[1.1] mt-[12px] md:mt-[16px]">
                                        {asset.title}
                                    </h1>
                                    <p className="text-[16px] md:text-[20px] text-[#6B7280] mt-[8px] flex items-center gap-[8px]">
                                        <svg className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {asset.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Specs */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
                            {[
                                { label: 'Monthly Rent', val: `$${asset.price.toLocaleString()}`, icon: '💰' },
                                { label: 'Bedrooms', val: asset.beds, icon: '🛏️' },
                                { label: 'Bathrooms', val: asset.baths, icon: '🚿' },
                                { label: 'Square Feet', val: asset.sqft.toLocaleString(), icon: '📐' }
                            ].map(spec => (
                                <Card key={spec.label} className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[20px] md:p-[24px]">
                                    <p className="text-[20px] md:text-[24px] mb-[6px] md:mb-[8px]">{spec.icon}</p>
                                    <p className="text-[10px] md:text-[11px] text-[#6B7280] uppercase font-[700] tracking-[0.05em] mb-[4px]">
                                        {spec.label}
                                    </p>
                                    <p className="text-[16px] md:text-[20px] font-[700] text-[#111827]">
                                        {spec.val}
                                    </p>
                                </Card>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="space-y-[16px] md:space-y-[24px]">
                            <h2 className="text-[24px] md:text-[28px] font-[700] text-[#111827]">Property Overview</h2>
                            <p className="text-[16px] md:text-[18px] text-[#6B7280] leading-[1.8]">
                                {asset.description || 'Premium residential asset featuring modern amenities and strategic location in high-demand urban corridor. Institutional-grade construction with verified structural integrity and optimized yield performance.'}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-[24px] md:space-y-[32px]">
                            <h2 className="text-[24px] md:text-[28px] font-[700] text-[#111827]">Property Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[16px]">
                                {asset.features.map(feat => (
                                    <div
                                        key={feat}
                                        className="flex items-center gap-[12px] p-[16px] md:p-[20px] bg-[#F9FAFB] border border-[#D1D5DB]/30 rounded-[12px]"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span className="text-[14px] md:text-[16px] font-[600] text-[#111827]">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Action Panel */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-[120px] space-y-[24px]">
                            {/* Primary CTA Card */}
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] shadow-2xl">
                                <div className="space-y-[24px] md:space-y-[32px]">
                                    <div>
                                        <p className="text-[14px] text-[#6B7280] mb-[8px]">Monthly Rent</p>
                                        <p className="text-[32px] md:text-[40px] font-[800] text-[#111827]">
                                            ${asset.price.toLocaleString()}
                                        </p>
                                    </div>

                                    <div className="space-y-[12px] md:space-y-[16px]">
                                        <PrimaryButton
                                            className="w-full py-[16px] md:py-[18px] text-[15px] md:text-[16px]"
                                            onClick={() => handleProtectedAction('apply')}
                                        >
                                            Apply for This Property
                                        </PrimaryButton>

                                        <button
                                            onClick={() => handleProtectedAction('contact')}
                                            className="w-full py-[16px] md:py-[18px] bg-[#FFFFFF] border-2 border-[#1D4ED8] text-[#1D4ED8] text-[15px] md:text-[16px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] hover:text-[#FFFFFF] transition-all"
                                        >
                                            Contact Landlord
                                        </button>

                                        <button
                                            onClick={() => handleProtectedAction('save')}
                                            className="w-full py-[16px] md:py-[18px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[15px] md:text-[16px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] hover:border-[#1D4ED8] transition-all flex items-center justify-center gap-[8px]"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                            </svg>
                                            Save Property
                                        </button>
                                    </div>

                                    <p className="text-[13px] text-center text-[#6B7280] pt-[16px] border-t border-[#D1D5DB]/20">
                                        {user ? 'Authenticated session active' : 'Login required for interactions'}
                                    </p>
                                </div>
                            </Card>

                            {/* Property Stats */}
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                                <h3 className="text-[18px] font-[700] mb-[24px] text-[#111827]">Property Insights</h3>
                                <div className="space-y-[16px] md:space-y-[20px]">
                                    {[
                                        { label: 'Yield Rate', val: asset.yield || '5.2%' },
                                        { label: 'Availability', val: asset.status === 'available' ? 'Immediate' : 'Occupied' },
                                        { label: 'Property Type', val: asset.category }
                                    ].map(stat => (
                                        <div key={stat.label} className="flex justify-between items-center border-b border-[#E2E8F0] pb-[16px]">
                                            <span className="text-[12px] md:text-[13px] text-[#6B7280] font-[600] uppercase tracking-[0.05em]">
                                                {stat.label}
                                            </span>
                                            <span className="text-[14px] md:text-[16px] font-[700] text-[#111827]">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Auth Prompt Modal */}
                {showAuthPrompt && (
                    <div className="fixed inset-0 bg-[#000000]/60 backdrop-blur-sm z-50 flex items-center justify-center p-[24px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#FFFFFF] rounded-[24px] p-[48px] max-w-[500px] w-full shadow-2xl"
                        >
                            <div className="text-center space-y-[24px]">
                                <div className="w-[64px] h-[64px] bg-[#1D4ED8]/10 rounded-full mx-auto flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[28px] font-[700] text-[#111827] mb-[12px]">
                                        Sign In Required
                                    </h3>
                                    <p className="text-[16px] text-[#6B7280]">
                                        Please create an account or sign in to interact with this property listing.
                                    </p>
                                </div>
                                <div className="flex gap-[16px]">
                                    <Link href="/register" className="flex-1">
                                        <button className="w-full py-[16px] bg-[#1D4ED8] text-[#FFFFFF] font-[700] rounded-[8px] hover:bg-[#2563EB] transition-all">
                                            Create Account
                                        </button>
                                    </Link>
                                    <Link href="/login" className="flex-1">
                                        <button className="w-full py-[16px] bg-[#FFFFFF] border-2 border-[#1D4ED8] text-[#1D4ED8] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                                            Sign In
                                        </button>
                                    </Link>
                                </div>
                                <button
                                    onClick={() => setShowAuthPrompt(false)}
                                    className="text-[14px] text-[#6B7280] hover:text-[#111827] font-[600]"
                                >
                                    Continue Browsing
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
