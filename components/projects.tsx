import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'

import type { ReactNode } from 'react'
type TechMeta = {
  name: string
  color: string // tailwind classes for text color
  bg: string // tailwind classes for badge background
  icon: ReactNode
}

// Inline SVG icons with accessible titles
const techIcons = {
  Python: {
    name: 'Python',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        {/* Simplified Python logo: blue/yellow intertwined shapes */}
        <path
          d="M12 4c-3.5 0-4 1.5-4 3.5v2h4v1.5c0 1.1-.9 2-2 2H6c-1.7 0-3-1.3-3-3V8C3 5 5.5 4 9 4h3Z"
          fill="#3776AB"
        />
        <circle cx="8.5" cy="6.5" r="0.8" fill="#fff" />
        <path
          d="M12 20c3.5 0 4-1.5 4-3.5v-2h-4V13c0-1.1.9-2 2-2h4c1.7 0 3 1.3 3 3v1.5c0 3-2.5 4-6 4h-3Z"
          fill="#FFD43B"
        />
        <circle cx="15.5" cy="17.5" r="0.8" fill="#fff" />
      </svg>
    ),
  },
  Laravel: {
    name: 'Laravel',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M4 8 12 4l8 4v8l-8 4-8-4V8Z"
          stroke="#FF2D20"
          strokeWidth="1.4"
        />
        <path
          d="M8 9.5 12 8l4 1.5v5L12 16l-4-1.5v-5Z"
          stroke="#FF2D20"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  Tkinter: {
    name: 'Tkinter',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" className="fill-primary/40" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
        >
          Tk
        </text>
      </svg>
    ),
  },
  Java: {
    name: 'Java',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M8 18c3.5 1.5 7.5 1.5 11 0"
          stroke="#E76F00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 2c1 2 1 3 0 5s-1 3 0 5"
          stroke="#E76F00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  'Digital Signature': {
    name: 'Digital Signature',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M4 4h16v12H5.5L4 17.5V4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 11h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  pnpki: {
    name: 'pnpki',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M12 3 3 9l9 6 9-6-9-6Zm0 12-9-6v6l9 6 9-6v-6l-9 6Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  Django: {
    name: 'Django',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <rect width="24" height="24" rx="4" fill="#0C4B33" />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fontSize="8"
          fill="#fff"
          fontFamily="Arial"
        >
          Dj
        </text>
      </svg>
    ),
  },
  React: {
    name: 'React',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.1">
          <ellipse
            rx="7"
            ry="3.5"
            cx="12"
            cy="12"
            transform="rotate(60 12 12)"
          />
          <ellipse
            rx="7"
            ry="3.5"
            cx="12"
            cy="12"
            transform="rotate(-60 12 12)"
          />
          <ellipse rx="7" ry="3.5" cx="12" cy="12" />
        </g>
      </svg>
    ),
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M12 3c-4 0-7 2-7 6 0 5 3 10 7 12 4-2 7-7 7-12 0-4-3-6-7-6Z"
          stroke="#336791"
          strokeWidth="1.2"
          fill="#33679120"
        />
        <path
          d="M10 9h4M10 12h4"
          stroke="#336791"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  Vite: {
    name: 'Vite',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M12 2 3 7l9 15 9-15-9-5Z"
          stroke="#646CFF"
          strokeWidth="1.2"
          fill="#646CFF20"
        />
        <path
          d="M12 7v5"
          stroke="#FFD62E"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 14v2"
          stroke="#FFD62E"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  'Node.js': {
    name: 'Node.js',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"
          stroke="#83CD29"
          strokeWidth="1.2"
          fill="#83CD2920"
        />
        <path
          d="M10 9h4v6h-4"
          stroke="#83CD29"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  MySQL: {
    name: 'MySQL',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <path
          d="M5 18c3-2 3-6 7-8 2-1 4-1 6 0"
          stroke="#4479A1"
          strokeWidth="1.4"
        />
        <circle cx="6" cy="6" r="2" fill="#F29111" />
      </svg>
    ),
  },
  JWT: {
    name: 'JWT',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        {/* JWT starburst recognizable mark */}
        <path d="M12 2v6" stroke="#000" strokeWidth="2" />
        <path d="M12 16v6" stroke="#000" strokeWidth="2" />
        <path d="M2 12h6" stroke="#5E5E5E" strokeWidth="2" />
        <path d="M16 12h6" stroke="#5E5E5E" strokeWidth="2" />
        <path d="M5 5l4 4" stroke="#000" strokeWidth="2" />
        <path d="M15 15l4 4" stroke="#000" strokeWidth="2" />
        <path d="M19 5l-4 4" stroke="#5E5E5E" strokeWidth="2" />
        <path d="M9 15l-4 4" stroke="#5E5E5E" strokeWidth="2" />
      </svg>
    ),
  },
  DBeaver: {
    name: 'DBeaver',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        {/* Beaver head silhouette */}
        <path
          d="M6 12c0-3.5 2.9-6 6-6s6 2.5 6 6-2.9 6-6 6-6-2.5-6-6Z"
          fill="#C12127"
          fillOpacity="0.2"
          stroke="#C12127"
          strokeWidth="1.2"
        />
        <path
          d="M9 12c1 0 1.5-.5 3-.5s2 .5 3 .5"
          stroke="#C12127"
          strokeWidth="1.2"
        />
        <circle cx="9.5" cy="10" r="0.8" fill="#C12127" />
        <circle cx="14.5" cy="10" r="0.8" fill="#C12127" />
        <path
          d="M12 14c1.2 0 2 .6 2 1.2 0 .6-.8 1.2-2 1.2s-2-.6-2-1.2c0-.6.8-1.2 2-1.2Z"
          fill="#C12127"
        />
      </svg>
    ),
  },
  XAMPP: {
    name: 'XAMPP',
    color: 'text-foreground',
    bg: 'bg-transparent',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          fill="#FB7A24"
          fillOpacity="0.2"
          stroke="#FB7A24"
          strokeWidth="1.2"
        />
        <path
          d="M8 10c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4Z"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <path d="M10 12h4M11 11v2M13 11v2" stroke="#ffffff" strokeWidth="1.2" />
      </svg>
    ),
  },
} as Record<string, TechMeta>

