"use client";

import React from 'react';

/**
 * Fragmented Control Group
 * Consolidates multiple logic nodes into a single coherent interface unit.
 */
export default function ButtonGroup({ children, className = "", vertical = false }) {
    return (
        <div className={`
            inline-flex 
            ${vertical ? 'flex-col' : 'flex-row'} 
            rounded-[8px] 
            shadow-sm 
            border 
            border-[#E5E7EB] 
            overflow-hidden
            ${className}
        `}>
            {React.Children.map(children, (child, idx) => {
                if (!React.isValidElement(child)) return null;

                return React.cloneElement(child, {
                    className: `
                        ${child.props.className || ''} 
                        rounded-none 
                        border-0 
                        ${!vertical && idx !== 0 ? 'border-l border-[#E5E7EB]' : ''}
                        ${vertical && idx !== 0 ? 'border-t border-[#E5E7EB]' : ''}
                    `
                });
            })}
        </div>
    );
}
