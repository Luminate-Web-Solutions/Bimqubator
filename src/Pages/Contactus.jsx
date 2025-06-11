import React from "react";
import { useForm } from "react-hook-form";
import contactHero from "../assets/contactusimage.jpg"

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
    <section
        style={{ backgroundImage: `url(${contactHero})` }}
        className="bg-cover bg-center h-64"
      ><div className="bg-black/50 py-16 h-64 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="m-4 text-3xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1></div></section>
          
      <div className="flex m-6">
        <div className="mx-2 mt-6">
          <h1 className="text-3xl font-bold mb-4 ">Let’s Collaborate!</h1>
          <p className=" text-gray-700 mb-8">
            Have a project or need expert support in MEP, BIM, Architecture, or
            Structural Design? We're here to help.
          </p>
          <div className=" mb-8 space-y-1 text-sm text-gray-600">
            <p>
              📧{" "}
              <a href="mailto:info@bimqubator.com" className="underline">
                info@bimqubator.com
              </a>
            </p>
            <p>📞 +91 900-066-3628</p>
            <p>
              🌐{" "}
              <a
                href="http://www.bimqubator.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.bimqubator.com
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}

            <input
              type="tel"
              placeholder="Telephone"
              {...register("Telephone", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.Telephone && (
              <p className="text-red-500 text-sm">Telephone is required</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            <textarea
              placeholder="Message"
              {...register("Message", { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
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
