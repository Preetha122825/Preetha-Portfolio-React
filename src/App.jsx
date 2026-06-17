import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-dark text-light' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Services isDark={isDark} />
        <Education isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}
