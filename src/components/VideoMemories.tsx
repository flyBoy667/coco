import {motion} from 'framer-motion';
import ReactPlayer from 'react-player';
import {useInView} from 'react-intersection-observer';
import {useState} from 'react';
import darkBeauty from '/assets/cocovideo/darkBeauty.mp4';
import blood from '/assets/cocovideo/blood.mp4';
import levresBombees from '/assets/cocovideo/levresbombbees.mp4';
import mariage from '/assets/cocovideo/Mariage.mp4';

import {Play, Volume2, VolumeX} from 'lucide-react';

interface Memory {
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    date: string;
    location: string;
}

const memories: Memory[] = [
    {
        title: "Notre première danse",
        description: "Ce moment magique où le monde s'est arrêté autour de nous...",
        videoUrl: darkBeauty,
        thumbnail: "",
        date: "14 Février 2023",
        location: "Le Grand Bal",
    },
    {
        title: "Voyage à Paris",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: blood,
        thumbnail: "",
        date: "20 Mars 2023",
        location: "Paris, France",
    }, {
        title: "Voyage à Paris",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: levresBombees,
        thumbnail: "",
        date: "20 Mars 2023",
        location: "Paris, France",
    }, {
        title: "Voyage à Paris",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: mariage,
        thumbnail: "",
        date: "20 Mars 2023",
        location: "Paris, France",
    },
];

export const VideoMemories = () => {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const [muted, setMuted] = useState(true);

    return (
        <div className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-gray-800"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                >
                    Nos moments en vidéo
                </motion.h2>
                <div ref={ref} className="grid md:grid-cols-2 gap-8">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{delay: index * 0.2}}
                            className="bg-white rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="relative aspect-video">
                                <ReactPlayer
                                    url={memory.videoUrl}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                    playing={activeVideo === index}
                                    muted={muted}
                                    onClickPreview={() => setActiveVideo(index)}
                                    light={memory.thumbnail}
                                    playIcon={
                                        <motion.button
                                            whileHover={{scale: 1.1}}
                                            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full"
                                        >
                                            <Play size={32}/>
                                        </motion.button>
                                    }
                                    className="rounded-t-xl"
                                />
                                {activeVideo === index && (
                                    <motion.button
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                                        onClick={() => setMuted(!muted)}
                                    >
                                        {muted ? <VolumeX size={20} className="text-white"/> :
                                            <Volume2 size={20} className="text-white"/>}
                                    </motion.button>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-semibold text-pink-600">{memory.title}</h3>
                                    <span className="text-sm text-gray-500">{memory.date}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{memory.description}</p>
                                <p className="text-sm text-gray-500">📍 {memory.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
