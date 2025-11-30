"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Github, Heart } from "lucide-react"
import { motion } from "framer-motion"

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
    <motion.section
      id="projects"
      className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group relative rounded-lg border border-border bg-card p-6 transition-smooth hover:border-accent hover:bg-card/50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
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
                    <motion.button
                      onClick={(e) => handleLike(project.id, e)}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors"
                      aria-label={`Like ${project.title}`}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="h-4 w-4 animate-like" fill={likes[project.id] ? "currentColor" : "none"} />
                      <span className={likes[project.id] ? "text-red-500" : ""}>{likes[project.id] || 0}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating hearts container */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute animate-float-up"
            style={{
              left: `${heart.x}px`,
              top: `${heart.y}px`,
            }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heart className="h-6 w-6 text-red-500" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
