import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-8">
          <Link
            href="/impressum"
            className="text-black hover:text-gray-600 transition-colors"
            style={{ fontSize: "12px", fontFamily: "var(--font-geist-sans)", fontWeight: 400 }}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-black hover:text-gray-600 transition-colors"
            style={{ fontSize: "12px", fontFamily: "var(--font-geist-sans)", fontWeight: 400 }}
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
