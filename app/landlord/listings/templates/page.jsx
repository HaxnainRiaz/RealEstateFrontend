
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

const TEMPLATES = [
    {
        id: 'TPL-001',
        name: 'Modern Residential Standard',
        category: 'Residential',
        description: 'Pre-configured template for contemporary residential units with standard amenities.',
        features: ['Central HVAC', 'In-Unit Laundry', 'Hardwood Floors', 'Stainless Appliances'],
        priceRange: '$2,000 - $5,000',
        uses: 142
    },
    {
        id: 'TPL-002',
        name: 'Luxury High-Rise Protocol',
        category: 'Residential',
        description: 'Premium template for high-end residential assets with institutional-grade features.',
        features: ['Concierge Service', 'Rooftop Access', 'Smart Home', 'Premium Finishes'],
        priceRange: '$5,000 - $12,000',
        uses: 87
    },
    {
        id: 'TPL-003',
        name: 'Commercial Office Node',
        category: 'Commercial',
        description: 'Standardized template for commercial office spaces with flexible configurations.',
        features: ['Open Floor Plan', 'Conference Rooms', 'High-Speed Internet', 'Parking'],
        priceRange: '$3,500 - $8,000',
        uses: 64
    },
    {
        id: 'TPL-004',
        name: 'Industrial Warehouse',
        category: 'Industrial',
        description: 'Template optimized for warehouse and industrial storage facilities.',
        features: ['Loading Dock', 'High Ceilings', 'Climate Control', 'Security System'],
        priceRange: '$6,000 - $15,000',
        uses: 38
    }
];

export default function LandlordListingTemplatesPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Rapid Deployment</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Asset Templates</h1>
                    <p className="text-[16px] text-[#6B7280]">Pre-configured asset protocols for accelerated marketplace deployment.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">
                    Create Custom Template
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {[
                    { label: "Active Templates", val: "12 Protocols" },
                    { label: "Total Deployments", val: "331 Assets" },
                    { label: "Avg Time Saved", val: "82%" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] text-center">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {TEMPLATES.map((template, i) => (
                    <motion.div
                        key={template.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] hover:border-[#1D4ED8] transition-all group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-[24px]">
                                <div>
                                    <span className="px-[10px] py-[4px] bg-[#F3F4F6] text-[#6B7280] text-[10px] font-[700] uppercase rounded-[4px]">
                                        {template.category}
                                    </span>
                                    <h3 className="text-[20px] font-[700] text-[#111827] mt-[12px] group-hover:text-[#1D4ED8] transition-colors">
                                        {template.name}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[11px] text-[#6B7280] uppercase font-[700]">Deployments</p>
                                    <p className="text-[18px] font-[700] text-[#1D4ED8]">{template.uses}</p>
                                </div>
                            </div>

                            <p className="text-[14px] text-[#6B7280] leading-[1.6] mb-[24px]">{template.description}</p>

                            <div className="space-y-[16px] mb-[24px]">
                                <h4 className="text-[13px] font-[700] text-[#111827] uppercase tracking-[0.05em]">Included Features</h4>
                                <div className="grid grid-cols-2 gap-[8px]">
                                    {template.features.map(feature => (
                                        <div key={feature} className="flex items-center gap-[8px] text-[13px] text-[#6B7280]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]"><polyline points="20 6 9 17 4 12" /></svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-[24px] border-t border-[#D1D5DB]/20">
                                <div className="flex justify-between items-center mb-[16px]">
                                    <span className="text-[12px] text-[#6B7280] font-[600]">Typical Yield Range</span>
                                    <span className="text-[14px] font-[700] text-[#111827]">{template.priceRange}</span>
                                </div>
                                <div className="flex gap-[12px]">
                                    <button className="flex-grow py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                        Use Template
                                    </button>
                                    <button className="px-[20px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#111827] border-none p-[64px] text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#1D4ED8]/20 rounded-full blur-[100px]" />
                <div className="relative z-10 space-y-[24px]">
                    <h3 className="text-[24px] font-[700]">Custom Template Builder</h3>
                    <p className="text-[16px] text-white/50 max-w-[600px] mx-auto leading-[1.8]">
                        Create your own reusable templates with custom fields, pricing structures, and feature sets tailored to your portfolio's unique requirements.
                    </p>
                    <div className="flex justify-center gap-[16px]">
                        <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-white font-[700] rounded-[12px] shadow-2xl hover:bg-[#2563EB] transition-all">
                            Launch Template Builder
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
