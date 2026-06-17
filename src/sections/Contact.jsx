import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { contactInfo } from '../data/portfolio'

export default function Contact({ isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${
    isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-primary/60 focus:bg-white/8'
      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white'
  }`

  return (
    <section id="contact" className={`section-padding ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Get In Touch</span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className={`mt-6 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className={`font-display font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Reach out through any of the channels below. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5'
                      : 'bg-slate-50 border border-slate-200 hover:border-primary/40 hover:bg-primary/5'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{info.label}</p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className={`p-5 rounded-2xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Open to freelance projects, and full-time opportunities.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
              }`}>
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <h3 className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-2">
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`rounded-2xl p-8 space-y-4 ${
                  isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Collaboration"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
