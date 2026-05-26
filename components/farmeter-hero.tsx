'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function FarmeterHero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Smart Soil. Better Harvest. Zero Waste.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming agricultural liabilities into premium bio-fertilizer and clean biohydrogen through the AI-driven Hydro-Bio-Loop.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>
        </div>

        {/* Right Side - Placeholder for 3D/Dashboard */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌾</div>
              <p className="text-gray-600 font-medium">3D Visualization</p>
              <p className="text-sm text-gray-500">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
