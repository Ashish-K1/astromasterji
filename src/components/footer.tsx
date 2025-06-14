import WhatsAppButton from "./WhatsAppButton"
import { Link } from "react-router-dom"
import { useAppSelector } from "../store/hooks"
import { Phone } from "lucide-react"

export default function Footer() {
  const { contacts, loading } = useAppSelector((state) => {
    return state.contact
})

  // Find the primary phone contact
  const primaryPhoneContact = contacts.find((contact) => contact.isPrimaryPhone)
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Astromasterji</h3>
            <p className="text-gray-300 text-sm">
              Astromasterji is India's leading platform for astrology consultations, providing personalized solutions from
              verified astrologers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li> */}
              {/* <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white">
                  Refund Policy
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/chat-with-astrologer" className="text-gray-300 hover:text-white">
                  Chat with Astrologer
                </Link>
              </li>
              <li>
                <Link to="/talk-to-astrologer" className="text-gray-300 hover:text-white">
                  Talk to Astrologer
                </Link>
              </li>
              <li>
                <Link to="/book-a-pooja" className="text-gray-300 hover:text-white">
                Vastu Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Email: info@astromasterji.com</li>
              {primaryPhoneContact ? (
                <li className="text-gray-300 flex items-center">
                  {` Phone: +91 ${primaryPhoneContact.phone}`}
                </li>
              ) : (
                <li className="text-gray-300">Phone: +91 9711813396</li>
              )}
              <li className="flex space-x-4 mt-4">
                <Link to="https://www.facebook.com/astromasterji/?locale=ca_ES" className="text-gray-300 hover:text-white" target="_blank">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link to="https://www.instagram.com/astro_master_ji/" className="text-gray-300 hover:text-white" target="_blank">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* <Link to="#" className="text-gray-300 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Astromasterji. All rights reserved.</p>
        </div>
      </div>
      <WhatsAppButton/>
    </footer>
  )
}
