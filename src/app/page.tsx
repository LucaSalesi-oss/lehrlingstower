import Image from "next/image";
import ScrollVideo from "./components/ScrollVideo";
import { ScrollReveal, ScrollScale } from "./components/ScrollReveal";
import CountUp from "./components/CountUp";
import Header from "./components/Header";
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
} from "lucide-react";

function VideoHero() {
  return (
    <ScrollVideo
      scrollContent={
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Jetzt Termin buchen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#so-funktionierts"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold border border-white/30 hover:bg-white/30 transition-colors"
          >
            Mehr erfahren
          </a>
        </div>
      }
    >
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
        Ausbildungen direkt in die{" "}
        <span className="text-primary-light">Schule</span> bringen
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow">
        Digitale Bildschirme in Schweizer Schulen — erreichen Sie
        Schülerinnen und Schüler mit Ihrem Ausbildungsangebot genau dort, wo sie ihre Zukunft planen.
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-8 h-8 text-white/60 rotate-90" />
      </div>
    </ScrollVideo>
  );
}


function ProblemSolution() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">Unsere Mission</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Was uns antreibt
          </h2>
          <p className="mt-4 text-lg text-muted">
            Jeder Jugendliche soll wissen, welche Ausbildungsmöglichkeiten es in seiner Region gibt.
          </p>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
              Die Herausforderung
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              Lehrstellen bleiben unbesetzt — obwohl Betriebe dringend Nachwuchs suchen
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Jedes Jahr bleiben in der Schweiz tausende Lehrstellen unbesetzt. Gleichzeitig wissen viele Jugendliche nicht, welche Ausbildungsmöglichkeiten es in ihrer Region gibt. Klassische Stellenanzeigen in Zeitungen oder Online-Portalen erreichen die junge Zielgruppe kaum noch.
            </p>
            <p className="text-muted leading-relaxed">
              Die Folge: Betriebe investieren viel Geld in Recruiting, ohne die richtigen Kandidaten zu erreichen. Und Jugendliche verpassen Chancen, die direkt vor ihrer Haustür liegen.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Unsere Lösung
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              Lehrlingstower bringt Ihre Lehrstelle genau dorthin, wo Jugendliche täglich sind
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mit der Lehrlingstower präsentieren Sie Ihre offenen Ausbildungsplätze auf grossen Bildschirmen direkt in Schweizer Schulen — ausschliesslich für regionale Betriebe, ausschliesslich für Ausbildungsplätze. Kein Algorithmus, kein Wegzappen — Ihr Ausbildungsangebot ist genau dort, wo Schülerinnen und Schüler täglich sind.
            </p>
            <p className="text-muted leading-relaxed">
              So erreichen Sie genau die Jugendlichen, die gerade aktiv über ihre berufliche Zukunft nachdenken — im richtigen Moment, am richtigen Ort.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
              Über Lehrlingstower
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
              Wir verbinden Lehrbetriebe mit der nächsten Generation
            </h2>
            <p className="text-lg text-teal-100 leading-relaxed mb-6">
              Lehrlingstower ist eine Plattform, die regionale Ausbildungsbetriebe direkt mit Schülerinnen und Schülern verbindet. Wir stellen Full-HD-Bildschirme in Schulgebäuden auf — ausschliesslich für Ausbildungsplätze, Schnuppertage und Lehrstellenangebote aus der Region.
            </p>
            <p className="text-lg text-teal-100 leading-relaxed mb-6">
              Unser Ziel: Jeder Jugendliche in der Schweiz soll wissen, welche Ausbildungsmöglichkeiten es in seiner Region gibt. Und jeder Betrieb soll die Möglichkeit haben, sich als attraktiver Lehrbetrieb zu präsentieren — ohne riesiges Marketingbudget.
            </p>
            <p className="text-lg text-white font-medium leading-relaxed">
              Ab CHF 129.– pro Monat zeigen wir Ihren Ausbildungsplatz täglich hunderten Schülerinnen und Schülern — regional, direkt und ohne Umwege.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/saeule-photo.png"
              alt="Schüler vor einer Lehrlingstower"
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

