import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const NotPageFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-gray-800">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-800 mt-4 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-gray-800 transition"
        >
          <Home size={20} />
          Back to Home
        </Link>

      </div>

    </div>
  );
};