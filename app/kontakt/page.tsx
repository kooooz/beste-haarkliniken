import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Kontakt | Beste Haarkliniken in Istanbul",
  description: "Kontaktiere uns für Fragen zu Haartransplantationen in Istanbul und der Türkei.",
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1
          className="text-2xl mb-8 text-black"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 400,
          }}
        >
          Kontakt
        </h1>

        <div
          className="mb-8 text-black"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 200,
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          <p>
            Du hast Fragen zu einer Haartransplantation in der Türkei oder möchtest eine persönliche Beratung? Fülle
            einfach das Formular aus und ich melde mich zeitnah bei dir zurück.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
