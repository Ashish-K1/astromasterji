import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Image from "next/image"
import { Search, Filter, Star } from "lucide-react"

export default function BookAPooja() {
  const poojas = [
    {
      id: 1,
      name: "Ganesh Puja",
      image: "/placeholder.svg?height=200&width=300",
      description: "Invoke the blessings of Lord Ganesha to remove obstacles from your life.",
      duration: "2 hours",
      price: "₹2,100",
      rating: 4.9,
      reviews: 120,
      category: "prosperity",
    },
    {
      id: 2,
      name: "Navgraha Shanti Puja",
      image: "/placeholder.svg?height=200&width=300",
      description: "Balance the influence of the nine planets in your life with this powerful ritual.",
      duration: "3 hours",
      price: "₹3,500",
      rating: 4.8,
      reviews: 95,
      category: "planets",
    },
    {
      id: 3,
      name: "Lakshmi Puja",
      image: "/placeholder.svg?height=200&width=300",
      description: "Attract wealth and prosperity with this sacred ritual dedicated to Goddess Lakshmi.",
      duration: "2.5 hours",
      price: "₹2,800",
      rating: 4.7,
      reviews: 85,
      category: "prosperity",
    },
    {
      id: 4,
      name: "Rudra Abhishek",
      image: "/placeholder.svg?height=200&width=300",
      description: "Powerful ritual to please Lord Shiva and seek his divine blessings.",
      duration: "4 hours",
      price: "₹4,100",
      rating: 4.9,
      reviews: 110,
      category: "spiritual",
    },
    {
      id: 5,
      name: "Satyanarayan Puja",
      image: "/placeholder.svg?height=200&width=300",
      description: "A ritual to express gratitude to Lord Vishnu and seek his blessings for prosperity.",
      duration: "3 hours",
      price: "₹2,500",
      rating: 4.8,
      reviews: 75,
      category: "spiritual",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book a Pooja</h1>

      <div className="bg-yellow-50 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Sacred Rituals for Divine Blessings</h2>
            <p className="mb-4">
              Experience authentic Vedic rituals performed by experienced pandits to bring positive energy, prosperity,
              and peace into your life.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
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
                  className="h-5 w-5 text-green-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Performed by experienced and verified pandits</span>
              </li>
              <li className="flex items-center">
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
                  className="h-5 w-5 text-green-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Live streaming option available</span>
              </li>
              <li className="flex items-center">
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
                  className="h-5 w-5 text-green-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Detailed explanation of the ritual and its benefits</span>
              </li>
            </ul>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Book a Custom Pooja</Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Pooja Ritual"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search for poojas" className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="prosperity">Prosperity</SelectItem>
                <SelectItem value="planets">Planetary</SelectItem>
                <SelectItem value="spiritual">Spiritual</SelectItem>
                <SelectItem value="health">Health & Wellbeing</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under ₹2,000</SelectItem>
                <SelectItem value="medium">₹2,000 - ₹3,500</SelectItem>
                <SelectItem value="high">Above ₹3,500</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Poojas</TabsTrigger>
            <TabsTrigger value="prosperity">Prosperity</TabsTrigger>
            <TabsTrigger value="planets">Planetary</TabsTrigger>
            <TabsTrigger value="spiritual">Spiritual</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {poojas.map((pooja) => (
                <Card key={pooja.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={pooja.image || "/placeholder.svg"}
                        alt={pooja.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                        {pooja.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{pooja.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{pooja.description}</p>
                      <div className="flex items-center mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">
                          {pooja.rating} ({pooja.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">{pooja.price}</p>
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Book Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prosperity" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {poojas
                .filter((p) => p.category === "prosperity")
                .map((pooja) => (
                  <Card key={pooja.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={pooja.image || "/placeholder.svg"}
                          alt={pooja.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                          {pooja.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{pooja.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{pooja.description}</p>
                        <div className="flex items-center mb-3">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">
                            {pooja.rating} ({pooja.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold">{pooja.price}</p>
                          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Book Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Similar TabsContent for other categories */}
        </Tabs>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">How does online pooja work?</h3>
            <p className="text-gray-600">
              Our pandits perform the ritual at our sacred temple while you join via video call. You'll receive the
              prasad and other sacred items by courier after the ceremony.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I customize the pooja according to my needs?</h3>
            <p className="text-gray-600">
              Yes, we offer customization options. You can discuss your specific requirements with our pandits before
              booking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How do I prepare for the online pooja?</h3>
            <p className="text-gray-600">
              We'll send you detailed instructions on how to prepare your space, what items you'll need, and how to
              participate in the ceremony.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
