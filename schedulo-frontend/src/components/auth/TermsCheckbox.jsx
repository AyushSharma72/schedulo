import React from 'react';
import Checkbox from '../form/Checkbox';

export default function TermsCheckbox({ checked, onChange, error }) {
  return (
    <div className="mb-6 mt-6">
      <Checkbox
        id="agreeToTerms"
        name="agreeToTerms"
        checked={checked}
        onChange={onChange}
        error={error}
      >
        I agree to the{' '}
        <button type="button" className="text-slate-900 font-medium hover:underline">
          Terms &amp; Conditions
        </button>
      </Checkbox>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
