"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const SCHOOLS = [
    { name: "Chelsea Academy of Science", type: "Public High", rating: 9.2, distance: "0.4 mi" },
    { name: "Midtown Elementary Node", type: "Public Elementary", rating: 8.5, distance: "0.8 mi" },
    { name: "Geospatial Montessori", type: "Private Preschool", rating: 9.8, distance: "1.2 mi" },
    { name: "Forensic Arts Institute", type: "Charter Middle", rating: 8.9, distance: "1.5 mi" }
];

export default function SchoolInfo() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-[32px]">
                <h3 className="text-[20px] font-[800] text-[#111827]">Educational Node Analysis</h3>
                <span className="text-[12px] font-[700] text-[#1D4ED8] bg-[#1D4ED8]/10 px-[12px] py-[4px] rounded-full">Top Rated</span>
            </div>

            <div className="space-y-[16px]">
                {SCHOOLS.map((school, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] hover:bg-[#FFFFFF] hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center text-[#1D4ED8] shadow-sm border border-[#E5E7EB]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-[14px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{school.name}</h4>
                                <p className="text-[12px] text-[#6B7280]">{school.type} • {school.distance}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-[18px] font-[900] text-[#111827]">{school.rating}</div>
                            <p className="text-[10px] font-[700] text-[#10B981] uppercase tracking-[0.05em]">Institutional Score</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
