"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Presentation, Trophy, Code } from "lucide-react"

export function ActivitiesSection() {
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

  const activities = [
    {
      icon: Users,
      title: "Guest Lectures",
      description: "Invite experts to share their experiences and insights.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BookOpen,
      title: "Workshops",
      description: "Offer practical skills training in research methodologies, data analysis, and academic writing.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Presentation,
      title: "Research Seminars",
      description: "Create platforms for members to present their work and receive feedback.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Poster Sessions",
      description: "Organize events for visual presentation of research projects.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Trophy,
      title: "Research Competitions",
      description: "Foster healthy competition and recognize outstanding work.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Code,
      title: "Hackathons",
      description: "Encourage practical application of research skills to solve real-world problems.",
      color: "from-violet-500 to-violet-600",
    },
  ]

  return (
    <section id="activities" className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Future Plans &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              {" "}
              Activities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to enhance research skills and foster scientific innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cusor_page-0024.jpg-hnPbHfdsYg5uEwQPkK7fanakoOUQtM.jpeg"
              alt="Future Plans and Activities"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 group transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join Our Research Community</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Be part of a vibrant community of researchers, innovators, and curious minds working together to advance
              scientific knowledge and honor Marie Curie's legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Become a Member
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
