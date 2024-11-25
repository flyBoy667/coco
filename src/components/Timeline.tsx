import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const events: TimelineEvent[] = [
  {
    date: "Notre première rencontre",
    title: "Le début de notre histoire",
    description: "Ce jour où nos regards se sont croisés pour la première fois...",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
  },
  {
    date: "Notre premier rendez-vous",
    title: "Une soirée magique",
    description: "Je me souviens de chaque détail, de chaque sourire...",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80"
  },
  {
    date: "Notre premier voyage",
    title: "L'aventure commence",
    description: "Découvrir le monde à tes côtés...",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
  }
];

export const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="mb-16 relative"
        >
          <div className={`flex flex-col md:flex-row gap-8 items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            <div className="flex-1">
              <motion.img
                src={event.imageUrl}
                alt={event.title}
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-pink-600 font-medium mb-2">{event.date}</div>
              <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
          <div className="absolute left-1/2 -ml-3 hidden md:block">
            <Heart className="text-pink-500 animate-pulse" size={24} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}