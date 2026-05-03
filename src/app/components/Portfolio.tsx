import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import image5 from "../../imports/image-5.png";
import image6 from "../../imports/image-6.png";
import image7 from "../../imports/image-7.png";
import image8 from "../../imports/Gemini_Generated_Image_xrzqnjxrzqnjxrzq.png";

const portfolioImages = [
  { src: image5, alt: "Portfolio Work 1" },
  { src: image6, alt: "Portfolio Work 2" },
  { src: image7, alt: "Portfolio Work 3" },
  { src: image8, alt: "Portfolio Work 4" },
];

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="creative" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Creative</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Djiing, I am not limited to just music. I also have a passion for volleyball, Cycling, and Programming. Here are some of my creative images that showcase my artistic vision and versatility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p className="text-lg">View Image</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-purple-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
