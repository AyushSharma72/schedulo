import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import Checkbox from '../../components/form/Checkbox';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import { useLoginForm } from '../../hooks/useLoginForm';

export default function Login() {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
  } = useLoginForm();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white border border-gray-200 rounded-lg p-12 w-full max-w-md">
        <div className="text-center text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
          Schedulo
        </div>
        <h1 className="text-center text-2xl font-semibold text-slate-900 mb-2">
          Welcome back
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Sign in to your account to continue
        </p>

        <form onSubmit={handleSubmit}>
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
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            error={errors.password}
            required
          />

          <div className="flex justify-between items-center mb-6">
            <Checkbox
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            >
              Remember me
            </Checkbox>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-slate-900 text-sm font-medium hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400">or continue with</span>
          </div>
        </div>

        <GoogleLoginButton onClick={handleGoogleLogin} />

        <div className="text-center mt-6 text-gray-500 text-sm">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-slate-900 font-semibold hover:underline"
          >
            Create account
          </button>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-gray-500 text-sm hover:text-slate-900"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
