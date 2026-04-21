import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const opacity = useTransform(springY, [0, 500], [0.15, 0.05]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        opacity,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block"
    >
      <div
        className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-neon-cyan/10 via-neon-green/5 to-transparent blur-3xl"
      />
    </motion.div>
  );
}
