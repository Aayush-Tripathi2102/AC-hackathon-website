"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, fadeIn, scaleUp } from "@/lib/motion-variants"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Speaker 1",
    role: "CEO & CO-FOUNDER",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    name: "Speaker 2",
    role: "CTO & TECH LEAD",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    name: "Speaker 3",
    role: "PRODUCT LEAD",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    name: "Speaker 4",
    role: "DESIGN DIRECTOR",
    image: "/placeholder.svg?height=400&width=300"
  }
]

export function Speakers() {
  return (
    <section className="bg-purple-950 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container"
      >
        <motion.h2 variants={fadeIn} className="mb-12 text-6xl font-bold text-white">
          OUR
          <br />
          SPEAKERS
        </motion.h2>
        <motion.div className="grid gap-6 md:grid-cols-4">
          {speakers.map((speaker, index) => (
            <motion.div key={index} variants={scaleUp}>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={300}
                  height={400}
                  className="aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent opacity-60" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-sm text-pink-500">{speaker.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeIn} className="mt-8 text-center">
          <Button size="lg" variant="outline" className="text-white">
            View All Speakers
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

