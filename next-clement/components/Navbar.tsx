'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900">
          Clément Bessières
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Accueil
          </Link>
          <Link
            href="/projet"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Projet
          </Link>
          <Link
            href="/cv"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            CV
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 font-medium text-lg"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                href="/projet"
                className="text-gray-600 hover:text-indigo-600 font-medium text-lg"
                onClick={toggleMenu}
              >
                Projet
              </Link>
              <Link
                href="/cv"
                className="text-gray-600 hover:text-indigo-600 font-medium text-lg"
                onClick={toggleMenu}
              >
                CV
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-indigo-600 font-medium text-lg"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}