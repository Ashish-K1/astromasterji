import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Check, Star, Heart, Shield, Clock } from "lucide-react"

export default function KundaliMatching() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kundli Matching</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Let the Stars Choose the Right Partner for Your Forever
          </h2>
          <p className="mb-6">
            At Astro Masterji, we believe that love is written in the stars — and so is compatibility. Our Kundli
            Matching service blends ancient Vedic wisdom with modern insights to help you begin your marriage journey
            with clarity, confidence, and cosmic alignment.
          </p>
          <p className="mb-6">
            Marriage isn't just a ceremony — it's a lifetime partnership. Our expert astrologers decode the blueprint of
            your stars to ensure your bond is not only romantic but resilient, rooted in mutual understanding and
            harmony.
          </p>
        </div>

        <Card className="mb-12 border-yellow-400 border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Star className="text-yellow-500 mr-2 h-6 w-6" />
              Why Kundli Matching Matters
            </h2>
            <p className="mb-6">
              Also known as Horoscope Matching, this powerful Vedic tradition helps answer key questions about marital
              compatibility, emotional balance, health, finances, and future family life. It's not superstition — it's
              strategic insight based on the planetary positions at your time of birth.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What We Do – The Astro Masterji Way</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">In-Depth Horoscope Creation</h3>
                </div>
                <p>
                  We chart out precise and personalized birth charts for both individuals, laying the groundwork for
                  detailed compatibility insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Cosmic Compatibility Check</h3>
                </div>
                <p>
                  From Guna Milan (the 8-point compatibility system) to Manglik Dosha, we evaluate every key element
                  that could impact marital bliss — and how to balance them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Guidance & Remedies</h3>
                </div>
                <p>
                  No match is perfect — but every match has potential. We offer practical, personalized suggestions to
                  strengthen alignment and smooth over challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Post-Marriage Support</h3>
                </div>
                <p>
                  Our relationship with you doesn't end at the altar. We continue to guide you as your life together
                  unfolds, offering insights for a thriving married life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Benefits You'll Love</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Deep Compatibility Insights</span> – Know each other beyond the surface.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Conflict Prevention</span> – Spot and address issues before they become
                  problems.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Stronger Emotional Bond</span> – Build a marriage on trust, understanding,
                  and celestial support.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Lifelong Guidance</span> – Stay aligned with your partner as your stars
                  shift over time.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-12 bg-yellow-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Astro Masterji?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Experienced Vedic Astrologers</span> – Trusted advisors with years of
                  chart-reading expertise.
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Tailored to You</span> – Every couple is unique — and so is our approach.
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Private & Professional</span> – Your journey is sacred; your data is
                  secure.
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Results That Resonate</span> – Practical, relevant, and spiritually
                  grounded guidance.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-yellow-100 p-8 rounded-lg mb-8">
          <p className="text-xl font-bold mb-2">Start your forever on the right star.</p>
          <p className="mb-6">
            Let Astro Masterji's Kundli Matching service light your way to a meaningful, balanced, and love-filled
            marriage.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
            Book your consultation today
          </Button>
          <p className="mt-4 text-sm">— and take the first cosmic step toward your perfect match.</p>
        </div>
      </div>
    </div>
  )
}
