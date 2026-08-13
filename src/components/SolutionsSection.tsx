import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Map, Trash, GraduationCap, ArrowRight, Check, HandCoins } from "lucide-react";
import { Link } from "react-router-dom";

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
    url: "https://school-leadingpage.onrender.com",
  },
  {
    id: 2,
    name: "MoboGo",
    description: "Plataforma para pagamento de táxi",
    features: ["Carteira que facilita a vida de quem gosta de viajar."],
    icon: Map,
    color: "green",
    image: webAppsImg,
    url: "https://mobgo-admin.onrender.com",
  },
  {
    id: 3,
    name: "Eco-kitoco",
    description: "Plataforma de recolha de lixo que promove a higiene comunitária, a saúde e bem-estar ambiental.",
    features: ["Uma comunidade limpa, saúdavel contribui para um país mais seguro."],
    icon: Trash,
    color: "primary",
    image: mobileAppsImg,
    url: "https://volunteer-eco.vercel.app/",
  },
  {
    id: 4,
    name: "KwanzaConnect",
    description: "Plataforma que une compradores, vendores e casas de câmbio em um só lugar.",
    features: ["Plataforma apropriada para profissionais e não só que ganham  moedas estrangeiras"],
    icon: HandCoins,
    color: "purple",
    image: cloudImg,
    url: "https://kwanza-connect-frontend.vercel.app/",
  },
];

export function SolutionsSection() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6"
          >
            Portfólio
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Produtos & <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Soluções tecnológicas que transformam negócios e impulsionam resultados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Product List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1 lg:space-y-0 content-start"
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
                className={`w-full p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl text-left transition-all duration-300 flex items-center gap-3 group relative overflow-hidden ${
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

                <div className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  activeProduct.id === product.id ? "scale-110" : "group-hover:scale-105"
                }`}>
                  <product.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className={`font-semibold text-xs sm:text-sm block truncate transition-colors ${
                    activeProduct.id === product.id ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  }`}>
                    {product.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground truncate block mt-0.5 hidden sm:block">
                    {product.features.slice(0, 1).join(" • ")}
                  </span>
                </div>

                <ArrowRight className={`w-4 h-4 shrink-0 transition-all duration-300 hidden sm:block ${
                  activeProduct.id === product.id
                    ? "text-primary translate-x-0 opacity-100"
                    : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Product Display */}
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
                className="h-full rounded-2xl sm:rounded-3xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden shadow-2xl shadow-primary/5"
              >
                {/* Product Image */}
                <div className="h-44 sm:h-56 md:h-64 lg:h-72 relative overflow-hidden group">
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
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium">
                      ✨
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${activeProduct.color} flex items-center justify-center shrink-0`}>
                      <activeProduct.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex-1 min-w-0 truncate">{activeProduct.name}</h3>
                    <Link
                      to={activeProduct.url}
                      target="_blank"
                      className="ml-auto inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap shrink-0"
                    >
                      <span>Visitar</span>
                    </Link>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
                    {activeProduct.description}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                    {activeProduct.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-muted/50 text-xs sm:text-sm"
                      >
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}