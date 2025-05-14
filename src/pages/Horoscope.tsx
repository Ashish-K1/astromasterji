import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Sun, Calendar, Clock } from "lucide-react"

export default function Horoscope() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Horoscope</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Horoscope with Astro Masterji</h2>
          <p className="text-xl text-center mb-8 text-gray-700">
            Daily, Weekly & Monthly Insights – Aligned with the Universe
          </p>
          <p className="mb-6">
            At AstroMasterji.com, we bring you personalized horoscope readings that help you navigate life with cosmic
            clarity. Whether you're looking for a daily dose of direction, a weekly energy forecast, or a monthly map of
            major shifts, we've got the stars covered — and they've got your back.
          </p>
        </div>

        <Tabs defaultValue="daily" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="daily">Daily Horoscope</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Horoscope</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Horoscope</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold">Daily Horoscope</h3>
                </div>
                <p className="text-lg font-medium mb-4">Start your day with purpose, guided by the planets.</p>
                <p className="mb-6">
                  Each morning, our expert astrologers analyze the planetary positions and transits to bring you
                  accurate, easy-to-understand insights for your zodiac sign. Whether it's the best time to make a
                  decision, reconnect with a loved one, or focus inward — your daily horoscope helps you align with the
                  energy of the moment.
                </p>

                <h4 className="font-bold mb-2">What you'll get:</h4>
                <ul className="space-y-2 list-disc pl-6 mb-6">
                  <li>Key themes for your day (career, love, health, money)</li>
                  <li>Quick tips for maximizing opportunities</li>
                  <li>Warnings about challenges or emotional triggers</li>
                  <li>Uplifting guidance to stay balanced and motivated</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-3 rounded-md">Updated every day by our expert astrologers!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold">Weekly Horoscope</h3>
                </div>
                <p className="text-lg font-medium mb-4">Your 7-day astrological game plan.</p>
                <p className="mb-6">
                  Each week brings new planetary energies — and knowing what to expect can help you prepare, act, and
                  reflect wisely. Our weekly horoscopes give you a broader perspective to make informed decisions about
                  work, relationships, finances, and personal growth.
                </p>

                <h4 className="font-bold mb-2">What you'll get:</h4>
                <ul className="space-y-2 list-disc pl-6 mb-6">
                  <li>A full week's astrological forecast tailored to your sign</li>
                  <li>Planetary influences that may affect moods or outcomes</li>
                  <li>Ideal times to start projects, rest, or resolve issues</li>
                  <li>Spiritual reflections and mindset tips</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-3 rounded-md">Updated every Sunday for your week ahead.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold">Monthly Horoscope</h3>
                </div>
                <p className="text-lg font-medium mb-4">Zoom out and plan ahead with cosmic foresight.</p>
                <p className="mb-6">
                  Our monthly horoscopes offer deep insights into the bigger shifts happening in your life. Perfect for
                  goal setting, planning big moves, or understanding the deeper patterns shaping your journey.
                </p>

                <h4 className="font-bold mb-2">What you'll get:</h4>
                <ul className="space-y-2 list-disc pl-6 mb-6">
                  <li>A comprehensive look at love, career, money, and wellbeing</li>
                  <li>Insights into new moon/full moon effects</li>
                  <li>Planetary retrogrades, eclipses, and key astrological events</li>
                  <li>Spiritual themes and life lessons for the month</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-3 rounded-md">
                  Published at the start of each month to help you stay a step ahead.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Astro Masterji Horoscopes?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Vedic Astrology Precision</h3>
                <p>Rooted in timeless Vedic principles, tuned for modern life</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Expert Curated</h3>
                <p>Written and reviewed by seasoned astrologers, not AI-generated fluff</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Positive & Empowering</h3>
                <p>No fear-based predictions — just practical, uplifting guidance</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Tailored by Sign</h3>
                <p>Specific insights for all 12 zodiac signs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-yellow-50 p-8 rounded-lg">
          <p className="text-xl font-bold mb-4">Ready to align your life with the stars?</p>
          <p className="text-lg">
            Bookmark AstroMasterji.com for daily, weekly, and monthly horoscopes that speak to your soul and support
            your success.
          </p>
        </div>
      </div>
    </div>
  )
}
