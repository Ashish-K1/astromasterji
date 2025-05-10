import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import Image from "next/image"
import { Star, Phone, MessageCircle } from "lucide-react"

export default function FeaturedAstrologers() {
  const astrologers = [
    {
      id: 1,
      name: "Acharya Vikram",
      image: "/placeholder.svg?height=100&width=100",
      specialties: ["Vedic", "Numerology"],
      experience: "15 years",
      languages: ["Hindi", "English"],
      rating: 4.9,
      reviews: 1250,
      price: "₹40/min",
      status: "Online",
    },
    {
      id: 2,
      name: "Sunita Sharma",
      image: "/placeholder.svg?height=100&width=100",
      specialties: ["Tarot", "Palmistry"],
      experience: "10 years",
      languages: ["Hindi", "English", "Punjabi"],
      rating: 4.8,
      reviews: 980,
      price: "₹35/min",
      status: "Busy",
    },
    {
      id: 3,
      name: "Dr. Rajesh Joshi",
      image: "/placeholder.svg?height=100&width=100",
      specialties: ["Vastu", "KP Astrology"],
      experience: "20 years",
      languages: ["Hindi", "English", "Marathi"],
      rating: 4.9,
      reviews: 1560,
      price: "₹45/min",
      status: "Online",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Astrologers</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {astrologers.map((astrologer) => (
            <Card key={astrologer.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img
                        src={astrologer.image || "/placeholder.svg"}
                        alt={astrologer.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <Badge
                        className={`absolute -bottom-1 right-0 ${
                          astrologer.status === "Online" ? "bg-green-500" : "bg-orange-500"
                        }`}
                      >
                        {astrologer.status}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{astrologer.name}</h3>
                      <div className="flex flex-wrap gap-1 my-1">
                        {astrologer.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="bg-yellow-50">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Experience: {astrologer.experience}</p>
                      <p className="text-sm text-gray-600">Languages: {astrologer.languages.join(", ")}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">
                          {astrologer.rating} ({astrologer.reviews})
                        </span>
                      </div>
                      <p className="text-sm font-medium text-green-600 mt-1">{astrologer.price}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <Button variant="ghost" className="rounded-none h-12 flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </Button>
                  <Button variant="ghost" className="rounded-none h-12 flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
