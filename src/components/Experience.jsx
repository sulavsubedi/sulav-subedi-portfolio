import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Code, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: Building,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Nepal',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing best practices.',
    achievements: ['Led migration to microservices architecture', 'Improved application performance by 40%', 'Mentored team of 5 developers'],
  },
  {
    icon: Code,
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    period: '2022 - 2023',
    description: 'Developed and maintained client projects across various industries. Built RESTful APIs, responsive frontends, and integrated third-party services.',
    achievements: ['Delivered 15+ client projects on time', 'Implemented CI/CD pipelines', 'Built real-time chat applications with Socket.io'],
  },
  {
    icon: GraduationCap,
    title: 'Junior Developer',
    company: 'StartupHub Kathmandu',
    period: '2021 - 2022',
    description: 'Started professional career building web applications and learning industry best practices. Contributed to multiple startup projects.',
    achievements: ['Built MVP for 3 startup products', 'Learned agile development methodology', 'Collaborated with cross-functional teams'],
  },
  {
    icon: Award,
    title: 'B.Sc. Computer Science',
    company: 'Tribhuvan University',
    period: '2018 - 2022',
    description: 'Graduated with honors. Specialized in software engineering and web technologies. Active member of coding clubs and hackathons.',
    achievements: ['Dean\'s List 2021, 2022', 'Won 1st place at University Hackathon', 'Published research paper on web performance'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and the milestones that have shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-pink to-neon-cyan" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-neon-purple/50 transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'md:mr-auto'
                  }`} style={{ maxWidth: index % 2 === 0 ? undefined : '100%' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-neon-cyan text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-500 text-xs flex items-center gap-2">
                          {index % 2 === 0 && <span className="text-neon-cyan">•</span>}
                          <span>{achievement}</span>
                          {index % 2 !== 0 && <span className="text-neon-cyan">•</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple border-4 border-dark-900 z-10" />

                {index % 2 !== 0 && (
                  <div className="hidden md:block flex-1 md:pr-12" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
