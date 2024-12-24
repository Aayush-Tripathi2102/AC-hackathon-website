"use client"

import { motion } from "framer-motion"
import { staggerContainer, slideInLeft, slideUp } from "@/lib/motion-variants"

const prizes = [
  {
    title: "WINNER",
    amount: "Undisclosed",
    description: "The ultimate champion with exceptional performance and creativity."
  },
  {
    title: "RUNNER UP",
    amount: "Undisclosed",
    description: "Outstanding efforts and innovation will secure this spot."
  },
  {
    title: "DOMAIN WINNER",
    amount: "Undisclosed",
    description: "Top project in a specific domain showcasing expertise and excellence."
  },
  {
    title: "SWAGS & GOODIES",
    amount: "Exciting Rewards",
    description: "Special swags and goodies for participants to celebrate their hard work."
  }
]

export function Prizes() {
  return (
    <section className="bg-purple-950 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container"
      >
        <motion.h2 variants={slideInLeft} className="mb-12 text-6xl font-bold text-white">
          PRIZES
        </motion.h2>
        <motion.div className="grid gap-6 md:grid-cols-4">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="rounded-lg border border-pink-500/20 bg-pink-500/10 p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-pink-500">{prize.title}</h3>
              <div className="mt-4 text-4xl font-bold text-white">{prize.amount}</div>
              <p className="mt-2 text-white/70">{prize.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

