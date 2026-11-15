"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollVideo from "./components/ScrollVideo";
import { ScrollReveal, ScrollScale } from "./components/ScrollReveal";
import CountUp from "./components/CountUp";
import Header from "./components/Header";
import SwissMap3D from "./components/SwissMap3D";
import RegionInquiryDialog from "./components/RegionInquiryDialog";
import type { Region } from "./components/regions";
import translations from "./i18n/translations";
import { useLanguage } from "./i18n/LanguageContext";
import {
  Monitor,
  Users,
  BarChart3,
  QrCode,
  School,
  Building2,
  ChevronRight,
  Check,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Gift,
  Tv,
  CalendarDays,
  Briefcase,
  Clock,
  MapPinned,
} from "lucide-react";

function useT() {
  const { lang } = useLanguage();
  return translations[lang];
}

function VideoHero() {
  const t = useT();
  return (
    <ScrollVideo
      scrollContent={
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#so-funktionierts"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold border border-white/30 hover:bg-white/30 transition-colors"
          >
            {t.hero.more}
          </a>
        </div>
      }
    >
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
        {t.hero.title1}{" "}
        <span className="text-primary-light">{t.hero.titleHighlight}</span>{" "}
        {t.hero.title2}
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow">
        {t.hero.subtitle}
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-8 h-8 text-white/60 rotate-90" />
      </div>
    </ScrollVideo>
  );
}

