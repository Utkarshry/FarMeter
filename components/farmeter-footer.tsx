'use client'

import Link from 'next/link'

export function FarmeterFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">FarMeter</h3>
            <p className="text-sm text-gray-400">
              Transforming agricultural waste into sustainable wealth through the Hydro-Bio-Loop.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#technology" className="hover:text-white transition">Technology</Link></li>
              <li><Link href="#app" className="hover:text-white transition">The App</Link></li>
              <li><Link href="#marketplace" className="hover:text-white transition">Marketplace</Link></li>
              <li><Link href="#research" className="hover:text-white transition">Research</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Vision</h4>
            <p className="text-sm mb-2">
              <strong>Researcher:</strong> Utkarsh Katiyar
            </p>
            <p className="text-sm">
              <strong>MEXT 2027 Vision:</strong> Global impact through sustainable innovation
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} FarMeter. All rights reserved. | 
              <Link href="https://www.farmeter.me/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white ml-2">
                Privacy Policy
              </Link>
              {' '} | {' '}
              <Link href="https://www.farmeter.me/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
