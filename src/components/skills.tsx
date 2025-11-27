"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "TailwindCSS", "Vite", "Vue.js", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Software Engineering",
    skills: ["System Design", "Data Structures", "Algorithms", "Design Patterns", "Testing", "Documentation"],
  },
]

export function Skills() {
  const [likedSkills, setLikedSkills] = useState<Set<string>>(new Set())

  const toggleSkillLike = (skill: string) => {
    setLikedSkills((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(skill)) {
        newSet.delete(skill)
      } else {
        newSet.add(skill)
      }
      return newSet
    })
  }

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Expertise</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Skills & Technologies</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.category} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isLiked = likedSkills.has(skill)
                    return (
                      <button
                        key={skill}
                        onClick={() => toggleSkillLike(skill)}
                        className={`group flex items-center gap-2 rounded-full border transition-smooth px-3 py-1 text-sm font-medium
                          ${
                            isLiked
                              ? "border-red-500 bg-red-500/10 text-red-500"
                              : "border-border bg-secondary/50 text-foreground hover:border-accent hover:bg-secondary"
                          }
                        `}
                      >
                        {skill}
                        <Heart
                          className={`h-3 w-3 transition-transform ${isLiked ? "scale-110" : ""}`}
                          fill={isLiked ? "currentColor" : "none"}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
