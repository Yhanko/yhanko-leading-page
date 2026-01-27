import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Smartphone, Cloud, BarChart3, ShoppingCart, GraduationCap } from "lucide-react";
import gestaoEscolarImg from "@/assets/solutions/yhankoEduca.png";
import webAppsImg from "@/assets/solutions/turismo.png";
import mobileAppsImg from "@/assets/solutions/recolha-lixo.png";
import cloudImg from "@/assets/solutions/change.png";

const products = [
  {
    id: 1,
    name: "YhankoEduca",
    description: "Plataforma completa para gestão educacional com controle de alunos, notas e comunicação.",
    icon: GraduationCap,
    color: "from-primary to-purple-light",
    image: gestaoEscolarImg,
  },
  {
    id: 2,
    name: "Turismo",
    description: "Plataforma para turismo que junta turistas, entidade turísticas e guias turistas",
    icon: Monitor,
    color: "from-secondary to-pink-light",
    image: webAppsImg,
  },
  {
    id: 3,
    name: "Eco-kitoco",
    description: "Plataforma de recolha de lixo que promove a higiene comunitária, a saúde e bem-estar ambiental.",
    icon: Smartphone,
    color: "from-primary to-secondary",
    image: mobileAppsImg,
  },
  {
    id: 4,
    name: "KwanzaConnect",
    description: "Plataforma que une compradores, vendores e casas de câmbio em um só lugar.",
    icon: Cloud,
    color: "from-purple-light to-primary",
    image: cloudImg,
  },
];

export function SolutionsSection() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
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
          {/* Product List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-x-2 flex overflow-x-auto mb-10 lg:mb-0 lg:space-x-0 lg:flex lg:gap-4 lg:overflow-x-auto lg:col-span-1"
          >
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveProduct(product)}
                className={`w-full h-12 p-4 border hover:border-b-2 border-r-0 border-l-0 border-t-0 bg-transparent text-left transition-all flex items-center gap-4 mb-10${
                  activeProduct.id === product.id
                    ? "bg-transparent hover:cursor-pointer border-b-4 border"
                    : "bg-card hover:bg-muted border-l-4 border-transparent"
                }`}
              >
                <span className="font-medium">{product.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Product Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-2xl bg-card border border-border overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="h-[60rem] md:h-[40rem] relative overflow-hidden">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeProduct.color} opacity-20`} />
              </div>
              
              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{activeProduct.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
