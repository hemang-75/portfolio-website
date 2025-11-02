"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Hero } from "@/components/sections/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { ImpactHighlights } from "@/components/sections/impact-highlights"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="smooth-scroll min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <ImpactHighlights />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
