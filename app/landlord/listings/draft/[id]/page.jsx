
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { useParams, useRouter } from 'next/navigation';

export default function LandlordDraftListingPage() {
    const params = useParams();
    const router = useRouter();

    return (
        <div className="max-w-[1000px] mx-auto space-y-[40px]">
            <div className="flex items-center gap-[16px]">
                <button onClick={() => router.push('/landlord/listings')} className="w-[40px] h-[40px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] flex items-center justify-center hover:bg-[#FFFFFF] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[4px] block">Draft Asset</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Continue Editing Draft</h1>
                </div>
            </div>

            <Card className="bg-[#F59E0B]/5 border-[#F59E0B]/20 p-[32px]">
                <div className="flex items-start gap-[20px]">
                    <div className="w-[48px] h-[48px] bg-[#F59E0B]/10 rounded-full flex items-center justify-center text-[#F59E0B] shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[16px] font-[700] text-[#92400E] mb-[8px]">Draft Saved</h3>
                        <p className="text-[14px] text-[#92400E]/70 leading-[1.6]">
                            This listing is saved as a draft. Complete the required fields and publish to make it visible on the marketplace.
                        </p>
                        <p className="text-[13px] text-[#92400E]/50 mt-[8px]">Last saved: 2 hours ago</p>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Draft Progress</h3>
                        <div className="space-y-[24px]">
                            {[
                                { section: 'Basic Information', completed: true, fields: '5/5 fields' },
                                { section: 'Property Details', completed: true, fields: '8/8 fields' },
                                { section: 'Features & Amenities', completed: false, fields: '3/12 selected' },
                                { section: 'Photos & Media', completed: false, fields: '0/6 images' },
                                { section: 'Pricing & Availability', completed: true, fields: '3/3 fields' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#D1D5DB]/20">
                                    <div className="flex items-center gap-[16px]">
                                        <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center ${item.completed ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F3F4F6] text-[#D1D5DB]'}`}>
                                            {item.completed ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            ) : (
                                                <span className="text-[14px] font-[700]">{i + 1}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-[700] text-[#111827]">{item.section}</h4>
                                            <p className="text-[13px] text-[#6B7280]">{item.fields}</p>
                                        </div>
                                    </div>
                                    <button className="px-[20px] py-[10px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                                        {item.completed ? 'Edit' : 'Complete'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Current Draft Data</h3>
                        <div className="space-y-[20px]">
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Property Title</p>
                                    <p className="text-[15px] font-[600] text-[#111827]">Luxury Downtown Penthouse</p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Address</p>
                                    <p className="text-[15px] font-[600] text-[#111827]">456 Park Avenue, Manhattan</p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Monthly Rent</p>
                                    <p className="text-[15px] font-[600] text-[#1D4ED8]">$6,500</p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Property Type</p>
                                    <p className="text-[15px] font-[600] text-[#111827]">Residential</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Publishing Checklist</h3>
                        <div className="space-y-[16px] mb-[32px]">
                            {[
                                { item: 'All required fields completed', done: false },
                                { item: 'At least 3 photos uploaded', done: false },
                                { item: 'Property description added', done: true },
                                { item: 'Pricing information set', done: true }
                            ].map((check, i) => (
                                <div key={i} className="flex items-center gap-[12px]">
                                    <div className={`w-[20px] h-[20px] rounded-[4px] border-2 flex items-center justify-center ${check.done ? 'bg-[#10B981] border-[#10B981]' : 'border-white/20'}`}>
                                        {check.done && (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        )}
                                    </div>
                                    <span className={`text-[14px] ${check.done ? 'text-white' : 'text-white/50'}`}>{check.item}</span>
                                </div>
                            ))}
                        </div>
                        <button disabled className="w-full py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[13px] font-[700] opacity-50 cursor-not-allowed">
                            Publish to Marketplace
                        </button>
                        <p className="text-[11px] text-white/40 text-center mt-[12px]">Complete all checklist items to publish</p>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[20px]">Draft Actions</h4>
                        <div className="space-y-[12px]">
                            <button className="w-full py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                Continue Editing
                            </button>
                            <button className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                Preview Draft
                            </button>
                            <button className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                Duplicate Draft
                            </button>
                            <button className="w-full py-[12px] bg-[#FEF2F2] border border-[#EF4444]/20 text-[#EF4444] text-[13px] font-[700] rounded-[8px] hover:bg-[#FEE2E2] transition-all">
                                Delete Draft
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[32px]">
                        <h4 className="text-[14px] font-[700] text-[#111827] mb-[12px]">Auto-Save Enabled</h4>
                        <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                            Your changes are automatically saved every 30 seconds. You can safely close this page and return later.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
