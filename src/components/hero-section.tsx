import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"

interface BannerDetail {
  id: number
  bannerUrl: string
  bannerName: string
}

export default function HeroSection() {
  const [bannerData, setBannerData] = useState<BannerDetail[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    fetchBannerData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 1000) // 1 seconds
  
    return () => clearInterval(interval)
  }, [bannerData])

  const fetchBannerData = async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzC8Yc26vdMePGzztb1eJboEMILaYgeEkGVSOyhmY3J42n4KcsRkeF0JnGRTwXUyWDw/exec")
      const jsonData = await response.json()
      setBannerData(jsonData)
    } catch (error) {
      console.error("Error fetching banners:", error)
    }
  }

  const handleNext = () => {
    setCurrent((current) => (current + 1) % bannerData.length)
  }

  const handlePrev = () => {
    setCurrent((current) => (current - 1 + bannerData.length) % bannerData.length)
  }

  return (
    <section className="bg-[#ffedd5] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
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
            <div className="relative w-full max-w-md h-72 overflow-hidden">
              {bannerData.length > 0 ? (
                bannerData.map((banner, index) => (
                  <img
                    key={banner.id}
                    src={banner.bannerUrl}
                    alt={banner.bannerName}
                    className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                      index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
                  <p className="text-gray-600">Loading banners...</p>
                </div>
              )}

              {/* Navigation Buttons */}
              {bannerData.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow"
                  >
                    ◀
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
