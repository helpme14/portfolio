import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8],
  )

  return (
    <motion.section
      ref={ref}
      id="about"
      className="border-border relative border-t px-4 py-32 sm:px-6 lg:px-8"
      style={{ scale, opacity }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="text-highlight inline-block text-sm font-semibold tracking-widest uppercase"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              About Me
            </motion.span>
            <h2 className="mt-4 text-5xl font-bold sm:text-6xl">
              <motion.span
                className="gradient-text-bright inline-block"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                Who I Am
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              className="text-muted-foreground space-y-4 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <p>
                I'm a computer engineer passionate about creating elegant,
                performant software solutions. With a deep foundation in
                computer science, I bridge the gap between complex backend
                systems and intuitive user interfaces.
              </p>
              <p>
                My journey spans full-stack development, working on everything
                from architectural design to pixel-perfect UI implementations. I
                thrive on solving challenging problems and continuously learning
                new technologies.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              {[
                {
                  title: 'Experience',
                  content:
                    'About 2 years building scalable web applications and distributed systems with React, Node.js, and cloud technologies.',
                },
                {
                  title: 'Focus Areas',
                  content:
                    'Full-stack development, system design, performance optimization, and modern software architecture.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="group border-border bg-card relative overflow-hidden rounded-xl border p-6"
                  initial={{ opacity: 0, x: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div className="from-accent/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <h3 className="text-accent relative z-10 mb-3 text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
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
