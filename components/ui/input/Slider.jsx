"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Continuous Scale Logic Controller
 * Manages institutional ranges and thresholds via a horizontal interaction node.
 */
export default function Slider({
    label,
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange,
    unit = "",
    className = ""
}) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={`flex flex-col gap-[12px] ${className}`}>
            <div className="flex justify-between items-center">
                {label && (
                    <label className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">
                        {label}
                    </label>
                )}
                <span className="text-[14px] font-[800] text-[#111827]">
                    {value.toLocaleString()}{unit}
                </span>
            </div>

            <div className="relative h-[24px] flex items-center">
                {/* Track */}
                <div className="absolute w-full h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className="h-full bg-[#1D4ED8]"
                    />
                </div>

                {/* Input node (invisible for interaction) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                />

                {/* Thumb node (visual only) */}
                <motion.div
                    animate={{ left: `${percentage}%` }}
                    className="absolute w-[18px] h-[18px] bg-[#FFFFFF] border-[3px] border-[#1D4ED8] rounded-full shadow-lg -translate-x-1/2 pointer-events-none z-20"
                />
            </div>

            <div className="flex justify-between text-[11px] font-[600] text-[#9CA3AF]">
                <span>{min.toLocaleString()}{unit}</span>
                <span>{max.toLocaleString()}{unit}</span>
            </div>
        </div>
    );
}
