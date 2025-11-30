import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Next.js',
      'Vue.js',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'REST APIs',
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Software Engineering',
    skills: [
      'System Design',
      'Data Structures',
      'Algorithms',
      'Design Patterns',
      'Testing',
      'Documentation',
    ],
  },
]

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="border-border relative overflow-hidden border-t px-4 py-32 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="bg-primary/10 absolute top-1/4 -right-32 h-64 w-64 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="border-accent/40 bg-accent/10 text-accent inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />{' '}
              Expertise
            </span>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="from-primary via-accent to-primary bg-linear-to-r bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm sm:text-base">
              A curated stack I use to build fast, scalable, maintainable
              products.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                className="group border-border bg-card/60 relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -6 }}
              >
                <motion.div className="from-primary/5 via-accent/5 to-primary/5 absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.h3 className="text-accent relative z-10 mb-4 flex items-center gap-2 text-lg font-semibold">
                  <span className="bg-accent h-2 w-2 rounded-full" />
                  {category.category}
                </motion.h3>
                <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="group/skill border-border bg-secondary/40 text-foreground hover:border-accent hover:bg-accent/20 hover:text-accent relative flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIdx * 0.15 + skillIdx * 0.04,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.05 }}
                      aria-label={skill}
                    >
                      {skill}
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
