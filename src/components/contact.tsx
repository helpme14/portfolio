
"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"

interface FormData {
  name: string
  email: string
  message: string
}


export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.section
      id="contact"
      className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="space-y-12"
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
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Let's Talk</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
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
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
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
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
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
              <motion.button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-foreground transition-smooth hover:bg-primary/90"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Connect With Me</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always happy to connect and discuss
                  opportunities.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "your.email@example.com",
                    href: "mailto:your.email@example.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/yourprofile",
                    href: "#",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "github.com/yourprofile",
                    href: "#",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    value: "@yourhandle",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, value, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-smooth hover:border-accent hover:bg-card/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.04 }}
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
        </motion.div>
      </div>
    </motion.section>
  )
}
