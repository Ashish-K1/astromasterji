"use client"

import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Link } from "@radix-ui/react-navigation-menu"

export default function Header() {
  const [language, setLanguage] = useState("Eng")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <img src="/logo.png" alt="Astromasterji Logo" className="object-contain" />
            </div>
            <span className="text-xl font-bold">Astromasterji</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/free-kundli" className="text-sm font-medium">
            Free Kundli
          </Link>
          <Link href="/compatibility-match" className="text-sm font-medium">
            Compatibility match
          </Link>
          <Link href="/kundli-matching" className="text-sm font-medium">
            Kundli Matching
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 p-1">
                Horoscopes
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/daily-horoscope" className="w-full">
                  Daily Horoscope
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/weekly-horoscope" className="w-full">
                  Weekly Horoscope
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/monthly-horoscope" className="w-full">
                  Monthly Horoscope
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 p-1">
                {language}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("Eng")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("हिं")}>Hindi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Login</Button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/chat-with-astrologer" className="text-sm font-medium">
            Chat with Astrologer
          </Link>
          <Link href="/talk-to-astrologer" className="text-sm font-medium">
            Talk to Astrologer
          </Link>
          <Link href="/book-a-pooja" className="text-sm font-medium relative">
            Book a Pooja
            <span className="absolute -top-2 -right-8 bg-yellow-400 text-[10px] px-1 rounded-sm">NEW</span>
          </Link>
          <Link href="/astromall" className="text-sm font-medium">
            Astromall
          </Link>
          <Link href="/store" className="text-sm font-medium">
            Astromasterji Store
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
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
