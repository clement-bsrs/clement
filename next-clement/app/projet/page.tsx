'use client';
import { motion } from 'framer-motion';

export default function Projet() {
  const projects = [
    // {
    //   title: 'Projet 1',
    //   description: 'Description de votre premier projet.',
    //   image: 'https://via.placeholder.com/300',
    //   link: '#',
    // },
    // {
    //   title: 'Projet 2',
    //   description: 'Description de votre deuxième projet.',
    //   image: 'https://via.placeholder.com/300',
    //   link: '#',
    // },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
          Mes Projets (N/D)
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={childVariants}
              whileHover={{ y: -5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-indigo-700 transition-all duration-300"
                >
                  Voir le projet
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}