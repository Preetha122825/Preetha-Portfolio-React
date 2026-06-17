// data/portfolio.js

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Websites Designed', value: '8+' },
  { label: 'Websites Developed', value: '6+' },
  { label: 'SEO Projects', value: '4+' },
  { label: 'Certifications', value: '5+' },
]

export const skillCategories = [
  {
    category: 'Web Design',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    skills: ['UI/UX Design', 'Responsive Design', 'Figma', 'Wireframing', 'Website Layout Design'],
  },
  {
    category: 'Frontend Development',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: 'from-violet-500 to-purple-500',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'SEO & Digital Optimization',
    icon: '🔍',
    color: 'from-orange-500 to-amber-500',
    skills: ['On-Page SEO', 'Technical SEO', 'Keyword Research', 'Website Audits', 'Google Search Console', 'Google Analytics', 'Core Web Vitals', 'Performance Optimization'],
  },
  {
    category: 'Programming Languages',
    icon: '🖥️',
    color: 'from-indigo-500 to-blue-500',
    skills: ['JavaScript', 'Python', 'Java'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Business Website Development',
    description: 'A fully responsive, SEO-optimized business website featuring modern UI/UX principles, mobile-first design, fast load times, and structured data for better search engine visibility.',
    image: null,
    gradient: 'from-blue-600 to-cyan-500',
    emoji: '🏢',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    highlights: ['Responsive Design', 'SEO Optimized', 'Modern UI/UX', 'Mobile-Friendly'],
    live: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Shipment Management System',
    description: 'A full-stack logistics management platform to handle sender/receiver details, track shipments in real-time, and manage delivery workflows with a clean dashboard interface.',
    image: null,
    gradient: 'from-violet-600 to-purple-500',
    emoji: '📦',
    tags: ['React', 'Node.js', 'MySQL'],
    highlights: ['Sender Management', 'Receiver Management', 'Shipment Tracking', 'Dashboard'],
    live: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'A premium personal portfolio built with React and Tailwind CSS, featuring dark/light mode toggle, smooth Framer Motion animations, and performance-optimized assets.',
    image: null,
    gradient: 'from-pink-500 to-rose-500',
    emoji: '🌐',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    highlights: ['Dark/Light Mode', 'Responsive Layout', 'Performance Optimized', 'Modern Design'],
    live: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'SEO Website Optimization',
    description: 'Comprehensive SEO audit and optimization project improving website rankings through keyword strategy, page speed enhancements, meta optimization, and Google Search Console integration.',
    image: null,
    gradient: 'from-orange-500 to-amber-500',
    emoji: '📈',
    tags: ['Google Analytics', 'Search Console', 'SEO Tools'],
    highlights: ['Website Audit', 'Keyword Optimization', 'Page Speed Improvements', 'Search Console'],
    live: '#',
    demo: '#',
  },
]

export const certifications = [
  {
    title: 'Web Development Internship',
    issuer: 'Tech Company',
    date: '2024',
    icon: '💼',
    color: 'from-blue-500 to-cyan-400',
    description: 'Hands-on internship developing real-world web applications using modern technologies.',
  },
  {
    title: 'Front-End Development Certification',
    issuer: 'Online Platform',
    date: '2024',
    icon: '🎖️',
    color: 'from-violet-500 to-purple-400',
    description: 'Certified in HTML, CSS, JavaScript, and React for building responsive web interfaces.',
  },
  {
    title: 'SEO Fundamentals Certification',
    issuer: 'Google / SEMrush',
    date: '2023',
    icon: '🔍',
    color: 'from-orange-500 to-amber-400',
    description: 'Certified in on-page SEO, technical SEO, keyword research, and analytics.',
  },
  {
    title: 'Python Programming Certification',
    issuer: 'Online Platform',
    date: '2023',
    icon: '🐍',
    color: 'from-green-500 to-emerald-400',
    description: 'Proficient in Python programming, data structures, and scripting.',
  },
  {
    title: 'Data Structures Certification',
    issuer: 'Online Platform',
    date: '2023',
    icon: '📊',
    color: 'from-pink-500 to-rose-400',
    description: 'Completed advanced data structures and algorithm course with hands-on projects.',
  },
]

export const services = [
  {
    icon: '🎨',
    title: 'Web Design',
    color: 'from-pink-500 to-rose-500',
    items: ['Modern UI/UX Design', 'Responsive Website Design', 'Landing Page Design', 'Wireframing & Prototyping'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    items: ['Business Websites', 'Portfolio Websites', 'React Applications', 'Custom Web Solutions'],
  },
  {
    icon: '🔍',
    title: 'SEO Services',
    color: 'from-orange-500 to-amber-500',
    items: ['Website SEO Audit', 'On-Page SEO', 'Technical SEO', 'Website Speed Optimization', 'Search Engine Ranking'],
  },
]

export const education = [
  {
    year: '2022 – 2026',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: 'University / College Name',
    description: 'Specializing in Web Technologies, Software Engineering, and Data Structures. Pursuing projects in full-stack development and SEO optimization.',
    achievements: ['Consistent Academic Performance', 'Technical Project Leadership', 'Web Development Club Member'],
  },
]

export const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'preethacse25@gmail.com', href: 'mailto:preethcse25@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/preethaK', href: 'https://www.linkedin.com/in/preethak2025/' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/preethaK', href: 'https://github.com/Preetha122825/' },
]
