"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const principles = [
  {
    number: "01",
    title: "Preservar y hacer crecer",
    description: "Cartera diversificada combinando activos tradicionales con inversiones innovadoras.",
  },
  {
    number: "02",
    title: "Rentabilidad sostenible",
    description: "Reinversión continua en activos de alto potencial y optimización del rendimiento.",
  },
  {
    number: "03",
    title: "Adaptabilidad",
    description: "Gestionar riesgos y capitalizar oportunidades emergentes del mercado.",
  },
  {
    number: "04",
    title: "Continuidad generacional",
    description: "Preparar a las futuras generaciones bajo los mismos principios estratégicos.",
  },
  {
    number: "05",
    title: "Relaciones estratégicas",
    description: "Socios clave incluyendo asesores financieros, operadores y emprendedores.",
  },
];

const investmentPillars = [
  {
    title: "Startups",
    subtitle: "Venture Capital",
    description: "Empresas emergentes con alto potencial de crecimiento en sectores innovadores.",
  },
  {
    title: "PYMEs",
    subtitle: "Private Equity",
    description: "Pequeñas y medianas empresas consolidadas con ingresos estables.",
  },
  {
    title: "Financiero",
    subtitle: "NPLs & Real Estate",
    description: "Carteras de préstamos y garantías hipotecarias con retornos atractivos.",
  },
  {
    title: "Alternativos",
    subtitle: "Tangible Assets",
    description: "Activos tangibles de valor que actúan como refugio patrimonial.",
  },
];

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
      delayChildren: 0.1,
    },
  },
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-olive grain-overlay">
          {/* Decorative corner elements - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-16 w-px h-24 bg-charcoal/10" />
          <div className="hidden md:block absolute top-24 left-16 w-24 h-px bg-charcoal/10" />
          <div className="hidden md:block absolute bottom-24 right-16 w-px h-24 bg-charcoal/10" />
          <div className="hidden md:block absolute bottom-24 right-16 w-24 h-px bg-charcoal/10" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center px-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="mb-12">
              <Image
                src="/hero-logo.png"
                alt="Sarroca 1935"
                width={280}
                height={280}
                priority
                className="w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto"
              />
            </motion.div>

            {/* Decorative line */}
            <motion.div
              variants={lineExpand}
              className="w-16 h-px bg-charcoal/30 mx-auto mb-10 origin-center"
            />

            <motion.h1
              variants={fadeInUp}
              className="display-large text-3xl md:text-4xl lg:text-5xl text-charcoal/90 mb-8"
            >
              Preservar. Crecer. Perdurar.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="body-refined text-base md:text-lg text-charcoal/70 max-w-lg mx-auto"
            >
              Vehículo de inversión familiar enfocado en el crecimiento y la preservación del patrimonio con una estrategia de largo plazo.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeIn}
              className="mt-20"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3"
              >
                <span className="section-label text-charcoal/40">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-charcoal/30 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 lg:py-44 bg-warm-white relative">
          <div className="max-w-5xl mx-auto px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-24"
            >
              <motion.span variants={fadeInUp} className="section-label block mb-6">
                Nuestra filosofía
              </motion.span>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal leading-tight text-balance"
                >
                  Filosofía de inversión y creación de valor
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <p className="body-refined text-charcoal/70">
                    Sarroca 1935 Asset Management se creó en 2023 con el objetivo de convertirse en un vehículo de inversión gestionado activamente.
                  </p>
                  <p className="body-refined text-charcoal/70">
                    Apostamos por una aproximación diferenciada, combinando principios de capital privado con una filosofía de <em>buy &amp; hold</em> para maximizar el valor sostenible de nuestras inversiones.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineExpand}
              className="decorative-line mb-24 origin-left"
            />

            {/* Mission Quote */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="mb-28 max-w-3xl"
            >
              <div className="flex gap-6 items-start">
                <span className="text-5xl md:text-6xl font-serif text-olive/40 leading-none select-none">&ldquo;</span>
                <blockquote className="text-xl md:text-2xl lg:text-[1.75rem] font-serif text-charcoal/80 leading-relaxed italic pt-2">
                  Combinar estabilidad financiera con un enfoque estratégico en el crecimiento y diversificación, asegurando la continuidad y prosperidad del patrimonio familiar.
                </blockquote>
              </div>
            </motion.div>

            {/* Principles */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-0"
            >
              {principles.map((principle, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group border-t border-border/60 py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-cream/30 transition-colors duration-500 -mx-4 px-4"
                >
                  <span className="text-olive-dark/40 text-sm font-sans tracking-wide md:col-span-1">
                    {principle.number}
                  </span>
                  <h3 className="text-lg md:text-xl text-charcoal font-serif md:col-span-4">
                    {principle.title}
                  </h3>
                  <p className="body-refined text-sm text-charcoal/60 md:col-span-7">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
              <div className="border-t border-border/60" />
            </motion.div>
          </div>
        </section>

        {/* Investment Focus Preview */}
        <section className="py-32 lg:py-44 bg-cream relative grain-overlay">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.span variants={fadeInUp} className="section-label block mb-6">
                Tesis de inversión
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-6 max-w-xl"
              >
                Estrategia diversificada
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="body-refined text-charcoal/70 max-w-xl"
              >
                De una posición de alto riesgo hacia una estrategia conservadora que garantice la preservación y el crecimiento del patrimonio.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16"
            >
              {investmentPillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-warm-white p-8 lg:p-10 hover-lift cursor-default"
                >
                  <span className="section-label text-olive-dark/50 block mb-4">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-[1.75rem] font-serif text-charcoal mb-4">
                    {pillar.title}
                  </h3>
                  <p className="body-refined text-sm text-charcoal/60">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link
                href="/inversiones"
                className="inline-flex items-center gap-4 group"
              >
                <span className="section-label text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
                  Ver tesis completa
                </span>
                <span className="w-8 h-px bg-charcoal/30 group-hover:w-12 group-hover:bg-charcoal transition-all duration-300" />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-charcoal/40 group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-300"
                >
                  <path d="M4 8h8M9 5l3 3-3 3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-olive-dark relative grain-overlay">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <Image
                  src="/icon-logo.png"
                  alt="Sarroca"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain invert"
                />
                <span className="text-warm-white/60 text-sm font-sans">Barcelona, Catalunya</span>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-4 text-warm-white/90 hover:text-warm-white transition-colors duration-300 group"
                >
                  <span className="text-lg md:text-xl font-serif">Hablemos</span>
                  <span className="w-10 h-px bg-warm-white/30 group-hover:w-14 group-hover:bg-warm-white/60 transition-all duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
