import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { CursorGlow } from "../components/cursor-glow"

function App() {
  return (
    <>
      <CursorGlow />
      <main className="min-h-screen relative">
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
