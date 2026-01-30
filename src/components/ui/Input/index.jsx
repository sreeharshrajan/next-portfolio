"use client";

import React from "react";

const Input = ({
  name,
  id,
  placeholder,
  type = "text",
  onChange,
  value,
  required,
  className = "",
}) => {
  return (
    <input
      autoComplete="off"
      name={name}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`
        flex h-12 md:h-14 w-full rounded-xl px-4 
        bg-white/[0.03] border border-white/10 
        text-white placeholder:text-gray-500 text-sm md:text-base
        transition-all duration-300
        hover:bg-white/[0.05] hover:border-white/20
        focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    />
  );
};

export default Input;