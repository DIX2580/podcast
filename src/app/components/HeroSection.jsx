"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2,
      },
    },
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto p-8">
        <div className="grid p-2 md:grid-cols-2 gap-10">
          <div className="md:ml-20 md:mr-0 ml-4 mr-4 ">
            <div>
              {[
                "Welcome To",
                "Mishka Productions",
                "The Podcast",
                "With Kunal Show",
              ].map((text, index) => (
                <motion.h4
                  key={text}
                  className={
                    index < 2
                      ? "text-lg font-bold text-amber-400"
                      : "text-5xl font-extrabold text-white mt-4"
                  }
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  {text}
                </motion.h4>
              ))}
              <motion.p
                className="text-base text-white font-bold mt-4"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                Weekly discussions with visionary leaders at
              </motion.p>
              <motion.p
                className="text-base text-white font-bold"
                custom={5}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                the forefront of Indias burgeoning ₹120 lakh
              </motion.p>
              <motion.p
                className="text-base text-white font-bold"
                custom={6}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                crore economy.
              </motion.p>
              <motion.button
                type="button"
                className="text-black font-Poppins font-bold mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-sm px-8 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                custom={7}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                All Episodes
              </motion.button>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={imageVariant}
          >
            <Image
              src="/podcastav.png"
              width={320}
              height={320}
              alt="Podcast with Kunal"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
