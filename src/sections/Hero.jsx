import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ExternalLink, Github, Linkedin } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Hero({ isDark }) {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? 'bg-dark' : 'bg-slate-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                isDark
                  ? 'border-primary/30 bg-primary/10 text-primary'
                  : 'border-primary/30 bg-primary/5 text-primary'
              }`}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp}>
              <p className={`text-lg font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Hi there 👋, I'm
              </p>
              <h1 className="font-display font-bold leading-none">
                <span className={`text-6xl sm:text-7xl block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Preetha
                </span>
                <span className="text-6xl sm:text-7xl block text-gradient">K.</span>
              </h1>
            </motion.div>

            {/* Roles */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {['Web Designer', 'Frontend Dev', 'Full Stack Dev', 'SEO Analyst'].map((role) => (
                <span
                  key={role}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className={`text-base leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Passionate Computer Science Engineering student specializing in Web Design, Web Development, and SEO Optimization. I enjoy creating responsive, user-friendly websites that combine attractive design, excellent performance, and strong search engine visibility.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => handleScroll('projects')}
                className="btn-primary"
              >
                <ExternalLink size={16} />
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className={isDark ? 'btn-outline' : 'btn-outline-dark'}
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll('contact')}
                className={isDark ? 'btn-outline' : 'btn-outline-dark'}
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <a href="https://github.com/Preetha122825/" target="_blank" rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                  isDark ? 'border-white/10 text-slate-300 hover:border-primary/40 hover:text-primary hover:bg-primary/10' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                }`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/preethak2025/" target="_blank" rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                  isDark ? 'border-white/10 text-slate-300 hover:border-blue-400/40 hover:text-blue-400 hover:bg-blue-400/10' : 'border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-500'
                }`}>
                <Linkedin size={20} />
              </a>
              <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                CS Engineering Student
              </span>
            </motion.div>
          </motion.div>

          {/* Right – Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px]">
                <div className={`w-full h-full rounded-full ${isDark ? 'bg-dark' : 'bg-slate-50'}`} />
              </div>

              {/* Avatar container */}
              <div className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center animate-float`}>
                {/* Placeholder avatar with initials */}
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 flex flex-col items-center justify-center">
                  <span className="text-8xl font-display font-bold text-gradient select-none"><img
  src="/profile.jpeg"
  alt="Preetha K"
  className="w-full h-full object-cover object-center"
/></span>
                  <span className={`text-sm mt-2 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Preetha K
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-2 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl ${
                  isDark ? 'bg-dark border border-white/10 text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                <span>⚡</span> React Developer
              </motion.div>
              <motion.div
                animate={{ y: [8, 0, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -bottom-2 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl ${
                  isDark ? 'bg-dark border border-white/10 text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                <span>🔍</span> SEO Expert
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className={isDark ? 'text-slate-500' : 'text-slate-400'} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
