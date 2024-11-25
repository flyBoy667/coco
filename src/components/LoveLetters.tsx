import { motion } from 'framer-motion';

const letters = [
  {
    title: "Mon amour",
    content: "Chaque jour passé à tes côtés est un cadeau. Tu illumines ma vie de ton sourire et de ta tendresse..."
  },
  {
    title: "Ma chérie",
    content: "Je veux te remercier pour tous ces moments magiques que nous partageons ensemble..."
  },
  {
    title: "Mon coeur",
    content: "Tu es la plus belle chose qui me soit arrivée. Je t'aime plus que tout au monde..."
  }
];

export const LoveLetters = () => {
  return (
    <div className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mes mots d'amour</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-600">{letter.title}</h3>
              <p className="text-gray-600 italic">{letter.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}