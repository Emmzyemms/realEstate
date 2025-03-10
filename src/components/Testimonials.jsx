/* eslint-disable no-unused-vars */
import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className=" flex-wrap flex justify-center gap-8">
        {testimonialsData.map((testtimonial, index) => (
          <div
            key={index}
            className="max-w-[300px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testtimonial.image}
              alt={testtimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testtimonial.name}
            </h2>

            <p className="text-gray-500 mb-4 text-sm">{testtimonial.title}</p>

            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testtimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="rating-star" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{testtimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
