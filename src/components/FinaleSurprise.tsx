import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Sparkles, Star } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import toast from 'react-hot-toast';

export const FinaleSurprise: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const revealSurprise = () => {
    setShowSurprise(true);
    setShowConfetti(true);
    toast('💝 Je t\'aime infiniment !', {
      icon: '💖',
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#ff1493',
      },
    });
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {showConfetti && <ReactConfetti width={width} height={height} recycle={false} />}

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
          >
            Une Dernière Surprise...
          </motion.h2>

          {!showSurprise ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={revealSurprise}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Gift className="animate-bounce" />
                Clique pour ta surprise
                <Heart className="animate-pulse" />
              </span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600" />
                
                <motion.div className="absolute top-4 right-4">
                  <Star className="text-yellow-400 w-6 h-6" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800">Mon Amour,</h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Chaque jour passé à tes côtés est un cadeau précieux. Tu es ma source de bonheur, 
                    mon inspiration, et ma raison de sourire. Je veux te remercier d'être toi, 
                    d'être là, et de rendre ma vie si merveilleuse.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Notre histoire est unique et magique, et je chéris chaque moment passé ensemble. 
                    Tu es mon présent et mon futur, et je t'aime plus que tout au monde.
                  </p>

                  <div className="pt-4 flex justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Heart className="text-pink-500 w-12 h-12 fill-current" />
                    </motion.div>
                  </div>

                  <p className="text-xl font-semibold text-pink-600 text-center">
                    Je t'aime infiniment ❤️
                  </p>
                </motion.div>

                <div className="absolute bottom-4 right-4">
                  <Sparkles className="text-purple-400 w-6 h-6" />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * width,
                y: height + 100
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -100,
                transition: {
                  repeat: Infinity,
                  duration: 10 + Math.random() * 10,
                  delay: Math.random() * 5
                }
              }}
              className="absolute"
            >
              <Heart 
                className="text-pink-500/20" 
                style={{ 
                  width: 20 + Math.random() * 30,
                  height: 20 + Math.random() * 30
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};