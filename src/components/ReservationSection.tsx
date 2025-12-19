import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Calendar, Clock, Users } from 'lucide-react';

const ReservationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation:', formData);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-background" />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-gold/20 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-accent/20 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-accent text-gold text-lg tracking-[0.2em] uppercase mb-4">
              Reserve Your Table
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Book Your
              <br />
              <span className="text-accent">Forest Escape</span>
            </h2>
            <p className="max-w-xl mx-auto text-foreground/60 text-lg">
              Secure your spot in nature's embrace. Tables fill quickly—reserve yours today.
            </p>
          </motion.div>

          {/* Reservation Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Date */}
              <div className="relative">
                <label className="block text-foreground/60 text-sm mb-2 uppercase tracking-wide">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/60" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Time */}
              <div className="relative">
                <label className="block text-foreground/60 text-sm mb-2 uppercase tracking-wide">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/60" />
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-foreground/60 text-sm mb-2 uppercase tracking-wide">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/60" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="10+">Large Party (10+)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-foreground/60 text-sm mb-2 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-foreground/60 text-sm mb-2 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" variant="gold" size="xl" className="min-w-[200px]">
                Book Now
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
