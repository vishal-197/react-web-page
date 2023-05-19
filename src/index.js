import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Nav from './Nav';
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
