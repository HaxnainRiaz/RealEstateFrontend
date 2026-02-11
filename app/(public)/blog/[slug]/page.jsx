
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/shared/layout/Section';
import { useParams } from 'next/navigation';

export default function BlogPostDetail() {
    const { slug } = useParams();

    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <article>
                {/* Article Header */}
                <section className="px-[80px] mb-[80px]">
                    <div className="max-w-[800px] mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/blog" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                                ← Back to Research
                            </Link>
                            <h1 className="text-[56px] font-[700] text-[#111827] leading-[1.1] tracking-[-0.02em] mb-[32px] capitalize">
                                {slug.replace(/-/g, ' ')}
                            </h1>
                            <div className="flex items-center justify-center gap-[16px] text-[16px] text-[#6B7280]">
                                <img src="/api/placeholder/40/40" className="w-[40px] h-[40px] rounded-full bg-[#F3F4F6]" alt="Author" />
                                <span className="font-[600] text-[#111827]">Markus Vance</span>
                                <span>•</span>
                                <span>Oct 24, 2023</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Image Placeholder */}
                <section className="px-[80px] mb-[80px]">
                    <div className="max-w-[1000px] mx-auto h-[500px] bg-[#F9FAFB] rounded-[32px] border border-[#D1D5DB]/30" />
                </section>

                {/* Article Content */}
                <section className="px-[80px] pb-[120px]">
                    <div className="max-w-[720px] mx-auto">
                        <div className="prose prose-lg prose-slate text-[18px] text-[#111827] leading-[1.8] space-y-[32px]">
                            <p className="font-[600] text-[22px] leading-[1.5]">
                                The professionalization of the single-family rental market is no longer a trend—it is the new baseline.
                                As capital flows towards sophisticated management protocols, the definition of "home" is being re-engineered for efficiency and scale.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h2 className="text-[32px] font-[700] tracking-[-0.01em] pt-[24px]">1. The Yield Efficiency Protocol</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="p-[40px] bg-[#F9FAFB] border-l-[4px] border-[#1D4ED8] rounded-r-[16px] my-[48px]">
                                <p className="italic font-[500] text-[#6B7280]">
                                    "The gap between retail property ownership and institutional asset management is closing,
                                    driven by the democratization of high-velocity data and automated workflows."
                                </p>
                            </div>
                            <h2 className="text-[32px] font-[700] tracking-[-0.01em] pt-[24px]">2. Impact on Tenant Retention</h2>
                            <p>
                                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
                                est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                            </p>
                        </div>

                        {/* Tags & Share */}
                        <div className="mt-[80px] pt-[40px] border-t border-[#D1D5DB] flex flex-wrap justify-between items-center gap-[24px]">
                            <div className="flex gap-[12px]">
                                {['Strategy', 'Market Data', 'Real Estate'].map(tag => (
                                    <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`} className="px-[16px] py-[8px] bg-[#F3F4F6] rounded-[4px] text-[12px] font-[600] text-[#6B7280] hover:text-[#111827]">
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex gap-[16px]">
                                <button className="text-[14px] font-[600] text-[#6B7280] hover:text-[#1D4ED8]">Share on X</button>
                                <button className="text-[14px] font-[600] text-[#6B7280] hover:text-[#1D4ED8]">Share on LinkedIn</button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            {/* Recommended Reading */}
            <Section className="bg-[#F9FAFB] border-t border-[#D1D5DB]/30">
                <h2 className="text-[28px] font-[700] mb-[48px]">Related Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                    {[1, 2, 3].map(i => (
                        <Link key={i} href="#" className="group block">
                            <div className="aspect-[16/10] bg-[#FFFFFF] rounded-[16px] mb-[20px] border border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] transition-all" />
                            <h4 className="text-[18px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">Strategic Asset Allocation in Q4 2023</h4>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
