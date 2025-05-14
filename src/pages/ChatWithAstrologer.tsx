import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Star, MessageCircle, Search, Filter } from "lucide-react"

export default function ChatWithAstrologer() {
  const astrologers = [
    {
      id: 1,
      name: "Acharya Vikram",
      image: "https://anamolyogi.com/assets/images/new/user.webp",
      specialties: ["Vedic", "Numerology"],
      experience: "15 years",
      languages: ["Hindi", "English"],
      rating: 4.9,
      reviews: 1250,
      price: "₹40/min",
      status: "Online",
      waitTime: "5 min",
    },
    {
      id: 2,
      name: "Sunita Sharma",
      image: "https://anamolyogi.com/assets/images/new/user.webp",
      specialties: ["Tarot", "Palmistry"],
      experience: "10 years",
      languages: ["Hindi", "English", "Punjabi"],
      rating: 4.8,
      reviews: 980,
      price: "₹35/min",
      status: "Online",
      waitTime: "10 min",
    },
    {
      id: 3,
      name: "Dr. Rajesh Joshi",
      image: "https://anamolyogi.com/assets/images/new/user.webp",
      specialties: ["Vastu", "KP Astrology"],
      experience: "20 years",
      languages: ["Hindi", "English", "Marathi"],
      rating: 4.9,
      reviews: 1560,
      price: "₹45/min",
      status: "Online",
      waitTime: "2 min",
    },
    {
      id: 4,
      name: "Meena Gupta",
      image: "https://anamolyogi.com/assets/images/new/user.webp",
      specialties: ["Tarot", "Numerology"],
      experience: "12 years",
      languages: ["Hindi", "English"],
      rating: 4.7,
      reviews: 890,
      price: "₹38/min",
      status: "Online",
      waitTime: "8 min",
    },
    {
      id: 5,
      name: "Pandit Sharma",
      image: "https://anamolyogi.com/assets/images/new/user.webp",
      specialties: ["Vedic", "Vastu"],
      experience: "25 years",
      languages: ["Hindi", "English", "Gujarati"],
      rating: 4.9,
      reviews: 2100,
      price: "₹50/min",
      status: "Busy",
      waitTime: "30 min",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Chat with Astrologer</h1>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search astrologers by name, skill or language" className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vedic">Vedic Astrology</SelectItem>
                <SelectItem value="tarot">Tarot Reading</SelectItem>
                <SelectItem value="numerology">Numerology</SelectItem>
                <SelectItem value="vastu">Vastu</SelectItem>
                <SelectItem value="palmistry">Palmistry</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="punjabi">Punjabi</SelectItem>
                <SelectItem value="gujarati">Gujarati</SelectItem>
                <SelectItem value="marathi">Marathi</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="online">
          <TabsList className="mb-6">
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="busy">Busy</TabsTrigger>
            <TabsTrigger value="offline">Offline</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent value="online" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {astrologers
                .filter((a) => a.status === "Online")
                .map((astrologer) => (
                  <Card key={astrologer.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 border-b">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <img
                              src={astrologer.image || "https://via.placeholder.com/80x80"}
                              alt={astrologer.name}
                              className="w-20 h-20 rounded-full"
                            />
                            <div className="absolute -bottom-1 right-0 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                              {astrologer.status}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{astrologer.name}</h3>
                            <div className="flex flex-wrap gap-1 my-1">
                              {astrologer.specialties.map((specialty, index) => (
                                <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-0.5 rounded">
                                  {specialty}
                                </span>
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
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-sm font-medium text-green-600">{astrologer.price}</p>
                              <p className="text-xs text-gray-500">Wait Time: {astrologer.waitTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full rounded-none h-12 bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat Now</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="busy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {astrologers
                .filter((a) => a.status === "Busy")
                .map((astrologer) => (
                  <Card key={astrologer.id} className="overflow-hidden">
                    {/* Same card structure as above */}
                    <CardContent className="p-0">
                      <div className="p-4 border-b">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <img
                              src={astrologer.image || "https://via.placeholder.com/80x80"}
                              alt={astrologer.name}
                              className="w-20 h-20 rounded-full"
                            />
                            <div className="absolute -bottom-1 right-0 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                              {astrologer.status}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{astrologer.name}</h3>
                            <div className="flex flex-wrap gap-1 my-1">
                              {astrologer.specialties.map((specialty, index) => (
                                <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-0.5 rounded">
                                  {specialty}
                                </span>
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
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-sm font-medium text-green-600">{astrologer.price}</p>
                              <p className="text-xs text-gray-500">Wait Time: {astrologer.waitTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full rounded-none h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>Notify When Available</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="offline" className="mt-0">
            <div className="text-center py-8">
              <p className="text-gray-500">No offline astrologers available right now.</p>
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {astrologers.map((astrologer) => (
                <Card key={astrologer.id} className="overflow-hidden">
                  {/* Same card structure as above */}
                  <CardContent className="p-0">
                    <div className="p-4 border-b">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <img
                            src={astrologer.image || "https://via.placeholder.com/80x80"}
                            alt={astrologer.name}
                            className="w-20 h-20 rounded-full"
                          />
                          <div
                            className={`absolute -bottom-1 right-0 ${
                              astrologer.status === "Online" ? "bg-green-500" : "bg-orange-500"
                            } text-white text-xs px-2 py-0.5 rounded-full`}
                          >
                            {astrologer.status}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{astrologer.name}</h3>
                          <div className="flex flex-wrap gap-1 my-1">
                            {astrologer.specialties.map((specialty, index) => (
                              <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-0.5 rounded">
                                {specialty}
                              </span>
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
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-sm font-medium text-green-600">{astrologer.price}</p>
                            <p className="text-xs text-gray-500">Wait Time: {astrologer.waitTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className={`w-full rounded-none h-12 ${
                        astrologer.status === "Online"
                          ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                      } flex items-center justify-center gap-2`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{astrologer.status === "Online" ? "Chat Now" : "Notify When Available"}</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Why Choose Astromasterji for Chat Consultation?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-3">
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
            <h3 className="font-semibold mb-2">Verified Astrologers</h3>
            <p className="text-sm text-gray-600">
              All our astrologers are thoroughly verified for their expertise and experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-3">
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
            <h3 className="font-semibold mb-2">Private & Confidential</h3>
            <p className="text-sm text-gray-600">
              Your chats are 100% private and confidential. We respect your privacy.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-3">
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
            <h3 className="font-semibold mb-2">24/7 Availability</h3>
            <p className="text-sm text-gray-600">Our astrologers are available round the clock for your convenience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
