import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Music, Camera } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const moments = [
  {
    title: "Notre Premier Baiser",
    date: "14 Février 2023",
    description: "Un moment magique sous les étoiles...",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    icon: Heart
  },
  {
    title: "Premier Concert Ensemble",
    date: "1 Mars 2023",
    description: "La musique qui nous unit pour toujours...",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    icon: Music
  },
  {
    title: "Notre Premier Voyage",
    date: "15 Avril 2023",
    description: "Une aventure inoubliable à deux...",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    icon: Star
  }
];

export const SpecialMoments: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Nos Moments Spéciaux
        </motion.h2>

        <div className="max-w-lg mx-auto">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full"
          >
            {moments.map((moment, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <moment.icon className="text-white" size={24} />
                        <h3 className="text-white text-2xl font-bold">
                          {moment.title}
                        </h3>
                      </div>
                      <p className="text-white/80 mb-2">{moment.description}</p>
                      <p className="text-white/60 text-sm">{moment.date}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};