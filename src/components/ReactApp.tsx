import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ReachSection from "@/components/ReachSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const queryClient = new QueryClient();

const ReactApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default ReactApp;
