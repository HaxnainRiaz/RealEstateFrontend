"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function PropertyFilters() {
    return (
        <Card className="p-[24px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mb-[32px]">
            <div className="flex flex-col lg:flex-row gap-[24px]">
                <div className="flex-1">
                    <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] mb-[8px]">Search Portfolio</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by asset ID, address, or tenant"
                            className="w-full pl-[40px] pr-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] text-[#111827] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                        />
                        <svg className="absolute left-[12px] top-[14px] text-[#9CA3AF]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>

                <div className="flex flex-wrap gap-[16px]">
                    <div className="w-[180px]">
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] mb-[8px]">Asset Class</label>
                        <select className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] text-[#374151] font-[600] appearance-none bg-[#FFFFFF]">
                            <option value="">All Types</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                        </select>
                    </div>

                    <div className="w-[180px]">
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] mb-[8px]">Yield Status</label>
                        <select className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] text-[#374151] font-[600] appearance-none bg-[#FFFFFF]">
                            <option value="">All Status</option>
                            <option value="occupied">Full Occupancy</option>
                            <option value="vacant">Vacancy Alert</option>
                            <option value="maintenance">Maintenance Node</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button className="px-[24px] py-[12px] bg-[#F3F4F6] text-[#111827] font-[700] rounded-[10px] hover:bg-[#E5E7EB] transition-all border border-[#E5E7EB]">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
