"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Turnstile from "./Turnstile"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [token, setToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log(formData)
  setFormData({ name: "", email: "", message: "" })
  setToken(null)
  window.dispatchEvent(new Event("turnstile-reset"))
}

  const handleVerify = useCallback((t: string) => {
    setToken(t)
  }, [])

  return (
    <motion.section
      id="contact"
      className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Let's Talk</h2>
            <p className="mt-4 text-lg text-muted-foreground">I'm always interested in hearing about new projects and opportunities.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-smooth"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-smooth"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-smooth resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Turnstile sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY as string} onVerify={handleVerify} />

              <motion.button
                type="submit"
                disabled={!token}
                className={`w-full rounded-lg px-4 py-3 font-semibold text-primary-foreground transition-transform motion-safe:transform-gpu focus:outline-none ${
                  token
                    ? "bg-primary hover:scale-105 active:scale-95 shadow-md"
                    : "bg-primary/60 cursor-not-allowed opacity-70"
                } flex items-center justify-center gap-2`}
                whileHover={token ? { scale: 1.02 } : {}}
                whileTap={token ? { scale: 0.98 } : {}}
              >
                {token ? (
                  <>
                    <svg className="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Send Message</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Connect With Me</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels. I'm always happy to connect and discuss opportunities.</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "#" },
                  { icon: Github, label: "GitHub", value: "github.com/yourprofile", href: "#" },
                  { icon: Twitter, label: "Twitter", value: "@yourhandle", href: "#" },
                ].map(({ icon: Icon, label, value, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-smooth hover:border-accent hover:bg-card/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, x: 5 }}
                  >
                    <Icon className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{value}</p>
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
