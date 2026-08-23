import React from "react";
import Pool from "../../assets/images/Pool.jpg";

export const RecreationSection = () => {
  return (
    <section className="bg-[#cfc39a] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative h-[500px]">

          <img
            src={Pool}
            alt="recreation"
            className="w-full h-full object-cover"
          />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white max-w-md p-8">

            <h2 className="text-3xl sm:text-4xl font-serif text-skylight-blue mb-3">
             RECREATIONS
            </h2>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
              Our recreation facilities are the place to rest and re-energize, offering a fully equipped gym,
               outdoor and indoor swimming pools, sauna, steam, and Serenity Spa’s authentic Thai and other massage services.


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