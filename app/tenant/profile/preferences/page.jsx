
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const PREFERENCE_NODES = [
    { id: '1', title: 'High-Yield Asset Focus', desc: 'Prioritize institutional inventory with >5.0% projected annual return.' },
    { id: '2', title: 'Night Protocol (Dark Mode)', desc: 'Recalibrate interface luminosity for low-light engagements.' },
    { id: '3', title: 'Real-time Signal Sync', desc: 'Maintain live websocket connection for high-velocity market deltas.' },
    { id: '4', title: 'Automated Settlement', desc: 'Authorize system to execute monthly assessments on the 1st cycle.' }
];

export default function TenantPreferencesPage() {
    const [activeNodes, setActiveNodes] = useState(['1', '3']);

    const toggleNode = (id) => {
        setActiveNodes(prev => prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]);
    };

    return (
        <div className="max-w-[800px] space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Engagement Logic</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">User Preferences</h1>
                <p className="text-[16px] text-[#6B7280]">Fine-tune the behavioral heuristics of your institutional portal.</p>
            </div>

            <div className="space-y-[16px]">
                {PREFERENCE_NODES.map((node, i) => {
                    const isActive = activeNodes.includes(node.id);
                    return (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card
                                className={`p-[32px] cursor-pointer transition-all duration-300 border ${isActive ? 'bg-[#FFFFFF] border-[#1D4ED8] shadow-[0_4px_20px_rgba(29,78,216,0.1)]' : 'bg-[#F9FAFB] border-[#D1D5DB]/30'}`}
                                onClick={() => toggleNode(node.id)}
                            >
                                <div className="flex items-center justify-between gap-[32px]">
                                    <div className="space-y-[8px]">
                                        <h3 className="text-[16px] font-[700] text-[#111827]">{node.title}</h3>
                                        <p className="text-[14px] text-[#6B7280] leading-[1.6]">{node.desc}</p>
                                    </div>
                                    <div className={`w-[48px] h-[24px] rounded-full relative transition-colors duration-300 ${isActive ? 'bg-[#1D4ED8]' : 'bg-[#D1D5DB]'}`}>
                                        <motion.div
                                            animate={{ x: isActive ? 24 : 4 }}
                                            initial={false}
                                            className="absolute top-[4px] w-[16px] h-[16px] bg-[#FFFFFF] rounded-full shadow-md"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            <div className="pt-[24px] border-t border-[#D1D5DB]/20">
                <p className="text-[12px] text-[#6B7280] leading-[1.6]">
                    Note: Modifying core engagement logic may recalibrate your institutional match percentage
                    and structural notification velocity.
                </p>
            </div>
        </div>
    );
}
