import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/registration";

function AppRouter() {
  return (
    <Routes>
      <Route path="/xyz" element={<p>Home Page</p>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default AppRouter;
