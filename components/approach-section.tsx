"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Lightbulb, Users, PenTool } from "lucide-react"

export function ApproachSection() {
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

  const approaches = [
    {
      icon: BookOpen,
      title: "Horizontal Approach (Research Unstop)",
      description: "Provide foundational knowledge to all members regardless of their specific research interests.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Focus on Primary Research Interests",
      description: "Help members identify and develop their main areas of research.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Understanding of Subject",
      description: "Ensure members have a solid grasp of their chosen field.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Identification of Relevant Research Topics",
      description: "Guide members in selecting appropriate and current research topics.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: PenTool,
      title: "Mentored Research Paper Writing",
      description: "Provide one-on-one support for the paper writing process.",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section id="approach" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Research
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              {" "}
              Approach
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive methodology designed to guide students through every step of their research journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cusor_page-0023.jpg-2ofw1xGzWoisQW8nUb1eMKeaplXUbt.jpeg"
              alt="Our Research Approach"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div className="space-y-6">
            {approaches.map((approach, index) => (
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
                      className={`w-12 h-12 bg-gradient-to-r ${approach.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <approach.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{approach.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Field Definition */}
        <div
          className={`bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-600 rounded-2xl p-8 md:p-12 text-white transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What is a Research Field?</h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              A research field refers to a specific area of study within the broader spectrum of academic or scientific
              inquiry. It is a focused domain where researchers explore, investigate, and seek to answer questions
              related to a particular topic, discipline, or problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialization",
                desc: "Research fields are highly specialized, often focusing on a niche area of knowledge, such as genetics in biology, quantum mechanics in physics, or social psychology in the behavioral sciences.",
              },
              {
                title: "Knowledge Building",
                desc: "The primary goal is to expand the body of knowledge within that field, by developing new theories, conducting experiments, or analyzing data.",
              },
              {
                title: "Innovation & Application",
                desc: "Research within a field can lead to technological advancements, new methodologies, and practical applications that solve real-world problems.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-cyan-300">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
