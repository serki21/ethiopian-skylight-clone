import React from "react";
import homePage from "../../assets/images/homePage.png";

export const WelcomeSection = () => {
  const today = new Date();

  const dayName = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hotel Image */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src={homePage}
              alt="Ethiopian Skylight Hotel exterior"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex flex-col justify-start p-8 text-white">
              <span className="text-3xl font-serif font-bold tracking-wide">
                {dayName}
              </span>

              <span className="text-sm text-gray-200 mt-1 font-medium">
                {formattedDate}, Addis Ababa, Ethiopia
              </span>
            </div>
          </div>

          {/* Right Column: Welcome Content */}
          <div className="lg:col-span-6 space-y-4 text-gray-700">

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Welcome to Ethiopian Skylight Hotel.
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              A striking contemporary property with elegant design and
              outstanding facilities in a prime location just 5 minutes' walk
              away from the Addis Ababa Bole International Airport, Ethiopian
              Skylight Hotel promises guests an unforgettable experience
              during their visit to Addis Ababa. The hotel is a convenient and
              aspirational accommodation option for business and leisure
              travellers, and people visiting this vibrant city.
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              Be spoilt for choice with 1,024 comfortably modern rooms and
              suites with different room types with additional 97 tranquil
              rooms in our Skylight In-Terminal Hotel inside Addis Ababa Bole
              International Airport. Check out the extra modern amenities of
              our suites. All rooms and suites offer a host of contemporary
              design features and essential comforts, including full Wi-Fi
              connectivity, that meet the needs of long- and short-stay guests
              at Ethiopian Skylight Hotel.
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              If you plan a meeting, event, or special occasion, including
              weddings, our dedicated facility, including the largest hotel
              ballroom in Addis Ababa and eight fully equipped meeting rooms
              with the latest audio-visual equipment and modern decor, promise
              corporate and social gatherings with style and finesse.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};