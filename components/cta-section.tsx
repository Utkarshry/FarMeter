import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Mail, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              🚀 Ready to Start Your Journey?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Research Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                Starting Today
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of Cambridge students who are building their research experience, strengthening their CVs,
              and preparing for their dream academic futures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Join CuSoR Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Chat
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-400">500+</div>
              <div className="text-blue-100">Active Members</div>
              <div className="text-sm text-blue-200">Growing every month</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-400">200+</div>
              <div className="text-blue-100">Research Projects</div>
              <div className="text-sm text-blue-200">Across all disciplines</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-400">150+</div>
              <div className="text-blue-100">Publications</div>
              <div className="text-sm text-blue-200">Student co-authored</div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-blue-200 text-sm">
              Join the community that's transforming undergraduate research at Cambridge
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
