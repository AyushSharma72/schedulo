import { useState } from 'react';
import { validateLogin } from '../utils/validation';

export function useLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateLogin(formData);

    if (Object.keys(newErrors).length === 0) {
      console.log('Login data:', formData);
      alert('Login successful! (Demo)');
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login would be handled here');
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
  };
}
