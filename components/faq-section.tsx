"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is CuSoR and who can join?",
    answer:
      "CuSoR (Curie Society for Research) is a student organization at Deshbandhu College dedicated to promoting scientific research and honoring Marie Curie's legacy. All students interested in research and scientific innovation are welcome to join.",
  },
  {
    question: "Do I need prior research experience to join?",
    answer:
      "No prior research experience is required! CuSoR follows a horizontal approach, providing foundational knowledge to all members regardless of their specific research background. We're here to help you start your research journey.",
  },
  {
    question: "What kind of support does CuSoR provide for research?",
    answer:
      "We provide comprehensive support including mentored research paper writing, help in identifying relevant research topics, understanding of subjects, and one-on-one guidance throughout the research process.",
  },
  {
    question: "What activities and events does CuSoR organize?",
    answer:
      "We organize guest lectures, workshops on research methodologies, research seminars, poster sessions, research competitions, and hackathons. These activities are designed to enhance your research skills and provide practical experience.",
  },
  {
    question: "How does CuSoR honor Marie Curie's legacy?",
    answer:
      "We honor Marie Curie by promoting scientific excellence, encouraging women in STEM, fostering curiosity and innovation, and maintaining the highest standards of research integrity that she exemplified throughout her career.",
  },
  {
    question: "Can students from all academic backgrounds participate?",
    answer:
      "Yes! While we focus on scientific research, we welcome students from all academic backgrounds. Our interdisciplinary approach encourages collaboration across different fields of study.",
  },
  {
    question: "How can I get involved with CuSoR?",
    answer:
      "You can get involved by attending our events, joining our workshops, participating in research projects, or contacting us directly. We're always looking for enthusiastic students who want to contribute to our research community.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
            Have Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about joining and participating in CuSoR.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border border-gray-200 hover:shadow-md transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact CuSoR
          </button>
        </div>
      </div>
    </section>
  )
}
