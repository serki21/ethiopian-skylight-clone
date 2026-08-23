import React from "react";
import dining from "../../assets/images/dinings/dining.jpg";

export const DiningSection = () => {
  return (
    <section className="bg-[#cfc39a] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative h-[500px]">

          <img
            src={dining}
            alt="Dining"
            className="w-full h-full object-cover"
          />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white max-w-md p-8">

            <h2 className="text-3xl sm:text-4xl font-serif text-skylight-blue mb-3">
              Dining
            </h2>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
              17 food and beverage outlets for a choice of dining experiences
              ranging from all-day dining, Ethiopian, Italian, Arabian and
              Asian restaurants, places to have tea and coffee while catching
              up with friends, spots for sips or hand-crafted cocktails before
              or after dinner with a panoramic view of the airport and the city,
              also bars to music lovers.
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