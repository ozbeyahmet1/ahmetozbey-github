/**
 * This file contains the Input component, which is a reusable input field component.
 * It provides various props to customize the input field, such as type, label, value, name, placeholder, error, disabled, className, and onChange event handler.
 */

import { HTMLProps } from "react";

export default function Input({
  type,
  label,
  value,
  name,
  placeholder,
  disabled,
  className,
  min,
  onChange,
  onSubmit,
}: HTMLProps<HTMLInputElement>) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={className}
        min={min}
        onSubmit={onSubmit}
      />
    </>
  );
}
