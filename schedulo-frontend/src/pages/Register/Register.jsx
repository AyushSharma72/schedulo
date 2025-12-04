import { useRegisterForm } from "../../hooks/useRegisterForm";
import UserTypeSelector from "../../components/auth/UserTypeSelector";
import GoogleLoginButton from "../../components/auth/GoogleLoginButton";
import Input from "../../components/form/Input";
import CandidateFields from "./CandidateFields";
import RecruiterFields from "./RecruiterFields";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4 lg:p-8">
      <div className="bg-background border border-surface rounded-xl p-6 lg:p-10 w-full max-w-5xl shadow-sm">
        <h1 className="text-center text-2xl lg:text-3xl font-semibold text-base-strong mb-2">
          Create your account
        </h1>
        <p className="text-center text-base-soft mb-6 lg:mb-8 text-sm">
          Get started with Schedulo today
        </p>

        <UserTypeSelector userType={userType} onChange={setUserType} />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                error={errors.firstName}
                required
              />

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

            {/* PASSWORD */}
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              error={errors.password}
              required
              helperText="Must be at least 8 characters"
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-base-light hover:text-primary transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            {/* CONFIRM PASSWORD */}
            <Input
              label="Confirm password"
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              error={errors.confirmPassword}
              required
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="text-base-light hover:text-primary transition"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
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

          {/* FULL-WIDTH BUTTON */}
          <div className="col-span-1 lg:col-span-2">
            <PrimaryButton
              text="Create Account"
              extraStyles="mt-2 w-full gradient-primary-cta text-white"
            />
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-4 text-base-light">
              or continue with
            </span>
          </div>
        </div>

        <GoogleLoginButton onClick={handleGoogleSignup} />

        <div className="text-center mt-6 text-base-soft text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
