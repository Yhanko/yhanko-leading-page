import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Client logos
import roseartAtelier from "@/assets/clients/rosarte-logo.png";
import margem from "@/assets/clients/margem.png";
import accao from "@/assets/partners/acao-digital.png";

const clients = [
  { id: 1, name: "RoseArte Ateliê", image: roseartAtelier },
  { id: 2, name: "Margem", image: margem },
  { id: 3, name: "Acão Digital", image: accao },
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clientes" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Confiança
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Empresas que <span className="gradient-text">Confiam</span> em Nós
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Parcerias de sucesso que impulsionam resultados extraordinários
          </p>
        </motion.div>

        {/* Modern client grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
                
                {/* Logo container */}
                <div className="relative h-32 flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="relative z-10 max-w-[180px] max-h-24 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                
                {/* Client name with gradient line */}
                <div className="text-center">
                  <div className="h-px w-16 mx-auto bg-gradient-to-r from-primary to-secondary mb-4" />
                  <h3 className="font-bold text-lg text-foreground">{client.name}</h3>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats or trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "100%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" },
            { value: "5+", label: "Anos de Parceria" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
