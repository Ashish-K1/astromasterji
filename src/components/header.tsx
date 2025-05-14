"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [language, setLanguage] = useState("Eng")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <img src="/astromasterji/logo.png" alt="Astromasterji Log
              o" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-bold">AstroMasterji</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {/* <Link to="/free-kundli" className="text-sm font-medium">
            Free Kundli
          </Link> */}
          <Link to="/about-us" className="text-sm font-medium">
            About Us
          </Link>
          <Link to="/kundali-matching" className="text-sm font-medium">
            Kundli Matching
          </Link>
          <Link to="/horoscope" className="text-sm font-medium">
            Horoscope
          </Link>
          {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Login</Button> */}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/chat-with-astrologer" className="text-sm font-medium">
            Chat with Astrologer
          </Link>
          {/* <Link to="/talk-to-astrologer" className="text-sm font-medium">
            Talk to Astrologer
          </Link> */}
          <Link to="/book-a-pooja" className="text-sm font-medium relative">
            Book a Pooja / Havan
          </Link>
          {/* <Link to="/astromall" className="text-sm font-medium">
            Astromall
          </Link> */}
          {/* <Link to="/store" className="text-sm font-medium">
            Astromasterji Store
          </Link> */}
          {/* <Link to="/blog" className="text-sm font-medium">
            Blog
          </Link> */}
        </div>

        {/* Mobile menu button - would implement a proper mobile menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
