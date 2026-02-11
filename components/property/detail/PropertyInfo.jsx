"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function PropertyInfo({ property }) {
    if (!property) return null;

    const stats = [
        { label: "Price", value: `$${property.price.toLocaleString()}` },
        { label: "Beds", value: property.beds },
        { label: "Baths", value: property.baths },
        { label: "Sqft", value: property.sqft.toLocaleString() },
        { label: "Yield", value: property.yield, highlight: true }
    ];

    return (
        <Card className="p-[32px] bg-[#FFFFFF] shadow-lg rounded-[16px] border border-[#E5E7EB]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-start mb-[24px]">
                    <div>
                        <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">
                            {property.category} Asset
                        </span>
                        <h1 className="text-[32px] font-[800] text-[#111827] leading-[1.2] mb-[8px]">
                            {property.title}
                        </h1>
                        <p className="text-[16px] text-[#6B7280] flex items-center gap-[6px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {property.address}
                        </p>
                    </div>
                    <span className={`px-[12px] py-[6px] rounded-[6px] text-[12px] font-[700] uppercase ${property.status === 'available' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                        {property.status}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-[16px] mb-[32px] bg-[#F9FAFB] p-[16px] rounded-[12px]">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center border-r last:border-0 border-[#E5E7EB]">
                            <p className="text-[12px] text-[#6B7280] uppercase tracking-[0.05em] mb-[4px]">{stat.label}</p>
                            <p className={`text-[18px] font-[700] ${stat.highlight ? 'text-[#1D4ED8]' : 'text-[#111827]'}`}>
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="prose max-w-none text-[#4B5563] leading-[1.8]">
                    <h3 className="text-[20px] font-[700] text-[#111827] mb-[16px]">Asset Overview</h3>
                    <p>{property.description}</p>
                </div>
            </motion.div>
        </Card>
    );
}
