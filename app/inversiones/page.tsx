"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const investmentPillars = [
  {
    number: "01",
    title: "Startups",
    subtitle: "Venture Capital",
    items: [
      "Inversiones en empresas emergentes con alto potencial de crecimiento, enfocadas en sectores innovadores.",
      "Estrategia basada en diversificación dentro del portfolio y seguimiento activo del desarrollo empresarial.",
      "Inversión como LPs de vehículos de inversión colectiva con el objetivo de aumentar exposición y reducir el riesgo.",
    ],
  },
  {
    number: "02",
    title: "PYMEs",
    subtitle: "Private Equity",
    items: [
      "Participaciones en pequeñas y medianas empresas consolidadas, con capacidad de generación de ingresos estables.",
      "Enfoque en sectores estratégicos y oportunidades de crecimiento orgánico o a través de M&A.",
    ],
  },
  {
    number: "03",
    title: "Financiero",
    subtitle: "NPLs & Real Estate",
    items: [
      "Inversión en carteras de préstamos morosos (NPLs) con alto retorno potencial.",
      "Inversión inmobiliaria vía préstamos con garantía hipotecaria, plazos 6-12 meses y LTV <50% con pago de intereses mensuales o anuales.",
    ],
  },
  {
    number: "04",
    title: "Alternativos",
    subtitle: "Tangible Assets",
    items: [
      "Gestión de renta variable personal diversificada en mercados financieros con un enfoque oportunista y flexible.",
      "Inversiones alternativas en bienes tangibles de valor, como relojes de lujo, que actúan como activos refugio.",
    ],
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

export default function Inversiones() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 lg:pt-44 lg:pb-32 bg-olive grain-overlay relative">
          {/* Decorative corner elements - hidden on mobile */}
          <div className="hidden md:block absolute top-32 left-16 w-px h-16 bg-charcoal/10" />
          <div className="hidden md:block absolute top-32 left-16 w-16 h-px bg-charcoal/10" />

          <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="section-label text-charcoal/60 block mb-6">
                Tesis de inversión
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="display-large text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 max-w-3xl"
              >
                Tesis de Inversión
              </motion.h1>

              <motion.div
                variants={lineExpand}
                className="w-20 h-px bg-charcoal/30 mb-8 origin-left"
              />

              <motion.p
                variants={fadeInUp}
                className="body-refined text-lg md:text-xl text-charcoal/70 max-w-2xl"
              >
                De una posición de alto riesgo en una compañía emergente hacia una estrategia diversificada y conservadora que garantice la preservación y el crecimiento del patrimonio.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Investment Pillars */}
        <section className="py-32 lg:py-44 bg-warm-white">
          <div className="max-w-5xl mx-auto px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-0"
            >
              {investmentPillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border-t border-border/60 py-12 lg:py-16"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
                    {/* Number and title */}
                    <div className="lg:col-span-4">
                      <span className="text-olive-dark/30 text-sm font-sans tracking-wide block mb-3">
                        {pillar.number}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
                        {pillar.title}
                      </h2>
                      <span className="section-label text-olive-dark/60">
                        {pillar.subtitle}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="lg:col-span-8">
                      <ul className="space-y-6">
                        {pillar.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-4">
                            <span className="w-1 h-1 rounded-full bg-olive mt-3 flex-shrink-0" />
                            <p className="body-refined text-charcoal/70">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-border/60" />
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-32 lg:py-44 bg-cream grain-overlay">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="mb-8">
                <Image
                  src="/icon-logo.png"
                  alt="Sarroca"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain opacity-50"
                />
              </motion.div>

              <motion.span variants={fadeInUp} className="section-label block mb-6">
                Nuestra aproximación
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif text-charcoal mb-10"
              >
                Inversión con visión de largo plazo
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="body-refined text-charcoal/70">
                  Nos especializamos en inversiones diversificadas que abarcan sectores clave como mercados financieros, real estate y negocios familiares consolidados.
                </p>
                <p className="body-refined text-charcoal/70">
                  Nuestro enfoque se centra en la creación de valor a través de reinversiones continuas y estrategias de crecimiento orgánico e inorgánico, siempre con una visión de largo plazo.
                </p>
              </motion.div>

              <motion.div
                variants={lineExpand}
                className="decorative-line my-12 origin-left"
              />

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="section-label text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
                    Hablemos
                  </span>
                  <span className="w-8 h-px bg-charcoal/30 group-hover:w-12 group-hover:bg-charcoal transition-all duration-300" />
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
