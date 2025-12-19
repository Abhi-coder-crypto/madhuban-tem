import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroForest from '@/assets/hero-forest.jpg';
import fishTankDining from '@/assets/fish-tank-dining.jpg';
import stoneInterior from '@/assets/stone-interior.jpg';
import forestInterior from '@/assets/forest-interior.jpg';

const galleryImages = [
  { src: heroForest, title: 'Evening Ambiance' },
  { src: fishTankDining, title: 'Aquarium Dining' },
  { src: stoneInterior, title: 'Cave Interiors' },
  { src: forestInterior, title: 'Garden Seating' },
  { src: heroForest, title: 'Candlelit Tables' },
  { src: fishTankDining, title: 'Private Booths' },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 mb-12">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-accent text-gold text-lg tracking-[0.2em] uppercase mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Where Every Table
            <br />
            <span className="text-accent">Has a Story</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="horizontal-scroll gap-6 px-4 md:px-8 pb-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="snap-item relative flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="group relative rounded-2xl overflow-hidden hover-lift">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3
                  className="font-display text-xl text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
                  transition={{ duration: 0.3 }}
                >
                  {image.title}
                </motion.h3>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="text-center mt-8 text-foreground/40 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <span className="inline-flex items-center gap-2">
          ← Scroll to explore →
        </span>
      </motion.div>
    </section>
  );
};

export default GallerySection;
