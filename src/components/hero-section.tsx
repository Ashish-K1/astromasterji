import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function HeroSection() {
  return (
    <section className="bg-yellow-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Personalized Astrology Solutions – Anytime, Anywhere
              </h1>
              <p className="text-lg mb-6">
                Connect with verified astrologers for guidance on career, relationships, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-black hover:bg-gray-800 text-white"><Link to="talk-to-astrologer">Talk to an Astrologer Now</Link></Button>
                <Button variant="outline" className="bg-white hover:bg-gray-100">
                  <Link to="book-a-pooja">
                   Book a Puja/Havan
                  </Link>
                </Button>
              </div>
              <div className="relative max-w-md">
                <Input type="text" placeholder="Ask your question..." className="pr-20 h-12 bg-white" />
                <Button className="absolute right-0 top-0 h-12 rounded-l-none bg-black hover:bg-gray-800 text-white">
                  Search
                </Button>
              </div>
              {/* <div className="mt-6">
                <p className="text-sm font-medium">Trusted by 10,000+ Satisfied Users</p>
                <div className="flex items-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-600"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium">4.8/5 (2,500+ reviews)</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img src="/bannerImage.png" alt="Astrologer" className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
