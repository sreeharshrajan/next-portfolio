import React from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  children: string;
  disabled?: boolean;
}

function Button({ children, disabled, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-normal  bg-primary text-white shadow-sm bg-zinc-600 hover:bg-zinc-700 h-14 px-4 py-2"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
