import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const { setTheme, resolvedTheme } = useTheme()

  return (
    <header className="border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="from-primary to-accent shadow-primary/20 group-hover:shadow-primary/40 h-9 w-9 rounded-xl bg-linear-to-br shadow-lg transition-all" />
          <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-xl font-bold text-transparent">
            &lt;GS/&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-accent group relative text-sm font-medium transition-colors"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
              <span className="bg-accent absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
            </a>
          ))}
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle dark mode"
            className="border-border bg-secondary/50 text-muted-foreground hover:border-accent hover:bg-accent/10 hover:text-accent ml-2 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="hidden lg:inline">
              {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 md:hidden"
        >
          {isOpen ? (
            <X className="text-foreground h-6 w-6" />
          ) : (
            <Menu className="text-foreground h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-border bg-card border-t md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-smooth hover:text-accent px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Mobile Theme Toggle */}
            <button
              aria-label="Toggle dark mode"
              className="hover:bg-accent/20 text-muted-foreground mt-2 flex items-center gap-2 rounded-lg p-2 text-sm font-medium transition-colors"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {resolvedTheme === 'dark' ? (
                <>
                  <Sun className="text-accent h-5 w-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="text-accent h-5 w-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
