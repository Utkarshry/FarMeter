'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export function FarmeterNavigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-700">FarMeter</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#technology" className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition">
              Technology
            </Link>
            <Link href="#app" className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition">
              The App
            </Link>
            <Link href="#marketplace" className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition">
              Marketplace
            </Link>
            <Link href="#research" className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition">
              Research
            </Link>
          </div>

          {/* Right: Subscribe Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="text-emerald-700 border-emerald-700 hover:bg-emerald-50"
          >
            <Mail className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  )
}
