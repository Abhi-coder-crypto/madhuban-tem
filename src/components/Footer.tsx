import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-background to-transparent" />
      
      {/* Vine illustration */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-foreground mb-4">
              <span className="text-gradient-gold">Madhuvan</span>
              <span className="text-accent"> Greens</span>
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              An immersive forest dining experience where nature meets exceptional cuisine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-card rounded-lg hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5 text-foreground/70" />
              </a>
              <a href="#" className="p-2 glass-card rounded-lg hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5 text-foreground/70" />
              </a>
              <a href="#" className="p-2 glass-card rounded-lg hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {['About Us', 'Experience', 'Menu', 'Gallery', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/60 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Hours</h4>
            <ul className="space-y-3 text-foreground/60 text-sm">
              <li>
                <span className="text-foreground">Lunch</span>
                <br />12:00 PM - 3:30 PM
              </li>
              <li>
                <span className="text-foreground">Dinner</span>
                <br />6:00 PM - 11:00 PM
              </li>
              <li>
                <span className="text-foreground">Sunday Brunch</span>
                <br />10:00 AM - 3:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/60 text-sm">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>123 Forest Lane, Green Valley,<br />Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:hello@madhuvangreens.com" className="hover:text-gold transition-colors">
                  hello@madhuvangreens.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © 2024 Madhuvan Greens. All rights reserved.
          </p>
          <div className="flex gap-6 text-foreground/40 text-sm">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
