import React from 'react';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import FileUpload from '../../components/form/FileUpload';

export default function CandidateFields({ formData, errors, onChange }) {
  return (
    <>
      <Input
        label="Skills"
        name="skills"
        value={formData.skills}
        onChange={onChange}
        placeholder="e.g., React, Node.js, Python"
        error={errors.skills}
        required
      />

      <Select
        label="Years of experience"
        name="experience"
        value={formData.experience}
        onChange={onChange}
      >
        <option value="">Select experience</option>
        <option value="0-1">0-1 years</option>
        <option value="1-3">1-3 years</option>
        <option value="3-5">3-5 years</option>
        <option value="5-10">5-10 years</option>
        <option value="10+">10+ years</option>
      </Select>

      <Input
        label="Education"
        name="education"
        value={formData.education}
        onChange={onChange}
        placeholder="e.g., Bachelor's in Computer Science"
        error={errors.education}
        required
      />

      <Input
        label="Location"
        name="location"
        value={formData.location}
        onChange={onChange}
        placeholder="City, Country"
        error={errors.location}
        required
      />
    </>
  );
}
