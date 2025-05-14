import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <img src="https://img.freepik.com/premium-vector/wireless-control-console-flat-line-color-isolated-vector-object-hand-holding-device-editable-clip-art-image-white-background-simple-outline-cartoon-spot-illustration-web-design_151150-16907.jpg" alt="404 Error" className="max-w-md w-full mb-8" />
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">We can't find the page you are looking for.</p>
      <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  )
}
