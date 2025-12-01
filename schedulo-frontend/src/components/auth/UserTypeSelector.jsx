import React from 'react';

export default function UserTypeSelector({ userType, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <button
        type="button"
        onClick={() => onChange('candidate')}
        className={`border-2 rounded-md p-6 text-center cursor-pointer transition-all ${
          userType === 'candidate'
            ? 'border-slate-900 bg-gray-50'
            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }`}
      >
        <div className="text-3xl mb-2">👤</div>
        <div className="font-semibold text-slate-900 mb-1">Candidate</div>
        <div className="text-sm text-gray-500">Looking for jobs</div>
      </button>
      <button
        type="button"
        onClick={() => onChange('recruiter')}
        className={`border-2 rounded-md p-6 text-center cursor-pointer transition-all ${
          userType === 'recruiter'
            ? 'border-slate-900 bg-gray-50'
            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }`}
      >
        <div className="text-3xl mb-2">💼</div>
        <div className="font-semibold text-slate-900 mb-1">Recruiter</div>
        <div className="text-sm text-gray-500">Hiring talent</div>
      </button>
    </div>
  );
}
