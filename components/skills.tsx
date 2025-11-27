const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Vue.js", "Responsive Design"],
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
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-foreground hover:border-accent hover:bg-secondary transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
