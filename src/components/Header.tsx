import { Search, MapPin, Phone, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-yellow-400 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold text-2xl px-3 py-1 rounded">
              ABC
            </div>
            <span className="text-blue-600 font-bold text-xl">LIFE INSURANCE</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
              <span>Term Insurance</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
              <span>Savings Plan</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
              <span>ULIP Plans</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
              <span>Life Insurance Plans</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 transition">
            PAY PREMIUM
          </button>

          <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
            <MapPin className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
            <Phone className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
            <User className="w-5 h-5" />
          </button>
          <button className="lg:hidden bg-white rounded p-2 hover:bg-gray-100 transition">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
