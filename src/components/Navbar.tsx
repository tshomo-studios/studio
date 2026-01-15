import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offsetTop - 80, // Account for fixed navbar
      behavior: "smooth",
    });
  }
};

const NavLogo = () => (
  <div className="font-display text-xl md:text-2xl font-bold tracking-tight">
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 14, 13, 0)", "rgba(15, 14, 13, 0.95)"]
  );

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="z-50">
          <NavLogo />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu */}
        <motion.div
          className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                scrollToSection(e, link.href);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-lg"
            onClick={(e) => {
              scrollToSection(e, "#contact");
              setIsOpen(false);
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
