"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, MapPin, Filter, Star, ArrowRight } from "lucide-react"

const opportunities = [
  {
    id: 1,
    title: "AI Ethics in Healthcare",
    type: "Research Project",
    field: "AI/ML",
    description:
      "Investigating ethical implications of AI decision-making in medical diagnosis and treatment recommendations.",
    participants: 4,
    duration: "3 months",
    location: "Hybrid",
    skills: ["Python", "Ethics", "Healthcare", "Machine Learning"],
    level: "Intermediate",
    featured: true,
    mentor: "Dr. Sarah Chen",
    university: "Cambridge",
  },
  {
    id: 2,
    title: "CRISPR Gene Editing Workshop",
    type: "Skill Exchange",
    field: "Life Sciences",
    description: "Comprehensive hands-on workshop covering CRISPR technology fundamentals and practical applications.",
    participants: 12,
    duration: "2 weeks",
    location: "In-person",
    skills: ["Molecular Biology", "Lab Techniques", "Genetics"],
    level: "Beginner",
    featured: false,
    mentor: "Prof. Michael Roberts",
    university: "Cambridge",
  },
  {
    id: 3,
    title: "Quantum Computing Algorithms",
    type: "Research Project",
    field: "Physics",
    description: "Developing novel algorithms for quantum error correction and optimization problems.",
    participants: 3,
    duration: "6 months",
    location: "Remote",
    skills: ["Quantum Physics", "Mathematics", "Programming", "Qiskit"],
    level: "Advanced",
    featured: true,
    mentor: "Dr. James Wilson",
    university: "Cambridge",
  },
  {
    id: 4,
    title: "Data Visualization Masterclass",
    type: "Skill Exchange",
    field: "Data Science",
    description: "Master the art of creating compelling and informative data visualizations using modern tools.",
    participants: 8,
    duration: "1 month",
    location: "Hybrid",
    skills: ["D3.js", "Python", "Design", "Tableau"],
    level: "Intermediate",
    featured: false,
    mentor: "Dr. Emily Zhang",
    university: "Cambridge",
  },
  {
    id: 5,
    title: "Climate Change Modeling",
    type: "Research Project",
    field: "Environmental Science",
    description: "Building predictive models for climate change impacts on biodiversity and ecosystems.",
    participants: 6,
    duration: "4 months",
    location: "In-person",
    skills: ["R", "Statistics", "Climate Science", "GIS"],
    level: "Intermediate",
    featured: true,
    mentor: "Prof. David Thompson",
    university: "Cambridge",
  },
  {
    id: 6,
    title: "Machine Learning Fundamentals",
    type: "Skill Exchange",
    field: "AI/ML",
    description: "Comprehensive introduction to machine learning concepts, algorithms, and practical applications.",
    participants: 15,
    duration: "6 weeks",
    location: "Online",
    skills: ["Python", "Statistics", "TensorFlow", "Scikit-learn"],
    level: "Beginner",
    featured: false,
    mentor: "Dr. Alex Kumar",
    university: "Cambridge",
  },
]

const categories = ["All", "Research Project", "Skill Exchange"]
const fields = ["All", "AI/ML", "Life Sciences", "Physics", "Data Science", "Environmental Science"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export function OpportunitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedField, setSelectedField] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const categoryMatch = selectedCategory === "All" || opportunity.type === selectedCategory
    const fieldMatch = selectedField === "All" || opportunity.field === selectedField
    const levelMatch = selectedLevel === "All" || opportunity.level === selectedLevel
    return categoryMatch && fieldMatch && levelMatch
  })

  const featuredOpportunities = filteredOpportunities.filter((opp) => opp.featured)
  const regularOpportunities = filteredOpportunities.filter((opp) => !opp.featured)

  return (
    <section id="opportunities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Current Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              {" "}
              Research Adventure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore research projects and skill-sharing sessions that match your interests and experience level.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Field:</span>
              {fields.map((field) => (
                <Button
                  key={field}
                  variant={selectedField === field ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedField(field)}
                  className={selectedField === field ? "bg-teal-600 hover:bg-teal-700" : ""}
                >
                  {field}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Level:</span>
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Opportunities */}
        {featuredOpportunities.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Opportunities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredOpportunities.map((opportunity) => (
                <Card
                  key={opportunity.id}
                  className="hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge
                        variant={opportunity.type === "Research Project" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {opportunity.type}
                      </Badge>
                      <Badge variant="outline">{opportunity.field}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {opportunity.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">Mentor: {opportunity.mentor}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {opportunity.participants} participants
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {opportunity.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {opportunity.location}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Badge
                        variant={
                          opportunity.level === "Beginner"
                            ? "secondary"
                            : opportunity.level === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {opportunity.level}
                      </Badge>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Opportunities */}
        {regularOpportunities.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">All Opportunities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={opportunity.type === "Research Project" ? "default" : "secondary"}>
                        {opportunity.type}
                      </Badge>
                      <Badge variant="outline">{opportunity.field}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {opportunity.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">Mentor: {opportunity.mentor}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {opportunity.participants} participants
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {opportunity.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {opportunity.location}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Badge
                        variant={
                          opportunity.level === "Beginner"
                            ? "secondary"
                            : opportunity.level === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {opportunity.level}
                      </Badge>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedField("All")
                setSelectedLevel("All")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
