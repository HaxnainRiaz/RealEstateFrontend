"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const TRANSIT_MODES = [
    { name: "West Side Express (A, C, E)", type: "Subway", distance: "0.2 mi", frequency: "Every 4 mins", status: "Active" },
    { name: "Crosstown Node (M23)", type: "Bus", distance: "0.1 mi", frequency: "Every 8 mins", status: "Delayed" },
    { name: "Institutional Ferry Terminal", type: "Ferry", distance: "0.9 mi", frequency: "Every 20 mins", status: "Active" },
    { name: "Citi Bike Portal", type: "Bike Share", distance: "0.05 mi", frequency: "High availability", status: "Active" }
];

export default function TransitInfo() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-[32px]">
                <h3 className="text-[20px] font-[800] text-[#111827]">Geospatial Transit Nodes</h3>
                <div className="flex gap-[4px]">
                    {[1, 2, 3].map(i => <div key={i} className="w-[4px] h-[4px] bg-[#1D4ED8] rounded-full" />)}
                </div>
            </div>

            <div className="space-y-[12px]">
                {TRANSIT_MODES.map((mode, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] group hover:bg-[#111827]/5 transition-all"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded-full flex items-center justify-center text-[#111827] shadow-sm border border-[#E5E7EB]">
                                {mode.type === 'Subway' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
                                {mode.type === 'Bus' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"></rect><circle cx="9" cy="18" r="1"></circle><circle cx="15" cy="18" r="1"></circle></svg>}
                                {mode.type === 'Ferry' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10.16c0-1.2-.35-2.31-1.14-3.16L18 3H6l-2.86 4c-.79.85-1.14 1.96-1.14 3.16V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.84z"></path><path d="M2 10h20"></path></svg>}
                                {mode.type === 'Bike Share' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path></svg>}
                            </div>
                            <div>
                                <h4 className="text-[14px] font-[700] text-[#111827]">{mode.name}</h4>
                                <p className="text-[12px] text-[#6B7280]">{mode.distance} • {mode.frequency}</p>
                            </div>
                        </div>

                        <div className={`px-[8px] py-[3px] rounded-[4px] text-[10px] font-[800] uppercase tracking-[0.05em] 
                            ${mode.status === 'Active' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                            {mode.status}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-[24px] pt-[24px] border-t border-[#F3F4F6] flex items-center justify-between">
                <p className="text-[12px] font-[600] text-[#6B7280] italic">Transit data refreshed from municipal source 2m ago.</p>
                <div className="w-[12px] h-[12px] rounded-full bg-[#10B981] animate-pulse" />
            </div>
        </Card>
    );
}
