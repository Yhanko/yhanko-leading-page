import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Smartphone, Cloud, BarChart3, ShoppingCart, GraduationCap } from "lucide-react";
import team from "@/assets/team/team.png";

export function TeamYhanko() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Produtos & <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clique em um produto para ver mais detalhes
          </p>
        </motion.div>

        <div>

          {/* Product Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-2xl bg-card border border-border overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="h-[60rem] md:h-[40rem] relative overflow-hidden">
                <img 
                  src={team} 
                  alt="Team yhanko"
                  className="w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-20`} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}