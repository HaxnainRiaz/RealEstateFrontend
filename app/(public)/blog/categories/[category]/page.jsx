
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const MOCK_POSTS = [
    { slug: 'future-of-renting', title: 'The Future of Institutional Renting', date: 'Oct 24, 2023', author: 'Markus Vance' },
    { slug: 'optimizing-yield', title: 'Optimizing Portfolio Yield thru Automation', date: 'Oct 20, 2023', author: 'Sarah Chen' },
];

export default function BlogCategoryPage() {
    const { category } = useParams();
    const formattedCategory = category.replace(/-/g, ' ');

    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/blog" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to Research
                </Link>
                <SectionHeader
                    subtitle="Category Archive"
                    title={`Insights in ${formattedCategory}`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] mt-[64px]">
                    {MOCK_POSTS.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div className="aspect-video bg-[#F9FAFB] rounded-[24px] mb-[24px] overflow-hidden border border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] transition-colors" />
                                <div className="space-y-[12px]">
                                    <h3 className="text-[24px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{post.title}</h3>
                                    <div className="flex items-center gap-[12px] text-[14px] text-[#6B7280]">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
