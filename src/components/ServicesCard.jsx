import React, { useState } from "react";
import {
  Fan,
  Zap,
  Flame,
  Droplets,
  Ruler,
  Building2,
  ShieldCheck,
  Wrench,
  Clock4,
  Users,
  LayoutGrid,
  Eye,
  Layers,
  Braces,
  Landmark,
  Hammer,
  Database,
  ShieldHalf,
  X
} from "lucide-react";

const iconMap = {
  "HVAC System Layouts": <Fan size={32} className="text-blue-600 mb-2 mx-auto" />,
  "Electrical Load & Lighting Design": <Zap size={32} className="text-yellow-500 mb-2 mx-auto" />,
  "Fire Protection System Design": <Flame size={32} className="text-red-500 mb-2 mx-auto" />,
  "Plumbing & Drainage Schematics": <Droplets size={32} className="text-blue-400 mb-2 mx-auto" />,
  "Equipment Sizing & Duct Routing": <Ruler size={32} className="text-gray-600 mb-2 mx-auto" />,
  "BIM Modeling": <Building2 size={32} className="text-green-600 mb-2 mx-auto" />,
  "Clash Detection & Resolution": <ShieldCheck size={32} className="text-purple-600 mb-2 mx-auto" />,
  "Revit Family Creation": <Wrench size={32} className="text-indigo-500 mb-2 mx-auto" />,
  "4D Scheduling & 5D Cost Estimation": <Clock4 size={32} className="text-orange-600 mb-2 mx-auto" />,
  "Coordination with Architects & Structural Teams": <Users size={32} className="text-teal-600 mb-2 mx-auto" />,
  "Conceptual & Detailed Planning": <LayoutGrid size={32} className="text-pink-600 mb-2 mx-auto" />,
  "3D Renderings & Walkthroughs": <Eye size={32} className="text-violet-600 mb-2 mx-auto" />,
  "Interior Layout Planning": <Layers size={32} className="text-amber-600 mb-2 mx-auto" />,
  "Building Code Compliance": <Braces size={32} className="text-rose-600 mb-2 mx-auto" />,
  "Structural Analysis & Load Calculation": <Landmark size={32} className="text-lime-600 mb-2 mx-auto" />,
  "Steel & Concrete Detailing": <Hammer size={32} className="text-slate-600 mb-2 mx-auto" />,
  "Reinforcement Detailing (RCC)": <Database size={32} className="text-blue-700 mb-2 mx-auto" />,
  "Foundation Design & Earthquake Safety": <ShieldHalf size={32} className="text-red-600 mb-2 mx-auto" />,
};

const descriptions = {
  "HVAC System Layouts": "Optimized HVAC layouts ensuring energy efficiency and comfort across zones. Includes duct sizing, airflow balancing, and system zoning.",
  "Electrical Load & Lighting Design": "Design of power distribution and lighting systems. Ensures code compliance, energy efficiency, and safe layouts.",
  "Fire Protection System Design": "Custom fire suppression layouts per safety standards. Includes sprinklers, alarms, and evacuation paths.",
  "Plumbing & Drainage Schematics": "Schematics for water supply and drainage systems. Ensures flow efficiency and code compliance.",
  "Equipment Sizing & Duct Routing": "Accurate HVAC equipment sizing and duct network layout. Maximizes system performance and airflow.",
  "BIM Modeling": "Detailed BIM models integrating all building systems. Enhances accuracy and collaboration.",
  "Clash Detection & Resolution": "Finds and fixes design conflicts across systems. Reduces errors and project delays.",
  "Revit Family Creation": "Custom parametric Revit objects for accurate BIM usage. Ensures project-specific detailing.",
  "4D Scheduling & 5D Cost Estimation": "Integrates time and cost into BIM models. Enables project tracking and budget control.",
  "Coordination with Architects & Structural Teams": "Ensures seamless design integration across all teams. Promotes design harmony and collaboration.",
  "Conceptual & Detailed Planning": "Transforms design ideas into actionable plans. Supports permits, budgeting, and execution.",
  "3D Renderings & Walkthroughs": "Visual previews of the project using photorealistic renderings. Helps with stakeholder buy-in.",
  "Interior Layout Planning": "Smart interior designs focused on flow and usability. Aligns with user needs and aesthetics.",
  "Building Code Compliance": "Ensures every design aspect adheres to regulations. Prevents legal issues and delays.",
  "Structural Analysis & Load Calculation": "Strength and stability calculations for all loads. Includes seismic and wind load design.",
  "Steel & Concrete Detailing": "Precise detailing for fabrication and construction. Enhances onsite accuracy.",
  "Reinforcement Detailing (RCC)": "Accurate reinforcement layouts for structural integrity. Optimizes steel usage.",
  "Foundation Design & Earthquake Safety": "Safe foundation plans with seismic resilience. Prioritizes structural durability.",
};

const services = [
  {
    title: "MEP 3D Designing",
    services: [
      "HVAC System Layouts",
      "Electrical Load & Lighting Design",
      "Fire Protection System Design",
      "Plumbing & Drainage Schematics",
      "Equipment Sizing & Duct Routing",
    ],
  },
  {
    title: "BIM Services",
    services: [
      "BIM Modeling",
      "Clash Detection & Resolution",
      "Revit Family Creation",
      "4D Scheduling & 5D Cost Estimation",
      "Coordination with Architects & Structural Teams",
    ],
  },
  {
    title: "Architecture Design Services",
    services: [
      "Conceptual & Detailed Planning",
      "3D Renderings & Walkthroughs",
      "Interior Layout Planning",
      "Building Code Compliance",
    ],
  },
  {
    title: "Structural Design Services",
    services: [
      "Structural Analysis & Load Calculation",
      "Steel & Concrete Detailing",
      "Reinforcement Detailing (RCC)",
      "Foundation Design & Earthquake Safety",
    ],
  },
];

const ServicesCard = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="px-4 py-12 relative">
      {services.map((category, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            {category.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {category.services.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedService(item)}
                className="cursor-pointer bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out"
              >
                {iconMap[item] || null}
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              {iconMap[selectedService]}
              <h3 className="text-xl font-semibold mb-2">{selectedService}</h3>
              <p className="text-gray-700">{descriptions[selectedService]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
