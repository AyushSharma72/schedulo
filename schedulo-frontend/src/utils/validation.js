export function validateRegister(formData, userType) {
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
    if (!formData.companyName.trim())
      newErrors.companyName = 'Company name is required';
    if (!formData.position.trim())
      newErrors.position = 'Your position is required';
    if (!formData.department.trim())
      newErrors.department = 'Department is required';
  }

  return newErrors;
}


export function validateLogin(formData) {
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
}
