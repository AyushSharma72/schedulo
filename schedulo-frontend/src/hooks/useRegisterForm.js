import { useState } from 'react';
import { validateRegister } from '../utils/validation';

export function useRegisterForm(initialUserType = 'candidate') {
  const [userType, setUserType] = useState(initialUserType);
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
    linkedIn: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateRegister(formData, userType);

    if (Object.keys(newErrors).length === 0) {
      const dataToSubmit = { userType, ...formData };
      console.log('Registration data:', dataToSubmit);
      alert(
        `${
          userType === 'candidate' ? 'Candidate' : 'Recruiter'
        } registration successful! Check console for data.`
      );
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked for:', userType);
    alert('Google signup integration would go here');
  };

  return {
    userType,
    setUserType,
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    handleGoogleSignup,
  };
}
