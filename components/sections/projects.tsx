"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "IVYGPT",
    subtitle: "Enterprise GenAI Platform",
    description:
      "Internal AI platform powered by LLMs and AI Agents for RAG-based document QnA, interrogation, and multilingual translation.",
    metrics: ["8,000+ global users", "Real-time processing"],
    tags: ["LLMs", "AI Agents", "RAG", "LangSmith", "Python", "Databricks"],
  },
  {
    title: "Model Commentary Generator",
    subtitle: "Automated Report Generation",
    description:
      "LLM-powered pipeline for automated financial commentary generation, reducing manual reporting time from 2 weeks to 10 minutes.",
    metrics: ["95% accuracy", "500+ documents", "Daily automation"],
    tags: ["LLMs", "NLP", "Pipeline Architecture", "Batch Processing", "Python"],
  },
  {
    title: "R-CNN Table Extractor",
    subtitle: "PDF Data Extraction at Scale",
    description:
      "Computer vision-based solution for extracting tables from PDFs, processing 100K+ files across 5,000 companies.",
    metrics: ["100K+ PDFs processed", "40% cost savings", "AWS automation"],
    tags: ["Computer Vision", "R-CNN", "AWS", "Deep Learning"],
  },
  {
    title: "Cloud Cost Forecasting Tool",
    subtitle: "Cost Optimization Platform",
    description:
      "ML-powered forecasting tool for predicting and optimizing cloud infrastructure costs with predictive analytics.",
    metrics: ["20% accuracy improvement", "Real-time insights", "Cost reduction"],
    tags: ["ML", "Time Series", "Analytics", "Python"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Portfolio</p>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="glow-border bg-background/50 p-8 card-hover flex flex-col space-y-4 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-accent group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-xs text-accent font-mono bg-accent/10 px-2 py-1 rounded">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/hemang-75"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold group"
          >
            <Github className="w-5 h-5" />
            <span>View More Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
