"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function TenantFilters() {
    return (
        <Card className="p-[20px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mb-[24px]">
            <div className="flex flex-col md:flex-row gap-[16px]">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Search by name, email, or unit"
                        className="w-full pl-[40px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[14px]"
                    />
                    <svg className="absolute left-[12px] top-[12px] text-[#9CA3AF]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>

                <div className="flex gap-[12px]">
                    <select className="px-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[14px] font-[600] text-[#374151]">
                        <option value="">Lease Status</option>
                        <option value="active">Active</option>
                        <option value="expiring">Expiring Soon</option>
                        <option value="past">Historic</option>
                    </select>

                    <select className="px-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[14px] font-[600] text-[#374151]">
                        <option value="">Payment Status</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="overdue">Overdue</option>
                    </select>
                </div>
            </div>
        </Card>
    );
}
