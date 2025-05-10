import { Card, CardContent } from "./ui/card"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      image: "https://via.placeholder.com/60x60",
      rating: 5,
      text: "I was skeptical at first, but the astrologer's predictions were surprisingly accurate. The guidance I received helped me make an important career decision.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Mumbai",
      image: "https://via.placeholder.com/60x60",
      rating: 5,
      text: "The compatibility analysis was spot on! It helped me understand my relationship better and work on areas that needed improvement.",
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Bangalore",
      image: "https://via.placeholder.com/60x60",
      rating: 4,
      text: "The puja service was conducted with utmost devotion. I could feel positive energy flowing into my home after the ritual was completed.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-10">Trusted by thousands of satisfied customers worldwide</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "https://via.placeholder.com/60x60"}
                    alt={testimonial.name}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
