import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Fish, Mountain, Lightbulb } from 'lucide-react';
import forestInterior from '@/assets/forest-interior.jpg';
import fishTankDining from '@/assets/fish-tank-dining.jpg';
import stoneInterior from '@/assets/stone-interior.jpg';

const experiences = [
  {
    icon: Leaf,
    title: 'Forest Interiors',
    description: 'Immerse yourself in a lush green paradise with hanging plants, vines, and natural foliage surrounding every table.',
    image: forestInterior,
  },
  {
    icon: Fish,
    title: 'Fish Tank Dining',
    description: 'Dine beside mesmerizing aquariums filled with tropical fish, creating a serene underwater atmosphere.',
    image: fishTankDining,
  },
  {
    icon: Mountain,
    title: 'Stone & Cave Walls',
    description: 'Natural rock formations and cave-like architecture transport you to a mystical forest grotto.',
    image: stoneInterior,
  },
  {
    icon: Lightbulb,
    title: 'Ambient Lighting',
    description: 'Warm, carefully designed lighting creates an intimate atmosphere that shifts with the time of day.',
    image: forestInterior,
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="glass-card rounded-3xl overflow-hidden hover-lift cursor-pointer">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Icon */}
          <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30">
            <experience.icon className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
            {experience.title}
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--gold)/0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-accent text-gold text-lg tracking-[0.2em] uppercase mb-4">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Forest Dining
            <br />
            <span className="text-accent">Redefined</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
            Every corner of Madhuvan Greens tells a story of nature's beauty,
            crafted to create unforgettable dining moments.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
