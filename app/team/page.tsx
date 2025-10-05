import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Data Scientist",
    specialty: "MODIS Data Analysis",
    image: "/professional-woman-scientist.png",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Atmospheric Researcher",
    specialty: "MOPITT & CERES Analysis",
    image: "/professional-scientist.png",
  },
  {
    name: "Dr. Emily Watson",
    role: "Remote Sensing Specialist",
    specialty: "ASTER & MISR Imaging",
    image: "/professional-woman-researcher.png",
  },
  {
    name: "Dr. James Park",
    role: "Climate Analyst",
    specialty: "Long-term Climate Trends",
    image: "/professional-man-researcher.png",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Geospatial Engineer",
    specialty: "Land Surface Monitoring",
    image: "/professional-woman-engineer.png",
  },
  {
    name: "Dr. David Kumar",
    role: "Ocean Systems Analyst",
    specialty: "Ocean Color & Temperature",
    image: "/professional-analyst.png",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Meet the experts behind eyeTerra's advanced Terra Satellite data analysis platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">Specializes in {member.specialty}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 eyeTerra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
