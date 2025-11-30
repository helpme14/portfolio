import { About } from '../components/about'
import { Contact } from '../components/contact'
import { CursorGlow } from '../components/cursor-glow'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Projects } from '../components/projects'
import { Skills } from '../components/skills'

function App() {
  return (
    <>
      <CursorGlow />
      <main className="relative min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
