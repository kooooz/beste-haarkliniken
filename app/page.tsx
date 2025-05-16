import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, ThumbsUp, Users, Clock, Check } from "lucide-react"
import Script from "next/script"

export const metadata = {
  title: "Top 10 Haartransplantations-Kliniken in Istanbul | Vergleich & Ratgeber 2023",
  description:
    "Entdecken Sie die 10 besten Kliniken für Haartransplantationen in Istanbul. Vergleichen Sie Preise, Methoden und Erfahrungen für die beste Entscheidung.",
  keywords:
    "Haartransplantation Istanbul, beste Haarkliniken, FUE Haartransplantation, DHI Methode, Haartransplantation Türkei",
}

// Format number with leading zero
const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num.toString()
}

export default function Home() {
  // Sample data for all clinics - using the same order as in data/clinics.ts
  const allClinics = [
    {
      id: 1,
      name: "Vera Clinic",
      rating: 4.8,
      location: "Şişli, Istanbul",
      description:
        "Vera Clinic ist eine führende Haartransplantationsklinik in Istanbul, die für ihre fortschrittlichen Techniken und ihr erfahrenes medizinisches Team bekannt ist. Die Klinik bietet umfassende Behandlungspakete mit persönlicher Betreuung.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 98,
      patientsCount: 15000,
      established: 2013,
      certifications: "JCI akkreditiert",
      price: 1850,
    },
    {
      id: 2,
      name: "Cosmedica Clinic",
      rating: 4.9,
      location: "Kadıköy, Istanbul",
      description:
        "Die Cosmedica Clinic unter der Leitung von Dr. Levent Acar ist bekannt für ihre natürlichen Ergebnisse und individuelle Betreuung bei Haartransplantationen mit über 15 Jahren Erfahrung.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 98,
      patientsCount: 10000,
      established: 2006,
      certifications: "ISO zertifiziert",
      price: 1950,
    },
    {
      id: 3,
      name: "Smile Hair Clinic",
      rating: 4.8,
      location: "Kadıköy, Istanbul",
      description:
        "Die Smile Hair Clinic wurde von zwei erfahrenen Ärzten gegründet und ist bekannt für ihre präzise Arbeit bei der Schaffung natürlicher Haarlinien und dichter Ergebnisse.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 97,
      patientsCount: 8000,
      established: 2018,
      certifications: "ISO zertifiziert",
      price: 1900,
    },
    {
      id: 4,
      name: "Estepera Klinik",
      rating: 4.6,
      location: "Bakırköy, Istanbul",
      description:
        "Die Estepera Klinik bietet hochwertige Haartransplantationen mit einem Fokus auf individuelle Betreuung und maßgeschneiderte Behandlungspläne für jeden Patienten.",
      specialties: ["FUE-Technik", "Sapphire FUE", "DHI-Methode"],
      successRate: 95,
      patientsCount: 6000,
      established: 2016,
      certifications: "ISO zertifiziert",
      price: 1800,
    },
    {
      id: 5,
      name: "Clinicana",
      rating: 4.7,
      location: "Şişli, Istanbul",
      description:
        "Clinicana ist eine der größten Haartransplantationskliniken in Istanbul mit einem erfahrenen Team und wettbewerbsfähigen Preisen bei gleichzeitig hoher Qualität.",
      specialties: ["FUE-Technik", "Sapphire FUE", "DHI-Methode"],
      successRate: 96,
      patientsCount: 12000,
      established: 2015,
      certifications: "ISO zertifiziert",
      price: 1700,
    },
    {
      id: 6,
      name: "Dr. Cinik Hair Hospital",
      rating: 4.7,
      location: "Şişli, Istanbul",
      description:
        "Das Dr. Cinik Hair Hospital ist spezialisiert auf große Transplantationen mit hoher Graftzahl und verfügt über ein eigenes Krankenhaus mit modernster Ausstattung.",
      specialties: ["FUE-Technik", "Sapphire FUE", "DHI-Methode"],
      successRate: 96,
      patientsCount: 15000,
      established: 2011,
      certifications: "JCI akkreditiert",
      price: 1750,
    },
    {
      id: 7,
      name: "Hermest Clinic",
      rating: 4.6,
      location: "Bakırköy, Istanbul",
      description:
        "Die Hermest Clinic bietet innovative Haartransplantationstechniken mit einem Fokus auf Präzision und natürliche Ergebnisse in einer modernen Klinikumgebung.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 95,
      patientsCount: 7500,
      established: 2014,
      certifications: "ISO zertifiziert",
      price: 1850,
    },
    {
      id: 8,
      name: "Sule Clinic",
      rating: 4.5,
      location: "Kadıköy, Istanbul",
      description:
        "Die Sule Clinic bietet personalisierte Haartransplantationen mit einem Fokus auf natürliche Ergebnisse und eine umfassende Betreuung während des gesamten Prozesses.",
      specialties: ["FUE-Technik", "DHI-Methode", "Augenbrauen-Transplantation"],
      successRate: 94,
      patientsCount: 5000,
      established: 2014,
      certifications: "ISO zertifiziert",
      price: 1650,
    },
    {
      id: 9,
      name: "Dr. Serkan Aygin Clinic",
      rating: 4.9,
      location: "Şişli, Istanbul",
      description:
        "Die Dr. Serkan Aygin Clinic wird von einem mehrfach ausgezeichneten Arzt mit über 25 Jahren Erfahrung geleitet und ist bekannt für hervorragende Ergebnisse bei Haartransplantationen.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 98,
      patientsCount: 20000,
      established: 2013,
      certifications: "European Award in Medicine 2019",
      price: 2100,
    },
    {
      id: 10,
      name: "Elithair",
      rating: 4.7,
      location: "Şişli, Istanbul",
      description:
        "Elithair ist eine deutsche Haartransplantationsklinik mit Standorten in Istanbul, die für ihre hohen deutschen Qualitätsstandards und umfassende deutschsprachige Betreuung bekannt ist.",
      specialties: ["Sapphire FUE", "DHI-Methode", "Bart-Transplantation"],
      successRate: 97,
      patientsCount: 18000,
      established: 2013,
      certifications: "TÜV Rheinland zertifiziert",
      price: 2200,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Full Screen Image */}
      <section className="relative h-screen bg-white pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/vorher-haartransplantation-istanbul.jpg"
            alt="Mann mit Haarausfall"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center px-4 pt-32 md:pt-36">
          <div className="max-w-3xl">
            <p
              className="text-black text-xl md:text-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
              }}
            >
              "Zu viele Anbieter, zu viele Versprechen - <br />
              und ich war komplett überfordert."
            </p>
          </div>
        </div>
      </section>

      {/* White Section with Headline */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/behandlungszimmer-haarklinik-tuerkei.jpg"
            alt="Behandlungszimmer in einer Haarklinik"
            className="w-full h-full object-cover"
          />
          {/* Semi-transparent overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Centered Text */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-black font-montreal" style={{ fontSize: "80px", fontWeight: 400, lineHeight: 1.2 }}>
            Die 10 besten Kliniken für
            <br />
            eine Haartransplantation
            <br />
            in der Türkei
          </h1>
        </div>
      </section>

      {/* New White Section with Text Box */}
      <section className="bg-white" style={{ height: "1080px", width: "100%", maxWidth: "1920px", margin: "0 auto" }}>
        <div className="flex items-center justify-center h-full px-4">
          <div className="bg-[#EEEEEE] rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-sm" style={{ maxWidth: "90%" }}>
            <h2
              className="mb-6 text-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "14px",
              }}
            >
              Diese Seite ist genau das, was ich mir damals gewünscht hätte
            </h2>

            <div
              className="space-y-4"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              <p>
                Vor knapp 12 Monaten stand ich genau da, wo du jetzt bist: Unzufrieden mit meinem Haar, aber überfordert
                mit der Frage, wie es weitergehen soll. Es gab unzählige Anbieter, große Versprechen, viele schöne
                Bilder – aber wenig Transparenz. Gerade bei einer Haartransplantation in der Türkei fehlt oft ein
                neutraler Vergleich. Was kostet das wirklich? Wem kann man vertrauen? Wie vielversprechend ist die
                Behandlung? Ich war unsicher – und das bei einer Entscheidung, die man nicht mal eben so trifft.
              </p>

              <p>
                Aus genau diesem Gefühl heraus ist diese Seite entstanden. Ich habe viele Wochen recherchiert, Angebote
                verglichen, Gespräche geführt und schließlich meine eigene Haartransplantation in Istanbul machen lassen
                – in einer der Kliniken, die heute hier gelistet sind. Heute möchte ich dir helfen, schneller Klarheit
                zu gewinnen – und eine bessere Entscheidungsgrundlage zu haben als ich damals.
              </p>

              <p>
                Auf dieser Seite findest du meine persönliche Auswahl der 10 besten Haarkliniken in der Türkei. Die
                Auswahl basiert auf einer Kombination aus harten Fakten und individuellen Eindrücken: Erfahrung der
                Ärzte mit der FUE- oder Saphir-FUE-Methode, hygienische Standards, medizinische Betreuung, Nachsorge –
                aber auch Preis-Leistungs-Verhältnis, Auftreten der Klinik, räumliche Atmosphäre und das Gefühl im
                direkten Gespräch.
              </p>

              <p>
                Ich habe alle hier vorgestellten Kliniken so ausgewählt, dass ich sie guten Gewissens empfehlen kann.
                Welche davon für dich persönlich passt, hängt natürlich auch von deinen individuellen Prioritäten ab –
                etwa ob du maximale Natürlichkeit, eine besonders angenehme Betreuung oder ein gutes Angebot suchst.
                Genau dabei soll dir diese Seite helfen: als ehrlicher Erfahrungsbericht, unabhängiger Vergleich und
                vertrauensvoller Ausgangspunkt für deine Haartransplantation in der Türkei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section id="kliniken" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {allClinics.map((clinic, index) => (
              <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto relative">
                    <img
                      src={`/istanbul-hair-clinic.png?height=300&width=500&query=modern hair transplant clinic in Istanbul ${clinic.name}`}
                      alt={`${clinic.name} Klinik in Istanbul`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        {formatNumber(index + 1)}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle
                            className="tracking-normal"
                            style={{
                              fontFamily: "Montreal, Arial, sans-serif",
                              fontSize: "20px",
                            }}
                          >
                            {clinic.name}
                          </CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-black" />
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                clinic.name + " " + clinic.location,
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-600 hover:underline"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                                color: "black",
                              }}
                            >
                              {clinic.location}
                            </a>
                          </CardDescription>
                        </div>
                        <div className="flex items-center bg-[#EEEEEE] rounded-full px-3 py-1">
                          <Star className="fill-black h-4 w-4 text-black" />
                          <span
                            className="ml-1 text-black text-sm"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {clinic.rating}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow py-2">
                      <p
                        className="text-black mb-4"
                        style={{
                          fontFamily: "var(--font-geist-sans)",
                          fontWeight: 400,
                        }}
                      >
                        {clinic.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {clinic.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-[#EEEEEE] text-black text-xs px-3 py-1 rounded-full"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center">
                          <ThumbsUp className="h-5 w-5 mr-2 text-black" />
                          <span
                            className="text-sm text-black"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {clinic.successRate}% Erfolgsrate
                          </span>
                        </div>

                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-black" />
                          <span
                            className="text-sm text-black"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {clinic.patientsCount}+ Patienten
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-black" />
                          <span
                            className="text-sm text-black"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            Seit {clinic.established}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Check className="h-5 w-5 mr-2 text-black" />
                          <span
                            className="text-sm text-black"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {clinic.certifications}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between items-center">
                      <div
                        className="text-black text-lg"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        ab {clinic.price} €
                      </div>
                      <Button
                        asChild
                        className="bg-black hover:bg-gray-800 rounded-full"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          color: "white",
                        }}
                      >
                        <Link href={`/kliniken/${clinic.id}`}>Details</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto">
            {/* Image on the left */}
            <div className="md:w-1/2">
              <img
                src="/images/saphir-fue-haartransplantation.jpg"
                alt="Saphir FUE Haartransplantation Verfahren"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2">
              <h2
                className="text-2xl mb-6"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Wie diese Auswahl entstanden ist
              </h2>

              <div
                className="space-y-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <p>
                  Diese Liste ist das Ergebnis intensiver Recherche im Zusammenhang mit meiner eigenen
                  Haartransplantation in der Türkei. Über mehrere Wochen hinweg systematisch geprüft, welche Kliniken
                  wirklich vertrauenswürdig sind.
                </p>

                <p className="font-medium mt-4 mb-2">Die Grundlage der Auswahl:</p>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>intensiver Kontakt mit jeder der genannten Kliniken</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Analyse öffentlich verfügbarer Informationen (Websites, Presseberichte, Videomaterial)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Auswertung unabhängiger Patientenbewertungen und Erfahrungsberichte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Bewertung von medizinischem Anspruch, Kommunikation und Transparenz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-black mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>eigene Erfahrung mit einer der gelisteten Kliniken</span>
                  </li>
                </ul>

                <p className="mt-4">
                  Auch wenn ich mich persönlich für eine Klinik entschieden habe, kann ich alle hier aufgeführten
                  Anbieter guten Gewissens empfehlen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-2xl text-black mb-6"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Du hast immer noch Fragen zum Thema Haartransplantation in der Türkei?
          </h2>
          <Button
            asChild
            className="bg-black hover:bg-gray-800 rounded-full"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              color: "white",
            }}
          >
            <Link href="/kontakt">Kontakt</Link>
          </Button>
        </div>
      </section>

      {/* Schema.org structured data */}
      <Script
        id="schema-clinics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: allClinics.slice(0, 10).map((clinic, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "MedicalBusiness",
                name: clinic.name,
                image: `/placeholder.svg?height=300&width=500&query=modern hair transplant clinic in Istanbul ${clinic.name}`,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: clinic.location.split(",")[0].trim(),
                  addressRegion: "Istanbul",
                  addressCountry: "TR",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: clinic.rating,
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: clinic.patientsCount,
                },
                priceRange: `Ab ${clinic.price} €`,
                url: `https://hairtransplant-istanbul.de/kliniken/${clinic.id}`,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
