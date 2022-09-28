import NotificationProvider from "contexts/NotificationProvider/NotificationProvider";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { RouterWrapper } from "routes";

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<RouterWrapper />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;
