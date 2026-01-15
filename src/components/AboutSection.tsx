import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImage from "@/assets/portrait-culture.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden glow-coral">
              <img
                src={portraitImage}
                alt="African cultural portrait"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-coral-gradient rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Stories that shape the next generation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tshomo Studios is a video game and animation production company in Johannesburg, 
              South Africa. We specialise in capturing untold cultures in interactive game 
              and animation compositions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our young-hearted staff is eclectic and fun, and we have the urge to unravel 
              stories of heritage and imagination.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "2019", label: "Founded" },
                { value: "15+", label: "Team Members" },
                { value: "∞", label: "Stories to Tell" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
