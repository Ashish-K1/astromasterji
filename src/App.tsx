import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ChatWithAstrologer from "./pages/ChatWithAstrologer"
import BookAPooja from "./pages/BookAPooja"
import AboutUs from "./pages/AboutUs"
import Horoscope from "./pages/Horoscope"
import KundaliMatching from "./pages/KundaliMatching"
// import Dashboard from "./pages/Dashboard"
// import AdminDashboard from "./pages/AdminDashboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat-with-astrologer" element={<ChatWithAstrologer />} />
        <Route path="talk-to-astrologer" element={<ChatWithAstrologer />} />
        <Route path="book-a-pooja" element={<BookAPooja />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="horoscope" element={<Horoscope />} />
        <Route path="kundali-matching" element={<KundaliMatching />} />
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminDashboard />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
