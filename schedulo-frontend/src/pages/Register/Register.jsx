import React from "react";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import UserTypeSelector from "../../components/auth/UserTypeSelector";
import TermsCheckbox from "../../components/auth/TermsCheckbox";
import GoogleLoginButton from "../../components/auth/GoogleLoginButton";
import Input from "../../components/form/Input";
import CandidateFields from "./CandidateFields";
import RecruiterFields from "./RecruiterFields";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

export default function Register() {
  const {
    userType,
    setUserType,
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleGoogleSignup,
  } = useRegisterForm("candidate");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white border border-gray-200 rounded-lg p-12 w-full max-w-2xl">
        <div className="text-center text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
          Schedulo
        </div>
        <h1 className="text-center text-2xl font-semibold text-slate-900 mb-2">
          Create your account
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Get started with Schedulo today
        </p>

        <UserTypeSelector userType={userType} onChange={setUserType} />

        <form onSubmit={handleSubmit}>
          <div className="max-h-96 overflow-y-auto pr-2">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Input
                  label="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  error={errors.firstName}
                  required
                />
              </div>
              <div>
                <Input
                  label="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  error={errors.lastName}
                  required
                />
              </div>
            </div>

            <Input
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
              required
            />

            <Input
              label="Phone number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              error={errors.phone}
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              error={errors.password}
              required
              helperText="Must be at least 8 characters"
            />

            <Input
              label="Confirm password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              error={errors.confirmPassword}
              required
            />

            {userType === "candidate" && (
              <CandidateFields
                formData={formData}
                errors={errors}
                onChange={handleChange}
              />
            )}

            {userType === "recruiter" && (
              <RecruiterFields
                formData={formData}
                errors={errors}
                onChange={handleChange}
              />
            )}
          </div>
          <TermsCheckbox
            checked={formData.agreeToTerms}
            onChange={handleChange}
            error={errors.agreeToTerms}
          />
          {/* <button
            type="submit"
            className="w-full py-3 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Create Account
          </button> */}
          <PrimaryButton text="Create Account" />
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400">
              or continue with
            </span>
          </div>
        </div>

        <GoogleLoginButton onClick={handleGoogleSignup} />

        <div className="text-center mt-6 text-gray-500 text-sm">
          Already have an account?{" "}
          <button
            type="button"
            className="text-slate-900 font-semibold hover:underline"
          >
            Sign in
          </button>
        </div>

        <div className="text-center mt-8 pt-8 border-top border-gray-200">
          <button
            type="button"
            className="text-gray-500 text-sm hover:text-slate-900"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
