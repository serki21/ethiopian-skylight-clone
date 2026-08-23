import React from "react";

export const MapSection = () => {
  return (
    <section className="w-full bg-white py-10">
      
      {/* TITLE */}
      <div className="text-center mb-4">
        <h2 className="text-4xl text-[#1f3b5b] font-light">
          Map
        </h2>

        <div className="w-10 h-[2px] bg-gray-300 mx-auto mt-3"></div>
      </div>

      {/* MAP CONTAINER */}
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* GOOGLE MAP */}
          <div className="h-[450px]">
            <iframe
              title="Ethiopian Skylight Hotel Map"
              src="https://www.google.com/maps?q=Ethiopian+Skylight+Hotel,+Addis+Ababa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* HOTEL INFORMATION */}
          <div className="relative bg-[#c9bd94] min-h-[450px] px-14 py-12">

            <h2 className="text-2xl text-gray-800 mb-6">
              Ethiopian Skylight Hotel
            </h2>

            <div className="space-y-5 text-gray-800 text-lg">
              <p>
                Ethiopian Skylight Hotel GDS Codes
              </p>

              <p>
                Amadeus GDS: HO ADDESH
              </p>

              <p>
                Galileo/Apollo GDS: HO E4913
              </p>

              <p>
                Sabre GDS: HO 32751
              </p>

              <p>
                WorldSpan GDS: HO ADDES
              </p>
            </div>

            {/* SUBSCRIBE SIDE TAB */}
            <div
              className="
                absolute
                right-[-42px]
                top-16
                bg-[#a88d57]
                text-white
                px-4
                py-8
                rounded-r-md
                z-10
                [writing-mode:vertical-rl]
                rotate-180
                cursor-pointer
                hover:bg-[#8f7545]
                transition
              "
            >
              Subscribe
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};