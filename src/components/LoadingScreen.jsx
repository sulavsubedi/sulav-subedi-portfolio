import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 bg-dark-900 z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-green to-neon-blue bg-clip-text text-transparent mb-4">
          Sulav Subedi
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">Frontend Developer & SEO Strategist</p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-green to-neon-blue"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 text-sm mt-4"
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}
