import { ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
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
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis", "TailwindCSS"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group relative rounded-xl border border-border bg-card p-6 overflow-hidden"
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15, 
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 0.8 }}
                />
                
                <div className="relative z-10"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-xl font-bold text-foreground group-hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <motion.span 
                          key={tech} 
                          className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.link}
                        className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Live Demo 
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Code <Github className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
