
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { useParams, useRouter } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';

export default function LandlordPropertyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const property = MOCK_ASSETS.find(a => a.id === params.id) || MOCK_ASSETS[0];

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center gap-[16px]">
                <button onClick={() => router.back()} className="w-[40px] h-[40px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] flex items-center justify-center hover:bg-[#FFFFFF] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[4px] block">Asset Forensics</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">{property.title}</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[0] overflow-hidden">
                        <div className="aspect-[16/9] bg-gradient-to-br from-[#1D4ED8]/20 to-[#10B981]/20 flex items-center justify-center">
                            <span className="text-[18px] font-[700] text-[#6B7280]">ASSET IMAGERY</span>
                        </div>
                        <div className="p-[40px]">
                            <div className="flex justify-between items-start mb-[24px]">
                                <div>
                                    <h2 className="text-[24px] font-[700] text-[#111827] mb-[8px]">{property.title}</h2>
                                    <p className="text-[16px] text-[#6B7280]">{property.address}</p>
                                </div>
                                <span className="px-[12px] py-[6px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[800] uppercase rounded-[6px]">
                                    Active
                                </span>
                            </div>
                            <p className="text-[15px] text-[#6B7280] leading-[1.8]">
                                {property.description || 'Premium residential asset featuring modern amenities and strategic location in high-demand urban corridor. Institutional-grade construction with verified structural integrity and optimized yield performance.'}
                            </p>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Structural Specifications</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[32px]">
                            {[
                                { label: 'Surface Area', value: `${property.sqft || '2,400'} SQFT` },
                                { label: 'Bedroom Nodes', value: property.bedrooms || '3' },
                                { label: 'Bathroom Nodes', value: property.bathrooms || '2' },
                                { label: 'Construction Year', value: '2018' },
                                { label: 'Floor Level', value: '12th' },
                                { label: 'Parking Spaces', value: '2' }
                            ].map(spec => (
                                <div key={spec.label} className="space-y-[8px]">
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">{spec.label}</p>
                                    <p className="text-[18px] font-[700] text-[#111827]">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Asset Features</h3>
                        <div className="grid grid-cols-2 gap-[16px]">
                            {['Central HVAC', 'In-Unit Laundry', 'Hardwood Floors', 'Granite Countertops', 'Stainless Appliances', 'Private Balcony', 'Concierge Service', 'Gym Access'].map(feature => (
                                <div key={feature} className="flex items-center gap-[12px] p-[16px] bg-[#F9FAFB] rounded-[12px]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]"><polyline points="20 6 9 17 4 12" /></svg>
                                    <span className="text-[14px] font-[600] text-[#111827]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Performance History</h3>
                        <div className="aspect-[21/9] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px] flex items-center justify-center">
                            <span className="text-[14px] font-[600] text-[#D1D5DB]">OCCUPANCY & YIELD CHART</span>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Financial Overview</h3>
                        <div className="space-y-[24px]">
                            <div className="space-y-[8px]">
                                <p className="text-[11px] text-white/50 uppercase font-[700]">Monthly Yield</p>
                                <p className="text-[32px] font-[700] text-[#1D4ED8]">${property.price?.toLocaleString() || '4,200'}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-[16px] pt-[16px] border-t border-white/10">
                                <div className="space-y-[4px]">
                                    <p className="text-[10px] text-white/50 uppercase font-[700]">Annual Revenue</p>
                                    <p className="text-[16px] font-[700]">${((property.price || 4200) * 12).toLocaleString()}</p>
                                </div>
                                <div className="space-y-[4px]">
                                    <p className="text-[10px] text-white/50 uppercase font-[700]">ROI</p>
                                    <p className="text-[16px] font-[700] text-[#10B981]">8.4%</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-[32px] py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[13px] font-[700] hover:bg-white/20 transition-all">
                            View Financial Details
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[20px]">Current Occupant</h4>
                        <div className="flex items-center gap-[16px] mb-[20px]">
                            <div className="w-[48px] h-[48px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] font-[700]">
                                DH
                            </div>
                            <div>
                                <p className="text-[15px] font-[700] text-[#111827]">Dr. Alexander Hoffman</p>
                                <p className="text-[12px] text-[#6B7280]">Lease: 24/36 months</p>
                            </div>
                        </div>
                        <div className="space-y-[12px] pt-[16px] border-t border-[#D1D5DB]/20">
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6B7280]">Quality Score</span>
                                <span className="font-[700] text-[#10B981]">98/100</span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#6B7280]">Payment Status</span>
                                <span className="font-[700] text-[#10B981]">Current</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[20px]">Quick Actions</h4>
                        <div className="space-y-[12px]">
                            {['Edit Asset Details', 'Schedule Maintenance', 'Generate Report', 'Update Pricing'].map(action => (
                                <button key={action} className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] hover:border-[#1D4ED8] transition-all">
                                    {action}
                                </button>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
