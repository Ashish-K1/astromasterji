import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils" // if using class merge utility

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 w-full h-16 bg-white shadow-md flex items-center justify-between px-4">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="AstroMasterji Logo" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-sanSerrif">AstroMasterji</span>
                <span className="text-xs font-medium font-sanSerrif">Your Path to Success</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about-us" className="text-sm font-medium font-sanSerrif">About Us</Link>
            <Link to="/kundali-matching" className="text-sm font-medium font-sanSerrif">Kundli Matching</Link>
            <Link to="/horoscope" className="text-sm font-medium font-sanSerrif">Horoscope</Link>
            <Link to="/compatibility-match" className="text-sm font-medium font-sanSerrif">Compatibility Match</Link>
            <Link to="/vastu-consultation" className="text-sm font-medium font-sanSerrif">Vastu</Link>
          </nav>

          {/* Desktop Extras */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/chat-with-astrologer" className="text-sm font-medium font-sanSerrif">Chat with Astrologer</Link>
            <Link to="/book-a-pooja" className="text-sm font-medium font-sanSerrif">Vastu Consultation</Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1" />
            <div className="w-6 h-0.5 bg-black mb-1" />
            <div className="w-6 h-0.5 bg-black" />
          </button>
        </div>
      </header>

      {/* Mobile Sliding Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out">
          <div className="flex flex-col p-6 space-y-4 w-full">
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/kundali-matching" onClick={() => setIsMobileMenuOpen(false)}>Kundli Matching</Link>
            <Link to="/horoscope" onClick={() => setIsMobileMenuOpen(false)}>Horoscope</Link>
            <Link to="/compatibility-match" onClick={() => setIsMobileMenuOpen(false)}>Compatibility Match</Link>
            <Link to="/vastu-consultation" onClick={() => setIsMobileMenuOpen(false)}>Vastu</Link>
            <Link to="/chat-with-astrologer" onClick={() => setIsMobileMenuOpen(false)}>Chat with Astrologer</Link>
            <Link to="/book-a-pooja" onClick={() => setIsMobileMenuOpen(false)}>Vastu Consultation</Link>
          </div>
        </div>
      )}
    </div>
  )
}
