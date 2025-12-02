import { useState } from "react";
import { validateRegister } from "../utils/validation";
import { registerUser } from "../api/auth"; // <-- NEW (backend integration)

export function useRegisterForm(initialUserType = "candidate") {
  const [userType, setUserType] = useState(initialUserType);
  const [formData, setFormData] = useState({
    // Common fields
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeToTerms: false,

    // Candidate specific
    resume: null,
    skills: "",
    experience: "",
    education: "",
    location: "",

    // Recruiter specific
    companyName: "",
    companyWebsite: "",
    companySize: "",
    position: "",
    department: "",
    linkedIn: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // <-- optional

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    const newErrors = validateRegister(formData, userType);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare payload for backend
    const backendPayload = {
      userType,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,

      // Candidate
      skills: userType === "candidate" ? formData.skills : null,
      experience: userType === "candidate" ? formData.experience : null,
      education: userType === "candidate" ? formData.education : null,
      location: userType === "candidate" ? formData.location : null,

      // Recruiter
      companyName: userType === "recruiter" ? formData.companyName : null,
      companyWebsite: userType === "recruiter" ? formData.companyWebsite : null,
      companySize: userType === "recruiter" ? formData.companySize : null,
      position: userType === "recruiter" ? formData.position : null,
      department: userType === "recruiter" ? formData.department : null,
      linkedIn: userType === "recruiter" ? formData.linkedIn : null,
    };
      // STEP 2 — REMOVE FIELDS BACKEND SHOULD NOT RECEIVE
      delete backendPayload.confirmPassword;
      delete backendPayload.resume;


    try {
      setLoading(true);

      const response = await registerUser(backendPayload); // <-- API call

      alert("Registration successful!");
      console.log("Backend response:", response);

      // Optional: redirect to login page
      // navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);

      // Display meaningful error from backend
      setErrors({
        api: err.message || "Something went wrong during registration.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked for:", userType);
    alert("Google signup integration would go here");
  };

  return {
    userType,
    setUserType,
    formData,
    setFormData,
    errors,
    setErrors,
    loading,
    handleChange,
    handleSubmit,
    handleGoogleSignup,
  };
}
