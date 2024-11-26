import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Heart, Star, Music, Camera, Map, Calendar} from 'lucide-react';
import didia from '/assets/cocovideo/dijaAida.jpg'
import resto from '/assets/cocovideo/resto.jpg'
import cheveuxCourt from '/assets/cocovideo/cheveuxCourt.jpg'
import aidaJenny from '/assets/cocovideo/aida_jenny.jpg'
import aidaMoh from '/assets/cocovideo/aida_moh1.jpg'
import aidaMeche from '/assets/cocovideo/aida_meche.jpg'
import toast from 'react-hot-toast';

interface Memory {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    type: 'photo' | 'music' | 'location' | 'special';
}

const memories: Memory[] = [
    {
        id: 1,
        title: "Les sœurs Coulibaly",
        date: "14 Février 2023",
        description: "Didia elle est belle mais tu reste ma preferée",
        image: didia,
        type: 'special'
    },
    {
        id: 2,
        title: "Coco au resto",
        date: "20 Février 2023",
        description: "Ce jour la t'es sortie manger sans moi 😭",
        image: resto,
        type: 'photo'
    },
    {
        id: 3,
        title: "La coupe des femmes matures",
        date: "1 Mars 2023",
        description: "T'as jamais refait cette coiffure alors que t'avais 10 fois plus de flow comme ca",
        image: cheveuxCourt,
        type: 'photo'
    },
    {
        id: 4,
        title: "Mes deux femmes",
        date: "15 Mars 2023",
        description: "Je vais vous epouser toutes les deux vous allez rien comprendre (C'est une blaque toi seule me suffit 💕)",
        image: aidaJenny,
        type: 'photo'
    },
    {
        id: 5,
        title: "Haaa Mohamed",
        date: "15 Mars 2023",
        description: "Mohamed il vas pas s'en sortir comme ca humm",
        image: aidaMoh,
        type: 'photo'
    },
    {
        id: 6,
        title: "Glow up",
        date: "15 Mars 2023",
        description: "On se quitte et toi tu glow up mais ca va pas 🤣",
        image: aidaMeche,
        type: 'photo'
    },
];

export const InteractiveMemories: React.FC = () => {
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

    const handleMemoryClick = (memory: Memory) => {
        setSelectedMemory(memory);
        toast.success('💖 Un nouveau souvenir débloqué !', {
            icon: '🎉',
            style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#ff69b4',
            },
        });
    };

    return (
        <div className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                className="max-w-7xl mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                    Tes plus belles photos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {memories.map((memory) => (
                        <motion.div
                            key={memory.id}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="relative group cursor-pointer"
                            onClick={() => handleMemoryClick(memory)}
                        >
                            <motion.div
                                className="relative rounded-xl overflow-hidden shadow-xl"
                                whileHover={{y: -5}}
                                transition={{type: "spring", stiffness: 300}}
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={memory.image}
                                        alt={memory.title}
                                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white text-xl font-bold mb-2">{memory.title}</h3>
                                        <p className="text-white/80 text-sm mb-4">{memory.description}</p>
                                        {/*<div className="flex items-center gap-4">*/}
                                        {/*  <Calendar className="text-white/60" size={16} />*/}
                                        {/*  <span className="text-white/60 text-sm">{memory.date}</span>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <motion.div
                                    className="absolute top-4 right-4"
                                    whileHover={{scale: 1.2}}
                                >
                                    {memory.type === 'special' && <Star className="text-yellow-400" size={24}/>}
                                    {memory.type === 'music' && <Music className="text-blue-400" size={24}/>}
                                    {memory.type === 'photo' && <Camera className="text-green-400" size={24}/>}
                                    {memory.type === 'location' && <Map className="text-red-400" size={24}/>}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedMemory && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                            onClick={() => setSelectedMemory(null)}
                        >
                            <motion.div
                                initial={{scale: 0.9, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0.9, opacity: 0}}
                                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img
                                            src={selectedMemory.image}
                                            alt={selectedMemory.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-8 md:w-1/2">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            {selectedMemory.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{selectedMemory.description}</p>
                                        {/*<div className="flex items-center gap-2 text-gray-500">*/}
                                        {/*  <Calendar size={16} />*/}
                                        {/*  <span>{selectedMemory.date}</span>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};