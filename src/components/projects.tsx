"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Github, Heart } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management system with real-time updates, team workspaces, and intelligent task prioritization.",
    technologies: ["React", "Firebase", "TypeScript", "Zustand", "TailwindCSS"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Data visualization platform for business intelligence with custom charts, real-time data streaming, and export capabilities.",
    technologies: ["React", "D3.js", "PostgreSQL", "Redis", "TailwindCSS"],
    link: "#",
    github: "#",
  },
]

interface FloatingHeart {
  id: number
  x: number
  y: number
}

export function Projects() {
  const [likes, setLikes] = useState<Record<number, number>>({})
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([])
  const [heartIdCounter, setHeartIdCounter] = useState(0)

  const handleLike = (projectId: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newHeartId = heartIdCounter + 1
    setHeartIdCounter(newHeartId)

    setFloatingHearts((prev) => [
      ...prev,
      {
        id: newHeartId,
        x: rect.left - 30,
        y: rect.top - 30,
      },
    ])

    // Remove floating heart after animation
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeartId))
    }, 600)

    // Increment like count
    setLikes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }))
  }

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-lg border border-border bg-card p-6 transition-smooth hover:border-accent hover:bg-card/50"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                      >
                        Live Demo <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                      >
                        Code <Github className="h-4 w-4" />
                      </a>
                    </div>
                    <button
                      onClick={(e) => handleLike(project.id, e)}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors"
                      aria-label={`Like ${project.title}`}
                    >
                      <Heart className="h-4 w-4 animate-like" fill={likes[project.id] ? "currentColor" : "none"} />
                      <span className={likes[project.id] ? "text-red-500" : ""}>{likes[project.id] || 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating hearts container */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float-up"
            style={{
              left: `${heart.x}px`,
              top: `${heart.y}px`,
            }}
          >
            <Heart className="h-6 w-6 text-red-500" fill="currentColor" />
          </div>
        ))}
      </div>
    </section>
  )
}
