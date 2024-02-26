import React from "react";

interface TextareaProps {
  name?: string;
  className: string;
  id: string;
  placeholder: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  required?: boolean;
  fixed?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
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
