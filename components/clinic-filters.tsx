"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, X } from "lucide-react"

export default function ClinicFilters({ onFilterChange }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    search: "",
    priceRange: [1000, 3000],
    techniques: {
      fue: false,
      dhi: false,
      sapphire: false,
      bio: false,
    },
    languages: {
      german: false,
      english: false,
      turkish: false,
    },
  })

  const handleSearchChange = (e) => {
    const newFilters = { ...filters, search: e.target.value }
    setFilters(newFilters)
    // Apply search filter immediately
    onFilterChange(newFilters)
  }

  const handlePriceChange = (value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }))
    // Don't apply price filter immediately, wait for Apply button
  }

  const handleCheckboxChange = (category, key, checked) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: checked,
      },
    }))
    // Don't apply checkbox filters immediately, wait for Apply button
  }

  const resetFilters = () => {
    const resetFiltersValue = {
      search: "",
      priceRange: [1000, 3000],
      techniques: {
        fue: false,
        dhi: false,
        sapphire: false,
        bio: false,
      },
      languages: {
        german: false,
        english: false,
        turkish: false,
      },
    }
    setFilters(resetFiltersValue)
    onFilterChange(resetFiltersValue)
  }

  const applyFilters = () => {
    onFilterChange(filters)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Klinik suchen..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10 rounded-full"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
            }}
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="ml-2 rounded-full"
        >
          <Filter className="h-4 w-4 mr-2" />
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
            }}
          >
            Filter
          </span>
        </Button>
      </div>

      {/* Expanded Filters */}
      {isFiltersOpen && (
        <div className="pt-4 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                    fontSize: "12px",
                  }}
                >
                  Preisbereich
                </Label>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 200,
                    fontSize: "12px",
                  }}
                >
                  {filters.priceRange[0]} € - {filters.priceRange[1]} €
                </span>
              </div>
              <Slider
                defaultValue={filters.priceRange}
                min={1000}
                max={3000}
                step={100}
                onValueChange={handlePriceChange}
                className="mb-6"
              />
            </div>

            {/* Techniques */}
            <div>
              <Label
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Techniken
              </Label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="fue"
                    checked={filters.techniques.fue}
                    onCheckedChange={(checked) => handleCheckboxChange("techniques", "fue", checked)}
                  />
                  <Label
                    htmlFor="fue"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    FUE-Technik
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="dhi"
                    checked={filters.techniques.dhi}
                    onCheckedChange={(checked) => handleCheckboxChange("techniques", "dhi", checked)}
                  />
                  <Label
                    htmlFor="dhi"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    DHI-Methode
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="sapphire"
                    checked={filters.techniques.sapphire}
                    onCheckedChange={(checked) => handleCheckboxChange("techniques", "sapphire", checked)}
                  />
                  <Label
                    htmlFor="sapphire"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    Sapphire FUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="bio"
                    checked={filters.techniques.bio}
                    onCheckedChange={(checked) => handleCheckboxChange("techniques", "bio", checked)}
                  />
                  <Label
                    htmlFor="bio"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    Bio-FUE
                  </Label>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <Label
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Sprachen
              </Label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="german"
                    checked={filters.languages.german}
                    onCheckedChange={(checked) => handleCheckboxChange("languages", "german", checked)}
                  />
                  <Label
                    htmlFor="german"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    Deutsch
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="english"
                    checked={filters.languages.english}
                    onCheckedChange={(checked) => handleCheckboxChange("languages", "english", checked)}
                  />
                  <Label
                    htmlFor="english"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    Englisch
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="turkish"
                    checked={filters.languages.turkish}
                    onCheckedChange={(checked) => handleCheckboxChange("languages", "turkish", checked)}
                  />
                  <Label
                    htmlFor="turkish"
                    className="ml-2"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 200,
                      fontSize: "12px",
                    }}
                  >
                    Türkisch
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="rounded-full mr-2"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              <X className="h-4 w-4 mr-2" />
              Zurücksetzen
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-black hover:bg-gray-800"
              onClick={applyFilters}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              Anwenden
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
