export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Me</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">Who I Am</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            </div>

            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
