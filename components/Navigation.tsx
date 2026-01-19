"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/inversiones", label: "Inversiones" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="/logo.png"
              alt="Sarroca 1935"
              width={160}
              height={56}
              priority
              className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={`section-label transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-charcoal"
                        : "text-charcoal/60 group-hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-olive transition-all duration-300 ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal/70 hover:text-charcoal transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-px bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-warm-white/98 backdrop-blur-md border-b border-border/30"
          >
            <ul className="px-8 py-8 space-y-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 ${
                      pathname === item.href
                        ? "text-charcoal"
                        : "text-charcoal/60"
                    }`}
                  >
                    <span
                      className={`w-4 h-px transition-all duration-300 ${
                        pathname === item.href ? "bg-olive" : "bg-charcoal/20"
                      }`}
                    />
                    <span className="font-serif text-xl">{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
