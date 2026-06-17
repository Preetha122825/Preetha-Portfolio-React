import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { services } from '../data/portfolio'

export default function Services({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className={`section-padding ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">What I Offer</span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className={`mt-6 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            End-to-end web solutions — from design to development to search engine optimization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-primary/30'
                  : 'bg-white border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Background glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className={`font-display font-bold text-xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>

              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-6 w-full py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  isDark
                    ? 'border-white/10 text-slate-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary'
                    : 'border-slate-200 text-slate-600 hover:border-primary hover:bg-primary/5 hover:text-primary'
                }`}
              >
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
