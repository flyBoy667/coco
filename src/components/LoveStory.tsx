import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import bebeCoco from "/assets/cocovideo/bebeCoco.jpg";
import bebeCoco2 from "/assets/cocovideo/bebeCoco2.jpg";
import bebeCoco4 from "/assets/cocovideo/bbcoco4.jpg"


const memories = [
  {
    date: "14 Février 2023",
    title: "Regarde comme t'es BG sur la photo 😍 ! Sérieusement, t’avais un charme de dingue",
    description: "Ce jour magique où nos regards se sont croisés pour la première fois...",
    location: "Café des Artistes",
    image: bebeCoco2
  },
  {
    date: "1 Mars 2023",
    title: "Qui aurait cru que t'allais devenir une ghetto avec ce visage angelique 🤣",
    description: "Une soirée inoubliable remplie de rires et de complicité...",
    location: "Restaurant Le Romantique",
    image: bebeCoco
  },
  {
    date: "15 Avril 2023",
    title: "Le plus beau sourire que t’aies jamais fait",
    description: "Notre première escapade ensemble dans la ville de l'amour...",
    location: "Paris, France",
    image: bebeCoco4
  }
];

export const LoveStory: React.FC = () => {
  return (
    <div id="love-story" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Bébé Coco
        </motion.h2>

        <div className="space-y-16">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 relative rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-[300px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">{memory.title}</h3>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="inline-block"
                >
                  <Heart className="text-pink-500 w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};