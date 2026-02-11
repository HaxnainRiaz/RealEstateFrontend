"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

const TASKS = [
    { title: "Upcoming Rent Payment", date: "Due in 3 days", type: "financial", status: "pending" },
    { title: "HVAC Filter Change", date: "Schedule Maintenance", type: "maintenance", status: "open" }
];

export default function UpcomingTasks() {
    return (
        <Card className="bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] p-[24px]">
            <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[18px] font-[700] text-[#111827]">Action Items</h3>
                <button className="text-[12px] font-[600] text-[#1D4ED8] hover:underline">View All</button>
            </div>

            <div className="space-y-[16px]">
                {TASKS.length > 0 ? (
                    TASKS.map((task, i) => (
                        <div key={i} className="flex items-center justify-between p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] hover:border-[#D1D5DB] transition-colors cursor-pointer group">
                            <div className="flex items-center gap-[16px]">
                                <div className={`w-[8px] h-[8px] rounded-full ${task.type === 'financial' ? 'bg-[#F59E0B]' : 'bg-[#10B981]'}`} />
                                <div>
                                    <h4 className="text-[14px] font-[600] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{task.title}</h4>
                                    <p className="text-[12px] text-[#6B7280]">{task.date}</p>
                                </div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D1D5DB] group-hover:text-[#1D4ED8] transition-colors"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-[24px] text-[#9CA3AF] text-[14px]">No pending actions</div>
                )}
            </div>
        </Card>
    );
}
