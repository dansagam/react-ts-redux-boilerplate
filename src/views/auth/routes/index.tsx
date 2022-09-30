import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "views/auth/pages/SignIn/SignIn";
import Authentication from "..";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
