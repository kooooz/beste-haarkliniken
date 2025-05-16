"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: checked }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // In a real application, you would send the form data to your server here
      // For this example, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        message: "",
        privacyPolicy: false,
      })
    } catch (error) {
      setSubmitError("Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {submitSuccess ? (
        <div className="p-6 bg-[#EEEEEE] rounded-lg">
          <h2
            className="text-lg mb-4"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
            }}
          >
            Vielen Dank für deine Nachricht!
          </h2>
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              fontSize: "12px",
            }}
          >
            Ich werde mich so schnell wie möglich bei dir melden.
          </p>
          <Button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="bg-black hover:bg-gray-800 rounded-full"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              color: "white",
            }}
          >
            Neues Formular
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-md"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                E-Mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-md"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Nachricht
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-gray-200 rounded-md"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacyPolicy"
                checked={formData.privacyPolicy}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label
                htmlFor="privacyPolicy"
                className="text-xs"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 200,
                  fontSize: "12px",
                }}
              >
                Ich habe die{" "}
                <Link href="/datenschutz" className="underline hover:text-gray-600">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </Label>
            </div>

            <div
              className="flex items-center text-xs text-gray-500"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              <Lock className="h-3 w-3 mr-1" />
              <span>Deine Daten werden SSL-verschlüsselt übertragen.</span>
            </div>
          </div>

          {submitError && (
            <div
              className="text-red-500"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !formData.privacyPolicy}
            className="bg-black hover:bg-gray-800 rounded-full"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 200,
              color: "white",
            }}
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </form>
      )}
    </div>
  )
}
