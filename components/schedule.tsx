/** @format */

"use client";

import { motion } from "framer-motion";
import { staggerContainer, slideInLeft, slideUp } from "@/lib/motion-variants";
import { Button, MovingBorder } from "./ui/moving-border";
import { cn } from "@/lib/utils";

export function Schedule() {
  const days = [
    {
      day: "DAY 1 (EVENING)",
      title: "Kickoff and Orientation",
    },
    {
      day: "DAY 2",
      title: "Building, Collaborating, and Presentation",
    },
  ];

  return (
    <section className="w-full bg-purple-950 py-16 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-6 lg:px-16"
      >
        {/* Section Header */}
        <motion.h2
          variants={slideInLeft}
          className="mb-12 text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          24-HR HACKATHON
        </motion.h2>

        {/* Timeline Cards */}
        <motion.div
          variants={slideUp}
          className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 justify-center md:grid-cols-2 lg:grid-cols-2"
        >
          {days.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              // className="relative overflow-hidden rounded-lg bg-pink-800 p-6 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105"
            >
              <Button
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black dark:text-white dark:border-slate-800"
                duration={5000}
              >
                {/* <div className="absolute inset-0 bg-white/5 opacity-10 mix-blend-overlay"></div> */}
                {/* Content */}
                <div className="flex w-full items-center justify-center">
                  <div className="flex-col items-center justify-center relative w-80 h-28 lg:w-[494px] lg:h-28 z-10 mt-10">
                    <h3 className="text-2xl font-bold text-[#c7632e] transition-colors duration-300 group-hover:text-white">
                      {day.day}
                    </h3>
                    <p className="mt-4 text-lg text-white/80 transition-colors duration-300 group-hover:text-white">
                      {day.title}
                    </p>
                  </div>
                </div>
                {/* Floating Artistic Shapes */}
                {/* <div className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-pink-400/20 blur-xl"></div>
                <div className="absolute top-2 left-2 h-6 w-6 rounded-full bg-white/10 blur-lg"></div> */}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// bg-gradient-to-tr from-pink-600/20 to-pink-800/40
