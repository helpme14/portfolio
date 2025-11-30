
import { motion } from "framer-motion"

export function About() {
  return (
    <motion.section
      id="about"
      className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="space-y-8"
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
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Me</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Who I Am</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p>
                I'm a computer engineer passionate about creating elegant, performant software solutions. With a deep
                foundation in computer science, I bridge the gap between complex backend systems and intuitive user
                interfaces.
              </p>
              <p>
                My journey spans full-stack development, working on everything from architectural design to
                pixel-perfect UI implementations. I thrive on solving challenging problems and continuously learning new
                technologies.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-accent mb-3">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  5+ years building scalable web applications and distributed systems with React, Node.js, and cloud
                  technologies.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-accent mb-3">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, system design, performance optimization, and modern software architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
