"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PropertyGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="space-y-[16px]">
            {/* Main Image */}
            <div
                className="relative h-[400px] md:h-[600px] w-full bg-[#111827] rounded-[16px] overflow-hidden cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
            >
                <motion.img
                    key={selectedImage}
                    src={images[selectedImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    alt="Property View"
                />

                <div className="absolute top-[24px] right-[24px] bg-[#111827]/80 backdrop-blur-sm px-[16px] py-[8px] rounded-[32px] text-[#FFFFFF] text-[14px] font-[600]">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-[16px] overflow-x-auto pb-[8px] hide-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-[100px] h-[80px] md:w-[120px] md:h-[100px] flex-shrink-0 rounded-[12px] overflow-hidden transition-all ${selectedImage === idx ? 'ring-2 ring-[#1D4ED8] ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#000000]/90 flex items-center justify-center p-[24px]"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <div className="relative max-w-[90vw] max-h-[90vh]">
                            <img
                                src={images[selectedImage]}
                                alt="Fullscreen View"
                                className="max-w-full max-h-[85vh] object-contain rounded-[8px]"
                            />
                            <button
                                className="absolute top-[-48px] right-0 text-[#FFFFFF] hover:text-[#D1D5DB]"
                                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
