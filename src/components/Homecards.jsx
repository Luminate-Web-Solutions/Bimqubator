import React from "react";
import { Cog, Radar, Layers, ShieldCheck } from "lucide-react";

const Homecards = () => {
  const cardData = [
    {
      icon: <Cog size={55} className="text-blue-500" />,
      title: "End-to-End MEP Design Solutions",
      desc: "Comprehensive Mechanical, Electrical, and Plumbing (MEP) design services tailored to meet project-specific requirements.",
    },
    {
      icon: <Radar size={55} className="text-blue-500" />,
      title: "Accurate BIM Coordination & Clash Detection",
      desc: "We utilize advanced BIM tools for coordinated design across disciplines. Clash detection minimizes costly on-site errors.",
    },
    {
      icon: <Layers size={55} className="text-blue-500" />,
      title: "Architectural Planning & Visualizations",
      desc: "Creative architectural layouts reflecting client vision. 3D visualizations and walkthroughs enhance project understanding.",
    },
    {
      icon: <ShieldCheck size={55} className="text-blue-500" />,
      title: "Structural Analysis & Design",
      desc: "Reliable structural solutions with accurate simulations. Ensuring stability, safety, and adherence to industry codes.",
    },
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-9 max-w-7xl w-full">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="w-full p-6 bg-white drop-shadow-2xl rounded-3xl text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-3">{card.icon}</div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">{card.title}</h3>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecards;
