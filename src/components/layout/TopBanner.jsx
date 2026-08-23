import React from "react";
import { Info } from "lucide-react";

export const TopBanner = () => {
  return (
    <div className="bg-yellow-100 border-b border-yellow-300">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Left Side */}
        <div className="space-y-1">

          <div className="flex items-center gap-2">
            <Info size={16} className="text-yellow-700" />
            <span className="text-sm text-yellow-900">
              Lost something, find it here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Info size={16} className="text-yellow-700" />
            <span className="text-sm text-yellow-900">
              Book Spa Appointment
            </span>
          </div>

        </div>

        {/* Right Side */}
        <a
          href="#"
          className="text-sm underline text-yellow-900 hover:text-yellow-700"
        >
          See More
        </a>

      </div>
    </div>
  );
};