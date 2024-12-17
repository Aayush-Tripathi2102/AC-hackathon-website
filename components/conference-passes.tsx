"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { staggerContainer, slideInLeft } from "@/lib/motion-variants"

export function ConferencePasses() {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false)
  
  // Interval to trigger animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered(prev => !prev)  // Toggle hover state every 3 seconds
    }, 3000)

    return () => clearInterval(interval)  // Clean up the interval when the component unmounts
  }, [])

  return (
    <section className="relative bg-purple-950 py-16 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:justify-around lg:gap-24"
      >
        {/* Left Half: Content and Newsletter */}
        <motion.div
          variants={slideInLeft}
          className="flex-1 max-w-6xl space-y-6"
        >
          <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            REGISTER
            <br />
            NOW !
          </h2>
          <div className="rounded-lg border border-pink-500/20 bg-pink-500/10 p-8 backdrop-blur-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white">
              24-HR HACKATHON PASS
            </h3>
            <p className="mt-2 text-white/70">
              Enroll as a team of 2-4
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-pink-500"
              />
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 transition-all duration-300"
              >
                Continue
              </Button>
            </div>

            <div className="mt-4 flex justify-between text-sm text-white/70">
            <span>Size: 2 (300)</span>
              <span>Size: 3 (400)</span>
              <span>Size: 4 (450)</span>
              <span className="text-pink-500">Payment gateway @ vitchennai events</span>
              
            </div>
          </div>
        </motion.div>

        {/* Right Half: Floating 3D Object */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="/android.png"
            alt="Android 3D Object"
            initial={{ y: -10, rotate: 0 }}
            animate={{
              y: isHovered ? [0, -10, 0] : [0],  // Move only when hovered
              rotate: isHovered ? [0, 10, -10, 0] : [0], // Rotate only when hovered
            }}
            transition={{
              duration: 1, // Duration of the hover animation
              repeat: 0,   // No infinite repeat
              ease: "easeInOut",
            }}
            onHoverStart={() => setIsHovered(true)}  // Trigger movement when hover starts
            onHoverEnd={() => setIsHovered(false)}   // Stop movement when hover ends
            className="w-60 md:w-72 lg:w-80 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
