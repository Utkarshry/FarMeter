'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export function FarmeterNewsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 bg-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join the Hydro-Bio-Loop
        </h2>
        <p className="text-xl text-emerald-50 mb-10">
          Get weekly automated updates on our pilot bioreactor and AgTech breakthroughs
        </p>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg"
          />
          <Button 
            className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg whitespace-nowrap"
          >
            <Mail className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>

        <p className="text-sm text-emerald-100 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
