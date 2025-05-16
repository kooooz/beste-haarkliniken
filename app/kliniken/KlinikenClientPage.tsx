"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Star, Globe, Instagram, Mail, Phone, BarChart2, X } from "lucide-react"
import ClinicFilters from "@/components/clinic-filters"
import { clinics } from "@/data/clinics"

export default function KlinikenClientPage() {
  const [filteredClinics, setFilteredClinics] = useState(clinics)
  const [selectedClinics, setSelectedClinics] = useState([])
  const [isCompareMode, setIsCompareMode] = useState(false)

  // Use useCallback to memoize the handleFilterChange function
  const handleFilterChange = useCallback((filters) => {
    let result = [...clinics]

    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      result = result.filter(
        (clinic) =>
          clinic.name.toLowerCase().includes(searchTerm) ||
          clinic.shortDescription.toLowerCase().includes(searchTerm) ||
          clinic.techniques.some((tech) => tech.toLowerCase().includes(searchTerm)),
      )
    }

    // Filter by price range
    result = result.filter(
      (clinic) => clinic.priceFrom >= filters.priceRange[0] && clinic.priceFrom <= filters.priceRange[1],
    )

    // Filter by techniques
    const selectedTechniques = Object.entries(filters.techniques)
      .filter(([_, isSelected]) => isSelected)
      .map(([technique]) => technique)

    if (selectedTechniques.length > 0) {
      result = result.filter((clinic) =>
        clinic.techniques.some((tech) => {
          const techLower = tech.toLowerCase()
          return (
            (selectedTechniques.includes("fue") && techLower.includes("fue")) ||
            (selectedTechniques.includes("dhi") && techLower.includes("dhi")) ||
            (selectedTechniques.includes("sapphire") && techLower.includes("sapphire")) ||
            (selectedTechniques.includes("bio") && techLower.includes("bio"))
          )
        }),
      )
    }

    // Filter by languages
    const selectedLanguages = Object.entries(filters.languages)
      .filter(([_, isSelected]) => isSelected)
      .map(([language]) => language)

    if (selectedLanguages.length > 0) {
      result = result.filter((clinic) =>
        clinic.languages.some((lang) => {
          const langLower = lang.toLowerCase()
          return (
            (selectedLanguages.includes("german") && langLower.includes("deutsch")) ||
            (selectedLanguages.includes("english") && langLower.includes("englisch")) ||
            (selectedLanguages.includes("turkish") && langLower.includes("türkisch"))
          )
        }),
      )
    }

    setFilteredClinics(result)
  }, []) // Empty dependency array means this function is created once and never changes

  // Initialize with all clinics
  useEffect(() => {
    setFilteredClinics(clinics)
  }, [])

  // Toggle clinic selection for comparison
  const toggleClinicSelection = (clinicId) => {
    if (selectedClinics.includes(clinicId)) {
      setSelectedClinics(selectedClinics.filter((id) => id !== clinicId))
    } else {
      if (selectedClinics.length < 3) {
        setSelectedClinics([...selectedClinics, clinicId])
      }
    }
  }

  // Get clinics for comparison
  const getSelectedClinicsData = () => {
    return clinics.filter((clinic) => selectedClinics.includes(clinic.id))
  }

  // Clear all selected clinics
  const clearSelection = () => {
    setSelectedClinics([])
    setIsCompareMode(false)
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1
              className="text-2xl mb-2 text-black"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
              }}
            >
              Haarkliniken in Istanbul
            </h1>

            <p
              className="mb-4 text-black max-w-3xl"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Hier findest du detaillierte Informationen zu den besten Haarkliniken in Istanbul. Vergleiche Preise,
              Techniken, Bewertungen und Erfahrungsberichte, um die für dich passende Klinik zu finden.
            </p>
          </div>

          {/* Compare Button */}
          {selectedClinics.length > 0 && (
            <div className="flex items-center space-x-2">
              <span
                className="text-sm text-gray-600"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                }}
              >
                {selectedClinics.length} von 3 ausgewählt
              </span>
              <Button
                onClick={() => setIsCompareMode(!isCompareMode)}
                className={`rounded-full ${
                  isCompareMode ? "bg-gray-200 text-black hover:bg-gray-300" : "bg-black hover:bg-gray-800 text-white"
                }`}
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                }}
              >
                {isCompareMode ? "Zurück zur Liste" : "Vergleichen"}
                {isCompareMode ? <X className="ml-2 h-4 w-4" /> : <BarChart2 className="ml-2 h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                onClick={clearSelection}
                className="rounded-full"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                }}
              >
                <X className="h-4 w-4 mr-1" />
                Auswahl löschen
              </Button>
            </div>
          )}
        </div>

        {/* Filters Section */}
        {!isCompareMode && (
          <div className="mb-8">
            <ClinicFilters onFilterChange={handleFilterChange} />
          </div>
        )}

        {/* Comparison View */}
        {isCompareMode ? (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2
              className="text-xl mb-6 text-center"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
              }}
            >
              Klinikvergleich
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getSelectedClinicsData().map((clinic) => (
                <div key={clinic.id} className="border-r last:border-r-0 border-gray-200 px-4">
                  <div className="text-center mb-4">
                    <h3
                      className="text-lg font-medium"
                      style={{
                        fontFamily: "Montreal, Arial, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      {clinic.name}
                    </h3>
                    <div className="flex justify-center mt-2">
                      <div className="bg-[#EEEEEE] rounded-full px-3 py-1 inline-flex items-center">
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
                  </div>

                  <div className="space-y-6">
                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={
                          clinic.imageUrl ||
                          `/placeholder.svg?height=300&width=500&query=hair clinic in Istanbul ${clinic.name || "/placeholder.svg"}`
                        }
                        alt={`${clinic.name} Klinik in Istanbul`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <span
                        className="text-sm text-gray-500"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Preis ab
                      </span>
                      <div
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        {clinic.priceFrom} €
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <span
                        className="text-sm text-gray-500 block mb-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Standort
                      </span>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-1 text-black flex-shrink-0 mt-0.5" />
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
                          {clinic.address}, {clinic.location}
                        </a>
                      </div>
                    </div>

                    {/* Techniques */}
                    <div>
                      <span
                        className="text-sm text-gray-500 block mb-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Techniken
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {clinic.techniques.map((technique, idx) => (
                          <span
                            key={idx}
                            className="bg-[#EEEEEE] text-black text-xs px-2 py-1 rounded-full"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                              fontSize: "10px",
                            }}
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Lead Doctor */}
                    <div>
                      <span
                        className="text-sm text-gray-500 block mb-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Leitender Arzt
                      </span>
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

                    {/* Experience */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span
                          className="text-sm text-gray-500 block mb-1"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontWeight: 200,
                          }}
                        >
                          Gegründet
                        </span>
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
                      <div>
                        <span
                          className="text-sm text-gray-500 block mb-1"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontWeight: 200,
                          }}
                        >
                          Transplantationen
                        </span>
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

                    {/* Languages */}
                    <div>
                      <span
                        className="text-sm text-gray-500 block mb-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Sprachen
                      </span>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {clinic.languages.join(", ")}
                      </div>
                    </div>

                    {/* Special Features */}
                    <div>
                      <span
                        className="text-sm text-gray-500 block mb-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                        }}
                      >
                        Besonderheiten
                      </span>
                      <ul
                        className="list-disc pl-5 space-y-1"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          fontSize: "12px",
                        }}
                      >
                        {clinic.specialFeatures.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <Button
                        asChild
                        className="w-full bg-black hover:bg-gray-800 rounded-full"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: 200,
                          color: "white",
                        }}
                      >
                        <Link href={`/kliniken/${clinic.id}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Empty slots */}
              {Array.from({ length: 3 - getSelectedClinicsData().length }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="border-r last:border-r-0 border-gray-200 px-4 flex items-center justify-center"
                >
                  <div className="text-center text-gray-400">
                    <div
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                        fontSize: "14px",
                      }}
                    >
                      Wähle eine weitere Klinik aus
                    </div>
                    <Button
                      onClick={() => setIsCompareMode(false)}
                      variant="outline"
                      className="rounded-full"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontWeight: 200,
                      }}
                    >
                      Zurück zur Liste
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Clinics List
          <div className="space-y-8">
            {filteredClinics.length === 0 ? (
              <div className="text-center py-12">
                <p
                  className="text-gray-500"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                    fontSize: "14px",
                  }}
                >
                  Keine Kliniken gefunden, die deinen Filterkriterien entsprechen.
                </p>
                <Button
                  onClick={() =>
                    handleFilterChange({ search: "", priceRange: [1000, 3000], techniques: {}, languages: {} })
                  }
                  variant="outline"
                  className="mt-4 rounded-full"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                  }}
                >
                  Filter zurücksetzen
                </Button>
              </div>
            ) : (
              filteredClinics.map((clinic) => (
                <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <img
                        src={
                          clinic.imageUrl ||
                          `/placeholder.svg?height=300&width=500&query=hair clinic in Istanbul ${clinic.name || "/placeholder.svg"}`
                        }
                        alt={`${clinic.name} Klinik in Istanbul`}
                        className="object-cover w-full h-full"
                      />
                      {clinic.rating && (
                        <div className="absolute top-4 right-4 bg-[#EEEEEE] rounded-full px-3 py-1 flex items-center">
                          <Star className="fill-black h-4 w-4 text-black mr-1" />
                          <span
                            className="text-black text-sm"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {clinic.rating}
                          </span>
                        </div>
                      )}
                      {/* Checkbox for comparison */}
                      <div className="absolute bottom-4 right-4">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
                            selectedClinics.includes(clinic.id)
                              ? "bg-black text-white"
                              : "bg-white border border-gray-300"
                          }`}
                          onClick={() => toggleClinicSelection(clinic.id)}
                        >
                          {selectedClinics.includes(clinic.id) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:w-2/3">
                      <div className="mb-4">
                        <h2
                          className="text-xl mb-2"
                          style={{
                            fontFamily: "Montreal, Arial, sans-serif",
                            fontSize: "20px",
                          }}
                        >
                          {clinic.name}
                        </h2>
                        <div className="flex items-center mb-2">
                          <MapPin className="h-4 w-4 mr-1 text-black" />
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
                            {clinic.address}, {clinic.location}
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {clinic.techniques.map((technique, idx) => (
                            <span
                              key={idx}
                              className="bg-[#EEEEEE] text-black text-xs px-3 py-1 rounded-full"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              {technique}
                            </span>
                          ))}
                        </div>

                        <p
                          className="text-black mb-4"
                          style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 400,
                            fontSize: "12px",
                          }}
                        >
                          {clinic.shortDescription}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex flex-col">
                            <span
                              className="text-xs text-gray-500"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              Leitender Arzt
                            </span>
                            <span
                              className="text-sm"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              {clinic.leadDoctor}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span
                              className="text-xs text-gray-500"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              Gegründet
                            </span>
                            <span
                              className="text-sm"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              {clinic.foundedYear}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span
                              className="text-xs text-gray-500"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              Transplantationen
                            </span>
                            <span
                              className="text-sm"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                              }}
                            >
                              {clinic.transplantCount}+
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {clinic.website && (
                            <a
                              href={clinic.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-black hover:text-gray-600"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                                fontSize: "12px",
                              }}
                            >
                              <Globe className="h-4 w-4 mr-1" />
                              Website
                            </a>
                          )}
                          {clinic.instagram && (
                            <a
                              href={clinic.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-black hover:text-gray-600"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                                fontSize: "12px",
                              }}
                            >
                              <Instagram className="h-4 w-4 mr-1" />
                              Instagram
                            </a>
                          )}
                          {clinic.email && (
                            <a
                              href={`mailto:${clinic.email}`}
                              className="inline-flex items-center text-black hover:text-gray-600"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                                fontSize: "12px",
                              }}
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              E-Mail
                            </a>
                          )}
                          {clinic.whatsapp && (
                            <a
                              href={`https://wa.me/${clinic.whatsapp}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-black hover:text-gray-600"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                fontWeight: 200,
                                fontSize: "12px",
                              }}
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div
                          className="text-black text-lg"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontWeight: 200,
                          }}
                        >
                          ab {clinic.priceFrom} €
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={() => toggleClinicSelection(clinic.id)}
                            variant="outline"
                            className="rounded-full"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              fontWeight: 200,
                            }}
                          >
                            {selectedClinics.includes(clinic.id) ? "Abwählen" : "Vergleichen"}
                          </Button>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Schema.org structured data */}
    </main>
  )
}
