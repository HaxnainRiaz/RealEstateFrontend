"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

const data = [
    { label: "Occupied", value: 85, color: "#10B981" },
    { label: "Pending", value: 10, color: "#FBBF24" },
    { label: "Vacant", value: 5, color: "#EF4444" }
];

export default function VacancyChart() {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    let currentDegree = 0;

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB] h-full flex flex-col items-center justify-center">
            <h3 className="text-[18px] font-[700] text-[#111827] mb-[24px] self-start w-full">Asset Utilization</h3>

            <div className="relative w-[200px] h-[200px]">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                    {data.map((item, i) => {
                        const degrees = (item.value / total) * 360;
                        const dashArray = `${degrees} 360`;
                        const offset = -currentDegree;
                        currentDegree += degrees;

                        return (
                            <circle
                                key={i}
                                cx="50"
                                cy="50"
                                r="40"
                                stroke={item.color}
                                strokeWidth="20"
                                fill="none"
                                strokeDasharray={dashArray}
                                strokeDashoffset={offset}
                                className="transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer"
                            />
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-[32px] font-[800] text-[#111827]">94%</span>
                    <span className="text-[12px] text-[#6B7280] uppercase tracking-[0.05em]">Utilized</span>
                </div>
            </div>

            <div className="flex gap-[16px] mt-[32px] w-full justify-center">
                {data.map((item, i) => (
                    <div key={i} className="flex items-center gap-[6px]">
                        <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-[12px] font-[600] text-[#374151]">{item.label}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
