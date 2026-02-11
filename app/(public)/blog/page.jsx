
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

const POSTS = [
    { slug: 'future-of-renting', title: 'The Future of Institutional Renting', cat: 'Market Insights', date: 'Oct 24, 2023', author: 'Markus Vance' },
    { slug: 'optimizing-yield', title: 'Optimizing Portfolio Yield thru Automation', cat: 'Strategy', date: 'Oct 20, 2023', author: 'Sarah Chen' },
    { slug: 'tenant-experience', title: 'The Correlation Between UX and Retention', cat: 'Product', date: 'Oct 15, 2023', author: 'David Ross' },
    { slug: 'regulatory-shift', title: 'Navigating New Real Estate Regulations', cat: 'Compliance', date: 'Oct 12, 2023', author: 'Elena Grant' },
];

export default function BlogPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <SectionHeader
                    subtitle="Research & Insights"
                    title="Tirios Intel"
                />

                {/* Featured Post */}
                <Link href="/blog/future-of-renting" className="group">
                    <div className="relative h-[500px] rounded-[32px] overflow-hidden mb-[80px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent z-10" />
                        <div className="absolute inset-0 bg-[#F3F4F6] z-0" /> {/* Placeholder for image */}
                        <div className="absolute bottom-[64px] left-[64px] right-[64px] z-20">
                            <span className="px-[12px] py-[6px] bg-[#1D4ED8] text-[#FFFFFF] text-[12px] font-[700] uppercase rounded-[4px] mb-[24px] inline-block">
                                Featured Insight
                            </span>
                            <h2 className="text-[48px] font-[700] text-[#FFFFFF] tracking-[-0.01em] leading-[1.1] mb-[24px] group-hover:translate-x-[10px] transition-transform duration-500">
                                The shift towards institutional <br />ownership in mid-tier markets.
                            </h2>
                            <div className="flex items-center gap-[24px] text-[14px] text-[#FFFFFF]/60">
                                <span className="font-[600]">Markus Vance</span>
                                <span>•</span>
                                <span>12 min read</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Categories Bar */}
                <div className="flex flex-wrap gap-[12px] mb-[64px]">
                    {['All Insights', 'Market Analysis', 'Yield Strategy', 'Product Updates', 'Legal & Compliance'].map((cat, i) => (
                        <button key={cat} className={`px-[24px] py-[12px] rounded-[100px] border text-[14px] font-[600] transition-all ${i === 0 ? 'bg-[#111827] text-[#FFFFFF] border-[#111827]' : 'border-[#D1D5DB] text-[#6B7280] hover:border-[#111827] hover:text-[#111827]'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                    {POSTS.map((post, i) => (
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
                                    <span className="text-[#1D4ED8] text-[12px] font-[700] uppercase tracking-[0.05em]">{post.cat}</span>
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

            {/* Newsletter */}
            <Section className="bg-[#111827] text-[#FFFFFF]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-[48px]">
                    <div className="max-w-[500px]">
                        <h2 className="text-[32px] font-[700] mb-[16px]">Secure the Intel payoff.</h2>
                        <p className="text-[#FFFFFF]/60 leading-[1.6]">Weekly briefings on institutional market shifts, yield optimization protocols, and ecosystem updates.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-[12px]">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-[#FFFFFF] px-[24px] py-[16px] rounded-[8px] flex-grow md:w-[320px] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        />
                        <button className="bg-[#FFFFFF] text-[#111827] font-[600] px-[32px] py-[16px] rounded-[8px] hover:bg-[#F3F4F6] transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
