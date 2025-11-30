export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-border border-t px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} GioSicat.com. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
