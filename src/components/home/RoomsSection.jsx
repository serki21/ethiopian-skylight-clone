import React from "react";
import Room1 from "../../assets/images/rooms/Room1.jpg";

export const RoomsSection = () => {
  return (
    <section className="bg-[#cfc39a] py-16">
      
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative h-[500px]">

          <img
            src={Room1}
            alt="Room and Suite"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white max-w-md p-8">

            <h2 className="text-3xl sm:text-4xl font-serif text-skylight-blue mb-3">
              Rooms & Suites
            </h2>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
              Be spoilt for choice with 1,024 comfortably modern rooms,
              suites, and apartments, spread over 9 different room types
              suitable for long and short-stay guests. Check out the extra
              modern amenities of our suites.
            </p>

            <button className="border-2 border-skylight-gold text-skylight-gold px-8 py-3 text-sm tracking-wider hover:bg-skylight-gold hover:text-white transition duration-300">
              VIEW DETAIL
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};