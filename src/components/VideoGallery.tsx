import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Play, Heart, Calendar, MapPin } from 'lucide-react';

const videos = [
  {
    title: "Notre première danse",
    date: "14 Février 2023",
    location: "Le Grand Bal",
    description: "Ce moment magique où le monde s'est arrêté autour de nous...",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
  },
  {
    title: "Voyage à Paris",
    date: "20 Mars 2023",
    location: "Paris, France",
    description: "Notre escapade romantique dans la ville lumière...",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
  },
  // Ajoutez 13 vidéos supplémentaires avec le même format...
];

export const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());

  const toggleLike = (index) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-[2000px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Nos plus beaux moments en vidéo
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
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[400px] md:w-[600px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-video relative group">
                  <ReactPlayer
                    url={video.videoUrl}
                    width="100%"
                    height="100%"
                    light={video.thumbnail}
                    playIcon={
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full"
                      >
                        <Play size={32} />
                      </motion.button>
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-2">{video.title}</h3>
                      <p className="text-white/80 mb-4">{video.description}</p>
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{video.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{video.location}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      onClick={() => toggleLike(index)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <Heart
                        size={20}
                        className={likedVideos.has(index) ? "fill-pink-500 text-pink-500" : "text-white"}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};