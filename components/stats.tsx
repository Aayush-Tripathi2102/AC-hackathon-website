"use client"

import { motion } from "framer-motion"
import { staggerContainer, slideUp } from "@/lib/motion-variants"

export function Stats() {
  const stats = [
    { number: "4+", label: "FORMATS" },
    { number: "8+", label: "WORKSHOPS" },
    { number: "20+", label: "SPEAKERS" },
    { number: "16+", label: "TALKS" },
  ]

  return (
    <section className="bg-gradient-to-r from-purple-950 to-indigo-900 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={slideUp}
              className="text-center"
            >
              <motion.h3 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-pink-500 md:text-6xl"
              >
                {stat.number}
              </motion.h3>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="mt-2 text-sm text-white/70 md:text-base"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

