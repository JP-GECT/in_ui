export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-400 text-blue-600 font-bold text-xl px-3 py-1 rounded">
                ABC
              </div>
              <span className="text-white font-bold">LIFE INSURANCE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Securing your family's future with comprehensive life insurance solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Investor Relations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Term Insurance</li>
              <li className="hover:text-white cursor-pointer transition">ULIP Plans</li>
              <li className="hover:text-white cursor-pointer transition">Savings Plans</li>
              <li className="hover:text-white cursor-pointer transition">Retirement Plans</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Claims</li>
              <li className="hover:text-white cursor-pointer transition">FAQs</li>
              <li className="hover:text-white cursor-pointer transition">Branch Locator</li>
              <li className="hover:text-white cursor-pointer transition">Pay Premium</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 ABC Life Insurance Company. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
