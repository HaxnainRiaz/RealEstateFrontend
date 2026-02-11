"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function LocalAmenities({ neighborhood }) {
    if (!neighborhood) return null;

    const categories = [
        { name: 'Transport', icon: 'M4 8h16M4 16h16', items: neighborhood.transport },
        { name: 'Schools', icon: 'M12 4L4 8l8 4 8-4-8-4z M4 8v8l8 4 8-4V8', items: neighborhood.schools },
        { name: 'Lifestyle', icon: 'M12 2a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5z', items: neighborhood.lifestyle }
    ];

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB] mt-[32px]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Neighborhood Context</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <div className="flex items-center gap-[12px] mb-[16px]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1D4ED8]">
                                <path d={cat.icon} />
                            </svg>
                            <h4 className="text-[16px] font-[700] text-[#374151]">{cat.name}</h4>
                        </div>
                        <ul className="space-y-[12px]">
                            {cat.items?.map((item, i) => (
                                <li key={i} className="flex justify-between text-[14px] text-[#6B7280]">
                                    <span>{item.name}</span>
                                    <span className="font-[600] text-[#111827]">{item.distance}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Card>
    );
}
