"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PropertyTableRow({ property, idx }) {
    if (!property) return null;

    return (
        <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group hover:bg-[#F9FAFB] transition-colors"
        >
            <td className="py-[20px] px-[24px]">
                <div className="flex items-center gap-[16px]">
                    <div className="w-[60px] h-[60px] rounded-[10px] overflow-hidden flex-shrink-0 border border-[#E5E7EB]">
                        <img src={property.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-[14px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{property.title}</p>
                        <p className="text-[12px] text-[#6B7280]">{property.address}</p>
                    </div>
                </div>
            </td>
            <td className="py-[20px] px-[24px]">
                <span className={`px-[10px] py-[4px] rounded-[6px] text-[11px] font-[800] uppercase tracking-[0.05em] 
                    ${property.status === 'occupied' ? 'bg-[#10B981]/10 text-[#10B981]'
                        : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                    {property.status}
                </span>
            </td>
            <td className="py-[20px] px-[24px] text-[14px] font-[700] text-[#111827]">
                ${property.price.toLocaleString()}
            </td>
            <td className="py-[20px] px-[24px]">
                <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#E5E7EB]" />
                    <span className="text-[14px] font-[600] text-[#374151]">John Wick</span>
                </div>
            </td>
            <td className="py-[20px] px-[24px] text-right">
                <div className="flex justify-end gap-[12px]">
                    <button className="p-[8px] text-[#9CA3AF] hover:text-[#1D4ED8] hover:bg-[#1D4ED8]/10 rounded-[6px] transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                    </button>
                    <button className="p-[8px] text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6] rounded-[6px] transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                </div>
            </td>
        </motion.tr>
    );
}
