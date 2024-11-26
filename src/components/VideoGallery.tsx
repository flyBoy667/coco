import {motion} from "framer-motion";
import {useState} from "react";
import ReactPlayer from "react-player";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Play, Heart, Calendar, MapPin} from "lucide-react";

import sexy1 from "/assets/cocovideo/bellesFormes.mp4";
import sexy2 from "/assets/cocovideo/formes.mp4";
import sexy3 from "/assets/cocovideo/fesses.mp4";
import sexy4 from "/assets/cocovideo/goutter.mp4";
import sexy5 from "/assets/cocovideo/seins.mp4";
import sexy from "/assets/cocovideo/sexy.mp4";
import sexy6 from "/assets/cocovideo/sexy1.mp4";
import sexy7 from "/assets/cocovideo/sexyaulit.mp4";
import sexy8 from "/assets/cocovideo/sexyGirl.mp4";
import sexy9 from "/assets/cocovideo/sexyyy.mp4";
import sexy10 from "/assets/cocovideo/bayaSexy.mp4";
import levres from "/assets/cocovideo/mordre_levres.jpg";

const videos = [
    {
        title: "C'est toi qui a la plus belle silhouette 🤤😍",
        date: "14 Février 2023",
        location: "Kati, Mali",
        description: "Ce moment magique où le monde s'est arrêté autour de nous...",
        videoUrl: sexy1,
        thumbnail: levres
    },
    {
        title: "Fais un peu de sport, t'étais obèse sur cette vidéo 😭",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy2,
        thumbnail: levres
    },
    {
        title: "Tu semblais dépitée par tes formes 🤣",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy3,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy4,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy5,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy6,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy7,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy8,
        thumbnail: levres
    },
    {
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy9,
        thumbnail: levres
    },{
        title: "",
        date: "20 Mars 2023",
        location: "Kati, Mali",
        description: "Notre escapade romantique dans la ville lumière...",
        videoUrl: sexy10,
        thumbnail: levres
    },
];

export const VideoGallery = () => {
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null); // Vidéo actuellement en lecture

    const togglePlay = (index) => {
        setPlayingVideoIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-[2000px] mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
                >
                    Tes vidéos les plus sexy
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
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="w-full py-12"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index} className="w-[300px] sm:w-[400px] md:w-[600px]">
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                className="relative rounded-xl overflow-hidden shadow-2xl"
                            >
                                <div className="aspect-video relative">
                                    <ReactPlayer
                                        url={video.videoUrl}
                                        width="100%"
                                        height="100%"
                                        playing={playingVideoIndex === index} // Joue seulement si c'est la vidéo active
                                        controls={true} // Contrôles de lecture
                                        light={video.thumbnail || true} // Affiche une miniature
                                    />
                                    {playingVideoIndex !== index && (
                                        <motion.button
                                            whileHover={{scale: 1.1}}
                                            onClick={() => togglePlay(index)}
                                            className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl rounded-xl"
                                        >
                                            <Play size={48}/>
                                        </motion.button>
                                    )}
                                </div>

                                <div className="p-6 bg-white">
                                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                                    <div className="flex items-center gap-4 text-gray-500 mt-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16}/>
                                            <span>{video.location}</span>
                                        </div>
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
