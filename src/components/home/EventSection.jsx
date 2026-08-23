import React from "react";
import event from "../../assets/images/event.jpg";

export const EventSection = () => {
  return (
    <section className="bg-[#cfc39a] py-16">
      
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative h-[500px]">

          <img
            src={event}
            alt="event"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white max-w-md p-8">

            <h2 className="text-3xl sm:text-4xl font-serif text-skylight-blue mb-3">
              EVENT
            </h2>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
             If you are looking venue for a meeting, event, or special occasion we have an amazing facility to you. 
             The largest hotel ballroom in Addis Ababa and eight fully equipped meeting rooms with the latest audio-visual equipment modern décor,
             promise corporate and social gatherings with style and finesse.
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