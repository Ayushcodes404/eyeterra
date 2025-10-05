"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function BelgaumPage() {
  const [currentImage, setCurrentImage] = useState(0)
  
    const images = [
      { src: "/images/3/2.gif", label: "MODIS Terra LST Daytime" },
      { src: "/images/3/1.gif", label: "CERES Longwave Radiation." },
      { src: "/images/3/3.gif", label: "MODIS Terra NDVI" },
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
            Water Stress & Drought Patterns
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#F4F1E9] mb-8 leading-relaxed">
            Using MODIS Land Surface Temperature, Vegetation Indices, and CERES energy balance data to analyze drought stress and shifting monsoon patterns across India, with a focus on Belagavi's farmlands (2000–2025).
          </h2>
          <Button
            onClick={() =>
              document.getElementById("animation-section")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#2CA58D] hover:bg-[#2CA58D]/90 text-white font-semibold py-5 md:py-6 px-6 md:px-8 text-base md:text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch the Animation
          </Button>
        </div>
      </section>
      {/* Image Slider */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2CA58D] mb-6">
              Animations (2004–2024)
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
              Instrument: {images[currentImage].label}
            </p>
            <h1 className="text-1xl md:text-1xl font-bold mb-6">
              click on the slider or use right and left arrow keys for different instruments
            </h1>

          </div>

      {/* Local Temperature & Observations */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-[#2CA58D] mb-10 text-center">
           Lets's Analyze
          </h2>

          {/* 🌍 Section 1: Overall Summary */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2CA58D] mb-4">
              Overall Summary 
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              The three images collectively illustrate a classic pre-monsoon scenario in India. The Land Surface Temperature (LST) map shows intense heat buildup over the landmass, particularly in arid and semi-arid regions. In contrast, the Vegetation Index (NDVI) map reveals that these same hot areas have sparse vegetation cover. The Outgoing Longwave Radiation data supports this, showing that the hottest, driest regions radiate the most energy back into the atmosphere — a crucial factor influencing monsoon patterns.
            </p>
          </div>

          {/* 🧐 Section 2: Detailed Observations */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2CA58D] mb-6">
              Detailed Observations 
            </h3>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">1. Land Surface Temperature (LST)</h4>
            <p className="text-base md:text-lg text-foreground/80 mb-4">
              High surface temperatures dominate northwestern India, the Indo-Gangetic plains, and much of the Deccan Plateau. These heated regions are critical precursors to the monsoon, while cooler zones persist in the Western Ghats, Himalayas, and Northeast.
            </p>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">2. Vegetation Health (NDVI)</h4>
            <p className="text-base md:text-lg text-foreground/80 mb-4">
              Vegetation health inversely mirrors temperature data. The Western Ghats (including Belagavi) and the Himalayan foothills appear green and healthy, contrasting with the arid central plains.
            </p>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">3. Outgoing Longwave Radiation (OLR)</h4>
            <p className="text-base md:text-lg text-foreground/80">
              Higher OLR values align with heated, dry regions — evidence of strong energy emission. This differential heating drives monsoon circulation and is crucial for tracking climate shifts.
            </p>

             <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">3. Outgoing Longwave Radiation (OLR)</h4>
            <p className="text-base md:text-lg text-foreground/80">
               <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">4. Longitudinal Analysis of Drought Indicators (2000-2025) (OLR)</h4>
            <p className="text-base md:text-lg text-foreground/80">
              A time-series analysis of the satellite data from 2000 to 2025 is projected to reveal critical environmental trends indicating escalating drought stress. Key indicators include: Expansion of High-Temperature Zones: A progressive increase in the spatial extent of high LST values (thermal stress indicators) encroaching upon the Belagavi region from the adjacent plains. Degradation of Vegetation Health: A measurable decline in NDVI values within the region over time, signifying a reduction in vegetation density and health. This trend would be particularly pronounced during periods of documented dry spells or meteorological drought. Anomalies in Regional Energy Balance: Observable shifts in the Outgoing Longwave Radiation (OLR) patterns, which can be correlated with meteorological data to identify changes in atmospheric conditions affecting monsoon intensity and consistency.
            </p>
            </p>
          </div>

          {/* 🌾 Section 3: Environmental Stress Analysis */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2CA58D] mb-6">
              Analysis of Environmental Stress & Regional Impact
            </h3>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">3.1 Geospatial Vulnerability Assessment</h4>
            <p className="text-base md:text-lg text-foreground/80 mb-4">
              MODIS and CERES data place Belagavi in a climatic transition zone — lush yet bordering the semi-arid Deccan Plateau. This proximity makes it sensitive to expanding aridity and heat stress, particularly during weak monsoons.
            </p>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">3.2 Longitudinal Drought Trends (2000–2025)</h4>
            <ul className="list-disc pl-6 text-base md:text-lg text-foreground/80 space-y-2 mb-4">
              <li>Expansion of high-temperature zones encroaching toward Belagavi.</li>
              <li>Decline in NDVI values indicating vegetation stress and loss.</li>
              <li>Shifts in OLR patterns correlating with weakened monsoon systems.</li>
            </ul>

            <h4 className="text-2xl font-semibold text-[#0A2342] mb-3">3.3 Correlation with Ground-Level Impacts</h4>
            <p className="text-base md:text-lg text-foreground/80">
             This remote sensing data serves to scientifically validate local, ground-level observations reported by agricultural communities. Anecdotal evidence from farmers in Belagavi regarding increased water scarcity, drying wells, and erratic rainfall patterns can be contextualized and substantiated by these macro-level datasets. The satellite imagery provides a regional and climatic framework, demonstrating that local struggles are consistent with a larger, measurable trend of increasing water and thermal stress across the subcontinent.
            </p>

            
          </div>

          {/* 🎥 Gallery Section */}
        </div>
      </section>
    </div>
  )
}
