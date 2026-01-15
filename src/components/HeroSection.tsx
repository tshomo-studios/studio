import { motion } from "framer-motion";
import heroImage from "@/assets/hero-afrofuture.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Afrofuturistic explorer with binoculars"
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Logo with owl eyes */}
          <div className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="text-foreground">TSH</span>
            <span className="text-primary inline-flex items-center">
              <svg
                viewBox="0 0 80 40"
                fill="currentColor"
                className="h-[0.5em] w-auto"
              >
                <circle cx="16" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="16" cy="20" r="5" fill="currentColor" />
                <circle cx="64" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="64" cy="20" r="5" fill="currentColor" />
                <path d="M30 20 L50 20" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
            <span className="text-foreground">MO</span>
          </div>
          
          <motion.p
            className="font-display text-2xl md:text-4xl font-semibold text-foreground tracking-[0.3em] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            STUDIOS
            <span className="text-muted-foreground text-sm md:text-lg align-super ml-2">™</span>
          </motion.p>
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Afrofuturistic game & animation studio from Johannesburg, South Africa
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-coral-gradient text-primary-foreground rounded-full hover:opacity-90 transition-all hover:scale-105 glow-coral"
          >
            Discover Our Story
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-primary text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
