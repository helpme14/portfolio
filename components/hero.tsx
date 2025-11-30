import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Subtle Background Gradient Orbs - minimalistic */}
      <div
        className="absolute top-10 left-6 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 194, 255, 0.12)' }}
      />
      <div
        className="absolute right-6 bottom-10 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 194, 255, 0.1)' }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div className="bg-grid-white/[0.01] absolute inset-0 bg-size-[50px_50px]" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-border bg-card mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-normal backdrop-blur-sm"
            aria-label="Online availability"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{' '}
            <motion.span
              className="gradient-text-bright inline-block"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              GIO SICAT
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg sm:text-xl"
          >
            Building clean, fast web apps end-to-end. I care about minimal UI,
            accessible design, and reliable backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group bg-foreground text-background border-foreground hover:bg-primary hover:border-primary inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="group text-foreground border-border hover:border-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-lg border bg-transparent px-6 py-3 text-sm font-medium transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <Download className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="group flex flex-col items-center gap-2">
          <span className="text-muted-foreground group-hover:text-primary text-sm font-medium transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="border-primary/50 group-hover:border-primary rounded-full border-2 p-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
