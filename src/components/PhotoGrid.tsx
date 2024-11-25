import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { Heart, Share2, MapPin, Calendar } from 'lucide-react';

const photos = [
  // Premier voyage
  { url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", date: "Mars 2023", location: "Paris", title: "Premier voyage ensemble" },
  { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", date: "Mars 2023", location: "Tour Eiffel", title: "Vue romantique" },
  { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a", date: "Mars 2023", location: "Montmartre", title: "Balade dans les ruelles" },
  
  // Moments du quotidien
  { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486", date: "Avril 2023", location: "Notre café", title: "Petit déjeuner surprise" },
  { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2", date: "Avril 2023", location: "Parc", title: "Pique-nique printanier" },
  { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", date: "Mai 2023", location: "Plage", title: "Coucher de soleil" },
  
  // Soirées spéciales
  { url: "https://images.unsplash.com/photo-1530653333484-d02d0faff9bf", date: "Juin 2023", location: "Restaurant", title: "Dîner aux chandelles" },
  { url: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1", date: "Juin 2023", location: "Jardin", title: "Soirée d'été" },
  { url: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b", date: "Juillet 2023", location: "Concert", title: "Notre musique" },
  
  // Vacances d'été
  { url: "https://images.unsplash.com/photo-1501901609772-df0848060b33", date: "Août 2023", location: "Côte d'Azur", title: "Escapade marine" },
  { url: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00", date: "Août 2023", location: "Calanques", title: "Randonnée ensemble" },
  { url: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2", date: "Août 2023", location: "Méditerranée", title: "Croisière romantique" },
  
  // Automne romantique
  { url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf", date: "Septembre 2023", location: "Forêt", title: "Couleurs d'automne" },
  { url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d", date: "Octobre 2023", location: "Château", title: "Week-end royal" },
  { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8", date: "Octobre 2023", location: "Vignoble", title: "Dégustation en amoureux" },

  // Ajoutez 15 photos supplémentaires avec le même format...
].map(photo => ({
  ...photo,
  url: `${photo.url}?w=800&q=80`,
  liked: false
}));

export const PhotoGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState(new Set());

  const toggleLike = (index) => {
    setLikedPhotos(prev => {
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
    <div className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-[2000px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {photos.map((photo, index) => (
            <Tilt
              key={index}
              options={{ max: 25, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Calendar size={14} />
                      <span>{photo.date}</span>
                      <MapPin size={14} className="ml-2" />
                      <span>{photo.location}</span>
                    </div>
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
                        className={likedPhotos.has(index) ? "fill-pink-500 text-pink-500" : "text-white"}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <Share2 size={20} className="text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </div>
  );
};