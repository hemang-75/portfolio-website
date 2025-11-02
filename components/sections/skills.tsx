"use client"

import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Languages & Tools",
    skills: "Python, SQL, TypeScript, AWS, Azure, GCP, Airflow, Docker, FastAPI, Pinecone, Snowflake, Databricks",
  },
  {
    category: "ML Frameworks",
    skills:
      "PyTorch, TensorFlow, Hugging Face, LangChain, LangGraph, Neo4j, PySpark, Pydantic, DSPy, CrewAI, LlamaIndex",
  },
  {
    category: "GenAI & LLMs",
    skills:
      "LLMs (Llama, Mistral, Claude, Gemini), AWS Bedrock, GCP Vertex AI, AI Agents, RAG, AutoGen, MCP, Google ADK, Multimodal AI, Fine-tuning (LoRA, RLHF), Prompt Engineering",
  },
  {
    category: "MLOps & DevOps",
    skills:
      "CI/CD, MLflow, SageMaker, Kubernetes, Terraform, A/B Testing, Model Monitoring, ML Pipelines, Grafana, Streamlit",
  },
]

export function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Technical Expertise</p>
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="glow-border bg-background/50 p-6 card-hover space-y-3">
              <h3 className="text-lg font-semibold text-accent">{category.category}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{category.skills}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
