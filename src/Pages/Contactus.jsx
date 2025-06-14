import React from "react";
import { useForm } from "react-hook-form";
import contactHero from "../assets/contactusimage.jpg";
import LottieAnimation from "../assets/Animation - 1749704674419.json";
import Lottie from "lottie-react";
import { Mail, Phone, Globe } from "lucide-react";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message submitted successfully!");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${contactHero})` }}
        className="bg-cover bg-center h-72 relative"
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-6 md:p-16 bg-gray-50">
        {/* Animation */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Lottie animationData={LottieAnimation} loop={true} />
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Let’s Collaborate!</h2>
          <p className="text-gray-700 mb-6">
            Have a project or need expert support in MEP, BIM, Architecture, or
            Structural Design? We're here to help.
          </p>

          <div className="text-sm text-gray-600 mb-6 space-y-4 font-bold">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <a href="info@bimqubator.com" className="underline">
                info@bimqubator.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              +91 900-066-3628
            </p>
            <p className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-500" />
              <a
                href="https://bimqubator.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.bimqubator.com
              </a>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-xl shadow-lg space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}

            <input
              type="tel"
              placeholder="Telephone"
              {...register("Telephone", { required: true })}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.Telephone && (
              <p className="text-red-500 text-sm">Telephone is required</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true })}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            <textarea
              placeholder="Message"
              {...register("Message", { required: true })}
              className="w-full border border-gray-300 p-3 rounded"
              rows={4}
            />
            {errors.Message && (
              <p className="text-red-500 text-sm">Message is required</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
