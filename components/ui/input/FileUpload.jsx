"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FileUpload({
    label,
    onFilesSelected,
    accept = "*",
    multiple = false,
    className = ""
}) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => multiple ? [...prev, ...files] : files);
        if (onFilesSelected) onFilesSelected(multiple ? [...selectedFiles, ...files] : files);
    };

    const removeFile = (index) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        if (onFilesSelected) onFilesSelected(newFiles);
    };

    return (
        <div className={`space-y-[8px] w-full ${className}`}>
            {label && <p className="text-[14px] font-[600] text-[#111827]">{label}</p>}

            <div className="relative border-2 border-dashed border-[#D1D5DB] rounded-[12px] p-[24px] hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all group flex flex-col items-center justify-center text-center cursor-pointer">
                <input
                    type="file"
                    multiple={multiple}
                    accept={accept}
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="w-[40px] h-[40px] bg-[#F3F4F6] rounded-full flex items-center justify-center mb-[12px] text-[#9CA3AF] group-hover:text-[#1D4ED8] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <p className="text-[14px] font-[600] text-[#374151]">Click or drag to upload</p>
                <p className="text-[12px] text-[#6B7280]">Files up to 10MB</p>
            </div>

            <AnimatePresence>
                {selectedFiles.length > 0 && (
                    <div className="mt-[16px] space-y-[8px]">
                        {selectedFiles.map((file, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex items-center justify-between p-[12px] bg-[#F9FAFB] rounded-[8px] border border-[#F3F4F6]"
                            >
                                <div className="flex items-center gap-[12px]">
                                    <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-[6px] flex items-center justify-center text-[#1D4ED8] border border-[#E5E7EB]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[13px] font-[600] text-[#111827] truncate max-w-[200px]">{file.name}</p>
                                        <p className="text-[11px] text-[#6B7280]">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFile(idx)}
                                    className="p-[6px] text-[#9CA3AF] hover:text-[#EF4444] transition-colors"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
