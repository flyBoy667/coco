import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

export const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <motion.div 
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {showConfetti && <ReactConfetti width={dimensions.width} height={dimensions.height} />}
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ff69b4" },
            shape: { type: "heart" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          }
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm" />
      
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="mb-8"
        >
          <Heart className="inline-block text-pink-500" size={80} />
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Joyeux Anniversaire
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          À ma moitié, mon amour, ma raison de sourire chaque jour. Chaque moment passé avec toi est un cadeau précieux que je chéris infiniment.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ delay: 0.6 }}
          className="inline-block"
        >
          <button
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Notre Histoire
            <Stars className="inline-block ml-2" size={20} />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        style={{ opacity }}
      />
    </motion.div>
  );
};