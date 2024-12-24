"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { slideUp, scaleUp } from "@/lib/motion-variants"

const prizes = [
  {
    title: "METAVERSE VISIONARY",
    amount: "$50K",
    description: "Prepare for the project launch! Outstanding contributors will be rewarded with awards, prizes, and acknowledgment.",
    isMain: true
  },
  {
    title: "For the Runner-up",
    amount: "(TBA)",
    icon: "/runnerup.png",
    isMain: false
  },
  {
    title: "For all",
    amount: "E-Certificates for participation",
    icon: "/certificate.png",
    isMain: false
  },
  {
    title: "For the domain winners",
    amount: "Win swags with your knowledge",
    icon: "/swags.png",
    isMain: false
  }
]

export function PrizesSection() {
  return (
    <section className="bg-purple-950 py-16 px-6 md:px-12 lg:py-24 lg:px-24 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className="container mx-auto"
      >
        <div className="space-y-6">
          {/* Header */}
          <motion.h2
            variants={slideUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            PRIZES
          </motion.h2>
          <motion.p
            variants={slideUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-lg md:text-xl text-white/80"
          >
            Get ready to launch your project! The top performers will receive awards, prizes, and recognition.
          </motion.p>

          {/* Cards Section */}
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2"
            variants={slideUp}
          >
            {/* Main Prize Card */}
            <motion.div
              variants={scaleUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl bg-purple-600 p-8 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute -left-4 -top-4 rotate-[-15deg]">
                <div className="relative h-24 w-32 bg-orange-500 p-4 text-center text-2xl md:text-3xl font-bold text-white shadow-lg">
                  Undisclosed
                  <div className="absolute bottom-0 left-0 h-4 w-full bg-orange-600"></div>
                  <div className="absolute -bottom-2 left-0 h-2 w-full bg-orange-700"></div>
                </div>
              </div>
              <div className="mt-16 space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold text-white">VISIONARY</h3>
                <h3 className="text-2xl md:text-4xl font-bold text-white">WINNER</h3>
                <p className="text-base md:text-lg text-white/80">
                  Prepare for the project launch! Outstanding contributors will be rewarded with awards, prizes, and acknowledgment.
                </p>
              </div>
            </motion.div>

            {/* Secondary Prize Cards */}
            <div className="space-y-6">
              {prizes.slice(1).map((prize, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-6 rounded-2xl bg-purple-600 p-6 shadow-lg hover:shadow-2xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full bg-purple-500"
                  >
                    <Image
                      src={prize.icon || "/ai1.png"} //Defaukt icon
                      alt={prize.icon ? `${prize.title} Icon` : "Default Icon"}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-[#9eff00]">
                      {prize.amount}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {prize.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
