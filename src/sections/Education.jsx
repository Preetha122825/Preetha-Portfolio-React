import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const journey = [
  {
    year: '2021',
    event: 'Started B.E. Computer Science',
    detail: 'Enrolled in Bachelor of Engineering program, focusing on CS fundamentals, mathematics, and programming.',
    icon: '🎓',
  },
  {
    year: '2023',
    event: 'Certifications',
    detail: 'Completed Python Programming, Data Structures certifications.',
    icon: '🏆',
  },
  // {
  //   year: '2024',
  //   event: 'React, Node.js & SEO Mastery',
  //   detail: 'Learned React.js, Node.js, and full-stack development. Earned Front-End Development and SEO Fundamentals certifications.',
  //   icon: '⚡',
  // },
  {
    year: '2024',
    event: 'Web Development Internship',
    detail: 'Hands-on industry experience developing real-world web applications, collaborating in professional environments.',
    icon: '💼',
  },
  {
    year: '2025',
    event: 'Advanced Projects & Portfolio',
    detail: 'Built Shipment Management System, Business Website, and Personal Portfolio with modern tech stack.',
    icon: '🚀',
  },
  {
    year: '2025',
    event: 'Graduation & Career Launch',
    detail: 'Completing degree and launching professional career as Web Designer, Developer, and SEO Analyst.',
    icon: '🌟',
  },
  {
    year:'2026',
    event: 'Web designer and developer Internship',
    detail: 'Started my professional career as an intern, where I learned web development, web design, WordPress, and SEO optimization while working on real-world projects.'
  }
]

export default function Education({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className={`section-padding ${isDark ? 'bg-dark' : 'bg-slate-50'}`}>
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Academic Journey</span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Education & <span className="text-gradient">Timeline</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className={`rounded-2xl p-8 mb-12 gradient-border ${isDark ? 'bg-dark' : 'bg-white'}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
              🎓
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Bachelor of Engineering — Computer Science & Engineering
                  </h3>
                  <p className={`mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>University / College Name</p>
                </div>
                <span className="px-3 py-1.5 rounded-xl text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                  2021 – 2025
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Web Technologies', 'Software Engineering', 'Data Structures', 'Algorithms', 'Database Systems'].map(tag => (
                  <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-slate-50 text-slate-600 border border-slate-200'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

          <div className="space-y-8">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`relative flex flex-col sm:flex-row gap-4 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className={`rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:border-primary/30'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.year}</span>
                    </div>
                    <h4 className={`font-display font-semibold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.event}
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-dark flex items-center justify-center shadow-md shadow-primary/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
