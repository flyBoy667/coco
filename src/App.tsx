import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Toaster } from 'react-hot-toast';
import { FloatingHearts } from './components/FloatingHearts';
import { MagicalIntro } from './components/MagicalIntro';
import { LoveStory } from './components/LoveStory';
import { MemoryGallery } from './components/MemoryGallery';
import { LoveNotes } from './components/LoveNotes';
import { SpecialMoments } from './components/SpecialMoments';
import { MusicMemories } from './components/MusicMemories';
import { FinaleSurprise } from './components/FinaleSurprise';
import { VideoGallery } from './components/VideoGallery';
import { InteractiveGallery } from './components/InteractiveGallery';
import { InteractiveMemories } from './components/InteractiveMemories';
import { VideoMemories } from './components/VideoMemories';
import { useWindowSize } from 'react-use';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { MagicPortal } from './components/MagicPortal';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <Toaster 
          position="top-center"
          toastOptions={{
            className: 'bg-white/80 backdrop-blur-sm border border-pink-200',
            duration: 5000,
          }}
        />
        
        <FloatingHearts mousePosition={mousePosition} />
        
        <Particles
          id="love-particles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: "#ff69b4" },
              shape: { type: "heart" },
              opacity: { value: 0.5, random: true },
              size: { value: 4, random: true },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" }
              }
            }
          }}
          className="absolute inset-0 pointer-events-none"
        />

        <AnimatePresence>
          {showPortal && (
            <MagicPortal onClose={() => setShowPortal(false)} />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <Parallax speed={-20}>
            <MagicalIntro onPortalOpen={() => setShowPortal(true)} />
          </Parallax>

          <Parallax speed={-10}>
            <LoveStory />
          </Parallax>

          <InteractiveMemories />
          <VideoMemories />
          <InteractiveGallery />
          <MemoryGallery />
          <VideoGallery />
          <SpecialMoments />
          <MusicMemories />
          <LoveNotes />
          <FinaleSurprise />
        </motion.div>

        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </ParallaxProvider>
  );
}

export default App;