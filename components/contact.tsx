'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import type React from 'react'
import { useCallback, useState } from 'react'
import Turnstile from './Turnstile'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [token, setToken] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
    setToken(null)
    window.dispatchEvent(new Event('turnstile-reset'))
  }

  const handleVerify = useCallback((t: string) => {
    setToken(t)
  }, [])

  return (
    <motion.section
      id="contact"
      className="border-border overflow-x-hidden border-t px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-highlight text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              <span className="gradient-text-bright inline-block">
                Let's Talk
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.form
              onSubmit={handleSubmit}
              className="min-w-0 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent transition-smooth w-full rounded-lg border px-4 py-2 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent transition-smooth w-full rounded-lg border px-4 py-2 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent transition-smooth w-full resize-none rounded-lg border px-4 py-2 focus:outline-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <div className="w-full overflow-x-hidden">
                <Turnstile
                  sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY as string}
                  onVerify={handleVerify}
                />
              </div>

              <div className="mt-4 flex w-full items-center justify-center">
                <motion.button
                  type="submit"
                  disabled={!token}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 font-semibold transition-transform focus:outline-none ${
                    token
                      ? 'border-foreground bg-foreground text-background hover:bg-primary hover:border-primary hover:scale-[1.02] active:scale-95'
                      : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-70'
                  }`}
                  whileHover={token ? { scale: 1.02 } : {}}
                  whileTap={token ? { scale: 0.98 } : {}}
                >
                  {token ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-pulse"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Send Message</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="h-4 w-4 opacity-60"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 4v8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>

            <motion.div
              className="min-w-0 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="space-y-3">
                <h3 className="text-accent text-lg font-semibold">
                  Connect With Me
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm
                  always happy to connect and discuss opportunities.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'cpe.sicatgio14@gmail.com',
                    href: 'mailto:cpe.sicatgio14@gmail.com',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/gsicat14',
                    href: 'https://www.linkedin.com/in/gsicat14/',
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    value: 'github.com/helpme14',
                    href: 'https://github.com/helpme14',
                  },
                  {
                    icon: Mail,
                    label: 'Phone',
                    value: '0997 371 5004',
                    href: 'tel:09973715004',
                  },
                ].map(({ icon: Icon, label, value, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="border-primary/40 bg-card/50 hover:border-accent hover:bg-card/70 flex w-full items-center gap-3 rounded-lg border p-3 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + idx * 0.1,
                      ease: 'easeOut',
                    }}
                    whileHover={{ scale: 1.03, x: 5 }}
                  >
                    <Icon className="text-accent h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-medium">
                        {label}
                      </p>
                      <p className="text-muted-foreground text-xs wrap-break-word">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
