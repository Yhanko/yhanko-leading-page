import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Monitor, Map, Trash, GraduationCap, ArrowRight, Check, HandCoins } from "lucide-react"

import gestaoEscolarImg from "@/assets/solutions/yhankoEduca.png";
import webAppsImg from "@/assets/solutions/turismo.png";
import mobileAppsImg from "@/assets/solutions/recolha-lixo.png";
import cloudImg from "@/assets/solutions/change.png";

const products = [
  {
    id: 1,
    name: "YhankoEduca",
    description: "Plataforma completa para gestão educacional com controle de alunos, notas e comunicação.",
    features: ["Gestão de escolar", "Controle de Notas", "Comunicação entre encarregados e docentes."],
    icon: GraduationCap,
    color: "purple",
    image: gestaoEscolarImg,
  },
  {
    id: 2,
    name: "Turismo",
    description: "Plataforma para turismo que junta turistas, entidade turísticas e guias turistas",
    features: ["Turistas que amam explorar Angola, empresas de turiesmos e com guias qualificados."],
    icon: Map,
    color: "green",
    image: webAppsImg,
  },
  {
    id: 3,
    name: "Eco-kitoco",
    description: "Plataforma de recolha de lixo que promove a higiene comunitária, a saúde e bem-estar ambiental.",
    features: ["Uma comunidade limpa, saúdavel contribui para um país mais seguro."],
    icon: Trash,
    color: "primary",
    image: mobileAppsImg,
  },
  {
    id: 4,
    name: "KwanzaConnect",
    description: "Plataforma que une compradores, vendores e casas de câmbio em um só lugar.",
    features: ["Plataforma apropriada para profissionais e não só que ganham  moedas estrangeiras"],
    icon: HandCoins,
    color: "purple",
    image: cloudImg,
  },
];

export function SolutionsSection() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wider uppercase mb-6"
          >
            Portfólio
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Produtos & <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções tecnológicas que transformam negócios e impulsionam resultados
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Product List - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-3"
          >
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.08 }}
                onClick={() => setActiveProduct(product)}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${
                  activeProduct.id === product.id
                    ? "bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 shadow-lg shadow-primary/10"
                    : "bg-card/50 backdrop-blur-sm hover:bg-card border border-transparent hover:border-border"
                }`}
              >
                {/* Active indicator line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ${
                  activeProduct.id === product.id 
                    ? "bg-gradient-to-b from-primary to-secondary" 
                    : "bg-transparent group-hover:bg-muted-foreground/30"
                }`} />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  activeProduct.id === product.id ? "scale-110" : "group-hover:scale-105"
                }`}>
                  <product.icon className="w-6 h-6 text-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <span className={`font-semibold block truncate transition-colors ${
                    activeProduct.id === product.id ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  }`}>
                    {product.name}
                  </span>
                  <span className="text-xs text-muted-foreground truncate block mt-0.5">
                    {product.features.slice(0, 2).join(" • ")}
                  </span>
                </div>
                
                <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                  activeProduct.id === product.id 
                    ? "text-primary translate-x-0 opacity-100" 
                    : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Product Display - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full rounded-3xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden shadow-2xl shadow-primary/5"
              >
                {/* Product Image with overlay */}
                <div className="h-56 md:h-72 relative overflow-hidden group">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={activeProduct.image} 
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeProduct.color} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium">
                      ✨ Premium
                    </span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeProduct.color} flex items-center justify-center`}>
                      <activeProduct.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">{activeProduct.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {activeProduct.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {activeProduct.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-primary" />
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-foreground font-semibold flex items-center justify-center gap-2 group"
                  >
                    Saber Mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}