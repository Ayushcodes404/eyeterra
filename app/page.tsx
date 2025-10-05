import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Satellite, Globe, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              NASA Terra Satellite
              <br />
              <span className="text-primary">Data Analysis</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Advanced analysis platform for NASA's Terra Satellite data. Monitor Earth's climate, land, and atmospheric
              changes with precision instruments.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/case-studies">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Analyzing Earth from Space</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              eyeTerra is a comprehensive analysis platform for data collected by NASA's Terra Satellite, launched in
              1999 as part of NASA's Earth Observing System. Terra carries five state-of-the-art instruments that
              monitor Earth's atmosphere, land, oceans, and energy balance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform processes and visualizes data from MODIS, ASTER and CERES instruments,
              enabling researchers and analysts to track environmental changes, study climate patterns, and monitor
              natural resources with unprecedented accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Terra Instruments</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Satellite className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">MODIS & ASTER</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multispectral imaging for land surface, vegetation, and ocean color monitoring with global coverage.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold">CERES & MISR</h3>
              <p className="text-muted-foreground leading-relaxed">
                Earth's radiation budget and multi-angle imaging for cloud and aerosol analysis.
              </p>
            </div>

            <div className="space-y-4">
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 eyeTerra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
