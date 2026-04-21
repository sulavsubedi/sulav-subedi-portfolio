import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

function Avatar3D() {
  return (
    <group>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#a855f7" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Body */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1.2, 32]} />
        <meshStandardMaterial color="#6366f1" metalness={0.2} roughness={0.5} />
      </mesh>
      {/* Left Arm */}
      <mesh position={[-0.7, -0.3, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.12, 0.1, 0.9, 16]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.2} roughness={0.5} />
      </mesh>
      {/* Right Arm */}
      <mesh position={[0.7, -0.3, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.12, 0.1, 0.9, 16]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.2} roughness={0.5} />
      </mesh>
      {/* Base Platform */}
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 64]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.5} roughness={0.3} transparent opacity={0.3} />
      </mesh>
      {/* Floating Rings */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm mb-6"
          >
            <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse" />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Sulav Subedi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-400 mb-8 leading-relaxed"
          >
            Full Stack Developer crafting beautiful, performant, and
            user-centric digital experiences with modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold rounded-full shadow-lg shadow-neon-purple/30 hover:shadow-neon-purple/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-semibold rounded-full hover:bg-neon-cyan/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center space-x-6"
          >
            <motion.a
              href="https://github.com/sulavsubedi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <Github className="w-7 h-7 text-gray-400 hover:text-neon-cyan transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sulavsubedi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <Linkedin className="w-7 h-7 text-gray-400 hover:text-neon-purple transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:sulavsubedi@example.com"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <Mail className="w-7 h-7 text-gray-400 hover:text-neon-pink transition-colors" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <Download className="w-7 h-7 text-gray-400 hover:text-neon-cyan transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 h-[500px] relative"
        >
          <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 via-transparent to-transparent rounded-full blur-3xl" />
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, 5, -5]} color="#22d3ee" intensity={0.5} />
            <pointLight position={[5, -5, 5]} color="#f472b6" intensity={0.5} />
            <Avatar3D />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 text-sm flex flex-col items-center"
        >
          <span>Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mt-2 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-neon-cyan rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
