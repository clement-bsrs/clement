'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants for footer
  const footerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-white shadow-inner py-4"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 text-center text-gray-600">
        <div className="flex justify-center space-x-4 mb-2">
          <Link
            href="/mentions-legales"
            className="text-sm hover:text-indigo-600 transition-colors duration-200"
          >
            Mentions Légales
          </Link>
          <Link
            href="/conditions-generales"
            className="text-sm hover:text-indigo-600 transition-colors duration-200"
          >
            CGU
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Clément Bessières. Tous droits réservés.
        </p>
      </div>
    </motion.footer>
  );
}