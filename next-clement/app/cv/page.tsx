'use client';
import { motion } from 'framer-motion';

export default function CV() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
          variants={childVariants}
        >
          Mon CV
        </motion.h1>

        {/* Bouton de téléchargement */}
        <motion.div
          className="text-center mb-12"
          variants={childVariants}
        >
          <a
            href="/cv.pdf"
            download="cv_clement_bessieres.pdf"
            className="inline-block bg-indigo-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
          >
            Télécharger mon CV
          </a>
        </motion.div>

        {/* Aperçu du PDF */}
        <motion.div
          className="hidden md:flex justify-center"
          variants={childVariants}
        >
          <div className="w-full max-w-4xl">
            <embed
              src="/cv.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
              className="border border-gray-200 rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        {/* Message pour mobile */}
        <motion.div
          className="md:hidden text-center text-gray-600 text-lg"
          variants={childVariants}
        >
          <p>Veuillez télécharger le CV pour le consulter sur mobile.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}