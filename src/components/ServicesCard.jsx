import React, { useState } from "react";
import { X } from "lucide-react";
import hvac from "../assets/Hvac.jpg"
import electrical from "../assets/Electricalwire.jpg"
import Plumbing from "../assets/Plumbing.jpg";
import Firesprinkler from "../assets/Firesprinkler.jpg";
import Clashdetection from "../assets/Clashdetection.jpg";
import Tables from "../assets/Tables.jpg";
import AC from "../assets/Ac unit.jpg"
import BimModeling from "../assets/Bim Modeling.jpg";
import Revit from "../assets/Revit.jpg";
import cost from "../assets/4Dcost.jpg";
import Architect from "../assets/Architect.jpg";
import building3d from "../assets/Building.jpg";
import interior from "../assets/interior.jpg";
import codecompliance from "../assets/codecompliance.jpg";
import structure from "../assets/structure.jpg";
import concrete from "../assets/concrete.jpg";
import Rcc from "../assets/rcc.jpg";
import earthquake from "../assets/earthquake.jpg";
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
  ShieldHalf
} from "lucide-react";

const images = {
"HVAC System Layouts": hvac,
"Electrical Load & Lighting Design": electrical,
"Fire Protection System Design": Firesprinkler,
"Plumbing & Drainage Schematics": Plumbing,
"Equipment Sizing & Duct Routing": AC,
"BIM Modeling": BimModeling,
"Clash Detection & Resolution": Clashdetection,
"Revit Family Creation": Revit,
"4D Scheduling & 5D Cost Estimation": cost,
"Coordination with Architects & Structural Teams": Tables,
"Conceptual & Detailed Planning": Architect,
"3D Renderings & Walkthroughs": building3d,
"Interior Layout Planning": interior,
"Building Code Compliance": codecompliance,
"Structural Analysis & Load Calculation": structure,
"Steel & Concrete Detailing": concrete,
"Reinforcement Detailing (RCC)": Rcc,
"Foundation Design & Earthquake Safety": earthquake,

};

// Descriptions for each service
const descriptions = {
  "HVAC System Layouts": "Comprehensive HVAC system planning tailored for optimal indoor comfort and energy efficiency. Includes advanced ductwork layouts, load calculations, airflow balancing, system zoning, and equipment placement to ensure minimal energy consumption while maintaining consistent climate control across all building zones.",
  
  "Electrical Load & Lighting Design": "Strategic planning of electrical systems including panel scheduling, cable sizing, circuit layouts, and lighting design. Ensures adherence to local and international codes, promotes energy conservation through smart lighting layouts, and provides a safe and reliable power infrastructure for all building types.",
  
  "Fire Protection System Design": "Design of robust fire safety systems in line with NFPA and local codes. Includes placement of sprinklers, smoke detectors, fire alarms, emergency lighting, hydrants, and clear evacuation routes to ensure maximum occupant safety and regulatory compliance during fire incidents.",
  
  "Plumbing & Drainage Schematics": "Design of efficient plumbing networks for water supply, waste management, and rainwater harvesting. Includes detailed pipe sizing, slope calculation, fixture layouts, greywater reuse systems, and ensures full compliance with plumbing standards and building codes.",
  
  "Equipment Sizing & Duct Routing": "Precision sizing of HVAC equipment such as chillers, AHUs, and FCUs, along with optimized duct routing that minimizes pressure losses and noise. Ensures seamless installation, maintenance accessibility, and high system performance throughout the lifecycle of the building.",
  
  "BIM Modeling": "Creation of intelligent, data-rich 3D BIM models that incorporate architectural, structural, and MEP systems. Enhances project visualization, improves coordination among stakeholders, and supports accurate documentation and facility management.",
  
  "Clash Detection & Resolution": "Automated and manual identification of inter-system conflicts using BIM coordination tools. Provides detailed clash reports and resolution strategies, preventing rework, cost overruns, and construction delays by ensuring design accuracy before execution.",
  
  "Revit Family Creation": "Development of custom parametric Revit families that reflect real-world product specifications and behavior. Ensures high model fidelity, accurate quantity take-offs, and adaptability to different design variations and manufacturer standards.",
  
  "4D Scheduling & 5D Cost Estimation": "Integrates construction sequencing (4D) and cost analysis (5D) into BIM models for improved planning and control. Enables project teams to visualize construction timelines, forecast budgets accurately, and make data-driven decisions for resource allocation.",
  
  "Coordination with Architects & Structural Teams": "Holistic collaboration with architectural and structural teams to ensure design coherence and avoid discrepancies. Facilitates efficient project execution by synchronizing design intent, load paths, and space planning across disciplines.",
  
  "Conceptual & Detailed Planning": "Transforms initial design ideas into comprehensive construction-ready plans. Covers zoning, space allocation, material specifications, compliance checks, and budgeting, laying the foundation for a successful project lifecycle from approval to completion.",
  
  "3D Renderings & Walkthroughs": "High-resolution visualizations that simulate real-world lighting, textures, and materials. Offers immersive walkthroughs and flythroughs that enhance client understanding, boost stakeholder engagement, and support design validation before implementation.",
  
  "Interior Layout Planning": "Strategic interior space design prioritizing ergonomics, functionality, and aesthetic appeal. Addresses furniture placement, lighting schemes, and circulation flows while aligning with the client’s branding and operational needs.",
  
  "Building Code Compliance": "Detailed review and integration of local, national, and international building codes within all design aspects. Prevents legal challenges, ensures user safety, and speeds up the approval process for construction permits.",
  
  "Structural Analysis & Load Calculation": "In-depth analysis of structural elements under dead, live, seismic, and wind loads using advanced software. Guarantees building safety, stability, and serviceability by optimizing structural members and ensuring code adherence.",
  
  "Steel & Concrete Detailing": "Precise detailing of structural steel and reinforced concrete elements. Includes fabrication drawings, bar bending schedules (BBS), and connection details that ensure constructability and reduce wastage during site execution.",
  
  "Reinforcement Detailing (RCC)": "Detailed design and layout of reinforcement bars in beams, slabs, columns, and foundations. Focuses on structural safety, crack control, and efficient use of steel in accordance with IS and international standards.",
  
  "Foundation Design & Earthquake Safety": "Design of shallow and deep foundation systems based on soil conditions, structural loads, and seismic activity. Incorporates earthquake-resilient features like base isolation, ductile detailing, and soil-structure interaction analysis for long-term safety and durability.",
};


