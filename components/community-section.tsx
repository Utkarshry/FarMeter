"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CommunitySection() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      // Simple bar chart implementation without external dependencies
      const canvas = chartRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const data = [
        { month: "Jan", events: 12 },
        { month: "Feb", events: 18 },
        { month: "Mar", events: 25 },
        { month: "Apr", events: 22 },
        { month: "May", events: 30 },
        { month: "Jun", events: 28 },
      ]

      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      const padding = 40
      const chartWidth = canvasWidth - 2 * padding
      const chartHeight = canvasHeight - 2 * padding

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Set styles
      ctx.fillStyle = "#f97316" // orange-500
      ctx.font = "12px Inter"
      ctx.textAlign = "center"

      const barWidth = (chartWidth / data.length) * 0.6
      const maxValue = Math.max(...data.map((d) => d.events))

      data.forEach((item, index) => {
        const barHeight = (item.events / maxValue) * chartHeight * 0.8
        const x = padding + (index * chartWidth) / data.length + (chartWidth / data.length - barWidth) / 2
        const y = canvasHeight - padding - barHeight

        // Draw bar
        ctx.fillStyle = "#f97316"
        ctx.fillRect(x, y, barWidth, barHeight)

        // Draw month label
        ctx.fillStyle = "#374151"
        ctx.fillText(item.month, x + barWidth / 2, canvasHeight - padding + 20)

        // Draw value label
        ctx.fillText(item.events.toString(), x + barWidth / 2, y - 10)
      })
    }
  }, [])

  const stats = [
    { label: "Active Members", value: "500+", description: "Growing every month" },
    { label: "Research Projects", value: "200+", description: "Across all disciplines" },
    { label: "Skill Sessions", value: "150+", description: "Monthly workshops" },
    { label: "Publications", value: "75+", description: "Student co-authored" },
  ]

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Thriving Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our community has grown and the impact we're making together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Monthly Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <canvas ref={chartRef} width={400} height={250} className="w-full h-auto" />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 mb-6">
                Our members are achieving incredible things together. From first-time researchers to published authors,
                CuSoR is transforming academic journeys across Cambridge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
                    <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">"CuSoR changed my academic trajectory completely."</h4>
              <p className="text-gray-700 text-sm mb-3">
                "I went from having zero research experience to co-authoring two papers and getting accepted into my
                dream PhD program. The community support and opportunities are incredible."
              </p>
              <div className="text-sm text-gray-600">— Sarah Chen, PhD Student at MIT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
