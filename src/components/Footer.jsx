import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Footer({ isDark }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={`${isDark ? 'bg-dark border-t border-white/10' : 'bg-slate-900 border-t border-slate-800'}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Preetha<span className="text-gradient">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              CS Engineering Student passionate about creating beautiful, functional web experiences.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/Preetha122825/" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/preethak2025/" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="mailto:preethacse25@gmail.com"
                className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Let's Work Together</h4>
            <p className="text-sm text-slate-400 mb-4">
              Open to freelance projects, internships, and full-time roles.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm"
            >
              <Mail size={14} />
              Get In Touch
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Preetha K. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React.js & Tailwind CSS
          </p>
          <button
            onClick={scrollTop}
            className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
