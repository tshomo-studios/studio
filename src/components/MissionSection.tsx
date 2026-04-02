import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import patternImage from "@/assets/pattern-tribal.jpg";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={patternImage.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Coral gradient overlay */}
      <div className="absolute inset-0 bg-coral-gradient opacity-95" />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest">
              Mission Statement
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
              We cultivate an interest in finding stories of untold cultures and find 
              fascinating and interactive ways to tell them.
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 pt-10 border-t border-primary-foreground/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest">
              Vision Statement
            </span>
            <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              To be part of a child's upbringing. We're on a mission to revolutionise 
              the stories that shape the next generation.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="mt-16 p-8 md:p-10 bg-primary-foreground/10 rounded-3xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-primary-foreground font-display italic leading-relaxed">
              "Games with characters, stories, and settings reflecting African experiences 
              empower players, fostering cultural pride and identity."
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
