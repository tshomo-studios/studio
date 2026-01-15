import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ReachSection from "@/components/ReachSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ReachSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
