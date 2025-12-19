import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';

const menuCategories = [
  {
    name: 'Starters',
    description: 'Begin your journey with our forest-inspired appetizers',
    items: ['Wild Mushroom Soup', 'Garden Fresh Salad', 'Crispy Vegetable Rolls'],
    price: 'From ₹299',
  },
  {
    name: 'Main Course',
    description: 'Signature dishes crafted with local, organic ingredients',
    items: ['Forest Herb Paneer', 'Stone-Grilled Vegetables', 'Clay Pot Biryani'],
    price: 'From ₹499',
  },
  {
    name: 'Special Thalis',
    description: 'Complete meal experiences celebrating regional flavors',
    items: ['Madhuvan Grand Thali', 'Forest Feast Thali', 'Garden Delight Thali'],
    price: 'From ₹699',
  },
  {
    name: 'Beverages',
    description: 'Refreshing drinks from nature\'s bounty',
    items: ['Herbal Infusions', 'Fresh Fruit Mocktails', 'Forest Berry Smoothies'],
    price: 'From ₹149',
  },
];

const MenuCard = ({ category, index }: { category: typeof menuCategories[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card rounded-3xl p-6 md:p-8 hover-lift relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-earth/50 to-transparent" />
        </div>

        {/* Hover leaf effect */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
            <path
              fill="currentColor"
              d="M50 0 C25 25, 0 50, 50 100 C100 50, 75 25, 50 0"
            />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors">
              {category.name}
            </h3>
            <span className="text-gold font-display text-lg">{category.price}</span>
          </div>

          <p className="text-foreground/60 text-sm mb-6">
            {category.description}
          </p>

          <ul className="space-y-2">
            {category.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-foreground/80 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom glow on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-accent text-gold text-lg tracking-[0.2em] uppercase mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            A Feast for
            <br />
            <span className="text-accent">All Senses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
            Discover our carefully curated menu featuring organic ingredients
            and traditional recipes with a modern twist.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {menuCategories.map((category, index) => (
            <MenuCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button variant="gold" size="xl">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
