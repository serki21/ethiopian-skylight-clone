import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

import coffee from "../../assets/images/SightSeeing/coffee.jpg";
import unity from "../../assets/images/SightSeeing/unity.jpg";
import entoto from "../../assets/images/SightSeeing/entoto.jpg";
import skyoutdoor from "../../assets/images/SightSeeing/skyoutdoor.jpeg";
import muzem from "../../assets/images/SightSeeing/muzem.jpg";
import holytrinty from "../../assets/images/SightSeeing/holytrinty.jpg";

const sights = [
  {
    id: 1,
    title: "Cultural Coffee Ceremony",
    image: coffee,
  },
  {
    id: 2,
    title: "Addis Ababa City",
    image: skyoutdoor,
  },
  {
    id: 3,
    title: "Entoto Park",
    image: entoto,
  },
  {
    id: 4,
    title: "Holy Trinity Cathedral",
    image: holytrinty,
  },
  {
    id: 5,
    title: "National Museum",
    image: muzem,
  },
  {
    id: 6,
    title: "Unity Park",
    image: unity,
  },
];

export const SightSeeingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move one image to the left every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= sights.length - 3) {
          return 0;
        }

        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Previous slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return sights.length - 3;
      }

      return prevIndex - 1;
    });
  };

  // Next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= sights.length - 3) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  return (
    <section className="relative bg-[#f3f3f3] py-16">

      {/* =========================
          SUBSCRIBE TAB
      ========================== */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          className="bg-[#b69a62] text-white px-4 py-7
                     hover:bg-[#9f844e] transition"
          style={{ writingMode: "vertical-rl" }}
        >
          Subscribe
        </button>
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl font-bold text-[#002b5c] mb-10">
          Sightseeing
        </h2>

        {/* =========================
            CAROUSEL
        ========================== */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrevious}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2
                       z-20
                       bg-black/60
                       text-white
                       w-12
                       h-16
                       flex
                       items-center
                       justify-center
                       hover:bg-black/80
                       transition"
          >
            <ChevronLeft size={30} />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden">

            {/* SLIDING TRACK */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >

              {sights.map((sight) => (
                <div
                  key={sight.id}
                  className="w-1/3 flex-shrink-0 px-3"
                >

                  {/* CARD */}
                  <div className="relative h-[350px] overflow-hidden shadow-md group">

                    {/* IMAGE */}
                    <img
                      src={sight.image}
                      alt={sight.title}
                      className="w-full h-full object-cover
                                 group-hover:scale-105
                                 transition-transform
                                 duration-700"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                    {/* CONTENT */}
                    <div
                      className="absolute inset-0
                                 flex flex-col
                                 items-center
                                 justify-end
                                 pb-6"
                    >

                      {/* TITLE */}
                      <h3 className="text-white text-2xl font-semibold text-center mb-4 drop-shadow-lg">
                        {sight.title}
                      </h3>

                      {/* BUTTON */}
                      <button
                        className="bg-[#b69a62]
                                   text-white
                                   px-10
                                   py-3
                                   text-sm
                                   tracking-wide
                                   hover:bg-[#9f844e]
                                   transition"
                      >
                        READ MORE
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2
                       z-20
                       bg-black/60
                       text-white
                       w-12
                       h-16
                       flex
                       items-center
                       justify-center
                       hover:bg-black/80
                       transition"
          >
            <ChevronRight size={30} />
          </button>

        </div>

      </div>

      {/* =========================
          BACK TO TOP
      ========================== */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed
                   bottom-6
                   right-6
                   w-12
                   h-12
                   bg-[#b69a62]
                   text-white
                   rounded-full
                   flex
                   items-center
                   justify-center
                   hover:bg-[#9f844e]
                   transition
                   z-50"
      >
        <ChevronUp size={22} />
      </button>

    </section>
  );
};