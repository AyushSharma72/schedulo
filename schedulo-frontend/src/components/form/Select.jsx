import React from 'react';

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  children,
  error,
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
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } rounded-md text-sm focus:outline-none focus:border-slate-900`}
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
