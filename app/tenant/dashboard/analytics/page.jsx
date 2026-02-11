
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card, { CardTitle } from '@/components/ui/data/Card';
import Section from '@/components/shared/layout/Section';

export default function TenantAnalyticsPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Performance Hub</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Engagement Analytics</h1>
                <p className="text-[16px] text-[#6B7280]">Real-time tracking of your institutional footprint and search velocity.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                {[
                    { label: "Profile Visibility", val: "High", desc: "Viewed by 4 asset clusters in 48h." },
                    { label: "Search Velocity", val: "124 assets/mo", desc: "+12% from previous cycle." },
                    { label: "Match Quality", val: "92%", desc: "Alignment with institutional standards." }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] p-[32px] border-[#D1D5DB]/30 h-full">
                            <p className="text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] font-[700] text-[#111827] mb-[8px]">{stat.val}</h3>
                            <p className="text-[14px] text-[#6B7280] leading-[1.6]">{stat.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#FFFFFF] border border-[#D1D5DB]/30 p-[48px] overflow-hidden">
                <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Activity Over Time</h3>
                <div className="aspect-[21/9] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D4ED8]/5 to-transparent" />
                    <span className="text-[14px] font-[600] text-[#6B7280]">TIME-SERIES VISUALIZATION NODE</span>
                </div>
            </Card>
        </div>
    );
}
