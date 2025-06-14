import React from 'react'
import serviceHero from '../assets/MEP.jpeg'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
  <>
    {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${serviceHero})` }}
        className="bg-cover bg-center  sm:h-80 md:h-96 lg:h-96 xl:h-96"
      >
        <div className="bg-black/50 h-full py-36  mx-auto  text-center sm:py-32 lg:py-28 lg:px-12">
        <div className="py-12">
          <h1 className="mb-4  text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mb-8 text-xs font-medium text-white lg:text-sm sm:px-16 xl:px-48">
            Bimqubator offers a comprehensive range of services to meet the diverse needs of our clients.
          </p>
        </div>
        </div>
      </section>
    {/* Services Section */}
    <section className="">
      <ServicesCard />
    </section>
  </>
  )
}

export default Services