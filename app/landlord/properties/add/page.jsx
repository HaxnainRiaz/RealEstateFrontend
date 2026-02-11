
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { useRouter } from 'next/navigation';

export default function LandlordAddPropertyPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            router.push('/landlord/properties');
        }, 2000);
    };

    return (
        <div className="max-w-[900px] mx-auto space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Portfolio Expansion</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Add Property to Portfolio</h1>
                <p className="text-[16px] text-[#6B7280]">Register a new asset node for portfolio management and analytics.</p>
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                <div className="space-y-[32px]">
                    <div>
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Property Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <TextField label="Property Name" placeholder="e.g., The Metropolitan Suite" />
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Property Type</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Mixed-Use</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Location Details</h4>
                        <div className="space-y-[16px]">
                            <TextField label="Street Address" placeholder="123 Market Street" />
                            <div className="grid grid-cols-3 gap-[16px]">
                                <TextField label="City" placeholder="Manhattan" />
                                <TextField label="State" placeholder="NY" />
                                <TextField label="ZIP Code" placeholder="10001" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Property Specifications</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[24px]">
                            <TextField label="Square Footage" placeholder="2,400" />
                            <TextField label="Bedrooms" placeholder="3" />
                            <TextField label="Bathrooms" placeholder="2" />
                            <TextField label="Year Built" placeholder="2018" />
                            <TextField label="Parking Spaces" placeholder="2" />
                            <TextField label="Lot Size (acres)" placeholder="0.25" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Financial Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <TextField label="Purchase Price" placeholder="$850,000" />
                            <TextField label="Purchase Date" type="date" />
                            <TextField label="Current Market Value" placeholder="$920,000" />
                            <TextField label="Monthly Mortgage Payment" placeholder="$3,200" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Rental Information (Optional)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <TextField label="Target Monthly Rent" placeholder="$4,200" />
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Occupancy Status</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                    <option>Vacant</option>
                                    <option>Occupied</option>
                                    <option>Under Renovation</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[32px] border-t border-[#D1D5DB]/20 flex gap-[16px]">
                        <button
                            onClick={() => router.back()}
                            className="px-[32px] py-[14px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[14px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all"
                        >
                            Cancel
                        </button>
                        <PrimaryButton onClick={handleSubmit} loading={isSubmitting} className="flex-grow">
                            Add Property to Portfolio
                        </PrimaryButton>
                    </div>
                </div>
            </Card>

            <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[40px]">
                <div className="flex items-start gap-[20px]">
                    <div className="w-[48px] h-[48px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[8px]">Portfolio vs. Marketplace Assets</h4>
                        <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                            This form adds properties to your <strong>portfolio management system</strong> for tracking and analytics. To list a property for rent on the marketplace, use the <strong>Create Listing</strong> feature instead.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
