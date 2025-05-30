import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import Carousel from "./carousel"
import { useAppDispatch } from "../store/hooks"
import { fetchBannerData } from "../store/slices/bannerSlice"

export default function HeroSection() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerData())
  }, [dispatch])

  return (
    <section className="bg-[#ffedd5] py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-flex-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Personalized Astrology Solutions – Anytime, Anywhere
              </h1>
              <p className="text-lg mb-6">
                Connect with verified astrologers for guidance on career, relationships, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <Link to="talk-to-astrologer">Talk to an Astrologer Now</Link>
                </Button>
              </div>
              <div className="relative max-w-md">
                <Input type="text" placeholder="Ask your question..." className="pr-20 h-12 bg-white" />
                <Button className="absolute right-0 top-0 h-12 rounded-l-none bg-black hover:bg-gray-800 text-white">
                  Search
                </Button>
              </div>
            </div>
          </div>
          {/* Right Carousel */}
          <div className="md:w-1/2 flex justify-center">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  )
}
