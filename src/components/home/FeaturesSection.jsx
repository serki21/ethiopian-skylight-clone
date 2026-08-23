import React from "react";
import {
  MapPin,
  BedDouble,
  Users,
  Bus,
  Wifi,
  LockKeyhole,
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: MapPin,
      text: "Walking distance from Airport",
    },
    {
      id: 2,
      icon: BedDouble,
      text: "Newly Furnished & Spacious Rooms",
    },
    {
      id: 3,
      icon: Users,
      text: "Largest Conference and Meeting Rooms",
    },
    {
      id: 4,
      icon: Bus,
      text: "24hrs Free airport shuttle service",
    },
    {
      id: 5,
      icon: Wifi,
      text: "High Speed Free Wi-Fi",
    },
    {
      id: 6,
      icon: LockKeyhole,
      text: "Highly secure and Safe",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white min-h-[135px] flex flex-col items-center justify-center text-center px-3 py-5 shadow-md hover:shadow-lg transition duration-300"
            >
              <feature.icon
                size={30}
                className="text-skylight-gold mb-3"
              />

              <p className="text-sm text-gray-800 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};