const projects = [
  {
    id: 1,
    title: 'Payslip Generator & Digital Signature Bulk Signer',
    description:
      'A desktop tool built with Python (Tkinter) and Java integration for generating payslips and bulk-signing documents. Detects text dynamically and applies valid digital signatures (pnpki). Can sign 100+ documents in 5-10 seconds, boosting workflow efficiency.',
    technologies: ['Python', 'Tkinter', 'Java', 'Digital Signature', 'pnpki'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'eLeave - Leave Application & Administration System',
    description:
      'Engineered from planning, ERD, and flow to deployment. Streamlines leave requests, approvals, and admin management for organizations.',
    technologies: ['Laravel', 'React', 'MySQL', 'JWT', 'DBeaver', 'XAMPP'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'eACCESS - Web-based Kiosk for HRMDD',
    description:
      'Backend developer for eACCESS, a web-based kiosk that enables employees to easily access and process HRMDD requests and requirements at work.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Vite', 'Node.js'],
    link: '#',
    github: '#',
  },
]

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="border-border border-t px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              <span className="text-foreground">Featured</span>{' '}
              <span className="gradient-text-bright inline-block">
                Projects
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group border-border bg-card relative overflow-hidden rounded-xl border p-6"
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="from-primary/10 to-accent/10 absolute inset-0 bg-linear-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={false}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent"
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                <div
                  className="relative z-10"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="space-y-4">
                    <motion.h3
                      className="text-foreground group-hover:text-accent text-xl font-bold transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => {
                        const meta = techIcons[tech]
                        return (
                          <motion.span
                            key={tech}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                              meta?.bg || 'bg-muted'
                            } ${meta?.color || 'text-foreground'}`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                            whileHover={{ scale: 1.12 }}
                            aria-label={tech}
                          >
                            {meta?.icon && (
                              <span className="flex items-center justify-center">
                                {meta.icon}
                              </span>
                            )}
                            <span>{tech}</span>
                          </motion.span>
                        )
                      })}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.link}
                        className="text-foreground hover:text-foreground/80 flex items-center gap-1 text-sm font-medium transition-colors"
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
                        className="text-foreground hover:text-foreground/80 flex items-center gap-1 text-sm font-medium transition-colors"
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
