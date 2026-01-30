"use client";

import React from "react";
import Link from "next/link";

const Button = ({
  children,
  href,
  variant = "glass",
  className = "",
  target,
  disabled,
  type = "button",
  onClick,
}) => {
  const baseStyles =
    "relative inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full px-8 font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-white text-black hover:bg-white/90 shadow-lg",
    glass: "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/20 shadow-2xl shadow-purple-500/10",
    indigo: "bg-indigo-600 text-white hover:bg-indigo-500",
  };

  const content = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;