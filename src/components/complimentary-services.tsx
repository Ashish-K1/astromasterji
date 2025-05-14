import { Card, CardContent } from "./ui/card"
import { Sun, Calendar, Heart, Flame } from "lucide-react"
import { Link } from "react-router-dom"

export default function ComplimentaryServices() {
  const services = [
    {
      icon: <Sun className="h-10 w-10 text-yellow-500" />,
      title: "Today's Horoscope",
      description:
        "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!",
      href: "/horoscope",
    },
    {
      icon: <Heart className="h-10 w-10 text-yellow-500" />,
      title: "Compatibility",
      description:
        "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.",
      href: "/compatibility",
    },
    {
      icon: <Flame className="h-10 w-10 text-yellow-500" />,
      title: "Festival 2025",
      description:
        "Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivals – a realm of celebration.",
      href: "/festivals",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">COMPLIMENTARY ASTROLOGY SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.href} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-yellow-100 p-4 rounded-full mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
