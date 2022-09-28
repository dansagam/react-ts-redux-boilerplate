import React from "react";
import { Route, Routes } from "react-router-dom";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Auth</div>} />
    </Routes>
  );
}

export default AuthRoutes;
