"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';

export default function PropertyGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px]">
            {MOCK_ASSETS.map((property, idx) => (
                <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Link href={`/landlord/properties/${property.id}`}>
                        <Card className="bg-[#FFFFFF] p-0 rounded-[20px] overflow-hidden border border-[#E5E7EB] hover:border-[#1D4ED8] hover:shadow-2xl transition-all group h-full flex flex-col">
                            <div className="relative h-[240px] overflow-hidden">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-[20px] left-[20px] bg-[#FFFFFF]/90 backdrop-blur-md px-[12px] py-[6px] rounded-[10px] text-[12px] font-[800] text-[#111827] shadow-sm">
                                    {property.category}
                                </div>
                                <div className={`absolute bottom-[20px] right-[20px] px-[12px] py-[6px] rounded-[8px] text-[10px] font-[800] uppercase tracking-[0.1em] text-[#FFFFFF] shadow-sm
                                    ${property.status === 'occupied' ? 'bg-[#10B981]' : 'bg-[#EF4444]'}`}>
                                    {property.status}
                                </div>
                            </div>

                            <div className="p-[28px] flex flex-col flex-1">
                                <div className="mb-[20px]">
                                    <h3 className="text-[20px] font-[800] text-[#111827] mb-[6px] line-clamp-1 group-hover:text-[#1D4ED8] transition-colors">{property.title}</h3>
                                    <p className="text-[14px] text-[#6B7280] flex items-center gap-[6px]">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        {property.address}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-[16px] mb-[28px] py-[16px] border-y border-[#F3F4F6]">
                                    <div>
                                        <p className="text-[10px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] mb-[4px]">Yield (Mo)</p>
                                        <p className="text-[18px] font-[800] text-[#111827]">${property.price.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-[700] uppercase tracking-[0.1em] text-[#9CA3AF] mb-[4px]">Active Tenant</p>
                                        <p className="text-[14px] font-[700] text-[#374151]">John Carlson</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex -space-x-[12px]">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-[32px] h-[32px] rounded-full border-[2px] border-[#FFFFFF] bg-[#F3F4F6] overflow-hidden">
                                                <img src={`https://i.pravatar.cc/32?img=${idx + i}`} alt="User" />
                                            </div>
                                        ))}
                                        <div className="w-[32px] h-[32px] rounded-full border-[2px] border-[#FFFFFF] bg-[#111827] flex items-center justify-center text-[10px] font-[700] text-[#FFFFFF]">
                                            +2
                                        </div>
                                    </div>
                                    <span className="text-[12px] font-[700] text-[#1D4ED8] flex items-center gap-[4px]">
                                        Manage Asset
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
