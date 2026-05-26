import { FarmeterNavigation } from "@/components/farmeter-navigation"
import { FarmeterHero } from "@/components/farmeter-hero"
import { FarmeterProblem } from "@/components/farmeter-problem"
import { FarmeterTechnology } from "@/components/farmeter-technology"
import { FarmeterApp } from "@/components/farmeter-app"
import { FarmeterMarketplace } from "@/components/farmeter-marketplace"
import { FarmeterNewsletter } from "@/components/farmeter-newsletter"
import { FarmeterFooter } from "@/components/farmeter-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FarmeterNavigation />
      <main>
        <FarmeterHero />
        <FarmeterProblem />
        <FarmeterTechnology />
        <FarmeterApp />
        <FarmeterMarketplace />
        <FarmeterNewsletter />
      </main>
      <FarmeterFooter />
    </div>
  )
}
