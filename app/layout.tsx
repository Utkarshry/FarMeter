import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CuSoR - Curie Society for Research | Deshbandhu College",
  description:
    "The Curie Society for Research at Deshbandhu College - Igniting Curiosity, Inspiring Innovation. Honoring Marie Curie's legacy through scientific research and student collaboration.",
  keywords:
    "CuSoR, Curie Society, Research, Deshbandhu College, Marie Curie, Scientific Research, Student Organization, STEM",
  authors: [{ name: "CuSoR Team" }],
  openGraph: {
    title: "CuSoR - Curie Society for Research | Deshbandhu College",
    description: "Igniting Curiosity, Inspiring Innovation. Join our research community at Deshbandhu College.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CuSoR - Curie Society for Research",
    description: "Igniting Curiosity, Inspiring Innovation. Honoring Marie Curie's legacy through research.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <footer className="bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Ulta1VWGP855wMIiotf49EDOxLf0vh.png"
                    alt="CuSoR Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="text-2xl font-bold">CuSoR</h3>
                </div>
                <p className="text-white/80">
                  Curie Society for Research at Deshbandhu College - Igniting Curiosity, Inspiring Innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <a href="#about" className="hover:text-cyan-300 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#approach" className="hover:text-cyan-300 transition-colors">
                      Our Approach
                    </a>
                  </li>
                  <li>
                    <a href="#objectives" className="hover:text-cyan-300 transition-colors">
                      Objectives
                    </a>
                  </li>
                  <li>
                    <a href="#activities" className="hover:text-cyan-300 transition-colors">
                      Activities
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Research Areas</h4>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      Scientific Research
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      Academic Writing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      Research Methodology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      Innovation Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>Deshbandhu College</li>
                  <li>New Delhi, India</li>
                  <li>cusor@deshbandhucollege.ac.in</li>
                  <li>Follow us on social media</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2024 Curie Society for Research, Deshbandhu College. All rights reserved.</p>
              <p className="mt-2 text-sm">Honoring Marie Curie's Legacy Through Scientific Excellence</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
