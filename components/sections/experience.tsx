"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Invesco",
    location: "Hyderabad, India",
    period: "Apr 2021 – Present",
    highlights: [
      "Built IVYGPT, enterprise GenAI platform with LLMs and AI Agents (8,000+ users)",
      "Designed AI Agent evaluation framework (LangSmith, RAGAS) reducing QA by 80%",
      "Developed commentary generator pipeline with 95% accuracy (2 weeks → 10 min)",
      "Mentored 20+ professionals in Citizen Data Scientist program",
      "Fine-tuned DistilBERT for ESG classification (92% accuracy, 0.94 AUC)",
    ],
    skills: ["LLMs", "AI Agents", "RAG", "Langchain", "NLP", "Langgraph", "SQL", "AWS", "Azure", "LangSmith", "Python"],
  },
  {
    title: "Data Scientist",
    company: "Decimal Point Analytics",
    location: "Mumbai, India",
    period: "Aug 2019 – Mar 2021",
    highlights: [
      "Developed R-CNN-based table extraction processing 100K+ PDFs",
      "Automated AWS workflows reducing costs by 40%",
      "Built news recommendation models with >90% accuracy",
      "Saved 100+ hours/month through automation",
    ],
    skills: ["Computer Vision", "R-CNN", "AWS", "Python", "Deep Learning"],
  },
  {
    title: "Software Engineer",
    company: "Samsung",
    location: "Noida, India",
    period: "Jun 2017 – Jul 2019",
    highlights: [
      "Led R&D for Android Sound Quality (Dolby ATMOS, SoundAlive)",
      "Deployed AI tools to millions of Samsung devices globally",
      "Built context-aware music recommender using hybrid filtering",
      "Optimized audio processing algorithms for mobile devices",
    ],
    skills: ["Audio Processing", "Mobile AI", "Recommendation Systems", "C++", "Python"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Career</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="glow-border bg-background/50 p-8 card-hover space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-accent">{exp.title}</h3>
                  <p className="text-lg text-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
