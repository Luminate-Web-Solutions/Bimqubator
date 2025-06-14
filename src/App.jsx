import React from "react";
import "./index.css";
import BIM from "./assets/BIM.png";
import BIMHero from "./assets/BIMheroimage.jpeg";
import Homecards from "./components/Homecards";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${BIMHero})` }}
        className="bg-cover bg-center h-[90vh] md:h-[100vh] w-full"
      >
        <div className="bg-black/50 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-screen-xl mx-auto">
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Welcome to Bimqubator
            </h1>
            <p className="mb-8 text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
              Your trusted partner in delivering cutting-edge MEP 3D Designing,
              BIM, Architecture, and Structural Design services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-800 hover:bg-blue-800 rounded-lg transition duration-200"
              >
                Learn more
                <svg
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <p className="font-semibold text-base sm:text-lg bg-gray-800 py-3 text-center text-white">
        Empowering Your Vision Through Innovative Design.
      </p>

      {/* About / Intro Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={BIM}
            alt="3D Modeling"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div>
            <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-gray-800">
              Let's create more tools and ideas that bring us together.
            </h2>
            <p className="text-gray-600 md:text-lg font-light">
              We empower architects, engineers, and construction professionals
              with precise, collaborative, and efficient digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            What We Offer
          </h2>
          <Homecards />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-900 text-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Shaping Tomorrow with Smart Design.
        </h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          We combine innovation and precision to deliver seamless engineering
          solutions, turning visionary concepts into impactful realities.
        </p>
      </section>
    </>
  );
}

export default App;
