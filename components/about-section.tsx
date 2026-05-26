"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
            About the Society
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Honoring Marie Curie's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              {" "}
              Scientific Legacy
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cusor_page-0004.jpg-kDROoXzPqTYRz5veCYxgRaoyrTpXNa.jpeg"
              alt="About CuSoR - Marie Curie's Legacy"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900">About CuSoR</h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                The Curie Society for Research is a student organization at Deshbandhu College dedicated to promoting
                scientific research and honoring the legacy of Marie Curie.
              </p>
              <p>
                The society is named after Marie Curie, the first woman to win a Nobel Prize and one of the most
                renowned women in the history of science.
              </p>
              <p>
                Curie's achievements and legacy have inspired generations of scientists, especially women, to pursue
                careers in STEM fields. The Curie Society for Research at Deshbandhu College aims to honor her memory
                and continue her tradition of scientific excellence and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Marie Curie Timeline */}
        <div
          className={`bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Visions of Our Society</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Research Excellence",
                desc: "Following Marie Curie's pioneering research methods",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Nobel Recognition",
                desc: "Inspired by her Nobel Prize achievements",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Scientific Innovation",
                desc: "Continuing her tradition of groundbreaking discoveries",
                color: "from-teal-500 to-teal-600",
              },
              {
                title: "Global Impact",
                desc: "Creating lasting contributions to science",
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
