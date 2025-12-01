import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/xyz" element={<p>Home Page</p>} />
    </Routes>
  );
}

export default AppRouter;
