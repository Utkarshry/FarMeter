"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background matching the logo */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-400"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div
          className="text-center space-y-8 transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Ulta1VWGP855wMIiotf49EDOxLf0vh.png"
              alt="CuSoR Logo"
              className="w-48 h-48 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-8xl md:text-9xl font-bold text-white tracking-wider">CuSoR</h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
            Igniting Curiosity • Inspiring Innovation
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNext}
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
          }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
