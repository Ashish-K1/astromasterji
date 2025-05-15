import { Link } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { MessageCircle, Phone, ShoppingCart, Flame } from "lucide-react"
import ServiceCard from "../components/service-card"
import HeroSection from "../components/hero-section"
import FeaturedAstrologers from "../components/featured-astrologers"
import TestimonialSection from "../components/testimonial-section"
import ComplimentaryServices from "../components/complimentary-services"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Service Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<MessageCircle className="h-8 w-8 text-pink-500" />}
              title="Chat with Astrologer"
              href="/chat-with-astrologer"
              bgColor="bg-white"
              iconBgColor="bg-pink-100"
            />
            <ServiceCard
              icon={<Phone className="h-8 w-8 text-teal-500" />}
              title="Talk to Astrologer"
              href="/talk-to-astrologer"
              bgColor="bg-white"
              iconBgColor="bg-teal-100"
            />
            <ServiceCard
              icon={<Flame className="h-8 w-8 text-orange-500" />}
              title="Vastu Consultation"
              href="/book-a-pooja"
              bgColor="bg-white"
              iconBgColor="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* Complimentary Services */}
      <ComplimentaryServices />

      {/* Featured Astrologers */}
      {/* <FeaturedAstrologers /> */}

      {/* Testimonials */}
      {/* <TestimonialSection /> */}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Astromasterji?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
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
                      className="h-6 w-6 text-yellow-600"
                    >
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="m16 6-4 4-4-4" />
                      <path d="M16 18a4 4 0 0 0-8 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Astrologers</h3>
                  <p className="text-gray-600">
                    All our astrologers go through a rigorous verification process to ensure authenticity and expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
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
                      className="h-6 w-6 text-yellow-600"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Privacy Guaranteed</h3>
                  <p className="text-gray-600">
                    Your personal information and consultations are kept 100% confidential and secure.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
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
                      className="h-6 w-6 text-yellow-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
                  <p className="text-gray-600">
                    Not satisfied with your consultation? Get a refund or try another astrologer on us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download App */}
      {/* <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Download the Astromasterji App</h2>
              <p className="text-gray-600 mb-6">
                Get instant access to astrologers, daily horoscopes, and more on your mobile device.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="block">
                  <img src="https://via.placeholder.com/150x50" alt="Download on App Store" className="h-12 w-auto" />
                </Link>
                <Link to="#" className="block">
                  <img src="https://via.placeholder.com/150x50" alt="Get it on Google Play" className="h-12 w-auto" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <img src="https://via.placeholder.com/250x500" alt="Astromasterji Mobile App" className="mx-auto" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
