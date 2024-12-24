"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const images = [
  {
    src: '/ai1.png',
    alt: 'AI generated sphere in desert',
    category: 'Machine Learning'
  },
  {
    src: '/ai2.png',
    alt: 'AI generated circular structure',
    category: 'Blockchain (Web 3)'
  },
  {
    src: '/ai3.png',
    alt: 'AI generated crystal sphere in water',
    category: 'Data Science'
  }
]

const categories = ['All', 'Machine Learning', 'Data Science', 'Web3']

export function AIImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section className="bg-purple-950 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
        >
          DOMAINS OFFERED
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-pink-500 text-white hover:bg-pink-600' 
                  : 'bg-transparent text-white hover:bg-white/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-3xl text-purple-300">
            Explore and learn your skills
          </p>
         
        </motion.div>
      </div>
    </section>
  )
}
