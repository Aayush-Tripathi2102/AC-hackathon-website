"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, slideInLeft, scaleUp } from "@/lib/motion-variants"

const projects = [
  {
    title: "VR Social Network",
    description: "A virtual reality platform for social interactions",
    image: "/placeholder.svg?height=300&width=400&text=VR+Social+Network",
  },
  {
    title: "AR Education App",
    description: "Augmented reality app for interactive learning",
    image: "/placeholder.svg?height=300&width=400&text=AR+Education+App",
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting using blockchain",
    image: "/placeholder.svg?height=300&width=400&text=Blockchain+Voting",
  },
  {
    title: "AI Health Assistant",
    description: "Personalized health recommendations using AI",
    image: "/placeholder.svg?height=300&width=400&text=AI+Health+Assistant",
  },
]

export function PastProjects() {
  return (
    <section className="bg-purple-950 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container"
      >
        <motion.h2 variants={slideInLeft} className="mb-12 text-5xl font-bold text-white md:text-6xl">
          Past Winning Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div key={index} variants={scaleUp} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

