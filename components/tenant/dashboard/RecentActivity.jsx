"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

const ACTIVITIES = [
    { title: "Rent Confirmed", date: "Oct 24", type: "financial", amount: "-$3,850.00" },
    { title: "Maintenance Completed", date: "Oct 12", type: "maintenance", desc: "HVAC Filter Change" },
    { title: "Lease Document Signed", date: "Sep 01", type: "legal", desc: "Renewal Addendum" }
];

export default function RecentActivity() {
    return (
        <Card className="bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] p-[24px]">
            <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[18px] font-[700] text-[#111827]">Recent Activity</h3>
                <button className="text-[12px] font-[600] text-[#1D4ED8] hover:underline">View Ledger</button>
            </div>

            <div className="relative border-l border-[#E5E7EB] ml-[8px]">
                {ACTIVITIES.map((activity, i) => (
                    <div key={i} className="mb-[24px] last:mb-0 ml-[24px] relative">
                        <div className={`absolute -left-[30px] w-[12px] h-[12px] rounded-full border-[2px] border-[#FFFFFF] ${activity.type === 'financial' ? 'bg-[#10B981]' : activity.type === 'legal' ? 'bg-[#1D4ED8]' : 'bg-[#F59E0B]'}`} />

                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-[14px] font-[600] text-[#111827]">{activity.title}</h4>
                                <p className="text-[12px] text-[#6B7280]">{activity.desc || activity.amount}</p>
                            </div>
                            <span className="text-[12px] font-[500] text-[#9CA3AF] self-start py-[2px]">{activity.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
