import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import forestInterior from '@/assets/forest-interior.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block font-accent text-gold text-lg tracking-[0.2em] uppercase mb-4">
              Our Story
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Where Nature
              <br />
              <span className="text-accent">Meets Cuisine</span>
            </h2>

            <div className="space-y-6 text-foreground/70 font-body text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-accent text-xl italic text-foreground/90"
              >
                "A place where stone walls breathe,
                <br />
                water whispers, and food becomes an experience."
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Nestled amidst lush greenery, Madhuvan Greens offers a unique
                dining sanctuary where every meal is an immersive journey through
                nature's embrace.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our forest-themed interiors, natural stone architecture, and
                mesmerizing aquarium installations create an ambiance that
                transcends ordinary dining into an extraordinary experience.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div>
                <span className="block font-display text-3xl md:text-4xl text-gold">15+</span>
                <span className="text-foreground/60 text-sm uppercase tracking-wide">Years</span>
              </div>
              <div>
                <span className="block font-display text-3xl md:text-4xl text-gold">50K+</span>
                <span className="text-foreground/60 text-sm uppercase tracking-wide">Happy Guests</span>
              </div>
              <div>
                <span className="block font-display text-3xl md:text-4xl text-gold">100+</span>
                <span className="text-foreground/60 text-sm uppercase tracking-wide">Dishes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image with organic shape */}
          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl transform -rotate-3" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-depth">
                <img
                  src={forestInterior}
                  alt="Forest interior dining"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-gold font-display text-2xl">★ 4.9</span>
                <span className="block text-foreground/60 text-sm">Guest Rating</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
