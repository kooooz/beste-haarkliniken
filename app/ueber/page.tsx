import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Über mich | Beste Haarkliniken in Istanbul",
  description: "Erfahre mehr über meine persönliche Geschichte und warum ich diese Seite erstellt habe.",
}

export default function UeberPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/nachher-haartransplantation-istanbul.jpg"
            alt="Nach der Haartransplantation in Istanbul"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1
            className="text-2xl mb-8 text-black"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
            }}
          >
            Über mich
          </h1>

          <div
            className="space-y-6 text-black"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
              lineHeight: 1.8,
            }}
          >
            <p>
              Ich habe lange mit dem Gedanken gespielt, eine Haartransplantation machen zu lassen. Immer mal wieder habe
              ich recherchiert, mir Erfahrungsberichte angeschaut, Foren gelesen, Bilder verglichen – und dann doch
              wieder alles zur Seite gelegt. Zu viele Unsicherheiten, zu viele Anbieter, zu viele Versprechen. Vor allem
              aber: zu viel Angst, die falsche Entscheidung zu treffen.
            </p>

            <p>
              Das Thema ließ mich trotzdem nie ganz los. Es tauchte immer wieder auf – im Gespräch, im Spiegel,
              irgendwann ständig in meinem Instagram-Feed. Ich begann, mich ernsthafter damit zu beschäftigen. Habe
              Artikel gelesen, Erfahrungsberichte durchforstet, Videos analysiert, Webseiten verglichen. Und langsam
              bekam ich ein besseres Gefühl dafür, worauf es wirklich ankommt bei einer Haartransplantation in der
              Türkei. Ich habe viel Zeit in strukturierte Recherche investiert, mir Kriterien überlegt, die mir
              persönlich wichtig waren, und begonnen, Kliniken systematisch zu vergleichen. Daraus entstanden erste
              Listen, ein einfaches Bewertungsschema, ein Scoring-Modell – und Schritt für Schritt mehr Klarheit.
            </p>

            <p>
              Schließlich habe Gespräche mit verschiedenen Kliniken geführt, mir Notizen gemacht, Bewertungen gelesen,
              zwischen den Zeilen gehört – und mir schließlich meine persönliche Top 10 erstellt. Irgendwann war ich
              bereit. Ich habe mich für eine Klinik in Istanbul entschieden und den Eingriff durchführen lassen.
            </p>

            <p>
              Heute kann ich sagen: Es war eine der besten Entscheidungen meines Lebens. Nicht wegen des ästhetischen
              Ergebnisses allein – sondern weil ich mich seitdem einfach wohler, sicherer und mehr ich selbst fühle.
            </p>

            <p>
              Aus genau diesem Gefühl heraus ist diese Seite entstanden. Ich weiß, wie überwältigend und intransparent
              dieses Thema sein kann. Mit dieser Website möchte ich meine Erfahrung weitergeben, Orientierung bieten und
              dir helfen, eine fundierte Entscheidung zu treffen – ohne Druck, ohne leere Versprechen.
            </p>

            <p>
              Was du hier findest: eine persönliche, ehrliche Auswahl von Haarkliniken in der Türkei, die ich nach
              intensiver Recherche ausgewählt habe.
            </p>

            <p>Ich hoffe, sie hilft dir so weiter, wie ich mir selbst eine solche Hilfe damals gewünscht hätte.</p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              className="bg-black hover:bg-gray-800 rounded-full"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                color: "white",
              }}
            >
              <Link href="/kliniken">Kliniken entdecken</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
