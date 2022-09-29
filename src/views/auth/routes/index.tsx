import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "views/auth/pages/SignIn";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Auth</div>}>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
