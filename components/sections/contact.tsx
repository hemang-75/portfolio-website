"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    console.log("Form submitted:", formState)
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:goyalhemang75@gmail.com", value: "goyalhemang75@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", value: "LinkedIn" },
    { icon: Github, label: "GitHub", href: "https://github.com", value: "GitHub" },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase">Get In Touch</p>
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaborating or discussing AI/ML opportunities?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <Icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            })}
          </div>

          <Card className="glow-border bg-background/50 p-8 space-y-4">
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
