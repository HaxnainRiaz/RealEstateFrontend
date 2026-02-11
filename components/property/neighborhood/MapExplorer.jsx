"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function MapExplorer({ center, zoom = 12 }) {
    return (
        <Card className="h-[500px] relative overflow-hidden bg-[#F3F4F6] rounded-[20px] border border-[#E5E7EB] group">
            {/* Geometric Map Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="mapPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapPattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-[40px] z-10">
                    <div className="w-[80px] h-[80px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-2xl border border-[#E5E7EB] mx-auto mb-[24px] group-hover:scale-110 transition-transform cursor-pointer">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                    </div>
                    <h3 className="text-[24px] font-[900] text-[#111827] mb-[12px] tracking-tight">Geospatial Neighborhood Explorer</h3>
                    <p className="text-[14px] text-[#6B7280] max-w-[400px] mb-[32px] font-[500]">Forensic mapping engine active. Initializing proximity analysis for selected nodes.</p>

                    <button className="bg-[#111827] text-[#FFFFFF] px-[32px] py-[16px] rounded-[12px] font-[700] hover:bg-[#1D4ED8] transition-all shadow-lg active:scale-[0.98]">
                        Load Proximity Map
                    </button>
                </div>
            </div>

            {/* Mock Map UI Overlays */}
            <div className="absolute top-[32px] left-[32px] w-[200px] bg-[#FFFFFF]/90 backdrop-blur-md p-[16px] rounded-[12px] shadow-lg border border-[rgba(255,255,255,0.3)]">
                <p className="text-[10px] font-[800] text-[#9CA3AF] uppercase tracking-widest mb-[8px]">Current Node</p>
                <p className="text-[13px] font-[700] text-[#111827]">West Chelsea District</p>
            </div>

            <div className="absolute bottom-[32px] right-[32px] flex flex-col gap-[8px]">
                <button className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[12px] shadow-lg flex items-center justify-center text-[#111827] hover:text-[#1D4ED8] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                <button className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[12px] shadow-lg flex items-center justify-center text-[#111827] hover:text-[#1D4ED8] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
            </div>
        </Card>
    );
}
