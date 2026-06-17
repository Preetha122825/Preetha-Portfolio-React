# Preetha K — Personal Portfolio

A modern, responsive, and professional personal portfolio website built with **React.js (Vite)** and **Tailwind CSS**.

## ✨ Features

- 🌙 Dark / Light Mode toggle
- ⚡ Framer Motion animations
- 📱 Mobile-first responsive design
- 🔍 SEO-friendly HTML structure
- 🎨 Glassmorphism effects
- 🚀 Fast Vite build system

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React** icons
- **React Router DOM**

## 📁 Folder Structure

```
src/
├── components/       # Navbar, Footer
├── sections/         # Hero, About, Skills, Projects, Experience, Services, Education, Contact
├── data/             # portfolio.js (all content data)
├── hooks/            # useTheme.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

All personal data (name, projects, skills, certifications, contact info) is stored in `src/data/portfolio.js` — update that file to personalize.

Replace the placeholder avatar in `Hero.jsx` with an actual profile image:
```jsx
<img src="/profile.jpg" alt="Preetha K" className="w-full h-full object-cover" />
```

## 📄 Color Palette

| Name      | Hex       |
|-----------|-----------|
| Primary   | `#2563EB` |
| Secondary | `#7C3AED` |
| Accent    | `#06B6D4` |
| Dark BG   | `#0F172A` |
| Light Text| `#F8FAFC` |
