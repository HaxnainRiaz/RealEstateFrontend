"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Tabular Ledger Matrix
 * A high-density data interface for multi-dimensional forensic comparisons.
 */
export default function Table({
    headers = [],
    data = [],
    renderRow,
    className = ""
}) {
    return (
        <div className={`w-full overflow-x-auto rounded-[16px] border border-[#E5E7EB] bg-[#FFFFFF] ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#F9FAFB] border-b border-[#F3F4F6]">
                        {headers.map((header, idx) => (
                            <th
                                key={idx}
                                className="px-[24px] py-[16px] text-[12px] font-[800] uppercase tracking-[0.1em] text-[#9CA3AF]"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F9FAFB]">
                    {data.map((item, idx) => (
                        <motion.tr
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group hover:bg-[#F9FAFB] transition-colors"
                        >
                            {renderRow ? renderRow(item, idx) : (
                                Object.values(item).map((val, vidx) => (
                                    <td key={vidx} className="px-[24px] py-[20px] text-[14px] text-[#374151] font-[600]">
                                        {val}
                                    </td>
                                ))
                            )}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
