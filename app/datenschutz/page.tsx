import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Datenschutzerklärung | Beste Haarkliniken in Istanbul",
  description: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf beste-haarkliniken.de",
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1
          className="text-2xl mb-8 text-black"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 400,
          }}
        >
          Datenschutzerklärung
        </h1>

        <div
          className="space-y-6 text-black"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 200,
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          <p>
            Der Schutz deiner persönlichen Daten ist mir wichtig. Personenbezogene Daten werden auf dieser Website nur
            im technisch notwendigen Umfang verarbeitet. Ich behandle deine Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Zugriffsdaten
          </h2>
          <p>
            Beim Besuch dieser Website werden automatisch Informationen erfasst, die dein Browser übermittelt. Dazu
            gehören IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp und -version sowie das
            verwendete Betriebssystem. Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien
            Betriebs der Website erhoben und nicht mit anderen Datenquellen zusammengeführt.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Cookies
          </h2>
          <p>
            Diese Website verwendet keine Cookies zur Analyse oder zu Werbezwecken. Falls technisch notwendige Cookies
            eingesetzt werden, erfolgt dies ausschließlich zur Gewährleistung der Funktionalität.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Kontaktaufnahme
          </h2>
          <p>
            Wenn du mir per E-Mail schreibst, wird deine Nachricht inklusive deiner Kontaktdaten zur Bearbeitung der
            Anfrage gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Externe Links
          </h2>
          <p>
            Diese Website enthält Links zu externen Webseiten Dritter. Für die Inhalte dieser Seiten ist stets der
            jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf
            mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Affiliate-Links und Werbung
          </h2>
          <p>
            Diese Website kann sogenannte Affiliate-Links oder bezahlte Inhalte enthalten. Wenn du über einen solchen
            Link ein Angebot nutzt, kann ich eine Provision erhalten – ohne Mehrkosten für dich. Solche Inhalte sind als
            Anzeige oder Empfehlung gekennzeichnet.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Rechte der betroffenen Person
          </h2>
          <p>
            Du hast jederzeit das Recht auf Auskunft über die von dir gespeicherten personenbezogenen Daten, deren
            Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem hast du das Recht auf Berichtigung,
            Sperrung oder Löschung dieser Daten.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Verantwortlicher im Sinne der DSGVO
          </h2>
          <p>
            Max Mustermann
            <br />
            Musterstraße 1
            <br />
            12345 Musterstadt
            <br />
            E-Mail: max@mustermann.de
          </p>
        </div>

        <div className="mt-12">
          <Button
            asChild
            className="bg-black hover:bg-gray-800 rounded-full"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              color: "white",
            }}
          >
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
