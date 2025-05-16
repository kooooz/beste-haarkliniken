import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Impressum | Beste Haarkliniken in Istanbul",
  description: "Rechtliche Informationen und Impressum für beste-haarkliniken.de",
}

export default function ImpressumPage() {
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
          Impressum
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
          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Angaben gemäß § 5 TMG
          </h2>
          <p>Diese Website wird betrieben von:</p>

          <p>
            Max Mustermann
            <br />
            Musterstraße 1<br />
            12345 Musterstadt
            <br />
            Deutschland
          </p>

          <p>E-Mail: max@mustermann.de</p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Max Mustermann, Anschrift wie oben.</p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Haftung für Inhalte
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte übernehme ich jedoch keine Gewähr. Die Informationen dienen ausschließlich der
            allgemeinen Orientierung und stellen keine medizinische Beratung dar.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Haftung für Links
          </h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für
            den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>

          <h2
            className="text-base font-medium mt-6 mb-2"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Transparenzhinweis
          </h2>
          <p>
            Diese Website kann sogenannte Affiliate-Links oder bezahlte Empfehlungen enthalten. Wenn du über einen
            solchen Link eine Buchung oder Anfrage tätigst, kann ich dafür eine Provision erhalten – für dich entstehen
            dadurch keine zusätzlichen Kosten. Bezahlte Inhalte oder Platzierungen sind als solche gekennzeichnet. Die
            redaktionelle Unabhängigkeit und Objektivität der Inhalte bleiben davon unberührt. Alle Angaben zu Kliniken
            basieren auf eigener Recherche und persönlicher Einschätzung. Es bestehen keine geschäftlichen Beziehungen
            zu den genannten Anbietern, es sei denn, dies wird ausdrücklich kenntlich gemacht.
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
