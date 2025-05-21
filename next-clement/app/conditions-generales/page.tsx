'use client';
import { motion } from 'framer-motion';

export default function ConditionsGenerales() {
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
          Conditions Générales d&apos;Utilisation
        </motion.h1>
        <motion.div className="space-y-6 text-gray-700" variants={childVariants}>
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation du site
              <strong> www.clementbessieres.fr</strong> (ou l&apos;URL de votre site), édité par Clément
              Bessières. Elles définissent les droits et obligations des utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              2. Accès au site
            </h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d&apos;une connexion
              Internet. L&apos;accès peut être interrompu pour maintenance ou raisons techniques sans
              préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus (textes, images, projets) présents sur le site sont la propriété de
              Clément Bessières ou de tiers ayant autorisé leur utilisation. Toute reproduction,
              modification ou distribution sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              4. Responsabilité
            </h2>
            <p>
              L&apos;éditeur ne peut être tenu responsable des dommages directs ou indirects résultant de
              l&apos;utilisation du site, y compris les interruptions ou les erreurs techniques. Les liens
              externes (LinkedIn, GitHub, Discord) sont fournis à titre informatif et l&apos;éditeur n&apos;est
              pas responsable de leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              5. Droit applicable
            </h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige sera soumis à la
              compétence des tribunaux de Paris.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              6. Contact
            </h2>
            <p>
              Pour toute question relative aux CGU, contactez :
              <br />
              Clément Bessières
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
        </motion.div>
      </motion.div>
    </div>
  );
}