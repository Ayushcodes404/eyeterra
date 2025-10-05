"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function BelgaumPage() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: "/images/2/1.png", label: "2004" },
    { src: "/images/2/2.png", label: "2009" },
    { src: "/images/2/3.png", label: "2013" },
    { src: "/images/2/4.png", label: "2019" },
    { src: "/images/2/5.png", label: "2024" },
  ]

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
            Deforestation & Agricultural Land-Use Change
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#F4F1E9] mb-8 leading-relaxed">
           Over two decades, satellite data for Karnataka reveals a concerning trend: as vegetation has diminished, land surface temperatures have consistently risen.
          </h2>
          <Button
            onClick={() => document.getElementById("animation-section")?.scrollIntoView({ behavior: "smooth" })}
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
          <div className="aspect-video bg-[#0A2342] dark:bg-card rounded-lg shadow-2xl overflow-hidden mb-10">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/df.jpg"
            >
              <source src="/video/2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image Slider */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-6">
              Karnataka Vegetation & Temperature (2004–2024)
            </h3>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].label}
              className="w-full max-w-3xl mx-auto rounded-xl shadow-lg mb-4"
            />
            <input
              type="range"
              min="0"
              max={images.length - 1}
              value={currentImage}
              onChange={(e) => setCurrentImage(Number(e.target.value))}
              className="w-full max-w-2xl mx-auto"
            />
            <p className="mt-2 text-lg font-semibold text-foreground/80">
              Year: {images[currentImage].label}
            </p>
          </div>
        </div>
      </section>

      {/* Local Temperature & Observations */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* New Karnataka Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-6">
              Karnataka: A Two-Decade Transformation (2004–2024)
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              A comprehensive analysis of satellite imagery of Karnataka from 2004 to 2024 reveals a concerning trend of diminishing vegetation and a corresponding rise in land surface temperatures. This two-decade comparison, utilizing MODIS Terra Vegetation Indices (NDVI) and Land Surface Temperature (LST) data, paints a clear picture of the environmental transformation within the state.
            </p>

            <h4 className="text-xl md:text-2xl font-semibold text-[#0A2342] dark:text-foreground mb-3">Key Observations</h4>
            <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2 mb-6">
              <li><strong>2004:</strong> Healthy vegetation across Karnataka, moderate surface temperatures.</li>
              <li><strong>2009:</strong> Reduction in green cover; LST shows more yellow/orange heat zones.</li>
              <li><strong>2013:</strong> Vegetation loss accelerates in north/east; significant heat rise.</li>
              <li><strong>2019:</strong> Sharp decline in NDVI; widespread orange/red heat stress in LST.</li>
              <li><strong>2024:</strong> Severe vegetation loss, intense land surface heat across northern districts.</li>
            </ul>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The inverse relationship between NDVI and LST is evident. As vegetation diminishes, less transpiration cools the land, and exposed surfaces absorb more heat — intensifying local warming.
            </p>

            <h4 className="text-xl md:text-2xl font-semibold text-[#0A2342] dark:text-foreground mb-3">Underlying Causes</h4>
            <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2 mb-6">
              <li><strong>Urbanization:</strong> Expanding cities replacing green zones with concrete.</li>
              <li><strong>Deforestation:</strong> Forest clearing for agriculture and infrastructure.</li>
              <li><strong>Agricultural Changes:</strong> Shifts in cropping patterns affecting vegetation.</li>
            </ul>

            <h4 className="text-xl md:text-2xl font-semibold text-[#0A2342] dark:text-foreground mb-3">Impacts</h4>
            <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2">
              <li>Increased heat stress and urban heat island effect.</li>
              <li>Adverse impacts on agriculture and water availability.</li>
              <li>Loss of biodiversity and habitat degradation.</li>
              <li>Changes in local climate, reduced rainfall in some areas.</li>
            </ul>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mt-6">
              In conclusion, the two-decade satellite imagery analysis underscores the urgent need for afforestation, sustainable land use planning, and green infrastructure development to mitigate these impacts and ensure Karnataka’s ecological resilience.
            </p>
          </div>

          {/* Existing Belagavi Detailed Observations + Gallery remain same */}
        </div>
      </section>
    </div>
  )
}
