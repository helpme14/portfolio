import { motion } from "framer-motion"

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
    <motion.section
      id="skills"
      className="px-4 py-32 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="text-sm font-semibold text-accent uppercase tracking-widest inline-block"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Expertise
            </motion.span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-bold">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 overflow-hidden"
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: catIdx * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.h3 
                  className="mb-6 text-2xl font-bold text-accent relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.15 + 0.2 }}
                >
                  {category.category}
                </motion.h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="group/skill relative rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground overflow-hidden"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIdx * 0.15 + skillIdx * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: "var(--accent)",
                        backgroundColor: "var(--accent)",
                        color: "var(--accent-foreground)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                        whileHover={{ translateX: "200%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
