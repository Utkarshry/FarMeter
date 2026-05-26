'use client'

import { Card } from '@/components/ui/card'
import { Droplets, Beaker, Wind } from 'lucide-react'

export function FarmeterTechnology() {
  const technologies = [
    {
      icon: Droplets,
      title: 'Phase 1: BSFL Bioreactors',
      description: 'Black Soldier Fly Larvae process the Agricultural Biomass Paradox by mixing stubble, SMS, and wet food waste. Achieve 60% volume reduction in under 20 days.',
      color: 'emerald',
    },
    {
      icon: Beaker,
      title: 'Phase 2: Dark Fermentation',
      description: 'The liquid effluent is funneled into a dark fermentation reactor to generate clean Biohydrogen gas for renewable energy production.',
      color: 'amber',
    },
    {
      icon: Wind,
      title: 'Phase 3: The NBS Train',
      description: 'Future vision: using biochar for Metal-Organic Frameworks (MOFs) to capture and store biohydrogen, enabling distributed energy storage.',
      color: 'blue',
    },
  ]

  const colorClasses = {
    emerald: 'bg-emerald-50 border-emerald-200',
    amber: 'bg-amber-50 border-amber-200',
    blue: 'bg-blue-50 border-blue-200',
  }

  const iconColors = {
    emerald: 'text-emerald-700 bg-emerald-100',
    amber: 'text-amber-700 bg-amber-100',
    blue: 'text-blue-700 bg-blue-100',
  }

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Hydro-Bio-Loop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A three-phase integrated system transforming agricultural waste into valuable products
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            const colorKey = tech.color as 'emerald' | 'amber' | 'blue'
            return (
              <Card 
                key={index}
                className={`p-8 ${colorClasses[colorKey]} border-2 rounded-2xl hover:shadow-lg transition-shadow`}
              >
                <div className={`w-16 h-16 ${iconColors[colorKey]} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tech.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
