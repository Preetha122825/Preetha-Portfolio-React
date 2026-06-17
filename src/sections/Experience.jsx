import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { certifications } from '../data/portfolio'

export default function Experience({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className={`section-padding ${isDark ? 'bg-dark' : 'bg-slate-50'}`}>
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Credentials</span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-primary/30'
                  : 'bg-white border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {cert.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className={`font-display font-bold text-base leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.issuer}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${
                    isDark ? 'bg-primary/10 text-primary' : 'bg-primary/5 text-primary border border-primary/20'
                  }`}>
                    {cert.date}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {cert.description}
                </p>
              </div>

              {/* Badge line */}
              <div className={`mt-4 pt-4 border-t flex items-center gap-2 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${cert.color}`} />
                <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
