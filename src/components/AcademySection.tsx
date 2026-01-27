import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Brain } from "lucide-react";
import bannerAcademia from "@/assets/banner_academia_yhanko.png";

export function AcademySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academia" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Educação
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Academia da <span className="gradient-text">Yhanko</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Academia Yhanko é um espaço de formação prática e direcionada para quem deseja ingressar ou evoluir na área de programação e tecnologia — e também para quem busca desenvolver habilidades essenciais para o mercado de trabalho como um todo.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold gradient-text">10+</span>
                <p className="text-xs text-muted-foreground mt-1">Desafios</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-2xl font-bold gradient-text">3+</span>
                <p className="text-xs text-muted-foreground mt-1">Alunos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold gradient-text">99%</span>
                <p className="text-xs text-muted-foreground mt-1">Prática</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-foreground font-semibold glow-effect"
            >
              100% Online no Discord
            </motion.button>
          </motion.div>

          {/* Right Banner */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
              <div className="rounded-xl bg-card overflow-hidden">
                <div className="h-72 md:h-96 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                  {/* Pattern Overlay */}
                   <img 
                    src={bannerAcademia} 
                    alt="Academia Yhanko - Venha fazer parte da nossa academia"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-8 right-8 px-4 py-2 rounded-full bg-card/90 backdrop-blur text-sm font-medium"
                  >
                    Reuniões Online
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute bottom-8 left-8 px-4 py-2 rounded-full bg-card/90 backdrop-blur text-sm font-medium"
                  >
                    🎓 Conhecimento
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
