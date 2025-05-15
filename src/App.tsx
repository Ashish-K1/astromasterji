import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ChatWithAstrologer from "./pages/ChatWithAstrologer"
import BookAPooja from "./pages/BookAPooja"
// import Dashboard from "./pages/Dashboard"
// import AdminDashboard from "./pages/AdminDashboard"
import AboutUs from "./pages/AboutUs"
import Horoscope from "./pages/Horoscope"
import KundaliMatching from "./pages/KundaliMatching"
import VastuConsultation from "./pages/VastuConsultation"
import CompatibilityMatch from "./pages/CompatibilityMatch"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat-with-astrologer" element={<ChatWithAstrologer />} />
        <Route path="talk-to-astrologer" element={<ChatWithAstrologer />} />
        <Route path="book-a-pooja" element={<BookAPooja />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="admin" element={<AdminDashboard />} /> */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="horoscope" element={<Horoscope />} />
        <Route path="kundali-matching" element={<KundaliMatching />} />
        <Route path="vastu-consultation" element={<VastuConsultation />} />
        <Route path="compatibility-match" element={<CompatibilityMatch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
