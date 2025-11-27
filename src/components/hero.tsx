export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-foreground">Full Stack</span> <span className="text-accent">Engineer</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
              Crafting scalable web applications and elegant software solutions. I specialize in building performant,
              user-centric digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-foreground transition-smooth hover:bg-primary/90"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-transparent px-6 py-3 font-semibold text-accent transition-smooth hover:bg-accent/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
