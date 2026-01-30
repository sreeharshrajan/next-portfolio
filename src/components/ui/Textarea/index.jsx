"use client";

import React from "react";

const Textarea = ({ id, name, placeholder, onChange, value, required, className = "" }) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        flex min-h-[120px] w-full rounded-xl px-4 py-3
        bg-white/[0.03] border border-white/10 
        text-white placeholder:text-gray-500 text-sm md:text-base
        transition-all duration-300
        hover:bg-white/[0.05] hover:border-white/20
        focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50
        resize-none
        ${className}
      `}
    />
  );
};

export default Textarea;