"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
    '/image3.png', // Correct path
    '/image2.png', // Add the rest of the images
    '/image1.png',
    '/image1.png',
  ];
  

export function RollingSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slideshow image ${currentIndex + 1}`}
            fill
            className="rounded-full px-20"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

