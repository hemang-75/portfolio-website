"use client"

import { Card } from "@/components/ui/card"
import { Users, Zap, TrendingDown, Clock } from "lucide-react"

const impacts = [
  {
    icon: Users,
    value: "8,000+",
    label: "Users Adopted IVYGPT",
    description: "Enterprise GenAI platform deployed globally",
  },
  {
    icon: Zap,
    value: "80%",
    label: "QA Time Saved",
    description: "AI Agent evaluation framework reduced manual testing",
  },
  {
    icon: TrendingDown,
    value: "40%",
    label: "Cost Savings",
    description: "R-CNN table extraction automation across 100K+ PDFs",
  },
  {
    icon: Clock,
    value: "2 weeks → 10 min",
    label: "Process Acceleration",
    description: "95% accurate commentary generation pipeline",
  },
]

export function ImpactHighlights() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Impact Metrics</p>
          <h2 className="text-4xl font-bold">Measurable Results at Scale</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, idx) => {
            const Icon = impact.icon
            return (
              <Card key={idx} className="glow-border bg-background/50 p-6 space-y-4 card-hover flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-3xl font-bold text-accent">{impact.value}</p>
                  <p className="font-semibold text-foreground">{impact.label}</p>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
