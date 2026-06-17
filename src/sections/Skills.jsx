import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillCategories } from '../data/portfolio'

function SkillCard({ category, isDark, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group ${
        isDark
          ? 'bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8'
          : 'bg-white border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
          {category.icon}
        </div>
        <h3 className={`font-display font-semibold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {category.category}
        </h3>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 cursor-default ${
              isDark
                ? 'bg-white/8 text-slate-300 border border-white/10 hover:border-primary/40 hover:text-primary hover:bg-primary/10'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-primary/40 hover:text-primary hover:bg-primary/5'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className={`section-padding ${isDark ? 'bg-dark' : 'bg-slate-50'}`}>
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-primary' : 'text-primary'}`}>
            Technical Skills
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="text-gradient">Expertise</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className={`mt-6 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            A diverse skill set spanning design, development, and digital optimization — everything needed to build exceptional web experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} category={cat} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
