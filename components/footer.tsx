"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hemang Goyal. All rights reserved.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Built with React, Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
