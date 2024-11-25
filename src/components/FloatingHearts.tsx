import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartType {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface FloatingHeartsProps {
  mousePosition: { x: number; y: number };
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ mousePosition }) => {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartType = {
        id: Date.now(),
        x: mousePosition.x + (Math.random() - 0.5) * 50,
        y: mousePosition.y + (Math.random() - 0.5) * 50,
        scale: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360
      };

      setHearts(prev => [...prev, newHeart]);

      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 2000);
    }, 100);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: heart.x,
              y: heart.y,
              scale: 0,
              rotate: heart.rotation,
              opacity: 0
            }}
            animate={{ 
              y: heart.y - 100,
              scale: heart.scale,
              opacity: 1
            }}
            exit={{ 
              y: heart.y - 200,
              opacity: 0
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute"
            style={{ left: 0, top: 0 }}
          >
            <Heart className="text-pink-500" size={20} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};