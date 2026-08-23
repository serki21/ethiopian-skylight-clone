import React, { useState } from "react";

export const SubscribtionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
  });

  return (
    <section className="w-full bg-[#f5f5f5] py-8 border-t border-gray-300">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl text-[#26394f] mb-2">
          Subscribe
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-5">
          Be the first to hear about new Ethiopian Skylight Hotel deals that are perfect for you.
        </p>

        {/* Form */}
        <div className="flex flex-col lg:flex-row gap-3">
          
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-3 flex-1 outline-none focus:border-[#a88d57]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded px-4 py-3 flex-1 outline-none focus:border-[#a88d57]"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 rounded px-4 py-3 flex-1 outline-none focus:border-[#a88d57]"
          />

          <select
            className="border border-gray-300 rounded px-4 py-3 flex-1 text-gray-600 outline-none focus:border-[#a88d57]"
          >
            <option value="">
              Preferred Newsletter Language
            </option>

            <option value="english">
              English
            </option>

            <option value="amharic">
              Amharic
            </option>
          </select>

        </div>

        {/* Button */}
        <button
          className="
            mt-2
            bg-[#a88d57]
            text-white
            px-5
            py-3
            rounded
            shadow-md
            hover:bg-[#8f7545]
            transition
          "
        >
          Subscribe
        </button>

      </div>
    </section>
  );
};