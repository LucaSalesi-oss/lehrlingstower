import Link from "next/link";

export const metadata = {
  title: "AGB — Lehrlingstower",
};

export default function AGB() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 py-5 px-6">
        <Link href="/" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity">
          ← Zurück zur Website
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12">Allgemeine Geschäftsbedingungen</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">1. Geltungsbereich</h2>
          <p className="text-muted leading-relaxed">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen von Lehrlingstower (Luca Salesi, Kolpingweg 62, 78532 Tuttlingen) gegenüber Unternehmen, die digitale Lehrstellenwerbung über die Plattform lehrlingstower.ch buchen. Mit der Buchung einer Leistung akzeptiert der Kunde diese AGB.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">2. Leistungsbeschreibung</h2>
          <p className="text-muted leading-relaxed mb-4">
            Lehrlingstower vermittelt digitale Werbeflächen für Lehrstellen an Schulen in der Schweiz. Die Leistungen umfassen insbesondere:
          </p>
          <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-2">
            <li>Anzeige von Lehrstelleninseraten auf Schulbildschirmen (Digital Signage)</li>
            <li>Erstellung und Gestaltung von Werbemitteln nach Kundenangaben</li>
            <li>Koordination mit Partnerschulen</li>
          </ul>
          <p className="text-muted leading-relaxed mt-4">
            Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">3. Vertragsschluss</h2>
          <p className="text-muted leading-relaxed">
            Ein Vertrag kommt durch die schriftliche Auftragsbestätigung von Lehrlingstower oder durch Erbringung der Leistung zustande. Angebote sind freibleibend und unverbindlich.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">4. Preise und Zahlung</h2>
          <p className="text-muted leading-relaxed mb-4">
            Die Preise richten sich nach der aktuellen Preisliste auf der Website. Alle Preise verstehen sich in CHF zzgl. der gesetzlichen Mehrwertsteuer, sofern anwendbar.
          </p>
          <p className="text-muted leading-relaxed">
            Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar. Bei Zahlungsverzug behält sich Lehrlingstower vor, die Leistungserbringung bis zum Ausgleich ausstehender Beträge zu unterbrechen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">5. Pflichten des Kunden</h2>
          <p className="text-muted leading-relaxed mb-4">Der Kunde verpflichtet sich:</p>
          <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-2">
            <li>Nur rechtlich zulässige Inhalte zur Bewerbung einzureichen</li>
            <li>Keine irreführenden oder diskriminierenden Werbeinhalte zu übermitteln</li>
            <li>Erforderliche Unterlagen und Informationen rechtzeitig bereitzustellen</li>
            <li>Lehrlingstower bei Rechtsverstössen Dritter unverzüglich zu informieren</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">6. Haftung</h2>
          <p className="text-muted leading-relaxed mb-4">
            Lehrlingstower haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Handeln verursacht wurden. Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.
          </p>
          <p className="text-muted leading-relaxed">
            Lehrlingstower übernimmt keine Garantie für eine bestimmte Anzahl an Bewerbungen oder den Erfolg der geschalteten Werbung.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">7. Kündigung</h2>
          <p className="text-muted leading-relaxed">
            Laufende Pakete können mit einer Frist von 30 Tagen zum Ende der Laufzeit gekündigt werden. Die Kündigung hat schriftlich per E-Mail an <a href="mailto:info@lehrlingstower.ch" className="text-primary hover:underline">info@lehrlingstower.ch</a> zu erfolgen. Bei schwerwiegenden Verstössen gegen diese AGB behält sich Lehrlingstower das Recht auf fristlose Kündigung vor.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">8. Anwendbares Recht und Gerichtsstand</h2>
          <p className="text-muted leading-relaxed">
            Es gilt deutsches Recht. Gerichtsstand ist Tuttlingen, Deutschland, sofern der Kunde Kaufmann ist oder keinen allgemeinen Gerichtsstand in Deutschland hat.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">9. Salvatorische Klausel</h2>
          <p className="text-muted leading-relaxed">
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Lehrlingstower — Luca Salesi
      </footer>
    </div>
  );
}
