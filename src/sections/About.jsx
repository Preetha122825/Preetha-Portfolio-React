import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/portfolio'

function StatCard({ stat, isDark, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`gradient-border p-5 rounded-2xl text-center hover:scale-105 transition-transform duration-300 ${
        isDark ? 'bg-dark' : 'bg-white shadow-sm'
      }`}
    >
      <div className="text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
      <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
    </motion.div>
  )
}

export default function About({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={`section-padding ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-primary' : 'text-primary'}`}>
            About Me
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Who I <span className="text-gradient">Am</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                I'm <strong className={isDark ? 'text-white' : 'text-slate-900'}>Preetha K</strong>, a passionate Computer Science and Engineering student with a strong drive for creating beautiful, functional, and high-performance web experiences.
              </p>
              <p>
                My expertise spans across <span className="text-primary font-medium">Web Design</span>, <span className="text-secondary font-medium">Full Stack Development</span>, <span className="text-accent font-medium">Wordpress Design</span>, and <span className="text-primary font-medium">SEO Optimization</span> — giving me a unique ability to build websites that not only look great but also rank well and perform exceptionally.
              </p>
              <p>
                I believe in writing clean, accessible, and maintainable code. Every project I work on is crafted with attention to detail, user experience, and business goals in mind.
              </p>
            </div>

            {/* Career Objective */}
            <div className={`p-6 rounded-2xl border-l-4 border-primary ${isDark ? 'bg-primary/5 border border-primary/20' : 'bg-primary/5'}`}>
              <h3 className={`font-display font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Career Objective</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                To work as a Web Designer, Front-End Developer, or Full Stack Developer where I can leverage my technical skills and creativity to build innovative web solutions while continuing to grow professionally.
              </p>
            </div>

            {/* Education */}
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h3 className={`font-display font-semibold text-lg mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>🎓 Education</h3>
              <div>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Bachelor of Engineering — Computer Science
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>2021 – 2025</p>
                <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Specializing in Web Technologies & Software Engineering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right – Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} isDark={isDark} index={i} />
              ))}
            </div>

            {/* Specializations */}
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h3 className={`font-display font-semibold text-lg mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                What I Specialize In
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🎨', label: 'Wordpress Design' },
                  { icon: '💻', label: 'Web Development' },
                  { icon: '📱', label: 'Responsive Design' },
                  { icon: '🔍', label: 'SEO Optimization' },
                  { icon: '⚡', label: 'Performance' },
                  { icon: '🎯', label: 'Landing Pages' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-sm ${
                      isDark ? 'bg-white/5 text-slate-300' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
