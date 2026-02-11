"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';

export default function ListingFilters() {
    return (
        <Card className="p-[24px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mb-[24px]">
            <div className="flex flex-col md:flex-row gap-[16px] items-center">
                <div className="flex-1 relative w-full">
                    <input
                        type="text"
                        placeholder="Search by city, neighborhood, or address"
                        className="w-full pl-[40px] pr-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[#111827] focus:ring-1 focus:ring-[#1D4ED8]"
                    />
                    <svg className="absolute left-[12px] top-[14px] text-[#9CA3AF]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>

                <div className="flex gap-[16px] w-full md:w-auto">
                    <select className="flex-1 md:w-[160px] px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[#374151] font-[500]">
                        <option value="">Price Range</option>
                        <option value="0-1000">$0 - $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000+">$2,000+</option>
                    </select>

                    <select className="flex-1 md:w-[160px] px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[#374151] font-[500]">
                        <option value="">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>

                <button className="whitespace-nowrap px-[20px] py-[12px] bg-[#F3F4F6] text-[#111827] font-[600] rounded-[8px] hover:bg-[#E5E7EB] transition-colors border border-[#E5E7EB]">
                    More Filters
                </button>
            </div>
        </Card>
    );
}
