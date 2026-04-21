import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop interface, team workspaces, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps creators produce high-quality blog posts and marketing copy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: true,
  },
  {
    title: 'Portfolio Dashboard',
    description: 'A sleek investment portfolio dashboard with real-time stock data, analytics, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['React', 'D3.js', 'REST API', 'Chart.js'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: false,
  },
  {
    title: 'Social Media Scheduler',
    description: 'A social media management tool for scheduling posts across multiple platforms with analytics tracking.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
    tags: ['Vue.js', 'Express', 'MongoDB', 'Redis'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: false,
  },
  {
    title: 'Weather App',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
    tags: ['React', 'OpenWeather API', 'Tailwind CSS', 'Geolocation'],
    github: 'https://github.com/sulavsubedi',
    demo: '#',
    featured: false,
  },
];

const categories = ['All', 'Featured', 'React', 'Node.js', 'Python'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()));
  });

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg shadow-neon-purple/30'
                  : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-dark-800/50 border border-dark-700 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-dark-900/90 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-dark-900/90 flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-neon-cyan text-sm font-medium hover:gap-3 transition-all"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
