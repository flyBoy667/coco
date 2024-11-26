import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Share2, MapPin, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import nous from '/assets/cocovideo/nousDeux.jpg'
import nous2 from '/assets/cocovideo/nous1.jpg'
import debile from '/assets/cocovideo/debile.jpg'
import lvlb from '/assets/cocovideo/lvlb.jpg'
import mia from '/assets/cocovideo/mia.jpg'
import han from '/assets/cocovideo/1.jpg'
import souffre from '/assets/cocovideo/7.jpg'


const memories = [
  {
    id: 1,
    image: nous,
    title: "Tema nos tete 🤣🤣",
    date: "",
    location: "",
    description: ""
  },
  {
    id: 2,
    image: nous2,
    title: "Deux idiots reuinis 🤣",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 3,
    image: debile,
    title: "Idiote vas 🤣",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 4,
    image: lvlb,
    title: "Levez les biceps 🤣",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 5,
    image: mia,
    title: "On dirait Mia Khalifa 🤣",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 6,
    image: han,
    title: "Haaaaaaa 😭🤣",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
  {
    id: 7,
    image: souffre,
    title: "Je souffrais seigneur 😭😭",
    date: "15 Mars 2023",
    location: "Tour Eiffel, Paris",
    description: "Notre première escapade romantique dans la ville lumière..."
  },
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
          Les seules photos qu'on a prises ensemble et tes photos les plus débiles
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
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{memory.title}</h3>
                    <div className="flex items-center gap-4 text-white/80">
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