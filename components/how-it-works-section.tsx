import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Search, Users, Trophy } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Join the Community",
      description: "Sign up and create your profile highlighting your interests and current experience level.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Search,
      title: "Discover Opportunities",
      description: "Browse research projects and skill exchanges that match your interests and goals.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Connect & Collaborate",
      description: "Join projects, attend sessions, and build meaningful relationships with fellow researchers.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Trophy,
      title: "Achieve Your Goals",
      description: "Gain experience, build your CV, and prepare for your next academic milestone.",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CuSoR Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from research novice to confident academic in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Research Journey?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their academic prospects through CuSoR. Your research
              dreams are closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started Today
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
