import React from "react";

export default function Input({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
  rightElement,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={id || name}
          className="block mb-2 text-base-strong font-medium text-sm"
        >
          {label} {required && "*"}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 text-sm rounded-lg border 
            ${error ? "border-red-500" : "border-surface"} 
            focus:outline-none focus:ring-2 focus:ring-purple-300 
            text-base-soft placeholder:text-base-light
          `}
        />

        {rightElement && (
          <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            {rightElement}
          </div>
        )}
      </div>

     
      {helperText && !error && (
        <p className="text-xs text-base-light mt-1">{helperText}</p>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
