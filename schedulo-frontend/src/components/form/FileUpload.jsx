import React from 'react';

export default function FileUpload({
  label,
  id,
  name,
  accept,
  onChange,
  helperText,
  error,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={id || name}
          className="block mb-2 text-slate-900 font-medium text-sm"
        >
          {label}
        </label>
      )}
      <input
        type="file"
        id={id || name}
        name={name}
        accept={accept}
        onChange={onChange}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } rounded-md text-sm focus:outline-none focus:border-slate-900`}
      />
      {helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
