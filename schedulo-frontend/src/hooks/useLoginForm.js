import { useState } from "react";
import { validateLogin } from "../utils/validation";
import { loginUser } from "../api/auth"; // <-- NEW (backend integration)
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // optional

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FRONTEND validation
    const newErrors = validateLogin(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      // BACKEND API CALL
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Save tokens
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);

      // Decode role from access token
      const decoded = jwtDecode(response.access_token);
      const role = decoded.role;

      alert("Login successful!");

      // ROLE-BASED redirection
      if (role === "candidate") {
        navigate("/candidate-dashboard");
      } else if (role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);

      setErrors({
        api: err.message || "Invalid email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    alert("Google login would be handled here");
  };

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
  };
}
