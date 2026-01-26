import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b flex justify-center">
      <div className="max-w-5xl mx-auto px-4 py-3 flex gap-6">
        <Link to="/" className="font-medium text-blue-600">
          Form Survey
        </Link>
        <Link to="/results" className="font-medium text-gray-600 hover:text-blue-600">
          Hasil Survey
        </Link>
      </div>
    </nav>
  )
}
