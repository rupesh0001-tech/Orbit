import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none";
  let variantStyle = "bg-white text-black hover:bg-neutral-200";

  if (variant === "secondary") {
    variantStyle = "bg-neutral-800 text-neutral-200 hover:bg-neutral-700";
  } else if (variant === "outline") {
    variantStyle = "border border-white/20 text-white hover:bg-white/10";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