// Icon mapping for each service
const iconMap = {
  "HVAC System Layouts": <Fan />,
  "Electrical Load & Lighting Design": <Zap />,
  "Fire Protection System Design": <Flame />,
  "Plumbing & Drainage Schematics": <Droplets />,
  "Equipment Sizing & Duct Routing": <Ruler />,
  "BIM Modeling": <Building2 />,
  "Clash Detection & Resolution": <ShieldCheck />,
  "Revit Family Creation": <Wrench />,
  "4D Scheduling & 5D Cost Estimation": <Clock4 />,
  "Coordination with Architects & Structural Teams": <Users />,
  "Conceptual & Detailed Planning": <LayoutGrid />,
  "3D Renderings & Walkthroughs": <Eye />,
  "Interior Layout Planning": <Layers />,
  "Building Code Compliance": <Braces />,
  "Structural Analysis & Load Calculation": <Landmark />,
  "Steel & Concrete Detailing": <Hammer />,
  "Reinforcement Detailing (RCC)": <Database />,
  "Foundation Design & Earthquake Safety": <ShieldHalf />,
};

// Services grouped into categories
const services = [
  {
    title: "All Services",
    services: [
      ...new Set(
        [].concat(
          ...[
            "HVAC System Layouts",
            "Electrical Load & Lighting Design",
            "Fire Protection System Design",
            "Plumbing & Drainage Schematics",
            "Equipment Sizing & Duct Routing",
            "BIM Modeling",
            "Clash Detection & Resolution",
            "Revit Family Creation",
            "4D Scheduling & 5D Cost Estimation",
            "Coordination with Architects & Structural Teams",
            "Conceptual & Detailed Planning",
            "3D Renderings & Walkthroughs",
            "Interior Layout Planning",
            "Building Code Compliance",
            "Structural Analysis & Load Calculation",
            "Steel & Concrete Detailing",
            "Reinforcement Detailing (RCC)",
            "Foundation Design & Earthquake Safety"
          ]
        )
      ),
    ],
  },
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


// ServicesCard Component
const ServicesCard = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState(services[0].title);

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
        {services.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveTab(category.title)}
            className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ease-in-out ${
              activeTab === category.title
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category.title}
            {activeTab === category.title && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-white rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4">

        {services
          .find((cat) => cat.title === activeTab)
          ?.services.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(item)}
              className="cursor-pointer bg-white/40 backdrop-blur-lg border border-gray-200 rounded-3xl p-4 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-white"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl md:text-2xl">
                {iconMap[item]}
              </div>
              <p className="mt-3 text-xs md:text-lg font-bold text-gray-700">{item}</p>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-4">
              <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl">
                <img
                  src={images[selectedService]}
                  alt={selectedService}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {selectedService}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {descriptions[selectedService]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesCard;