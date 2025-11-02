"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Hemang Goyal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Senior Data Scientist | AI/ML Systems Builder</p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building scalable AI systems that bridge cutting-edge research with real-world business impact. 8+ years of
          experience in LLMs, AI Agents, NLP, and MLOps across finance and technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5 transition-colors font-medium"
          >
            Get In Touch
          </Link>
        </div>

        <div className="pt-12 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-accent">8+</span>
            <span>Years Experience</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-accent">100+</span>
            <span>ML Projects</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-accent">Millions</span>
            <span>Users Impacted</span>
          </div>
        </div>
      </div>
    </section>
  )
}
