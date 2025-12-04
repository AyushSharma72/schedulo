import React from "react";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";

export default function RecruiterFields({ formData, errors, onChange }) {
  return (
    <>
      <Input
        label="Company name"
        name="companyName"
        value={formData.companyName}
        onChange={onChange}
        placeholder="Acme Corporation"
        error={errors.companyName}
        required
      />

      <Input
        label="Company website"
        name="companyWebsite"
        type="url"
        value={formData.companyWebsite}
        onChange={onChange}
        placeholder="https://company.com"
      />

      <Select
        label="Company size"
        name="companySize"
        value={formData.companySize}
        onChange={onChange}
      >
        <option value="">Select company size</option>
        <option value="1-10">1-10 employees</option>
        <option value="11-50">11-50 employees</option>
        <option value="51-200">51-200 employees</option>
        <option value="201-500">201-500 employees</option>
        <option value="501-1000">501-1000 employees</option>
        <option value="1000+">1000+ employees</option>
      </Select>

      <Input
        label="Your position"
        name="position"
        value={formData.position}
        onChange={onChange}
        placeholder="HR Manager"
        error={errors.position}
        required
      />

      <Input
        label="Department"
        name="department"
        value={formData.department}
        onChange={onChange}
        placeholder="Human Resources"
        error={errors.department}
        required
      />

      <Input
        label="LinkedIn profile"
        name="linkedIn"
        type="url"
        value={formData.linkedIn}
        onChange={onChange}
        placeholder="https://linkedin.com/in/yourprofile"
      />
    </>
  );
}
