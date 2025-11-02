"use client"

import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">About Me</p>
          <h2 className="text-4xl font-bold">Senior Data Scientist & AI Systems Architect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glow-border bg-background/50 p-6 space-y-4 card-hover">
            <h3 className="text-xl font-semibold text-accent">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Senior Data Scientist with expertise in building and deploying scalable Machine Learning and
              Generative AI systems. My career spans finance and technology, where I've designed enterprise-grade AI
              platforms, optimized ML pipelines, and mentored teams in data science best practices.
            </p>
          </Card>

          <Card className="glow-border bg-background/50 p-6 space-y-4 card-hover">
            <h3 className="text-xl font-semibold text-accent">Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in bridging cutting-edge AI research with practical business outcomes. My focus is on building
              systems that are not just technically sound, but also deliver measurable impact at scale. Transparency,
              scalability, and user-centricity drive my work.
            </p>
          </Card>
        </div>

        <Card className="glow-border bg-background/50 p-8 space-y-4">
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="space-y-2">
            <p className="font-semibold text-lg">B.Tech in Electrical and Electronics Engineering</p>
            <p className="text-muted-foreground">Indian Institute of Technology (IIT) Guwahati | 2013–2017</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
