# Enterprise Design System v2.0 (Implemented)

## Overview
This document outlines the implemented design tokens and utilities based on the "Real Estate Platform Enterprise UI Evolution" specification. These tokens are now available globally via `styles/globals.css` and Tailwind CSS v4.

## 🎨 Color System

### Primary Scale (Brand Blue)
Usage: `bg-primary-50` to `bg-primary-900`
- **500**: `#0066FF` (Main Action)
- **600**: `#0052CC` (Hover/Focus)
- **700**: `#003D99` (Deep Brand)

### Surface Colors
Usage: `bg-surface-*`
- **base**: `#FFFFFF` (Main Cards)
- **elevated**: `#F7FAFC` (App Backgrounds)
- **sunken**: `#EDF2F7` (Inputs, Dividers)

### Semantic Text
Usage: `text-text-*`
- **primary**: `#0A0F1C` (Headings)
- **secondary**: `#4A5568` (Body)
- **tertiary**: `#718096` (Caption/Placeholder)

## 🔠 Typography

### Font Families
- **Display**: `font-display` ("Inter Display") - Use for Headings (h1-h6)
- **Body**: `font-inter` ("Inter") - Use for UI text over 14px
- **Mono**: `font-mono` ("SF Mono") - Use for data/code

## 🌘 Shadows & Depth

### Shadow Tokens
Usage: `shadow-*`
- **xs/sm/base/md/lg/xl**: Standard elevation curve
- **glass**: `0 8px 32px rgba(0,0,0,0.04)` - For glassmorphic overlays
- **glow**: `0 0 0 3px rgba(0,102,255,0.12)` - For focus rings

### Border Radius
Usage: `rounded-*`
- **xl**: `24px` (Cards)
- **2xl**: `32px` (Large Containers)

## ✨ New Utilities

### Glassmorphism 2.0
Class: `.glass`
- Adds blur, semi-transparent white background, and subtle white border.

### Neomorphic Brutalism Card
Class: `.card-brutal`
- Clean borders, subtle shadows, and crisp hover lifts.

### Brand Gradient Text
Class: `.text-gradient-brand`
- Applies the primary gradient clip to text.

## 🚀 Migration Guide
When updating existing components:
1. Replace `bg-[#1D4ED8]` → `bg-primary-600`
2. Replace `bg-gray-50` → `bg-surface-elevated`
3. Replace `rounded-[24px]` → `rounded-xl`
4. Replace `shadow-[...]` → `shadow-glass` or `shadow-base`
