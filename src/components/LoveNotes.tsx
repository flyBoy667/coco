import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const notes = [
  {
    title: "Mon Amour",
    content: "Chaque jour à tes côtés est une nouvelle aventure. Tu illumines ma vie de ton sourire et de ta tendresse. Je t'aime plus que tout au monde.",
    icon: Heart
  },
  {
    title: "Ma Chérie",
    content: "Tu es la plus belle chose qui me soit arrivée. Merci d'être toi, merci d'être là, merci de faire battre mon cœur comme au premier jour.",
    icon: Star
  },
  {
    title: "Mon Cœur",
    content: "Notre amour grandit chaque jour un peu plus. Tu es mon présent et mon futur, ma force et ma joie. Je t'aime infiniment.",
    icon: Heart
  }
];

export const LoveNotes: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Mes Mots d'Amour
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-xl transform transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-pink-600">{note.title}</h3>
                <note.icon className="text-pink-500" size={24} />
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                {note.content}
              </p>
              <motion.div
                className="mt-6 flex justify-end"
                whileHover={{ scale: 1.2 }}
              >
                <Heart className="text-pink-500" size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};