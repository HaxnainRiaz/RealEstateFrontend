
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function LandlordBulkListingsPage() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [validationResults, setValidationResults] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedFile(file);
            // Simulate validation
            setTimeout(() => {
                setValidationResults({
                    total: 24,
                    valid: 22,
                    warnings: 2,
                    errors: 0
                });
            }, 1500);
        }
    };

    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            // Redirect or show success
        }, 3000);
    };

    return (
        <div className="max-w-[1000px] mx-auto space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Mass Deployment</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Bulk Asset Upload</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">Deploy multiple asset nodes simultaneously via CSV/Excel protocol.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                {/* Upload Zone */}
                <div className="lg:col-span-8 space-y-[24px] md:space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px] shadow-sm">
                        <h3 className="text-[17px] md:text-[18px] font-[700] text-[#111827] mb-[20px] md:mb-[24px]">Upload Asset Ledger</h3>

                        <label className="block">
                            <input
                                type="file"
                                accept=".csv,.xlsx,.xls"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <div className="p-[32px] md:p-[64px] bg-[#F9FAFB] border-2 border-dashed border-[#D1D5DB] rounded-[24px] text-center cursor-pointer hover:bg-[#F3F4F6] transition-all space-y-[20px] md:space-y-[24px]">
                                <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mx-auto text-[#1D4ED8]">
                                    <svg className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                </div>
                                <div className="px-[12px]">
                                    <h4 className="text-[16px] md:text-[18px] font-[700] text-[#111827] mb-[8px] break-all">
                                        {uploadedFile ? uploadedFile.name : 'Select CSV or Excel File'}
                                    </h4>
                                    <p className="text-[13px] md:text-[14px] text-[#6B7280]">
                                        {uploadedFile ? 'File loaded successfully. Click to replace.' : 'Drag and drop or click to browse'}
                                    </p>
                                </div>
                                <p className="text-[11px] md:text-[12px] text-[#D1D5DB] font-[600]">Supported: CSV, XLSX, XLS • Max: 10MB • Up to 500 assets</p>
                            </div>
                        </label>

                        {validationResults && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-[24px] md:mt-[32px] p-[20px] md:p-[32px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/30"
                            >
                                <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[16px] md:mb-[20px]">Validation Results</h4>
                                <div className="grid grid-cols-2 xs:grid-cols-4 gap-[12px] md:gap-[16px]">
                                    <div className="text-center p-[12px] md:p-[16px] bg-white rounded-[12px]">
                                        <p className="text-[20px] md:text-[24px] font-[700] text-[#111827]">{validationResults.total}</p>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Total</p>
                                    </div>
                                    <div className="text-center p-[12px] md:p-[16px] bg-white rounded-[12px]">
                                        <p className="text-[20px] md:text-[24px] font-[700] text-[#10B981]">{validationResults.valid}</p>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Valid</p>
                                    </div>
                                    <div className="text-center p-[12px] md:p-[16px] bg-white rounded-[12px]">
                                        <p className="text-[20px] md:text-[24px] font-[700] text-[#F59E0B]">{validationResults.warnings}</p>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Warnings</p>
                                    </div>
                                    <div className="text-center p-[12px] md:p-[16px] bg-white rounded-[12px]">
                                        <p className="text-[20px] md:text-[24px] font-[700] text-[#EF4444]">{validationResults.errors}</p>
                                        <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Errors</p>
                                    </div>
                                </div>
                                {validationResults.warnings > 0 && (
                                    <div className="mt-[16px] md:mt-[20px] p-[12px] md:p-[16px] bg-[#FEF3C7] border border-[#F59E0B]/20 rounded-[12px]">
                                        <p className="text-[12px] md:text-[13px] font-[600] text-[#92400E]">⚠️ 2 assets have missing optional fields. They will be deployed with default values.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {uploadedFile && validationResults && (
                            <div className="mt-[24px] md:mt-[32px] flex flex-col sm:flex-row gap-[12px] md:gap-[16px]">
                                <button
                                    onClick={() => {
                                        setUploadedFile(null);
                                        setValidationResults(null);
                                    }}
                                    className="px-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] md:text-[14px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all order-2 sm:order-1"
                                >
                                    Cancel Upload
                                </button>
                                <PrimaryButton onClick={handleProcess} loading={isProcessing} className="flex-grow order-1 sm:order-2 h-[48px] md:h-[52px]">
                                    Deploy {validationResults.valid} Assets
                                </PrimaryButton>
                            </div>
                        )}
                    </Card>
                </div>

                {/* Instructions */}
                <div className="lg:col-span-4 space-y-[24px] md:space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[24px] md:p-[40px] text-white shadow-xl">
                        <h3 className="text-[17px] md:text-[18px] font-[700] mb-[20px] md:mb-[24px]">Upload Protocol</h3>
                        <div className="space-y-[16px] md:space-y-[20px] text-[13px] md:text-[14px]">
                            <div className="space-y-[6px] md:space-y-[8px]">
                                <h4 className="font-[700] text-[#1D4ED8]">1. Download Template</h4>
                                <p className="text-white/60 leading-[1.6]">Use our standardized CSV template with pre-configured columns.</p>
                            </div>
                            <div className="space-y-[6px] md:space-y-[8px]">
                                <h4 className="font-[700] text-[#1D4ED8]">2. Populate Data</h4>
                                <p className="text-white/60 leading-[1.6]">Fill in asset details following the column specifications.</p>
                            </div>
                            <div className="space-y-[6px] md:space-y-[8px]">
                                <h4 className="font-[700] text-[#1D4ED8]">3. Upload & Validate</h4>
                                <p className="text-white/60 leading-[1.6]">Our AI will verify data integrity and flag any issues.</p>
                            </div>
                            <div className="space-y-[6px] md:space-y-[8px]">
                                <h4 className="font-[700] text-[#1D4ED8]">4. Deploy</h4>
                                <p className="text-white/60 leading-[1.6]">Confirm and deploy all validated assets simultaneously.</p>
                            </div>
                        </div>
                        <button className="w-full mt-[24px] md:mt-[32px] py-[12px] md:py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[12px] md:text-[13px] font-[700] hover:bg-white/20 transition-all">
                            Download CSV Template
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[12px] md:mb-[16px]">Required Fields</h4>
                        <ul className="space-y-[6px] md:space-y-[8px] text-[12px] md:text-[13px] text-[#6B7280]">
                            {['Asset Title', 'Physical Address', 'Category', 'Monthly Yield', 'Surface Area (SQFT)', 'Bedroom Count', 'Bathroom Count'].map(field => (
                                <li key={field} className="flex items-center gap-[8px]">
                                    <div className="w-[4px] h-[4px] rounded-full bg-[#1D4ED8] shrink-0" />
                                    <span className="truncate">{field}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}
