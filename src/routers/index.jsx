import { Routes, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import Login from "../components/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
