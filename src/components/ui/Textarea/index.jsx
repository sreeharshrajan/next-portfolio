import React from "react";

const Textarea = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  fixed,
  required,
}) => {
  const textareaClassName = `flex w-full rounded-md bg-zinc-800 px-2 py-3 md:px-3 md:py-4 text-sm md:text-base ${className} ${fixed ? "fixed-textarea" : ""}`;

  return (
    <textarea
      className={textareaClassName}
      id={id}
      name={name}
      value={value}
      rows={6}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    ></textarea>
  );
};

export default Textarea;
