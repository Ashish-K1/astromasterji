import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Image from "next/image"
import { Calendar, Clock, MessageCircle, Phone, Star } from "lucide-react"

export default function Dashboard() {
  const upcomingConsultations = [
    {
      id: 1,
      type: "Chat",
      astrologer: "Acharya Vikram",
      image: "/placeholder.svg?height=50&width=50",
      date: "May 12, 2025",
      time: "10:30 AM",
      duration: "30 min",
      status: "Confirmed",
    },
    {
      id: 2,
      type: "Call",
      astrologer: "Sunita Sharma",
      image: "/placeholder.svg?height=50&width=50",
      date: "May 15, 2025",
      time: "4:00 PM",
      duration: "45 min",
      status: "Pending",
    },
  ]

  const upcomingPoojas = [
    {
      id: 1,
      name: "Ganesh Puja",
      pandit: "Pandit Sharma",
      image: "/placeholder.svg?height=50&width=50",
      date: "May 20, 2025",
      time: "9:00 AM",
      status: "Confirmed",
    },
  ]

  const pastConsultations = [
    {
      id: 1,
      type: "Chat",
      astrologer: "Dr. Rajesh Joshi",
      image: "/placeholder.svg?height=50&width=50",
      date: "May 1, 2025",
      time: "11:00 AM",
      duration: "30 min",
    },
    {
      id: 2,
      type: "Call",
      astrologer: "Meena Gupta",
      image: "/placeholder.svg?height=50&width=50",
      date: "April 25, 2025",
      time: "3:30 PM",
      duration: "45 min",
    },
  ]

  const savedAstrologers = [
    {
      id: 1,
      name: "Acharya Vikram",
      image: "/placeholder.svg?height=60&width=60",
      specialties: ["Vedic", "Numerology"],
      rating: 4.9,
      status: "Online",
    },
    {
      id: 2,
      name: "Sunita Sharma",
      image: "/placeholder.svg?height=60&width=60",
      specialties: ["Tarot", "Palmistry"],
      rating: 4.8,
      status: "Offline",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹500</p>
            <Button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black">Add Money</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <Button variant="outline" className="mt-4 w-full">
              View History
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <Button variant="outline" className="mt-4 w-full">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Consultations</h2>
        {upcomingConsultations.length > 0 ? (
          <div className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <Card key={consultation.id}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <img
                        src={consultation.image || "/placeholder.svg"}
                        alt={consultation.astrologer}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                          consultation.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      >
                        {consultation.type === "Chat" ? (
                          <MessageCircle className="h-3 w-3 text-white" />
                        ) : (
                          <Phone className="h-3 w-3 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{consultation.astrologer}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{consultation.date}</span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>{consultation.time}</span>
                        <span className="ml-3">({consultation.duration})</span>
                      </div>
                      <div className="mt-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            consultation.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {consultation.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {consultation.status === "Confirmed" && (
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Join Now</Button>
                      )}
                      <Button variant="outline">Reschedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500 mb-4">You have no upcoming consultations.</p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Book a Consultation</Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Poojas</h2>
        {upcomingPoojas.length > 0 ? (
          <div className="space-y-4">
            {upcomingPoojas.map((pooja) => (
              <Card key={pooja.id}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <img
                        src={pooja.image || "/placeholder.svg"}
                        alt={pooja.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{pooja.name}</h3>
                      <p className="text-sm text-gray-600">Pandit: {pooja.pandit}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{pooja.date}</span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>{pooja.time}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-800">{pooja.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Join Stream</Button>
                      <Button variant="outline">Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500 mb-4">You have no upcoming poojas.</p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Book a Pooja</Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Saved Astrologers</h2>
          {savedAstrologers.length > 0 ? (
            <div className="space-y-4">
              {savedAstrologers.map((astrologer) => (
                <Card key={astrologer.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <img
                          src={astrologer.image || "/placeholder.svg"}
                          alt={astrologer.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${
                            astrologer.status === "Online" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{astrologer.name}</h3>
                        <div className="flex flex-wrap gap-1 my-1">
                          {astrologer.specialties.map((specialty, index) => (
                            <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-0.5 rounded">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{astrologer.rating}</span>
                        </div>
                      </div>
                      <Button
                        className={
                          astrologer.status === "Online"
                            ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                            : "bg-gray-200 text-gray-700"
                        }
                        disabled={astrologer.status !== "Online"}
                      >
                        Consult
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">You haven't saved any astrologers yet.</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Past Consultations</h2>
          {pastConsultations.length > 0 ? (
            <div className="space-y-4">
              {pastConsultations.map((consultation) => (
                <Card key={consultation.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <img
                          src={consultation.image || "/placeholder.svg"}
                          alt={consultation.astrologer}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                          {consultation.type === "Chat" ? (
                            <MessageCircle className="h-3 w-3 text-gray-600" />
                          ) : (
                            <Phone className="h-3 w-3 text-gray-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{consultation.astrologer}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{consultation.date}</span>
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          <span>{consultation.time}</span>
                          <span className="ml-3">({consultation.duration})</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Rate
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">You have no past consultations.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Daily Horoscope</h2>
        <Tabs defaultValue="aries">
          <TabsList className="mb-4">
            <TabsTrigger value="aries">Aries</TabsTrigger>
            <TabsTrigger value="taurus">Taurus</TabsTrigger>
            <TabsTrigger value="gemini">Gemini</TabsTrigger>
            <TabsTrigger value="cancer">Cancer</TabsTrigger>
            {/* More zodiac signs */}
          </TabsList>

          <TabsContent value="aries" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Aries"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Aries (Mar 21 - Apr 19)</h3>
                    <p className="text-gray-600 mb-4">
                      Today is a good day for new beginnings. Your energy is high, and you'll find it easy to take
                      initiative. Focus on personal projects and don't be afraid to take calculated risks.
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-yellow-100 p-2 rounded">
                        <p className="text-sm font-medium">Lucky Color</p>
                        <p className="text-yellow-800">Red</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded">
                        <p className="text-sm font-medium">Lucky Number</p>
                        <p className="text-yellow-800">9</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded">
                        <p className="text-sm font-medium">Compatibility</p>
                        <p className="text-yellow-800">Leo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Similar TabsContent for other zodiac signs */}
        </Tabs>
      </div>
    </div>
  )
}
