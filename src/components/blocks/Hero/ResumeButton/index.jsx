"use client";

import React from "react";
import { motion } from "framer-motion";

const ResumeButton = ({ href, variants }) => {
  return (
    <motion.a
      variants={variants}
      whileInView="show"
      initial="hidden"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Added cursor-pointer and ensured z-50 for clickability
      className="group relative z-50 flex items-center justify-center overflow-hidden rounded-full border border-indigo-500/40 px-8 py-3 text-sm font-medium text-indigo-400 transition-colors duration-500 hover:text-white cursor-pointer"
    >
      {/* The Circular Hover Effect - pointer-events-none ensures it doesn't block the link */}
      <motion.span
        className="absolute z-0 h-32 w-32 rounded-full bg-indigo-500 pointer-events-none"
        initial={{ scale: 0 }}
        variants={{
          hover: { scale: 3 }, 
        }}
        transition={{ 
          type: "tween", 
          ease: "circOut", 
          duration: 0.4 
        }}
      />

      {/* Text and Icon */}
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        >
          <path d="M12 17V3m0 14l-4-4m4 4l4-4M5 21h14" />
        </svg>
      </span>
    </motion.a>
  );
};

export default ResumeButton;