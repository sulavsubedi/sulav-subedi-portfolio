import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/sulavsubedi' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/sulavsubedi' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sulavsubedi' },
  { name: 'Email', icon: Mail, href: 'mailto:sulavsubedi@example.com' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Sulav.dev
            </motion.a>
            <p className="text-gray-400 mt-4 text-sm max-w-xs">
              Building beautiful, performant, and user-centric digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center hover:bg-neon-purple/20 transition-colors group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sulav Subedi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-neon-pink" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
