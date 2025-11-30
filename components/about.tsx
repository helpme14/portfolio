import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <motion.section
      ref={ref}
      id="about"
      className="px-4 py-32 sm:px-6 lg:px-8 border-t border-border relative"
      style={{ scale, opacity }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
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
              About Me
            </motion.span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-bold">
              <motion.span
                className="inline-block bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Who I Am
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              {[
                {
                  title: "Experience",
                  content: "5+ years building scalable web applications and distributed systems with React, Node.js, and cloud technologies."
                },
                {
                  title: "Focus Areas",
                  content: "Full-stack development, system design, performance optimization, and modern software architecture."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="group relative rounded-xl border border-border bg-card p-6 overflow-hidden"
                  initial={{ opacity: 0, x: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <h3 className="font-bold text-accent mb-3 text-lg relative z-10">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
