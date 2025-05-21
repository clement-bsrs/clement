'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Contact() {
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
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          variants={childVariants}
        >
          Contactez-moi
        </motion.h1>
        <div className="max-w-lg mx-auto text-center space-y-8">
          {/* Adresse e-mail */}
          <motion.div variants={childVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Email</h2>
            <a
              href="mailto:clementbessieres.pro@gmail.com"
              className="flex items-center justify-center space-x-2 text-indigo-600 hover:text-indigo-800 text-lg md:text-xl font-medium transition-colors duration-300"
            >
              <FaEnvelope size={24} />
              <span>clementbessieres.pro@gmail.com</span>
            </a>
          </motion.div>

          {/* Liens vers les réseaux sociaux */}
          <motion.div variants={childVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Mes réseaux
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/clementbessieres"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-indigo-700 transition-all duration-300"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/clement-bsrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-indigo-700 transition-all duration-300"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-indigo-700 transition-all duration-300"
              >
                <FaDiscord size={20} />
                <span>clxm.bsrs</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}