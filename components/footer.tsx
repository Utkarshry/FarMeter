'use client'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider Line */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left Side - Branding */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm text-gray-600">
              Curie Society for Research • Igniting Curiosity, Inspiring Innovation
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.cusor.me/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.cusor.me/terms-of-service"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-center text-gray-400">
            © {new Date().getFullYear()} Curie Society for Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
