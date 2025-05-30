import { useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { nextSlide, prevSlide, goToSlide } from "../store/slices/bannerSlice"

export default function Carousel() {
  const dispatch = useAppDispatch()
  const { banners, currentIndex, loading } = useAppSelector((state) => state.banner)

  // Auto-play carousel
  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        dispatch(nextSlide())
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [dispatch, banners.length])

  if (loading === "pending") {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <div className="aspect-square bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      </div>
    )
  }

  if (loading === "failed" || banners.length === 0) {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <img src="/placeholder.svg?height=400&width=400" alt="Astrologer" className="rounded-lg w-full h-auto" />
        {/* <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          200+ Celebs recommend Astrotalk
        </div> */}
      </div>
    )
  }

  const currentBanner = banners[currentIndex]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main carousel image */}
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={currentBanner?.bannerUrl || "/placeholder.svg?height=400&width=400"}
          alt={currentBanner?.title || "Banner"}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Overlay content */}
        {/* <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          200+ Celebs recommend Astrotalk
        </div> */}

        {/* Navigation arrows */}
        {banners.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => dispatch(prevSlide())}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => dispatch(nextSlide())}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {banners.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-600" : "bg-gray-300"
              }`}
              onClick={() => dispatch(goToSlide(index))}
            />
          ))}
        </div>
      )}

      {/* Banner title and description */}
      {currentBanner?.title && (
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-lg">{currentBanner.title}</h3>
          {currentBanner.description && <p className="text-sm text-gray-600 mt-1">{currentBanner.description}</p>}
        </div>
      )}
    </div>
  )
}
