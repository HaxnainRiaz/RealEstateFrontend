"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function ListingMap() {
    return (
        <Card className="h-[600px] bg-[#F3F4F6] rounded-[16px] overflow-hidden relative border border-[#E5E7EB] flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* Simplified Map Pattern */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative text-center p-[40px]">
                <div className="w-[64px] h-[64px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-lg border border-[#E5E7EB] mx-auto mb-[20px]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h3 className="text-[20px] font-[700] text-[#111827] mb-[8px]">Interactive Asset Map</h3>
                <p className="text-[14px] text-[#6B7280] max-w-[300px] mb-[24px]">Forensic geospatial tracking active. All portfolio nodes mapped correctly.</p>

                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#374151] transition-colors flex items-center gap-[10px] mx-auto">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                    Initialize Tracking
                </button>
            </div>

            {/* Mock Map Markers */}
            <div className="absolute top-[20%] left-[30%] w-[32px] h-[32px] bg-[#1D4ED8] rounded-full border-[4px] border-[#FFFFFF] shadow-lg animate-bounce" />
            <div className="absolute top-[50%] left-[60%] w-[32px] h-[32px] bg-[#10B981] rounded-full border-[4px] border-[#FFFFFF] shadow-lg animate-pulse" />
            <div className="absolute top-[70%] left-[40%] w-[32px] h-[32px] bg-[#F59E0B] rounded-full border-[4px] border-[#FFFFFF] shadow-lg" />
        </Card>
    );
}
