import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { X, Heart, ChevronLeft, ChevronRight, Share2, ZoomIn } from 'lucide-react';

interface Photo {
  url: string;
  title: string;
  date: string;
  description: string;
  location?: string;
}

const photos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    title: "Notre premier café",
    date: "12 Janvier 2023",
    description: "Ce jour où tout a commencé...",
    location: "Café des Artistes"
  },
  // ... (ajoutez les autres photos ici)
];

export const InteractiveGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const toggleLike = (index: number) => {
    setLiked((prev) => {
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
    <div className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Notre galerie de souvenirs
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer relative group aspect-square"
              onClick={() => {
                setSelectedPhoto(photo);
                setCurrentIndex(index);
              }}
            >
              <animated.img 
                src={photo.url} 
                alt={photo.title}
                style={{ scale }}
                onMouseEnter={() => api({ scale: 1.1 })}
                onMouseLeave={() => api({ scale: 1 })}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="text-white/80 text-sm">{photo.date}</p>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                  >
                    <Heart
                      size={20}
                      className={liked.has(index) ? "fill-pink-500 text-pink-500" : "text-white"}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                  >
                    <ZoomIn size={20} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full bg-white rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative flex-1">
                  <img
                    src={photos[currentIndex].url}
                    alt={photos[currentIndex].title}
                    className="w-full h-[300px] md:h-[600px] object-cover"
                  />
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft className="text-white" size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight className="text-white" size={24} />
                  </button>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {photos[currentIndex].title}
                      </h3>
                      <p className="text-gray-500">{photos[currentIndex].date}</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => toggleLike(currentIndex)}
                        className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                      >
                        <Heart
                          size={24}
                          className={liked.has(currentIndex) ? "fill-pink-500 text-pink-500" : "text-gray-600"}
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
                        onClick={() => setSelectedPhoto(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X size={24} className="text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{photos[currentIndex].description}</p>
                  {photos[currentIndex].location && (
                    <p className="text-sm text-gray-500">
                      📍 {photos[currentIndex].location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};