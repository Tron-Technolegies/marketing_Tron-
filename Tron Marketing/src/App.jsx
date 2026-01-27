import React from "react";
import "./App.css";
import FooterSection from "./components/Footer Section/FooterSection";
import Homepage from "./pages/Homepage";
import KeralaPage from "./pages/KeralaPage";
import UaePage from "./pages/UaePage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
        <Route path="/uae" element={<UaePage />} />
        <Route path="/kerala" element={<KeralaPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterSection />
    </div>
  );
}
