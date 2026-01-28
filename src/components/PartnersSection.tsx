import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  "FDF",
  "Educa e Realiza", 
  "Ação Digital",
  "TechVentures",
  "Innovation Hub",
  "Digital Partners",
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parceiros" className="py-16 relative border-t border-border/50">
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

        {/* Partner names in a modern inline style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16"
        >
          {partners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="text-lg md:text-xl font-medium text-muted-foreground/70 hover:text-foreground hover:gradient-text transition-all duration-300 cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtle divider line */}
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
