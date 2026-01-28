import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  "FDF",
  "Educa e Realiza", 
  "Ação Digital",
  "TechVentures",
  "Innovation Hub",
  "Digital Partners",
  "CloudTech",
  "DataFlow",
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="parceiros" className="py-16 relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-muted-foreground text-sm tracking-wider uppercase">
            Trabalhamos com os melhores
          </span>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee-left">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/50 hover:text-foreground hover:gradient-text transition-all duration-300 cursor-default whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-marquee-right mt-6">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground/40 hover:text-foreground hover:gradient-text transition-all duration-300 cursor-default whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Subtle divider line */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
}