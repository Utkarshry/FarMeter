"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)

      const sections = ["hero", "about", "approach", "objectives", "activities", "faq"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          return scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "approach", label: "Our Approach" },
    { id: "objectives", label: "Objectives" },
    { id: "activities", label: "Activities" },
    { id: "faq", label: "FAQ" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Ulta1VWGP855wMIiotf49EDOxLf0vh.png"
                alt="CuSoR Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className={`text-xl font-bold transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
                  CuSoR
                </h1>
                <p className={`text-xs -mt-1 transition-colors ${scrolled ? "text-gray-500" : "text-white/70"}`}>
                  Curie Society for Research
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? scrolled
                        ? "text-purple-600 bg-purple-50"
                        : "text-cyan-300 bg-white/10"
                      : scrolled
                        ? "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className={`transition-all ${
                scrolled
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              } text-white`}
            >
              Join CuSoR
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-cyan-300"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.id
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
                Join CuSoR
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
