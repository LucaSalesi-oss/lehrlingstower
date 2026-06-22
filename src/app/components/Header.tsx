"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, X, Menu } from "lucide-react";
import ScrollHeader from "./ScrollHeader";

const navLinks = [
  { href: "#fuer-schulen", label: "Für Schulen" },
  { href: "#so-funktionierts", label: "So funktionierts" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <ScrollHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Lehrlingstower.ch"
              width={1013}
              height={296}
              className="logo-light header-logo h-14 w-auto drop-shadow-lg transition-all duration-500"
            />
            <Image
              src="/logo-dark.png"
              alt="Lehrlingstower.ch"
              width={1013}
              height={296}
              className="logo-dark header-logo h-14 w-auto transition-all duration-500"
              style={{ display: "none" }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Termin vereinbaren
            <ChevronRight className="w-4 h-4" />
          </a>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="hamburger-btn md:hidden p-2 rounded-lg transition-colors"
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </ScrollHeader>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <span className="font-bold text-foreground text-lg">
                Lehrlings<span className="text-primary">tower</span>.ch
              </span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-xl text-foreground font-medium hover:bg-teal-50 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 pb-8">
              <a
                href="#kontakt"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Termin vereinbaren
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
