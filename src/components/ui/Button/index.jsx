import React from "react";

function Button({ children, disabled, type }) {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm md:text-md font-normal bg-primary text-white shadow-sm bg-indigo-500 hover:bg-indigo-700 h-12 md:h-14 md:px-4 md:py-2"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
