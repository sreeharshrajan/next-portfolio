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
  const textareaClassName = `flex w-full rounded-md bg-zinc-800 px-3 py-4 text-md ${className} ${fixed ? "fixed-textarea" : ""}`;

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