function HowItWorks() {
  const steps = [
    {
      icon: Building2,
      step: "01",
      title: "Ausbildungsplatz eintragen",
      description:
        "Wählen Sie die Schulen in Ihrer Region und tragen Sie Ihr Ausbildungsangebot ein.",
      color: "bg-teal-500",
      colorLight: "bg-teal-50",
      colorText: "text-teal-600",
      borderColor: "border-t-teal-400",
    },
    {
      icon: Monitor,
      step: "02",
      title: "Inhalte gestalten",
      description:
        "Liefern Sie Ihre eigenen Inhalte — oder lassen Sie sie von uns gestalten. Wir erstellen auf Wunsch eine professionelle Präsentation Ihres Ausbildungsangebots.",
      color: "bg-amber-500",
      colorLight: "bg-amber-50",
      colorText: "text-amber-600",
      borderColor: "border-t-amber-400",
    },
    {
      icon: Users,
      step: "03",
      title: "Schüler:innen erreichen",
      description:
        "Ihre Anzeige läuft auf den 1.80m Full-HD-Bildschirmen an hochfrequentierten Orten in der Schule — Eingangsbereiche, Gänge und Aufenthaltsbereiche, wo täglich hunderte Schüler:innen vorbeikommen.",
      color: "bg-violet-500",
      colorLight: "bg-violet-50",
      colorText: "text-violet-600",
      borderColor: "border-t-violet-400",
    },
    {
      icon: BarChart3,
      step: "04",
      title: "Resultate messen",
      description:
        "Verfolgen Sie, wie viele Schüler Ihren QR-Code scannen und auf Ihre Karriereseite gelangen — so sehen Sie direkt, was Ihre Anzeige bringt.",
      color: "bg-rose-500",
      colorLight: "bg-rose-50",
      colorText: "text-rose-600",
      borderColor: "border-t-rose-400",
    },
  ];

  return (
    <section id="so-funktionierts" className="relative py-24 bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            So funktionierts
          </h2>
          <p className="mt-4 text-lg text-muted">
            In vier einfachen Schritten zu Ihren nächsten Lernenden
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 150} className="flex">
            <div
              className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all border-t-4 ${s.borderColor} flex flex-col w-full`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${s.colorLight} rounded-xl flex items-center justify-center`}>
                  <s.icon className={`w-5 h-5 ${s.colorText}`} />
                </div>
                <span className={`text-xs font-bold text-white ${s.color} rounded-full w-7 h-7 flex items-center justify-center`}>{s.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Zielgenau",
      description:
        "Erreichen Sie Jugendliche genau in dem Moment, in dem sie sich mit ihrer beruflichen Zukunft beschäftigen — in der Schule.",
      colorLight: "bg-teal-50", colorText: "text-teal-600",
    },
    {
      icon: QrCode,
      title: "QR-Code inklusive",
      description:
        "Ein QR-Code auf dem Bildschirm leitet Schüler direkt auf Ihre Karriereseite oder Lehrstellenausschreibung.",
      colorLight: "bg-amber-50", colorText: "text-amber-600",
    },
    {
      icon: TrendingUp,
      title: "Höchste Sichtbarkeit",
      description:
        "1.80m grosse Full-HD-Bildschirme an hoch frequentierten Standorten — kein Vorbeigehen ohne Hinschauen.",
      colorLight: "bg-violet-50", colorText: "text-violet-600",
    },
    {
      icon: Zap,
      title: "Flexibel anpassbar",
      description:
        "Ändern Sie Ihre Inhalte jederzeit — Karriereinfos, Videos oder Stellenanzeigen. Alles in Echtzeit.",
      colorLight: "bg-rose-50", colorText: "text-rose-600",
    },
    {
      icon: School,
      title: "Direkt in der Schule",
      description:
        "Die Bildschirme stehen dort, wo Schülerinnen und Schüler täglich vorbeikommen — mitten im Schulgebäude.",
      colorLight: "bg-sky-50", colorText: "text-sky-600",
    },
    {
      icon: Building2,
      title: "Premium-Positionierung",
      description:
        "Positionieren Sie sich als moderner, attraktiver Lehrbetrieb — und heben Sie sich von der Konkurrenz ab.",
      colorLight: "bg-emerald-50", colorText: "text-emerald-600",
    },
  ];

  return (
    <section id="vorteile" className="relative py-24 bg-gradient-to-br from-white via-amber-50/30 to-teal-50/30 overflow-hidden">
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Warum Lehrlingstower?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Digitales Recruiting dort, wo die nächste Generation ihre Zukunft
            plant
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100} className="flex">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col w-full">
              <div className={`w-12 h-12 ${b.colorLight} rounded-xl flex items-center justify-center mb-4`}>
                <b.icon className={`w-6 h-6 ${b.colorText}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mt-auto">
                {b.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    { value: "190", label: "Schultage pro Jahr erreicht", color: "text-teal-300" },
    { value: "500+", label: "Schüler pro Schule täglich", color: "text-amber-300" },
    { value: "0", label: "Personalaufwand für Sie", color: "text-violet-300" },
    { value: "129.–", label: "CHF pro Monat", color: "text-rose-300" },
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
  const rows = [
    { feature: "Jugendliche direkt erreicht", stifisaeule: true, print: false, online: false },
    { feature: "Hohe Aufmerksamkeit (1.80m Bildschirm)", stifisaeule: true, print: false, online: false },
    { feature: "Keine Streuverluste", stifisaeule: true, print: false, online: false },
    { feature: "Kein Ad-Blocker", stifisaeule: true, print: true, online: false },
    { feature: "Inhalte jederzeit änderbar", stifisaeule: true, print: false, online: true },
    { feature: "Günstig ab CHF 129.–/Monat", stifisaeule: true, print: false, online: true },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Lehrlingstower vs. traditionelle Werbung
          </h2>
          <p className="mt-4 text-lg text-muted">
            Warum digitale Bildschirme in Schulen besser funktionieren
          </p>
        </ScrollReveal>
        <ScrollReveal>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-transparent border-b border-slate-100">
                  <th className="text-left px-6 py-4 font-medium text-muted"></th>
                  <th className="px-6 py-4 font-bold text-primary text-center">
                    Lehrlingstower
                  </th>
                  <th className="px-6 py-4 font-medium text-muted text-center">
                    Print
                  </th>
                  <th className="px-6 py-4 font-medium text-muted text-center">
                    Online-Ads
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i < rows.length - 1 ? "border-b border-slate-50" : ""}
                  >
                    <td className="px-6 py-3.5 text-foreground font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.stifisaeule ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.print ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.online ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
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
  const traditionellProbleme = [
    { label: "Social Media Ads (Instagram, TikTok, Facebook) — Jugendliche scrollen vorbei", icon: Zap },
    { label: "Azubi-Portale (Indeed, StepStone) — teuer und kaum Resonanz bei Schüler:innen", icon: Monitor },
    { label: "Lehrlingsmessen — hohe Kosten, nur 1–2 Tage Präsenz", icon: Building2 },
    { label: "Schulbesuche — aufwendig, personalintensiv und schwer skalierbar", icon: Users },
    { label: "Printanzeigen (Zeitung, Flyer) — kaum Reichweite bei der Zielgruppe", icon: MapPin },
    { label: "Karriereseite auf Website — wird von Schüler:innen kaum aktiv besucht", icon: Target },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
            Kostenvergleich
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Traditionelle Azubi-Werbung vs. Lehrlingstower
          </h2>
          <p className="text-lg text-muted">
            Die meisten Methoden erreichen Jugendliche kaum noch — Lehrlingstower schon
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <ScrollReveal className="flex">
          <div className="bg-white rounded-2xl p-8 border-2 border-rose-200 shadow-sm flex flex-col w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Traditionelle Werbung</h3>
            </div>
            <p className="text-sm text-muted mb-6">Was Betriebe heute typischerweise versuchen:</p>
            <ul className="space-y-3 mb-8 flex-1">
              {traditionellProbleme.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-rose-100 pt-4 mt-auto">
              <p className="font-bold text-rose-600 text-lg">Viel Aufwand — wenig Wirkung</p>
              <p className="text-xs text-muted mt-1">Jugendliche werden dort nicht mehr erreicht</p>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex">
          <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg relative flex flex-col w-full">
            <div className="absolute -top-3 right-6">
              <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Empfohlen
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Lehrlingstower</h3>
            </div>
            <p className="text-sm text-muted mb-6">6 Monate Dauerpräsenz an Schulen:</p>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Anzeigenplatz (mind. 6 Monate)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Täglich vor hunderten Schüler:innen</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Kein Ad-Blocker, kein Wegklicken</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">QR-Code auf Ihre Karriereseite</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Inhalte jederzeit änderbar</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">Kein Personalaufwand</span>
              </li>
            </ul>
            <div className="border-t border-primary/20 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground">Total 6 Monate</span>
                <span className="text-2xl font-bold text-primary">CHF 774.–</span>
              </div>
              <p className="text-xs text-muted mt-2">Jeden Schultag sichtbar — ein ganzes Halbjahr</p>
            </div>
          </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-2">
            Ein Bruchteil der Kosten — und das <span className="text-primary font-bold">ganze Jahr</span> sichtbar
          </p>
          <p className="text-sm text-muted">
            Statt 1–2 Tage Messepräsenz: jeden Schultag direkt in der Schule
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Ausbildungsplatz auf 1.80m Full-HD-Bildschirm in der Schule",
    "QR-Code zur Weiterleitung auf Ihre Lehrstellenausschreibung",
    "Inhalte jederzeit aktualisierbar",
    "Nur regionale Betriebe — nur Ausbildungsplätze",
  ];

  return (
    <section id="preise" className="relative py-24 bg-gradient-to-br from-teal-50/50 via-white to-amber-50/30 overflow-hidden">
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Einfache, transparente Preise
          </h2>
          <p className="mt-4 text-lg text-muted">
            Keine versteckten Kosten — nur Ausbildungsplätze, nur regionale Betriebe
          </p>
        </ScrollReveal>
        <ScrollScale className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Pro Ausbildungsplatz auf dem Bildschirm
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    CHF 129.–
                  </span>
                  <span className="text-muted text-lg mb-1">/Monat</span>
                </div>
                <p className="text-sm mt-2">
                  <span className="inline-block bg-amber-100 text-amber-700 font-medium px-3 py-1 rounded-full text-xs">
                    Entspricht nur CHF 6.45 pro Schultag
                  </span>
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block w-full text-center bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Jetzt Termin vereinbaren
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-muted mt-4">
            Kontaktieren Sie uns für individuelle Angebote
          </p>
        </ScrollScale>
      </div>
    </section>
  );
}


function FAQ() {
  const faqs = [
    {
      q: "Wie gross sind die Bildschirme?",
      a: "Die Lehrlingstowern sind 1.80 Meter hohe Full-HD-Bildschirme, die in Schulgebäuden aufgestellt werden.",
    },
    {
      q: "Muss ich die Inhalte selbst erstellen?",
      a: "Nein. Sie können Ihre eigenen Inhalte liefern oder sie von uns gestalten lassen — wir erstellen auf Wunsch eine professionelle Präsentation Ihres Ausbildungsangebots.",
    },
    {
      q: "In welchen Kantonen ist Lehrlingstower verfügbar?",
      a: "Kontaktieren Sie uns — wir informieren Sie gerne über die aktuell verfügbaren Standorte.",
    },
    {
      q: "Wie funktioniert der QR-Code?",
      a: "Auf Ihrer Präsentation kann ein QR-Code eingeblendet werden, der Schülerinnen und Schüler direkt auf Ihre Lehrstellenausschreibung oder Karriereseite weiterleitet.",
    },
    {
      q: "Kann ich mein Ausbildungsangebot jederzeit aktualisieren?",
      a: "Ja, Sie können Ihre Inhalte jederzeit aktualisieren — Texte, Bilder und Videos.",
    },
    {
      q: "Wie lange ist die Mindestlaufzeit?",
      a: "Die Mindestlaufzeit beträgt 6 Monate. Möchten Sie den Vertrag nicht verlängern, müssen Sie spätestens 1 Monat vor Ablauf kündigen — andernfalls verlängert sich der Vertrag automatisch um weitere 6 Monate.",
    },
    {
      q: "Wie funktioniert die Bezahlung?",
      a: "Der Gesamtbetrag von CHF 774.– wird bei Vertragsabschluss direkt für das gesamte Halbjahr in Rechnung gestellt. Sie erhalten eine Rechnung, die innert 30 Tagen zu begleichen ist. Es gibt keine monatliche Abrechnung.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Häufige Fragen
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 100}>
            <details
              className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
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
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-br from-primary via-primary-dark to-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Bereit, die nächsten Lernenden zu finden?
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              Vereinbaren Sie jetzt einen kostenlosen Beratungstermin und erfahren Sie, wie
              die Lehrlingstower Ihr Recruiting transformiert.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-teal-200">E-Mail</p>
                  <p className="font-semibold">info@lehrlingstower.ch</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-teal-200">Standort</p>
                  <p className="font-semibold">Schweiz</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Termin vereinbaren
            </h3>
            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="3007b246-f376-47f6-85f7-ad7223ab31d8" />
              <input type="hidden" name="subject" value="Neue Anfrage von Lehrlingstower.ch" />
              <input type="hidden" name="redirect" value="false" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Vorname
                  </label>
                  <input
                    type="text"
                    name="Vorname"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Nachname
                  </label>
                  <input
                    type="text"
                    name="Nachname"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Muster"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Firma
                </label>
                <input
                  type="text"
                  name="Firma"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Muster AG"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="max@muster.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="Telefon"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="+41 79 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nachricht (optional)
                </label>
                <textarea
                  rows={3}
                  name="Nachricht"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Ich interessiere mich für..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Termin vereinbaren
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
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                Lehrlings<span className="text-primary-light">tower</span>.ch
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Digitale Stellenanzeigen in Schweizer Schulen.
              Lehrstellen dort bewerben, wo die Zukunft beginnt.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#so-funktionierts" className="hover:text-white transition-colors">
                  So funktionierts
                </a>
              </li>
              <li>
                <a href="#vorteile" className="hover:text-white transition-colors">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#preise" className="hover:text-white transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-center">
          &copy; {new Date().getFullYear()} Lehrlingstower GmbH. Alle Rechte
          vorbehalten.
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
        <HowItWorks />
        <Benefits />
        <StatsBanner />
        <AboutSection />
        <CostComparison />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
