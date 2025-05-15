import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Check, Home, Building, Factory, Map, PenToolIcon as Tool } from "lucide-react"

export default function VastuConsultation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vastu Consultation Services</h1>
          <p className="text-xl text-gray-700">Balance Energy. Elevate Your Life.</p>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="mb-6">
            Welcome to our Vastu Consultation Services — where ancient wisdom meets modern living. Our expert Vastu
            solutions are designed to harmonize your living and working spaces with the five elements of nature,
            ensuring peace, prosperity, and success in every aspect of your life.
          </p>
        </div>

        <Card className="mb-12 border-yellow-400 border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">What is Vastu Shastra?</h2>
            <p className="mb-6">
              Vastu Shastra is an ancient Indian architectural science that guides the design and layout of spaces to
              promote positive energy flow. By aligning your home or workplace with natural forces, Vastu helps create
              an environment that supports health, wealth, and happiness.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Vastu Consultation?</h2>
            <p className="mb-6">
              We go beyond generic advice — our approach is customized, practical, and deeply rooted in authentic Vastu
              principles. Whether you're building a new property or want to improve the energy in an existing one, we
              offer actionable solutions that bring real results.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Personalized Analysis of Your Home or Office</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Remedies Without Structural Changes</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Based on Traditional Vastu and Modern Needs</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Consultation Available Online and On-Site</div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <div>Confidential & Professional Service</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Vastu Services Include:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Home className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Residential Vastu</h3>
                </div>
                <p>Energize your home for better relationships, health, and prosperity</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Building className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Commercial Vastu</h3>
                </div>
                <p>Improve business performance, employee productivity, and financial stability</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Factory className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Industrial Vastu</h3>
                </div>
                <p>Optimize manufacturing setups for growth and harmony</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Map className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Plot Selection & Layout Planning</h3>
                </div>
                <p>Build your dream space aligned with Vastu from the ground up</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Tool className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Vastu for Renovation</h3>
                </div>
                <p>Enhance existing structures without major modifications</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-12 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">How Our Process Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">1</span>
                  </div>
                  <h3 className="font-bold text-lg">Initial Consultation</h3>
                </div>
                <p>Share your property layout or schedule a visit</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">2</span>
                  </div>
                  <h3 className="font-bold text-lg">Analysis</h3>
                </div>
                <p>We evaluate directions, energy zones, element imbalances, and Vastu doshas</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg">Customized Report</h3>
                </div>
                <p>Receive a detailed report with easy-to-follow remedies and recommendations</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-yellow-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg">Follow-up Support</h3>
                </div>
                <p>We assist with implementation and provide continued guidance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-yellow-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Book Your Vastu Consultation Today</h2>
          <p className="mb-6">
            Ready to bring harmony, positivity, and prosperity into your space? Contact us to schedule your personalized
            Vastu consultation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
              Call Now
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-3 text-lg"
            >
              Email Us
            </Button>
          </div>
          <p className="text-sm font-medium">Online & On-Site Appointments Available</p>
          <p className="mt-6 italic font-medium">Experience the power of space alignment. Let Vastu work for you.</p>
        </div>
      </div>
    </div>
  )
}
