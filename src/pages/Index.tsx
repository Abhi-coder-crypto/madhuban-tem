import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import FishTankSection from '@/components/FishTankSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FishTankSection />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;
