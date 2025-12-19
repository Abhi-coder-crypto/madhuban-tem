import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import fishTankDining from '@/assets/fish-tank-dining.jpg';

const FishTankSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden water-ripple"
    >
      {/* Water gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-water/10 to-background" />
      
      {/* Animated water glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-water/20 via-transparent to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-water/30"
            style={{
              left: `${10 + i * 8}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, '-100vh'],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-accent text-water text-lg tracking-[0.2em] uppercase mb-4">
              Signature Experience
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Dine Beside
              <br />
              <span className="text-water">Living Waters</span>
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Our spectacular aquarium installations transform your meal into an
              underwater journey. Watch colorful tropical fish glide past as you
              savor each bite, creating a dining experience unlike any other.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Panoramic floor-to-ceiling aquariums',
                'Over 200 species of tropical fish',
                'Custom-designed underwater lighting',
                'Private aquarium booth seating',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-foreground/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-water" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="group inline-flex items-center gap-2 text-water font-display text-lg tracking-wide"
              whileHover={{ x: 10 }}
            >
              Discover More
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.button>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            className="relative"
            style={{ y }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-depth">
              <img
                src={fishTankDining}
                alt="Fish tank dining experience"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Water shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-water/20 via-transparent to-water/10" />
              
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 50%, hsl(var(--water) / 0.2), transparent 50%)',
                    'radial-gradient(circle at 70% 50%, hsl(var(--water) / 0.2), transparent 50%)',
                    'radial-gradient(circle at 30% 50%, hsl(var(--water) / 0.2), transparent 50%)',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-water/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-water/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FishTankSection;
