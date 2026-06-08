import Link from "next/link";

export const metadata = {
  title: "Datenschutz — Lehrlingstower",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 py-5 px-6">
        <Link href="/" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity">
          ← Zurück zur Website
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-12">Datenschutzerklärung</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">1. Verantwortliche Stelle</h2>
          <div className="text-muted leading-relaxed space-y-1">
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
            <p className="font-semibold text-foreground mt-2">Lehrlingstower</p>
            <p>Luca Salesi</p>
            <p>Kolpingweg 62</p>
            <p>78532 Tuttlingen</p>
            <p>Deutschland</p>
            <p>E-Mail: <a href="mailto:info@lehrlingstower.ch" className="text-primary hover:underline">info@lehrlingstower.ch</a></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-muted leading-relaxed mb-4">
            Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Dienstleistungen erforderlich ist. Beim Besuch unserer Website werden folgende Daten automatisch erfasst:
          </p>
          <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-2">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Aufgerufene Seiten</li>
            <li>Verwendeter Browser und Betriebssystem</li>
          </ul>
          <p className="text-muted leading-relaxed mt-4">
            Diese Daten dienen ausschliesslich der technischen Bereitstellung der Website und werden nicht mit anderen Daten zusammengeführt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">3. Kontaktformular und E-Mail</h2>
          <p className="text-muted leading-relaxed">
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, speichern wir Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht an Dritte weitergegeben und nach Abschluss der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">4. Cookies</h2>
          <p className="text-muted leading-relaxed">
            Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden nach dem Schliessen des Browsers gelöscht. Auf den Einsatz von Tracking- oder Marketing-Cookies wird verzichtet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">5. Drittanbieter</h2>
          <p className="text-muted leading-relaxed mb-4">
            Diese Website wird über <strong>Vercel</strong> gehostet. Vercel kann im Rahmen der technischen Bereitstellung Serverlogs erfassen. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel unter <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com/legal/privacy-policy</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">6. Ihre Rechte</h2>
          <p className="text-muted leading-relaxed mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-muted leading-relaxed mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@lehrlingstower.ch" className="text-primary hover:underline">info@lehrlingstower.ch</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
          <p className="text-muted leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Lehrlingstower — Luca Salesi
      </footer>
    </div>
  );
}
