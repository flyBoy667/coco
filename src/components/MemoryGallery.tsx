import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Share2, MapPin, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    title: "Premier café ensemble",
    date: "14 Février 2023",
    location: "Café des Artistes",
    description: "Un moment magique qui restera à jamais gravé dans nos cœurs..."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    title: "Paris mon amour",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    title: "Week-end à la mer",
    date: "1 Avril 2023",
    location: "Côte d'Azur",
    description: "Des moments de bonheur simple au bord de l'eau..."
  }
];

export const MemoryGallery: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<typeof memories[0] | null>(null);
  const [likedMemories, setLikedMemories] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedMemories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Nos Plus Beaux Souvenirs
        </motion.h2>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full py-12"
        >
          {memories.map((memory) => (
            <SwiperSlide
              key={memory.id}
              className="w-[300px] sm:w-[400px] md:w-[600px]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{memory.title}</h3>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{memory.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{memory.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {selectedMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedMemory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1">
                    <img
                      src={selectedMemory.image}
                      alt={selectedMemory.title}
                      className="w-full h-[300px] md:h-[500px] object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {selectedMemory.title}
                        </h3>
                        <p className="text-gray-500">{selectedMemory.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => toggleLike(selectedMemory.id)}
                          className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                        >
                          <Heart
                            size={24}
                            className={likedMemories.has(selectedMemory.id) ? "fill-pink-500 text-pink-500" : "text-gray-600"}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Share2 size={24} className="text-gray-600" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setSelectedMemory(null)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X size={24} className="text-gray-600" />
                        </motion.button>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{selectedMemory.description}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={20} />
                      <span>{selectedMemory.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};