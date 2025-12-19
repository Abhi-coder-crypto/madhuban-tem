import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-forest.jpg';

const FloatingLeaf = ({ delay, left, duration }: { delay: number; left: string; duration: number }) => (
  <motion.div
    className="absolute w-4 h-4 pointer-events-none"
    style={{ left }}
    initial={{ y: -100, x: 0, rotate: 0, opacity: 0 }}
    animate={{
      y: ['0vh', '100vh'],
      x: [0, 50, -30, 40, 0],
      rotate: [0, 180, 360, 540, 720],
      opacity: [0, 1, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-accent/60">
      <path
        d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.9 2.7 6.6.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4C4.8 15.9 4 14 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2-.8 3.9-2.1 5.2-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0C21 16.9 22 14.5 22 12c0-5.5-4.5-10-10-10z"
        fill="currentColor"
      />
    </svg>
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img
          src={heroImage}
          alt="Forest dining ambiance"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        {/* Green glow overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      </motion.div>

      {/* Floating leaves particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingLeaf
            key={i}
            delay={i * 2}
            left={`${10 + i * 12}%`}
            duration={12 + Math.random() * 8}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="inline-block font-accent text-lg md:text-xl text-gold tracking-[0.3em] uppercase mb-4">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gradient-gold">Madhuvan</span>
          <br />
          <span className="text-accent">Greens</span>
        </motion.h1>

        <motion.p
          className="font-accent text-xl md:text-2xl lg:text-3xl text-foreground/80 italic mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          "Dine in the Heart of Nature"
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Button variant="hero" size="xl">
            Reserve a Table
          </Button>
          <Button variant="hero-outline" size="xl">
            Explore Experience
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-foreground/60"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-body">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
