import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Heart } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const playlist = [
  {
    title: "Notre Première Danse",
    artist: "Ed Sheeran",
    song: "Perfect",
    date: "14 Février 2023",
    description: "La chanson qui nous a réunis..."
  },
  {
    title: "Soirée Romantique",
    artist: "John Legend",
    song: "All of Me",
    date: "1 Mars 2023",
    description: "Notre moment magique..."
  },
  {
    title: "Road Trip Ensemble",
    artist: "Bruno Mars",
    song: "Just the Way You Are",
    date: "15 Avril 2023",
    description: "Les kilomètres d'amour..."
  }
];

export const MusicMemories: React.FC = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const togglePlay = (index: number) => {
    setPlaying(playing === index ? null : index);
  };

  const toggleLike = (index: number) => {
    setLiked(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(index)) {
        newLiked.delete(index);
      } else {
        newLiked.add(index);
      }
      return newLiked;
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Notre Playlist d'Amour
        </motion.h2>

        <div className="space-y-6">
          {playlist.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => togglePlay(index)}
                  className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full text-white"
                >
                  {playing === index ? (
                    <Pause size={24} />
                  ) : (
                    <Play size={24} />
                  )}
                </motion.button>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {song.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Music size={16} />
                    <span>{song.artist} - {song.song}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => toggleLike(index)}
                  className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                >
                  <Heart
                    size={24}
                    className={liked.has(index) ? "fill-pink-500 text-pink-500" : "text-gray-400"}
                  />
                </motion.button>
              </div>

              {playing === index && (
                <div className="px-6 pb-6">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 30, repeat: Infinity }}
                      className="h-full bg-pink-500"
                    />
                  </div>
                  <Marquee className="mt-4 text-gray-600" speed={50}>
                    {song.description} • {song.date} • {song.description} • {song.date}
                  </Marquee>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};