import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import educacao from "@/assets/sectors/educacional.jpg";
import ambiental from "@/assets/sectors/ambiental.jpg";
import tecnologico from "@/assets/sectors/tecnologia.png";

const sectors = [
  {
    id: 1,
    name: "Educacional",
    description: "Soluções para escolas, universidades.",
    icon: educacao,
    color: "from-primary to-purple-light",
  },
  {
    id: 2,
    name: "Ambiental",
    description: "Plataformas e soluções que contribuem para uma comunidade e saúde melhor.",
    icon: ambiental ,
    color: "from-emerald-500 to-green-400",
  },
  {
    id: 3,
    name: "Tecnológico",
    description: "Sistemas que ajudam a resolver problemas do dia a dia.",
    icon: tecnologico,
    color: "from-secondary to-pink-light",
  },
];

export function SectorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sectores" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sectores que <span className="gradient-text">Atuamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos focados no sector educacional, mas abertos para trazer solução para vários sectores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card border border-border overflow-hidden card-hover">
                {/* Image/Icon Area */}
                <div className={`h-48 bg-gradient-to-br ${sector.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="h-full w-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground) / 0.4) 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }}
                    />
                  </div>
                  <img src={sector.icon} className="w-full h-full text-foreground/90 group-hover:scale-110 transition-transform duration-300 object-cover object-center" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
