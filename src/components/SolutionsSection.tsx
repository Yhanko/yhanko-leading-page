import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Smartphone, Cloud, BarChart3, ShoppingCart, GraduationCap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Yhanko Educa",
    description: "Plataforma completa para gestão educacional com controle de alunos, notas, frequência e comunicação.",
    icon: GraduationCap,
    color: "from-primary to-purple-light",
  },
  {
    id: 2,
    name: "Turismo",
    description: "Desenvolvimento de aplicações web modernas, responsivas e escaláveis com as melhores tecnologias.",
    icon: Monitor,
    color: "from-secondary to-pink-light",
  },
  {
    id: 3,
    name: "Change money",
    description: "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
    icon: Smartphone,
    color: "from-primary to-secondary",
  },
  {
    id: 4,
    name: "keco-kitoco",
    description: "Infraestrutura em nuvem, migração e gerenciamento de serviços cloud.",
    icon: Cloud,
    color: "from-purple-light to-primary",
  },
  {
    id: 5,
    name: "Business Intelligence",
    description: "Análise de dados e dashboards para tomada de decisões estratégicas.",
    icon: BarChart3,
    color: "from-pink-light to-secondary",
  },
  {
    id: 6,
    name: "E-Commerce",
    description: "Lojas virtuais completas com gestão de produtos, pagamentos e logística.",
    icon: ShoppingCart,
    color: "from-secondary to-primary",
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

        <div >
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
                className={`w-full h-12 p-4 border-none bg-transparent text-left transition-all flex items-center gap-4 ${
                  activeProduct.id === product.id
                    ? "bg-transparent hover:cursor-pointer border-b-4 border"
                    : "bg-card hover:bg-muted border-l-4 border-transparent"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <product.icon className="w-5 h-5 text-foreground" />
                </div>
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
              <div className={`h-64 md:h-80 bg-gradient-to-br ${activeProduct.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div 
                    className="h-full w-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground) / 0.3) 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }}
                  />
                </div>
                <activeProduct.icon className="w-24 h-24 text-foreground/80" />
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
