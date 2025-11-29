import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";

export function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ServicesOverview />
      <FeaturedGallery />
      <AboutSection />
    </div>
  );
}
