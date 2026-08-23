import React, { useState, useEffect } from "react";
import { Calendar, Users, Search } from "lucide-react";
import { Button } from "../common/Button";

import hero1 from "../../assets/images/hero/hero1.jpeg";
import hero2 from "../../assets/images/hero/hero2.png";

export const Hero = () => {
  const [checkIn, setCheckIn] = useState("2026-08-10");
  const [checkOut, setCheckOut] = useState("2026-08-12");
  const [guests, setGuests] = useState("1 Room, 2 Guests");

  const images = [hero1, hero2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookingSearch = (e) => {
    e.preventDefault();

    alert(`Searching availability

Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}`);
  };

  return (
    <section className="relative h-[700px] overflow-visible text-white mb-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Experience True Luxury in{" "}
          <span className="text-yellow-400">Addis Ababa</span>
        </h1>

        <p className="max-w-2xl text-lg text-gray-200">
          Discover unmatched elegance at East Africa's largest hotel,
          seamlessly connected to Bole International Airport.
        </p>
      </div>

      {/* Booking Form */}
      <div className="absolute left-0 right-0 -bottom-16 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <form
            onSubmit={handleBookingSearch}
            className="bg-white text-gray-800 rounded-xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Check In */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-500 mb-2">
                <Calendar size={16} />
                Check In
              </label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="outline-none"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-500 mb-2">
                <Calendar size={16} />
                Check Out
              </label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="outline-none"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-500 mb-2">
                <Users size={16} />
                Guests
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="outline-none bg-transparent"
              >
                <option>1 Room, 1 Guest</option>
                <option>1 Room, 2 Guests</option>
                <option>2 Rooms, 4 Guests</option>
                <option>Suite, 2 Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <Button
              type="submit"
              variant="gold"
              className="w-full h-full"
            >
              <Search size={18} className="inline mr-2" />
              Check Availability
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;