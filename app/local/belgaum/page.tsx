"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react";

export default function BelgaumPage() {
   const images = [
    "/images/1/1.png",
    "/images/1/2.png",
    "/images/1/3.png",
    "/images/1/4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A2342] to-[#0A2342]/90 dark:from-[#0A2342] dark:to-[#0A2342]/80">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Link href="/case-studies" className="inline-block mb-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Rising Heat, Expanding City: Belagavi's Changing Face
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#F4F1E9] mb-8 leading-relaxed">
            A Two-Decade Journey through NASA Terra Satellite Data (2005–2025)
          </h2>

          <Button
            onClick={() =>
              document
                .getElementById("animation-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#2CA58D] hover:bg-[#2CA58D]/90 text-white font-semibold py-5 md:py-6 px-6 md:px-8 text-base md:text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch the Animation
          </Button>
        </div>
      </section>


      {/* Animation Section */}
      <section id="animation-section" className="py-16 md:py-20 px-4 bg-[#F4F1E9] dark:bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-video bg-[#0A2342] dark:bg-card rounded-lg shadow-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/belgaum-monsoon-satellite-animation-preview.jpg"
            >
              <source src="/video/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Animation / Image Slideshow Section */}
      <section
        id="animation-section"
        className="py-16 md:py-20 px-4 bg-[#F4F1E9] dark:bg-background"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-video bg-[#0A2342] dark:bg-card rounded-lg shadow-2xl overflow-hidden relative">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Dots navigation */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? "bg-white" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Temperature & Observations */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-[#2CA58D] mb-10 text-center">
            Local Temperature – Belagavi
          </h2>

          {/* Overview and Impact */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-4">Overview & Impact</h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Over the last 20 years, Belagavi's land surface temperature has shown a clear fluctuation — not a steady
              rise, but distinct warming and cooling cycles. Between 2015 and 2020, temperatures peaked significantly
              before cooling again by 2025.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              This variation is closely tied to changes in land use. Urban expansion replaced large areas of natural
              vegetation and open soil with concrete, asphalt, and infrastructure — intensifying the Urban Heat Island
              effect and altering local climate patterns.
            </p>
          </div>

          {/* Detailed Observations */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-6">Detailed Observations</h3>

            {/* Land Use Changes */}
            <div className="mb-10">
              <h4 className="text-xl md:text-2xl font-semibold text-[#0A2342] dark:text-foreground mb-3">
                1. Satellite Imagery – Land Use Changes
              </h4>
              <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2">
                <li>
                  <strong>2005:</strong> Belagavi was a compact urban center surrounded by green cover and open brown
                  land, particularly toward the south and north.
                </li>
                <li>
                  <strong>2010:</strong> Urban sprawl began to extend outward, slowly reducing the surrounding green
                  spaces.
                </li>
                <li>
                  <strong>2015:</strong> Urbanization became prominent — new constructions filled previously open zones,
                  visibly expanding the city's footprint.
                </li>
                <li>
                  <strong>2020:</strong> Massive urban expansion in all directions, with much of the green and open land
                  replaced by buildings and roads.
                </li>
              </ul>
            </div>

            {/* Thermal Changes */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold text-[#0A2342] dark:text-foreground mb-3">
                2. Thermal Imagery – Temperature Changes
              </h4>
              <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2">
                <li>
                  <strong>2005:</strong> Moderate land surface temperature represented by a standard yellow — the
                  baseline.
                </li>
                <li>
                  <strong>2010:</strong> A slight increase in temperature; the yellow tone appears brighter and more
                  intense.
                </li>
                <li>
                  <strong>2015:</strong> A sharp rise — bright, hot yellow tones dominate the region, indicating high
                  surface heat.
                </li>
                <li>
                  <strong>2020:</strong> Peak warmth continues, making 2015–2020 the hottest period in this timeline.
                </li>
              </ul>
            </div>
          </div>

          {/* Impact and Consequences */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-6">Impact & Consequences</h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The observed land-use and temperature shifts are clear evidence of the Urban Heat Island (UHI) effect —
              where developed areas become significantly warmer than their rural surroundings.
            </p>
            <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-3">
              <li>
                <strong>Increased Energy Consumption:</strong> Greater reliance on air conditioning, higher electricity
                costs, and strain on local power infrastructure.
              </li>
              <li>
                <strong>Public Health Risks:</strong> Elevated temperatures heighten heat stress, respiratory issues,
                and discomfort during heatwaves.
              </li>
              <li>
                <strong>Water Resource Strain:</strong> Impermeable urban surfaces reduce groundwater recharge, while
                higher temperatures accelerate water loss through evaporation.
              </li>
              <li>
                <strong>Loss of Biodiversity:</strong> Habitat loss and reduced green spaces have displaced local
                wildlife and degraded ecological health.
              </li>
              <li>
                <strong>Reduced Quality of Life:</strong> Persistent heat decreases outdoor activity, productivity, and
                general well-being of residents.
              </li>
            </ul>
          </div>

          {/* Animation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-center">
          
</div>

        </div>
      </section>
    </div>
  )
}
