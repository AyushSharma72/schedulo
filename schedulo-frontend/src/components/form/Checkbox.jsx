import React from 'react';

export default function Checkbox({ id, name, checked, onChange, children, error }) {
  return (
    <div className="flex items-start gap-2 mb-2">
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="mt-1 w-4 h-4 cursor-pointer"
      />
      <label
        htmlFor={id || name}
        className="text-gray-500 text-sm cursor-pointer"
      >
        {children}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
