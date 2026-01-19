"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-white border-t border-border/30">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Logo and tagline */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/logo.png"
                alt="Sarroca 1935"
                width={120}
                height={42}
                className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
              />
            </Link>
            <p className="body-refined text-sm text-charcoal/60 max-w-xs">
              Vehículo de inversión familiar enfocado en la preservación y crecimiento del patrimonio.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3">
            <h4 className="section-label mb-6">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/inversiones"
                  className="text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-300"
                >
                  Inversiones
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="section-label mb-6">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:gg@sarroca1935.com"
                className="block text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-300"
              >
                gg@sarroca1935.com
              </a>
              <p className="text-sm text-charcoal/40">
                Barcelona, Catalunya
              </p>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="decorative-line mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-charcoal/40">
            © {currentYear} Sarroca 1935 Asset Management
          </p>
          <p className="text-[10px] text-olive-dark/50 tracking-wide-elegant">
            EST. 1935
          </p>
        </div>
      </div>
    </footer>
  );
}
