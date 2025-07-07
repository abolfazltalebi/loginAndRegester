import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import SignIn from "./pages/signIn/signIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}
