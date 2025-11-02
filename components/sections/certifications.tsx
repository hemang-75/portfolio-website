"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Neural Networks and Deep Learning",
    provider: "Coursera",
    year: 2019,
    tags: ["Deep Learning", "Neural Networks"],
  },
  {
    title: "Machine Learning Engineer Nanodegree",
    provider: "Udacity",
    year: 2020,
    tags: ["ML Engineering", "MLOps"],
  },
  {
    title: "AI for Trading Nanodegree",
    provider: "Udacity",
    year: 2020,
    tags: ["AI", "Trading", "Algorithms"],
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    provider: "DeepLearning.AI",
    year: 2024,
    tags: ["LLMs", "Prompt Engineering"],
  },
  {
    title: "AI Agents in LangGraph",
    provider: "DeepLearning.AI",
    year: 2024,
    tags: ["AI Agents", "LangGraph"],
  },
  {
    title: "MCP: Build Rich-Context AI Apps with Anthropic",
    provider: "DeepLearning.AI",
    year: 2025,
    tags: ["MCP", "AI Applications"],
  },
  {
    title: "How Diffusion Models Work",
    provider: "DeepLearning.AI",
    year: 2025,
    tags: ["Generative AI", "Diffusion"],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Credentials</p>
          <h2 className="text-4xl font-bold">Certifications & Continuous Learning</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="glow-border bg-background/50 p-6 card-hover flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-accent" />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider} • {cert.year}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
