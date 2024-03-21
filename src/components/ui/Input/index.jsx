import React from "react";

const Input = ({
  name,
  id,
  placeholder,
  type = "text",
  onChange,
  value,
  required,
}) => {
  return (
    <input
      className="flex h-14 w-full rounded-md bg-zinc-800 px-3 py-2 text-md"
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
