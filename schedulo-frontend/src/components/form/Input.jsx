import React from 'react';

export default function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={id || name}
          className="block mb-2 text-slate-900 font-medium text-sm"
        >
          {label} {required && '*'}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } rounded-md text-sm focus:outline-none focus:border-slate-900`}
      />
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
