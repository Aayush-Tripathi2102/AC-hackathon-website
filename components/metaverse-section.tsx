"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { staggerContainer, slideInLeft, slideInRight, slideUp } from "@/lib/motion-variants"

export function MetaverseSection() {
  return (
    <section className="relative overflow-hidden bg-purple-950 py-24 mx-auto">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-64 w-64 rotate-45 bg-gradient-to-r from-pink-900/10 to-purple-900/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rotate-45 bg-gradient-to-r from-[#9eff00]/10 to-green-500/10 blur-3xl" />
      </div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container relative"
      >
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left Character */}
          <motion.div
            variants={slideInLeft}
            className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          >
            <Image
              src="/date1.png"
              alt="Developer character"
              fill
              className="object-contain md:mt-16 shadow-xl shadow-gray-900 ml-4"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div variants={slideUp} className="text-center lg:text-left">
            <p className="text-xl font-bold text-[#9eff00]">9th JAN - 10th JAN 2024 [TENTATIVE]</p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              <span className="text-white">UNLOCKING</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                THE
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#9eff00] to-purple-500 bg-clip-text text-transparent">
                TECHNOLOGY
              </span>
            </h2>
            <motion.div
              variants={slideUp}
              className="mt-8 flex justify-center lg:justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-purple-950 font-bold text-lg hover:bg-white/90 p-8"
              >
                LEARN MORE
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Character */}
          <motion.div
            variants={slideInRight}
            className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          >
            <Image
              src="/date2.png"
              alt="VR character"
              fill
              className="object-contain shadow-xl shadow-gray-900 mr-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

