/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { slideUp, fadeIn, staggerContainer } from "@/lib/motion-variants";
import { motion } from "framer-motion";

const Tempo: React.FC = () => {
  return (
    <section className="w-full py-24 bg-purple-950">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Top Section */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8"
          variants={fadeIn}
        >
          {/* Images Section */}
          <div className="flex gap-4 justify-center lg:w-1/2">
            <motion.div variants={slideUp}>
              <Image
                src="/tech-know-camp.png"
                height={700}
                width={300}
                alt="Tech Know Camp"
                className="rounded-xl object-cover"
              />
            </motion.div>
            <motion.div variants={slideUp}>
              <Image
                src="/cracking_interview.jpeg"
                height={700}
                width={300}
                alt="Cracking Interview"
                className="rounded-xl object-cover"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h2
              variants={slideUp}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              <span>EXPLORE</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                PAST
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#9eff00] to-purple-500 bg-clip-text text-transparent">
                EVENTS
              </span>
            </motion.h2>
            <motion.div variants={slideUp} className="mt-6">
              <Button
                size="lg"
                className="bg-white text-purple-950 font-bold text-lg hover:bg-white/90 p-6"
              >
                EXPLORE
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-16"
          variants={fadeIn}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h2
              variants={slideUp}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              <span>PARTICIPATE</span>{" "}
              <span className="bg-gradient-to-r from-[#7cb2ff] to-[#67a6ff] bg-clip-text text-transparent">
                & START YOUR JOURNEY
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#7cb2ff] to-[#67a6ff] bg-clip-text text-transparent">
                WITH
              </span>{" "}
              <div className="relative inline-block text-6xl font-bold group">
                <span className="text-green-500 group-hover:text-black group-hover:scale-110 transition-all duration-1000 ease-out text-shadow">
                  ANDROID
                </span>{" "}
                <span className="text-black group-hover:text-green-500 group-hover:scale-110 transition-all duration-1000 ease-out text-shadow">
                  CLUB
                </span>
              </div>
            </motion.h2>
            {/* <motion.div variants={slideUp} className="mt-6">
              <Button
                size="lg"
                className="bg-white text-purple-950 font-bold text-lg hover:bg-white/90 p-6"
              >
                EXPLORE
              </Button>
            </motion.div> */}
          </div>

          {/* Images Section */}
          <div className="flex gap-4 justify-center lg:w-1/2">
            <motion.div variants={slideUp}>
              <Image
                src="/task_ops_2.jpeg"
                height={700}
                width={300}
                alt="Task Ops"
                className="rounded-xl object-cover"
              />
            </motion.div>
            <motion.div variants={slideUp}>
              <Image
                src="/webverse.png"
                height={700}
                width={300}
                alt="Webverse"
                className="rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tempo;
