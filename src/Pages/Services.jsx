import React from 'react'
import serviceHero from '../assets/MEP.jpeg'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
  <>
    {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${serviceHero})` }}
        className="bg-cover bg-center h-72"
      >
        <div className="bg-black/50 h-72 py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className=" py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mb-8 text-xs font-medium text-white lg:text-sm sm:px-16 xl:px-48">
            Bimqubator offers a comprehensive range of services to meet the diverse needs of our clients.
          </p>
        </div>
        </div>
      </section>
    {/* Services Section */}
    <section className="py-12">
      <ServicesCard />
    </section>
  </>
  )
}

export default Services