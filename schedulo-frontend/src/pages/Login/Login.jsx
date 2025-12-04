import { useNavigate } from "react-router-dom";
import Input from "../../components/form/Input";
import Checkbox from "../../components/form/Checkbox";
import GoogleLoginButton from "../../components/auth/GoogleLoginButton";
import { useLoginForm } from "../../hooks/useLoginForm";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { formData, errors, handleChange, handleSubmit, handleGoogleLogin } =
    useLoginForm();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center gradient-primary p-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        {/* Left illustration */}
        <div className="hidden lg:flex justify-center flex-1">
          <img
            src="/login.svg"
            alt="Login Illustration"
            className="w-full max-w-lg animate-fade-in"
          />
        </div>

        {/* Right form card */}
        <div className="bg-background border border-surface shadow-xl rounded-2xl p-8 w-full max-w-xl flex-1 backdrop-blur-sm">
          <h1 className="text-center text-3xl font-semibold text-base-strong mb-2">
            Welcome back
          </h1>
          <p className="text-center text-base-soft mb-10 text-sm">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
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
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
              required
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

            <div className="flex justify-between items-center mb-1">
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
                className="text-primary text-sm font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <PrimaryButton text="Sign In" extraStyles="w-full mt-4" />
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-base-light">
                or continue with
              </span>
            </div>
          </div>

          <GoogleLoginButton onClick={handleGoogleLogin} />

          <div className="text-center mt-6 text-base-soft text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-primary font-semibold hover:underline"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