function ProblemSolution() {
  const t = useT();
  const problems = [
    { icon: Target, text: t.challenge.bullet1, color: "text-rose-500", bg: "bg-rose-50" },
    { icon: Users, text: t.challenge.bullet2, color: "text-rose-500", bg: "bg-rose-50" },
    { icon: TrendingUp, text: t.challenge.bullet3, color: "text-rose-500", bg: "bg-rose-50" },
  ];
  const solutions = [
    { icon: Monitor, text: t.solution.bullet1, color: "text-primary", bg: "bg-teal-50" },
    { icon: School, text: t.solution.bullet2, color: "text-primary", bg: "bg-teal-50" },
    { icon: QrCode, text: t.solution.bullet3, color: "text-primary", bg: "bg-teal-50" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">{t.mission.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.mission.title}
          </h2>
        </ScrollReveal>

        {/* Konnektor: Schüler ← Lehrlingstower → Unternehmen */}
        <ScrollReveal>
          <div className="relative max-w-5xl mx-auto mb-20">
            {/* Animierte Verbindungslinien (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] -translate-y-1/2 h-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-primary to-amber-300 opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-primary to-amber-400 opacity-60 animate-[pulse_2s_ease-in-out_infinite]" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-rose-400 rounded-full animate-[connectorDotLeft_3s_ease-in-out_infinite]" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full animate-[connectorDotRight_3s_ease-in-out_infinite]" />
            </div>

            {/* Desktop: 3-Spalten Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-4 items-center">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg">
                    <Image src="/person-student.webp" alt="Schüler" width={280} height={280} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="bg-rose-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md max-w-[220px] leading-snug">
                  &ldquo;{t.challenge.speechStudent}&rdquo;
                </div>
              </div>
              <div className="flex flex-col items-center text-center py-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite]">
                    <Monitor className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-ping" style={{ animationDuration: "3s" }} />
                </div>
                <p className="mt-3 text-sm font-bold text-primary">Lehrlingstower</p>
                <p className="text-xs text-muted mt-1">verbindet beide Seiten</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg">
                    <Image src="/person-business.webp" alt="Geschäftsführer" width={280} height={280} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="bg-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md max-w-[220px] leading-snug">
                  &ldquo;{t.challenge.speechBusiness}&rdquo;
                </div>
              </div>
            </div>

            {/* Mobile: Vertikaler Flow mit durchgehender Linie */}
            <div className="lg:hidden relative flex flex-col items-center">
              {/* Durchgehende vertikale Linie */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-300 via-primary to-amber-300 opacity-40" />

              {/* Schüler */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg bg-white">
                  <Image src="/person-student.webp" alt="Schüler" width={280} height={280} className="w-full h-full object-cover object-top" />
                </div>
                <div className="mt-2 bg-rose-500 text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-md max-w-[220px] leading-snug">
                  &ldquo;{t.challenge.speechStudent}&rdquo;
                </div>
              </div>

              {/* Linie mit animiertem Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-0.5 h-8 bg-gradient-to-b from-rose-400 to-primary">
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-400 rounded-full animate-[connectorDotDown_2s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Lehrlingstower Icon */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                </div>
                <p className="mt-1.5 text-xs font-bold text-primary">Lehrlingstower</p>
              </div>

              {/* Linie mit animiertem Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-0.5 h-8 bg-gradient-to-b from-primary to-amber-400">
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full animate-[connectorDotDown_2s_ease-in-out_infinite_0.5s]" />
                </div>
              </div>

              {/* Geschäftsführer */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg bg-white">
                  <Image src="/person-business.webp" alt="Geschäftsführer" width={280} height={280} className="w-full h-full object-cover object-top" />
                </div>
                <div className="mt-2 bg-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-md max-w-[220px] leading-snug">
                  &ldquo;{t.challenge.speechBusiness}&rdquo;
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Herausforderung & Lösung Karten */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          <ScrollReveal className="flex">
            <div className="bg-rose-50/50 rounded-2xl p-8 border-2 border-rose-200/60 flex flex-col w-full relative">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                    <span className="text-rose-500 text-lg font-bold">✕</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t.challenge.label}</h3>
                </div>
                <p className="text-sm text-muted mb-6">{t.challenge.title}</p>
                <div className="space-y-4">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-9 h-9 ${p.bg} rounded-lg flex items-center justify-center shrink-0`}>
                        <p.icon className={`w-4 h-4 ${p.color}`} />
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pt-1.5">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex">
            <div className="bg-teal-50/50 rounded-2xl p-8 border-2 border-primary/30 flex flex-col w-full relative shadow-lg shadow-primary/5">
              <div className="absolute -top-3 right-6">
                <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  Lehrlingstower
                </span>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t.solution.label}</h3>
                </div>
                <p className="text-sm text-muted mb-6">{t.solution.title}</p>
                <div className="space-y-4">
                  {solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center shrink-0`}>
                        <s.icon className={`w-4 h-4 ${s.color}`} />
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pt-1.5">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useT();
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
              {t.about.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
              {t.about.title}
            </h2>
            <p className="text-lg text-teal-100 leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-teal-100 leading-relaxed mb-6">
              {t.about.p2}
            </p>
            <p className="text-lg text-white font-medium leading-relaxed">
              {t.about.p3}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/saeule-photo.png"
              alt={t.about.imgAlt}
              width={800}
              height={450}
              className="w-full max-w-xl h-auto drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ForBusinesses() {
  const t = useT();
  const icons = [Clock, MapPinned, QrCode];
  const colors = [
    { colorLight: "bg-amber-50", colorText: "text-amber-600" },
    { colorLight: "bg-teal-50", colorText: "text-teal-600" },
    { colorLight: "bg-violet-50", colorText: "text-violet-600" },
  ];

  return (
    <section id="fuer-unternehmen" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3 block">{t.forBusinesses.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.forBusinesses.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.forBusinesses.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.forBusinesses.benefits.map((b, i) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <ScrollReveal key={b.title} delay={i * 150} className="flex">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col w-full">
                  <div className={`w-12 h-12 ${c.colorLight} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${c.colorText}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 sm:p-10 border border-amber-200/50 max-w-3xl mx-auto text-center">
            <Briefcase className="w-10 h-10 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">
              {t.forBusinesses.ctaTitle}
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              {t.forBusinesses.ctaText}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              {t.forBusinesses.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ForSchools() {
  const t = useT();
  const icons = [Gift, Tv, CalendarDays];
  const colors = [
    { colorLight: "bg-teal-50", colorText: "text-teal-600" },
    { colorLight: "bg-violet-50", colorText: "text-violet-600" },
    { colorLight: "bg-amber-50", colorText: "text-amber-600" },
  ];

  return (
    <section id="fuer-schulen" className="py-24 bg-gradient-to-b from-teal-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">{t.forSchools.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.forSchools.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.forSchools.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.forSchools.benefits.map((b, i) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <ScrollReveal key={b.title} delay={i * 150} className="flex">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col w-full">
                  <div className={`w-12 h-12 ${c.colorLight} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${c.colorText}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-2xl p-8 sm:p-10 border border-primary/10 max-w-3xl mx-auto text-center">
            <School className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">
              {t.forSchools.ctaTitle}
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              {t.forSchools.ctaText}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              {t.forSchools.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const t = useT();
  const stepMeta = [
    { icon: Building2, color: "bg-teal-500", colorLight: "bg-teal-50", colorText: "text-teal-600", emoji: "🏢" },
    { icon: Monitor, color: "bg-amber-500", colorLight: "bg-amber-50", colorText: "text-amber-600", emoji: "🎨" },
    { icon: Users, color: "bg-violet-500", colorLight: "bg-violet-50", colorText: "text-violet-600", emoji: "📱" },
    { icon: BarChart3, color: "bg-rose-500", colorLight: "bg-rose-50", colorText: "text-rose-600", emoji: "📊" },
  ];

  return (
    <section id="so-funktionierts" className="relative py-24 bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.howItWorks.subtitle}
          </p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-teal-300 via-amber-300 via-violet-300 to-rose-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {t.howItWorks.steps.map((step, i) => {
              const m = stepMeta[i];
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="flex flex-col items-center text-center group">
                    <div className={`relative w-14 h-14 ${m.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">{m.emoji}</span>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-700 shadow-md border border-slate-100">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const t = useT();
  const iconList = [Target, QrCode, TrendingUp, Zap, School, Building2];
  const colorList = [
    { colorLight: "bg-teal-50", colorText: "text-teal-600" },
    { colorLight: "bg-amber-50", colorText: "text-amber-600" },
    { colorLight: "bg-violet-50", colorText: "text-violet-600" },
    { colorLight: "bg-rose-50", colorText: "text-rose-600" },
    { colorLight: "bg-sky-50", colorText: "text-sky-600" },
    { colorLight: "bg-emerald-50", colorText: "text-emerald-600" },
  ];

  return (
    <section id="vorteile" className="relative py-24 bg-gradient-to-br from-white via-amber-50/30 to-teal-50/30 overflow-hidden">
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.benefits.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.benefits.subtitle}
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {t.benefits.items.map((b, i) => {
            const Icon = iconList[i];
            const c = colorList[i];
            return (
              <ScrollReveal key={b.title} delay={i * 100} className="flex">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col w-full">
                  <div className={`w-12 h-12 ${c.colorLight} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${c.colorText}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-auto">{b.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const t = useT();
  const { lang } = useLanguage();
  const [region, setRegion] = useState<Region | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            {t.map.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.map.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.map.subtitle}
          </p>
        </ScrollReveal>
        <div className="motion-safe:animate-[mapFloat_7s_ease-in-out_infinite]">
          <SwissMap3D lang={lang} pillTemplate={t.map.regionPill} onSelectRegion={setRegion} />
        </div>
        {region && <RegionInquiryDialog region={region} onClose={() => setRegion(null)} />}
        <p className="mt-4 text-center text-sm text-muted">
          <span className="hidden [@media(hover:hover)]:inline">{t.map.hintHover}</span>
          <span className="[@media(hover:hover)]:hidden">{t.map.hintTap}</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            {t.map.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const t = useT();
  const stats = [
    { value: "190", label: t.stats.schultage, color: "text-teal-300" },
    { value: "1.80m", label: t.stats.bildschirm, color: "text-amber-300" },
    { value: "0", label: t.stats.personalaufwand, color: "text-violet-300" },
    { value: "100%", label: t.stats.kostenlos, color: "text-rose-300" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 150}>
              <p className={`text-3xl sm:text-4xl font-bold ${s.color}`}>
                <CountUp value={s.value} />
              </p>
              <p className="text-sm text-slate-400 mt-1">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const t = useT();
  const rows = [
    { feature: t.comparison.jugendliche, stifisaeule: true, print: false, online: false },
    { feature: t.comparison.aufmerksamkeit, stifisaeule: true, print: false, online: false },
    { feature: t.comparison.streuverluste, stifisaeule: true, print: false, online: false },
    { feature: t.comparison.adBlocker, stifisaeule: true, print: true, online: false },
    { feature: t.comparison.aenderbar, stifisaeule: true, print: false, online: true },
    { feature: t.comparison.kostenlosSchulen, stifisaeule: true, print: false, online: false },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.comparison.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.comparison.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-transparent border-b border-slate-100">
                  <th className="text-left px-6 py-4 font-medium text-muted"></th>
                  <th className="px-6 py-4 font-bold text-primary text-center">Lehrlingstower</th>
                  <th className="px-6 py-4 font-medium text-muted text-center">Print</th>
                  <th className="px-6 py-4 font-medium text-muted text-center">Online-Ads</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={i < rows.length - 1 ? "border-b border-slate-50" : ""}>
                    <td className="px-6 py-3.5 text-foreground font-medium">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      {row.stifisaeule ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.print ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.online ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CostComparison() {
  const t = useT();
  const tradIcons = [Zap, Monitor, Building2, Users, MapPin, Target];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
            {t.costComparison.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.costComparison.title}
          </h2>
          <p className="text-lg text-muted">
            {t.costComparison.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <ScrollReveal className="flex">
          <div className="bg-white rounded-2xl p-8 border-2 border-rose-200 shadow-sm flex flex-col w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t.costComparison.tradTitle}</h3>
            </div>
            <p className="text-sm text-muted mb-6">{t.costComparison.tradSubtitle}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {t.costComparison.tradItems.map((item, i) => {
                const Icon = tradIcons[i];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-rose-100 pt-4 mt-auto">
              <p className="font-bold text-rose-600 text-lg">{t.costComparison.tradConclusion}</p>
              <p className="text-xs text-muted mt-1">{t.costComparison.tradNote}</p>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex">
          <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg relative flex flex-col w-full">
            <div className="absolute -top-3 right-6">
              <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                {t.costComparison.recommended}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t.costComparison.ltTitle}</h3>
            </div>
            <p className="text-sm text-muted mb-6">{t.costComparison.ltSubtitle}</p>
            <ul className="space-y-4 mb-8 flex-1">
              {t.costComparison.ltItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs text-muted mt-2">{t.costComparison.ltNote}</p>
            </div>
          </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-2">
            {t.costComparison.bottomTitle1} <span className="text-primary font-bold">{t.costComparison.bottomHighlight}</span> {t.costComparison.bottomTitle2}
          </p>
          <p className="text-sm text-muted">
            {t.costComparison.bottomNote}
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FAQ() {
  const t = useT();

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.faq.title}
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 100}>
            <details className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-semibold text-foreground list-none">
                {faq.q}
                <ChevronRight className="w-4 h-4 text-muted group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-4 text-sm text-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const t = useT();
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-br from-primary via-primary-dark to-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-teal-200">{t.contact.email}</p>
                  <p className="font-semibold">info@lehrlingstower.ch</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-teal-200">{t.contact.standort}</p>
                  <p className="font-semibold">{t.contact.land}</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {t.contact.formTitle}
            </h3>
            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="3007b246-f376-47f6-85f7-ad7223ab31d8" />
              <input type="hidden" name="subject" value="Neue Anfrage von Lehrlingstower.ch" />
              <input type="hidden" name="redirect" value="false" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.vorname}</label>
                  <input type="text" name="Vorname" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Max" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.nachname}</label>
                  <input type="text" name="Nachname" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Muster" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.firma}</label>
                <input type="text" name="Firma" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Muster AG" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.emailLabel}</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="max@muster.ch" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.telefon}</label>
                <input type="tel" name="Telefon" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="+41 79 000 00 00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t.contact.nachricht}</label>
                <textarea rows={3} name="Nachricht" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" placeholder={t.contact.nachrichtPlaceholder} />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
                {t.contact.submit}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Lehrlingstower.ch"
                width={240}
                height={70}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t.footer.links}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#so-funktionierts" className="hover:text-white transition-colors">{t.nav.soFunktionierts}</a></li>
              <li><a href="#vorteile" className="hover:text-white transition-colors">{t.nav.vorteile}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t.footer.rechtliches}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition-colors">{t.footer.impressum}</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">{t.footer.datenschutz}</a></li>
              <li><a href="/agb" className="hover:text-white transition-colors">{t.footer.agb}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-center">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <VideoHero />
        <ProblemSolution />
        <ForBusinesses />
        <ForSchools />
        <HowItWorks />
        <Benefits />
        <MapSection />
        <StatsBanner />
        <AboutSection />
        <CostComparison />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
