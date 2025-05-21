'use client';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
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
        className="container mx-auto px-4 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          variants={childVariants}
        >
          Mentions Légales
        </motion.h1>
        <motion.div className="space-y-6 text-gray-700" variants={childVariants}>
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>www.clementbessieres.fr</strong> (ou l&apos;URL de votre site) est édité par :
              <br />
              Clément Bessières, personne physique
              <br />
              Email :{' '}
              <a
                href="mailto:clementbessieres.pro@gmail.com"
                className="text-indigo-600 hover:text-indigo-800"
              >
                clementbessieres.pro@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par :
              <br />
              Vercel Inc.
              <br />
              340 King St E 2nd Floor, Toronto, ON M5A 1K8, Canada
              <br />
              Site web :{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              3. Protection des données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle via des formulaires ou des cookies. Les
              interactions se limitent à des liens vers des services externes (e-mail, LinkedIn,
              GitHub, Discord). Pour toute question concernant vos données, contactez-moi à l&apos;adresse
              indiquée ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              Le contenu de ce site (textes, images, projets) est la propriété de Clément Bessières.
              Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}