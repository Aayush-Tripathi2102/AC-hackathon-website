/** @format */

"use client";

import React from "react";
import Image from "next/image";
// import { Button } from './ui/button'
import { slideUp, fadeIn } from "@/lib/motion-variants";
import { motion } from "framer-motion";

const Androidinfo: React.FC = () => {
  return (
    <>
      <section className="w-full flex md:flex-row flex-col py-24 bg-purple-950 justify-center overflow-hidden">
        {/* Text Section */}
        <div className="lg:w-[70%] text-left ml-2 mx-3 md:mx-0 md:ml-6 lg:text-left">
          <motion.h2
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            <div>POWERED BY</div>{" "}
            <div className="relative inline-block text-6xl font-bold group">
              <span className="text-green-500 group-hover:text-black group-hover:scale-110 transition-all duration-1000 ease-out text-shadow">
                ANDROID
              </span>{" "}
              <span className="text-black group-hover:text-green-500 group-hover:scale-110 transition-all duration-1000 ease-out text-shadow">
                CLUB
              </span>
            </div>
            <br />
            {/* <span className="bg-gradient-to-r from-[#9eff00] to-purple-500 bg-clip-text text-transparent"> */}
            <span className="text-white">INNOVATION & EXCELLENCE</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-white text-lg leading-relaxed"
          >
            The Android Club of VIT Chennai is hosting Hack-N-Droid, a 24-hour
            hackathon that will bring together 500+ participants and visionary
            organizations. With themes like Web/App Development, AI & ML, and
            Blockchain, Hack-N-Droid is a platform for collaboration,
            creativity, and problem-solving.
          </motion.p>

          {/* Artistic Circles (Dots) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex justify-center gap-6"
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 mx-auto jsutify-center items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/androidlogo.png"
              width={400}
              height={400}
              alt="Android Logo"
              className="rounded-lg shadow-sm mx-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Androidinfo;
