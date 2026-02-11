"use client";

import React, { useRef, useEffect } from 'react';

/**
 * Forensic Click Detection Wrapper
 * Executes handler logic when user interacts with nodes outside the child element.
 */
export default function ClickOutside({ children, onClickOutside, className = "" }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClickOutside]);

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>
    );
}
