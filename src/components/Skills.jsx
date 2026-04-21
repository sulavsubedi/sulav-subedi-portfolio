import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Layers, Smartphone, Server } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript', level: 80, color: 'from-blue-500 to-indigo-500' },
      { name: 'Next.js', level: 75, color: 'from-gray-400 to-gray-600' },
      { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Three.js', level: 70, color: 'from-orange-400 to-red-500' },
      { name: 'Framer Motion', level: 80, color: 'from-purple-400 to-pink-500' },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
      { name: 'Python', level: 75, color: 'from-yellow-400 to-orange-500' },
      { name: 'Express', level: 80, color: 'from-gray-400 to-gray-600' },
      { name: 'PostgreSQL', level: 70, color: 'from-blue-400 to-blue-600' },
      { name: 'MongoDB', level: 75, color: 'from-green-500 to-emerald-600' },
      { name: 'GraphQL', level: 65, color: 'from-pink-400 to-rose-500' },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: Layers,
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 70, color: 'from-blue-400 to-cyan-500' },
      { name: 'AWS', level: 65, color: 'from-orange-400 to-yellow-500' },
      { name: 'Vercel', level: 80, color: 'from-gray-400 to-white' },
      { name: 'Linux', level: 75, color: 'from-yellow-500 to-amber-600' },
      { name: 'CI/CD', level: 70, color: 'from-purple-400 to-indigo-500' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies that I use to build exceptional digital products.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/50 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + catIndex * 0.2 + index * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-cyan/10 border border-neon-purple/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new tools,
            frameworks, and best practices to stay at the forefront of web development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Rust', 'WebAssembly', 'Kubernetes', 'GraphQL', 'Redis', 'Prisma'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-800/50 rounded-full text-sm text-gray-400 border border-dark-700"
              >
                Learning: {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
