"use client";

import Image from "next/image";
import ScrollVideo from "./components/ScrollVideo";
import { ScrollReveal, ScrollScale } from "./components/ScrollReveal";
import CountUp from "./components/CountUp";
import Header from "./components/Header";
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
  return (
    <section className="py-24 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">{t.mission.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.mission.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.mission.subtitle}
          </p>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
              {t.challenge.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              {t.challenge.title}
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              {t.challenge.p1}
            </p>
            <p className="text-muted leading-relaxed">
              {t.challenge.p2}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              {t.solution.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              {t.solution.title}
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              {t.solution.p1}
            </p>
            <p className="text-muted leading-relaxed">
              {t.solution.p2}
            </p>
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
    { icon: Building2, color: "bg-teal-500", colorLight: "bg-teal-50", colorText: "text-teal-600", borderColor: "border-t-teal-400" },
    { icon: Monitor, color: "bg-amber-500", colorLight: "bg-amber-50", colorText: "text-amber-600", borderColor: "border-t-amber-400" },
    { icon: Users, color: "bg-violet-500", colorLight: "bg-violet-50", colorText: "text-violet-600", borderColor: "border-t-violet-400" },
    { icon: BarChart3, color: "bg-rose-500", colorLight: "bg-rose-50", colorText: "text-rose-600", borderColor: "border-t-rose-400" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {t.howItWorks.steps.map((step, i) => {
            const m = stepMeta[i];
            const stepNum = String(i + 1).padStart(2, "0");
            return (
              <ScrollReveal key={stepNum} delay={i * 150} className="flex">
                <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 ${m.borderColor} flex flex-col w-full`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${m.colorLight} rounded-xl flex items-center justify-center`}>
                      <m.icon className={`w-5 h-5 ${m.colorText}`} />
                    </div>
                    <span className={`text-xs font-bold text-white ${m.color} rounded-full w-7 h-7 flex items-center justify-center`}>{stepNum}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
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
        <ForSchools />
        <HowItWorks />
        <Benefits />
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
