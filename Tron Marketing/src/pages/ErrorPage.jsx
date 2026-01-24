import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>

      <Link to="/">
        <button className=" text-red-500 px-6 py-2 rounded-full hover:bg-amber-800 transition">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
