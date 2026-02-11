"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhotoUploader() {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Forensic Documentation</h3>

            <div className="border-2 border-dashed border-[#E5E7EB] rounded-[12px] p-[40px] flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all relative">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="w-[48px] h-[48px] bg-[#F3F4F6] rounded-full flex items-center justify-center mb-[16px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9CA3AF]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <p className="text-[16px] font-[600] text-[#374151]">Click to upload or drag and drop</p>
                <p className="text-[14px] text-[#6B7280] mt-[4px]">High-resolution images (max 10MB each)</p>
            </div>

            <div className="mt-[24px] grid grid-cols-2 sm:grid-cols-4 gap-[16px]">
                <AnimatePresence>
                    {files.map((file, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative aspect-square bg-[#F3F4F6] rounded-[8px] overflow-hidden group"
                        >
                            <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="p-[8px] bg-[#EF4444] text-[#FFFFFF] rounded-full hover:bg-[#DC2626] transition-colors"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Card>
    );
}
