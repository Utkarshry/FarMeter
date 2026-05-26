'use client'

import { Card } from '@/components/ui/card'
import { Smartphone, Zap, Leaf, TrendingUp } from 'lucide-react'

export function FarmeterApp() {
  return (
    <section id="app" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The FarMeter App
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-driven agronomy in the palm of your hand
          </p>
        </div>

        {/* App Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-1 w-80 h-96">
              <div className="bg-white rounded-3xl h-full flex flex-col items-center justify-center p-6 space-y-4">
                <div className="text-4xl font-bold text-emerald-700">नमी</div>
                <div className="text-2xl font-semibold text-gray-900">18%</div>
                <Card className="w-full p-4 text-center bg-emerald-50 border-emerald-200">
                  <p className="text-sm text-gray-700">
                    5 किलो बायो-फ्रास खाद डालें
                  </p>
                </Card>
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Smart Features for Modern Farmers
              </h3>
              <p className="text-gray-600">
                Everything you need to optimize your farm and maximize your yield
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: 'IoT Integration',
                  description: 'Monitor NPK levels, moisture, and pH in real-time',
                },
                {
                  icon: Leaf,
                  title: 'AI Action Cards',
                  description: 'Get intelligent recommendations for your farm',
                },
                {
                  icon: TrendingUp,
                  title: 'Carbon Traceability',
                  description: 'Track ESG metrics and environmental impact',
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="p-4 border-l-4 border-l-emerald-700 bg-white hover:shadow-md transition">
                    <div className="flex gap-4">
                      <div className="bg-emerald-50 rounded-lg p-3 h-fit">
                        <Icon className="w-6 h-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
