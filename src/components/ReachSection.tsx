import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Twitter } from "lucide-react";

const ReachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", followers: "3K+" },
    { icon: Youtube, label: "YouTube", href: "#", followers: "1.2K+" },
    { icon: Twitter, label: "Twitter", href: "#", followers: "500+" },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Reach
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Building a community
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As humans, we are deeply influenced by the factors that shape our identities. 
              Our goal is to connect with individuals on a personal level and celebrate their 
              uniqueness and cultural backgrounds.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We offer engaging short films depicting relatable characters living everyday lives, 
              shedding light on current societal issues. This approach allows us to interact with 
              our audience, build rapport, and establish long-lasting connections.
            </p>

            {/* Social links */}
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-semibold">{social.label}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                    {social.followers}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Visual cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "bg-primary", label: "Games" },
                { color: "bg-secondary", label: "Films" },
                { color: "bg-terracotta", label: "Animation" },
                { color: "bg-muted", label: "Stories" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`${item.color} aspect-square rounded-3xl flex items-end p-6`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-display font-bold text-xl text-primary-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;
