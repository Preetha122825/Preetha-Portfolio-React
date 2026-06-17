import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, CheckCircle } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project, isDark, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
        isDark
          ? 'bg-white/5 border border-white/10 hover:border-primary/30'
          : 'bg-white border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl'
      }`}
    >
      {/* Image / Preview */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }} />
        <span className="text-7xl select-none relative z-10 group-hover:scale-110 transition-transform duration-500">
          {project.emoji}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className={`font-display font-bold text-lg leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-1.5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5">
              <CheckCircle size={12} className="text-primary flex-shrink-0" />
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                isDark
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-primary/5 text-primary border border-primary/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-1">
          <a
            href={project.live}
            className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.demo}
            className={`flex items-center gap-1.5 text-xs py-2 px-4 rounded-xl font-medium border transition-all flex-1 justify-center ${
              isDark
                ? 'border-white/10 text-slate-300 hover:border-primary/40 hover:text-primary'
                : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
            }`}
          >
            <Github size={13} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className={`section-padding ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">My Work</span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className={`mt-6 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            A selection of projects showcasing my skills in design, development, and SEO optimization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
