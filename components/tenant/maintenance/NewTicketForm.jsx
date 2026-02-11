"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import FileUpload from '@/components/ui/input/FileUpload';

export default function NewTicketForm() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[800] text-[#111827] mb-[24px]">Trigger Maintenance Signal</h3>

            <form className="space-y-[24px]">
                <div>
                    <label className="block text-[14px] font-[700] text-[#374151] mb-[8px]">Incident Categorization</label>
                    <select className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] text-[15px] font-[600]">
                        <option value="">Select failure type</option>
                        <option value="plumbing">Plumbing Failure</option>
                        <option value="electrical">Electrical Short</option>
                        <option value="hvac">HVAC Malfunction</option>
                        <option value="appliance">Appliance Error</option>
                    </select>
                </div>

                <div>
                    <label className="block text-[14px] font-[700] text-[#374151] mb-[8px]">Forensic Description</label>
                    <textarea
                        className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] min-h-[120px]"
                        placeholder="Detail the component failure..."
                    />
                </div>

                <FileUpload label="Visual Evidence (Photos/Video)" multiple={true} />

                <div className="flex items-center gap-[12px] p-[16px] bg-[#FEF2F2] rounded-[10px] border border-[#FECACA]">
                    <svg className="text-[#EF4444]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <p className="text-[12px] font-[600] text-[#991B1B]">For life-safety emergencies, prioritize direct dispatch contact immediately.</p>
                </div>

                <PrimaryButton className="w-full py-[16px] text-[16px]">
                    Transmit Signal
                </PrimaryButton>
            </form>
        </Card>
    );
}
