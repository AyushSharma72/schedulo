import { useState } from 'react';

export default function Register() {
  const [userType, setUserType] = useState('candidate');
  const [formData, setFormData] = useState({
    // Common fields
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeToTerms: false,
    
    // Candidate specific
    resume: null,
    skills: '',
    experience: '',
    education: '',
    location: '',
    
    // Recruiter specific
    companyName: '',
    companyWebsite: '',
    companySize: '',
    position: '',
    department: '',
    linkedIn: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Common validations
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    // Candidate specific validations
    if (userType === 'candidate') {
      if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
      if (!formData.education.trim()) newErrors.education = 'Education is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
    }
    
    // Recruiter specific validations
    if (userType === 'recruiter') {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.position.trim()) newErrors.position = 'Your position is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      const dataToSubmit = { userType, ...formData };
      console.log('Registration data:', dataToSubmit);
      alert(`${userType === 'candidate' ? 'Candidate' : 'Recruiter'} registration successful! Check console for data.`);
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked for:', userType);
    alert('Google signup integration would go here');
  };

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

        {/* User Type Selector */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setUserType('candidate')}
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
            onClick={() => setUserType('recruiter')}
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

        <div className="max-h-96 overflow-y-auto pr-2">
          {/* Common Fields */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-slate-900 font-medium text-sm">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-slate-900 font-medium text-sm">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-slate-900 font-medium text-sm">
              Email address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-slate-900 font-medium text-sm">
              Phone number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-slate-900 font-medium text-sm">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-slate-900 font-medium text-sm">
              Confirm password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Candidate Specific Fields */}
          {userType === 'candidate' && (
            <>
              <div className="mb-6">
                <label htmlFor="skills" className="block mb-2 text-slate-900 font-medium text-sm">
                  Skills *
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., React, Node.js, Python"
                  className={`w-full px-3 py-2 border ${errors.skills ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block mb-2 text-slate-900 font-medium text-sm">
                  Years of experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-slate-900"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="education" className="block mb-2 text-slate-900 font-medium text-sm">
                  Education *
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="e.g., Bachelor's in Computer Science"
                  className={`w-full px-3 py-2 border ${errors.education ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block mb-2 text-slate-900 font-medium text-sm">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className={`w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block mb-2 text-slate-900 font-medium text-sm">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-slate-900"
                />
              </div>
            </>
          )}

          {/* Recruiter Specific Fields */}
          {userType === 'recruiter' && (
            <>
              <div className="mb-6">
                <label htmlFor="companyName" className="block mb-2 text-slate-900 font-medium text-sm">
                  Company name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corporation"
                  className={`w-full px-3 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="companyWebsite" className="block mb-2 text-slate-900 font-medium text-sm">
                  Company website
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="companySize" className="block mb-2 text-slate-900 font-medium text-sm">
                  Company size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-slate-900"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="position" className="block mb-2 text-slate-900 font-medium text-sm">
                  Your position *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., HR Manager, Talent Acquisition"
                  className={`w-full px-3 py-2 border ${errors.position ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="department" className="block mb-2 text-slate-900 font-medium text-sm">
                  Department *
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g., Human Resources"
                  className={`w-full px-3 py-2 border ${errors.department ? 'border-red-500' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:border-slate-900`}
                />
                {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="linkedIn" className="block mb-2 text-slate-900 font-medium text-sm">
                  LinkedIn profile
                </label>
                <input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-slate-900"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex items-start gap-2 mb-6 mt-6">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="agreeToTerms" className="text-gray-500 text-sm cursor-pointer">
            I agree to the{' '}
            <button className="text-slate-900 font-medium hover:underline">
              Terms & Conditions
            </button>
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-red-500 text-xs mb-4">{errors.agreeToTerms}</p>}

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors"
        >
          Create Account
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400">or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full py-3 bg-white text-slate-900 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </button>

        <div className="text-center mt-6 text-gray-500 text-sm">
          Already have an account?{' '}
          <button className="text-slate-900 font-semibold hover:underline">
            Sign in
          </button>
        </div>

        <div className="text-center mt-8 pt-8 border-top border-gray-200">
          <button className="text-gray-500 text-sm hover:text-slate-900">
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}