import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  MapPin,
  Star,
  Globe,
  Instagram,
  Mail,
  Phone,
  Calendar,
  Award,
  CreditCard,
  Languages,
  FileText,
  Camera,
  CheckCircle,
} from "lucide-react"
import Script from "next/script"
import { clinics } from "@/data/clinics"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const clinic = clinics.find((c) => c.id.toString() === params.id)

  if (!clinic) {
    return {
      title: "Klinik nicht gefunden",
      description: "Die gesuchte Haarklinik wurde nicht gefunden.",
    }
  }

  return {
    title: `${clinic.name} | Haartransplantation in Istanbul`,
    description: `Erfahren Sie mehr über ${clinic.name} in Istanbul. Preise, Bewertungen, Techniken und Erfahrungsberichte für Ihre Haartransplantation.`,
    keywords: `${clinic.name}, Haartransplantation Istanbul, ${clinic.techniques.join(", ")}, Haarklinik Türkei`,
  }
}

export async function generateStaticParams() {
  return clinics.map((clinic) => ({
    id: clinic.id.toString(),
  }))
}

export default function ClinicDetailPage({ params }) {
  const clinic = clinics.find((c) => c.id.toString() === params.id)

  if (!clinic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/kliniken"
            className="text-black hover:text-gray-600 mb-4 inline-block"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
            }}
          >
            ← Zurück zur Übersicht
          </Link>
          <h1
            className="text-2xl mb-2 text-black"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
            }}
          >
            {clinic.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content - Left 2/3 */}
          <div className="md:col-span-2">
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={
                  clinic.imageUrl ||
                  `/placeholder.svg?height=500&width=800&query=hair clinic in Istanbul ${clinic.name}`
                }
                alt={`${clinic.name} Klinik in Istanbul`}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Über die Klinik
              </h2>
              <div
                className="text-black space-y-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                <p>{clinic.description || clinic.shortDescription}</p>
                {clinic.specialFeatures && (
                  <div>
                    <h3
                      className="text-base mt-4 mb-2"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontWeight: 400,
                      }}
                    >
                      Besonderheiten
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {clinic.specialFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Techniques */}
            <div className="mb-8">
              <h2
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Angebotene Techniken
              </h2>
              <div className="flex flex-wrap gap-2">
                {clinic.techniques.map((technique, idx) => (
                  <span
                    key={idx}
                    className="bg-[#EEEEEE] text-black px-3 py-2 rounded-full"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            {clinic.services && (
              <div className="mb-8">
                <h2
                  className="text-xl mb-4"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                  }}
                >
                  Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clinic.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-black flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Before/After Images */}
            {clinic.beforeAfterImages && (
              <div className="mb-8">
                <h2
                  className="text-xl mb-4"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                  }}
                >
                  Vorher/Nachher Bilder
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clinic.beforeAfterImages.map((image, index) => (
                    <a
                      key={index}
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt || "Vorher/Nachher Bild"}
                        className="w-full h-auto"
                      />
                    </a>
                  ))}
                </div>
                {clinic.beforeAfterLink && (
                  <div className="mt-4">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                      }}
                    >
                      <a href={clinic.beforeAfterLink} target="_blank" rel="noopener noreferrer">
                        <Camera className="h-4 w-4 mr-2" />
                        Mehr Vorher/Nachher Bilder
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Customer Experiences */}
            {clinic.customerExperiences && (
              <div className="mb-8">
                <h2
                  className="text-xl mb-4"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                  }}
                >
                  Kundenerfahrungen
                </h2>
                <div className="space-y-4">
                  {clinic.customerExperiences.map((experience, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center mb-2">
                        <div
                          className="font-medium"
                          style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          {experience.name}
                        </div>
                        <div className="ml-auto flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < experience.rating ? "fill-black text-black" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {experience.text}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Right 1/3 */}
          <div>
            {/* Contact & Info Card */}
            <Card className="p-6 mb-6">
              <h2
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Kontakt & Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        clinic.address + ", " + clinic.location,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      {clinic.address}
                      <br />
                      {clinic.location}
                    </a>
                  </div>
                </div>

                {clinic.website && (
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <a
                      href={clinic.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      Website besuchen
                    </a>
                  </div>
                )}

                {clinic.instagram && (
                  <div className="flex items-start">
                    <Instagram className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <a
                      href={clinic.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      Instagram
                    </a>
                  </div>
                )}

                {clinic.email && (
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <a
                      href={`mailto:${clinic.email}`}
                      className="text-black hover:text-gray-600"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      {clinic.email}
                    </a>
                  </div>
                )}

                {clinic.whatsapp && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <a
                      href={`https://wa.me/${clinic.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      WhatsApp Kontakt
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button
                  asChild
                  className="w-full bg-black hover:bg-gray-800 rounded-full"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                    color: "white",
                  }}
                >
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </div>
            </Card>

            {/* Key Facts Card */}
            <Card className="p-6 mb-6">
              <h2
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Wichtige Fakten
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-xs text-gray-500"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                      }}
                    >
                      Gegründet
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      {clinic.foundedYear}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-xs text-gray-500"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                      }}
                    >
                      Leitender Arzt
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      {clinic.leadDoctor}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-xs text-gray-500"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                      }}
                    >
                      Durchgeführte Transplantationen
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "12px",
                      }}
                    >
                      {clinic.transplantCount}+
                    </div>
                  </div>
                </div>

                {clinic.certifications && (
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <div
                        className="text-xs text-gray-500"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Zertifikate & Auszeichnungen
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {Array.isArray(clinic.certifications)
                          ? clinic.certifications.join(", ")
                          : clinic.certifications}
                      </div>
                    </div>
                  </div>
                )}

                {clinic.paymentMethods && (
                  <div className="flex items-start">
                    <CreditCard className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <div
                        className="text-xs text-gray-500"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Zahlungsmethoden
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {Array.isArray(clinic.paymentMethods)
                          ? clinic.paymentMethods.join(", ")
                          : clinic.paymentMethods}
                      </div>
                    </div>
                  </div>
                )}

                {clinic.languages && (
                  <div className="flex items-start">
                    <Languages className="h-5 w-5 mr-2 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <div
                        className="text-xs text-gray-500"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Angebotene Sprachen
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {Array.isArray(clinic.languages) ? clinic.languages.join(", ") : clinic.languages}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Price Card */}
            <Card className="p-6 mb-6">
              <h2
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                }}
              >
                Preise
              </h2>

              <div
                className="text-3xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                }}
              >
                ab {clinic.priceFrom} €
              </div>

              <p
                className="text-gray-600 mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Der endgültige Preis hängt von verschiedenen Faktoren ab, wie der gewählten Technik, der Anzahl der
                Grafts und individuellen Anforderungen.
              </p>

              <Button
                asChild
                className="w-full bg-black hover:bg-gray-800 rounded-full"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  color: "white",
                }}
              >
                <Link href="/kontakt">Kostenlose Beratung</Link>
              </Button>
            </Card>

            {/* Ratings Card */}
            {(clinic.googleRating || clinic.trustpilotRating) && (
              <Card className="p-6">
                <h2
                  className="text-lg mb-4"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                  }}
                >
                  Bewertungen
                </h2>

                <div className="space-y-4">
                  {clinic.googleRating && (
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        <img
                          src="/google-logo.svg"
                          alt="Google"
                          className="h-5 w-5 mr-2"
                          style={{ filter: "grayscale(100%)" }}
                        />
                        Google
                      </div>
                      <div className="flex items-center">
                        <div
                          className="mr-2"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontWeight: 200,
                            fontSize: "12px",
                          }}
                        >
                          {clinic.googleRating}
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(clinic.googleRating) ? "fill-black text-black" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {clinic.trustpilotRating && (
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        <img
                          src="/trustpilot-logo.svg"
                          alt="Trustpilot"
                          className="h-5 w-5 mr-2"
                          style={{ filter: "grayscale(100%)" }}
                        />
                        Trustpilot
                      </div>
                      <div className="flex items-center">
                        <div
                          className="mr-2"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontWeight: 200,
                            fontSize: "12px",
                          }}
                        >
                          {clinic.trustpilotRating}
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(clinic.trustpilotRating) ? "fill-black text-black" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <Script
        id="schema-clinic-detail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: clinic.name,
            image:
              clinic.imageUrl || `/placeholder.svg?height=500&width=800&query=hair clinic in Istanbul ${clinic.name}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: clinic.address,
              addressLocality: clinic.location.split(",")[0].trim(),
              addressRegion: "Istanbul",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: clinic.latitude || 41.0082,
              longitude: clinic.longitude || 28.9784,
            },
            url: `/kliniken/${clinic.id}`,
            telephone: clinic.whatsapp,
            email: clinic.email,
            priceRange: `Ab ${clinic.priceFrom} €`,
            medicalSpecialty: "Hair Transplantation",
            availableService: clinic.techniques,
            founder: clinic.leadDoctor,
            foundingDate: clinic.foundedYear,
            description: clinic.description || clinic.shortDescription,
            sameAs: [clinic.website, clinic.instagram].filter(Boolean),
            aggregateRating: clinic.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: clinic.rating,
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: clinic.transplantCount > 1000 ? Math.floor(clinic.transplantCount / 10) : 100,
                }
              : undefined,
            review:
              clinic.customerExperiences && clinic.customerExperiences.length > 0
                ? clinic.customerExperiences.map((exp) => ({
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: exp.rating,
                      bestRating: "5",
                      worstRating: "1",
                    },
                    author: {
                      "@type": "Person",
                      name: exp.name,
                    },
                    reviewBody: exp.text,
                  }))
                : undefined,
          }),
        }}
      />
    </main>
  )
}
