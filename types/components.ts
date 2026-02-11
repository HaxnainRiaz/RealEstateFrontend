import { ReactNode } from "react";

export interface BaseProps {
    children?: ReactNode;
    className?: string;
    id?: string;
}

export interface ButtonProps extends BaseProps {
    variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

export interface CardProps extends BaseProps {
    animate?: boolean;
    onClick?: () => void;
}

export interface InputProps extends BaseProps {
    label?: string;
    value: string | number;
    onChange: (value: any) => void;
    placeholder?: string;
    type?: string;
    error?: string;
    disabled?: boolean;
}
