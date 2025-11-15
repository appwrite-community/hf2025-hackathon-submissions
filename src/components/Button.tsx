import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  textColor?: string;
  bgColor?: string;
}

function Button({
  children,
  type = "button",
  className = "",
  textColor = "text-white",
  bgColor = "bg-blue-600",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
