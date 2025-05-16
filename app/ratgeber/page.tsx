import Script from "next/script"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata = {
  title: "Häufig gestellte Fragen zur Haartransplantation in der Türkei | FAQ",
  description:
    "Erfahren Sie alles über Haartransplantationen in Istanbul: Kosten, Methoden, Ablauf, Risiken und mehr. Umfassende Antworten auf die häufigsten Fragen.",
  keywords:
    "Haartransplantation FAQ, Haartransplantation Türkei Kosten, FUE Methode, Haartransplantation Ablauf, Haartransplantation Risiken",
}

export default function RatgeberPage() {
  const faqs = [
    {
      question: "Was kostet eine Haartransplantation in Istanbul?",
      answer:
        "Eine Haartransplantation in Istanbul kostet je nach Klinik, Arzt und Anzahl der Grafts in der Regel zwischen 1.500 € und 3.500 €. Viele Kliniken bieten All-Inclusive-Pakete an, die Unterkunft, Transfers, Medikamente und Nachsorge beinhalten. Der Flug ist oft nicht inbegriffen. Im Vergleich zu Deutschland kannst du bis zu 70 % sparen – bei vergleichbarer Qualität.",
    },
    {
      question: "Warum ist eine Haartransplantation in der Türkei vergleichsweise günstig?",
      answer:
        "Das liegt an mehreren Faktoren: Die Lebenshaltungskosten in der Türkei sind niedriger, Löhne und Klinikbetriebskosten sind günstiger, der Wechselkurs der Lira ist für EU-Bürger vorteilhaft, und es gibt einen starken Wettbewerb zwischen den vielen spezialisierten Kliniken in Istanbul. Außerdem wird Medizintourismus vom Staat aktiv gefördert.",
    },
    {
      question: "Für wen ist eine Haartransplantation geeignet?",
      answer:
        "Grundsätzlich ist eine Haartransplantation für Männer mit erblich bedingtem Haarausfall geeignet, also z. B. bei Geheimratsecken, lichter werdendem Oberkopf oder Glatze. Wichtig ist, dass du noch über genügend Spenderhaare am Hinterkopf verfügst – denn von dort werden die Grafts entnommen. Ein Mindestalter von etwa 23–25 Jahren wird empfohlen, weil sich der Haarverlust dann meist stabilisiert hat. Dein allgemeiner Gesundheitszustand sollte gut sein.",
    },
    {
      question: "Wie läuft eine Haartransplantation ab?",
      answer:
        "Zuerst gibt es eine Online- oder Vor-Ort-Beratung. Am OP-Tag wird dein neuer Haaransatz eingezeichnet, dann erfolgt die Entnahme der Grafts am Hinterkopf (meist mit der FUE-Methode). Die entnommenen Haarfollikel werden im kahlen Bereich wieder eingesetzt. Alles geschieht unter lokaler Betäubung und dauert etwa 6–8 Stunden. Am nächsten Tag folgt oft eine Nachkontrolle und die erste Haarwäsche.",
    },
    {
      question: "Welche Methoden der Haartransplantation gibt es und welche ist die beste?",
      answer:
        "Die bekannteste Methode ist FUE (Follicular Unit Extraction). Dabei werden einzelne Haarfollikel mit einer feinen Hohlnadel entnommen – das ist schonend und hinterlässt kaum sichtbare Narben.\n\nEs gibt auch die Sapphire FUE, bei der anstelle herkömmlicher Stahlklingen feine Saphir-Klingen zum Öffnen der Kanäle verwendet werden. Diese sollen präzisere Einschnitte und schnellere Heilung ermöglichen.\n\nEine weitere Methode ist DHI (Direct Hair Implantation). Dabei werden die Grafts direkt mit einem speziellen Implanter-Stift in die Kopfhaut eingesetzt, ohne vorher Kanäle zu öffnen.\n\nWelche Methode für dich am besten ist, hängt von deiner Haarsituation, dem gewünschten Ergebnis und der Empfehlung des Arztes ab. Alle drei Methoden haben ihre Vorteile – ein erfahrener Arzt berät dich individuell.",
    },
    {
      question: "Ist eine Haartransplantation schmerzhaft?",
      answer:
        "Während des Eingriffs spürst du kaum etwas – es wird lokal betäubt. Die Betäubungsspritzen zu Beginn können etwas brennen, aber die OP selbst ist gut auszuhalten. Danach kann die Kopfhaut spannen oder leicht schmerzen, das lässt sich mit Schmerzmitteln aber gut behandeln. Viele Kliniken bieten auf Wunsch auch eine Dämmerschlaf-Option an.",
    },
    {
      question: "Wie sieht die Nachsorge nach der Haartransplantation aus?",
      answer:
        "Nach der OP solltest du den Kopf für einige Tage hochlagern, keinen Sport treiben und direkte Sonne vermeiden. Nach etwa 48 Stunden erfolgt die erste Haarwäsche mit einer speziellen Lotion. Die Krusten fallen nach ca. 10–14 Tagen ab. Wichtig ist, nicht zu kratzen und alle Pflegeanweisungen genau zu befolgen. Erste Ergebnisse siehst du nach ca. 3–4 Monaten, das Endergebnis nach etwa 12 Monaten.",
    },
    {
      question: "Gibt es Risiken oder Nebenwirkungen bei einer Haartransplantation?",
      answer:
        'Wie bei jedem medizinischen Eingriff gibt es auch hier Risiken – allerdings sind sie selten, wenn die Klinik professionell arbeitet. Es kann zu Schwellungen, Rötungen, leichten Schmerzen oder „Shock Loss" (vorübergehender Haarausfall) kommen. Infektionen sind selten, wenn du die Pflegehinweise befolgst. Bei der FUE-Methode bleiben meist nur winzige Narben zurück.',
    },
    {
      question: "Was ist der Unterschied zwischen FUE und FUT?",
      answer:
        "Bei FUE (Follicular Unit Extraction) werden einzelne Haarfollikel mit feinen Hohlnadeln entnommen – das ist die modernere Methode, die kaum sichtbare Narben hinterlässt. Bei FUT (Follicular Unit Transplantation) wird ein Hautstreifen vom Hinterkopf entnommen, aus dem die Grafts gewonnen werden. Diese Methode wird heute meist nur noch bei sehr großen Graftmengen verwendet und hinterlässt eine längere Narbe.",
    },
    {
      question: "Wie lange dauert es, bis die neuen Haare wachsen?",
      answer:
        "Nach etwa 2–4 Wochen fallen die transplantierten Haare zunächst aus – das ist ganz normal. Nach 3–4 Monaten beginnen sie wieder zu wachsen. Das sichtbare Ergebnis entwickelt sich über 6–9 Monate hinweg, das finale Ergebnis siehst du nach ca. 12 Monaten.",
    },
    {
      question: "Wie finde ich die beste Klinik für eine Haartransplantation in Istanbul?",
      answer:
        "Genau aus diesem Grund habe ich diese Website erstellt. Ich habe selbst eine Haartransplantation in Istanbul gemacht und weiß, wie schwer es ist, eine seriöse Klinik zu finden. Hier findest du eine unabhängige Übersicht über die besten Kliniken der Stadt – inklusive Vergleich, Erfahrungsberichten und meiner persönlichen Einschätzung.",
    },
    {
      question: "Woran erkenne ich eine seriöse Haarklinik in der Türkei?",
      answer:
        "Achte auf transparente Kommunikation, erfahrene Ärzte, klare Preisangaben, echte Vorher-Nachher-Fotos, positive Bewertungen auf unabhängigen Plattformen und auf Nachsorge-Angebote. Eine gute Klinik drängt dich nicht zur schnellen Entscheidung und beantwortet all deine Fragen offen.",
    },
    {
      question: "Wie viele Grafts brauche ich für ein gutes Ergebnis?",
      answer:
        "Das hängt vom Ausmaß deines Haarausfalls und deinen Wünschen ab. Für Geheimratsecken reichen oft 1.500–2.000 Grafts, für einen kompletten vorderen Haaransatz eher 2.500–3.500 Grafts. Bei starkem Haarverlust am Oberkopf können auch bis zu 5.000 Grafts nötig sein. Die genaue Zahl bestimmt der Arzt nach Analyse deiner Haarstruktur.",
    },
    {
      question: "Was ist ein Graft überhaupt?",
      answer:
        "Ein Graft ist eine Haarwurzeleinheit, die 1–4 Haare enthalten kann. Je nach Spenderbereich enthält ein Graft im Schnitt 2–2,5 Haare. Die Anzahl der Grafts bestimmt die Dichte des Ergebnisses – also wie voll dein Haar später aussieht.",
    },
    {
      question: "Was sollte ich vor der Haartransplantation beachten?",
      answer:
        "Du solltest 7–10 Tage vor dem Eingriff auf Alkohol, Nikotin und blutverdünnende Mittel (wie Aspirin) verzichten. Vor der OP bekommst du genaue Anweisungen von der Klinik – z. B. was du am OP-Tag anziehen und wie du dich vorbereiten sollst. Auch ein blutbildendes Frühstück (z. B. kein Kaffee, sondern etwas Herzhaftes) wird oft empfohlen.",
    },
    {
      question: "Muss ich bei der Einreise in die Türkei etwas beachten?",
      answer:
        "Für deutsche Staatsbürger reicht ein gültiger Personalausweis oder Reisepass – du brauchst kein Visum, solange dein Aufenthalt nicht länger als 90 Tage dauert. Achte darauf, dass dein Reisedokument bei der Einreise noch mindestens 150 Tage gültig ist. Informiere dich vorab über mögliche Änderungen bei Einreisebestimmungen, z. B. durch das Auswärtige Amt. Manche Kliniken bieten auch Unterstützung bei der Reiseorganisation an.",
    },
    {
      question: "In welchen Sprachen wird in den Kliniken gesprochen?",
      answer:
        "Ich habe ausschließlich Kliniken ausgewählt, in denen du dich problemlos auf Deutsch oder Englisch verständigen kannst. Viele Ärzte und Berater sprechen sogar fließend Deutsch – schließlich kommen viele ihrer Patienten aus Deutschland, Österreich oder der Schweiz. Auch Dolmetscher für andere Sprachen sind in professionellen Kliniken in der Regel vor Ort.",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1
          className="text-2xl mb-8 text-black"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 200,
          }}
        >
          Häufig gestellte Fragen zu einer Haartransplantation in der Türkei
        </h1>

        <div className="mb-8">
          <p
            className="text-black"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Hier findest du Antworten auf die häufigsten Fragen rund um das Thema Haartransplantation in der Türkei.
            Klicke einfach auf eine Frage, um die Antwort zu sehen.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger
                className="px-4 py-3 hover:no-underline hover:bg-gray-50 transition-colors"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1">
                <div
                  className="text-black whitespace-pre-line"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                    fontSize: "12px",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p
            className="mb-6 text-black"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Hast du noch weitere Fragen? Ich helfe dir gerne persönlich weiter.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 transition-colors"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
            }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>

      {/* Schema.org FAQPage structured data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
