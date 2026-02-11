"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Stepper({ steps = [], currentStep = 0 }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between relative">
                {/* Connection Line */}
                <div className="absolute top-[20px] left-0 w-full h-[2px] bg-[#F3F4F6] -z-10" />

                {steps.map((step, idx) => {
                    const isCompleted = idx < currentStep;
                    const isActive = idx === currentStep;

                    return (
                        <div key={idx} className="flex flex-col items-center gap-[12px] bg-[#FFFFFF] px-[12px]">
                            <motion.div
                                initial={false}
                                animate={{
                                    backgroundColor: isCompleted || isActive ? '#1D4ED8' : '#F3F4F6',
                                    color: isCompleted || isActive ? '#FFFFFF' : '#9CA3AF',
                                    scale: isActive ? 1.1 : 1
                                }}
                                className={`
                                    w-[40px] h-[40px] rounded-full flex items-center justify-center 
                                    text-[14px] font-[700] border-[4px] border-[#FFFFFF]
                                `}
                            >
                                {isCompleted ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                ) : (
                                    idx + 1
                                )}
                            </motion.div>

                            <div className="text-center">
                                <p className={`text-[12px] font-[700] uppercase tracking-[0.05em] ${isActive ? 'text-[#1D4ED8]' : isCompleted ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>
                                    {step.title}
                                </p>
                                {step.subtitle && (
                                    <p className="text-[10px] text-[#6B7280]">{step.subtitle}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
