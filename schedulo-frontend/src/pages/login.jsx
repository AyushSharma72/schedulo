import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login data:', formData);
      // Here you would handle login logic
      alert('Login successful! (Demo)');
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login would be handled here');
  };

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
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-slate-900 font-medium text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900 transition-colors`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-slate-900 font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900 transition-colors`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-gray-500 text-sm cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#" className="text-slate-900 text-sm font-medium hover:underline">
              Forgot password?
            </a>
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

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-white text-slate-900 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>

        <div className="text-center mt-6 text-gray-500 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-slate-900 font-semibold hover:underline">
            Create account
          </a>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <a href="#" className="text-gray-500 text-sm hover:text-slate-900">
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}