"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, X, Menu } from "lucide-react";
import ScrollHeader from "./ScrollHeader";
import { useLanguage, Lang } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

const langFlags: Record<Lang, string> = { de: "🇩🇪", fr: "🇫🇷", it: "🇮🇹" };
const langLabels: Record<Lang, string> = { de: "DE", fr: "FR", it: "IT" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const navLinks = [
    { href: "#fuer-schulen", label: t.fuerSchulen },
    { href: "#so-funktionierts", label: t.soFunktionierts },
    { href: "#vorteile", label: t.vorteile },
    { href: "#faq", label: t.faq },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <ScrollHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
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

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              {(["de", "fr", "it"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-sm transition-colors ${
                    lang === l
                      ? "bg-primary text-white font-bold"
                      : "text-slate-500 hover:text-primary hover:bg-slate-100"
                  }`}
                >
                  <span className="text-base leading-none">{langFlags[l]}</span>
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              {t.terminVereinbaren}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="hamburger-btn md:hidden p-2 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </ScrollHeader>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <span className="font-bold text-foreground text-lg">
                Lehrlings<span className="text-primary">tower</span>.ch
              </span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 px-6 pt-4">
              {(["de", "fr", "it"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); closeMenu(); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    lang === l
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span className="text-base leading-none">{langFlags[l]}</span>
                  {langLabels[l]}
                </button>
              ))}
            </div>

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

            <div className="px-6 pb-8">
              <a
                href="#kontakt"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                {t.terminVereinbaren}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
