"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function AmenitiesList({ amenities }) {
    if (!amenities || amenities.length === 0) return null;

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB] mt-[32px]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Asset Features</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px]">
                {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-[12px] p-[12px] bg-[#F9FAFB] rounded-[8px] hover:bg-[#F3F4F6] transition-colors">
                        <div className="w-[16px] h-[16px] rounded-full bg-[#10B981]/20 flex items-center justify-center">
                            <div className="w-[6px] h-[6px] rounded-full bg-[#10B981]" />
                        </div>
                        <span className="text-[14px] font-[600] text-[#374151]">{amenity}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
