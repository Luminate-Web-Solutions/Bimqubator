import React from "react";
import { Cog,Radar,Layers, ShieldCheck } from "lucide-react";

const Homecards = () => {
  return (
    <div className="ml-36  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

      <div className="w-72 p-6 drop-shadow-2xl rounded-3xl bg-white text-center">
        <div className="flex justify-center mb-3">
          <Cog size={55} className="text-blue-500" />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          End-to-End MEP Design Solutions
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed">
          Comprehensive Mechanical, Electrical, and Plumbing (MEP) design services tailored to meet project-specific requirements.
        </p>
      </div>

      <div className="w-72 p-6 drop-shadow-2xl rounded-3xl bg-white text-center">
        <div className="flex justify-center mb-3">
            <Radar size={55} className="text-blue-500" />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Accurate BIM Coordination & Clash Detection
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed">
          We utilize advanced BIM tools for coordinated design across disciplines. Clash detection minimizes costly on-site errors.
        </p>
      </div>

      <div className="w-72 p-6 drop-shadow-2xl rounded-3xl bg-white text-center">
        <div className="flex justify-center mb-3">
          <Layers size={55} className="text-blue-500" />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Architectural Planning & Visualizations
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed">
          Creative architectural layouts reflecting client vision. 3D visualizations and walkthroughs enhance project understanding.
        </p>
      </div>

      <div className="w-72 p-6 drop-shadow-2xl rounded-3xl bg-white text-center">
        <div className="flex justify-center mb-3">
          <ShieldCheck size={55} className="text-blue-500" />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Structural Analysis & Design
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed">
          Reliable structural solutions with accurate simulations. Ensuring stability, safety, and adherence to industry codes.
        </p>
      </div>

    </div>
  );
};

export default Homecards;
