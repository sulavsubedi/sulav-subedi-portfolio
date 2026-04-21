# sulav-subedi-portfolio

3D Interactive Portfolio for Sulav Subedi — Frontend Developer & SEO Strategist. Built with React, Three.js, Tailwind CSS & Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-0.164-black?logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-purple?logo=framer)
![Vite](https://img.shields.io/badge/Vite-5.2-green?logo=vite)

---

## Live Demo

🚀 **Coming Soon** — Deployed at [sulavsubedi.vercel.app](https://sulavsubedi.vercel.app)

---

## Features

- **3D Interactive Background** — Canvas-based particle system with connecting lines
- **Neon-Themed UI** — Cyberpunk-inspired color palette with cyan, purple, green & pink accents
- **Smooth Animations** — Framer Motion powered page transitions and micro-interactions
- **Custom Cursor Glow** — Animated cursor trail effect on desktop
- **Loading Screen** — Animated progress bar with brand identity
- **Responsive Design** — Mobile-first layout with Tailwind CSS breakpoints
- **SEO Optimized** — Complete meta tags, Open Graph & Twitter Card support
- **Contact Form** — Integrated with EmailJS for direct messaging
- **Project Showcase** — Interactive grid with hover effects and live/demo links
- **Skills Section** — Animated skill bars with categorized tech stack
- **Experience Timeline** — Vertical timeline with company details
- **Dark Theme** — Deep space-inspired dark background with neon accents

---

## Tech Stack

### Frontend
- **React 18** — Component-based UI framework
- **Vite** — Next-generation build tool
- **Three.js + React Three Fiber** — 3D graphics and canvas rendering
- **Framer Motion** — Animation library for React
- **GSAP** — High-performance animations
- **Tailwind CSS** — Utility-first CSS framework

### Tools & Libraries
- **@emailjs/browser** — Client-side email sending
- **react-intersection-observer** — Scroll-triggered animations
- **react-scroll** — Smooth scroll navigation
- **PostCSS** — CSS processing
- **Autoprefixer** — Vendor prefix management

---

## Project Structure

```
sulav-subedi-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js** >= 18.x
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sulavsubedi/sulav-subedi-portfolio.git
   cd sulav-subedi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Or connect your GitHub repo at [vercel.com](https://vercel.com)

### Netlify

1. Push to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## Configuration

### Environment Variables

For the contact form (EmailJS), create a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Tailwind Configuration

Custom theme colors and animations are defined in `tailwind.config.js`:

- **Neon Colors**: cyan (#00f5ff), purple (#bf00ff), green (#39ff14), pink (#ff007f)
- **Dark Theme**: 900 (#020409), 800 (#060d1a), 700 (#0a1628), 600 (#0f2040)
- **Custom Animations**: float, glow, spin-slow, pulse-slow

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen intro with animated name, tagline & CTA buttons |
| **About** | Personal bio, background & professional summary |
| **Skills** | Categorized tech skills with animated progress bars |
| **Projects** | Portfolio projects with live previews & GitHub links |
| **Experience** | Work history in a vertical timeline format |
| **Contact** | Contact form with social media links |
| **Footer** | Quick links, social icons & copyright info |

---

## Author

**Sulav Subedi**
- 💼 Frontend Developer & SEO Strategist
- 📍 Sydney, Australia
- 🌐 [sulavsubedi.vercel.app](https://sulavsubedi.vercel.app)
- 📧 Contact via the portfolio website

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- Built with passion for modern web experiences
- Inspired by cyberpunk aesthetics and neon-themed designs
- Special thanks to the open-source community

---

⭐ **Star this repo if you like it!**
