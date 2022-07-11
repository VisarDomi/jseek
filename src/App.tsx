import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./features/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateApplication from "./pages/CreateApplication";
import EditApplication from "./pages/EditApplication";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="create-application" element={<CreateApplication />} />
        <Route path="edit-application" element={<EditApplication />} />
      </Routes>
    </div>
  );
}

export default App;
