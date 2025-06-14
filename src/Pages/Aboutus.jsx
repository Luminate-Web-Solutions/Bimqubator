import React from 'react';
import { Lightbulb, Compass, Eye } from 'lucide-react'; // icons
import Hero from '../assets/AboutusHeroimage.jpeg';

const Aboutus = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${Hero})` }}
        className="bg-cover bg-center h-96 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="z-10 mt-14 text-white text-left px-6 md:px-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">We Design The Future</h1>
          <p className="text-lg font-light w-full md:w-3/4">
            At Bimqubator, we merge innovation with precision in MEP, BIM, Architecture & Structural Design.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 md:px-24 bg-[#f8fafc] text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-gray-600">Bimqubator</span> is not just a consultancy — we’re your design partners.
              With a focus on innovation, sustainability, and smart coordination, we help you build projects that stand out and stand strong.
              From residential to industrial infrastructure, we blend design clarity with engineering intelligence.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Hero} alt="About us visual" className="object-cover w-full h-120" />
          </div>
        </div>
      </section>

      {/* Mission, Approach, Vision - Icon Cards */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 border rounded-2xl shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Lightbulb size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p>
              Deliver precision-driven, sustainable solutions that redefine digital construction experiences.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Compass size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Approach</h3>
            <p>
              Seamless 3D modeling, smart BIM coordination, and clear documentation — ensuring every step aligns with your vision.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Eye size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p>
              To lead globally in integrated BIM solutions, driving a smarter, sustainable construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-900 text-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Design. Enabling Possibility.</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our team bridges the gap between idea and implementation, helping stakeholders collaborate efficiently with futuristic design tools.
        </p>
      </section>
    </>
  );
};

export default Aboutus;
