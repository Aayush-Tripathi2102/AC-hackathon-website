"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// import { RollingSlideshow } from "./rolling-slideshow"
import { fadeIn, slideInLeft, slideInRight, slideUp, staggerContainer } from "@/lib/motion-variants"
import { useToast } from "@/hooks/use-toast"

export function Hero() {
  const { toast } = useToast()

  const handleRegisterClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Registration will be available soon. Stay tuned!",
      duration: 3000,
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-purple-950 justify-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Abstract+Background')] bg-cover bg-center bg-no-repeat opacity-20" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container relative grid gap-8 md:grid-cols-2"
      >
        {/* Left Section: Text Content */}
        <motion.div
          variants={slideInLeft}
          className="space-y-8 sm:ml-24 md:space-y-10 md:px-8 flex flex-col justify-center ml-4 mt-36"
        >
          <h1 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl leading-tight">
            <span className="block bg-green-400 bg-clip-text text-transparent transition-all duration-500 hover:text-green-300 md:shadow-sm md:shadow-green-100">
              HACK - N
            </span>
            <span className="block bg-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:text-blue-300 shadow-xs shadow-blue-700">
              DROID
            </span>
          </h1>
          <motion.p
            variants={slideUp}
            className="text-lg text-white/70 md:text-xl lg:text-2xl"
          >
            Join our Android Hackathon to showcase your creativity, tackle unique challenges, and win incredible prizes!
          </motion.p>
          <motion.div variants={fadeIn} className="space-x-4 mt-2 md:mt-8">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-800"
              onClick={handleRegisterClick}
            >
              Register Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-green-100 text-green-900 border-green-300 hover:bg-green-200 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-green-800"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right Section: Image */}
        <motion.div
          variants={slideInRight}
          className="relative flex items-center justify-center md:bg-purple-900 bg-purple-950 pt-36"
        >
          <motion.img
            src="/heroimage.png"
            alt="Hackathon Image"
            className="md:w-2/3 h-auto rounded-lg shadow-sm object-cover transition-all duration-500 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

