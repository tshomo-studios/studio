import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";

const FooterLogo = () => (
  <div className="font-display text-2xl font-bold tracking-tight">
    <span className="text-foreground">TSH</span>
    <span className="text-primary inline-flex items-center">
      <svg
        viewBox="0 0 60 30"
        fill="currentColor"
        className="h-[0.45em] w-auto"
      >
        <circle cx="12" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="15" r="4" fill="currentColor" />
        <circle cx="48" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="48" cy="15" r="4" fill="currentColor" />
        <path d="M22 15 L38 15" stroke="currentColor" strokeWidth="3" />
      </svg>
    </span>
    <span className="text-foreground">MO</span>
  </div>
);

const FooterSection = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/_tshomostudios" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    // { icon: Mail, label: "Email", href: "mailto:hello@tshomostudios.com" },
  ];

  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <FooterLogo />
            <p className="text-muted-foreground text-sm">
              Johannesburg, South Africa
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 TSHOMO Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
