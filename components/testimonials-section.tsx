import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "PhD Student at MIT",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "CuSoR changed my academic trajectory completely. I went from having zero research experience to co-authoring two papers and getting accepted into my dream PhD program. The community support and opportunities are incredible.",
    rating: 5,
    project: "AI Ethics in Healthcare",
  },
  {
    name: "Marcus Johnson",
    role: "Research Assistant at Oxford",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The mentorship I received through CuSoR was invaluable. Not only did I gain technical skills, but I also learned how to think like a researcher. The connections I made here opened doors I never knew existed.",
    rating: 5,
    project: "Climate Change Modeling",
  },
  {
    name: "Elena Rodriguez",
    role: "PhD Candidate at Cambridge",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "What sets CuSoR apart is the genuine care for student success. The collaborative environment pushed me to excel, and the research experience I gained was crucial for my PhD applications.",
    rating: 5,
    project: "Quantum Computing Algorithms",
  },
  {
    name: "David Kim",
    role: "Research Scientist at DeepMind",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "CuSoR provided me with my first real research experience. The skills I developed and the network I built were instrumental in landing my dream job. I can't recommend it enough.",
    rating: 5,
    project: "Machine Learning Fundamentals",
  },
  {
    name: "Amara Okafor",
    role: "PhD Student at Stanford",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The diversity of research opportunities at CuSoR is amazing. I was able to explore different fields before finding my passion. The supportive community made all the difference.",
    rating: 5,
    project: "CRISPR Gene Editing",
  },
  {
    name: "James Wilson",
    role: "Research Fellow at Cambridge",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As both a former member and now a mentor, I've seen firsthand how CuSoR transforms students. The quality of research and the dedication of the community is truly exceptional.",
    rating: 5,
    project: "Data Visualization",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Members
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              {" "}
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who have transformed their academic careers through CuSoR
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 font-medium">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Members</div>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">PhD Acceptance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
