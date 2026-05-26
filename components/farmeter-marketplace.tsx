'use client'

import { Card } from '@/components/ui/card'
import { Wheat, Sprout, Building2 } from 'lucide-react'

export function FarmeterMarketplace() {
  const actors = [
    {
      icon: Wheat,
      title: 'Crop Farmers',
      items: [
        'Sell dry stubble',
        'Buy bio-frass fertilizer',
        'Access biochar products',
      ],
      color: 'emerald',
    },
    {
      icon: Sprout,
      title: 'Mushroom Cultivators',
      items: [
        'Supply Spent Mushroom Substrate',
        'Reduce disposal costs',
        'Join circular economy',
      ],
      color: 'amber',
    },
    {
      icon: Building2,
      title: 'Institutions',
      items: [
        'Provide wet waste',
        'Meet sustainability goals',
        'Generate revenue',
      ],
      color: 'blue',
    },
  ]

  const colorClasses = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-700 bg-emerald-100' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-700 bg-amber-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-700 bg-blue-100' },
  }

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Circular Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decentralized 3-sided revenue model connecting farmers, cultivators, and institutions
          </p>
        </div>

        {/* Marketplace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actors.map((actor, index) => {
            const Icon = actor.icon
            const colors = colorClasses[actor.color as 'emerald' | 'amber' | 'blue']
            return (
              <Card 
                key={index}
                className={`p-8 ${colors.bg} border-2 ${colors.border} rounded-2xl hover:shadow-lg transition`}
              >
                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {actor.title}
                </h3>
                <ul className="space-y-3">
                  {actor.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="font-bold text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* Center Connection Diagram */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-2xl h-40">
            <svg className="w-full h-full" viewBox="0 0 400 160">
              {/* Connecting lines */}
              <line x1="100" y1="80" x2="200" y2="80" stroke="#e5e7eb" strokeWidth="2" />
              <line x1="200" y1="80" x2="300" y2="80" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Center hub */}
              <circle cx="200" cy="80" r="30" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="2" />
              <text x="200" y="85" textAnchor="middle" className="text-sm font-bold fill-emerald-700">
                FarMeter
              </text>
            </svg>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
            <h4 className="font-bold text-gray-900 mb-2">Zero Waste</h4>
            <p className="text-sm text-gray-600">Convert agricultural waste into valuable products</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-white border-amber-200">
            <h4 className="font-bold text-gray-900 mb-2">Revenue Generation</h4>
            <p className="text-sm text-gray-600">Create new income streams for all stakeholders</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <h4 className="font-bold text-gray-900 mb-2">Sustainable Impact</h4>
            <p className="text-sm text-gray-600">Reduce emissions and improve environmental health</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
