"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: "easeOut" as const, delay: 0.4 },
  },
};

export default function Contacto() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Contact Section */}
        <section className="min-h-screen flex items-center justify-center bg-olive grain-overlay relative">
          {/* Decorative corner elements - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-16 w-px h-24 bg-charcoal/10" />
          <div className="hidden md:block absolute top-24 left-16 w-24 h-px bg-charcoal/10" />
          <div className="hidden md:block absolute bottom-24 right-16 w-px h-24 bg-charcoal/10" />
          <div className="hidden md:block absolute bottom-24 right-16 w-24 h-px bg-charcoal/10" />

          <div className="max-w-4xl mx-auto px-8 lg:px-12 py-32 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeIn} className="mb-16">
                <Image
                  src="/hero-logo.png"
                  alt="Sarroca 1935"
                  width={300}
                  height={300}
                  priority
                  className="w-48 md:w-64 h-auto object-contain mx-auto"
                />
              </motion.div>

              <motion.span
                variants={fadeInUp}
                className="section-label text-charcoal/60 block mb-6"
              >
                Contacto
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="display-large text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8"
              >
                Hablemos
              </motion.h1>

              <motion.div
                variants={lineExpand}
                className="w-16 h-px bg-charcoal/30 mx-auto mb-10 origin-center"
              />

              <motion.p
                variants={fadeInUp}
                className="body-refined text-lg text-charcoal/70 max-w-md mx-auto mb-16"
              >
                Para cualquier consulta o propuesta de colaboración, no dudes en ponerte en contacto.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <a
                  href="mailto:gg@sarroca1935.com"
                  className="inline-block group"
                >
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal group-hover:text-olive-dark transition-colors duration-500">
                    gg@sarroca1935.com
                  </span>
                  <motion.span
                    className="block h-px bg-charcoal/20 mt-3 origin-left"
                    whileHover={{ scaleX: 1.1, backgroundColor: "rgba(139, 126, 78, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-20 flex items-center justify-center gap-4"
              >
                <Image
                  src="/icon-logo.png"
                  alt="Sarroca"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain opacity-40"
                />
                <span className="text-charcoal/40 text-sm font-sans">
                  Barcelona, Catalunya
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
