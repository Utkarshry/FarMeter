'use client'

import { Card } from '@/components/ui/card'
import { Flame, Leaf, Zap } from 'lucide-react'

export function FarmeterProblem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The 1.3 Billion Ton Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Annual agricultural waste creates environmental and economic challenges. FarMeter transforms this paradox.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem Card */}
          <Card className="p-8 bg-red-50 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>1.3 billion tons of agricultural waste annually</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Methane emissions from decomposition</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Stubble burning pollutes air and soil</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Economic losses for farmers</span>
              </li>
            </ul>
          </Card>

          {/* Solution Card */}
          <Card className="p-8 bg-emerald-50 border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-emerald-700" />
              <h3 className="text-2xl font-bold text-gray-900">The Solution</h3>
            </div>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-emerald-700 font-bold">1.</span>
                <span><strong>Waste Collection</strong> - Gather agricultural biomass</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-700 font-bold">2.</span>
                <span><strong>Bioconversion</strong> - BSFL process creates value</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-700 font-bold">3.</span>
                <span><strong>Wealth Creation</strong> - Bio-frass, biohydrogen, improved crops</span>
              </li>
            </ol>
          </Card>
        </div>

        {/* Flow Diagram */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <div className="mb-6 md:mb-0">
              <div className="bg-red-100 rounded-lg p-4 inline-block">
                <Flame className="w-12 h-12 text-red-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900 mt-3">Agricultural Waste</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-emerald-700 mx-4" />
            <div className="mb-6 md:mb-0">
              <div className="bg-yellow-100 rounded-lg p-4 inline-block">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900 mt-3">Bioconversion (BSFL)</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-emerald-700 mx-4" />
            <div>
              <div className="bg-emerald-100 rounded-lg p-4 inline-block">
                <Leaf className="w-12 h-12 text-emerald-700 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900 mt-3">Premium Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
