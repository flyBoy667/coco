import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Stars, Gift } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';
import Marquee from 'react-fast-marquee';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Canvas } from '@react-three/fiber';
import { Stars as ThreeStars } from '@react-three/drei';
import toast from 'react-hot-toast';

interface Props {
  onPortalOpen: () => void;
}

export const MagicalIntro: React.FC<Props> = ({ onPortalOpen }) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const { ref } = useParallax<HTMLDivElement>({ speed: -20 });
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      toast('💖 Clique n\'importe où pour découvrir notre histoire...', {
        icon: '✨',
        duration: 5000,
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onClick={handleInteraction}
    >
      {showConfetti && <ReactConfetti width={width} height={height} recycle={false} />}

      <div className="absolute inset-0">
        <Canvas>
          <ThreeStars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 mix-blend-overlay" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1920&q=80')] bg-cover bg-center bg-fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <Heart className="inline-block text-pink-500 w-24 h-24 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8"
        >
          Joyeux Anniversaire
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% auto' }}
          >
            Mon Amour
          </motion.span>
        </motion.h1>

        <Marquee
          speed={50}
          className="py-4 bg-white/10 backdrop-blur-sm rounded-full mb-8"
        >
          <div className="flex items-center gap-8 px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <Sparkles className="text-yellow-400" />
                <span>Je t'aime</span>
                <Heart className="text-pink-500" />
              </div>
            ))}
          </div>
        </Marquee>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onClick={() => document.getElementById('love-story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Découvre notre histoire
              <Stars className="group-hover:rotate-90 transition-transform duration-300" />
            </span>
          </motion.button>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            onClick={onPortalOpen}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Ouvre le portail magique
              <Gift className="group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
};