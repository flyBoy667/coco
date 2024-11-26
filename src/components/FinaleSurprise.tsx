import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Heart, Gift, Sparkles, Star} from 'lucide-react';
import ReactConfetti from 'react-confetti';
import {useWindowSize} from 'react-use';
import toast from 'react-hot-toast';

export const FinaleSurprise: React.FC = () => {
    const [showSurprise, setShowSurprise] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const {width, height} = useWindowSize();

    const revealSurprise = () => {
        setShowSurprise(true);
        setShowConfetti(true);
        toast('💝 Je t\'aime infiniment !', {
            icon: '💖',
            style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#ff1493',
            },
        });
        setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <div
            className="min-h-screen py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {showConfetti && <ReactConfetti width={width} height={height} recycle={false}/>}

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="text-center"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
                    >
                        Une Dernière Surprise...
                    </motion.h2>

                    {!showSurprise ? (
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={revealSurprise}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
              <span className="flex items-center gap-2">
                <Gift className="animate-bounce"/>
                Clique pour ta surprise
                <Heart className="animate-pulse"/>
              </span>
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{scale: 0, rotate: -180}}
                            animate={{scale: 1, rotate: 0}}
                            transition={{type: "spring", duration: 1}}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600"/>

                                <motion.div className="absolute top-4 right-4">
                                    <Star className="text-yellow-400 w-6 h-6"/>
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.5}}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-gray-800">Mon coco d'amour,</h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        Holala, notre histoire, c'est vraiment une dinguerie ! On a passé plus de trois
                                        ans à se chercher, se quitter, et se faire du mal. Mais malgré tout, il y a une
                                        chose qui ne change pas : tu restes une personne importante pour moi. J'ai fait
                                        des efforts considérables pour te souhaiter un joyeux anniversaire de la manière
                                        la plus originale possible : un site web carrément 🤣. Oui, j'ai mis la barre
                                        haute cette fois-ci, et franchement, je ne sais même pas si je me dépasse ou si
                                        je perds la tête. Ce qui me tue, c'est que je fais tout ça pour mon ex 😭.
                                        Sérieusement, qui d'autre ferait un truc pareil ? Ça prouve à quel point tu
                                        comptes (encore) pour moi, même si on est à des années-lumière d'être ensemble.
                                        Allez, profite bien de ton cadeau, tu ne risques pas d'en voir un autre comme ça
                                        de sitôt idiote !
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        Aïda, tu es une femme incroyable. J’ai aimé chaque moment passé à tes côtés,
                                        même si on s’embrouillait souvent. Ces instants, qu’ils soient simples ou
                                        chaotiques, restent parmi les plus beaux souvenirs de ma vie. J’étais tellement
                                        bien avec toi, et je m’amusais énormément. Sache que je n’ai jamais arrêté de
                                        penser à toi. Je n’ai jamais pu, ni voulu, te détester, et je crois bien que je
                                        ne pourrais jamais le faire. Tu auras toujours une place particulière dans mon
                                        cœur.

                                        On est des ex, certes, mais n’empêche, j’ai une envie folle que tu viennes
                                        dormir dans mes bras. Coco, je t’aime tellement, tu n’as pas idée. Loin de moi
                                        l’idée de te perturber, mais je voulais te souhaiter un très joyeux
                                        anniversaire. Que cette année t’apporte tout ce que tu mérites : une vie remplie
                                        de succès, de bonheur et de lumière.

                                        Avec tout mon cœur, <br/>
                                        Fly : Ton ex que tu ne pourras jamais oublier 💗
                                    </p>

                                    <div className="pt-4 flex justify-center">
                                        <motion.div
                                            animate={{scale: [1, 1.2, 1]}}
                                            transition={{repeat: Infinity, duration: 2}}
                                        >
                                            <Heart className="text-pink-500 w-12 h-12 fill-current"/>
                                        </motion.div>
                                    </div>

                                    <p className="text-xl font-semibold text-pink-600 text-center">
                                        Je t'aime infiniment ❤️
                                    </p>
                                </motion.div>

                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="text-purple-400 w-6 h-6"/>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Floating hearts background */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                    {Array.from({length: 20}).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                x: Math.random() * width,
                                y: height + 100
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                y: -100,
                                transition: {
                                    repeat: Infinity,
                                    duration: 10 + Math.random() * 10,
                                    delay: Math.random() * 5
                                }
                            }}
                            className="absolute"
                        >
                            <Heart
                                className="text-pink-500/20"
                                style={{
                                    width: 20 + Math.random() * 30,
                                    height: 20 + Math.random() * 30
                                }}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};