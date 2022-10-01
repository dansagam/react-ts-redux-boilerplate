import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "views/auth/pages/SignIn/SignIn";
import Authentication from "..";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="verify-user" element={<ResetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
