import React, { useState } from "react";
import { Mail, Phone, Menu, X, Search } from "lucide-react";
import { Button } from "../common/Button";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/*  Top Header */}
      <div className="bg-white px-3 md:px-8  py-2 flex justify-between items-center border-b">

        <div className="flex flex-col">

  {/* First Row */}
  <div className="flex items-center gap-0">

    <div className="leading-tight">
      <div className="flex items-center gap-0">
        <span className="text-lg md:text-2xl text-red-700 font-serif">
          Ethiopian
        </span>

        <span className="text-lg md:text-xl text-red-700">
          የኢትዮጵያ
        </span>
      </div>
    </div>

    <img
      src="/logo.png"
      alt="Logo"
      className="h-10 md:h-12 w-auto"
    />

  </div>

  {/* Second Row */}
  <h2 className="text-lg md:text-2xl text-red-700 font-serif tracking-wide">
    SKYLIGHT HOTEL
  </h2>

</div>

            
          

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a
            href="mailto:reservation@ethiopianskylighthotel.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <Mail size={15} />
            <span>reservation@ethiopianskylighthotel.com</span>
          </a>

          <a
            href="tel:+251116818181"
            className="flex items-center gap-2 hover:text-red-700 transition"
          >
            <Phone size={15} />
            <span>+251 11681 8181</span>
          </a>
        </div>
      </div>

      {/* ================= Navigation Bar ================= */}
      <div className="bg-skylight-blue text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-white-700">
            <a href="/" className="hover:text-yellow-600">
              HOME
            </a>

            <a href="/rooms" className="hover:text-yellow-600">
              ACCOMMODATION
            </a>

            <a href="/features" className="hover:text-yellow-600">
             FEATURES
            </a>

            <a href="/books" className="hover:text-yellow-600">
             BOOKS
            </a>

            <a href="/terminal-hotel" className="hover:text-yellow-600">
              SKYLIGHT 
              IN-TERMINAL HOTEL
            </a>
            <a href="/vacancies" className="hover:text-yellow-600">
             VACANCIES
             </a>

            <a href="/contact" className="hover:text-yellow-600">
              CONTACT
            </a>
          </nav>

          {/* Search + Button */}
          <div className="hidden lg:flex items-center gap-4">

  {/* Search Bar */}
  <div className="flex items-center bg-white rounded-md h-10 w-60 px-2">

    <input
      type="text"
      placeholder="Search"
      className="flex-1 text-sm text-gray-700 placeholder-gray-500 outline-none bg-transparent"
    />

    <Search
      size={20}
      className="text-gray-800 cursor-pointer"
    />

  </div>

</div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-4">

          <a href="/" className="block">
            HOME
          </a>

          <a href="/rooms" className="block">
            ACCOMMODATION
          </a>

          <a href="/dining" className="block">
            DINING
          </a>

          <a href="/events" className="block">
            EVENTS
          </a>

          <a href="/terminal-hotel" className="block">
            IN-TERMINAL HOTEL
          </a>

          <a href="/contact" className="block">
            CONTACT
          </a>

          <Button variant="gold" className="w-full">
            BOOK NOW
          </Button>
        </div>
      )}
    </header>
  );
};