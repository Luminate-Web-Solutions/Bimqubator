import React from "react";
import "./index.css";
import BIM from "./assets/BIM.png";
import BIMHero from "./assets/BIMheroimage.jpeg";
import MEP from "./assets/MEP.jpeg";
import Homecards from "./components/Homecards";

function App() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${BIMHero})` }}
        className="bg-cover bg-center h-screen"
      >
        <div className="bg-black/40 h-full flex items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome to Bimqubator
            </h1>
            <p className="mb-8 w-200 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
              Your trusted partner in delivering cutting-edge MEP 3D Designing,
              BIM, Architecture, and Structural Design services.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/about"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <p className="font-semibold text-lg bg-gray-800 py-3 text-center text-white ">
        Empowering Your Vision Through Innovative Design.
      </p>

      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={BIM} alt="3d modeling" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800">
              Let's create more tools and ideas that bring us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              We empower architects, engineers, and construction professionals
              with precise, collaborative, and efficient digital solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="max-w-screen-2xl mx-auto ">
          <h2 className="text-5xl font-bold text-center mb-11 px-4 ">
            Our Services
          </h2>
          <Homecards />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-900 text-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Shaping Tomorrow with Smart Design.
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          We combine innovation and precision to deliver seamless engineering
          solutions, turning visionary concepts into impactful realities.
        </p>
      </section>
    </>
  );
}

export default App;
