'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  fadeIn,
  slideUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  scaleUp,
} from '@/lib/motion-variants';

const ImageGallery: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-700 to-purple-900">
      {/* Motion Wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
      >
        {/* First Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src="/webverse.png"
            alt="Nature Sphere"
            width={300}
            height={350}
            className="object-cover rounded-lg w-full h-auto"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src="/task_ops_2.jpeg"
            alt="Futuristic Art"
            width={100}
            height={350}
            className="object-cover rounded-lg w-full h-auto"
          />
        </motion.div>

        {/* Side Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center text-left text-white"
        >
          <h2 className="font-bold text-2xl mb-4">Explore AI Images</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-medium">→ AI Images</span>
              <span className="ml-2 text-sm">(120)</span>
            </li>
            <li>Nature Images <span className="ml-2 text-sm">(165)</span></li>
            <li>Hand Draw <span className="ml-2 text-sm">(84)</span></li>
          </ul>
          <p className="mt-6 text-sm">
            Whether you are an emerging artist or an established creator, we offer tailored
            solutions that amplify your reach.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-semibold text-blue-300 hover:underline"
          >
            Explore All →
          </a>
        </motion.div>

        {/* Third Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src="/tech-know-camp.png"
            alt="Abstract Glass"
            width={350}
            height={350}
            className="object-cover rounded-lg w-full h-auto"
          />
        </motion.div>

        {/* Fourth Image */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src="/cracking_interview.jpeg"
            alt="Pink Mountain"
            width={350}
            height={350}
            className="object-cover rounded-lg w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImageGallery;
