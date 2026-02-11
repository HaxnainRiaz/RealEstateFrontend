"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card'; // Assuming Card exists as seen in previous files

export default function FeatureCard({ icon, title, description, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <Card className="h-full bg-[#FFFFFF] p-[32px] border border-[#E5E7EB] hover:border-[#1D4ED8] hover:shadow-lg transition-all duration-300 group">
                <div className="w-[56px] h-[56px] bg-[#F3F4F6] rounded-[16px] flex items-center justify-center text-[#1D4ED8] mb-[24px] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-colors duration-300">
                    {icon}
                </div>

                <h3 className="text-[20px] font-[700] text-[#111827] mb-[12px] group-hover:text-[#1D4ED8] transition-colors">{title}</h3>
                <p className="text-[16px] text-[#6B7280] leading-[1.6]">{description}</p>
            </Card>
        </motion.div>
    );
}
