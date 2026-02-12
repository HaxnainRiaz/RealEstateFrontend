
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const EXPENSES = [
    { id: '1', category: 'Maintenance & Repairs', monthly: 8400, ytd: 100800, budget: 120000, trend: '-5.2%' },
    { id: '2', category: 'Property Management', monthly: 4200, ytd: 50400, budget: 50400, trend: '0%' },
    { id: '3', category: 'Insurance', monthly: 2800, ytd: 33600, budget: 36000, trend: '+2.1%' },
    { id: '4', category: 'Property Taxes', monthly: 3600, ytd: 43200, budget: 43200, trend: '0%' },
    { id: '5', category: 'Utilities', monthly: 1200, ytd: 14400, budget: 18000, trend: '-8.4%' },
    { id: '6', category: 'Legal & Professional', monthly: 900, ytd: 10800, budget: 15000, trend: '-12%' }
];

export default function LandlordExpensesPage() {
    const totalMonthly = EXPENSES.reduce((sum, exp) => sum + exp.monthly, 0);
    const totalYTD = EXPENSES.reduce((sum, exp) => sum + exp.ytd, 0);
    const totalBudget = EXPENSES.reduce((sum, exp) => sum + exp.budget, 0);

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Cost Analysis</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Expense Management</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">Comprehensive tracking of operational costs and budget adherence.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
                {[
                    { label: "Monthly Expenses", val: `$${totalMonthly.toLocaleString()}`, sub: "Operational costs" },
                    { label: "YTD Total", val: `$${totalYTD.toLocaleString()}`, sub: "Cumulative spend" },
                    { label: "Budget Remaining", val: `$${(totalBudget - totalYTD).toLocaleString()}`, sub: `${Math.round((1 - totalYTD / totalBudget) * 100)}% available` },
                    { label: "Cost Efficiency", val: "94.2%", sub: "vs industry avg" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                            <p className="text-[9px] md:text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[20px] md:text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                            <p className="text-[11px] md:text-[12px] text-[#6B7280] mt-[4px]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                <div className="lg:col-span-8 space-y-[28px] md:space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-[24px] md:mb-[32px] gap-[16px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Expense Categories</h3>
                            <button className="w-full sm:w-auto px-[16px] py-[8px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[6px] text-[12px] font-[700] text-[#6B7280]">
                                Export Report
                            </button>
                        </div>
                        <div className="space-y-[16px] md:space-y-[20px]">
                            {EXPENSES.map((expense, i) => {
                                const budgetUsed = (expense.ytd / expense.budget) * 100;
                                return (
                                    <motion.div
                                        key={expense.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="p-[20px] md:p-[24px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20 hover:border-[#1D4ED8] transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-[16px]">
                                            <div className="min-w-0 pr-[12px]">
                                                <h4 className="text-[16px] md:text-[17px] font-[700] text-[#111827] mb-[4px] truncate">{expense.category}</h4>
                                                <p className="text-[11px] md:text-[12px] text-[#6B7280]">
                                                    Budget: ${expense.budget.toLocaleString()} • Used: {budgetUsed.toFixed(1)}%
                                                </p>
                                            </div>
                                            <span className={`text-[13px] md:text-[14px] font-[700] shrink-0 ${expense.trend.startsWith('-') ? 'text-[#10B981]' : expense.trend === '0%' ? 'text-[#6B7280]' : 'text-[#EF4444]'}`}>
                                                {expense.trend}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-[16px] md:gap-[24px] mb-[16px]">
                                            <div>
                                                <p className="text-[10px] md:text-[11px] text-[#6B7280] uppercase font-[700] mb-[4px]">Monthly Avg</p>
                                                <p className="text-[18px] md:text-[20px] font-[700] text-[#111827]">${expense.monthly.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] md:text-[11px] text-[#647280] md:text-[#6B7280] uppercase font-[700] mb-[4px]">Year to Date</p>
                                                <p className="text-[18px] md:text-[20px] font-[700] text-[#EF4444]">${expense.ytd.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${budgetUsed > 90 ? 'bg-[#EF4444]' : budgetUsed > 75 ? 'bg-[#F59E0B]' : 'bg-[#1D4ED8]'}`}
                                                style={{ width: `${Math.min(budgetUsed, 100)}%` }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827] mb-[24px] md:mb-[32px]">Expense Trend Analysis</h3>
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px] flex items-center justify-center">
                            <span className="text-[12px] md:text-[14px] font-[600] text-[#D1D5DB]">DYNAMIC EXPENSE CHART</span>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[24px] md:p-[40px] text-white shadow-xl">
                        <h3 className="text-[16px] md:text-[18px] font-[700] mb-[20px] md:mb-[24px]">Cost Reduction Opportunities</h3>
                        <div className="space-y-[16px] md:space-y-[24px]">
                            {[
                                { t: "Preventive Maintenance", v: "-$1,200/mo", d: "Reduce reactive repairs" },
                                { t: "Energy Optimization", v: "-$400/mo", d: "Smart HVAC scheduling" },
                                { t: "Vendor Consolidation", v: "-$600/mo", d: "Volume discounts" }
                            ].map(item => (
                                <div key={item.t} className="p-[16px] md:p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[8px]">
                                    <div className="flex justify-between items-center gap-[8px]">
                                        <h4 className="text-[13px] md:text-[14px] font-[700] truncate">{item.t}</h4>
                                        <span className="text-[14px] md:text-[16px] font-[800] text-[#10B981] shrink-0">{item.v}</span>
                                    </div>
                                    <p className="text-[11px] md:text-[12px] text-white/50">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[24px] md:mt-[32px] py-[14px] bg-[#1D4ED8] text-white font-[700] rounded-[8px] hover:bg-[#2563EB] transition-all text-[12px] md:text-[13px]">
                            Generate Savings Plan
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[20px]">Expense Distribution</h4>
                        <div className="space-y-[16px] md:space-y-[20px]">
                            {EXPENSES.slice(0, 3).map(exp => {
                                const percentage = ((exp.monthly / totalMonthly) * 100).toFixed(1);
                                return (
                                    <div key={exp.id} className="space-y-[8px]">
                                        <div className="flex justify-between text-[11px] md:text-[12px] font-[700]">
                                            <span className="text-[#6B7280] uppercase tracking-[0.05em] truncate pr-[8px]">{exp.category}</span>
                                            <span className="shrink-0">{percentage}%</span>
                                        </div>
                                        <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#EF4444]" style={{ width: `${percentage}%` }} />
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="pt-[12px] border-t border-[#D1D5DB]/20">
                                <p className="text-[10px] md:text-[11px] text-[#6B7280]">Other categories: {((EXPENSES.slice(3).reduce((sum, exp) => sum + exp.monthly, 0) / totalMonthly) * 100).toFixed(1)}%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
