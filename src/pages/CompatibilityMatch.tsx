import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Check, Users, MessageCircle, Lightbulb, Scale } from "lucide-react"

export default function CompatibilityMatch() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Astrology Compatibility Match</h1>
          <p className="text-xl text-gray-700">Discover Your Perfect Partner</p>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Are you meant to be together?</h2>
          <p className="mb-6">
            Unlock the secrets of your relationship with our Astrology Compatibility Match service. Using the timeless
            wisdom of Vedic astrology and modern analytical techniques, our expert astrologers provide deep insights
            into your emotional, mental, and spiritual compatibility — helping you build stronger, happier
            relationships.
          </p>
        </div>

        <Card className="mb-12 border-yellow-400 border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">What is an Astrology Compatibility Match?</h2>
            <p className="mb-6">
              An Astrology Compatibility Match is a powerful tool that compares the birth charts of two individuals to
              assess their relationship potential. By analyzing planetary positions, zodiac signs, and astrological
              houses, we uncover how well two people align in love, communication, values, and life goals.
            </p>
            <p>
              Whether you're exploring a new connection, preparing for marriage, or working through relationship
              challenges, this personalized compatibility reading can help you understand your partner on a deeper
              level.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Compatibility Match Service?</h2>
            <p className="mb-6">
              We don't offer generic reports — every analysis is custom-tailored by experienced astrologers to reflect
              your unique relationship dynamics. Our trusted service is designed to empower your journey toward love,
              understanding, and long-term harmony.
            </p>
            <h3 className="text-xl font-bold mb-4">What You Get:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Customized Compatibility Report based on both birth charts</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Detailed Analysis of love, trust, communication, emotional bonding & challenges</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Expert Astrological Guidance from certified professionals</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>100% Confidential & Secure handling of your data</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Online Consultations for global convenience</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-12 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">How Our Compatibility Matching Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">1</span>
                  </div>
                  <h3 className="font-bold text-lg">Submit Birth Details</h3>
                </div>
                <p>Provide the birth date, time, and place for both individuals</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">2</span>
                  </div>
                  <h3 className="font-bold text-lg">Chart Analysis</h3>
                </div>
                <p>We perform a thorough comparison of planetary positions and astrological factors</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg">Receive Your Report</h3>
                </div>
                <p>Get a comprehensive PDF report with compatibility scores and insights</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg">Optional Consultation</h3>
                </div>
                <p>Discuss your results and get relationship advice from our astrologers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Compatibility Matching</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Understand Each Other Better</h3>
                </div>
                <p>Decode your partner's personality traits and relationship needs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Scale className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Identify Strengths & Challenges</h3>
                </div>
                <p>Discover areas of alignment and potential friction</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Enhance Communication</h3>
                </div>
                <p>Improve emotional connection and reduce misunderstandings</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Make Informed Relationship Decisions</h3>
                </div>
                <p>Move forward with clarity and confidence</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center bg-yellow-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Book Your Compatibility Match Today</h2>
          <p className="text-lg mb-2">Ready to explore your cosmic connection?</p>
          <p className="italic mb-6">Let astrology guide your heart to lasting love.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
              Book Now
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
          <p className="text-sm font-medium">Online Appointments Available Worldwide</p>
        </div>

        <div className="text-sm text-gray-500 p-4 border-t border-gray-200">
          <p className="font-medium mb-2">Popular Keywords</p>
          <p>
            Astrology compatibility, partner matching astrology, love compatibility report, relationship astrology,
            Vedic compatibility match, Kundli match, horoscope matching, zodiac compatibility.
          </p>
        </div>
      </div>
    </div>
  )
}
