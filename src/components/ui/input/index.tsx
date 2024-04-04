/**
 * This file contains the Input component, which is a reusable input field component.
 * It provides various props to customize the input field, such as type, label, value, name, placeholder, error, disabled, className, and onChange event handler.
 */

import { ChangeEvent } from "react";
interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  className,
  onChange,
}: InputProps) {
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
      />
      {error && <p className="error">Input filed cant be empty!</p>}
    </>
  );
}
