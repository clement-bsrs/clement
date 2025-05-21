'use client';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          variants={childVariants}
        >
          Bienvenue sur mon site
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={childVariants}
        >
          Découvrez mes projets, mon CV et contactez-moi pour collaborer !
        </motion.p>
        <motion.a
          href="/cv"
          className="inline-block bg-indigo-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
          variants={childVariants}
        >
          Voir mon CV
        </motion.a>
      </motion.div>
    </div>
  );
}