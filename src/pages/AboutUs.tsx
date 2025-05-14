import { Card, CardContent } from "../components/ui/card"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg mb-6">
            Welcome to Astro Masterji – Your Trusted Guide to the Stars. At Astro Masterji, we believe the universe
            holds powerful insights into your life's path. Our mission is to help you unlock those insights through the
            ancient sciences of Astrology, Horoscope analysis, and Vastu Shastra. Whether you're seeking clarity,
            direction, or balance, our expert consultations are designed to guide you toward informed decisions and
            inner harmony.
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="mb-6">
              Astro Masterji was founded by experienced practitioners deeply rooted in traditional Vedic knowledge,
              combined with a modern, personalized approach. With years of expertise in astrological chart reading,
              planetary analysis, and Vastu consultation, we have helped countless individuals align their energies with
              their goals — be it in relationships, career, health, or spiritual growth.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <span className="font-semibold">Astrology Consultations:</span> Detailed birth chart analysis, planetary
                transits, and personalized remedies tailored to your unique astrological profile.
              </li>
              <li>
                <span className="font-semibold">Horoscope Services:</span> Daily, weekly, and monthly horoscope readings
                along with in-depth forecasts for major life events.
              </li>
              <li>
                <span className="font-semibold">Vastu Consultation:</span> Expert guidance on residential and commercial
                spaces to harmonize physical environments with cosmic energies.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Astro Masterji?</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <span className="font-semibold">Accurate & Ethical Guidance:</span> We prioritize sincerity and clarity
                over superstition or fear-based advice.
              </li>
              <li>
                <span className="font-semibold">Customized Solutions:</span> Every consultation is tailored to your
                individual needs and concerns.
              </li>
              <li>
                <span className="font-semibold">Confidential & Professional:</span> Your privacy is our priority, and
                every interaction is handled with the utmost respect and confidentiality.
              </li>
              <li>
                <span className="font-semibold">Accessible Expertise:</span> Whether you're a believer or simply
                curious, our services are designed to be welcoming, insightful, and actionable.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center bg-yellow-50 p-8 rounded-lg">
          <p className="text-xl italic mb-4">
            Let the stars illuminate your path. Explore your destiny with Astro Masterji – where tradition meets trust.
          </p>
        </div>
      </div>
    </div>
  )
}
