import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "Rising Heat, Expanding City: Belagavi's Changing Face",
    category: "Urban Climate & Development",
    description:
      "A comprehensive analysis of urban transformation from 2005 to 2025, examining the correlation between rapid urbanization and rising temperatures through Terra satellite data.",
    image: "/satellite-imagery-of-urban-city-development-and-ex.jpg",
    tags: ["Urban Heat", "Land Use", "Climate Change"],
    link: "/local/belgaum",
  },
  {
    id: 2,
    title: "Deforestation & Agricultural Land-Use Change",
    category: "Extereme Weather Events",
    description:
      "Using MODIS NDVI and Land Surface Temperature data to monitor Deforestation & Agricultural Land-Use Changes and its affects in Karnataka .",
    image: "/satellite-view-of-agricultural-fields-with-differe.jpg",
    tags: ["MODIS", "NDVI", "Vegetation"],
    link: "/local/df"
  },
  {
    id: 3,
    title: "Water Stress & Drought Patterns",
    category: "Climate & Agriculture",
    description:
      "Using MODIS Land Surface Temperature, Vegetation Indices, and CERES energy balance data to analyze drought stress and shifting monsoon patterns across India, with a focus on Belagavi's farmlands (2000–2025).",
    image: "/drought.jpg",
    tags: ["MODIS", "LST", "NDVI", "CERES", "Drought"],
    link: "/local/dr"
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Explore real-world applications of NASA Terra Satellite data analysis across climate science,
              environmental monitoring, and atmospheric research.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{study.category}</p>
                    <h3 className="text-2xl font-bold text-balance">{study.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{study.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {study.link ? (
                    <Link href={study.link}>
                      <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
