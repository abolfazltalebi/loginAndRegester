import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import SignIn from "./pages/signIn/signIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
    </Routes>
  );
}
