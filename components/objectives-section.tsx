"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function ObjectivesSection() {
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

  const objectives = [
    {
      number: "1",
      title: "Create a platform for students to share knowledge, skills and learn from each other.",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "2",
      title: "Teach research hygiene and best practices to undergraduates.",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "3",
      title: "Conduct conferences, workshops and sessions for early entrepreneurs and researchers.",
      color: "from-teal-500 to-teal-600",
    },
    {
      number: "4",
      title: "Address gaps in current commerce societies and provide opportunities for science students.",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  const visionPoints = [
    {
      title: "Fostering Curiosity",
      description:
        "Encourage a mindset of inquiry and intellectual curiosity among members. Promote the exploration of diverse scientific fields and innovative ideas.",
      color: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800",
    },
    {
      title: "Building Research Skills",
      description:
        "Provide training and resources to develop strong research methodologies. Emphasize the importance of accuracy, rigor, and critical thinking in research.",
      color: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800",
    },
    {
      title: "Collaborative Learning",
      description: "Create a supportive community where members can share knowledge and learn from each other.",
      color: "bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800",
    },
    {
      title: "Interdisciplinary Collaboration",
      description: "Facilitate interdisciplinary collaborations to tackle complex research questions.",
      color: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800",
    },
  ]

  return (
    <section id="objectives" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aims and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              {" "}
              Objectives
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            
          </div>

          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${objective.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-bold text-lg">{objective.number}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{objective.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Points */}
        <div
          className={`bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cusor_page-0016.jpg-oddByStlz5OCovlhnr96LkbYEb9slY.jpeg"
              alt="CuSoR Vision"
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {visionPoints.map((point, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${point.color}`}
                  >
                    {point.title}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
