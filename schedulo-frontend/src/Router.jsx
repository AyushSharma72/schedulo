import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
