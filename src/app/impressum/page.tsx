import Link from "next/link";

export const metadata = {
  title: "Impressum — Lehrlingstower",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 py-5 px-6">
        <Link href="/" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity">
          ← Zurück zur Website
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12">Impressum</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">Angaben gemäss § 5 TMG</h2>
          <div className="text-muted leading-relaxed space-y-1">
            <p className="font-semibold text-foreground">Lehrlingstower</p>
            <p>Luca Salesi</p>
            <p>Kolpingweg 62</p>
            <p>78532 Tuttlingen</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">Kontakt</h2>
          <div className="text-muted leading-relaxed space-y-1">
            <p>Telefon: <a href="tel:017670026287" className="text-primary hover:underline">0176 70026287</a></p>
            <p>E-Mail: <a href="mailto:info@lehrlingstower.ch" className="text-primary hover:underline">info@lehrlingstower.ch</a></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">Verantwortlich für den Inhalt</h2>
          <div className="text-muted leading-relaxed space-y-1">
            <p>Luca Salesi</p>
            <p>Kolpingweg 62</p>
            <p>78532 Tuttlingen</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">Haftungsausschluss</h2>
          <p className="text-muted leading-relaxed mb-4">
            Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p className="text-muted leading-relaxed">
            Als Diensteanbieter sind wir gemäss § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">Urheberrecht</h2>
          <p className="text-muted leading-relaxed">
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Lehrlingstower — Luca Salesi
      </footer>
    </div>
  );
}
