import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Globe, Zap, Layers, Users } from 'lucide-react';

const stats = [
  { number: '3+', label: 'Years Experience', icon: Zap },
  { number: '20+', label: 'Projects Completed', icon: Code },
  { number: '15+', label: 'Happy Clients', icon: Users },
  { number: '100%', label: 'Client Satisfaction', icon: Layers },
];

const values = [
  { icon: Palette, title: 'Creative Design', desc: 'Crafting visually stunning interfaces that captivate users and enhance brand identity.' },
  { icon: Globe, title: 'Global Perspective', desc: 'Building solutions with international standards and accessibility in mind.' },
  { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code following best practices.' },
  { icon: Zap, title: 'Performance', desc: 'Optimizing every aspect for lightning-fast load times and smooth interactions.' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Building Digital Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate full-stack developer based in Nepal, dedicated to creating
            innovative web applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 border border-neon-purple/30 p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10 animate-pulse" />
              <div className="w-full h-full rounded-xl bg-dark-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">SS</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Sulav Subedi</h3>
                  <p className="text-neon-cyan mt-2">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              With over 3 years of experience in web development, I specialize in building
              modern, responsive, and performant web applications. My expertise spans across
              the full stack, from crafting intuitive user interfaces to designing robust
              backend systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm passionate about clean code, user experience, and staying up-to-date with
              the latest technologies. When I'm not coding, you'll find me exploring new
              tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB'].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm text-gray-300 hover:border-neon-cyan/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="p-6 rounded-2xl bg-dark-800/30 border border-dark-700 hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition-colors">
                <value.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
